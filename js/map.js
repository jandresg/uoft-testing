$(function () {
      $(".mapcontainer").mapael({
        map: {
          name: "world_countries_miller",
          defaultArea: {
            attrs: {
              stroke: "#fff", "stroke-width": .5,
              fill: "#CECFCB"
            },
            attrsHover: {
              "stroke-width": 1,
              fill: "#CECFCB"
            }
          }
        },
      <!-- legend area -->
      legend: {
        area: {
          title: "Totalhips for 2017",
          slices: [
            {
              max: 1,
              attrs: {
                fill: "#002a5c"
              },
              attrsHover: {
                fill: "#008bb0"
              },
              label: "yes Total"
            },
            {
              <!-- NO Total -->
              min: 0,
              attrs: {
                fill: "#CECFCB"
              },
              attrsHover: {
                fill: "#CECFCB"
              },
              label: "no Total"
            }
          ]
        }
      },
      areas: {
	      
/*
	    "GA": {
		  value: "0"
        },
        "FO": {
          value: "0"
        },
        "UM": {
          value: "0"
        },
        "SC": {
          value: "0"
        },
        "FM": {
          value: "0"
        },
        "SH": {
          value: "0"
        },
        "KI": {
          value: "0"
        },
        "BU": {
          value: "0"
        },
        "MV": {
          value: "0"
        },
        "AS": {
          value: "0"
        },
        "DK": {
          value: "0"
        },
        "GL": {
          value: "0"
        },
        "GU": {
          value: "0"
        },
        "MP": {
          value: "0"
        },
        "PR": {
          value: "0"
        },
        "VI": {
          value: "0"
        },
        "ST": {
          value: "0"
        },
        "CV": {
          value: "0"
        },
        "DM": {
          value: "0"
        },
        "WS": {
          value: "0"
        },
        "VC": {
          value: "0"
        },
        "NR": {
          value: "0"
        },
        "NO": {
          value: "0"
        },
        "KN": {
          value: "0"
        },
        "BH": {
          value: "0"
        },
        "TO": {
          value: "0"
        },
        "ID": {
          value: "0"
        },
        "MU": {
          value: "0"
        },
        "SE": {
          value: "0"
        },
        "TT": {
          value: "0"
        },
        "PA": {
          value: "0"
        },
        "PW": {
          value: "0"
        },
        "TV": {
          value: "0"
        },
        "MH": {
          value: "0"
        },
        "CL": {
          value: "0"
        },
        "GD": {
          value: "0"
        },
        "EE": {
          value: "0"
        },
        "TW": {
          value: "0"
        },
        "BB": {
          value: "0"
        },
        "MT": {
          value: "0"
        },
        "VU": {
          value: "0"
        },
        "CY": {
          value: "0"
        },
        "KM": {
          value: "0"
        },
        "FJ": {
          value: "0"
        },
        "RU": {
          value: "0"
        },
        "VA": {
          value: "0"
        },
        "SM": {
          value: "0"
        },
        "KZ": {
          value: "0"
        },
        "AZ": {
          value: "0"
        },
        "TJ": {
          value: "0"
        },
        "LS": {
          value: "0"
        },
        "UZ": {
          value: "0"
        },
        "MA": {
          value: "0"
        },
         "TL": {
          value: "0"
        },
        "TZ": {
          value: "0"
        },
        "KE": {
          value: "0"
        },
        "PE": {
          value: "0"
        },
        "DO": {
          value: "0"
        },
        "HT": {
          value: "0"
        },
        "PG": {
          value: "0"
        },
        "AO": {
          value: "0"
        },
        "KH": {
          value: "0"
        },
        "VN": {
          value: "0"
        },
        "MZ": {
          value: "0"
        },
        "BJ": {
          value: "0"
        },
        "SV": {
          value: "0"
        },
        "SL": {
          value: "0"
        },
        "GW": {
          value: "0"
        },
        "HR": {
          value: "0"
        },
        "BZ": {
          value: "0"
        },
        "ZA": {
          value: "0"
        },
        "CF": {
          value: "0"
        },
        "CD": {
            value: "0"
        },
         "KP": {
          value: "0"
        },
        "GY": {
          value: "0"
        },
        "HN": {
          value: "0"
        },
        "GA": {
          value: "0"
        },
        "GQ": {
          value: "0"
        },
        "NI": {
          value: "0"
        },
        "LV": {
          value: "0"
        },
        "UG": {
          value: "0"
        },
        "MW": {
          value: "0"
        },
        "AM": {
          value: "0"
        },
        "SX": {
          value: "0"
        },
        "TM": {
          value: "0"
        },
        "ZM": {
          value: "0"
        },
        "NC": {
          value: "0"
        },
        "MR": {
          value: "0"
        },
        "LT": {
          value: "0"
        },
        "ET": {
          value: "0"
        },
        "ER": {
          value: "0"
        },
        "GH": {
          value: "0"
        },
        "GT": {
          value: "0"
        },
        "BA": {
          value: "0"
        },
        "MC": {
          value: "0"
        },
        "AL": {
          value: "0"
        },
        "UY": {
          value: "0"
        },
        "CNM": {
          value: "0"
        },
        "MN": {
          value: "0"
        },
        "RW": {
          value: "0"
        },
        "SO": {
          value: "0"
        },
        "BO": {
          value: "0"
        },
        "CM": {
          value: "0"
        },
        "CG": {
          value: "0"
        },
        "EH": {
          value: "0"
        },
        "ME": {
          value: "0"
        },
        "TG": {
          value: "0"
        },
        "LA": {
          value: "0"
        },
        "AF": {
          value: "0"
        },
        "UA": {
          value: "0"
        },
        "SK": {
          value: "0"
        },
        "JK": {
          value: "0"
        },
        "BG": {
          value: "0"
        },
        "QA": {
          value: "0"
        },
        "LI": {
          value: "0"
        },
        "SZ": {
          value: "0"
        },
        "HU": {
          value: "0"
        },
        "LU": {
          value: "0"
        },
        "AD": {
          value: "0"
        },
        "CI": {
          value: "0"
        },
        "LR": {
          value: "0"
        },
        "BN": {
          value: "0"
        },
        "GE": {
          value: "0"
        },
        "GM": {
          value: "0"
        },
        "TD": {
          value: "0"
        },
        "KV": {
          value: "0"
        },
        "DJ": {
          value: "0"
        },
        "BI": {
          value: "0"
        },
        "SR": {
          value: "0"
        },
        "ML": {
          value: "0"
        },
        "SN": {
          value: "0"
        },
        "GN": {
          value: "0"
        },
        "ZW": {
          value: "0"
        },
        "PL": {
          value: "0"
        },
        "PY": {
          value: "0"
        },
        "BY": {
          value: "0"
        },
        "CZ": {
          value: "0"
        },
        "BF": {
          value: "0"
        },
        "NA": {
          value: "0"
        },
        "TN": {
          value: "0"
        },
        "BT": {
          value: "0"
        },
        "MD": {
          value: "0"
        },
        "SS": {
          value: "0"
        },
        "BW": {
          value: "0"
        },
        "BS": {
          value: "0"
        },
        "CU": {
          value: "0"
        },
        "EC": {
          value: "0"
        },
        "VE": {
          value: "0"
        },
        "SB": {
          value: "0"
        },
        "MG": {
          value: "0"
        },
        "IS": {
          value: "0"
        },
        "KG": {
          value: "0"
        },
*/
        "US": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight: bold;\">United States<br />Total : 8</span><span style=\"margin-left:40px;\"><br />Adult Cardiology (2)<br />Adult Infectious Diseases (1)<br />Adult Rheumatology (1)<br />Adult Neurology (1)<br />Medical Oncology (2)<br />Physical Med & Rehab (1)</span>"
            }
          },
        
        "JP": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Japan<br />Total : 11<br />Adult Cardiology (1)<br />Adult Endocrinology & Metabolism (1)<br />Adult Gastroenterology (2)<br /><br />Adult Infectious Diseases (2)<br /> Adult Neurology (1)<br />Adult Respiratory Medicine (2)<br />Dermatology (1) <br />Medical Oncology (1)"
            }
          },
        
        "IN": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">India<br />Total : 18</span><br />Adult Cardiology (3)<br />Adult Haematology (3)<br />Adult Nephrology (4)<br />Adult Neurology (1)<br />Adult Respiratory Medicine (2)<br />Dermatology (1)<br />General Internal Medicine (1)<br />Medical Oncology (1)<br />Physical Med & Rehabilitation (1)"

          }
        },
        
        "FR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">France<br />Total : 2</span><br />Adult Infectious Diseases (1)<br />Adult Nephrology(1)"
          }
        },
        
        "CN": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">China</span><br />Total : 3</span><br />Medical Oncology (1)<br />Adult Neurology (1)<br />Adult Cardiology (1)"
          }
        },
        
        "PT": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Portugal<br />Total : 1</span><br />Medical Oncology (1)"
          }
        },
        
        "SW": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Switzerland<br />Total : 4</span><br />Adult Neurology (1)<br />Dermatology (1)<br />Adult Respiratory Medicine (1)<br />Adult Cardiology (1)"
          }
        },
        
        "BR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Brazil<br />Total : 9</span><br />Adult Cardiology (2)<br />Adult Nephrology (1)<br />Adult Neurology (3)<br />General Internal Medicine (1)<br />Medical Oncology (2)"
          }
        },
        
        "PH": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Philippines<br />Total : 3</span><br />Adult Haematology (1)<br />Adult Cardiology (1)<br />Adult Nephrology (1)"
          }
        },
        
        "MX": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Mexico<br />Total : 2</span><br />Adult Haematology (2)<br />Adult Neurology (1)"
          }
        },
        
        "ES": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Spain<br />Total : 7</span><br />Adult Cardiology (1)<br />Adult Gastroenterology (1)<br />Adult Haematology (1)<br />Adult Neurology (3)<br />Adult Respiratory Medicine (1)"
          }
        },
        
        "GB": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">United Kingdom<br />Total : 13</span><br />Adult Cardiology (7)<br />Adult Gastroenterology (2)<br />Adult Nephrology (3)<br />Medical Oncology (1)"
          }
        },
        
        "GR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Greece<br />Total : 2</span><br />Adult Rheumatology (1)<br />Adult Gastroenterology (1)"
          }
        },
        
        "CA": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Canada<br />Total : 116</span><br />Adult Cardiology (24)<br />Adult Endocrinology & Metabolism (2)<br />Adult Gastroenterology (7)<br />Adult Haematology (11)<br />Adult Infectious Diseases (2)<br />Adult Nephrology (11)<br />Adult Neurology (13)<br />Adult Respiratory (9)<br />Adult Rheumatology (2)<br />Dermatology (3)<br />Emergency Medicine (1)<br />General Internal Medicine (15)<br />Geriatric Medicine (2)<br />Medical Oncology (11)<br />Physical Med & Rehabilitation (3)"
          }
        },
        
        "NL": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Netherlands<br />Total : 2</span><br />Adult Neurology (2)"
          }
        },
        
        "JM": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Jamaica<br />Total : 7</span><br />Adult Cardiology (4)<br />Adult Respiratory Therapy (1)<br />Adult Rheumatology (2)"
          }
        },
        
        "OM": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Oman<br />Total : 3</span><br />Adult Gastroenterology (1) <br />Emergency Medicine (1)<br />Medical Oncology (1)"
          }
        },
        
        "TR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Turkey<br />Total : 2</span><br />Adult Rheumatology (2)"
            }
          },
        
        "BD": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Bangladesh<br /></span>Total : 1<br />Adult Nephrology (1)"
          }
        },
        
        "LC": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\"Saint Lucia<br />Total : 1</span><br />Adult Cardiology (1)"
          }
        },
        
        "FI": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Finland<br />Total : 1</span><br />Adult Respiratory Therapy (1)"
          }
        },
        
        "MY": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Malaysia<br />Total : 4</span><br />Adult Cardiology (1)<br />Adult Gastroenterology (1)<br />Medical Oncology (1)<br />Physical Med & Rehabilitation (1)"
          }
        },
        
        "TH": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Thailand<br />Total : 4</span><br />Adult Gastroenterology (1)<br />Adult Nephrology (1)<br />Adult Neurology (1)<br />Adult Rheumatology (1)"
          }
        },
        
        "AG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Antigua<br />Total : 1</span><br />Adult Cardiology (1)"
          }
        },
        
        "IT": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Italy<br />Total : 4</span><br />Adult Cardiology (1)<br />Adult Haematology (1)<br />Adult Respiratory Therapy (1)<br />Medical Oncology (1)"
          }
        },
        
        "SG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Singapore<br />Total : 3</span><br />Adult Nephrology (1)<br />Emergency Medicine (2)"
          }
        },
        
        "CO": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Colombia<br />Total : 2</span><br />Adult Cardiology (1)<br />Adult Rheumatology(1)"
          }
        },
       
        "AR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Argentina<br />Total : 3</span><br />Adult Cardiology (2)<br />Adult Haematology (1)"
          }
        },
        
        "SA": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Saudi Arabia<br />Total : 69</span><br />Adult Cardiology (6)<br />Adult Endocrinology & Metabolism (5)<br />Adult Gastroenterology (3)<br />Adult Haematology (8)<br />Adult Infectious Diseases (9)<br />Adult Nephrology (6)<br />Adult Neurology (11)<br />Adult Respiratory Medicine (1)<br />Adult Rheumatology (13)<br />Dermatology (2)<br />Emergency Medicine (1)<br />Medical Oncology (4)"
          }
        },
        
        "PK": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Pakistan<br />Total : 10</span><br />Adult Cardiology (4)<br />Adult Infectious Diseases (1)<br />Adult Nephrology(3)<br />Adult Neurology (1)<br />General Internal Medicine(1)"
          }
        },
        
        "YE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Yemen<br />Total : 2</span><br />Adult Haematology (1)<br />Adult Neurology (1)"
          }
        },
        
        "AE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Total : 7<br />Adult Cardiology (1)<br />Adult Gastroenterology (1)<br />Adult Haematology (2)<br />Adult Respiratory Medicine (1)<br />Adult Rheumatology (1)<br />Occupational Medicine (1)"
          }
        },
        
        "CR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Costa Rica</span><br />Total : 1<br />Dermatology (1)"
          }
        },
        
        "NG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Nigeria</span><br />Total : 1<br />Adult Respiratory Medicine (1)"
          }
        },
        
        "IR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Iran</span><br />Total : 10<br />Adult Cardiology (2)<br />Adult Gastroenterology (1)<br />Adult Neurology (3)<br />General Internal Medicine (4)"
          }
        },
        
        "SD": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Sudan</span><br />Total : 2<br />Adult Cardiology (1)<br />Adult Haematology (1)"
          }
        },
        
        "LK": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Sri-Lanka</span><br />Total : 2<br />Adult Gastroenterology (1)<br />Physical Med & Rehabilitation (1)"
          }
        },
        
        "KW": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Kuwait</span><br />Total : 6<br />Adult Endocrinology & Metabolism (1)<br />Adult Gastroenterology (1)<br />Adult Nephrology (1)<br />Adult Rheumatology (1)<br />Dermatology (1)<br />Emergency Medicine (1)"
          }
        },
        
        "DE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Germany</span><br />Total : 4<br />Adult Cardiology (1)<br />Adult Neurology (2)<br />Adult Respiratory Medicine (1)"
          }
        },
        
        "BE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Belgium</span><br />Total : 1<br />Adult Cardiology (1)"
          }
        },
        
        "IE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Ireland</span><br />Total : 19<br />Adult Cardiology (3)<br />Adult Gastroenterology (2)<br />Adult Haematology (3)<br />Adult Nephrology (7)<br />Adult Neurology (1)<br />Adult Respiratory Medicine (1)<br />Adult Rheumatology (1)<br />Medical Oncology (1)"
          }
        },
       
        "KR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">South Korea</span><br />Total : 1<br />General Internal Medicine (1)"
          }
        },
        
        "MM": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Burma</span><br />Total : 1<br />Medical Oncology (1)"
          }
        },
        
        "DZ": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Algeria</span><br />Total : 1<br />Adult Haematology(1)"
          }
        },
        
        "SI": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Slovenia</span><br />Total : 1<br />Medical Oncology (1)"
          }
        },
        
        "JO": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Jordan</span><br />Total : 9<br />Adult Haematology (3)<br />Adult Nephrology (1)<br />Dermatology (1)<br />General Internal Medicine (1)<br />Medical Oncology (3)"
          }
        },
        
        "SY": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Syria</span><br />Total : 2<br />Adult Neurology (1)<br />Medical Oncology (1)"
          }
        },
        
        "RS": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Serbia</span><br />Total : 1<br />Medical Oncology (1)"
          }
        },
        
        "AT": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Austria</span><br />Total : 1<br />Clinical Pharmacology & Toxicology (1)"
          }
        },
        
        "RO": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Romania</span><br />Total : 2<br />Adult Neurology (1)<br />Physical Med & Rehabilitation (1)"
          }
        },
        
        "NE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Nigeria</span><br />Total : 1<br />Adult Respiratory Medicine (1)"
          }
        },
        
        "IQ": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Iraq</span><br />Total : 1<br />Adult Nephrology (1)"
          }
        },
        
        "CH": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Switzerland</span><br />Total : 4<br />Adult Cardiology (1)<br />Adult Neurology (1)<br />Adult Respiratory Therapy (1)<br />Dermatology (1)"
          }
        },
        
        "LB": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Lebanon</span><br />Total : 2<br />Genera Internal Medicine (1)<br />Medical Oncology (1)"
          }
        },
        
        "IL": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Romania</span><br />Total : 2<br />Adult Cardiology (9)<br />Adult Gastroenterology (1)<br />Adult Haematology (1)<br />Adult Neurology (3)<br />Adult Respiratory Medicine (1)<br />Adult Rheumatology (3)<br />Clinical Pharmacology & Toxicology (1)<br />Dermatology (1)<br />Medical Oncology (5)"
          }
        },
        
        "MK": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Macedonia</span><br />Total : 1<br />Clinical Pharmacology & Toxicology (1)"
          }
        },
        
        "LY": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Libya</span><br />Total : 1<br />Adult Rheumatology (1)"
          }
        },
        
        "NZ": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">New Zeland</span><br />Total : 2<br />Adult Cardiology (1)<br />Adult Haematology (1)<br />Adult Nephrology (1)"
          }
        },
        
        "AU": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Australia</span><br />Total : 21<br />Adul Cardiology (6)<br />Adult Gastroenterology (1)<br />Adult Haematology (2)<br />Adult Neurology (1)<br />Adult Respiratory Medicine (1)<br />Medical Oncology (10)"
          }
        },
        
        "EG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Egypt</span><br />Total : 6<br />Adul Cardiology (2)<br />Adult Haematology (2)<br />Adult Nephrology (1)<br />General Internal Medicine (1)"
          }
        },
        
        "NP": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Nepal</span><br />Total : 2<br />Dermatology (1)<br />Medical Oncology (1)"
          }
        }
        }
      });
    });
