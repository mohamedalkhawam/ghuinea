import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { BsFullscreen } from "react-icons/bs";
import Home from "./pages/home/Home";
import Invest from "./pages/invest/Invest";
import Industy from "./pages/industry/Industry";
import About from "./pages/about/About";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import i18n from "i18next";
import License from "./pages/license";
import aesjs from "aes-js";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Background from "./components/animatedbg";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          energy: "ENERGY",
          tourism: "TOURISM",
          infrastructure: "INFRASTRUCTURE",
          agriculture: "AGRICULTURE",
          aboutDescription: `  Since 2010, Guinea has focused on <br/>
                            key industries to develop our economy.
                            <br/><br/>
                            We have created new strategic opportunities <br/>
                            to increase our competitiveness.
                            <br/><br/>
                            Discover how you can participate in Guinea’s
                            growth, and tap into our high-performing sectors.`,
          energyDescription: `Energy lies at the very heart of our development
                            strategy, and all our investments in this sector
                            improve our people’s lives and livelihoods.
                             <br/><br/>   
                            Hydropower is energy obtained from flowing water. <br/>
                            One of the first sources of energy used for
                            electricity generation, it is also considered one
                            of the most cost-effective. 
                            <br/><br/>
                            Guinea has more than half of West Africa’s principal
                            rivers. Since 2010, we have built new dams, <br/> rehabilitated
                            and expanded our power grid, and increased energy
                            collaboration with our neighbors.`,
          tourismDescription: `The vast potential of tourism is still being realized.   
                        We are investing in our rich cultural heritage, and in
                        the unspoilt beauty of our well-preserved landscapes.
                        <br/><br/>
                        Yet to be explored by the world, Guinea offers 
                        rare experiences to adventurous travelers, and we
                        are gearing up to welcome them in great numbers.
                        <br/><br/>
                        Since 2010, we have improved our road infrastructure
                        for quicker and easier travel, increased hotel offerings
                        by 40%, and created thousands of new jobs in the 
                        hospitality sector.`,
          infrastructureDescription: `Infrastructure is the cornerstone of our economic growth,
                        and supports all sectors of Guinean industry and activity.
                        We are determined to convert earlier weaknesses into
                        key strengths, and create a sustainable future. 
                        <br/><br/>
                        Since 2010, we have invested heavily in infrastructure,
                        building and rehabilitating our roads, airports, and ports.
                        We are facilitating quicker transport of people and goods 
                        and also improving living standards.
                        <br/><br/>
                        We are mindful of protecting those in need, with new 
                        social housing programs, health facilities, and schools
                        across the country.`,
          agricultureDescription: `With over 13 million ha of arable land, a diverse climate,
                    1,160 waterways and rainfalls averaging 120-430 cm,
                    Guinea has the potential to be an agricultural powerhouse.
                    For too long, less than 10% of cultivable land was exploited
                    despite 85% of the population working in agriculture
                     <br/> <br/> 
                    Since 2010, we have massively invested to modernize
                    the sector through capacity-building of farmers, subsidizing
                    farming inputs and supplying modern machinery. We are
                    undergoing a shift from small-scale subsistence farming to
                    mass production, resulting in higher crop yields and exports.
                    <br/> <br/> 
                    This contributes to making Guinea a regional agribusiness hub. 
                    `,
          investDescription: `Guinea is a land of incredible promise and potential.`,
          investDescriptionSmall: `
                            Scan the QR code or visit www.invest.gov.gn
                            to discover our many investment opportunities.`,
        },
      },
      fr: {
        translation: {
          energy: "ÉNERGIE",
          tourism: "TOURISME",
          infrastructure: "INFRASTRUCTURES",
          agriculture: "AGRICULTURE",
          aboutDescription: `  Depuis 2010, la Guinée s’est concentrée sur les
industries clés pour développer son économie.
Nous avons créé de nouvelles perspectives
stratégiques pour accroître notre compétitivité.
Découvrez
comment participer à la croissance
Guinéenne et exploiter nos secteurs les plus
performants.`,
          energyDescription: `L’énergie est au cœur même de notr
e stratégie
de développement, et tous nos investissements
dans ce secteur améliorent la vie et les besoins
quotidiens de notre population.
L’hydroélectricité est une énergie obtenue à partir
de l’eau courante. C’est l’une des premières
sources d’énergie u
tilisées pour la production
d’électricité, également considérée comme l’une
des plus rentables.
La Guinée possède plus de la moitié des
principaux cours d’eau d’Afrique de l’Ouest.
Depuis 2010, nous avons construit de nouveaux
barrages, réhabilité et
étendu notre réseau
électrique, et renforcé la collaboration
énergétique avec nos voisins.`,
          tourismDescription: `L’énorme potentiel touristique est encore en
cours de réalisation. Nous investissons dans
notre riche patrimoine culturel et dans la beauté
i
ntacte de nos paysages bien préservés.
Encore méconnue par le reste du monde, la
Guinée offre des expériences rares aux
voyageurs ayant soif d’aventures, et nous nous
préparons à tous les accueillir.
Depuis 2010, nous avons amélioré nos
infrastructures
routières pour des itinéraires plus
rapides et plus fonctionnels, augmenté l’offre
hôtelière de 40 % et créé des milliers de
nouveaux emplois dans le secteur de l’hôtellerie.
`,
          infrastructureDescription: `Les infrastructures sont la pierre angulaire de
notre croissance économique et soutiennent tous
les secteurs de l’industrie et de l’activité
guiné
enne. Nous sommes déterminés à convertir
nos anciens points faibles en points forts,
pour
créer un avenir durable.
Depuis 2010, nous avons investi massivement
dans les infrastructures, en construisant et en
réhabilitant nos routes, nos aéroports et nos
p
orts. Nous optimisons le transport des
personnes et des marchandises et améliorons
également le niveau de vie.
Nous souhaitons protéger les personnes dans le
besoin, avec de nouveaux programmes de
logements sociaux, des établissements de santé
et des écol
es dans tout le pays.`,
          agricultureDescription: `Avec plus de 13 millions d’ha de terres arables,
ses différents climats, ses 1 160 cours d’eau et
des précipitations de 120 à 430 cm en moyenne,
la Guinée a le potentiel pour devenir une
puissance agricole. Pendant trop
longtemps,
moins de 10
% des terres cultivables ont été
exploitées malgré les 85
% de la population
travaillant dans l’agriculture.
Depuis 2010, nous avons massivement investi
pour moderniser le secteur en renforçant les
moyens des agriculteurs, en subventionnant les
intrants agricoles et en fournissant des machines
 modernes. Nous passons d’une agriculture de
base à une production de m
asse, ce qui se
traduit par une augmentation du rendement des
cultures et des exportations.
La Guinée
dev
ient
ainsi
un pôle régional agro
-
industriel.

                    `,
          investDescription: `La Guinée est une terre aux promesses et au
potentiel incroyables`,
          investDescriptionSmall: `
                           Pour découvrir nos nombreuses perspectives <br /> <br />
                      d’investissement, scannez le QR code ou visitez
                      www.invest.gov.gn
`,
        },
      },
    },
    // whitelist: ['en', 'fr'],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // order and from where user language should be detected
      order: ["localStorage"],

      // keys or params to lookup language from
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: "myDomain",

      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement,

      // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
      cookieOptions: { path: "/", sameSite: "strict" },
    },
  });
