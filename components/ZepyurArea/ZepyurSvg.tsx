import * as React from "react";
import { useTranslations } from 'next-intl';

type ZepyurSvgProps = {
  handleClick?: (value: string | null) => void;
};

const ZepyurSvg: React.FC<ZepyurSvgProps> = ({ handleClick }) => {
  const t = useTranslations();

  const handlePathClick = (e: React.MouseEvent<SVGPathElement>) => {
    const value = e.currentTarget.getAttribute("data-value");
    if (handleClick) {
      handleClick(value);
    }
  };
 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1920}
      height={987}
      viewBox="0 0 1920 987"
      fill="none"
    >
      <rect width={1920} height={987} fill="none" />
      <g clipPath="url(#clip0_94_2)">
        <rect width={1920} height={987} fill="url(#pattern0_94_2)" />
        <rect
          x={467}
          y={818}
          width={653}
          height={986}
          transform="rotate(-90 467 818)"
          fill="url(#pattern1_94_2)"
        />
        <g opacity={0.35}>
          <path
            d="M814.5 371L792.5 383L813 424.5L816.361 422.707C819.114 421.239 821.999 420.032 824.977 419.101L836.5 415.5L814.5 371Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B19"
          onClick={handlePathClick}
          />
          <path
            d="M790.5 384L769 395.5L790 438L803.413 429.321C805.797 427.778 808.341 426.497 811 425.5L790.5 384Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B17"
          onClick={handlePathClick}
          />
          <path
            d="M767 396.5L745.5 408L767 452.5L788 439L767 396.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B15"
          onClick={handlePathClick}
          />
          <path
            d="M743.5 409L722 420.5L744.5 466.5L765 453.5L743.5 409Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B13"
          onClick={handlePathClick}
          />
          <path
            d="M720 421.5L699 433L721.5 479L742.5 467.5L720 421.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B11"
          onClick={handlePathClick}
          />
          <path
            d="M697 434L677 445.5L698.5 491.5L719.5 480L697 434Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B09"
          onClick={handlePathClick}
          />
          <path
            d="M652.5 458.5L632 469.5L653.5 516L674.5 505L652.5 458.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B05"
          onClick={handlePathClick}
          />
          <path
            d="M630 470.5L609.5 482L631.5 528C639.506 523.509 652 517 652 517L630 470.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B03"
          onClick={handlePathClick}
          />
          <path
            d="M608 483L588 494.5L589 552.5L630 529L608 483Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B01"
          onClick={handlePathClick}
          />
          <path
            d="M675 446.5L654.5 457.5L676.5 504L696.5 492.5L675 446.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            data-value="B07"
          onClick={handlePathClick}
          />
        </g>
        <g opacity={0.35}>
          <path
            d="M792 251L774.5 270.5L812 346.5L834 335L792 251Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B20"
            onClick={handlePathClick}
          />
          <path
            d="M772.5 272.5L755 292L788.5 359.5L809.5 348L772.5 272.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B18"
            onClick={handlePathClick}
          />
          <path
            d="M753 294L735.5 313L765 372.5L786.5 361L753 294Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B16"
            onClick={handlePathClick}
          />
          <path
            d="M733.5 315L716.5 334L741.5 385.5L763 374L733.5 315Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B14"
            onClick={handlePathClick}
          />
          <path
            d="M709.5 342.5L696 351.5L718.5 398L739.5 387L714.5 336.5L709.5 342.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B12"
            onClick={handlePathClick}
          />
          <path
            d="M694 353L674.5 367L695.5 410.5L716.5 399.5L694 353Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B10"
            onClick={handlePathClick}
          />
          <path
            d="M672.5 368.5L653.5 382L673.5 423L693.5 412L672.5 368.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B08"
            onClick={handlePathClick}
          />
          <path
            d="M651.5 383.5L632.5 397L650.5 435.5L671.5 424.5L651.5 383.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B06"
            onClick={handlePathClick}
          />
          <path
            d="M630.5 398.5L611.5 412L628.5 448L648.5 437L630.5 398.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B04"
            onClick={handlePathClick}
          />
          <path
            d="M605 416H587L588 470.5L626.5 449.5L609.5 413L605 416Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="B02"
            onClick={handlePathClick}
          />
        </g>
        <g opacity={0.35}>
          <path
            d="M1340.5 295L1307 293L1313 369L1343 367L1344 348.5L1340.5 295Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C39"
            onClick={handlePathClick}
          />
          <path
            d="M1304 292.5L1274 290.5L1280.5 372L1310.5 369.5L1304 292.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C38"
            onClick={handlePathClick}
          />
          <path
            d="M1255 307.5L1243.5 320L1248 375L1278 372.5L1271.5 290L1252.5 288.5L1255 307.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C37"
            onClick={handlePathClick}
          />
          <path
            d="M1241 321.043L1212.5 323.482L1216.5 377.482L1245 375.543L1241 321.043Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C36"
            onClick={handlePathClick}
          />
          <path
            d="M1210 324L1181 327L1185.5 380.5L1214 378L1210 324Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C35"
            onClick={handlePathClick}
          />
          <path
            d="M1178.5 327.5L1150 329.5L1154.5 383L1183 381L1178.5 327.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C34"
            onClick={handlePathClick}
          />
          <path
            d="M1147.5 330L1119.5 332.5L1123.5 385L1152 383.5L1147.5 330Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C33"
            onClick={handlePathClick}
          />
          <path
            d="M1087 335.5L1060 338.5L1063.5 390L1091 388L1087 335.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C31"
            onClick={handlePathClick}
          />
          <path
            d="M1117 333L1089.5 335L1093.5 387.5L1121 385.5L1117 333Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C32"
            onClick={handlePathClick}
          />
          <path
            d="M1247 264L1208 268L1212 321L1241.5 318.5L1252 306.5L1247 264Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C23"
            onClick={handlePathClick}
          />
          <path
            d="M1205.5 268.5L1177 271L1180.5 324.5L1209.5 321.5L1205.5 268.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C21"
            onClick={handlePathClick}
          />
          <path
            d="M1174.5 271.5L1145.5 274.5L1149.5 327L1178 325L1174.5 271.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C19"
            onClick={handlePathClick}
          />
          <path
            d="M1143 275L1115.5 277.5L1119 330L1147 327L1143 275Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C17"
            onClick={handlePathClick}
          />
          <path
            d="M1082.5 281L1056 283.5L1059.5 335.5L1086.5 332.5L1082.5 281Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C13"
            onClick={handlePathClick}
          />
          <path
            d="M1112.5 278L1085.5 280.5L1089.5 332.5L1116.5 330L1112.5 278Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C15"
            onClick={handlePathClick}
          />
        </g>
        <g opacity={0.35}>
          <path
            d="M1239.5 200.5L1211 228L1211.5 242L1244.5 237.5L1239.5 200.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C24"
            onClick={handlePathClick}
          />
          <path
            d="M1208 228L1179.5 211L1182 245.5L1209 242L1208 228Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C22"
            onClick={handlePathClick}
          />
          <path
            d="M1177 209.5L1150.5 193.5L1154.5 248.5L1179.5 246L1177 209.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C20"
            onClick={handlePathClick}
          />
          <path
            d="M1137.5 186L1120 187L1125 252.27L1152 248.77L1148 192L1137.5 186Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C18"
            onClick={handlePathClick}
          />
          <path
            d="M1117.28 187.5L1091 189.5L1096.5 255.175L1122.78 252.175L1117.28 187.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C16"
            onClick={handlePathClick}
          />
          <path
            d="M1088.5 190L1061 192.501L1066.5 258.001L1093.5 255.194L1088.5 190Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C14"
            onClick={handlePathClick}
          />
          <path
            d="M1058.5 193L1031.5 195L1037 261.5L1063.5 258.5L1058.5 193Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C12"
            onClick={handlePathClick}
          />
          <path
            d="M1029 195.5L1002.5 198L1007.83 264.5L1034 261.72L1029 195.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C10"
            onClick={handlePathClick}
          />
          <path
            d="M1000 198.5L974 200.5L979.5 267.5L1005 265L1000 198.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C08"
            onClick={handlePathClick}
          />
          <path
            d="M971.5 201L945 203L950 270.5L976.5 268L971.5 201Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C06"
            onClick={handlePathClick}
          />
          <path
            d="M942.5 203.5L917 205L922 273.5L947.5 271L942.5 203.5Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C04"
            onClick={handlePathClick}
          />
          <path
            d="M914 206L890 214L894.5 276.5L919.5 274L914 206Z"
            fill="#C7C7C7"
            stroke="#C7C7C7"
            strokeWidth={1.5}
            data-value="C02"
            onClick={handlePathClick}
          />
        </g>
        <path
          opacity={0.35}
          d="M1037.5 340.5L1011 343L1014.5 394L1040.5 392L1037.5 340.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
                      data-value="C30"
            onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M1008.5 343L982 345.5L985.5 396L1012 394L1008.5 343Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
                        data-value="C29"
            onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M979.5 345.5L953.5 348L956.5 398.5L983 396.5L979.5 345.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
                           data-value="C28"
            onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M951 348.5L925 350.5L928.5 400.5L954 398.5L951 348.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
                           data-value="C27"
            onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M922.5 351L897.5 353L900.5 403L926 401L922.5 351Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
            data-value="C26"
            onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M895 353.5L870 355.5L873.5 405L898 403L895 353.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
          data-value="C25"
          onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M1033 286L1006.5 288.5L1010.5 340L1037 337.5L1033 286Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
          data-value="C11"
          onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M1004 289L978 291.5L981.5 343L1008 340.5L1004 289Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
            data-value="C09"
            onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M975.5 292L949.5 294.5L953 345.5L979 343L975.5 292Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
          data-value="C07"
          onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M946.5 295L921 297.5L924.5 348L950.5 345.5L946.5 295Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
          data-value="C05"
          onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M918.5 297.5L893.5 300L897 350.5L922 348.5L918.5 297.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
          data-value="C03"
          onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M891 300.5L866 303L869.5 352.5L894.5 351L891 300.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
          data-value="C01"
          onClick={handlePathClick}
        />
        <path
          opacity={0.35}
          d="M1045.5 491L1018 490L1017 556L1044.5 557L1045.5 491Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1015 490L987.268 489.5L986.268 555L1014 556L1015 490Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M984.5 489.5L957 488.5L956 553.5L983.5 555L984.5 489.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M954 488.5L926.5 488L925.5 552.5L953.5 553.5L954 488.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1042.5 416L1019 418L1018 487.215L1045.5 488.215L1046 461L1042.5 416Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1016 418L988 420.5L987 486.5L1015 487.5L1016 418Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M985 420.5L957.5 423L957 485.787L984.5 486.5L985 420.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M955 423L927.5 425.5L926.5 485L954 486L955 423Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M923.5 535.5L877 534.5V551L923 552.5L923.5 535.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M923.5 518.5L877.5 517L877 531.5L923.5 532.5V518.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M923.5 501L877.5 500V514L923.5 515.5V501Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M924 484L877.5 483V497L923.5 498L924 484Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M924 466.947L878 466L877.5 480L924 481V466.947Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M924.5 450L876.5 449L877.5 463L924 464.5L924.5 450Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M924.5 425.5L875 429L876 446.5L924.5 447.5V425.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1342 487.5L1309 486.5L1308.5 565L1341 566L1342 487.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1270.5 486L1239 485.5L1238 562.5L1270 563.5L1270.5 486Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1236 485.5L1204 484.5L1203.5 561L1235 562L1236 485.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1201.14 484.5L1170 484L1169.5 560L1200.64 561L1201.14 484.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1167.17 484L1136 483L1135.5 558.5L1166.67 559.5L1167.17 484Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1100 482.5L1070 482L1069.5 556L1099 557L1100 482.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1343 391L1310 393.5L1309.5 484L1342 484.5L1343 391Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1307.5 394L1274.5 396.5L1273.5 483.24L1306.34 483.74L1307.5 394Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1271.5 396.698L1240 399.198L1239 482.5L1270.5 483.001L1271.5 396.698Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1236.96 399.5L1204.96 402L1204 481.737L1236 482.237L1236.96 399.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1202.28 402L1171 404.5L1170 481.175L1201.28 481.675L1202.28 402Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1168 405L1137 407.5L1136 480.5L1167 481L1168 405Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1134 407.5L1104 410L1103 479.5L1133.5 480.5L1134 407.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1101 410L1067 413L1070.5 458L1070 479L1100 479.5L1101 410Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1133.5 483L1103 482.5L1102 557.183L1132.5 558.683L1133.5 483Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1306.5 486.5L1273.5 486L1273 563.5L1305.5 565L1306.5 486.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1339.5 659.5L1307 658L1306 722.5L1339 724.5L1339.5 659.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1304 657.5L1271.5 656L1270.5 720L1303.5 722L1304 657.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1268.5 656L1236 654L1235.5 718L1267.5 720L1268.5 656Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1233.5 654L1201.5 652.5L1201 715.5L1232.5 717.5L1233.5 654Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1199 652.5L1167.5 650.5L1167 713.5L1198 715.5L1199 652.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1165 650.5L1133.5 649L1133 711L1164 713.5L1165 650.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1098 647L1068 645.5L1067 707L1097 709L1098 647Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1131 648.5L1100.5 647L1100 709.143L1130 711.143L1131 648.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1305 590L1272.5 589L1271.5 653L1304 654.5L1305 590Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1269.5 588.5L1237 587.5L1236 651L1268.5 653L1269.5 588.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1234 587L1202.5 586L1201.5 649.5L1233 651L1234 587Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1199.5 586L1168.5 585L1167.5 647.743L1199 649.5L1199.5 586Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1165.5 584.5L1134.5 583.5L1133.5 646L1164.5 647.5L1165.5 584.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1131.5 583.5L1101.5 582L1100.5 644.5L1131 646L1131.5 583.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1098.5 582L1069 581L1068 642.5L1098 644L1098.5 582Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1340 591.5L1307.5 590L1307 654.5L1339.5 656.5L1340 591.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1043.5 645L1016 643.5L1015 705L1043 707L1043.5 645Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1013 643L985 641.5L984.5 703L1012.5 704.5L1013 643Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M982.5 641.5L955 640L954 700.5L981.5 703L982.5 641.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M952 640L925 638.5L924.5 698.5L951 700.5L952 640Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1044 581L1016.5 579.5L1015.5 640.5L1043.5 642L1044 581Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1013.5 579.5L986 578L985 639L1013 640.5L1013.5 579.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M983 578L956 577L955 637.25L968.752 638L982.501 638.5L983 578Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M953 577L926 575.5L925 635.5L952 637L953 577Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M921.5 681.5L875 678.5V695L921.5 698.5V681.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M922.5 630L876 627.5L875.5 641.5L922 644L922.5 630Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M922.752 595.5L876 593.5V607.5L922.752 609.5V595.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M922.997 575.5L876.336 574V590.5L922.997 592.5V575.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M922.5 612.5L876 610.5V624.5L922.5 627V612.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M922.5 647L875.5 644.5V658.5L922 661.5L922.5 647Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M922 664.5L875.5 661.5L875 675.5L922 678.5V664.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1147.5 737.5L1128 736L1127.5 803L1147.5 805.887V737.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1125 735.77L1110 734.77L1109 800.5L1124.5 803L1125 735.77Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1107 734.5L1092 733.5L1091.5 798L1106 800L1107 734.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1089 733L1074 732L1073.5 795.5L1088.5 798L1089 733Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1071.5 732L1056.5 731L1056 793.159L1070.5 795.159L1071.5 732Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1054 730.5L1039 729.5L1038.5 791L1053 793L1054 730.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1036 729.5L1017.5 728L1016.5 788L1035.5 790.5L1036 729.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1014.5 728L995.5 726.5L995 784L1014 787.5L1014.5 728Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M993 726.5L978.5 725.5L978 781L992 783.5L993 726.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M976 725L961.5 724L961 778L975 780.5L976 725Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M958.5 724L944.5 723L944 775L958 777.5L958.5 724Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M941.5 722.85L927.5 721.85L927 774.5L941 774.503L941.5 722.85Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M924.5 721.5L911 720.5L910.5 774L924 774.5L924.5 721.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M908 720.5L894.5 719.5L894 773.5L907.5 774L908 720.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M891.5 719.5L874.5 718L874 773L891 773.5L891.5 719.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1410.5 702.5L1366 700.5V726L1409.5 728.5L1410.5 702.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1411 684L1366.5 681.5L1366 697.5L1410.5 699.5L1411 684Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1412 646L1366.5 644V660L1411.5 662L1412 646Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1413 608L1367 606.5V622.5L1412.5 624L1413 608Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1413.5 589.5L1367.5 587.5L1367 603.5L1413 605L1413.5 589.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1414 561L1367.5 559.5V584.5L1413.5 586.5L1414 561Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1415 531.5L1368 530.5L1367.5 556.5L1414.5 558L1415 531.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1415.5 513L1368 511.5V527.5L1415 528.5L1415.5 513Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1416 494L1368.5 493L1368 509L1415.5 510L1416 494Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1416.5 475L1368.5 474.5V490L1416 491L1416.5 475Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1417 456L1368.5 455.5V471.5L1416.5 472L1417 456Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1417.5 437L1369 436.5L1368.5 452.5L1417 453.5L1417.5 437Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1418.14 418.5L1369 418V433.5L1417.64 434L1418.14 418.5Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1419 385L1369.5 389L1369 415L1418 415.5L1419 385Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1412.5 627L1367 625.5L1366.5 641L1412 643L1412.5 627Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <path
          opacity={0.35}
          d="M1411.5 665L1366.5 663V678.5L1411 681L1411.5 665Z"
          fill="#C7C7C7"
          stroke="#C7C7C7"
          strokeWidth={1.5}
        />
        <text
          transform="matrix(0 -1 0.999915 0.0130265 532.234 711.632)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="matrix(0 -1 0.999915 0.0130265 516 731)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.348145} y={14.55}>
            {t('svg.zepyurComplex')}
          </tspan>
        </text>
        <text
          transform="matrix(0 -1 0.999915 0.0130265 532.164 534.314)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="matrix(0 -1 0.999915 0.0130265 516 549.802)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={5.47593} y={14.55}>
            {t('svg.supermarket')}
          </tspan>
        </text>
        <text
          transform="translate(952.701 622) rotate(2)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{" [E]"}
          </tspan>
        </text>
        <text
          transform="translate(949.699 638.712) rotate(2)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(982.871 738) rotate(2.5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{"[E]"}
          </tspan>
        </text>
        <text
          transform="translate(979.871 754.493) rotate(2.5)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(949.652 469.139) rotate(1)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{" [D]"}
          </tspan>
        </text>
        <text
          transform="translate(947.65 485.921) rotate(1)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(1171.35 467) rotate(1)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{" [D]"}
          </tspan>
        </text>
        <text
          transform="translate(1169.35 483.209) rotate(1)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(1373 492.997) rotate(-89.5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{" [D]"}
          </tspan>
        </text>
        <text
          transform="translate(1389.22 494.997) rotate(-89.5)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(1368 689.997) rotate(-89.5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{"[E]"}
          </tspan>
        </text>
        <text
          transform="translate(1384.22 692.997) rotate(-89.5)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(1169.35 634) rotate(1)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{"[E]"}
          </tspan>
        </text>
        <text
          transform="translate(1166.35 650.567) rotate(1)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(626 439) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.45459} y={4.95}>
            {"B04"}
          </tspan>
        </text>
        <text
          transform="translate(696 400.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.034668} y={4.95}>
            {"B10"}
          </tspan>
        </text>
        <text
          transform="translate(718 388.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.219238} y={4.95}>
            {"B12"}
          </tspan>
        </text>
        <text
          transform="translate(741 375.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.03125} y={4.95}>
            {"B14"}
          </tspan>
        </text>
        <text
          transform="translate(765 362.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0107422} y={4.95}>
            {"B16"}
          </tspan>
        </text>
        <text
          transform="translate(789 349.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0244141} y={4.95}>
            {"B18"}
          </tspan>
        </text>
        <text
          transform="translate(812 336.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.142578} y={4.95}>
            {"B20"}
          </tspan>
        </text>
        <text
          transform="translate(593.135 495) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.034668} y={7.95}>
            {"B01"}
          </tspan>
        </text>
        <text
          transform="translate(615 483.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0947266} y={7.95}>
            {"B03"}
          </tspan>
        </text>
        <text
          transform="translate(659 459.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.245117} y={7.95}>
            {"B07"}
          </tspan>
        </text>
        <text
          transform="translate(706 433.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.111328} y={7.95}>
            {"B11"}
          </tspan>
        </text>
        <text
          transform="translate(729 420.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.171387} y={7.95}>
            {"B13"}
          </tspan>
        </text>
        <text
          transform="translate(752 408.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.034668} y={7.95}>
            {"B15"}
          </tspan>
        </text>
        <text
          transform="translate(775 395.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.321777} y={7.95}>
            {"B17"}
          </tspan>
        </text>
        <text
          transform="translate(798 383.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.135742} y={7.95}>
            {"B29"}
          </tspan>
        </text>
        <text
          transform="translate(598 454.5) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.142578} y={4.95}>
            {"B02"}
          </tspan>
        </text>
        <text
          transform="translate(650 426) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.434082} y={4.95}>
            {"B06"}
          </tspan>
        </text>
        <text
          transform="translate(672 414) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.447754} y={4.95}>
            {"B08"}
          </tspan>
        </text>
        <text
          transform="translate(636 472) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.458008} y={7.95}>
            {"B05"}
          </tspan>
        </text>
        <text
          transform="translate(681 447) rotate(-30)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.451172} y={7.95}>
            {"B09"}
          </tspan>
        </text>
        <text
          transform="translate(879 396.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          className="upToTop"
          letterSpacing="0em"
        >
          <tspan x={0.0854492} y={4.95}>
            {"C25"}
          </tspan>
        </text>
        <text
          transform="translate(907 394.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.0615234} y={4.95}>
            {"C26"}
          </tspan>
        </text>
        <text
          transform="translate(934 392.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.372559} y={4.95}>
            {"C27"}
          </tspan>
        </text>
        <text
          transform="translate(962 389.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.0751953} y={4.95}>
            {"C28"}
          </tspan>
        </text>
        <text
          transform="translate(991 387.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.0786133} y={4.95}>
            {"C29"}
          </tspan>
        </text>
        <text
          transform="translate(1020 385.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.0375977} y={4.95}>
            {"C30"}
          </tspan>
        </text>
        <text
          transform="translate(1071 381.046) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.114258} y={4.95}>
            {"C31"}
          </tspan>
        </text>
        <text
          transform="translate(1100 378.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.222168} y={4.95}>
            {"C32"}
          </tspan>
        </text>
        <text
          transform="translate(1131 375.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
          className="upToTop"
        >
          <tspan x={0.174316} y={4.95}>
            {"C33"}
          </tspan>
        </text>
        <text
          transform="translate(1162 373.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          className="upToTop"
          letterSpacing="0em"
        >
          <tspan x={0.0341797} y={4.95}>
            {"C34"}
          </tspan>
        </text>
        <text
          transform="translate(1193 370.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          className="upToTop"
          letterSpacing="0em"
        >
          <tspan x={0.0375977} y={4.95}>
            {"C35"}
          </tspan>
        </text>
        <text
          transform="translate(1223 367.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          className="upToTop"
          letterSpacing="0em"
        >
          <tspan x={0.0136719} y={4.95}>
            {"C36"}
          </tspan>
        </text>
        <text
          transform="translate(1256 365.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          className="upToTop"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.324707} y={4.95}>
            {"C37"}
          </tspan>
        </text>
        <text
          transform="translate(1288 362.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          className="upToTop"
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0273438} y={4.95}>
            {"C38"}
          </tspan>
        </text>
        <text
          transform="translate(1321 359.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          className="upToTop"
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0307617} y={4.95}>
            {"C39"}
          </tspan>
        </text>
        <text
          transform="translate(872 306.133) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.477539} y={7.95}>
            {"C01"}
          </tspan>
        </text>
        <text
          transform="translate(899 303.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0375977} y={7.95}>
            {"C03"}
          </tspan>
        </text>
        <text
          transform="translate(927 300.308) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.400879} y={7.95}>
            {"C05"}
          </tspan>
        </text>
        <text
          transform="translate(956 297.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.187988} y={7.95}>
            {"C07"}
          </tspan>
        </text>
        <text
          transform="translate(984 294.308) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.394043} y={7.95}>
            {"C09"}
          </tspan>
        </text>
        <text
          transform="translate(1014 290.871) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0541992} y={7.95}>
            {"C11"}
          </tspan>
        </text>
        <text
          transform="translate(1062 286.046) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.114258} y={7.95}>
            {"C13"}
          </tspan>
        </text>
        <text
          transform="translate(1092 283.133) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.477539} y={7.95}>
            {"C15"}
          </tspan>
        </text>
        <text
          transform="translate(1124 280.046) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.264648} y={7.95}>
            {"C17"}
          </tspan>
        </text>
        <text
          transform="translate(1154 276.133) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.470703} y={7.95}>
            {"C19"}
          </tspan>
        </text>
        <text
          transform="translate(1186 273.046) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.162109} y={7.95}>
            {"C21"}
          </tspan>
        </text>
        <text
          transform="translate(1221 269.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.222168} y={7.95}>
            {"C23"}
          </tspan>
        </text>
        <text
          transform="translate(898 267.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0854492} y={4.95}>
            {"C02"}
          </tspan>
        </text>
        <text
          transform="translate(926 264.308) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.397461} y={4.95}>
            {"C04"}
          </tspan>
        </text>
        <text
          transform="translate(955 261.308) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.376953} y={4.95}>
            {"C06"}
          </tspan>
        </text>
        <text
          transform="translate(984 258.308) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.390625} y={4.95}>
            {"C08"}
          </tspan>
        </text>
        <text
          transform="translate(1013 255.133) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.477539} y={4.95}>
            {"C10"}
          </tspan>
        </text>
        <text
          transform="translate(1044 251.046) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.162109} y={4.95}>
            {"C12"}
          </tspan>
        </text>
        <text
          transform="translate(1074 248.133) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.474121} y={4.95}>
            {"C14"}
          </tspan>
        </text>
        <text
          transform="translate(1102 245.133) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.453613} y={4.95}>
            {"C16"}
          </tspan>
        </text>
        <text
          transform="translate(1132 242.133) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.467285} y={4.95}>
            {"C18"}
          </tspan>
        </text>
        <text
          transform="translate(1159 239.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0854492} y={4.95}>
            {"C20"}
          </tspan>
        </text>
        <text
          transform="translate(1187 236.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.27002} y={4.95}>
            {"C22"}
          </tspan>
        </text>
        <text
          transform="translate(1220 232.22) rotate(-5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={8}
          letterSpacing="0em"
        >
          <tspan x={0.0820312} y={4.95}>
            {"C24"}
          </tspan>
        </text>
        <text
          transform="translate(775.273 576.128) rotate(1.5)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(784.695 598.354) rotate(1.5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.0249023} y={11.05}>
            {t('svg.sports')}
          </tspan>
          <tspan x={3.38281} y={24.05}>
            {t('svg.area')}
          </tspan>
        </text>
        <text
          transform="translate(780 548.423) rotate(1.5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.182129} y={11.05}>
            {t('svg.wellness')}
          </tspan>
          <tspan x={1.33105} y={24.05}>
            {t('svg.complex')}
          </tspan>
        </text>
        <text
          transform="translate(817 256.403) rotate(-14.0757)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.236328} y={11.05}>
            {t('svg.lounge')}
          </tspan>
        </text>
        <text
          transform="translate(631.055 615.62) rotate(1.5)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(633.488 599.155) rotate(1.5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
             {t('svg.block')}{" [A]"}
          </tspan>
        </text>
        <text
          transform="translate(690.861 733.117) rotate(2.5)"
          fill="#989F42"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0.108398} y={14.55}>
            
             {t('svg.phase')}
          </tspan>
        </text>
        <text
          transform="translate(685.867 716) rotate(2.5)"
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={0} y={14.55}>
            {t('svg.familyPark')}
          </tspan>
        </text>
        <text
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={563.225} y={351.55}>
             {t('svg.block')}{""}
          </tspan>
        </text>
        <text
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={30}
          letterSpacing="0em"
        >
          <tspan x={562.115} y={390}>
            {"[B]"}
          </tspan>
        </text>
        <text
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={13}
          letterSpacing="0em"
        >
          <tspan x={1267.34} y={233.55}>
             {t('svg.block')}{""}
          </tspan>
        </text>
        <text
          fill="white"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
          }}
          fontFamily="Poppins"
          fontSize={30}
          letterSpacing="0em"
        >
          <tspan x={1264.23} y={272}>
            {"[C]"}
          </tspan>
        </text>
      </g>
    </svg>
  )
}
export default ZepyurSvg;
