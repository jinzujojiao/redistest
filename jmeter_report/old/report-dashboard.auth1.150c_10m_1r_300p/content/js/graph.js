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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 6869.0, "series": [{"data": [[0.0, 15.0], [0.1, 85.0], [0.2, 95.0], [0.3, 101.0], [0.4, 106.0], [0.5, 110.0], [0.6, 114.0], [0.7, 117.0], [0.8, 120.0], [0.9, 123.0], [1.0, 125.0], [1.1, 128.0], [1.2, 130.0], [1.3, 132.0], [1.4, 134.0], [1.5, 136.0], [1.6, 138.0], [1.7, 140.0], [1.8, 142.0], [1.9, 144.0], [2.0, 145.0], [2.1, 147.0], [2.2, 148.0], [2.3, 150.0], [2.4, 151.0], [2.5, 153.0], [2.6, 154.0], [2.7, 155.0], [2.8, 156.0], [2.9, 157.0], [3.0, 158.0], [3.1, 160.0], [3.2, 161.0], [3.3, 162.0], [3.4, 163.0], [3.5, 164.0], [3.6, 165.0], [3.7, 166.0], [3.8, 167.0], [3.9, 168.0], [4.0, 169.0], [4.1, 170.0], [4.2, 171.0], [4.3, 172.0], [4.4, 173.0], [4.5, 174.0], [4.6, 174.0], [4.7, 175.0], [4.8, 176.0], [4.9, 177.0], [5.0, 178.0], [5.1, 179.0], [5.2, 179.0], [5.3, 180.0], [5.4, 181.0], [5.5, 182.0], [5.6, 183.0], [5.7, 183.0], [5.8, 184.0], [5.9, 185.0], [6.0, 185.0], [6.1, 186.0], [6.2, 187.0], [6.3, 188.0], [6.4, 188.0], [6.5, 189.0], [6.6, 190.0], [6.7, 190.0], [6.8, 191.0], [6.9, 192.0], [7.0, 192.0], [7.1, 193.0], [7.2, 193.0], [7.3, 194.0], [7.4, 195.0], [7.5, 195.0], [7.6, 196.0], [7.7, 197.0], [7.8, 197.0], [7.9, 198.0], [8.0, 198.0], [8.1, 199.0], [8.2, 199.0], [8.3, 200.0], [8.4, 200.0], [8.5, 201.0], [8.6, 202.0], [8.7, 202.0], [8.8, 203.0], [8.9, 203.0], [9.0, 204.0], [9.1, 204.0], [9.2, 205.0], [9.3, 205.0], [9.4, 206.0], [9.5, 206.0], [9.6, 207.0], [9.7, 207.0], [9.8, 208.0], [9.9, 209.0], [10.0, 209.0], [10.1, 209.0], [10.2, 210.0], [10.3, 210.0], [10.4, 211.0], [10.5, 211.0], [10.6, 212.0], [10.7, 212.0], [10.8, 213.0], [10.9, 213.0], [11.0, 214.0], [11.1, 214.0], [11.2, 215.0], [11.3, 215.0], [11.4, 216.0], [11.5, 216.0], [11.6, 217.0], [11.7, 217.0], [11.8, 218.0], [11.9, 218.0], [12.0, 219.0], [12.1, 219.0], [12.2, 219.0], [12.3, 220.0], [12.4, 220.0], [12.5, 221.0], [12.6, 221.0], [12.7, 222.0], [12.8, 222.0], [12.9, 223.0], [13.0, 223.0], [13.1, 223.0], [13.2, 224.0], [13.3, 224.0], [13.4, 225.0], [13.5, 225.0], [13.6, 225.0], [13.7, 226.0], [13.8, 226.0], [13.9, 227.0], [14.0, 227.0], [14.1, 227.0], [14.2, 228.0], [14.3, 228.0], [14.4, 229.0], [14.5, 229.0], [14.6, 229.0], [14.7, 230.0], [14.8, 230.0], [14.9, 230.0], [15.0, 231.0], [15.1, 231.0], [15.2, 232.0], [15.3, 232.0], [15.4, 232.0], [15.5, 233.0], [15.6, 233.0], [15.7, 233.0], [15.8, 234.0], [15.9, 234.0], [16.0, 235.0], [16.1, 235.0], [16.2, 235.0], [16.3, 236.0], [16.4, 236.0], [16.5, 236.0], [16.6, 237.0], [16.7, 237.0], [16.8, 238.0], [16.9, 238.0], [17.0, 238.0], [17.1, 239.0], [17.2, 239.0], [17.3, 239.0], [17.4, 240.0], [17.5, 240.0], [17.6, 240.0], [17.7, 241.0], [17.8, 241.0], [17.9, 241.0], [18.0, 242.0], [18.1, 242.0], [18.2, 242.0], [18.3, 243.0], [18.4, 243.0], [18.5, 243.0], [18.6, 244.0], [18.7, 244.0], [18.8, 244.0], [18.9, 245.0], [19.0, 245.0], [19.1, 245.0], [19.2, 246.0], [19.3, 246.0], [19.4, 246.0], [19.5, 247.0], [19.6, 247.0], [19.7, 247.0], [19.8, 248.0], [19.9, 248.0], [20.0, 248.0], [20.1, 249.0], [20.2, 249.0], [20.3, 250.0], [20.4, 250.0], [20.5, 250.0], [20.6, 250.0], [20.7, 251.0], [20.8, 251.0], [20.9, 251.0], [21.0, 252.0], [21.1, 252.0], [21.2, 252.0], [21.3, 253.0], [21.4, 253.0], [21.5, 253.0], [21.6, 253.0], [21.7, 254.0], [21.8, 254.0], [21.9, 254.0], [22.0, 255.0], [22.1, 255.0], [22.2, 255.0], [22.3, 256.0], [22.4, 256.0], [22.5, 256.0], [22.6, 256.0], [22.7, 257.0], [22.8, 257.0], [22.9, 257.0], [23.0, 258.0], [23.1, 258.0], [23.2, 258.0], [23.3, 258.0], [23.4, 259.0], [23.5, 259.0], [23.6, 259.0], [23.7, 260.0], [23.8, 260.0], [23.9, 260.0], [24.0, 260.0], [24.1, 261.0], [24.2, 261.0], [24.3, 261.0], [24.4, 261.0], [24.5, 262.0], [24.6, 262.0], [24.7, 262.0], [24.8, 263.0], [24.9, 263.0], [25.0, 263.0], [25.1, 263.0], [25.2, 264.0], [25.3, 264.0], [25.4, 264.0], [25.5, 265.0], [25.6, 265.0], [25.7, 265.0], [25.8, 265.0], [25.9, 266.0], [26.0, 266.0], [26.1, 266.0], [26.2, 266.0], [26.3, 267.0], [26.4, 267.0], [26.5, 267.0], [26.6, 267.0], [26.7, 268.0], [26.8, 268.0], [26.9, 268.0], [27.0, 268.0], [27.1, 269.0], [27.2, 269.0], [27.3, 269.0], [27.4, 269.0], [27.5, 270.0], [27.6, 270.0], [27.7, 270.0], [27.8, 270.0], [27.9, 271.0], [28.0, 271.0], [28.1, 271.0], [28.2, 271.0], [28.3, 272.0], [28.4, 272.0], [28.5, 272.0], [28.6, 272.0], [28.7, 273.0], [28.8, 273.0], [28.9, 273.0], [29.0, 273.0], [29.1, 274.0], [29.2, 274.0], [29.3, 274.0], [29.4, 274.0], [29.5, 274.0], [29.6, 275.0], [29.7, 275.0], [29.8, 275.0], [29.9, 275.0], [30.0, 276.0], [30.1, 276.0], [30.2, 276.0], [30.3, 276.0], [30.4, 276.0], [30.5, 277.0], [30.6, 277.0], [30.7, 277.0], [30.8, 277.0], [30.9, 277.0], [31.0, 278.0], [31.1, 278.0], [31.2, 278.0], [31.3, 278.0], [31.4, 279.0], [31.5, 279.0], [31.6, 279.0], [31.7, 279.0], [31.8, 279.0], [31.9, 280.0], [32.0, 280.0], [32.1, 280.0], [32.2, 280.0], [32.3, 281.0], [32.4, 281.0], [32.5, 281.0], [32.6, 281.0], [32.7, 281.0], [32.8, 282.0], [32.9, 282.0], [33.0, 282.0], [33.1, 282.0], [33.2, 282.0], [33.3, 283.0], [33.4, 283.0], [33.5, 283.0], [33.6, 283.0], [33.7, 283.0], [33.8, 284.0], [33.9, 284.0], [34.0, 284.0], [34.1, 284.0], [34.2, 284.0], [34.3, 285.0], [34.4, 285.0], [34.5, 285.0], [34.6, 285.0], [34.7, 285.0], [34.8, 286.0], [34.9, 286.0], [35.0, 286.0], [35.1, 286.0], [35.2, 286.0], [35.3, 287.0], [35.4, 287.0], [35.5, 287.0], [35.6, 287.0], [35.7, 287.0], [35.8, 288.0], [35.9, 288.0], [36.0, 288.0], [36.1, 288.0], [36.2, 288.0], [36.3, 289.0], [36.4, 289.0], [36.5, 289.0], [36.6, 289.0], [36.7, 289.0], [36.8, 290.0], [36.9, 290.0], [37.0, 290.0], [37.1, 290.0], [37.2, 290.0], [37.3, 291.0], [37.4, 291.0], [37.5, 291.0], [37.6, 291.0], [37.7, 291.0], [37.8, 292.0], [37.9, 292.0], [38.0, 292.0], [38.1, 292.0], [38.2, 292.0], [38.3, 292.0], [38.4, 293.0], [38.5, 293.0], [38.6, 293.0], [38.7, 293.0], [38.8, 293.0], [38.9, 294.0], [39.0, 294.0], [39.1, 294.0], [39.2, 294.0], [39.3, 294.0], [39.4, 295.0], [39.5, 295.0], [39.6, 295.0], [39.7, 295.0], [39.8, 295.0], [39.9, 295.0], [40.0, 296.0], [40.1, 296.0], [40.2, 296.0], [40.3, 296.0], [40.4, 296.0], [40.5, 296.0], [40.6, 297.0], [40.7, 297.0], [40.8, 297.0], [40.9, 297.0], [41.0, 297.0], [41.1, 297.0], [41.2, 298.0], [41.3, 298.0], [41.4, 298.0], [41.5, 298.0], [41.6, 298.0], [41.7, 299.0], [41.8, 299.0], [41.9, 299.0], [42.0, 299.0], [42.1, 299.0], [42.2, 299.0], [42.3, 300.0], [42.4, 300.0], [42.5, 300.0], [42.6, 300.0], [42.7, 300.0], [42.8, 300.0], [42.9, 301.0], [43.0, 301.0], [43.1, 301.0], [43.2, 301.0], [43.3, 301.0], [43.4, 302.0], [43.5, 302.0], [43.6, 302.0], [43.7, 302.0], [43.8, 302.0], [43.9, 302.0], [44.0, 303.0], [44.1, 303.0], [44.2, 303.0], [44.3, 303.0], [44.4, 303.0], [44.5, 304.0], [44.6, 304.0], [44.7, 304.0], [44.8, 304.0], [44.9, 304.0], [45.0, 304.0], [45.1, 305.0], [45.2, 305.0], [45.3, 305.0], [45.4, 305.0], [45.5, 305.0], [45.6, 305.0], [45.7, 306.0], [45.8, 306.0], [45.9, 306.0], [46.0, 306.0], [46.1, 306.0], [46.2, 306.0], [46.3, 307.0], [46.4, 307.0], [46.5, 307.0], [46.6, 307.0], [46.7, 307.0], [46.8, 308.0], [46.9, 308.0], [47.0, 308.0], [47.1, 308.0], [47.2, 308.0], [47.3, 308.0], [47.4, 309.0], [47.5, 309.0], [47.6, 309.0], [47.7, 309.0], [47.8, 309.0], [47.9, 309.0], [48.0, 310.0], [48.1, 310.0], [48.2, 310.0], [48.3, 310.0], [48.4, 310.0], [48.5, 310.0], [48.6, 311.0], [48.7, 311.0], [48.8, 311.0], [48.9, 311.0], [49.0, 311.0], [49.1, 311.0], [49.2, 312.0], [49.3, 312.0], [49.4, 312.0], [49.5, 312.0], [49.6, 312.0], [49.7, 312.0], [49.8, 313.0], [49.9, 313.0], [50.0, 313.0], [50.1, 313.0], [50.2, 313.0], [50.3, 314.0], [50.4, 314.0], [50.5, 314.0], [50.6, 314.0], [50.7, 314.0], [50.8, 314.0], [50.9, 315.0], [51.0, 315.0], [51.1, 315.0], [51.2, 315.0], [51.3, 315.0], [51.4, 315.0], [51.5, 316.0], [51.6, 316.0], [51.7, 316.0], [51.8, 316.0], [51.9, 316.0], [52.0, 316.0], [52.1, 317.0], [52.2, 317.0], [52.3, 317.0], [52.4, 317.0], [52.5, 317.0], [52.6, 317.0], [52.7, 318.0], [52.8, 318.0], [52.9, 318.0], [53.0, 318.0], [53.1, 318.0], [53.2, 319.0], [53.3, 319.0], [53.4, 319.0], [53.5, 319.0], [53.6, 319.0], [53.7, 319.0], [53.8, 320.0], [53.9, 320.0], [54.0, 320.0], [54.1, 320.0], [54.2, 320.0], [54.3, 321.0], [54.4, 321.0], [54.5, 321.0], [54.6, 321.0], [54.7, 321.0], [54.8, 321.0], [54.9, 322.0], [55.0, 322.0], [55.1, 322.0], [55.2, 322.0], [55.3, 322.0], [55.4, 322.0], [55.5, 323.0], [55.6, 323.0], [55.7, 323.0], [55.8, 323.0], [55.9, 323.0], [56.0, 323.0], [56.1, 324.0], [56.2, 324.0], [56.3, 324.0], [56.4, 324.0], [56.5, 324.0], [56.6, 325.0], [56.7, 325.0], [56.8, 325.0], [56.9, 325.0], [57.0, 325.0], [57.1, 325.0], [57.2, 326.0], [57.3, 326.0], [57.4, 326.0], [57.5, 326.0], [57.6, 326.0], [57.7, 327.0], [57.8, 327.0], [57.9, 327.0], [58.0, 327.0], [58.1, 327.0], [58.2, 327.0], [58.3, 328.0], [58.4, 328.0], [58.5, 328.0], [58.6, 328.0], [58.7, 328.0], [58.8, 329.0], [58.9, 329.0], [59.0, 329.0], [59.1, 329.0], [59.2, 329.0], [59.3, 329.0], [59.4, 330.0], [59.5, 330.0], [59.6, 330.0], [59.7, 330.0], [59.8, 330.0], [59.9, 331.0], [60.0, 331.0], [60.1, 331.0], [60.2, 331.0], [60.3, 331.0], [60.4, 332.0], [60.5, 332.0], [60.6, 332.0], [60.7, 332.0], [60.8, 332.0], [60.9, 333.0], [61.0, 333.0], [61.1, 333.0], [61.2, 333.0], [61.3, 333.0], [61.4, 334.0], [61.5, 334.0], [61.6, 334.0], [61.7, 334.0], [61.8, 334.0], [61.9, 334.0], [62.0, 335.0], [62.1, 335.0], [62.2, 335.0], [62.3, 335.0], [62.4, 335.0], [62.5, 336.0], [62.6, 336.0], [62.7, 336.0], [62.8, 336.0], [62.9, 336.0], [63.0, 337.0], [63.1, 337.0], [63.2, 337.0], [63.3, 337.0], [63.4, 338.0], [63.5, 338.0], [63.6, 338.0], [63.7, 338.0], [63.8, 338.0], [63.9, 339.0], [64.0, 339.0], [64.1, 339.0], [64.2, 339.0], [64.3, 339.0], [64.4, 340.0], [64.5, 340.0], [64.6, 340.0], [64.7, 340.0], [64.8, 341.0], [64.9, 341.0], [65.0, 341.0], [65.1, 341.0], [65.2, 341.0], [65.3, 342.0], [65.4, 342.0], [65.5, 342.0], [65.6, 342.0], [65.7, 343.0], [65.8, 343.0], [65.9, 343.0], [66.0, 343.0], [66.1, 343.0], [66.2, 344.0], [66.3, 344.0], [66.4, 344.0], [66.5, 344.0], [66.6, 345.0], [66.7, 345.0], [66.8, 345.0], [66.9, 345.0], [67.0, 346.0], [67.1, 346.0], [67.2, 346.0], [67.3, 346.0], [67.4, 347.0], [67.5, 347.0], [67.6, 347.0], [67.7, 347.0], [67.8, 347.0], [67.9, 348.0], [68.0, 348.0], [68.1, 348.0], [68.2, 348.0], [68.3, 349.0], [68.4, 349.0], [68.5, 349.0], [68.6, 349.0], [68.7, 350.0], [68.8, 350.0], [68.9, 350.0], [69.0, 350.0], [69.1, 351.0], [69.2, 351.0], [69.3, 351.0], [69.4, 352.0], [69.5, 352.0], [69.6, 352.0], [69.7, 352.0], [69.8, 353.0], [69.9, 353.0], [70.0, 353.0], [70.1, 353.0], [70.2, 354.0], [70.3, 354.0], [70.4, 354.0], [70.5, 354.0], [70.6, 355.0], [70.7, 355.0], [70.8, 355.0], [70.9, 356.0], [71.0, 356.0], [71.1, 356.0], [71.2, 356.0], [71.3, 357.0], [71.4, 357.0], [71.5, 357.0], [71.6, 358.0], [71.7, 358.0], [71.8, 358.0], [71.9, 359.0], [72.0, 359.0], [72.1, 359.0], [72.2, 359.0], [72.3, 360.0], [72.4, 360.0], [72.5, 360.0], [72.6, 361.0], [72.7, 361.0], [72.8, 361.0], [72.9, 362.0], [73.0, 362.0], [73.1, 362.0], [73.2, 363.0], [73.3, 363.0], [73.4, 363.0], [73.5, 363.0], [73.6, 364.0], [73.7, 364.0], [73.8, 364.0], [73.9, 365.0], [74.0, 365.0], [74.1, 365.0], [74.2, 366.0], [74.3, 366.0], [74.4, 366.0], [74.5, 367.0], [74.6, 367.0], [74.7, 367.0], [74.8, 368.0], [74.9, 368.0], [75.0, 368.0], [75.1, 369.0], [75.2, 369.0], [75.3, 369.0], [75.4, 370.0], [75.5, 370.0], [75.6, 371.0], [75.7, 371.0], [75.8, 371.0], [75.9, 372.0], [76.0, 372.0], [76.1, 372.0], [76.2, 373.0], [76.3, 373.0], [76.4, 374.0], [76.5, 374.0], [76.6, 374.0], [76.7, 375.0], [76.8, 375.0], [76.9, 376.0], [77.0, 376.0], [77.1, 376.0], [77.2, 377.0], [77.3, 377.0], [77.4, 377.0], [77.5, 378.0], [77.6, 378.0], [77.7, 379.0], [77.8, 379.0], [77.9, 380.0], [78.0, 380.0], [78.1, 380.0], [78.2, 381.0], [78.3, 381.0], [78.4, 382.0], [78.5, 382.0], [78.6, 382.0], [78.7, 383.0], [78.8, 383.0], [78.9, 384.0], [79.0, 384.0], [79.1, 385.0], [79.2, 385.0], [79.3, 386.0], [79.4, 386.0], [79.5, 387.0], [79.6, 387.0], [79.7, 388.0], [79.8, 388.0], [79.9, 389.0], [80.0, 389.0], [80.1, 390.0], [80.2, 390.0], [80.3, 391.0], [80.4, 391.0], [80.5, 392.0], [80.6, 392.0], [80.7, 393.0], [80.8, 393.0], [80.9, 394.0], [81.0, 394.0], [81.1, 395.0], [81.2, 395.0], [81.3, 396.0], [81.4, 396.0], [81.5, 397.0], [81.6, 397.0], [81.7, 398.0], [81.8, 399.0], [81.9, 399.0], [82.0, 400.0], [82.1, 400.0], [82.2, 401.0], [82.3, 401.0], [82.4, 402.0], [82.5, 403.0], [82.6, 403.0], [82.7, 404.0], [82.8, 404.0], [82.9, 405.0], [83.0, 405.0], [83.1, 406.0], [83.2, 407.0], [83.3, 407.0], [83.4, 408.0], [83.5, 409.0], [83.6, 409.0], [83.7, 410.0], [83.8, 410.0], [83.9, 411.0], [84.0, 412.0], [84.1, 412.0], [84.2, 413.0], [84.3, 414.0], [84.4, 414.0], [84.5, 415.0], [84.6, 416.0], [84.7, 416.0], [84.8, 417.0], [84.9, 418.0], [85.0, 418.0], [85.1, 419.0], [85.2, 420.0], [85.3, 421.0], [85.4, 421.0], [85.5, 422.0], [85.6, 423.0], [85.7, 424.0], [85.8, 425.0], [85.9, 425.0], [86.0, 426.0], [86.1, 427.0], [86.2, 428.0], [86.3, 428.0], [86.4, 429.0], [86.5, 430.0], [86.6, 431.0], [86.7, 432.0], [86.8, 432.0], [86.9, 433.0], [87.0, 434.0], [87.1, 435.0], [87.2, 436.0], [87.3, 437.0], [87.4, 438.0], [87.5, 439.0], [87.6, 439.0], [87.7, 440.0], [87.8, 441.0], [87.9, 442.0], [88.0, 443.0], [88.1, 444.0], [88.2, 445.0], [88.3, 446.0], [88.4, 447.0], [88.5, 448.0], [88.6, 449.0], [88.7, 450.0], [88.8, 451.0], [88.9, 453.0], [89.0, 454.0], [89.1, 455.0], [89.2, 456.0], [89.3, 457.0], [89.4, 459.0], [89.5, 460.0], [89.6, 461.0], [89.7, 463.0], [89.8, 464.0], [89.9, 465.0], [90.0, 467.0], [90.1, 468.0], [90.2, 470.0], [90.3, 471.0], [90.4, 472.0], [90.5, 474.0], [90.6, 476.0], [90.7, 477.0], [90.8, 479.0], [90.9, 481.0], [91.0, 483.0], [91.1, 484.0], [91.2, 486.0], [91.3, 488.0], [91.4, 490.0], [91.5, 492.0], [91.6, 494.0], [91.7, 496.0], [91.8, 498.0], [91.9, 500.0], [92.0, 502.0], [92.1, 504.0], [92.2, 507.0], [92.3, 509.0], [92.4, 511.0], [92.5, 513.0], [92.6, 516.0], [92.7, 518.0], [92.8, 520.0], [92.9, 523.0], [93.0, 525.0], [93.1, 528.0], [93.2, 530.0], [93.3, 533.0], [93.4, 535.0], [93.5, 537.0], [93.6, 540.0], [93.7, 542.0], [93.8, 545.0], [93.9, 548.0], [94.0, 550.0], [94.1, 553.0], [94.2, 555.0], [94.3, 558.0], [94.4, 561.0], [94.5, 563.0], [94.6, 566.0], [94.7, 569.0], [94.8, 571.0], [94.9, 574.0], [95.0, 577.0], [95.1, 580.0], [95.2, 582.0], [95.3, 585.0], [95.4, 587.0], [95.5, 590.0], [95.6, 593.0], [95.7, 595.0], [95.8, 598.0], [95.9, 601.0], [96.0, 605.0], [96.1, 607.0], [96.2, 611.0], [96.3, 613.0], [96.4, 616.0], [96.5, 619.0], [96.6, 622.0], [96.7, 625.0], [96.8, 628.0], [96.9, 631.0], [97.0, 635.0], [97.1, 639.0], [97.2, 642.0], [97.3, 646.0], [97.4, 649.0], [97.5, 653.0], [97.6, 657.0], [97.7, 661.0], [97.8, 666.0], [97.9, 670.0], [98.0, 675.0], [98.1, 679.0], [98.2, 685.0], [98.3, 690.0], [98.4, 696.0], [98.5, 702.0], [98.6, 710.0], [98.7, 718.0], [98.8, 727.0], [98.9, 737.0], [99.0, 747.0], [99.1, 759.0], [99.2, 772.0], [99.3, 787.0], [99.4, 804.0], [99.5, 826.0], [99.6, 854.0], [99.7, 888.0], [99.8, 936.0], [99.9, 1025.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 107928.0, "series": [{"data": [[0.0, 743.0], [600.0, 7118.0], [700.0, 2485.0], [800.0, 964.0], [900.0, 406.0], [1000.0, 143.0], [1100.0, 82.0], [1200.0, 39.0], [1300.0, 18.0], [1400.0, 23.0], [1500.0, 2.0], [100.0, 21596.0], [1600.0, 7.0], [1700.0, 6.0], [1800.0, 2.0], [1900.0, 1.0], [2100.0, 4.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [200.0, 92406.0], [3200.0, 1.0], [3800.0, 1.0], [300.0, 107928.0], [400.0, 27011.0], [6800.0, 1.0], [500.0, 10712.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 28.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 249819.0, "series": [{"data": [[0.0, 249819.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21855.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 28.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 145.60386898219383, "minX": 1.61988066E12, "maxY": 150.0, "series": [{"data": [[1.61988096E12, 150.0], [1.61988114E12, 150.0], [1.61988066E12, 145.60386898219383], [1.61988084E12, 150.0], [1.61988102E12, 150.0], [1.6198812E12, 150.0], [1.61988072E12, 150.0], [1.6198809E12, 150.0], [1.61988108E12, 150.0], [1.61988126E12, 149.49491216062057], [1.61988078E12, 150.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988126E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 70.4, "minX": 1.0, "maxY": 801.0, "series": [{"data": [[2.0, 523.0], [3.0, 385.0], [7.0, 236.33333333333334], [9.0, 264.0], [12.0, 645.0], [14.0, 440.0], [15.0, 299.0], [16.0, 295.0], [17.0, 380.0], [19.0, 263.0], [20.0, 417.75], [21.0, 801.0], [23.0, 281.3333333333333], [31.0, 276.3333333333333], [33.0, 350.5], [35.0, 87.99999999999999], [34.0, 480.0], [36.0, 115.42857142857142], [37.0, 183.5], [38.0, 109.8], [39.0, 140.14285714285714], [40.0, 217.5], [41.0, 122.88888888888889], [42.0, 81.8], [43.0, 250.0], [45.0, 244.0], [44.0, 248.0], [46.0, 219.0], [47.0, 112.0], [48.0, 70.4], [49.0, 148.66666666666669], [50.0, 287.0], [51.0, 94.66666666666667], [52.0, 301.75], [53.0, 206.14285714285714], [54.0, 194.33333333333331], [55.0, 107.0], [56.0, 151.33333333333334], [58.0, 97.4], [59.0, 131.16666666666666], [61.0, 110.41666666666667], [60.0, 248.0], [63.0, 179.0], [62.0, 260.0], [64.0, 270.5], [66.0, 152.25], [67.0, 197.0], [68.0, 167.83333333333331], [69.0, 168.0], [70.0, 155.8], [71.0, 146.57142857142856], [72.0, 191.0], [73.0, 170.0], [74.0, 143.99999999999997], [75.0, 154.0], [78.0, 133.42857142857142], [79.0, 214.75], [77.0, 294.0], [76.0, 303.0], [81.0, 151.0], [83.0, 213.5], [82.0, 238.0], [80.0, 234.0], [84.0, 158.0], [85.0, 186.33333333333334], [87.0, 179.44444444444446], [88.0, 256.3333333333333], [89.0, 173.33333333333334], [90.0, 174.2], [91.0, 217.4], [93.0, 471.0], [94.0, 167.0], [95.0, 207.8], [92.0, 495.0], [97.0, 213.5], [98.0, 178.5], [99.0, 194.0], [100.0, 260.4], [101.0, 183.0], [102.0, 241.6], [103.0, 189.5], [106.0, 202.6], [107.0, 265.0], [105.0, 259.5], [104.0, 260.0], [108.0, 223.83333333333331], [109.0, 220.8], [110.0, 215.33333333333334], [111.0, 274.875], [112.0, 301.5], [113.0, 211.8], [114.0, 202.0], [115.0, 228.0], [117.0, 214.5], [119.0, 233.25], [118.0, 230.0], [116.0, 242.0], [122.0, 259.0], [123.0, 238.0], [121.0, 237.0], [126.0, 254.66666666666666], [127.0, 278.0], [125.0, 231.5], [128.0, 268.0], [129.0, 279.75], [130.0, 243.66666666666666], [131.0, 283.5], [132.0, 292.0], [133.0, 296.2857142857143], [134.0, 286.8], [135.0, 273.6666666666667], [136.0, 251.83333333333331], [137.0, 243.0], [138.0, 256.0909090909091], [139.0, 307.0], [140.0, 199.0], [141.0, 238.0], [142.0, 308.0], [143.0, 351.5], [144.0, 234.75], [145.0, 255.5], [146.0, 264.5], [147.0, 238.25], [148.0, 212.15384615384613], [149.0, 232.0], [150.0, 331.23788453667265], [1.0, 593.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[149.8856578162819, 331.02669100705236]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12054.85, "minX": 1.61988066E12, "maxY": 144645.13333333333, "series": [{"data": [[1.61988096E12, 142653.93333333332], [1.61988114E12, 139103.91666666666], [1.61988066E12, 23048.266666666666], [1.61988084E12, 137187.48333333334], [1.61988102E12, 138640.9], [1.6198812E12, 144645.13333333333], [1.61988072E12, 134314.93333333332], [1.6198809E12, 137252.86666666667], [1.61988108E12, 134065.05], [1.61988126E12, 110906.46666666666], [1.61988078E12, 133514.01666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61988096E12, 74687.6], [1.61988114E12, 72822.0], [1.61988066E12, 12054.85], [1.61988084E12, 71828.25], [1.61988102E12, 72586.15], [1.6198812E12, 75729.05], [1.61988072E12, 70323.05], [1.6198809E12, 71862.7], [1.61988108E12, 70169.35], [1.61988126E12, 58074.75], [1.61988078E12, 69872.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988126E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 314.97358015187075, "minX": 1.61988066E12, "maxY": 341.65096522167977, "series": [{"data": [[1.61988096E12, 319.0320039738861], [1.61988114E12, 327.45669577874855], [1.61988066E12, 336.48735985930966], [1.61988084E12, 331.7345139273207], [1.61988102E12, 328.62122595012994], [1.6198812E12, 314.97358015187075], [1.61988072E12, 338.7841127482363], [1.6198809E12, 332.1122870418153], [1.61988108E12, 339.9881793119085], [1.61988126E12, 338.51261692904325], [1.61988078E12, 341.65096522167977]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988126E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 314.94754522868163, "minX": 1.61988066E12, "maxY": 341.6227102059389, "series": [{"data": [[1.61988096E12, 319.00528668748285], [1.61988114E12, 327.43362445414516], [1.61988066E12, 336.42690701252957], [1.61988084E12, 331.69787862017984], [1.61988102E12, 328.59278595159026], [1.6198812E12, 314.94754522868163], [1.61988072E12, 338.75509665749706], [1.6198809E12, 332.0874327015285], [1.61988108E12, 339.95807998791287], [1.61988126E12, 338.48455395847486], [1.61988078E12, 341.6227102059389]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988126E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017258959930510957, "minX": 1.61988066E12, "maxY": 0.17366454165750733, "series": [{"data": [[1.61988096E12, 0.025688333806414762], [1.61988114E12, 0.022489082969432233], [1.61988066E12, 0.17366454165750733], [1.61988084E12, 0.03630326508024346], [1.61988102E12, 0.024971706034828792], [1.6198812E12, 0.024390243902439095], [1.61988072E12, 0.029656705731619937], [1.6198809E12, 0.02596061656464342], [1.61988108E12, 0.017258959930510957], [1.61988126E12, 0.033082363677846297], [1.61988078E12, 0.017825311942959107]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988126E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.61988066E12, "maxY": 6869.0, "series": [{"data": [[1.61988096E12, 1793.0], [1.61988114E12, 2933.0], [1.61988066E12, 6869.0], [1.61988084E12, 2171.0], [1.61988102E12, 2636.0], [1.6198812E12, 2168.0], [1.61988072E12, 3840.0], [1.6198809E12, 1745.0], [1.61988108E12, 3262.0], [1.61988126E12, 2710.0], [1.61988078E12, 1846.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61988096E12, 461.0], [1.61988114E12, 457.0], [1.61988066E12, 480.0], [1.61988084E12, 474.0], [1.61988102E12, 468.0], [1.6198812E12, 442.0], [1.61988072E12, 490.0], [1.6198809E12, 467.0], [1.61988108E12, 472.0], [1.61988126E12, 486.0], [1.61988078E12, 461.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61988096E12, 734.9900000000016], [1.61988114E12, 748.9900000000016], [1.61988066E12, 817.0], [1.61988084E12, 752.0], [1.61988102E12, 744.0], [1.6198812E12, 700.9900000000016], [1.61988072E12, 761.9900000000016], [1.6198809E12, 768.9900000000016], [1.61988108E12, 760.9900000000016], [1.61988126E12, 768.9900000000016], [1.61988078E12, 736.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61988096E12, 556.0], [1.61988114E12, 567.0], [1.61988066E12, 606.5], [1.61988084E12, 589.0], [1.61988102E12, 580.0], [1.6198812E12, 542.0], [1.61988072E12, 614.0], [1.6198809E12, 588.0], [1.61988108E12, 581.0], [1.61988126E12, 593.0], [1.61988078E12, 571.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61988096E12, 49.0], [1.61988114E12, 62.0], [1.61988066E12, 24.0], [1.61988084E12, 46.0], [1.61988102E12, 47.0], [1.6198812E12, 15.0], [1.61988072E12, 57.0], [1.6198809E12, 47.0], [1.61988108E12, 56.0], [1.61988126E12, 46.0], [1.61988078E12, 75.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61988096E12, 302.0], [1.61988114E12, 304.0], [1.61988066E12, 322.0], [1.61988084E12, 321.0], [1.61988102E12, 311.0], [1.6198812E12, 292.0], [1.61988072E12, 331.0], [1.6198809E12, 315.0], [1.61988108E12, 318.0], [1.61988126E12, 320.0], [1.61988078E12, 317.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988126E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 137.0, "minX": 260.0, "maxY": 413.0, "series": [{"data": [[260.0, 254.5], [274.0, 137.0], [346.0, 368.0], [337.0, 413.0], [360.0, 367.0], [358.0, 362.0], [361.0, 353.0], [363.0, 368.0], [365.0, 366.0], [364.0, 360.0], [362.0, 370.5], [357.0, 366.0], [359.0, 382.0], [369.0, 353.0], [380.0, 354.5], [378.0, 353.0], [370.0, 365.0], [375.0, 354.0], [372.0, 355.5], [373.0, 354.0], [374.0, 353.0], [368.0, 369.0], [379.0, 353.0], [381.0, 349.0], [383.0, 357.0], [382.0, 359.5], [397.0, 335.0], [391.0, 347.0], [389.0, 347.0], [396.0, 364.0], [386.0, 338.0], [387.0, 347.0], [385.0, 357.0], [384.0, 351.0], [399.0, 336.0], [388.0, 341.0], [398.0, 327.0], [394.0, 341.0], [393.0, 345.0], [392.0, 333.0], [395.0, 341.0], [390.0, 344.0], [402.0, 338.0], [411.0, 329.0], [408.0, 331.0], [407.0, 334.0], [401.0, 334.0], [406.0, 340.0], [404.0, 334.0], [405.0, 330.0], [414.0, 329.0], [415.0, 328.0], [413.0, 333.0], [403.0, 337.0], [412.0, 329.0], [400.0, 333.0], [409.0, 336.0], [410.0, 333.0], [416.0, 328.0], [421.0, 328.0], [429.0, 319.0], [422.0, 323.0], [423.0, 331.0], [419.0, 340.0], [428.0, 326.0], [420.0, 342.0], [427.0, 318.0], [426.0, 322.0], [430.0, 313.0], [431.0, 316.0], [424.0, 312.0], [425.0, 316.0], [417.0, 335.0], [418.0, 307.0], [446.0, 311.0], [442.0, 314.0], [437.0, 325.0], [436.0, 328.0], [432.0, 317.0], [439.0, 314.0], [438.0, 323.5], [440.0, 327.0], [447.0, 319.0], [434.0, 309.0], [433.0, 319.0], [441.0, 305.0], [443.0, 322.5], [444.0, 310.0], [445.0, 312.5], [435.0, 330.0], [461.0, 306.0], [456.0, 307.0], [459.0, 296.0], [450.0, 317.0], [457.0, 310.0], [462.0, 301.0], [463.0, 303.0], [454.0, 308.0], [452.0, 298.5], [455.0, 302.0], [448.0, 307.0], [449.0, 309.0], [460.0, 302.0], [451.0, 302.0], [458.0, 299.0], [478.0, 307.0], [466.0, 300.5], [472.0, 293.0], [479.0, 291.0], [473.0, 289.0], [470.0, 282.0], [468.0, 297.0], [469.0, 311.0], [475.0, 303.0], [474.0, 296.0], [477.0, 281.5], [464.0, 295.0], [471.0, 293.0], [476.0, 295.0], [467.0, 295.0], [482.0, 297.0], [480.0, 293.0], [488.0, 283.0], [489.0, 302.0], [495.0, 283.0], [486.0, 289.0], [487.0, 306.0], [494.0, 285.0], [485.0, 291.0], [484.0, 282.0], [481.0, 300.0], [490.0, 294.0], [491.0, 283.5], [493.0, 288.0], [483.0, 307.0], [492.0, 289.0], [509.0, 281.0], [497.0, 296.0], [507.0, 280.0], [506.0, 285.0], [499.0, 276.0], [498.0, 284.0], [505.0, 277.0], [500.0, 282.0], [501.0, 292.0], [503.0, 294.0], [496.0, 274.0], [504.0, 272.0], [510.0, 291.0], [511.0, 267.0], [508.0, 273.5], [516.0, 278.0], [542.0, 257.5], [532.0, 270.0], [535.0, 277.0], [534.0, 263.5], [530.0, 261.0], [531.0, 271.0], [529.0, 286.0], [528.0, 264.0], [543.0, 265.5], [512.0, 273.0], [514.0, 285.0], [515.0, 283.0], [541.0, 264.0], [539.0, 255.0], [540.0, 253.0], [536.0, 267.0], [518.0, 281.0], [517.0, 276.0], [519.0, 274.0], [527.0, 267.0], [523.0, 275.0], [525.0, 273.0], [521.0, 266.0], [526.0, 261.5], [568.0, 236.0], [558.0, 241.0], [559.0, 254.0], [545.0, 271.0], [547.0, 252.0], [548.0, 250.0], [557.0, 256.0], [555.0, 245.0], [572.0, 259.0], [563.0, 240.0], [571.0, 254.0], [552.0, 267.0], [554.0, 256.0], [573.0, 239.0], [575.0, 235.0], [565.0, 247.0], [580.0, 242.0], [603.0, 242.0], [579.0, 247.0], [576.0, 236.0], [578.0, 233.5], [590.0, 233.0], [589.0, 228.0], [581.0, 245.0], [587.0, 242.0], [601.0, 230.0], [600.0, 217.0], [582.0, 227.0], [593.0, 238.0], [584.0, 237.0], [629.0, 218.0], [611.0, 231.0], [626.0, 230.0], [612.0, 226.0], [657.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 657.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 137.0, "minX": 260.0, "maxY": 413.0, "series": [{"data": [[260.0, 254.5], [274.0, 137.0], [346.0, 368.0], [337.0, 413.0], [360.0, 367.0], [358.0, 361.5], [361.0, 353.0], [363.0, 368.0], [365.0, 366.0], [364.0, 360.0], [362.0, 370.5], [357.0, 366.0], [359.0, 382.0], [369.0, 353.0], [380.0, 354.5], [378.0, 353.0], [370.0, 365.0], [375.0, 354.0], [372.0, 355.5], [373.0, 354.0], [374.0, 353.0], [368.0, 369.0], [379.0, 353.0], [381.0, 349.0], [383.0, 357.0], [382.0, 359.5], [397.0, 335.0], [391.0, 347.0], [389.0, 347.0], [396.0, 364.0], [386.0, 338.0], [387.0, 347.0], [385.0, 357.0], [384.0, 351.0], [399.0, 336.0], [388.0, 341.0], [398.0, 327.0], [394.0, 341.0], [393.0, 345.0], [392.0, 333.0], [395.0, 341.0], [390.0, 344.0], [402.0, 338.0], [411.0, 329.0], [408.0, 331.0], [407.0, 334.0], [401.0, 334.0], [406.0, 340.0], [404.0, 334.0], [405.0, 330.0], [414.0, 329.0], [415.0, 328.0], [413.0, 333.0], [403.0, 337.0], [412.0, 329.0], [400.0, 333.0], [409.0, 336.0], [410.0, 333.0], [416.0, 328.0], [421.0, 328.0], [429.0, 319.0], [422.0, 323.0], [423.0, 331.0], [419.0, 340.0], [428.0, 326.0], [420.0, 342.0], [427.0, 318.0], [426.0, 322.0], [430.0, 313.0], [431.0, 316.0], [424.0, 312.0], [425.0, 316.0], [417.0, 335.0], [418.0, 307.0], [446.0, 311.0], [442.0, 314.0], [437.0, 325.0], [436.0, 328.0], [432.0, 317.0], [439.0, 314.0], [438.0, 323.0], [440.0, 327.0], [447.0, 319.0], [434.0, 309.0], [433.0, 319.0], [441.0, 305.0], [443.0, 322.5], [444.0, 310.0], [445.0, 312.5], [435.0, 330.0], [461.0, 306.0], [456.0, 307.0], [459.0, 296.0], [450.0, 317.0], [457.0, 310.0], [462.0, 301.0], [463.0, 303.0], [454.0, 308.0], [452.0, 298.5], [455.0, 302.0], [448.0, 307.0], [449.0, 309.0], [460.0, 302.0], [451.0, 302.0], [458.0, 299.0], [478.0, 307.0], [466.0, 300.5], [472.0, 293.0], [479.0, 291.0], [473.0, 289.0], [470.0, 282.0], [468.0, 297.0], [469.0, 311.0], [475.0, 303.0], [474.0, 296.0], [477.0, 281.5], [464.0, 294.5], [471.0, 293.0], [476.0, 295.0], [467.0, 295.0], [482.0, 297.0], [480.0, 293.0], [488.0, 283.0], [489.0, 302.0], [495.0, 283.0], [486.0, 289.0], [487.0, 306.0], [494.0, 285.0], [485.0, 291.0], [484.0, 282.0], [481.0, 300.0], [490.0, 294.0], [491.0, 283.0], [493.0, 288.0], [483.0, 307.0], [492.0, 289.0], [509.0, 281.0], [497.0, 296.0], [507.0, 280.0], [506.0, 285.0], [499.0, 276.0], [498.0, 284.0], [505.0, 277.0], [500.0, 282.0], [501.0, 292.0], [503.0, 294.0], [496.0, 274.0], [504.0, 272.0], [510.0, 291.0], [511.0, 267.0], [508.0, 273.5], [516.0, 278.0], [542.0, 257.5], [532.0, 270.0], [535.0, 277.0], [534.0, 263.5], [530.0, 261.0], [531.0, 271.0], [529.0, 286.0], [528.0, 264.0], [543.0, 265.5], [512.0, 272.5], [514.0, 285.0], [515.0, 283.0], [541.0, 264.0], [539.0, 255.0], [540.0, 253.0], [536.0, 267.0], [518.0, 280.5], [517.0, 276.0], [519.0, 274.0], [527.0, 267.0], [523.0, 275.0], [525.0, 273.0], [521.0, 266.0], [526.0, 261.5], [568.0, 236.0], [558.0, 241.0], [559.0, 254.0], [545.0, 271.0], [547.0, 252.0], [548.0, 250.0], [557.0, 256.0], [555.0, 245.0], [572.0, 259.0], [563.0, 239.0], [571.0, 254.0], [552.0, 267.0], [554.0, 256.0], [573.0, 239.0], [575.0, 235.0], [565.0, 247.0], [580.0, 242.0], [603.0, 242.0], [579.0, 247.0], [576.0, 236.0], [578.0, 233.5], [590.0, 233.0], [589.0, 228.0], [581.0, 245.0], [587.0, 242.0], [601.0, 230.0], [600.0, 217.0], [582.0, 227.0], [593.0, 238.0], [584.0, 237.0], [629.0, 218.0], [611.0, 231.0], [626.0, 230.0], [612.0, 226.0], [657.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 657.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 78.31666666666666, "minX": 1.61988066E12, "maxY": 476.28333333333336, "series": [{"data": [[1.61988096E12, 469.73333333333335], [1.61988114E12, 458.03333333333336], [1.61988066E12, 78.31666666666666], [1.61988084E12, 451.75], [1.61988102E12, 456.51666666666665], [1.6198812E12, 476.28333333333336], [1.61988072E12, 442.28333333333336], [1.6198809E12, 451.96666666666664], [1.61988108E12, 441.28333333333336], [1.61988126E12, 362.75], [1.61988078E12, 439.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988126E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 75.81666666666666, "minX": 1.61988066E12, "maxY": 476.28333333333336, "series": [{"data": [[1.61988096E12, 469.73333333333335], [1.61988114E12, 458.0], [1.61988066E12, 75.81666666666666], [1.61988084E12, 451.75], [1.61988102E12, 456.51666666666665], [1.6198812E12, 476.28333333333336], [1.61988072E12, 442.28333333333336], [1.6198809E12, 451.96666666666664], [1.61988108E12, 441.31666666666666], [1.61988126E12, 365.25], [1.61988078E12, 439.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988126E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 75.81666666666666, "minX": 1.61988066E12, "maxY": 476.28333333333336, "series": [{"data": [[1.61988096E12, 469.73333333333335], [1.61988114E12, 458.0], [1.61988066E12, 75.81666666666666], [1.61988084E12, 451.75], [1.61988102E12, 456.51666666666665], [1.6198812E12, 476.28333333333336], [1.61988072E12, 442.28333333333336], [1.6198809E12, 451.96666666666664], [1.61988108E12, 441.31666666666666], [1.61988126E12, 365.25], [1.61988078E12, 439.45]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988126E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 75.81666666666666, "minX": 1.61988066E12, "maxY": 476.28333333333336, "series": [{"data": [[1.61988096E12, 469.73333333333335], [1.61988114E12, 458.0], [1.61988066E12, 75.81666666666666], [1.61988084E12, 451.75], [1.61988102E12, 456.51666666666665], [1.6198812E12, 476.28333333333336], [1.61988072E12, 442.28333333333336], [1.6198809E12, 451.96666666666664], [1.61988108E12, 441.31666666666666], [1.61988126E12, 365.25], [1.61988078E12, 439.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988126E12, "title": "Total Transactions Per Second"}},
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

