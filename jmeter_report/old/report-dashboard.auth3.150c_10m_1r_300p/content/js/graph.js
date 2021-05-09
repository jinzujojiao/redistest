/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 2687.0, "series": [{"data": [[0.0, 30.0], [0.1, 76.0], [0.2, 86.0], [0.3, 91.0], [0.4, 96.0], [0.5, 100.0], [0.6, 103.0], [0.7, 106.0], [0.8, 108.0], [0.9, 111.0], [1.0, 114.0], [1.1, 116.0], [1.2, 118.0], [1.3, 120.0], [1.4, 122.0], [1.5, 125.0], [1.6, 126.0], [1.7, 128.0], [1.8, 130.0], [1.9, 132.0], [2.0, 133.0], [2.1, 135.0], [2.2, 136.0], [2.3, 138.0], [2.4, 139.0], [2.5, 140.0], [2.6, 142.0], [2.7, 143.0], [2.8, 144.0], [2.9, 146.0], [3.0, 147.0], [3.1, 148.0], [3.2, 150.0], [3.3, 151.0], [3.4, 152.0], [3.5, 153.0], [3.6, 154.0], [3.7, 156.0], [3.8, 157.0], [3.9, 157.0], [4.0, 158.0], [4.1, 160.0], [4.2, 161.0], [4.3, 162.0], [4.4, 162.0], [4.5, 163.0], [4.6, 164.0], [4.7, 165.0], [4.8, 166.0], [4.9, 167.0], [5.0, 168.0], [5.1, 169.0], [5.2, 170.0], [5.3, 171.0], [5.4, 172.0], [5.5, 173.0], [5.6, 173.0], [5.7, 174.0], [5.8, 175.0], [5.9, 176.0], [6.0, 177.0], [6.1, 177.0], [6.2, 178.0], [6.3, 179.0], [6.4, 180.0], [6.5, 180.0], [6.6, 181.0], [6.7, 182.0], [6.8, 183.0], [6.9, 183.0], [7.0, 184.0], [7.1, 185.0], [7.2, 185.0], [7.3, 186.0], [7.4, 187.0], [7.5, 187.0], [7.6, 188.0], [7.7, 189.0], [7.8, 189.0], [7.9, 190.0], [8.0, 191.0], [8.1, 191.0], [8.2, 192.0], [8.3, 192.0], [8.4, 193.0], [8.5, 194.0], [8.6, 194.0], [8.7, 195.0], [8.8, 195.0], [8.9, 196.0], [9.0, 197.0], [9.1, 197.0], [9.2, 198.0], [9.3, 198.0], [9.4, 199.0], [9.5, 200.0], [9.6, 200.0], [9.7, 201.0], [9.8, 201.0], [9.9, 202.0], [10.0, 202.0], [10.1, 203.0], [10.2, 203.0], [10.3, 204.0], [10.4, 205.0], [10.5, 205.0], [10.6, 206.0], [10.7, 206.0], [10.8, 207.0], [10.9, 207.0], [11.0, 208.0], [11.1, 208.0], [11.2, 209.0], [11.3, 209.0], [11.4, 210.0], [11.5, 210.0], [11.6, 211.0], [11.7, 211.0], [11.8, 212.0], [11.9, 212.0], [12.0, 213.0], [12.1, 213.0], [12.2, 214.0], [12.3, 214.0], [12.4, 215.0], [12.5, 215.0], [12.6, 216.0], [12.7, 216.0], [12.8, 217.0], [12.9, 217.0], [13.0, 218.0], [13.1, 218.0], [13.2, 218.0], [13.3, 219.0], [13.4, 219.0], [13.5, 220.0], [13.6, 220.0], [13.7, 221.0], [13.8, 221.0], [13.9, 221.0], [14.0, 222.0], [14.1, 222.0], [14.2, 223.0], [14.3, 223.0], [14.4, 224.0], [14.5, 224.0], [14.6, 224.0], [14.7, 225.0], [14.8, 225.0], [14.9, 226.0], [15.0, 226.0], [15.1, 226.0], [15.2, 227.0], [15.3, 227.0], [15.4, 228.0], [15.5, 228.0], [15.6, 229.0], [15.7, 229.0], [15.8, 229.0], [15.9, 230.0], [16.0, 230.0], [16.1, 231.0], [16.2, 231.0], [16.3, 231.0], [16.4, 232.0], [16.5, 232.0], [16.6, 233.0], [16.7, 233.0], [16.8, 233.0], [16.9, 234.0], [17.0, 234.0], [17.1, 234.0], [17.2, 235.0], [17.3, 235.0], [17.4, 236.0], [17.5, 236.0], [17.6, 236.0], [17.7, 237.0], [17.8, 237.0], [17.9, 237.0], [18.0, 238.0], [18.1, 238.0], [18.2, 238.0], [18.3, 239.0], [18.4, 239.0], [18.5, 240.0], [18.6, 240.0], [18.7, 240.0], [18.8, 241.0], [18.9, 241.0], [19.0, 241.0], [19.1, 242.0], [19.2, 242.0], [19.3, 242.0], [19.4, 243.0], [19.5, 243.0], [19.6, 243.0], [19.7, 244.0], [19.8, 244.0], [19.9, 244.0], [20.0, 245.0], [20.1, 245.0], [20.2, 245.0], [20.3, 246.0], [20.4, 246.0], [20.5, 246.0], [20.6, 247.0], [20.7, 247.0], [20.8, 247.0], [20.9, 248.0], [21.0, 248.0], [21.1, 248.0], [21.2, 249.0], [21.3, 249.0], [21.4, 249.0], [21.5, 250.0], [21.6, 250.0], [21.7, 250.0], [21.8, 250.0], [21.9, 251.0], [22.0, 251.0], [22.1, 251.0], [22.2, 252.0], [22.3, 252.0], [22.4, 252.0], [22.5, 253.0], [22.6, 253.0], [22.7, 253.0], [22.8, 254.0], [22.9, 254.0], [23.0, 254.0], [23.1, 255.0], [23.2, 255.0], [23.3, 255.0], [23.4, 255.0], [23.5, 256.0], [23.6, 256.0], [23.7, 256.0], [23.8, 257.0], [23.9, 257.0], [24.0, 257.0], [24.1, 258.0], [24.2, 258.0], [24.3, 258.0], [24.4, 258.0], [24.5, 259.0], [24.6, 259.0], [24.7, 259.0], [24.8, 260.0], [24.9, 260.0], [25.0, 260.0], [25.1, 260.0], [25.2, 261.0], [25.3, 261.0], [25.4, 261.0], [25.5, 262.0], [25.6, 262.0], [25.7, 262.0], [25.8, 262.0], [25.9, 263.0], [26.0, 263.0], [26.1, 263.0], [26.2, 264.0], [26.3, 264.0], [26.4, 264.0], [26.5, 264.0], [26.6, 265.0], [26.7, 265.0], [26.8, 265.0], [26.9, 265.0], [27.0, 266.0], [27.1, 266.0], [27.2, 266.0], [27.3, 266.0], [27.4, 267.0], [27.5, 267.0], [27.6, 267.0], [27.7, 267.0], [27.8, 268.0], [27.9, 268.0], [28.0, 268.0], [28.1, 269.0], [28.2, 269.0], [28.3, 269.0], [28.4, 269.0], [28.5, 270.0], [28.6, 270.0], [28.7, 270.0], [28.8, 270.0], [28.9, 271.0], [29.0, 271.0], [29.1, 271.0], [29.2, 271.0], [29.3, 272.0], [29.4, 272.0], [29.5, 272.0], [29.6, 272.0], [29.7, 273.0], [29.8, 273.0], [29.9, 273.0], [30.0, 273.0], [30.1, 274.0], [30.2, 274.0], [30.3, 274.0], [30.4, 274.0], [30.5, 275.0], [30.6, 275.0], [30.7, 275.0], [30.8, 275.0], [30.9, 276.0], [31.0, 276.0], [31.1, 276.0], [31.2, 276.0], [31.3, 276.0], [31.4, 277.0], [31.5, 277.0], [31.6, 277.0], [31.7, 277.0], [31.8, 278.0], [31.9, 278.0], [32.0, 278.0], [32.1, 278.0], [32.2, 279.0], [32.3, 279.0], [32.4, 279.0], [32.5, 279.0], [32.6, 280.0], [32.7, 280.0], [32.8, 280.0], [32.9, 280.0], [33.0, 281.0], [33.1, 281.0], [33.2, 281.0], [33.3, 281.0], [33.4, 281.0], [33.5, 282.0], [33.6, 282.0], [33.7, 282.0], [33.8, 282.0], [33.9, 283.0], [34.0, 283.0], [34.1, 283.0], [34.2, 283.0], [34.3, 284.0], [34.4, 284.0], [34.5, 284.0], [34.6, 284.0], [34.7, 284.0], [34.8, 285.0], [34.9, 285.0], [35.0, 285.0], [35.1, 285.0], [35.2, 286.0], [35.3, 286.0], [35.4, 286.0], [35.5, 286.0], [35.6, 286.0], [35.7, 287.0], [35.8, 287.0], [35.9, 287.0], [36.0, 287.0], [36.1, 288.0], [36.2, 288.0], [36.3, 288.0], [36.4, 288.0], [36.5, 289.0], [36.6, 289.0], [36.7, 289.0], [36.8, 289.0], [36.9, 289.0], [37.0, 290.0], [37.1, 290.0], [37.2, 290.0], [37.3, 290.0], [37.4, 291.0], [37.5, 291.0], [37.6, 291.0], [37.7, 291.0], [37.8, 291.0], [37.9, 292.0], [38.0, 292.0], [38.1, 292.0], [38.2, 292.0], [38.3, 293.0], [38.4, 293.0], [38.5, 293.0], [38.6, 293.0], [38.7, 293.0], [38.8, 294.0], [38.9, 294.0], [39.0, 294.0], [39.1, 294.0], [39.2, 294.0], [39.3, 295.0], [39.4, 295.0], [39.5, 295.0], [39.6, 295.0], [39.7, 295.0], [39.8, 296.0], [39.9, 296.0], [40.0, 296.0], [40.1, 296.0], [40.2, 297.0], [40.3, 297.0], [40.4, 297.0], [40.5, 297.0], [40.6, 297.0], [40.7, 298.0], [40.8, 298.0], [40.9, 298.0], [41.0, 298.0], [41.1, 298.0], [41.2, 299.0], [41.3, 299.0], [41.4, 299.0], [41.5, 299.0], [41.6, 299.0], [41.7, 300.0], [41.8, 300.0], [41.9, 300.0], [42.0, 300.0], [42.1, 300.0], [42.2, 301.0], [42.3, 301.0], [42.4, 301.0], [42.5, 301.0], [42.6, 301.0], [42.7, 302.0], [42.8, 302.0], [42.9, 302.0], [43.0, 302.0], [43.1, 302.0], [43.2, 303.0], [43.3, 303.0], [43.4, 303.0], [43.5, 303.0], [43.6, 303.0], [43.7, 304.0], [43.8, 304.0], [43.9, 304.0], [44.0, 304.0], [44.1, 304.0], [44.2, 305.0], [44.3, 305.0], [44.4, 305.0], [44.5, 305.0], [44.6, 305.0], [44.7, 306.0], [44.8, 306.0], [44.9, 306.0], [45.0, 306.0], [45.1, 306.0], [45.2, 307.0], [45.3, 307.0], [45.4, 307.0], [45.5, 307.0], [45.6, 307.0], [45.7, 308.0], [45.8, 308.0], [45.9, 308.0], [46.0, 308.0], [46.1, 308.0], [46.2, 308.0], [46.3, 309.0], [46.4, 309.0], [46.5, 309.0], [46.6, 309.0], [46.7, 309.0], [46.8, 310.0], [46.9, 310.0], [47.0, 310.0], [47.1, 310.0], [47.2, 310.0], [47.3, 311.0], [47.4, 311.0], [47.5, 311.0], [47.6, 311.0], [47.7, 311.0], [47.8, 312.0], [47.9, 312.0], [48.0, 312.0], [48.1, 312.0], [48.2, 312.0], [48.3, 313.0], [48.4, 313.0], [48.5, 313.0], [48.6, 313.0], [48.7, 313.0], [48.8, 313.0], [48.9, 314.0], [49.0, 314.0], [49.1, 314.0], [49.2, 314.0], [49.3, 314.0], [49.4, 315.0], [49.5, 315.0], [49.6, 315.0], [49.7, 315.0], [49.8, 315.0], [49.9, 316.0], [50.0, 316.0], [50.1, 316.0], [50.2, 316.0], [50.3, 316.0], [50.4, 317.0], [50.5, 317.0], [50.6, 317.0], [50.7, 317.0], [50.8, 317.0], [50.9, 317.0], [51.0, 318.0], [51.1, 318.0], [51.2, 318.0], [51.3, 318.0], [51.4, 318.0], [51.5, 319.0], [51.6, 319.0], [51.7, 319.0], [51.8, 319.0], [51.9, 319.0], [52.0, 319.0], [52.1, 320.0], [52.2, 320.0], [52.3, 320.0], [52.4, 320.0], [52.5, 320.0], [52.6, 321.0], [52.7, 321.0], [52.8, 321.0], [52.9, 321.0], [53.0, 321.0], [53.1, 322.0], [53.2, 322.0], [53.3, 322.0], [53.4, 322.0], [53.5, 322.0], [53.6, 323.0], [53.7, 323.0], [53.8, 323.0], [53.9, 323.0], [54.0, 323.0], [54.1, 324.0], [54.2, 324.0], [54.3, 324.0], [54.4, 324.0], [54.5, 324.0], [54.6, 325.0], [54.7, 325.0], [54.8, 325.0], [54.9, 325.0], [55.0, 325.0], [55.1, 325.0], [55.2, 326.0], [55.3, 326.0], [55.4, 326.0], [55.5, 326.0], [55.6, 326.0], [55.7, 327.0], [55.8, 327.0], [55.9, 327.0], [56.0, 327.0], [56.1, 327.0], [56.2, 328.0], [56.3, 328.0], [56.4, 328.0], [56.5, 328.0], [56.6, 328.0], [56.7, 329.0], [56.8, 329.0], [56.9, 329.0], [57.0, 329.0], [57.1, 329.0], [57.2, 330.0], [57.3, 330.0], [57.4, 330.0], [57.5, 330.0], [57.6, 330.0], [57.7, 331.0], [57.8, 331.0], [57.9, 331.0], [58.0, 331.0], [58.1, 331.0], [58.2, 332.0], [58.3, 332.0], [58.4, 332.0], [58.5, 332.0], [58.6, 332.0], [58.7, 333.0], [58.8, 333.0], [58.9, 333.0], [59.0, 333.0], [59.1, 333.0], [59.2, 334.0], [59.3, 334.0], [59.4, 334.0], [59.5, 334.0], [59.6, 334.0], [59.7, 335.0], [59.8, 335.0], [59.9, 335.0], [60.0, 335.0], [60.1, 335.0], [60.2, 336.0], [60.3, 336.0], [60.4, 336.0], [60.5, 336.0], [60.6, 336.0], [60.7, 337.0], [60.8, 337.0], [60.9, 337.0], [61.0, 337.0], [61.1, 337.0], [61.2, 338.0], [61.3, 338.0], [61.4, 338.0], [61.5, 338.0], [61.6, 338.0], [61.7, 339.0], [61.8, 339.0], [61.9, 339.0], [62.0, 339.0], [62.1, 339.0], [62.2, 340.0], [62.3, 340.0], [62.4, 340.0], [62.5, 340.0], [62.6, 340.0], [62.7, 341.0], [62.8, 341.0], [62.9, 341.0], [63.0, 341.0], [63.1, 341.0], [63.2, 342.0], [63.3, 342.0], [63.4, 342.0], [63.5, 342.0], [63.6, 342.0], [63.7, 343.0], [63.8, 343.0], [63.9, 343.0], [64.0, 343.0], [64.1, 344.0], [64.2, 344.0], [64.3, 344.0], [64.4, 344.0], [64.5, 344.0], [64.6, 345.0], [64.7, 345.0], [64.8, 345.0], [64.9, 345.0], [65.0, 345.0], [65.1, 346.0], [65.2, 346.0], [65.3, 346.0], [65.4, 346.0], [65.5, 346.0], [65.6, 347.0], [65.7, 347.0], [65.8, 347.0], [65.9, 347.0], [66.0, 348.0], [66.1, 348.0], [66.2, 348.0], [66.3, 348.0], [66.4, 349.0], [66.5, 349.0], [66.6, 349.0], [66.7, 349.0], [66.8, 349.0], [66.9, 350.0], [67.0, 350.0], [67.1, 350.0], [67.2, 350.0], [67.3, 350.0], [67.4, 351.0], [67.5, 351.0], [67.6, 351.0], [67.7, 351.0], [67.8, 352.0], [67.9, 352.0], [68.0, 352.0], [68.1, 352.0], [68.2, 353.0], [68.3, 353.0], [68.4, 353.0], [68.5, 353.0], [68.6, 354.0], [68.7, 354.0], [68.8, 354.0], [68.9, 354.0], [69.0, 355.0], [69.1, 355.0], [69.2, 355.0], [69.3, 355.0], [69.4, 356.0], [69.5, 356.0], [69.6, 356.0], [69.7, 356.0], [69.8, 356.0], [69.9, 357.0], [70.0, 357.0], [70.1, 357.0], [70.2, 357.0], [70.3, 358.0], [70.4, 358.0], [70.5, 358.0], [70.6, 358.0], [70.7, 359.0], [70.8, 359.0], [70.9, 359.0], [71.0, 359.0], [71.1, 360.0], [71.2, 360.0], [71.3, 360.0], [71.4, 360.0], [71.5, 361.0], [71.6, 361.0], [71.7, 361.0], [71.8, 362.0], [71.9, 362.0], [72.0, 362.0], [72.1, 362.0], [72.2, 363.0], [72.3, 363.0], [72.4, 363.0], [72.5, 363.0], [72.6, 364.0], [72.7, 364.0], [72.8, 364.0], [72.9, 365.0], [73.0, 365.0], [73.1, 365.0], [73.2, 365.0], [73.3, 366.0], [73.4, 366.0], [73.5, 366.0], [73.6, 367.0], [73.7, 367.0], [73.8, 367.0], [73.9, 368.0], [74.0, 368.0], [74.1, 368.0], [74.2, 368.0], [74.3, 369.0], [74.4, 369.0], [74.5, 369.0], [74.6, 370.0], [74.7, 370.0], [74.8, 370.0], [74.9, 371.0], [75.0, 371.0], [75.1, 371.0], [75.2, 372.0], [75.3, 372.0], [75.4, 372.0], [75.5, 373.0], [75.6, 373.0], [75.7, 373.0], [75.8, 374.0], [75.9, 374.0], [76.0, 374.0], [76.1, 375.0], [76.2, 375.0], [76.3, 375.0], [76.4, 376.0], [76.5, 376.0], [76.6, 376.0], [76.7, 377.0], [76.8, 377.0], [76.9, 377.0], [77.0, 378.0], [77.1, 378.0], [77.2, 379.0], [77.3, 379.0], [77.4, 379.0], [77.5, 380.0], [77.6, 380.0], [77.7, 380.0], [77.8, 381.0], [77.9, 381.0], [78.0, 382.0], [78.1, 382.0], [78.2, 382.0], [78.3, 383.0], [78.4, 383.0], [78.5, 384.0], [78.6, 384.0], [78.7, 384.0], [78.8, 385.0], [78.9, 385.0], [79.0, 386.0], [79.1, 386.0], [79.2, 387.0], [79.3, 387.0], [79.4, 387.0], [79.5, 388.0], [79.6, 388.0], [79.7, 389.0], [79.8, 389.0], [79.9, 390.0], [80.0, 390.0], [80.1, 391.0], [80.2, 391.0], [80.3, 392.0], [80.4, 392.0], [80.5, 392.0], [80.6, 393.0], [80.7, 393.0], [80.8, 394.0], [80.9, 394.0], [81.0, 395.0], [81.1, 395.0], [81.2, 396.0], [81.3, 396.0], [81.4, 397.0], [81.5, 397.0], [81.6, 398.0], [81.7, 398.0], [81.8, 399.0], [81.9, 399.0], [82.0, 400.0], [82.1, 400.0], [82.2, 401.0], [82.3, 402.0], [82.4, 402.0], [82.5, 403.0], [82.6, 403.0], [82.7, 404.0], [82.8, 404.0], [82.9, 405.0], [83.0, 405.0], [83.1, 406.0], [83.2, 407.0], [83.3, 407.0], [83.4, 408.0], [83.5, 408.0], [83.6, 409.0], [83.7, 410.0], [83.8, 410.0], [83.9, 411.0], [84.0, 411.0], [84.1, 412.0], [84.2, 413.0], [84.3, 413.0], [84.4, 414.0], [84.5, 414.0], [84.6, 415.0], [84.7, 416.0], [84.8, 416.0], [84.9, 417.0], [85.0, 418.0], [85.1, 418.0], [85.2, 419.0], [85.3, 420.0], [85.4, 421.0], [85.5, 421.0], [85.6, 422.0], [85.7, 423.0], [85.8, 423.0], [85.9, 424.0], [86.0, 425.0], [86.1, 426.0], [86.2, 427.0], [86.3, 428.0], [86.4, 429.0], [86.5, 429.0], [86.6, 430.0], [86.7, 431.0], [86.8, 432.0], [86.9, 433.0], [87.0, 434.0], [87.1, 434.0], [87.2, 435.0], [87.3, 436.0], [87.4, 437.0], [87.5, 438.0], [87.6, 439.0], [87.7, 440.0], [87.8, 441.0], [87.9, 442.0], [88.0, 443.0], [88.1, 444.0], [88.2, 445.0], [88.3, 446.0], [88.4, 447.0], [88.5, 448.0], [88.6, 449.0], [88.7, 450.0], [88.8, 451.0], [88.9, 452.0], [89.0, 453.0], [89.1, 455.0], [89.2, 456.0], [89.3, 457.0], [89.4, 458.0], [89.5, 459.0], [89.6, 460.0], [89.7, 462.0], [89.8, 463.0], [89.9, 464.0], [90.0, 465.0], [90.1, 467.0], [90.2, 468.0], [90.3, 469.0], [90.4, 471.0], [90.5, 472.0], [90.6, 474.0], [90.7, 475.0], [90.8, 477.0], [90.9, 478.0], [91.0, 480.0], [91.1, 481.0], [91.2, 483.0], [91.3, 485.0], [91.4, 486.0], [91.5, 488.0], [91.6, 489.0], [91.7, 491.0], [91.8, 493.0], [91.9, 495.0], [92.0, 497.0], [92.1, 499.0], [92.2, 501.0], [92.3, 503.0], [92.4, 505.0], [92.5, 508.0], [92.6, 510.0], [92.7, 512.0], [92.8, 514.0], [92.9, 517.0], [93.0, 519.0], [93.1, 521.0], [93.2, 523.0], [93.3, 526.0], [93.4, 528.0], [93.5, 531.0], [93.6, 534.0], [93.7, 536.0], [93.8, 539.0], [93.9, 541.0], [94.0, 544.0], [94.1, 547.0], [94.2, 550.0], [94.3, 553.0], [94.4, 555.0], [94.5, 558.0], [94.6, 561.0], [94.7, 564.0], [94.8, 567.0], [94.9, 570.0], [95.0, 573.0], [95.1, 577.0], [95.2, 580.0], [95.3, 583.0], [95.4, 586.0], [95.5, 589.0], [95.6, 592.0], [95.7, 595.0], [95.8, 598.0], [95.9, 602.0], [96.0, 605.0], [96.1, 608.0], [96.2, 612.0], [96.3, 615.0], [96.4, 619.0], [96.5, 622.0], [96.6, 625.0], [96.7, 629.0], [96.8, 633.0], [96.9, 636.0], [97.0, 640.0], [97.1, 643.0], [97.2, 647.0], [97.3, 651.0], [97.4, 655.0], [97.5, 659.0], [97.6, 663.0], [97.7, 668.0], [97.8, 673.0], [97.9, 678.0], [98.0, 683.0], [98.1, 688.0], [98.2, 693.0], [98.3, 699.0], [98.4, 705.0], [98.5, 711.0], [98.6, 718.0], [98.7, 726.0], [98.8, 734.0], [98.9, 743.0], [99.0, 753.0], [99.1, 766.0], [99.2, 779.0], [99.3, 795.0], [99.4, 813.0], [99.5, 836.0], [99.6, 867.0], [99.7, 908.0], [99.8, 960.0], [99.9, 1056.0], [100.0, 2687.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 109664.0, "series": [{"data": [[0.0, 1340.0], [600.0, 6746.0], [2500.0, 1.0], [2600.0, 1.0], [700.0, 2776.0], [200.0, 87485.0], [800.0, 941.0], [900.0, 465.0], [1000.0, 192.0], [1100.0, 90.0], [300.0, 109664.0], [1200.0, 40.0], [1300.0, 37.0], [1400.0, 24.0], [1500.0, 13.0], [100.0, 24498.0], [400.0, 27790.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 4.0], [500.0, 10078.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 250890.0, "series": [{"data": [[0.0, 250890.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21276.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 29.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 148.13720622310484, "minX": 1.6201227E12, "maxY": 150.0, "series": [{"data": [[1.62012282E12, 150.0], [1.6201233E12, 148.13720622310484], [1.62012312E12, 150.0], [1.6201227E12, 149.97229669347536], [1.62012318E12, 150.0], [1.620123E12, 150.0], [1.62012306E12, 150.0], [1.62012288E12, 150.0], [1.62012294E12, 150.0], [1.62012276E12, 150.0], [1.62012324E12, 150.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6201233E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 107.0, "minX": 1.0, "maxY": 802.0, "series": [{"data": [[2.0, 529.0], [3.0, 663.0], [4.0, 635.0], [5.0, 558.0], [6.0, 519.0], [7.0, 550.0], [8.0, 392.0], [9.0, 187.0], [10.0, 175.0], [13.0, 287.3333333333333], [15.0, 318.0], [16.0, 190.0], [17.0, 191.0], [18.0, 487.0], [19.0, 280.0], [23.0, 207.0], [24.0, 197.5], [25.0, 181.0], [26.0, 186.0], [28.0, 176.0], [29.0, 186.0], [31.0, 187.0], [32.0, 175.0], [34.0, 257.0], [37.0, 321.3333333333333], [39.0, 183.0], [38.0, 196.0], [41.0, 162.0], [40.0, 160.0], [43.0, 194.0], [45.0, 384.5], [47.0, 284.0], [49.0, 285.0], [48.0, 180.0], [51.0, 285.0], [50.0, 243.0], [55.0, 187.0], [54.0, 247.66666666666666], [57.0, 211.0], [59.0, 212.0], [58.0, 285.0], [60.0, 345.0], [63.0, 195.0], [62.0, 240.0], [66.0, 245.0], [65.0, 265.0], [64.0, 490.0], [71.0, 364.0], [69.0, 187.0], [68.0, 373.5], [75.0, 179.5], [73.0, 209.0], [72.0, 424.0], [79.0, 206.0], [77.0, 234.5], [83.0, 407.0], [82.0, 180.0], [81.0, 373.0], [80.0, 230.0], [87.0, 224.0], [86.0, 590.0], [85.0, 189.0], [84.0, 194.0], [91.0, 360.0], [90.0, 319.0], [89.0, 217.0], [88.0, 202.0], [95.0, 285.0], [94.0, 383.5], [92.0, 572.0], [97.0, 336.0], [99.0, 167.0], [98.0, 340.0], [96.0, 382.0], [103.0, 579.0], [101.0, 116.0], [100.0, 195.0], [107.0, 420.0], [105.0, 365.0], [104.0, 200.0], [108.0, 581.0], [109.0, 107.0], [111.0, 245.33333333333334], [110.0, 278.0], [112.0, 535.5], [113.0, 559.0], [114.0, 235.0], [119.0, 122.0], [118.0, 248.0], [116.0, 342.5], [123.0, 737.0], [122.0, 216.0], [121.0, 548.0], [120.0, 177.0], [126.0, 239.0], [125.0, 143.0], [129.0, 478.0], [133.0, 388.25], [134.0, 802.0], [135.0, 596.8333333333334], [132.0, 120.0], [131.0, 185.0], [128.0, 330.0], [136.0, 689.0], [139.0, 478.5], [143.0, 277.5], [142.0, 292.25], [141.0, 279.3333333333333], [138.0, 255.5], [137.0, 247.0], [145.0, 567.0], [146.0, 507.0], [147.0, 497.25], [150.0, 330.4008463951002], [149.0, 471.2], [148.0, 394.19047619047615], [144.0, 294.6], [1.0, 560.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[149.95660096622078, 330.40771505721347]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 16011.3, "minX": 1.6201227E12, "maxY": 148992.33333333334, "series": [{"data": [[1.62012282E12, 142193.83333333334], [1.6201233E12, 30554.8], [1.62012312E12, 133598.6], [1.6201227E12, 101980.3], [1.62012318E12, 129332.3], [1.620123E12, 139429.85], [1.62012306E12, 134770.68333333332], [1.62012288E12, 137835.83333333334], [1.62012294E12, 139625.56666666668], [1.62012276E12, 148992.33333333334], [1.62012324E12, 139514.31666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62012282E12, 74446.45], [1.6201233E12, 16011.3], [1.62012312E12, 69949.4], [1.6201227E12, 53376.3], [1.62012318E12, 67694.25], [1.620123E12, 72999.55], [1.62012306E12, 70564.2], [1.62012288E12, 72148.9], [1.62012294E12, 73087.0], [1.62012276E12, 78002.75], [1.62012324E12, 73036.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6201233E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 305.50990317649257, "minX": 1.6201227E12, "maxY": 370.1516054286666, "series": [{"data": [[1.62012282E12, 320.4276510162702], [1.6201233E12, 370.1516054286666], [1.62012312E12, 340.7973935444786], [1.6201227E12, 333.26730215470207], [1.62012318E12, 352.50651790957176], [1.620123E12, 326.61251678948975], [1.62012306E12, 337.98197386210154], [1.62012288E12, 330.77892455740897], [1.62012294E12, 326.1409717186374], [1.62012276E12, 305.50990317649257], [1.62012324E12, 326.3141032618572]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6201233E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 305.4832002717849, "minX": 1.6201227E12, "maxY": 370.1198278715664, "series": [{"data": [[1.62012282E12, 320.40034884134775], [1.6201233E12, 370.1198278715664], [1.62012312E12, 340.77019245340114], [1.6201227E12, 333.2193426670654], [1.62012318E12, 352.47414366803696], [1.620123E12, 326.58790430899927], [1.62012306E12, 337.9544088928951], [1.62012288E12, 330.75721736575474], [1.62012294E12, 326.111928934012], [1.62012276E12, 305.4832002717849], [1.62012324E12, 326.28732629439986]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6201233E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.019220982579761268, "minX": 1.6201227E12, "maxY": 0.09070598748882912, "series": [{"data": [[1.62012282E12, 0.033958637382978156], [1.6201233E12, 0.046507778881165196], [1.62012312E12, 0.02996666161539635], [1.6201227E12, 0.09070598748882912], [1.62012318E12, 0.019220982579761268], [1.620123E12, 0.027335100010890404], [1.62012306E12, 0.030944870061589278], [1.62012288E12, 0.02247851318592516], [1.62012294E12, 0.02679477882523572], [1.62012276E12, 0.032036691014098465], [1.62012324E12, 0.027466347374913543]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6201233E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 30.0, "minX": 1.6201227E12, "maxY": 2687.0, "series": [{"data": [[1.62012282E12, 2597.0], [1.6201233E12, 1464.0], [1.62012312E12, 1528.0], [1.6201227E12, 1898.0], [1.62012318E12, 2687.0], [1.620123E12, 1669.0], [1.62012306E12, 1681.0], [1.62012288E12, 1746.0], [1.62012294E12, 1868.0], [1.62012276E12, 1457.0], [1.62012324E12, 1787.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62012282E12, 453.0], [1.6201233E12, 508.0], [1.62012312E12, 468.0], [1.6201227E12, 467.0], [1.62012318E12, 477.90000000000146], [1.620123E12, 459.0], [1.62012306E12, 489.0], [1.62012288E12, 445.0], [1.62012294E12, 437.0], [1.62012276E12, 437.0], [1.62012324E12, 457.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62012282E12, 721.9900000000016], [1.6201233E12, 831.4199999999983], [1.62012312E12, 736.0], [1.6201227E12, 801.9900000000016], [1.62012318E12, 774.0], [1.620123E12, 724.0], [1.62012306E12, 776.0], [1.62012288E12, 718.0], [1.62012294E12, 672.0], [1.62012276E12, 724.9900000000016], [1.62012324E12, 734.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62012282E12, 559.9500000000007], [1.6201233E12, 649.0], [1.62012312E12, 578.0], [1.6201227E12, 581.9500000000007], [1.62012318E12, 592.0], [1.620123E12, 565.0], [1.62012306E12, 601.0], [1.62012288E12, 551.0], [1.62012294E12, 527.0], [1.62012276E12, 534.9500000000007], [1.62012324E12, 565.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62012282E12, 46.0], [1.6201233E12, 67.0], [1.62012312E12, 62.0], [1.6201227E12, 34.0], [1.62012318E12, 56.0], [1.620123E12, 47.0], [1.62012306E12, 41.0], [1.62012288E12, 49.0], [1.62012294E12, 57.0], [1.62012276E12, 38.0], [1.62012324E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62012282E12, 313.0], [1.6201233E12, 347.0], [1.62012312E12, 321.0], [1.6201227E12, 315.0], [1.62012318E12, 326.0], [1.620123E12, 310.0], [1.62012306E12, 329.0], [1.62012288E12, 309.0], [1.62012294E12, 294.0], [1.62012276E12, 297.0], [1.62012324E12, 311.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6201233E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 186.0, "minX": 2.0, "maxY": 599.0, "series": [{"data": [[2.0, 544.5], [124.0, 599.0], [319.0, 406.0], [320.0, 403.0], [322.0, 412.0], [324.0, 421.5], [332.0, 398.5], [349.0, 378.5], [345.0, 377.0], [348.0, 382.0], [351.0, 387.0], [344.0, 367.5], [343.0, 393.0], [347.0, 373.0], [340.0, 398.0], [342.0, 396.0], [346.0, 389.0], [337.0, 376.0], [353.0, 363.0], [352.0, 366.0], [359.0, 372.0], [358.0, 378.0], [362.0, 375.0], [360.0, 364.5], [356.0, 381.0], [363.0, 371.0], [357.0, 379.0], [361.0, 367.0], [367.0, 372.0], [365.0, 363.0], [364.0, 365.5], [355.0, 386.0], [370.0, 353.0], [377.0, 368.0], [376.0, 365.0], [383.0, 359.0], [382.0, 353.0], [372.0, 362.0], [381.0, 354.0], [371.0, 366.0], [380.0, 346.5], [368.0, 367.0], [375.0, 359.0], [369.0, 360.0], [379.0, 311.0], [378.0, 357.0], [397.0, 369.0], [392.0, 354.0], [391.0, 350.0], [393.0, 337.0], [395.0, 343.0], [394.0, 336.0], [390.0, 342.0], [385.0, 350.0], [387.0, 353.0], [386.0, 353.0], [396.0, 345.0], [384.0, 358.0], [388.0, 347.0], [389.0, 340.0], [399.0, 339.0], [398.0, 349.0], [402.0, 328.5], [415.0, 337.0], [404.0, 343.0], [405.0, 340.0], [409.0, 334.0], [408.0, 339.0], [414.0, 330.0], [413.0, 331.0], [403.0, 331.0], [412.0, 326.0], [406.0, 332.0], [407.0, 338.0], [410.0, 334.0], [411.0, 332.0], [400.0, 345.0], [401.0, 335.0], [416.0, 337.0], [422.0, 325.0], [421.0, 338.0], [429.0, 323.0], [428.0, 323.5], [431.0, 322.0], [430.0, 310.0], [425.0, 360.0], [424.0, 333.0], [419.0, 314.0], [423.0, 325.0], [426.0, 329.0], [420.0, 330.0], [418.0, 334.0], [417.0, 311.0], [427.0, 342.0], [444.0, 310.0], [433.0, 344.0], [435.0, 326.0], [434.0, 304.0], [440.0, 323.0], [432.0, 325.0], [441.0, 324.0], [447.0, 311.0], [446.0, 326.0], [445.0, 322.0], [443.0, 322.0], [442.0, 331.0], [439.0, 319.0], [438.0, 312.0], [436.0, 322.0], [437.0, 320.0], [449.0, 303.0], [461.0, 295.0], [458.0, 308.0], [459.0, 302.0], [452.0, 310.0], [454.0, 315.0], [455.0, 306.0], [448.0, 314.5], [453.0, 303.0], [457.0, 320.0], [451.0, 317.0], [460.0, 311.5], [450.0, 308.0], [462.0, 326.0], [463.0, 316.0], [476.0, 305.5], [466.0, 316.0], [473.0, 289.0], [472.0, 300.0], [479.0, 292.0], [477.0, 304.0], [478.0, 304.0], [470.0, 320.0], [464.0, 297.0], [468.0, 302.0], [469.0, 295.0], [471.0, 301.0], [475.0, 287.0], [474.0, 305.0], [492.0, 301.0], [483.0, 308.0], [482.0, 291.0], [491.0, 281.0], [495.0, 291.0], [486.0, 306.5], [487.0, 297.0], [484.0, 297.0], [485.0, 299.0], [481.0, 286.0], [488.0, 288.0], [490.0, 287.5], [494.0, 302.0], [489.0, 314.0], [499.0, 282.0], [509.0, 268.0], [510.0, 273.0], [511.0, 280.0], [496.0, 277.0], [503.0, 267.0], [501.0, 297.0], [502.0, 282.0], [505.0, 291.0], [507.0, 259.5], [506.0, 282.5], [498.0, 305.0], [497.0, 281.0], [504.0, 274.0], [500.0, 281.0], [517.0, 269.0], [530.0, 278.0], [535.0, 275.0], [518.0, 282.0], [519.0, 275.0], [529.0, 265.0], [541.0, 255.0], [540.0, 264.0], [538.0, 274.5], [536.0, 274.0], [532.0, 266.0], [514.0, 295.0], [521.0, 265.0], [520.0, 249.5], [522.0, 268.5], [525.0, 264.0], [527.0, 264.0], [523.0, 272.0], [512.0, 285.0], [513.0, 284.0], [531.0, 275.0], [516.0, 280.0], [515.0, 275.0], [549.0, 264.5], [544.0, 264.0], [553.0, 260.0], [552.0, 254.0], [561.0, 256.0], [559.0, 262.0], [558.0, 242.5], [557.0, 272.0], [554.0, 243.0], [555.0, 242.0], [556.0, 251.0], [546.0, 264.0], [545.0, 271.0], [565.0, 258.0], [566.0, 252.0], [568.0, 254.0], [575.0, 237.0], [573.0, 242.0], [571.0, 234.0], [560.0, 257.0], [569.0, 249.0], [581.0, 253.0], [594.0, 228.0], [598.0, 246.0], [599.0, 248.0], [593.0, 232.0], [592.0, 254.0], [577.0, 246.0], [604.0, 229.0], [600.0, 223.0], [583.0, 253.0], [591.0, 248.0], [576.0, 239.0], [587.0, 244.0], [585.0, 250.0], [588.0, 228.5], [605.0, 233.0], [579.0, 256.0], [633.0, 225.0], [617.0, 225.0], [618.0, 237.0], [614.0, 233.5], [630.0, 227.0], [613.0, 236.0], [611.0, 244.0], [635.0, 228.0], [648.0, 225.0], [641.0, 229.0], [687.0, 219.0], [688.0, 186.0], [726.0, 194.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 726.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 186.0, "minX": 2.0, "maxY": 599.0, "series": [{"data": [[2.0, 544.5], [124.0, 599.0], [319.0, 406.0], [320.0, 403.0], [322.0, 412.0], [324.0, 421.5], [332.0, 398.0], [349.0, 378.0], [345.0, 377.0], [348.0, 382.0], [351.0, 387.0], [344.0, 367.5], [343.0, 393.0], [347.0, 373.0], [340.0, 398.0], [342.0, 396.0], [346.0, 389.0], [337.0, 376.0], [353.0, 363.0], [352.0, 366.0], [359.0, 372.0], [358.0, 378.0], [362.0, 375.0], [360.0, 364.0], [356.0, 381.0], [363.0, 371.0], [357.0, 379.0], [361.0, 367.0], [367.0, 372.0], [365.0, 363.0], [364.0, 365.5], [355.0, 386.0], [370.0, 353.0], [377.0, 368.0], [376.0, 365.0], [383.0, 359.0], [382.0, 353.0], [372.0, 362.0], [381.0, 354.0], [371.0, 366.0], [380.0, 346.5], [368.0, 367.0], [375.0, 358.5], [369.0, 360.0], [379.0, 311.0], [378.0, 357.0], [397.0, 369.0], [392.0, 354.0], [391.0, 350.0], [393.0, 337.0], [395.0, 343.0], [394.0, 336.0], [390.0, 342.0], [385.0, 350.0], [387.0, 353.0], [386.0, 353.0], [396.0, 345.0], [384.0, 358.0], [388.0, 347.0], [389.0, 340.0], [399.0, 339.0], [398.0, 348.0], [402.0, 328.0], [415.0, 337.0], [404.0, 343.0], [405.0, 340.0], [409.0, 334.0], [408.0, 339.0], [414.0, 330.0], [413.0, 331.0], [403.0, 331.0], [412.0, 326.0], [406.0, 332.0], [407.0, 338.0], [410.0, 334.0], [411.0, 332.0], [400.0, 345.0], [401.0, 335.0], [416.0, 337.0], [422.0, 325.0], [421.0, 338.0], [429.0, 323.0], [428.0, 323.5], [431.0, 322.0], [430.0, 310.0], [425.0, 360.0], [424.0, 333.0], [419.0, 314.0], [423.0, 325.0], [426.0, 329.0], [420.0, 330.0], [418.0, 334.0], [417.0, 311.0], [427.0, 342.0], [444.0, 310.0], [433.0, 344.0], [435.0, 326.0], [434.0, 304.0], [440.0, 323.0], [432.0, 325.0], [441.0, 324.0], [447.0, 311.0], [446.0, 326.0], [445.0, 322.0], [443.0, 322.0], [442.0, 331.0], [439.0, 319.0], [438.0, 312.0], [436.0, 322.0], [437.0, 320.0], [449.0, 303.0], [461.0, 295.0], [458.0, 308.0], [459.0, 302.0], [452.0, 310.0], [454.0, 315.0], [455.0, 306.0], [448.0, 314.5], [453.0, 303.0], [457.0, 320.0], [451.0, 317.0], [460.0, 311.0], [450.0, 308.0], [462.0, 326.0], [463.0, 316.0], [476.0, 305.5], [466.0, 316.0], [473.0, 289.0], [472.0, 300.0], [479.0, 292.0], [477.0, 304.0], [478.0, 304.0], [470.0, 320.0], [464.0, 297.0], [468.0, 302.0], [469.0, 295.0], [471.0, 301.0], [475.0, 287.0], [474.0, 305.0], [492.0, 301.0], [483.0, 308.0], [482.0, 291.0], [491.0, 281.0], [495.0, 291.0], [486.0, 306.5], [487.0, 297.0], [484.0, 297.0], [485.0, 299.0], [481.0, 286.0], [488.0, 288.0], [490.0, 287.5], [494.0, 302.0], [489.0, 314.0], [499.0, 282.0], [509.0, 268.0], [510.0, 273.0], [511.0, 280.0], [496.0, 277.0], [503.0, 267.0], [501.0, 297.0], [502.0, 282.0], [505.0, 291.0], [507.0, 259.5], [506.0, 282.5], [498.0, 305.0], [497.0, 281.0], [504.0, 274.0], [500.0, 281.0], [517.0, 269.0], [530.0, 278.0], [535.0, 275.0], [518.0, 282.0], [519.0, 275.0], [529.0, 265.0], [541.0, 255.0], [540.0, 264.0], [538.0, 274.5], [536.0, 274.0], [532.0, 266.0], [514.0, 295.0], [521.0, 265.0], [520.0, 249.5], [522.0, 268.5], [525.0, 264.0], [527.0, 264.0], [523.0, 272.0], [512.0, 285.0], [513.0, 284.0], [531.0, 275.0], [516.0, 280.0], [515.0, 275.0], [549.0, 264.0], [544.0, 264.0], [553.0, 260.0], [552.0, 254.0], [561.0, 256.0], [559.0, 262.0], [558.0, 242.5], [557.0, 272.0], [554.0, 243.0], [555.0, 241.0], [556.0, 251.0], [546.0, 264.0], [545.0, 271.0], [565.0, 258.0], [566.0, 252.0], [568.0, 254.0], [575.0, 237.0], [573.0, 242.0], [571.0, 234.0], [560.0, 257.0], [569.0, 249.0], [581.0, 253.0], [594.0, 228.0], [598.0, 246.0], [599.0, 248.0], [593.0, 232.0], [592.0, 254.0], [577.0, 246.0], [604.0, 229.0], [600.0, 223.0], [583.0, 253.0], [591.0, 248.0], [576.0, 239.0], [587.0, 244.0], [585.0, 250.0], [588.0, 228.5], [605.0, 232.5], [579.0, 256.0], [633.0, 225.0], [617.0, 225.0], [618.0, 237.0], [614.0, 233.5], [630.0, 227.0], [613.0, 236.0], [611.0, 244.0], [635.0, 228.0], [648.0, 225.0], [641.0, 229.0], [687.0, 219.0], [688.0, 186.0], [726.0, 194.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 726.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 98.2, "minX": 1.6201227E12, "maxY": 490.5833333333333, "series": [{"data": [[1.62012282E12, 468.21666666666664], [1.6201233E12, 98.2], [1.62012312E12, 439.93333333333334], [1.6201227E12, 338.2], [1.62012318E12, 425.75], [1.620123E12, 459.1166666666667], [1.62012306E12, 443.8], [1.62012288E12, 453.76666666666665], [1.62012294E12, 459.6666666666667], [1.62012276E12, 490.5833333333333], [1.62012324E12, 459.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6201233E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 100.7, "minX": 1.6201227E12, "maxY": 490.5833333333333, "series": [{"data": [[1.62012282E12, 468.21666666666664], [1.6201233E12, 100.7], [1.62012312E12, 439.93333333333334], [1.6201227E12, 335.7], [1.62012318E12, 425.75], [1.620123E12, 459.1166666666667], [1.62012306E12, 443.8], [1.62012288E12, 453.76666666666665], [1.62012294E12, 459.6666666666667], [1.62012276E12, 490.5833333333333], [1.62012324E12, 459.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6201233E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 100.7, "minX": 1.6201227E12, "maxY": 490.5833333333333, "series": [{"data": [[1.62012282E12, 468.21666666666664], [1.6201233E12, 100.7], [1.62012312E12, 439.93333333333334], [1.6201227E12, 335.7], [1.62012318E12, 425.75], [1.620123E12, 459.1166666666667], [1.62012306E12, 443.8], [1.62012288E12, 453.76666666666665], [1.62012294E12, 459.6666666666667], [1.62012276E12, 490.5833333333333], [1.62012324E12, 459.35]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6201233E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 100.7, "minX": 1.6201227E12, "maxY": 490.5833333333333, "series": [{"data": [[1.62012282E12, 468.21666666666664], [1.6201233E12, 100.7], [1.62012312E12, 439.93333333333334], [1.6201227E12, 335.7], [1.62012318E12, 425.75], [1.620123E12, 459.1166666666667], [1.62012306E12, 443.8], [1.62012288E12, 453.76666666666665], [1.62012294E12, 459.6666666666667], [1.62012276E12, 490.5833333333333], [1.62012324E12, 459.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6201233E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

