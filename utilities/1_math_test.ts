import { assertEquals } from "../0_deps.ts";
import { factorize } from "./1_math.ts";

const cases = [
  [2257831135064100691n, [1169556833n, 1930501427n]],
  [1776192049965773689n, [1108821977n, 1601873057n]],
  [1983240516449274629n, [1395604831n, 1421061659n]],
  [3068379368649715811n, [1732523851n, 1771045961n]],
  [1645922635089833707n, [1075527881n, 1530339347n]],
  [2478712423097309219n, [1397734337n, 1773378787n]],
  [2808703189419985313n, [1561071641n, 1799214793n]],
  [2343573395584243903n, [1393471003n, 1681824301n]],
  [2795998594106210627n, [1656391999n, 1688005373n]],
  [2268311618900776723n, [1239349583n, 1830243581n]],
  [1061888173901644009n, [1018208729n, 1042898321n]],
  [2484404778099730919n, [1482946081n, 1675316999n]],
  [1417774231616296979n, [1035197923n, 1369568273n]],
  [1762591638161834159n, [1084217821n, 1625680379n]],
  [1183061386871015459n, [1068380743n, 1107340613n]],
  [1722073413863249087n, [1238966777n, 1389927031n]],
  [1641658290238131601n, [1081756147n, 1517586283n]],
  [1922316986912721277n, [1343667683n, 1430649119n]],
  [1496853582641020249n, [1043364967n, 1434640447n]],
  [2017569181908254321n, [1384939447n, 1456792343n]],
  [2834703940831571429n, [1448328467n, 1957224487n]],
  [2674916163868814881n, [1476369821n, 1811819861n]],
  [2688903776435193511n, [1408005713n, 1909725047n]],
  [2381114358087549613n, [1256560141n, 1894946593n]],
  [3403917457906279091n, [1779108853n, 1913271047n]],
  [1921138190062940437n, [1230866311n, 1560801667n]],
  [2900605502135615887n, [1572695207n, 1844353241n]],
  [1374012645609870923n, [1138661333n, 1206691231n]],
  [2744092108900346917n, [1599529397n, 1715562161n]],
  [2836101450898194821n, [1676648213n, 1691530417n]],
  [2036964708249874049n, [1208120009n, 1686061561n]],
  [1869703081240991573n, [1111425431n, 1682256883n]],
  [1164849448058440049n, [1065367799n, 1093377751n]],
  [2089613378739644579n, [1231330099n, 1697037521n]],
  [2102840846749463819n, [1318460543n, 1594921333n]],
  [2378261796523543823n, [1300690483n, 1828460981n]],
  [1852574190291745733n, [1075521511n, 1722489203n]],
  [1424928915900234523n, [1123637519n, 1268139317n]],
  [2147405526176989069n, [1391814173n, 1542882353n]],
  [1519861016179687201n, [1109398727n, 1369986263n]],
  [1363846057394096557n, [1044218419n, 1306092703n]],
  [2826209542516130087n, [1456709077n, 1940133131n]],
  [1940778664396783867n, [1254443371n, 1547123377n]],
  [1955357181598241809n, [1396344199n, 1400340391n]],
  [1879610755994877041n, [1330391813n, 1412824957n]],
  [1269097701690659257n, [1049050259n, 1209758723n]],
  [2028869143037308223n, [1102140461n, 1840844443n]],
  [2371518609307750607n, [1498755871n, 1582324817n]],
  [1230471505347142067n, [1033077467n, 1191073801n]],
] as [bigint, [bigint, bigint]][];

Deno.test("factorize", () => {
  for (const [x, y] of cases) {
    assertEquals(factorize(x), y);
  }
});
