// _____________________________________GENERAL VARIABLES_____________________________________

let BcvPrice = null;
let elementsToCopy = "";










// _____________________________________DATABASE_____________________________________


// _________________________PROFILES_________________________

const pricesProfiles = [

  {
    serviceName: "Netflix",
    priceBcvForClient: 5,
    priceBcvForReseller: 4,
    priceCurrenciesForClient: 3.5,
    priceCurrenciesForReseller: 3,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Netflix ME",
    priceBcvForClient: 10,
    priceBcvForReseller: 7,
    priceCurrenciesForClient: 6,
    priceCurrenciesForReseller: 5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Disney estándar",
    priceBcvForClient: 3.5,
    priceBcvForReseller: 2,
    priceCurrenciesForClient: 3,
    priceCurrenciesForReseller: 2,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Disney premium",
    priceBcvForClient: 4.5,
    priceBcvForReseller: 3.5,
    priceCurrenciesForClient: 4,
    priceCurrenciesForReseller: 3,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Max",
    priceBcvForClient: 3,
    priceBcvForReseller: 2,
    priceCurrenciesForClient: 2.5,
    priceCurrenciesForReseller: 1.5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Prime Video",
    priceBcvForClient: 3,
    priceBcvForReseller: 2,
    priceCurrenciesForClient: 2.5,
    priceCurrenciesForReseller: 1.5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "FlujoTv",
    priceBcvForClient: 4.5,
    priceBcvForReseller: 3.5,
    priceCurrenciesForClient: 4,
    priceCurrenciesForReseller: 2.5,
    promotionForMoreMonths: true,
    moreMonthsData: {

      client: {
        bcv: {
          _3Months: 12,
          _6Months: 25,
          _12Months: 45
        },

        currencies: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        }
      },


      reseller: {
        bcv: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        },

        currencies: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        }
      }
    }
  },



  {
    serviceName: "Paramount",
    priceBcvForClient: 2.5,
    priceBcvForReseller: 1.5,
    priceCurrenciesForClient: 2,
    priceCurrenciesForReseller: 1,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Crunchyroll",
    priceBcvForClient: 3,
    priceBcvForReseller: 2,
    priceCurrenciesForClient: 2.5,
    priceCurrenciesForReseller: 1.5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Vix",
    priceBcvForClient: 3,
    priceBcvForReseller: 2,
    priceCurrenciesForClient: 2,
    priceCurrenciesForReseller: 1,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Spotify",
    priceBcvForClient: 5,
    priceBcvForReseller: 3.5,
    priceCurrenciesForClient: 5,
    priceCurrenciesForReseller: 2.5,
    promotionForMoreMonths: true,
    moreMonthsData: {

      client: {
        bcv: {
          _3Months: 12,
          _6Months: 20,
          _12Months: 35
        },

        currencies: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        }
      },


      reseller: {
        bcv: {
          _3Months: 7,
          _6Months: 12,
          _12Months: 24
        },

        currencies: {
          _3Months: 6,
          _6Months: 9,
          _12Months: 16
        }
      }
    }
  },



  {
    serviceName: "Kaelus",
    priceBcvForClient: 4.5,
    priceBcvForReseller: 4.5,
    priceCurrenciesForClient: 4.5,
    priceCurrenciesForReseller: 4.5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Canva",
    priceBcvForClient: 4,
    priceBcvForReseller: 2,
    priceCurrenciesForClient: 4,
    priceCurrenciesForReseller: 1.5,
    promotionForMoreMonths: true,


    moreMonthsData: {

      client: {
        bcv: {
          _3Months: 10,
          _6Months: 18,
          _12Months: 25
        },

        currencies: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        }
      },


      reseller: {
        bcv: {
          _3Months: null,
          _6Months: null,
          _12Months: 18
        },

        currencies: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        }
      }
    }
  },



  {
    serviceName: "CapCut",
    priceBcvForClient: 7,
    priceBcvForReseller: 5,
    priceCurrenciesForClient: 7,
    priceCurrenciesForReseller: 5,
    promotionForMoreMonths: true,

    moreMonthsData: {

      client: {
        bcv: {
          _3Months: 16,
          _6Months: null,
          _12Months: null
        },

        currencies: {
          _3Months: 16,
          _6Months: null,
          _12Months: null
        }
      },


      reseller: {
        bcv: {
          _3Months: 12,
          _6Months: null,
          _12Months: null
        },

        currencies: {
          _3Months: 12,
          _6Months: null,
          _12Months: null
        }
      }
    }
  }
  
]






 



