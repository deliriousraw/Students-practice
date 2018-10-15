<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <FacultySelect />
        <DepartmentsSelect /> 
        <PracticeDates @changeStart="startDate = $event"
                       @changefinish="finishDate = $event" />
        <StudentsPracticeTable :data="students" />
        <el-button type="primary" @click="showPreview = !showPreview">Попередній перегляд</el-button>
        <StudentsTable v-if="showPreview" :startDate="startDate" 
                       :finishDate="finishDate"/>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import StudentsTable from './components/StudentsTable.vue';
import PracticeDates from './components/PracticeDates.vue';
import FacultySelect from './components/FacultySelect.vue';
import DepartmentsSelect from './components/DepartmentsSelect.vue';
import StudentsPracticeTable from './components/StudentsPracticeTable.vue';

export default {
  name: 'app',
  components: {
    StudentsTable,
    PracticeDates,
    FacultySelect,
    DepartmentsSelect,
    StudentsPracticeTable
  },
  data () {
    return {
      startDate: new Date(),
      finishDate: new Date(),
      showPreview: false,
      students: [{
          lastname: 'Веремієнко',
          firstname: 'Вадим',
          surname: 'Миколайович',
          studyForm: 'бюджет',
          practiceDuration: '3',
          practicePlace: 'Інформаційний обчислювальний центр',
          practiceLeader: 'Федін С.С.',
          practieStatus: 'Пройшов'
        },
        {
          lastname: 'Веремієнко',
          firstname: 'Вадим',
          surname: 'Миколайович',
          studyForm: 'бюджет',
          practiceDuration: '3',
          practicePlace: 'Інформаційний обчислювальний центр',
          practiceLeader: 'Федін С.С.',
          practieStatus: 'Пройшов'
        },
        {
          lastname: 'Веремієнко',
          firstname: 'Вадим',
          surname: 'Миколайович',
          studyForm: 'бюджет',
          practiceDuration: '3',
          practicePlace: 'Інформаційний обчислювальний центр',
          practiceLeader: 'Федін С.С.',
          practieStatus: 'Пройшов'
        },
        {
          lastname: 'Веремієнко',
          firstname: 'Вадим',
          surname: 'Миколайович',
          studyForm: 'бюджет',
          practiceDuration: '3',
          practicePlace: 'Інформаційний обчислювальний центр',
          practiceLeader: 'Федін С.С.',
          practieStatus: 'Пройшов'
        },
        {
          lastname: 'Веремієнко',
          firstname: 'Вадим',
          surname: 'Миколайович',
          studyForm: 'бюджет',
          practiceDuration: '3',
          practicePlace: 'Інформаційний обчислювальний центр',
          practiceLeader: 'Федін С.С.',
          practieStatus: 'Пройшов'
        },
        {
          lastname: 'Веремієнко',
          firstname: 'Вадим',
          surname: 'Миколайович',
          studyForm: 'бюджет',
          practiceDuration: '3',
          practicePlace: 'Інформаційний обчислювальний центр',
          practiceLeader: 'Федін С.С.',
          practieStatus: 'Пройшов'
        },
        {
          lastname: 'Веремієнко',
          firstname: 'Вадим',
          surname: 'Миколайович',
          studyForm: 'бюджет',
          practiceDuration: '3',
          practicePlace: 'Інформаційний обчислювальний центр',
          practiceLeader: 'Федін С.С.',
          practieStatus: 'Пройшов'
        }
        ],
    }
  }
};
</script>

 <style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
