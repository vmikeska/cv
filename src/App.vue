<template src="./app.html"></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";
import Chart from "chart.js";
import { PieChart } from "./pie-chart";
import Tech from "./components/tech/tech.vue";
import { texts, technos, companies, projects, languages } from "./data";
import { CompanyView, ProjectView } from "./ints";
import _ from "lodash";

@Component({
  components: {
    Tech
  }
})
export default class App extends Vue {
  public created() {
    this.mapCompanies();
    this.mapProjects();
  }

  public mounted() {
    const pieChart = new PieChart();
    pieChart.init();
  }

  public companies!: CompanyView[];
  public projects!: ProjectView[];

  public get texts() {
    return texts;
  }

  public get techno1() {
    return technos.filter(i => {
      return i.knowledge === 1;
    });
  }

  public get techno2() {
    return technos.filter(i => {
      return i.knowledge === 2;
    });
  }

  public get techno3() {
    return technos.filter(i => {
      return i.knowledge === 3;
    });
  }

  public get languages() {
    return languages;
  }

  private mapCompanies() {
    this.companies = companies.map(c => {
      const ps = projects.filter(p => {
        return p.projectGroup === c.group;
      });

      const yearStart = _.min(
        ps.map(p => {
          return p.startYear;
        })
      );
      const yearEnd = _.max(
        ps.map(p => {
          return p.endYear;
        })
      );

      const cities = ps.flatMap(i => {
        return i.locations;
      });

      const citiesUnique = _.uniq(cities);

      const citiesStr = citiesUnique.join(", ");

      const companies = _.uniq(
        ps.map(i => {
          return i.company;
        })
      );

      const cv: CompanyView = {
        companyGroup: c,
        yearStart,
        yearEnd,
        citiesStr,
        companies
      };

      return cv;
    });
  }

  private mapProjects() {
    this.projects = projects.map(p => {
      const comp = companies.find(c => {
        return c.group === p.projectGroup;
      });
      const vm: ProjectView = {
        proj: p,
        companyName: comp.company,
        img: require(`./assets/companies/${p.logo}`),
        locs: p.locations.join(", ")
      };

      return vm;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./app.scss"></style>
