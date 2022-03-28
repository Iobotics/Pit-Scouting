var config_data = `
{
  "title":"Pit Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022cave",
        "required":"true",
        "disabled":"true"
      },
      
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Width":{
        "code": "rw",
        "title": "robot width(in)",
        "type": "counter"
      },
      "Length":{
        "code": "rw",
        "title": "robot length(in)",
        "type": "counter"
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Number of autos":{
      "code":"na",
      "title": "How many auto paths?",
      "type":"counter"
      },
      "Taxi": {
        "code":"at",
        "title": "Can they taxi?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"ac",
        "title": "How many cargo aquired?",
        "type":"counter"
      },
      "Cargo Intake From": {
        "code":"cif",
        "title": "Cargo Intake From",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
    },
    "teleop": {
      "Cargo Intake": {
        "code":"ci",
        "title": "Cargo Intaken",
        "type":"radio"
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue": "x"
      },
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Approximat Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Approximate Lower Cargo Scored",
        "type":"counter"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense?",
        "type":"bool"
      },
      "Wallbot?": {
        "code":"wbt",
        "title": "Wallbot?",
        "type":"bool"
      },
         
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {  
      "Climb Time": {
        "code":"ct",
        "title":"How long it takes to climb?",
        "type":"counter"
      },   
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "x":"Don't Climb"
        },
        "defaultValue":"x"
      },
     
      "Climb with others": {
        "code":"cn",
        "title": "Can they climb with others?",
        "type":"bool"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Died/Tipped": {
        "code":"d",
        "title": "Dying/Tipping issues?",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"all",
        "title": "Make good alliance partner?(easy to work with)",
        "type":"bool"
      },
      "Mechanical Issues": {
        "code":"mi",
        "title": "mechanical issues",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
    }
  }
}`;
