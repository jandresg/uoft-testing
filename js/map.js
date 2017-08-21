$(function (mapMap) {
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
          title: "Legend",
          slices: [
            {
              max: 1,
              attrs: {
                fill: "#002a5c"
              },
              attrsHover: {
                fill: "#008bb0"
              },
              label: "Fellows"
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
              label: "No Fellows"
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
        "NE": {
          value: "0"
      },
*/

        "US": {
          value: "1",

          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">United States<br />Total : 8</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (2)<br /> Infectious Diseases (1)<br />Medical Oncology (2)<br />Neurology (1)<br /> Physical Med & Rehabilitation (1)<br />Rheumatology (1)</font>"
            }
          },

        "JP": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Japan<br />Total : 11</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br />Dermatology (1) <br /> Endocrinology & Metabolism (1)<br /> Gastroenterology (2)<br />Infectious Diseases (2)<br />Medical Oncology (1)<br />Neurology (1)<br /> Respiratory Medicine (2)"
            }
          },

        "IN": {
          value: "1",
          tooltip: {
	            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">India<br />Total : 18</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (3)<br />Dermatology (1)<br />General Internal Medicine (1)<br />Hematology (3)<br />Medical Oncology (2)<br />Nephrology (4)<br />Neurology (1)<br />Physical Med & Rehabilitation (1)<br /> Respiratory Medicine (2)</font>"

          }
        },

        "FR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">France<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Infectious Diseases (1)<br /> Nephrology(1)</font>"
          }
        },

        "CN": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">China<br />Total : 3</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br />Medical Oncology (1)<br /> Neurology (1)</font>"
          }
        },

        "PT": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Portugal<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Medical Oncology (1)</font>"
          }
        },

        "SW": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Switzerland<br />Total : 4</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Neurology (1)<br />Dermatology (1)<br /> Respiratory Medicine (1)<br /> Cardiology (1)</font>"
          }
        },

        "BR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Brazil<br />Total : 9</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (2)<br />General Internal Medicine (1)<br />Medical Oncology (2)<br /> Nephrology (1)<br /> Neurology (3)</font>"
          }
        },

        "PH": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Philippines<br />Total : 3</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Hematology (1)<br /> Nephrology (1)</font>"
          }
        },

        "MX": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Mexico<br />Total : 3</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Hematology (2)<br /> Neurology (1)</font>"
          }
        },

        "ES": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Spain<br />Total : 7</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Gastroenterology (1)<br /> Hematology (1)<br /> Neurology (3)<br /> Respiratory Medicine (1)</font>"
          }
        },

        "GB": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">United Kingdom<br />Total : 13</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (7)<br /> Gastroenterology (2)<br />Medical Oncology (1)<br /> Nephrology (3)</font>"
          }
        },

        "GR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Greece<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Gastroenterology (1)<br /> Rheumatology (1)</font>"
          }
        },

        "CA": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Canada<br />Total : 116</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (24)<br />Emergency Medicine (1)<br />General Internal Medicine (15)<br />Geriatric Medicine (2)<br />Dermatology (3)<br /> Endocrinology & Metabolism (2)<br /> Gastroenterology (7)<br /> Hematology (11)<br /> Infectious Diseases (2)<br />Medical Oncology (11)<br /> Nephrology (11)<br /> Neurology (13)<br />Physical Med & Rehabilitation (3)<br /> Respiratory Medicine (9)<br /> Rheumatology (2)</font>"
          }
        },

        "NL": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Netherlands<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Neurology (2)</font>"
          }
        },

        "JM": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Jamaica<br />Total : 7</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (4)<br /> Respiratory Medicine (1)<br /> Rheumatology (2)</font>"
          }
        },

        "OM": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Oman<br />Total : 3</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Emergency Medicine (1)<br /> Gastroenterology (1) <br />Medical Oncology (1)</font>"
          }
        },

        "TR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Turkey<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Rheumatology (2)</font>"
            }
          },

        "BD": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Bangladesh<br /></span><font style=\"font-family: TradeGothic18;\"size=\"2\">Total : 1<br /> Nephrology (1)</font>"
          }
        },

        "LC": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-weight:bold;\"Saint Lucia<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)</font>"
          }
        },

        "FI": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Finland<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Respiratory Medicine (1)</font>"
          }
        },

        "MY": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Malaysia<br />Total : 4</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Gastroenterology (1)<br />Medical Oncology (1)<br />Physical Med & Rehabilitation (1)</font>"
          }
        },

        "TH": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Thailand<br />Total : 4</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Gastroenterology (1)<br /> Nephrology (1)<br /> Neurology (1)<br /> Rheumatology (1)</font>"
          }
        },

        "AG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Antigua<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)</font>"
          }
        },

        "IT": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Italy<br />Total : 4</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Hematology (1)<br /> Respiratory Medicine (1)<br />Medical Oncology (1)</font>"
          }
        },

        "SG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Singapore<br />Total : 3</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Nephrology (1)<br />Emergency Medicine (2)</font>"
          }
        },

        "CO": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Colombia<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Rheumatology(1)</font>"
          }
        },

        "AR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Argentina<br />Total : 3</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (2)<br /> Hematology (1)</font>"
          }
        },

        "SA": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Saudi Arabia<br />Total : 69</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (6)<br />Dermatology (2)<br /> Endocrinology & Metabolism (5)<br />Emergency Medicine (1)<br /> Gastroenterology (3)<br /> Hematology (8)<br /> Infectious Diseases (9)<br />Medical Oncology (4)<br /> Nephrology (6)<br /> Neurology (11)<br /> Respiratory Medicine (1)<br /> Rheumatology (13)</font>"
          }
        },

        "PK": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Pakistan<br />Total : 10</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (4)<br />General Internal Medicine (1)<br /> Infectious Diseases (1)<br /> Nephrology(3)<br /> Neurology (1)</font>"
          }
        },

        "YE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Yemen<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Hematology (1)<br /> Neurology (1)</font>"
          }
        },

        "AE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">United Arab Emirates<br />Total : 7</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Gastroenterology (1)<br /> Hematology (2)<br />Occupational Medicine (1)<br /> Respiratory Medicine (1)<br /> Rheumatology (1)</font>"
          }
        },

        "CR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Costa Rica<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Dermatology (1)</font>"
          }
        },

        "NG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Nigeria<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Respiratory Medicine (1)</font>"
          }
        },

        "IR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Iran<br />Total : 10</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (2)<br /> Gastroenterology (1)<br />General Internal Medicine (4)<br /> Neurology (3)</font>"
          }
        },

        "SD": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Sudan<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Hematology (1)</font>"
          }
        },

        "LK": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Sri-Lanka<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Gastroenterology (1)<br />Physical Med & Rehabilitation (1)</font>"
          }
        },

        "KW": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Kuwait<br />Total : 6</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Dermatology (1)<br />Emergency Medicine (1)<br /> Endocrinology & Metabolism (1)<br /> Gastroenterology (1)<br /> Nephrology (1)<br /> Rheumatology (1)</font>"
          }
        },

        "DE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Germany<br />Total : 4</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Neurology (2)<br /> Respiratory Medicine (1)</font>"
          }
        },

        "BE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Belgium<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)</font>"
          }
        },

        "IE": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Ireland<br />Total : 19</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (3)<br /> Gastroenterology (2)<br /> Hematology (3)<br />Medical Oncology (1)<br /> Nephrology (7)<br /> Neurology (1)<br /> Respiratory Medicine (1)<br /> Rheumatology (1)</font>"
          }
        },

        "KR": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">South Korea<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />General Internal Medicine (1)</font>"
          }
        },

        "MM": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Burma<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Medical Oncology (1)</font>"
          }
        },

        "DZ": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Algeria<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Hematology (1)</font>"
          }
        },

        "SI": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Slovenia<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Medical Oncology (1)</font>"
          }
        },

        "JO": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Jordan<br />Total : 9</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Dermatology (1)<br />General Internal Medicine (1)<br /> Hematology (3)<br />Medical Oncology (3)<br /> Nephrology (1)</font>"
          }
        },

        "SY": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Syria<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Medical Oncology (1)<br /> Neurology (1)</font>"
          }
        },

        "RS": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Serbia<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Medical Oncology (1)</font>"
          }
        },

        "AT": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Austria<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Clinical Pharmacology & Toxicology (1)</font>"
          }
        },

        "RO": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Romania<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Neurology (1)<br />Physical Med & Rehabilitation (1)</font>"
          }
        },

        "IQ": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Iraq<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Nephrology (1)</font>"
          }
        },

        "CH": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Switzerland<br />Total : 4</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br />Dermatology (1)<br /> Neurology (1)<br /> Respiratory Medicine (1)</font>"
          }
        },

        "LB": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Lebanon<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Genera Internal Medicine (1)<br />Medical Oncology (1)</font>"
          }
        },

        "IL": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Israel<br />Total : 25</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (9)<br />Clinical Pharmacology & Toxicology (1)<br />Dermatology (1)<br /> Gastroenterology (1)<br /> Hematology (1)<br />Medical Oncology (5)<br /> Neurology (3)<br /> Respiratory Medicine (1)<br /> Rheumatology (3)</font>"
          }
        },

        "MK": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Macedonia<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Clinical Pharmacology & Toxicology (1)</font>"
          }
        },

        "LY": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Libya<br />Total : 1</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Rheumatology (1)</font>"
          }
        },

        "NZ": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">New Zealand<br />Total : 3</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (1)<br /> Hematology (1)<br /> Nephrology (1)</font>"
          }
        },

        "AU": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Australia<br />Total : 21</span><font style=\"font-family: TradeGothic18; text-indent: 40px;\"size=\"2\"><br /> Cardiology (6)<br /> Gastroenterology (1)<br /> Hematology (2)<br />Medical Oncology (10)<br /> Neurology (1)<br /> Respiratory Medicine (1)</font>"
          }
        },

        "EG": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Egypt<br />Total : 6</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br /> Cardiology (2)<br />General Internal Medicine (1)<br /> Hematology (2)<br /> Nephrology (1)</font>"
          }
        },

        "NP": {
          value: "1",
          tooltip: {
            content: "<span style=\"font-family: TradeGothic20; font-weight: bold;\">Nepal<br />Total : 2</span><font style=\"font-family: TradeGothic18;\"size=\"2\"><br />Dermatology (1)<br />Medical Oncology (1)</font>"
          }
        }
        }
      });
    });
