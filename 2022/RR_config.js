var config_data = `
{
  "title":"Scouting PASS 2022",
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
        "defaultValue":"2022cada",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
      
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Weight":{
        "code":"rw",
        "type":"match",
        "title": "robot weight",
        "min":1,
        "max":120,
        "required":"true"
      },
      "length":{
        "code":"rw",
        "type":"match",
        "title": "length",
        "min":1,
        "max":120,
        "required":"true"
      },
      "width":{
        "code":"rw",
        "type":"match",
        "title": "width",
        "min":1,
        "max":120,
        "required":"true"
      },
      "blue 1?": {
        "code":"bo",
        "title": "blue 1?",
        "type":"bool"
      },
      "blue 2?": {
        "code":"bt",
        "title": "blue 2?",
        "type":"bool"
      },
      "blue 3?": {
        "code":"bth",
        "title": "blue 3",
        "type":"bool"
      },
      "blue 4?": {
        "code":"bf",
        "title": "blue 4?",
        "type":"bool"
      },
      "blue 5?": {
        "code":"bfi",
        "title": "blue 5?",
        "type":"bool"
      },
      "blue 6?": {
        "code":"bs",
        "title": "blue 6",
        "type":"bool"
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/auto_field.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Can they taxi?",
        "type":"bool"
      },
      "Number of autos":{
      "code":"na",
      "title": "How many auto paths?",
      "type":"counter"
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
      "Cargo Intake": {
        "code":"ac",
        "title": "Auto Intake",
        "type":"counter"
      },
      "Cargo Intake From": {
        "code":"acf",
        "title": "Cargo Intake From",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Approximate Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Approximte Lower Cargo Scored",
        "type":"counter"
      },
      "Plays Defense": {
        "code":"wd",
        "title": "Plays Defense",
        "type":"bool"
      },
      "Wallbot?": {
        "code":"wbt",
        "title": "Wallbot?",
        "type":"bool"
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
      "Climb time": {
        "code":"ct",
        "title":"Time to climb",
        "type":"text"
      }
    },
    "endgame": {     
      "Climb level": {
        "code":"cl",
        "title":"Possible Climb level",
        "type":"counter"
      },
      "Climb Time": {
        "code":"ct",
        "title":"How long it takes to climb?",
        "type":"counter"
      },   
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "Can climb with other robots?",
        "type":"counter"
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
        "title": "Mechanical issues?(Died/Tipped)",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"all",
        "title": "Make good alliance partner?",
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
      }
    }
  }
}`;