// _________________________ACCOUNTS_________________________

const pricesAccounts = [

  {
    serviceName: "Netflix básica",
    priceBcvForClient: null,
    priceBcvForReseller: 10,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: 7,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Netflix estándar",
    priceBcvForClient: null,
    priceBcvForReseller: 14,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: 9.5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Netflix premium",
    priceBcvForClient: null,
    priceBcvForReseller: 20.5,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: 14.5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Disney estándar",
    priceBcvForClient: null,
    priceBcvForReseller: 7.5,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: 5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Max",
    priceBcvForClient: null,
    priceBcvForReseller: 7.5,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: 5,
    promotionForMoreMonths: false
  },



  {
    serviceName: "PrimeVideo",
    priceBcvForClient: null,
    priceBcvForReseller: null,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: null,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Crunchyroll Megafan",
    priceBcvForClient: null,
    priceBcvForReseller: 8.7,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: 6,
    promotionForMoreMonths: false
  },



  {
    serviceName: "FlujoTv",
    priceBcvForClient: 10,
    priceBcvForReseller: 5.5,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: 4,
    promotionForMoreMonths: false
  },



  {
    serviceName: "Youtube Premium",
    priceBcvForClient: 5,
    priceBcvForReseller: 3.5,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: null,
    promotionForMoreMonths: false
  },
   


  {
    serviceName: "AppleTv",
    priceBcvForClient: 4.5,
    priceBcvForReseller: 3.5,
    priceCurrenciesForClient: null,
    priceCurrenciesForReseller: null,
    promotionForMoreMonths: true,

    moreMonthsData: {

      client: {
        bcv: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        },

        currencies: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        }
      },


      reseller: {
        bcv: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        },

        currencies: {
          _3Months: null,
          _6Months: null,
          _12Months: null
        }
      }
    }
  },



  {
    serviceName: "Telelatino",
    priceBcvForClient: 7,
    priceBcvForReseller: 6,
    priceCurrenciesForClient: 7,
    priceCurrenciesForReseller: 4.5,
    promotionForMoreMonths: false
  }
]









// _____________________________________CREATE ESTATIC HTML_____________________________________


// _________________________CONTAINER PRINCIPAL_________________________

const containerPrincipal = document.createElement("main");
document.body.appendChild(containerPrincipal);





// ____________________PAGE 1____________________

const containerPage1 = document.createElement("article");
containerPage1.id = "containerPage1";
containerPrincipal.appendChild(containerPage1);


// ________BUTTONS PROFILES________
const containerButtonsProfiles = document.createElement("div");
containerPage1.appendChild(containerButtonsProfiles);

const titleContainerButtonsProfiles = document.createElement("h2");
titleContainerButtonsProfiles.textContent = "PERFILES"
containerButtonsProfiles.appendChild(titleContainerButtonsProfiles);


// ________BUTTONS ACCOUNTS________
const containerButtonsAccounts = document.createElement("div");
containerPage1.appendChild(containerButtonsAccounts);

const titleContainerButtonsAccounts = document.createElement("h2");
titleContainerButtonsAccounts.textContent = "CUENTAS"
containerButtonsAccounts.appendChild(titleContainerButtonsAccounts);










// ______________________FUNCTIONS______________________

