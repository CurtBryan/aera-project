import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  persons: [
    {
      name: "Chalex, Nancy B.",
      displayName: "Nancy B. Chalex",
      company: "Benchmark Education",
      location: "Scottsdale, AZ",
      phone: "480-292-2732",
      fax: "N/A",
      email: "chalexn@cox.net",
      territory: "Arizona",
      link: "https://benchmarkeducation.com/",
      image: "https://imgur.com/vaJKZDW.png",
      services: [
        "K-12 Core and Supplemental Reading and Writing; Leveled books, Professional Development; Ebooks, online resources.",
        "Customized support also includes resources from Stenhouse, Mondo Publishing, Collaborative Classroom, Newmark Learning, and Okapi Educational Publishing"
      ]
    },
    {
      name: "Cloud, Dick",
      displayName: "Dick Cloud",
      company: "Cloud Associates/Publishing",
      location: "P O Box 39016 Phoenix, AZ 85069",
      phone: "602-694-0301",
      fax: "602-942-0557",
      email: "cloudassociates@aol.com",
      territory: "Arizona",
      link: "http://www.cloudedu.com/",
      image: "https://imgur.com/2oaQ5mq.png",
      services: [
        "k-12-",
        "Bullying intervention “Hallway Heros”, ELL Oral Language and Vocabulary Intervention, “Discussion 4 Learning” Arizona History, Arizona Government, eTextbooks",
        "Arizona history, Arizona government, Arizona map and Arizona Native American programs",
        "eBook texts of latest editions",
        "Hallway Heros - Anti Bullying Program",
        "Discussion 4 Learning - Accelerates students academic vocabulary"
      ]
    },
    {
      name: "Combe, Tawnya",
      displayName: "Tawnya Combe",
      company: "Combe Education Group",
      location: "Gilbert, AZ 85295",
      phone: "602-909-7127",
      fax: "480-785-0055",
      email: "mrscombe@msn.com",
      territory: "Arizona",
      link: "N/A",
      image: "https://imgur.com/Lj9cyad.png",
      services: [
        "K-12",
        "Mathematics, Reading/Language, Media/Library, Science, Social Studies, Special Education, Technology, ESL, Intervention, Educational Technology"
      ]
    },
    {
      name: "Courvisier, Todd",
      displayName: "Todd Courvisier",
      company: "Spinitar",
      location: "632 E. Raven Way Gilbert, AZ 85297",
      phone: "602-499-1781",
      fax: "N/A",
      email: "toddc@splinitar.com",
      territory: "Arizona, Nevada",
      link: "N/A",
      image: "N/A",
      services: []
    },
    {
      name: "Feuerbacher, Jayne",
      displayName: "Jayne Feuerbacher",
      company: "Pearson",
      location: "10885 E. Butherus Scottsdale, AZ 85255",
      phone: "602-312-7057",
      fax: "602-391-2293",
      email: "jayne.feuerbacher@pearson.com",
      territory: "Arizona",
      link: "www.pearson.com",
      image: "https://imgur.com/LyorMYt.png",
      services: [
        "Basal products for the K-12 school markets including math, reading, social studies, science, music, arts, etc and intervention products as well as technology."
      ]
    },
    {
      name: "Gearhart, Thomas",
      displayName: "Thomas Gearhart",
      company: "Amplify Learning",
      location: "2470 W Hemlock Way Chandler, AZ 85248",
      phone: "505-681-6883",
      fax: "N/A",
      email: "N/A",
      territory: "Arizona",
      link: "www.amplify.com",
      image: "https://imgur.com/PvcoCaw.png",
      services: [
        "Prek-12- Mathematics, Reading/Language, Media/Library, Science, Special Education, Technology, Tests/TestPrep, Professional Development, ESL, Intervention, Assessment, Educational Technology."
      ]
    },
    {
      name: "Job, Barbara",
      displayName: "Barbara Job",
      company: "Learning A-Z",
      location: "4311 E Bighorn Ave. Phoenix, AZ 85044",
      phone: "480-375-1525",
      fax: "520-618-3740",
      email: "barbara.job@learninga-z.com",
      territory: "Arizona",
      link: "http://learninga-z.com/",
      image: "https://imgur.com/RaFT94n.png",
      services: ["online materials for differentiated instruction."]
    },
    {
      name: "McMath, Robin",
      displayName: "Robin McMath",
      company: "Curriculum Associates",
      location: "5902 E. Ocupado Drive Cave Creek, AZ 85331",
      phone: "480.272.0491",
      fax: "800.787.7103",
      email: "RMcMath@cainc.com",
      territory: "Arizona, Nevada, New Mexico",
      link: "http://curriculumassociates.com/",
      image: "https://imgur.com/Dngo4K0.png",
      services: [
        "Supplemental products for K-12 including BRIGANCE Early Childhood and Special Education inventories, i-Ready Diagnostic and Instruction K-12 and Ready Common Core"
      ]
    },
    {
      name: "Peters, Kim",
      displayName: "Kim Peters",
      company: "School Specialty",
      location: "Chandler, AZ 85249",
      phone: "602.757.2575",
      fax: "N/A",
      email: "kim.peters@cox.net",
      territory: "Arizona",
      link: "https://www.schoolspecialty.com/",
      image: "https://imgur.com/tj5n8oA.png",
      services: [
        "Gr. K-12",
        "Mathematics, Reading/Language, Science, Social Studies, Technology, Tests/Test Prep, Professional Development, Intervention, Assessment, Educational Technology"
      ]
    },
    {
      name: "Peters, Brad",
      displayName: "Brad Peters",
      company: "AERA",
      location: "Phoenix, AZ",
      phone: "602-757-7529",
      fax: "N/A",
      email: "brad.peters@cox.net",
      territory: "U.S.",
      link: "https://aerassoc.com",
      image: "https://imgur.com/yHHptX6.png",
      services: ["Educational Materials"]
    },
    {
      name: "Stagliano, Anne",
      displayName: "Anne Stagliano",
      company: "McGraw-Hill Education",
      location: "12551 W. Alegre Drive Litchfield Park, AZ 85340",
      phone: "602-980-0599",
      fax: "623-327-0266",
      email: "anne.stagliano@mheducation.com",
      territory: "Arizona",
      link: "http://www.mheonline.com/",
      image: "https://imgur.com/Ar4P6ye.png",
      services: [
        "Pre-K 12, K-5 Core Programs, Mathematics, Reading/Language, Science, Social Studies, Special Education, Technology, Art, Tests/Test Prep, Health, Professional Development, Learning Management, ESL, Intervention, Assessment, Educational Technology"
      ]
    },
    {
      name: "Sykes, Larissa",
      displayName: "Larissa Sykes",
      company: "McGraw-Hill Education",
      location: "8787 Orion Place Columbus, OH 43240",
      phone: "602.315.9102",
      fax: "480-323-2692",
      email: "larissa.sykes@mheducation.com",
      territory: "Arizona",
      link: "www.odysseyware.com",
      image: "https://imgur.com/Ar4P6ye.png",
      services: [
        "K-5/6",
        "Foreign Language, Mathematics, Reading/Language, Science, Social Studies, Special Education, Technology, Art, Health, Professional Development, Intervention, Assessment, Educational Technology"
      ]
    },
    {
      name: "West, Matt",
      displayName: "Matt West",
      company: "Backbone Communications",
      location: "945 N. Balboa Ct. Gilbert, AZ 85234",
      phone: "602.349.3693",
      fax: "N/A",
      email: "matt@backbonecommunications.com",
      territory: "Arizona, New Mexico, Nevada, Utah, California",
      link: "http://www.backbonecommunications.com/",
      image: "https://imgur.com/mBWBry6.png",
      services: [
        "K-Adult",
        "Foreign Language, Mathematics, Reading/Language, Media/Library, Science, Social Studies, Special Education, Technology, Tests/Test Prep, Health, Professional Development, Adult Education, Learning Management, ESL, Intervention, Assessment, Educational Technology."
      ]
    },
    {
      name: "Whittaker, Kendra",
      displayName: "Kendra Whittaker",
      company: "Cambridge University Press",
      location: "1 Liberty Plaza Floor 20, Ney York, NY 10006",
      phone:
        "(800) 872-7423 / (800)-ESL-BUZZ / [Toll-Free:] (855) 778-1134 / [Mobile:] (347) 963-6936",
      fax: "N/A",
      email: "kwhittaker@cambridge.org",
      territory: "Arizona",
      link: "www.cambridge.org",
      image: "https://imgur.com/N5Su2QH.png",
      services: [
        "K-12, Adult ESL and Higher Education. Foreign Language, Mathematics, Reading/Language, Media/Library, Science, Social Studies, Technology, Business, Tests/TestPrep, Professional Development"
      ]
    },
    {
      name: "Yocum, Randy",
      displayName: "Randy Yocum",
      company: "Empower Educational Consulting",
      location: "538 E Mead Place Chandler, AZ 85249",
      phone: "480.347.5051",
      fax: "480.306.5607",
      email: "Randyyocum.empower@gmail.com",
      territory: "Arizona",
      link: "http://www.empowerec.com/",
      image: "https://imgur.com/B38uHYg.png",
      services: []
    }
  ]
};

export default new Vuex.Store({
  state
});
