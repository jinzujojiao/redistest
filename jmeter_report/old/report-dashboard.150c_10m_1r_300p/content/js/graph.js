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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 9925.0, "series": [{"data": [[0.0, 11.0], [0.1, 51.0], [0.2, 56.0], [0.3, 58.0], [0.4, 61.0], [0.5, 64.0], [0.6, 67.0], [0.7, 70.0], [0.8, 74.0], [0.9, 77.0], [1.0, 80.0], [1.1, 83.0], [1.2, 86.0], [1.3, 89.0], [1.4, 92.0], [1.5, 94.0], [1.6, 97.0], [1.7, 99.0], [1.8, 101.0], [1.9, 103.0], [2.0, 105.0], [2.1, 106.0], [2.2, 108.0], [2.3, 110.0], [2.4, 112.0], [2.5, 114.0], [2.6, 115.0], [2.7, 117.0], [2.8, 118.0], [2.9, 120.0], [3.0, 121.0], [3.1, 122.0], [3.2, 124.0], [3.3, 125.0], [3.4, 126.0], [3.5, 128.0], [3.6, 129.0], [3.7, 130.0], [3.8, 131.0], [3.9, 132.0], [4.0, 134.0], [4.1, 135.0], [4.2, 136.0], [4.3, 137.0], [4.4, 138.0], [4.5, 139.0], [4.6, 140.0], [4.7, 141.0], [4.8, 142.0], [4.9, 143.0], [5.0, 144.0], [5.1, 145.0], [5.2, 146.0], [5.3, 147.0], [5.4, 147.0], [5.5, 148.0], [5.6, 149.0], [5.7, 150.0], [5.8, 151.0], [5.9, 152.0], [6.0, 152.0], [6.1, 153.0], [6.2, 154.0], [6.3, 155.0], [6.4, 156.0], [6.5, 156.0], [6.6, 157.0], [6.7, 158.0], [6.8, 159.0], [6.9, 159.0], [7.0, 160.0], [7.1, 161.0], [7.2, 161.0], [7.3, 162.0], [7.4, 163.0], [7.5, 163.0], [7.6, 164.0], [7.7, 165.0], [7.8, 165.0], [7.9, 166.0], [8.0, 167.0], [8.1, 167.0], [8.2, 168.0], [8.3, 168.0], [8.4, 169.0], [8.5, 170.0], [8.6, 170.0], [8.7, 171.0], [8.8, 172.0], [8.9, 172.0], [9.0, 173.0], [9.1, 174.0], [9.2, 174.0], [9.3, 175.0], [9.4, 175.0], [9.5, 176.0], [9.6, 177.0], [9.7, 177.0], [9.8, 178.0], [9.9, 178.0], [10.0, 179.0], [10.1, 180.0], [10.2, 180.0], [10.3, 181.0], [10.4, 182.0], [10.5, 182.0], [10.6, 183.0], [10.7, 183.0], [10.8, 184.0], [10.9, 185.0], [11.0, 185.0], [11.1, 186.0], [11.2, 186.0], [11.3, 187.0], [11.4, 188.0], [11.5, 188.0], [11.6, 189.0], [11.7, 190.0], [11.8, 190.0], [11.9, 191.0], [12.0, 191.0], [12.1, 192.0], [12.2, 193.0], [12.3, 193.0], [12.4, 194.0], [12.5, 194.0], [12.6, 195.0], [12.7, 196.0], [12.8, 196.0], [12.9, 197.0], [13.0, 198.0], [13.1, 198.0], [13.2, 199.0], [13.3, 200.0], [13.4, 200.0], [13.5, 201.0], [13.6, 202.0], [13.7, 202.0], [13.8, 203.0], [13.9, 203.0], [14.0, 204.0], [14.1, 205.0], [14.2, 205.0], [14.3, 206.0], [14.4, 207.0], [14.5, 207.0], [14.6, 208.0], [14.7, 208.0], [14.8, 209.0], [14.9, 210.0], [15.0, 210.0], [15.1, 211.0], [15.2, 212.0], [15.3, 212.0], [15.4, 213.0], [15.5, 213.0], [15.6, 214.0], [15.7, 215.0], [15.8, 215.0], [15.9, 216.0], [16.0, 216.0], [16.1, 217.0], [16.2, 218.0], [16.3, 218.0], [16.4, 219.0], [16.5, 219.0], [16.6, 220.0], [16.7, 220.0], [16.8, 221.0], [16.9, 221.0], [17.0, 222.0], [17.1, 223.0], [17.2, 223.0], [17.3, 224.0], [17.4, 224.0], [17.5, 225.0], [17.6, 225.0], [17.7, 226.0], [17.8, 226.0], [17.9, 227.0], [18.0, 227.0], [18.1, 228.0], [18.2, 228.0], [18.3, 229.0], [18.4, 229.0], [18.5, 230.0], [18.6, 230.0], [18.7, 231.0], [18.8, 231.0], [18.9, 232.0], [19.0, 232.0], [19.1, 233.0], [19.2, 233.0], [19.3, 233.0], [19.4, 234.0], [19.5, 234.0], [19.6, 235.0], [19.7, 235.0], [19.8, 236.0], [19.9, 236.0], [20.0, 237.0], [20.1, 237.0], [20.2, 237.0], [20.3, 238.0], [20.4, 238.0], [20.5, 239.0], [20.6, 239.0], [20.7, 239.0], [20.8, 240.0], [20.9, 240.0], [21.0, 241.0], [21.1, 241.0], [21.2, 241.0], [21.3, 242.0], [21.4, 242.0], [21.5, 242.0], [21.6, 243.0], [21.7, 243.0], [21.8, 244.0], [21.9, 244.0], [22.0, 244.0], [22.1, 245.0], [22.2, 245.0], [22.3, 245.0], [22.4, 246.0], [22.5, 246.0], [22.6, 246.0], [22.7, 247.0], [22.8, 247.0], [22.9, 248.0], [23.0, 248.0], [23.1, 248.0], [23.2, 249.0], [23.3, 249.0], [23.4, 249.0], [23.5, 250.0], [23.6, 250.0], [23.7, 250.0], [23.8, 251.0], [23.9, 251.0], [24.0, 251.0], [24.1, 252.0], [24.2, 252.0], [24.3, 252.0], [24.4, 253.0], [24.5, 253.0], [24.6, 253.0], [24.7, 254.0], [24.8, 254.0], [24.9, 254.0], [25.0, 254.0], [25.1, 255.0], [25.2, 255.0], [25.3, 255.0], [25.4, 256.0], [25.5, 256.0], [25.6, 256.0], [25.7, 256.0], [25.8, 257.0], [25.9, 257.0], [26.0, 257.0], [26.1, 258.0], [26.2, 258.0], [26.3, 258.0], [26.4, 258.0], [26.5, 259.0], [26.6, 259.0], [26.7, 259.0], [26.8, 260.0], [26.9, 260.0], [27.0, 260.0], [27.1, 260.0], [27.2, 261.0], [27.3, 261.0], [27.4, 261.0], [27.5, 261.0], [27.6, 262.0], [27.7, 262.0], [27.8, 262.0], [27.9, 263.0], [28.0, 263.0], [28.1, 263.0], [28.2, 263.0], [28.3, 264.0], [28.4, 264.0], [28.5, 264.0], [28.6, 264.0], [28.7, 265.0], [28.8, 265.0], [28.9, 265.0], [29.0, 265.0], [29.1, 266.0], [29.2, 266.0], [29.3, 266.0], [29.4, 266.0], [29.5, 267.0], [29.6, 267.0], [29.7, 267.0], [29.8, 267.0], [29.9, 268.0], [30.0, 268.0], [30.1, 268.0], [30.2, 268.0], [30.3, 269.0], [30.4, 269.0], [30.5, 269.0], [30.6, 269.0], [30.7, 270.0], [30.8, 270.0], [30.9, 270.0], [31.0, 270.0], [31.1, 271.0], [31.2, 271.0], [31.3, 271.0], [31.4, 271.0], [31.5, 272.0], [31.6, 272.0], [31.7, 272.0], [31.8, 272.0], [31.9, 272.0], [32.0, 273.0], [32.1, 273.0], [32.2, 273.0], [32.3, 273.0], [32.4, 274.0], [32.5, 274.0], [32.6, 274.0], [32.7, 274.0], [32.8, 275.0], [32.9, 275.0], [33.0, 275.0], [33.1, 275.0], [33.2, 275.0], [33.3, 276.0], [33.4, 276.0], [33.5, 276.0], [33.6, 276.0], [33.7, 277.0], [33.8, 277.0], [33.9, 277.0], [34.0, 277.0], [34.1, 277.0], [34.2, 278.0], [34.3, 278.0], [34.4, 278.0], [34.5, 278.0], [34.6, 278.0], [34.7, 279.0], [34.8, 279.0], [34.9, 279.0], [35.0, 279.0], [35.1, 280.0], [35.2, 280.0], [35.3, 280.0], [35.4, 280.0], [35.5, 280.0], [35.6, 281.0], [35.7, 281.0], [35.8, 281.0], [35.9, 281.0], [36.0, 282.0], [36.1, 282.0], [36.2, 282.0], [36.3, 282.0], [36.4, 283.0], [36.5, 283.0], [36.6, 283.0], [36.7, 283.0], [36.8, 283.0], [36.9, 284.0], [37.0, 284.0], [37.1, 284.0], [37.2, 284.0], [37.3, 285.0], [37.4, 285.0], [37.5, 285.0], [37.6, 285.0], [37.7, 286.0], [37.8, 286.0], [37.9, 286.0], [38.0, 286.0], [38.1, 286.0], [38.2, 287.0], [38.3, 287.0], [38.4, 287.0], [38.5, 287.0], [38.6, 288.0], [38.7, 288.0], [38.8, 288.0], [38.9, 288.0], [39.0, 289.0], [39.1, 289.0], [39.2, 289.0], [39.3, 289.0], [39.4, 290.0], [39.5, 290.0], [39.6, 290.0], [39.7, 290.0], [39.8, 290.0], [39.9, 291.0], [40.0, 291.0], [40.1, 291.0], [40.2, 291.0], [40.3, 292.0], [40.4, 292.0], [40.5, 292.0], [40.6, 292.0], [40.7, 293.0], [40.8, 293.0], [40.9, 293.0], [41.0, 293.0], [41.1, 294.0], [41.2, 294.0], [41.3, 294.0], [41.4, 294.0], [41.5, 295.0], [41.6, 295.0], [41.7, 295.0], [41.8, 295.0], [41.9, 295.0], [42.0, 296.0], [42.1, 296.0], [42.2, 296.0], [42.3, 296.0], [42.4, 297.0], [42.5, 297.0], [42.6, 297.0], [42.7, 297.0], [42.8, 298.0], [42.9, 298.0], [43.0, 298.0], [43.1, 298.0], [43.2, 299.0], [43.3, 299.0], [43.4, 299.0], [43.5, 299.0], [43.6, 300.0], [43.7, 300.0], [43.8, 300.0], [43.9, 301.0], [44.0, 301.0], [44.1, 301.0], [44.2, 301.0], [44.3, 302.0], [44.4, 302.0], [44.5, 302.0], [44.6, 302.0], [44.7, 303.0], [44.8, 303.0], [44.9, 303.0], [45.0, 304.0], [45.1, 304.0], [45.2, 304.0], [45.3, 304.0], [45.4, 305.0], [45.5, 305.0], [45.6, 305.0], [45.7, 306.0], [45.8, 306.0], [45.9, 306.0], [46.0, 306.0], [46.1, 307.0], [46.2, 307.0], [46.3, 307.0], [46.4, 308.0], [46.5, 308.0], [46.6, 308.0], [46.7, 309.0], [46.8, 309.0], [46.9, 309.0], [47.0, 310.0], [47.1, 310.0], [47.2, 310.0], [47.3, 310.0], [47.4, 311.0], [47.5, 311.0], [47.6, 311.0], [47.7, 312.0], [47.8, 312.0], [47.9, 312.0], [48.0, 313.0], [48.1, 313.0], [48.2, 313.0], [48.3, 314.0], [48.4, 314.0], [48.5, 314.0], [48.6, 315.0], [48.7, 315.0], [48.8, 315.0], [48.9, 316.0], [49.0, 316.0], [49.1, 316.0], [49.2, 317.0], [49.3, 317.0], [49.4, 317.0], [49.5, 318.0], [49.6, 318.0], [49.7, 318.0], [49.8, 319.0], [49.9, 319.0], [50.0, 319.0], [50.1, 320.0], [50.2, 320.0], [50.3, 320.0], [50.4, 321.0], [50.5, 321.0], [50.6, 321.0], [50.7, 322.0], [50.8, 322.0], [50.9, 322.0], [51.0, 323.0], [51.1, 323.0], [51.2, 323.0], [51.3, 324.0], [51.4, 324.0], [51.5, 325.0], [51.6, 325.0], [51.7, 325.0], [51.8, 326.0], [51.9, 326.0], [52.0, 326.0], [52.1, 327.0], [52.2, 327.0], [52.3, 327.0], [52.4, 328.0], [52.5, 328.0], [52.6, 328.0], [52.7, 329.0], [52.8, 329.0], [52.9, 329.0], [53.0, 330.0], [53.1, 330.0], [53.2, 331.0], [53.3, 331.0], [53.4, 331.0], [53.5, 332.0], [53.6, 332.0], [53.7, 332.0], [53.8, 333.0], [53.9, 333.0], [54.0, 334.0], [54.1, 334.0], [54.2, 334.0], [54.3, 335.0], [54.4, 335.0], [54.5, 335.0], [54.6, 336.0], [54.7, 336.0], [54.8, 336.0], [54.9, 337.0], [55.0, 337.0], [55.1, 337.0], [55.2, 338.0], [55.3, 338.0], [55.4, 338.0], [55.5, 339.0], [55.6, 339.0], [55.7, 339.0], [55.8, 340.0], [55.9, 340.0], [56.0, 341.0], [56.1, 341.0], [56.2, 341.0], [56.3, 342.0], [56.4, 342.0], [56.5, 342.0], [56.6, 343.0], [56.7, 343.0], [56.8, 343.0], [56.9, 344.0], [57.0, 344.0], [57.1, 344.0], [57.2, 345.0], [57.3, 345.0], [57.4, 346.0], [57.5, 346.0], [57.6, 346.0], [57.7, 347.0], [57.8, 347.0], [57.9, 347.0], [58.0, 348.0], [58.1, 348.0], [58.2, 348.0], [58.3, 349.0], [58.4, 349.0], [58.5, 349.0], [58.6, 350.0], [58.7, 350.0], [58.8, 350.0], [58.9, 351.0], [59.0, 351.0], [59.1, 351.0], [59.2, 352.0], [59.3, 352.0], [59.4, 352.0], [59.5, 353.0], [59.6, 353.0], [59.7, 353.0], [59.8, 354.0], [59.9, 354.0], [60.0, 354.0], [60.1, 355.0], [60.2, 355.0], [60.3, 355.0], [60.4, 356.0], [60.5, 356.0], [60.6, 356.0], [60.7, 357.0], [60.8, 357.0], [60.9, 357.0], [61.0, 358.0], [61.1, 358.0], [61.2, 358.0], [61.3, 358.0], [61.4, 359.0], [61.5, 359.0], [61.6, 359.0], [61.7, 360.0], [61.8, 360.0], [61.9, 360.0], [62.0, 361.0], [62.1, 361.0], [62.2, 361.0], [62.3, 362.0], [62.4, 362.0], [62.5, 362.0], [62.6, 363.0], [62.7, 363.0], [62.8, 363.0], [62.9, 363.0], [63.0, 364.0], [63.1, 364.0], [63.2, 364.0], [63.3, 365.0], [63.4, 365.0], [63.5, 365.0], [63.6, 366.0], [63.7, 366.0], [63.8, 366.0], [63.9, 367.0], [64.0, 367.0], [64.1, 367.0], [64.2, 367.0], [64.3, 368.0], [64.4, 368.0], [64.5, 368.0], [64.6, 369.0], [64.7, 369.0], [64.8, 369.0], [64.9, 370.0], [65.0, 370.0], [65.1, 370.0], [65.2, 370.0], [65.3, 371.0], [65.4, 371.0], [65.5, 371.0], [65.6, 372.0], [65.7, 372.0], [65.8, 372.0], [65.9, 373.0], [66.0, 373.0], [66.1, 373.0], [66.2, 373.0], [66.3, 374.0], [66.4, 374.0], [66.5, 374.0], [66.6, 375.0], [66.7, 375.0], [66.8, 375.0], [66.9, 375.0], [67.0, 376.0], [67.1, 376.0], [67.2, 376.0], [67.3, 377.0], [67.4, 377.0], [67.5, 377.0], [67.6, 377.0], [67.7, 378.0], [67.8, 378.0], [67.9, 378.0], [68.0, 378.0], [68.1, 379.0], [68.2, 379.0], [68.3, 379.0], [68.4, 379.0], [68.5, 380.0], [68.6, 380.0], [68.7, 380.0], [68.8, 381.0], [68.9, 381.0], [69.0, 381.0], [69.1, 381.0], [69.2, 382.0], [69.3, 382.0], [69.4, 382.0], [69.5, 383.0], [69.6, 383.0], [69.7, 383.0], [69.8, 383.0], [69.9, 384.0], [70.0, 384.0], [70.1, 384.0], [70.2, 385.0], [70.3, 385.0], [70.4, 385.0], [70.5, 385.0], [70.6, 386.0], [70.7, 386.0], [70.8, 386.0], [70.9, 387.0], [71.0, 387.0], [71.1, 387.0], [71.2, 387.0], [71.3, 388.0], [71.4, 388.0], [71.5, 388.0], [71.6, 389.0], [71.7, 389.0], [71.8, 389.0], [71.9, 389.0], [72.0, 390.0], [72.1, 390.0], [72.2, 390.0], [72.3, 391.0], [72.4, 391.0], [72.5, 391.0], [72.6, 391.0], [72.7, 392.0], [72.8, 392.0], [72.9, 392.0], [73.0, 393.0], [73.1, 393.0], [73.2, 393.0], [73.3, 393.0], [73.4, 394.0], [73.5, 394.0], [73.6, 394.0], [73.7, 395.0], [73.8, 395.0], [73.9, 395.0], [74.0, 395.0], [74.1, 396.0], [74.2, 396.0], [74.3, 396.0], [74.4, 397.0], [74.5, 397.0], [74.6, 397.0], [74.7, 398.0], [74.8, 398.0], [74.9, 398.0], [75.0, 399.0], [75.1, 399.0], [75.2, 399.0], [75.3, 399.0], [75.4, 400.0], [75.5, 400.0], [75.6, 400.0], [75.7, 401.0], [75.8, 401.0], [75.9, 401.0], [76.0, 401.0], [76.1, 402.0], [76.2, 402.0], [76.3, 402.0], [76.4, 403.0], [76.5, 403.0], [76.6, 403.0], [76.7, 404.0], [76.8, 404.0], [76.9, 404.0], [77.0, 405.0], [77.1, 405.0], [77.2, 405.0], [77.3, 405.0], [77.4, 406.0], [77.5, 406.0], [77.6, 406.0], [77.7, 407.0], [77.8, 407.0], [77.9, 407.0], [78.0, 408.0], [78.1, 408.0], [78.2, 408.0], [78.3, 409.0], [78.4, 409.0], [78.5, 409.0], [78.6, 410.0], [78.7, 410.0], [78.8, 411.0], [78.9, 411.0], [79.0, 411.0], [79.1, 411.0], [79.2, 412.0], [79.3, 412.0], [79.4, 413.0], [79.5, 413.0], [79.6, 413.0], [79.7, 414.0], [79.8, 414.0], [79.9, 414.0], [80.0, 415.0], [80.1, 415.0], [80.2, 416.0], [80.3, 416.0], [80.4, 416.0], [80.5, 417.0], [80.6, 417.0], [80.7, 417.0], [80.8, 418.0], [80.9, 418.0], [81.0, 419.0], [81.1, 419.0], [81.2, 419.0], [81.3, 420.0], [81.4, 420.0], [81.5, 421.0], [81.6, 421.0], [81.7, 422.0], [81.8, 422.0], [81.9, 422.0], [82.0, 423.0], [82.1, 423.0], [82.2, 424.0], [82.3, 424.0], [82.4, 425.0], [82.5, 425.0], [82.6, 426.0], [82.7, 426.0], [82.8, 427.0], [82.9, 427.0], [83.0, 428.0], [83.1, 428.0], [83.2, 429.0], [83.3, 429.0], [83.4, 430.0], [83.5, 430.0], [83.6, 431.0], [83.7, 431.0], [83.8, 432.0], [83.9, 432.0], [84.0, 433.0], [84.1, 434.0], [84.2, 434.0], [84.3, 435.0], [84.4, 435.0], [84.5, 436.0], [84.6, 437.0], [84.7, 437.0], [84.8, 438.0], [84.9, 439.0], [85.0, 439.0], [85.1, 440.0], [85.2, 441.0], [85.3, 441.0], [85.4, 442.0], [85.5, 443.0], [85.6, 444.0], [85.7, 445.0], [85.8, 445.0], [85.9, 446.0], [86.0, 447.0], [86.1, 448.0], [86.2, 448.0], [86.3, 449.0], [86.4, 450.0], [86.5, 451.0], [86.6, 452.0], [86.7, 453.0], [86.8, 454.0], [86.9, 455.0], [87.0, 456.0], [87.1, 457.0], [87.2, 458.0], [87.3, 459.0], [87.4, 460.0], [87.5, 461.0], [87.6, 462.0], [87.7, 463.0], [87.8, 464.0], [87.9, 465.0], [88.0, 467.0], [88.1, 468.0], [88.2, 469.0], [88.3, 470.0], [88.4, 472.0], [88.5, 473.0], [88.6, 474.0], [88.7, 476.0], [88.8, 477.0], [88.9, 478.0], [89.0, 480.0], [89.1, 481.0], [89.2, 483.0], [89.3, 484.0], [89.4, 485.0], [89.5, 487.0], [89.6, 488.0], [89.7, 490.0], [89.8, 491.0], [89.9, 493.0], [90.0, 494.0], [90.1, 496.0], [90.2, 497.0], [90.3, 499.0], [90.4, 501.0], [90.5, 502.0], [90.6, 504.0], [90.7, 505.0], [90.8, 507.0], [90.9, 509.0], [91.0, 511.0], [91.1, 512.0], [91.2, 514.0], [91.3, 516.0], [91.4, 518.0], [91.5, 519.0], [91.6, 521.0], [91.7, 523.0], [91.8, 525.0], [91.9, 527.0], [92.0, 529.0], [92.1, 531.0], [92.2, 533.0], [92.3, 534.0], [92.4, 536.0], [92.5, 538.0], [92.6, 541.0], [92.7, 543.0], [92.8, 545.0], [92.9, 547.0], [93.0, 550.0], [93.1, 552.0], [93.2, 554.0], [93.3, 557.0], [93.4, 559.0], [93.5, 562.0], [93.6, 565.0], [93.7, 568.0], [93.8, 571.0], [93.9, 574.0], [94.0, 577.0], [94.1, 580.0], [94.2, 584.0], [94.3, 587.0], [94.4, 591.0], [94.5, 594.0], [94.6, 597.0], [94.7, 601.0], [94.8, 604.0], [94.9, 608.0], [95.0, 611.0], [95.1, 615.0], [95.2, 619.0], [95.3, 623.0], [95.4, 626.0], [95.5, 630.0], [95.6, 634.0], [95.7, 638.0], [95.8, 642.0], [95.9, 646.0], [96.0, 650.0], [96.1, 655.0], [96.2, 659.0], [96.3, 663.0], [96.4, 668.0], [96.5, 672.0], [96.6, 676.0], [96.7, 681.0], [96.8, 686.0], [96.9, 691.0], [97.0, 697.0], [97.1, 701.0], [97.2, 707.0], [97.3, 713.0], [97.4, 718.0], [97.5, 725.0], [97.6, 732.0], [97.7, 738.0], [97.8, 744.0], [97.9, 752.0], [98.0, 759.0], [98.1, 767.0], [98.2, 775.0], [98.3, 784.0], [98.4, 795.0], [98.5, 806.0], [98.6, 817.0], [98.7, 829.0], [98.8, 843.0], [98.9, 860.0], [99.0, 880.0], [99.1, 904.0], [99.2, 931.0], [99.3, 973.0], [99.4, 1023.0], [99.5, 1103.0], [99.6, 1250.0], [99.7, 1466.0], [99.8, 1611.0], [99.9, 1772.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 83722.0, "series": [{"data": [[0.0, 4588.0], [600.0, 6319.0], [9900.0, 1.0], [700.0, 3637.0], [800.0, 1693.0], [900.0, 727.0], [1000.0, 358.0], [1100.0, 211.0], [1200.0, 114.0], [1300.0, 115.0], [1400.0, 147.0], [1500.0, 186.0], [100.0, 30389.0], [1600.0, 185.0], [1700.0, 128.0], [1800.0, 71.0], [1900.0, 43.0], [2000.0, 19.0], [2100.0, 19.0], [2300.0, 6.0], [2200.0, 6.0], [2400.0, 4.0], [2500.0, 10.0], [2600.0, 10.0], [2800.0, 8.0], [2700.0, 5.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 79643.0], [3300.0, 2.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 3.0], [3600.0, 2.0], [3800.0, 4.0], [3900.0, 7.0], [4100.0, 4.0], [4300.0, 3.0], [4200.0, 1.0], [300.0, 83722.0], [5100.0, 2.0], [400.0, 39459.0], [6600.0, 1.0], [6500.0, 1.0], [6700.0, 1.0], [500.0, 11411.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 733.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 237966.0, "series": [{"data": [[0.0, 237966.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 24570.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 733.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 145.64353137146068, "minX": 1.61962632E12, "maxY": 150.0, "series": [{"data": [[1.61962674E12, 150.0], [1.61962656E12, 150.0], [1.61962662E12, 150.0], [1.61962644E12, 150.0], [1.61962692E12, 149.48449074074063], [1.6196265E12, 150.0], [1.61962632E12, 145.64353137146068], [1.6196268E12, 150.0], [1.61962638E12, 150.0], [1.61962686E12, 150.0], [1.61962668E12, 150.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61962692E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 65.33333333333333, "minX": 1.0, "maxY": 1053.0, "series": [{"data": [[2.0, 700.0], [3.0, 475.0], [4.0, 448.0], [5.0, 1053.0], [6.0, 365.0], [7.0, 363.0], [8.0, 467.0], [9.0, 200.0], [10.0, 214.0], [11.0, 530.0], [12.0, 570.0], [14.0, 229.0], [16.0, 442.0], [18.0, 219.0], [19.0, 391.0], [21.0, 229.0], [22.0, 257.0], [23.0, 265.0], [24.0, 385.0], [26.0, 193.0], [28.0, 550.0], [29.0, 65.33333333333333], [30.0, 496.5], [31.0, 84.0], [33.0, 100.0], [32.0, 246.0], [34.0, 174.0], [35.0, 171.66666666666669], [36.0, 183.0], [38.0, 219.0], [39.0, 118.66666666666666], [41.0, 326.0], [40.0, 227.0], [43.0, 179.2], [42.0, 196.0], [44.0, 177.0], [45.0, 247.0], [47.0, 164.71428571428572], [46.0, 246.0], [48.0, 185.625], [49.0, 99.33333333333334], [50.0, 210.75], [51.0, 244.0], [53.0, 253.0], [54.0, 222.4], [55.0, 214.5], [56.0, 153.25], [57.0, 164.5], [58.0, 218.5], [60.0, 339.66666666666663], [61.0, 173.0], [63.0, 103.0], [62.0, 347.0], [64.0, 187.16666666666666], [65.0, 152.0], [66.0, 142.0], [67.0, 166.91666666666666], [71.0, 377.0], [70.0, 146.0], [69.0, 314.5], [72.0, 160.0], [74.0, 169.2], [75.0, 212.5], [73.0, 535.0], [76.0, 185.5], [78.0, 158.0], [79.0, 242.0], [82.0, 131.0], [83.0, 315.0], [81.0, 383.0], [84.0, 148.83333333333331], [85.0, 151.0], [86.0, 262.75], [87.0, 210.42857142857142], [88.0, 160.25], [89.0, 241.0], [90.0, 254.6], [91.0, 287.6666666666667], [92.0, 193.45454545454544], [93.0, 257.5], [95.0, 345.0], [94.0, 380.0], [96.0, 229.5], [97.0, 240.0], [98.0, 154.57142857142856], [99.0, 297.0], [100.0, 293.66666666666663], [101.0, 302.0], [102.0, 175.0], [103.0, 413.0], [104.0, 223.6], [105.0, 139.0], [107.0, 283.0], [106.0, 160.0], [108.0, 202.75], [109.0, 173.44444444444446], [110.0, 139.0], [111.0, 299.0], [115.0, 275.0], [114.0, 274.5], [112.0, 377.0], [116.0, 231.375], [117.0, 191.75], [118.0, 190.0], [119.0, 260.3333333333333], [120.0, 232.0], [122.0, 202.0], [123.0, 242.66666666666666], [124.0, 188.66666666666666], [125.0, 279.83333333333337], [127.0, 444.25], [128.0, 189.0], [129.0, 421.0], [130.0, 224.0], [131.0, 214.0], [132.0, 319.69999999999993], [135.0, 299.0], [134.0, 419.0], [136.0, 377.25], [138.0, 312.2], [140.0, 322.25], [141.0, 419.875], [142.0, 283.0], [143.0, 272.0], [139.0, 265.6], [144.0, 254.85714285714286], [145.0, 380.0], [148.0, 270.83333333333337], [150.0, 341.76448701950494], [149.0, 561.0], [1.0, 844.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}, {"data": [[149.89809662360264, 341.6110100315694]], "isOverall": false, "label": "AuthzRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9485.266666666666, "minX": 1.61962632E12, "maxY": 138326.56666666668, "series": [{"data": [[1.61962674E12, 134880.48333333334], [1.61962656E12, 131882.68333333332], [1.61962662E12, 135572.46666666667], [1.61962644E12, 132915.15], [1.61962692E12, 109346.23333333334], [1.6196265E12, 132566.2], [1.61962632E12, 18250.133333333335], [1.6196268E12, 130638.7], [1.61962638E12, 135279.08333333334], [1.61962686E12, 133004.61666666667], [1.61962668E12, 138326.56666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61962674E12, 70170.43333333333], [1.61962656E12, 68619.4], [1.61962662E12, 70523.3], [1.61962644E12, 69132.9], [1.61962692E12, 56880.0], [1.6196265E12, 68974.9], [1.61962632E12, 9485.266666666666], [1.6196268E12, 67971.6], [1.61962638E12, 70370.56666666667], [1.61962686E12, 69193.46666666666], [1.61962668E12, 71953.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61962692E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 329.18467281510686, "minX": 1.61962632E12, "maxY": 391.9405885619099, "series": [{"data": [[1.61962674E12, 338.01429804480694], [1.61962656E12, 345.33068539411977], [1.61962662E12, 335.94787349240437], [1.61962644E12, 342.74597188892704], [1.61962692E12, 349.3421759259242], [1.6196265E12, 343.59344099568403], [1.61962632E12, 391.9405885619099], [1.6196268E12, 348.5034092670095], [1.61962638E12, 336.28731804064165], [1.61962686E12, 342.5423580453642], [1.61962668E12, 329.18467281510686]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61962692E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 329.1573342116811, "minX": 1.61962632E12, "maxY": 391.9017212659636, "series": [{"data": [[1.61962674E12, 337.98412579277374], [1.61962656E12, 345.3026325888388], [1.61962662E12, 335.9196818640082], [1.61962644E12, 342.7183179065246], [1.61962692E12, 349.31449074074044], [1.6196265E12, 343.5641583629205], [1.61962632E12, 391.9017212659636], [1.6196268E12, 348.47489539748955], [1.61962638E12, 336.26063690454123], [1.61962686E12, 342.5134343126793], [1.61962668E12, 329.1573342116811]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61962692E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019305555555555593, "minX": 1.61962632E12, "maxY": 0.27207107162687466, "series": [{"data": [[1.61962674E12, 0.03066011183247644], [1.61962656E12, 0.035459359889477564], [1.61962662E12, 0.024532317687913145], [1.61962644E12, 0.021673713480364027], [1.61962692E12, 0.019305555555555593], [1.6196265E12, 0.024204940251212215], [1.61962632E12, 0.27207107162687466], [1.6196268E12, 0.029017511235084305], [1.61962638E12, 0.020656363432249435], [1.61962686E12, 0.03063632211904423], [1.61962668E12, 0.022471087688479073]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61962692E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.61962632E12, "maxY": 9925.0, "series": [{"data": [[1.61962674E12, 5165.0], [1.61962656E12, 3596.0], [1.61962662E12, 6749.0], [1.61962644E12, 5141.0], [1.61962692E12, 3904.0], [1.6196265E12, 3000.0], [1.61962632E12, 1941.0], [1.6196268E12, 3825.0], [1.61962638E12, 4341.0], [1.61962686E12, 9925.0], [1.61962668E12, 6687.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61962674E12, 485.0], [1.61962656E12, 507.0], [1.61962662E12, 479.0], [1.61962644E12, 491.0], [1.61962692E12, 508.0], [1.6196265E12, 494.0], [1.61962632E12, 625.0], [1.6196268E12, 520.0], [1.61962638E12, 482.0], [1.61962686E12, 475.0], [1.61962668E12, 468.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61962674E12, 851.0], [1.61962656E12, 894.9900000000016], [1.61962662E12, 869.9900000000016], [1.61962644E12, 868.0], [1.61962692E12, 887.9900000000016], [1.6196265E12, 873.9900000000016], [1.61962632E12, 973.9699999999998], [1.6196268E12, 934.9800000000032], [1.61962638E12, 863.0], [1.61962686E12, 835.0], [1.61962668E12, 810.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61962674E12, 599.0], [1.61962656E12, 630.0], [1.61962662E12, 596.0], [1.61962644E12, 609.9500000000007], [1.61962692E12, 619.0], [1.6196265E12, 615.0], [1.61962632E12, 749.8499999999999], [1.6196268E12, 646.9500000000007], [1.61962638E12, 593.0], [1.61962686E12, 582.0], [1.61962668E12, 566.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61962674E12, 16.0], [1.61962656E12, 11.0], [1.61962662E12, 12.0], [1.61962644E12, 16.0], [1.61962692E12, 44.0], [1.6196265E12, 14.0], [1.61962632E12, 40.0], [1.6196268E12, 24.0], [1.61962638E12, 32.0], [1.61962686E12, 17.0], [1.61962668E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61962674E12, 312.0], [1.61962656E12, 339.0], [1.61962662E12, 301.0], [1.61962644E12, 317.0], [1.61962692E12, 328.0], [1.6196265E12, 315.0], [1.61962632E12, 369.0], [1.6196268E12, 336.0], [1.61962638E12, 318.0], [1.61962686E12, 298.0], [1.61962668E12, 300.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61962692E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 165.0, "minX": 138.0, "maxY": 424.0, "series": [{"data": [[138.0, 336.0], [277.0, 165.0], [317.0, 403.0], [306.0, 423.0], [329.0, 387.0], [334.0, 378.0], [323.0, 390.0], [324.0, 397.0], [332.0, 400.0], [320.0, 424.0], [325.0, 396.0], [338.0, 389.0], [337.0, 381.0], [350.0, 381.0], [336.0, 386.0], [342.0, 397.0], [344.0, 383.0], [351.0, 354.0], [347.0, 410.0], [348.0, 376.0], [340.0, 394.0], [341.0, 407.0], [354.0, 373.0], [356.0, 368.0], [357.0, 374.0], [366.0, 399.5], [367.0, 402.0], [363.0, 365.0], [361.0, 383.0], [355.0, 346.0], [358.0, 385.5], [353.0, 374.0], [352.0, 414.0], [364.0, 361.0], [365.0, 358.0], [369.0, 358.0], [373.0, 372.0], [372.0, 375.0], [380.0, 345.0], [368.0, 370.0], [375.0, 396.0], [371.0, 364.0], [382.0, 360.0], [381.0, 369.0], [377.0, 335.0], [383.0, 356.0], [379.0, 354.5], [378.0, 361.0], [374.0, 362.5], [397.0, 351.0], [386.0, 374.0], [390.0, 368.0], [389.0, 377.0], [391.0, 363.0], [392.0, 374.0], [399.0, 368.0], [398.0, 364.0], [395.0, 354.0], [384.0, 349.0], [393.0, 357.0], [385.0, 353.5], [394.0, 361.0], [387.0, 385.0], [396.0, 333.0], [401.0, 339.0], [413.0, 345.5], [403.0, 372.0], [412.0, 342.0], [415.0, 353.0], [414.0, 346.0], [406.0, 353.0], [408.0, 352.0], [409.0, 349.0], [410.0, 360.0], [411.0, 364.0], [400.0, 349.0], [407.0, 350.0], [402.0, 370.0], [404.0, 369.0], [405.0, 334.0], [430.0, 334.0], [422.0, 316.0], [421.0, 352.0], [420.0, 316.5], [431.0, 334.0], [424.0, 344.0], [417.0, 327.0], [418.0, 331.0], [416.0, 331.0], [425.0, 334.0], [428.0, 313.0], [429.0, 323.0], [419.0, 322.0], [426.0, 342.0], [427.0, 333.0], [423.0, 330.0], [434.0, 332.0], [436.0, 317.0], [437.0, 312.0], [444.0, 305.0], [440.0, 326.5], [447.0, 315.0], [435.0, 319.0], [433.0, 311.5], [439.0, 302.0], [432.0, 303.0], [438.0, 309.5], [441.0, 296.0], [442.0, 306.0], [443.0, 315.5], [446.0, 300.0], [445.0, 307.5], [450.0, 308.0], [454.0, 306.0], [462.0, 309.5], [456.0, 291.0], [452.0, 307.0], [460.0, 331.0], [461.0, 319.0], [451.0, 296.0], [458.0, 311.0], [459.0, 295.0], [457.0, 297.0], [463.0, 303.0], [448.0, 301.5], [449.0, 286.0], [455.0, 321.0], [477.0, 300.0], [470.0, 290.0], [479.0, 297.0], [478.0, 295.0], [469.0, 304.0], [468.0, 303.0], [476.0, 295.0], [467.0, 279.5], [473.0, 296.0], [475.0, 277.0], [474.0, 283.5], [465.0, 296.0], [464.0, 287.5], [471.0, 276.0], [466.0, 300.0], [493.0, 290.0], [487.0, 287.0], [484.0, 277.5], [486.0, 293.0], [485.0, 287.0], [488.0, 278.0], [489.0, 294.0], [495.0, 295.0], [482.0, 289.0], [490.0, 276.0], [491.0, 336.0], [483.0, 287.0], [492.0, 288.0], [481.0, 283.5], [480.0, 261.0], [509.0, 287.0], [497.0, 272.0], [507.0, 268.0], [502.0, 278.0], [503.0, 269.0], [500.0, 290.0], [508.0, 255.0], [499.0, 297.0], [505.0, 309.0], [510.0, 274.0], [511.0, 285.0], [501.0, 270.0], [516.0, 286.0], [539.0, 238.0], [533.0, 264.0], [530.0, 272.0], [531.0, 255.0], [534.0, 245.5], [535.0, 271.0], [517.0, 256.0], [518.0, 244.5], [536.0, 259.5], [529.0, 231.5], [526.0, 249.0], [521.0, 258.0], [520.0, 309.0], [541.0, 227.0], [543.0, 284.0], [512.0, 265.5], [527.0, 270.0], [515.0, 264.0], [513.0, 285.5], [514.0, 278.0], [569.0, 246.0], [562.0, 235.5], [558.0, 299.0], [565.0, 249.0], [553.0, 234.0], [552.0, 254.5], [544.0, 237.0], [546.0, 228.0], [549.0, 239.0], [545.0, 235.0], [564.0, 221.0], [572.0, 252.0], [575.0, 256.0], [557.0, 277.0], [579.0, 258.0], [595.0, 216.0], [590.0, 240.0], [599.0, 229.0], [598.0, 221.5], [584.0, 214.0], [587.0, 189.0], [585.0, 238.0], [604.0, 224.0], [605.0, 228.0], [607.0, 219.0], [582.0, 214.0], [583.0, 217.0], [600.0, 244.0], [608.0, 218.5], [625.0, 182.0], [636.0, 215.0], [620.0, 220.0], [697.0, 186.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 697.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 165.0, "minX": 138.0, "maxY": 424.0, "series": [{"data": [[138.0, 336.0], [277.0, 165.0], [317.0, 403.0], [306.0, 423.0], [329.0, 387.0], [334.0, 378.0], [323.0, 390.0], [324.0, 397.0], [332.0, 400.0], [320.0, 424.0], [325.0, 396.0], [338.0, 389.0], [337.0, 381.0], [350.0, 381.0], [336.0, 386.0], [342.0, 397.0], [344.0, 383.0], [351.0, 354.0], [347.0, 410.0], [348.0, 376.0], [340.0, 394.0], [341.0, 407.0], [354.0, 373.0], [356.0, 368.0], [357.0, 374.0], [366.0, 399.0], [367.0, 402.0], [363.0, 365.0], [361.0, 383.0], [355.0, 346.0], [358.0, 385.5], [353.0, 374.0], [352.0, 414.0], [364.0, 361.0], [365.0, 358.0], [369.0, 358.0], [373.0, 372.0], [372.0, 375.0], [380.0, 345.0], [368.0, 370.0], [375.0, 396.0], [371.0, 364.0], [382.0, 360.0], [381.0, 369.0], [377.0, 335.0], [383.0, 356.0], [379.0, 354.5], [378.0, 361.0], [374.0, 362.5], [397.0, 351.0], [386.0, 374.0], [390.0, 368.0], [389.0, 377.0], [391.0, 363.0], [392.0, 374.0], [399.0, 368.0], [398.0, 364.0], [395.0, 354.0], [384.0, 349.0], [393.0, 357.0], [385.0, 353.5], [394.0, 361.0], [387.0, 385.0], [396.0, 333.0], [401.0, 339.0], [413.0, 345.5], [403.0, 372.0], [412.0, 342.0], [415.0, 353.0], [414.0, 346.0], [406.0, 353.0], [408.0, 352.0], [409.0, 349.0], [410.0, 360.0], [411.0, 364.0], [400.0, 348.5], [407.0, 350.0], [402.0, 370.0], [404.0, 369.0], [405.0, 334.0], [430.0, 334.0], [422.0, 316.0], [421.0, 352.0], [420.0, 316.5], [431.0, 334.0], [424.0, 344.0], [417.0, 327.0], [418.0, 330.5], [416.0, 331.0], [425.0, 334.0], [428.0, 313.0], [429.0, 323.0], [419.0, 322.0], [426.0, 342.0], [427.0, 333.0], [423.0, 330.0], [434.0, 332.0], [436.0, 317.0], [437.0, 312.0], [444.0, 305.0], [440.0, 326.5], [447.0, 315.0], [435.0, 319.0], [433.0, 311.5], [439.0, 302.0], [432.0, 303.0], [438.0, 309.5], [441.0, 295.0], [442.0, 306.0], [443.0, 315.5], [446.0, 300.0], [445.0, 307.5], [450.0, 308.0], [454.0, 306.0], [462.0, 309.5], [456.0, 291.0], [452.0, 307.0], [460.0, 331.0], [461.0, 319.0], [451.0, 296.0], [458.0, 311.0], [459.0, 295.0], [457.0, 297.0], [463.0, 303.0], [448.0, 301.5], [449.0, 286.0], [455.0, 321.0], [477.0, 300.0], [470.0, 290.0], [479.0, 297.0], [478.0, 295.0], [469.0, 304.0], [468.0, 303.0], [476.0, 295.0], [467.0, 279.5], [473.0, 296.0], [475.0, 277.0], [474.0, 283.5], [465.0, 295.0], [464.0, 287.5], [471.0, 276.0], [466.0, 300.0], [493.0, 290.0], [487.0, 287.0], [484.0, 277.5], [486.0, 293.0], [485.0, 287.0], [488.0, 278.0], [489.0, 294.0], [495.0, 295.0], [482.0, 289.0], [490.0, 276.0], [491.0, 336.0], [483.0, 287.0], [492.0, 288.0], [481.0, 283.0], [480.0, 261.0], [509.0, 287.0], [497.0, 272.0], [507.0, 268.0], [502.0, 278.0], [503.0, 269.0], [500.0, 289.5], [508.0, 255.0], [499.0, 297.0], [505.0, 309.0], [510.0, 274.0], [511.0, 285.0], [501.0, 270.0], [516.0, 286.0], [539.0, 238.0], [533.0, 264.0], [530.0, 272.0], [531.0, 255.0], [534.0, 245.5], [535.0, 271.0], [517.0, 256.0], [518.0, 244.5], [536.0, 259.5], [529.0, 231.5], [526.0, 249.0], [521.0, 258.0], [520.0, 309.0], [541.0, 227.0], [543.0, 284.0], [512.0, 265.5], [527.0, 270.0], [515.0, 263.5], [513.0, 285.5], [514.0, 278.0], [569.0, 246.0], [562.0, 235.5], [558.0, 299.0], [565.0, 249.0], [553.0, 234.0], [552.0, 254.5], [544.0, 237.0], [546.0, 228.0], [549.0, 239.0], [545.0, 235.0], [564.0, 221.0], [572.0, 252.0], [575.0, 256.0], [557.0, 277.0], [579.0, 258.0], [595.0, 215.5], [590.0, 240.0], [599.0, 229.0], [598.0, 221.5], [584.0, 214.0], [587.0, 189.0], [585.0, 238.0], [604.0, 224.0], [605.0, 228.0], [607.0, 219.0], [582.0, 214.0], [583.0, 217.0], [600.0, 244.0], [608.0, 218.5], [625.0, 182.0], [636.0, 215.0], [620.0, 219.5], [697.0, 186.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 697.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 62.516666666666666, "minX": 1.61962632E12, "maxY": 455.3833333333333, "series": [{"data": [[1.61962674E12, 444.1333333333333], [1.61962656E12, 434.3], [1.61962662E12, 446.35], [1.61962644E12, 437.5], [1.61962692E12, 357.5], [1.6196265E12, 436.6], [1.61962632E12, 62.516666666666666], [1.6196268E12, 430.2], [1.61962638E12, 445.4], [1.61962686E12, 437.93333333333334], [1.61962668E12, 455.3833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61962692E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 60.03333333333333, "minX": 1.61962632E12, "maxY": 455.4, "series": [{"data": [[1.61962674E12, 444.1166666666667], [1.61962656E12, 434.3], [1.61962662E12, 446.35], [1.61962644E12, 437.55], [1.61962692E12, 360.0], [1.6196265E12, 436.55], [1.61962632E12, 60.03333333333333], [1.6196268E12, 430.2], [1.61962638E12, 445.3833333333333], [1.61962686E12, 437.93333333333334], [1.61962668E12, 455.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61962692E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 60.03333333333333, "minX": 1.61962632E12, "maxY": 455.4, "series": [{"data": [[1.61962674E12, 444.1166666666667], [1.61962656E12, 434.3], [1.61962662E12, 446.35], [1.61962644E12, 437.55], [1.61962692E12, 360.0], [1.6196265E12, 436.55], [1.61962632E12, 60.03333333333333], [1.6196268E12, 430.2], [1.61962638E12, 445.3833333333333], [1.61962686E12, 437.93333333333334], [1.61962668E12, 455.4]], "isOverall": false, "label": "AuthzRequest-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61962692E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 60.03333333333333, "minX": 1.61962632E12, "maxY": 455.4, "series": [{"data": [[1.61962674E12, 444.1166666666667], [1.61962656E12, 434.3], [1.61962662E12, 446.35], [1.61962644E12, 437.55], [1.61962692E12, 360.0], [1.6196265E12, 436.55], [1.61962632E12, 60.03333333333333], [1.6196268E12, 430.2], [1.61962638E12, 445.3833333333333], [1.61962686E12, 437.93333333333334], [1.61962668E12, 455.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61962692E12, "title": "Total Transactions Per Second"}},
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