async function calcBs(priceBcvForClient) {
  try {
    const response = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
    if (!response.ok) throw new Error('Error en la API');
    const data = await response.json();
    BcvPrice = data.promedio;

    const bs = priceBcvForClient * BcvPrice;

    BcvPrice = BcvPrice.toFixed(2);
    return bs;
  } catch (error) {
    console.error('Error al obtener la tasa BCV:', error);
    return null;
  }
}





function hideAll(){
  containerPage1.style.display = "none";
}





function createDinamicHtmlPage1(object, containerObjetive){

  object.forEach((element, index) =>{
    const button = document.createElement("button");
    button.value = `${element.serviceName}`;
    button.textContent = `${element.serviceName}`;
    button.setAttribute('type', 'button');
    containerObjetive.appendChild(button);

    button.addEventListener('click', function() {
      createDinamicHtmlPage2(element);
    });
  })

}

createDinamicHtmlPage1(pricesProfiles, containerButtonsProfiles);
createDinamicHtmlPage1(pricesAccounts, containerButtonsAccounts);





async function createDinamicHtmlPage2(object) {

  hideAll();


// _______________________________PAGE 2_______________________________

  const containerPage2 = document.createElement("article");
  containerPage2.id = "containerPage2";
  containerPrincipal.appendChild(containerPage2);


// ___________________TITLE SERVICE___________________
  const titleService = document.createElement("h1");
  titleService.textContent = object.serviceName;
  containerPage2.appendChild(titleService);


// ___________________ALERT COPY___________________
  const alertCopy = document.createElement("span");
  alertCopy.id = "alertCopy";
  alertCopy.textContent = "Copiado al portapeles";
  containerPage2.appendChild(alertCopy);
  alertCopy.style.display = "none";


// ___________________BUTTON BACK___________________
  const buttonBack = document.createElement("span");
  buttonBack.id = "buttonBack";
  buttonBack.textContent = "←";
  containerPage2.appendChild(buttonBack);






// ___________________________CONTAINER BCV PRICE___________________________

  const containerBcvPrices = document.createElement("div");
  containerPage2.appendChild(containerBcvPrices);


// ___________________CLIENTS 1 MONTH___________________
  const containerBcvPricesClient = document.createElement("div");
  containerBcvPrices.appendChild(containerBcvPricesClient);

  const titlecontainerBcvPricesClient = document.createElement("h2");
  titlecontainerBcvPricesClient.textContent = "BCV PARA CLIENTES";
  containerBcvPricesClient.appendChild(titlecontainerBcvPricesClient);

  const titleContainerOfBolivarsClient = document.createElement("h3");
  titleContainerOfBolivarsClient.textContent = "Bolivares";
  containerBcvPricesClient.appendChild(titleContainerOfBolivarsClient);

  const containerOfBolivarsClient = document.createElement("span");
  const precioBsCliente = await calcBs(object.priceBcvForClient);
  containerOfBolivarsClient.textContent = precioBsCliente !== null ? `Bs. ${precioBsCliente.toFixed(2)}` : "N/A";

  containerOfBolivarsClient.className = "elementToCopy";
  containerBcvPricesClient.appendChild(containerOfBolivarsClient);

  const titleContainerOfDollarsClient = document.createElement("h3");
  titleContainerOfDollarsClient.textContent = "Dólares";
  containerBcvPricesClient.appendChild(titleContainerOfDollarsClient);

  const containerOfDollarsClient = document.createElement("span");
  containerOfDollarsClient.textContent = `${object.priceBcvForClient}$`;
  containerOfDollarsClient.className = "elementToCopy";
  containerBcvPricesClient.appendChild(containerOfDollarsClient);


// ___________________RESELLERS 1 MONTH___________________
  const containerBcvPricesReseller = document.createElement("div");
  containerBcvPrices.appendChild(containerBcvPricesReseller);

  const titlecontainerBcvPricesReseller = document.createElement("h2");
  titlecontainerBcvPricesReseller.textContent = "BCV PARA REVENDEDOR";
  containerBcvPricesReseller.appendChild(titlecontainerBcvPricesReseller);

  const titleContainerOfBolivarsReseller = document.createElement("h3");
  titleContainerOfBolivarsReseller.textContent = "Bolivares";
  containerBcvPricesReseller.appendChild(titleContainerOfBolivarsReseller);

  const containerOfBolivarsReseller = document.createElement("span");
  const precioBsReseller = await calcBs(object.priceBcvForReseller);
  containerOfBolivarsReseller.textContent = precioBsReseller !== null ? `Bs. ${precioBsReseller.toFixed(2)}` : "N/A";
  containerOfBolivarsReseller.className = "elementToCopy";
  containerBcvPricesReseller.appendChild(containerOfBolivarsReseller);

  const titleContainerOfDollarsReseller = document.createElement("h3");
  titleContainerOfDollarsReseller.textContent = "Dólares";
  containerBcvPricesReseller.appendChild(titleContainerOfDollarsReseller);

  const containerOfDollarsReseller = document.createElement("span");
  containerOfDollarsReseller.textContent = `${object.priceBcvForReseller}$`;
  containerOfDollarsReseller.className = "elementToCopy";
  containerBcvPricesReseller.appendChild(containerOfDollarsReseller);





// ___________________________CONTAINER CURRENCIES PRICE___________________________

  const containerCurrenciesPrices = document.createElement("div");
  containerPage2.appendChild(containerCurrenciesPrices);


//___________________CLIENTS 1 MONTH___________________
  const containerCurrenciesPricesClient = document.createElement("div");
  containerCurrenciesPrices.appendChild(containerCurrenciesPricesClient);

  const titlecontainerCurrenciesPricesClient = document.createElement("h2");
  titlecontainerCurrenciesPricesClient.textContent = "DIVISAS PARA CLIENTES";
  containerCurrenciesPricesClient.appendChild(titlecontainerCurrenciesPricesClient);

  const titleContainerOfCurrenciesClient = document.createElement("h3");
  titleContainerOfCurrenciesClient.textContent = "Dólares";
  containerCurrenciesPricesClient.appendChild(titleContainerOfCurrenciesClient);

  const containerOfCurrenciesClient = document.createElement("span");
  containerOfCurrenciesClient.textContent = `${object.priceCurrenciesForClient}$`;
  containerOfCurrenciesClient.className = "elementToCopy";
  containerCurrenciesPricesClient.appendChild(containerOfCurrenciesClient);



//___________________RESELLER 1 MONTH___________________
  const containerCurrenciesPricesReseller = document.createElement("div");
  containerCurrenciesPrices.appendChild(containerCurrenciesPricesReseller);

  const titlecontainerCurrenciesPricesReseller = document.createElement("h2");
  titlecontainerCurrenciesPricesReseller.textContent = "DIVISAS PARA REVENDEDOR";
  containerCurrenciesPricesReseller.appendChild(titlecontainerCurrenciesPricesReseller);

  const titleContainerOfCurrenciesReseller = document.createElement("h3");
  titleContainerOfCurrenciesReseller.textContent = "Dólares";
  containerCurrenciesPricesReseller.appendChild(titleContainerOfCurrenciesReseller);

  const containerOfCurrenciesReseller = document.createElement("span");
  containerOfCurrenciesReseller.textContent = `${object.priceCurrenciesForReseller}$`;
  containerOfCurrenciesReseller.className = "elementToCopy";
  containerCurrenciesPricesReseller.appendChild(containerOfCurrenciesReseller);







  // ___________________________PROMOTION FOR MORE MONTHS___________________________


  if(object.promotionForMoreMonths){

    const arrowContainerPromotionForMoreMonths = document.createElement("span");
    arrowContainerPromotionForMoreMonths.textContent = "↓ Ofertas por más meses ↓"
    arrowContainerPromotionForMoreMonths.id = "arrowContainerPromotionForMoreMonths";
    containerPage2.appendChild(arrowContainerPromotionForMoreMonths);

    const arrowDownContainerPromotionForMoreMonthsResponsive = document.createElement("span");
    arrowDownContainerPromotionForMoreMonthsResponsive.textContent = "↓"
    arrowDownContainerPromotionForMoreMonthsResponsive.id = "arrowDownContainerPromotionForMoreMonthsResponsive";
    containerPage2.appendChild(arrowDownContainerPromotionForMoreMonthsResponsive);

    
    arrowContainerPromotionForMoreMonths.addEventListener("click", () => {

      containerPage2.style.transform = "translateY(-100vh)";
      alertCopy.style.transform = "translateY(100vh)";
    });



    const containerPromotionForMoreMonths = document.createElement("div");
    containerPromotionForMoreMonths.id = "containerPromotionForMoreMonths";
    containerPage2.appendChild(containerPromotionForMoreMonths);

    const arrowUpContainerPromotionForMoreMonths = document.createElement("span");
    arrowUpContainerPromotionForMoreMonths.textContent = "↑ Precios por 1 mes ↑"
    arrowUpContainerPromotionForMoreMonths.id = "arrowUpContainerPromotionForMoreMonths";
    containerPromotionForMoreMonths.appendChild(arrowUpContainerPromotionForMoreMonths);


    arrowUpContainerPromotionForMoreMonths.addEventListener("click", () => {

      containerPage2.style.transform = "translateY(0vh)";
      alertCopy.style.transform = "translateY(0vh)";
    });



    function createHtmlPromotionForMoreMonths(principalTitle, payType){

      const containerPromotions = document.createElement("div");
      containerPromotionForMoreMonths.appendChild(containerPromotions);

      const titleContainerPromotions = document.createElement("h2");
      titleContainerPromotions.textContent = principalTitle;
      containerPromotions.appendChild(titleContainerPromotions);




      async function createHtmlPromotionForMoreMonthsClienteAndReseller(secundaryTitle, clientType){

        const containerPrincipal = document.createElement("div");
        containerPromotions.appendChild(containerPrincipal);

        const titleContainerPrincipal = document.createElement("h2");
        titleContainerPrincipal.textContent = secundaryTitle;
        containerPrincipal.appendChild(titleContainerPrincipal);





        const containerPromotionForMoreMonths3 = document.createElement("div");
        containerPrincipal.appendChild(containerPromotionForMoreMonths3);

        const titleContainerPromotionForMoreMonths3 = document.createElement("h2");
        titleContainerPromotionForMoreMonths3.textContent = "3 meses"
        containerPromotionForMoreMonths3.appendChild(titleContainerPromotionForMoreMonths3);

        const containerDataInBs3Months = document.createElement("span");
        const precioBs3Months = await calcBs(object.moreMonthsData[clientType][payType]["_3Months"]);

        containerDataInBs3Months.textContent = 
          payType === "bcv" 
            ? (precioBs3Months !== null ? `Bs. ${precioBs3Months.toFixed(2)}` : "N/A") 
            : "";

        containerDataInBs3Months.className = "elementToCopy";


        containerPromotionForMoreMonths3.appendChild(containerDataInBs3Months);

        const containerDataInDollars3Months = document.createElement("span");
        containerDataInDollars3Months.textContent = object.moreMonthsData[clientType][payType]["_3Months"] !== null ? `${object.moreMonthsData[clientType][payType]["_3Months"]}$` : "N/A";
        containerPromotionForMoreMonths3.appendChild(containerDataInDollars3Months);

        containerDataInDollars3Months.className = "elementToCopy";  


        const containerPromotionForMoreMonths6 = document.createElement("div");
        containerPrincipal.appendChild(containerPromotionForMoreMonths6);

        const titleContainerPromotionForMoreMonths6 = document.createElement("h2");
        titleContainerPromotionForMoreMonths6.textContent = "6 meses"
        containerPromotionForMoreMonths6.appendChild(titleContainerPromotionForMoreMonths6);

        const containerDataInBs6Months = document.createElement("span");
        const precioBs6Months = await calcBs(object.moreMonthsData[clientType][payType]["_6Months"]);

        containerDataInBs6Months.textContent = 
          payType === "bcv" 
            ? (precioBs6Months !== null ? `Bs. ${precioBs6Months.toFixed(2)}` : "N/A") 
            : "";

        containerDataInBs6Months.className = "elementToCopy";  


        containerPromotionForMoreMonths6.appendChild(containerDataInBs6Months);

        const containerDataInDollars6Months = document.createElement("span");
        containerDataInDollars6Months.textContent = object.moreMonthsData[clientType][payType]["_6Months"] !== null ? `${object.moreMonthsData[clientType][payType]["_6Months"]}$` : "N/A";
        containerPromotionForMoreMonths6.appendChild(containerDataInDollars6Months);

        containerDataInDollars6Months.className = "elementToCopy";  



        const containerPromotionForMoreMonths12 = document.createElement("div");
        containerPrincipal.appendChild(containerPromotionForMoreMonths12);

        const titleContainerPromotionForMoreMonths12 = document.createElement("h2");
        titleContainerPromotionForMoreMonths12.textContent = "12 meses"
        containerPromotionForMoreMonths12.appendChild(titleContainerPromotionForMoreMonths12);

        const containerDataInBs12Months = document.createElement("span");
        const precioBs12Months = await calcBs(object.moreMonthsData[clientType][payType]["_12Months"]);

        containerDataInBs12Months.textContent = 
          payType === "bcv" 
            ? (precioBs12Months !== null ? `Bs. ${precioBs12Months.toFixed(2)}` : "N/A") 
            : "";


        containerDataInBs12Months.className = "elementToCopy";  

        containerPromotionForMoreMonths12.appendChild(containerDataInBs12Months);

        const containerDataInDollars12Months = document.createElement("span");
        containerDataInDollars12Months.textContent = object.moreMonthsData[clientType][payType]["_12Months"] !== null ? `${object.moreMonthsData[clientType][payType]["_12Months"]}$` : "N/A";
        containerPromotionForMoreMonths12.appendChild(containerDataInDollars12Months);

        containerDataInDollars12Months.className = "elementToCopy";

        elementsToCopy = document.querySelectorAll(".elementToCopy");
        createElementsToCopy();

      }

       createHtmlPromotionForMoreMonthsClienteAndReseller("CLIENTE", "client");
       createHtmlPromotionForMoreMonthsClienteAndReseller("REVENDEDOR", "reseller");

    }


    createHtmlPromotionForMoreMonths("BCV", "bcv");
    createHtmlPromotionForMoreMonths("DIVISAS", "currencies");


  }


  elementsToCopy = document.querySelectorAll(".elementToCopy");
  createElementsToCopy();



  function createElementsToCopy(){
  
    elementsToCopy.forEach((element)=>{

      element.addEventListener("click", () => {
        navigator.clipboard.writeText(element.textContent);


        if(alertCopy.style.display === "inline-block"){
          return;

        } else{

          alertCopy.style.display = "inline-block";

          setTimeout(() => {
            alertCopy.style.display = "none";
          }, 1000);
        }

      });
 
    })

  }


  buttonBack.addEventListener('click', function() {
    containerPage2.remove();
    containerPage1.style.display = "flex";
  });


  
// _____CONTAINER BCV_____
  const containerBcv = document.createElement("span");
  containerBcv.textContent = `Tasa BCV | Bs. ${BcvPrice}`;
  containerPage2.appendChild(containerBcv);


}