const history = createBrowserHistory();

// const SuspendPinchZoom = ({ children }) => {
//   const ref = useRef(null);
//   // const ref = useRef<HTMLDivElement>(null)
//   useLayoutEffect(() => {
//     const target = ref.current;
//     if (!target) return;
//     const disablePinchZoom = (e) => {
//       if (e.touches.length > 1) {
//         e.preventDefault();
//       }
//     };
//     target.addEventListener("touchmove", disablePinchZoom, { passive: false });
//     return () => {
//       target.removeEventListener("touchmove", disablePinchZoom);
//     };
//   }, []);
//   return (
//     <div ref={ref} className="dd">
//       {children}
//     </div>
//   );
// };
function App() {
  const [shouldAppWork, setShouldAppWork] = useState(true);
  // useEffect(() => {
  //   if (window.localStorage.getItem("date") !== null) {
  //     const encodedDate = window.localStorage.getItem("date");
  //     var key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //     var iv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //     var encryptedBytes = aesjs.utils.hex.toBytes(encodedDate);
  //     var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
  //     var decryptedBytes = aesCbc.decrypt(encryptedBytes);
  //     var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

  //     if (new Date() < new Date(decryptedText.trim())) {
  //       setShouldAppWork(true);
  //     } else {
  //       setShouldAppWork(false);
  //       // history.push("/license", { terminate: true });
  //       // window.open(`${window.location.origin}/license`, "self");
  //     }
  //   } else {
  //     setShouldAppWork(false);
  //     // history.push("/license", { terminate: true });
  //     // window.open(`${window.location.origin}/license`, "self");
  //   }
  // }, [shouldAppWork]);

  // if (shouldAppWork) {
  return (
    <Provider store={store}>
      <Background />
      <SuspendPinchZoom>
        <Router history={history}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/invest">
              <Invest />
            </Route>
            <Route path="/industry/:industryName?">
              <Industy />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route path="/license" component={License} /> */}
          </Switch>
        </Router>
      </SuspendPinchZoom>
    </Provider>
  );
  // } else {
  //   return (
  //     <div>
  //       <Router history={history}>
  //         <Switch>
  //           <Route path="/" exact>
  //             <div
  //               onClick={() => window.close()}
  //               className="w-sreen h-screen "
  //             ></div>
  //           </Route>
  //           <Route path="/license" component={License} />
  //         </Switch>
  //       </Router>
  //     </div>
  //   );
  // }
}
export default App;
