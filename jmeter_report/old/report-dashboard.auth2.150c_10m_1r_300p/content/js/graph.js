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
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 4672.0, "series": [{"data": [[0.0, 12.0], [0.1, 83.0], [0.2, 91.0], [0.3, 97.0], [0.4, 102.0], [0.5, 105.0], [0.6, 109.0], [0.7, 112.0], [0.8, 114.0], [0.9, 117.0], [1.0, 119.0], [1.1, 122.0], [1.2, 124.0], [1.3, 126.0], [1.4, 128.0], [1.5, 130.0], [1.6, 132.0], [1.7, 133.0], [1.8, 135.0], [1.9, 137.0], [2.0, 138.0], [2.1, 140.0], [2.2, 142.0], [2.3, 143.0], [2.4, 145.0], [2.5, 146.0], [2.6, 147.0], [2.7, 149.0], [2.8, 150.0], [2.9, 151.0], [3.0, 153.0], [3.1, 154.0], [3.2, 155.0], [3.3, 156.0], [3.4, 157.0], [3.5, 159.0], [3.6, 160.0], [3.7, 161.0], [3.8, 162.0], [3.9, 163.0], [4.0, 164.0], [4.1, 165.0], [4.2, 166.0], [4.3, 167.0], [4.4, 168.0], [4.5, 169.0], [4.6, 170.0], [4.7, 171.0], [4.8, 172.0], [4.9, 172.0], [5.0, 173.0], [5.1, 174.0], [5.2, 175.0], [5.3, 176.0], [5.4, 177.0], [5.5, 177.0], [5.6, 178.0], [5.7, 179.0], [5.8, 180.0], [5.9, 181.0], [6.0, 182.0], [6.1, 182.0], [6.2, 183.0], [6.3, 184.0], [6.4, 185.0], [6.5, 185.0], [6.6, 186.0], [6.7, 187.0], [6.8, 187.0], [6.9, 188.0], [7.0, 189.0], [7.1, 190.0], [7.2, 190.0], [7.3, 191.0], [7.4, 192.0], [7.5, 192.0], [7.6, 193.0], [7.7, 194.0], [7.8, 194.0], [7.9, 195.0], [8.0, 195.0], [8.1, 196.0], [8.2, 197.0], [8.3, 197.0], [8.4, 198.0], [8.5, 198.0], [8.6, 199.0], [8.7, 200.0], [8.8, 200.0], [8.9, 201.0], [9.0, 201.0], [9.1, 202.0], [9.2, 203.0], [9.3, 203.0], [9.4, 204.0], [9.5, 204.0], [9.6, 205.0], [9.7, 205.0], [9.8, 206.0], [9.9, 206.0], [10.0, 207.0], [10.1, 207.0], [10.2, 208.0], [10.3, 208.0], [10.4, 209.0], [10.5, 209.0], [10.6, 210.0], [10.7, 210.0], [10.8, 211.0], [10.9, 212.0], [11.0, 212.0], [11.1, 213.0], [11.2, 213.0], [11.3, 214.0], [11.4, 214.0], [11.5, 214.0], [11.6, 215.0], [11.7, 215.0], [11.8, 216.0], [11.9, 216.0], [12.0, 217.0], [12.1, 217.0], [12.2, 218.0], [12.3, 218.0], [12.4, 219.0], [12.5, 219.0], [12.6, 220.0], [12.7, 220.0], [12.8, 220.0], [12.9, 221.0], [13.0, 221.0], [13.1, 222.0], [13.2, 222.0], [13.3, 223.0], [13.4, 223.0], [13.5, 223.0], [13.6, 224.0], [13.7, 224.0], [13.8, 225.0], [13.9, 225.0], [14.0, 226.0], [14.1, 226.0], [14.2, 226.0], [14.3, 227.0], [14.4, 227.0], [14.5, 228.0], [14.6, 228.0], [14.7, 229.0], [14.8, 229.0], [14.9, 229.0], [15.0, 230.0], [15.1, 230.0], [15.2, 231.0], [15.3, 231.0], [15.4, 232.0], [15.5, 232.0], [15.6, 232.0], [15.7, 233.0], [15.8, 233.0], [15.9, 234.0], [16.0, 234.0], [16.1, 234.0], [16.2, 235.0], [16.3, 235.0], [16.4, 235.0], [16.5, 236.0], [16.6, 236.0], [16.7, 237.0], [16.8, 237.0], [16.9, 237.0], [17.0, 238.0], [17.1, 238.0], [17.2, 238.0], [17.3, 239.0], [17.4, 239.0], [17.5, 240.0], [17.6, 240.0], [17.7, 240.0], [17.8, 241.0], [17.9, 241.0], [18.0, 241.0], [18.1, 242.0], [18.2, 242.0], [18.3, 242.0], [18.4, 243.0], [18.5, 243.0], [18.6, 243.0], [18.7, 244.0], [18.8, 244.0], [18.9, 244.0], [19.0, 245.0], [19.1, 245.0], [19.2, 245.0], [19.3, 246.0], [19.4, 246.0], [19.5, 246.0], [19.6, 247.0], [19.7, 247.0], [19.8, 247.0], [19.9, 248.0], [20.0, 248.0], [20.1, 248.0], [20.2, 249.0], [20.3, 249.0], [20.4, 249.0], [20.5, 250.0], [20.6, 250.0], [20.7, 250.0], [20.8, 251.0], [20.9, 251.0], [21.0, 251.0], [21.1, 252.0], [21.2, 252.0], [21.3, 252.0], [21.4, 253.0], [21.5, 253.0], [21.6, 253.0], [21.7, 253.0], [21.8, 254.0], [21.9, 254.0], [22.0, 254.0], [22.1, 255.0], [22.2, 255.0], [22.3, 255.0], [22.4, 256.0], [22.5, 256.0], [22.6, 256.0], [22.7, 256.0], [22.8, 257.0], [22.9, 257.0], [23.0, 257.0], [23.1, 258.0], [23.2, 258.0], [23.3, 258.0], [23.4, 259.0], [23.5, 259.0], [23.6, 259.0], [23.7, 259.0], [23.8, 260.0], [23.9, 260.0], [24.0, 260.0], [24.1, 261.0], [24.2, 261.0], [24.3, 261.0], [24.4, 261.0], [24.5, 262.0], [24.6, 262.0], [24.7, 262.0], [24.8, 263.0], [24.9, 263.0], [25.0, 263.0], [25.1, 263.0], [25.2, 264.0], [25.3, 264.0], [25.4, 264.0], [25.5, 265.0], [25.6, 265.0], [25.7, 265.0], [25.8, 265.0], [25.9, 266.0], [26.0, 266.0], [26.1, 266.0], [26.2, 266.0], [26.3, 267.0], [26.4, 267.0], [26.5, 267.0], [26.6, 268.0], [26.7, 268.0], [26.8, 268.0], [26.9, 268.0], [27.0, 269.0], [27.1, 269.0], [27.2, 269.0], [27.3, 269.0], [27.4, 270.0], [27.5, 270.0], [27.6, 270.0], [27.7, 270.0], [27.8, 271.0], [27.9, 271.0], [28.0, 271.0], [28.1, 271.0], [28.2, 272.0], [28.3, 272.0], [28.4, 272.0], [28.5, 272.0], [28.6, 273.0], [28.7, 273.0], [28.8, 273.0], [28.9, 273.0], [29.0, 274.0], [29.1, 274.0], [29.2, 274.0], [29.3, 274.0], [29.4, 275.0], [29.5, 275.0], [29.6, 275.0], [29.7, 275.0], [29.8, 275.0], [29.9, 276.0], [30.0, 276.0], [30.1, 276.0], [30.2, 276.0], [30.3, 277.0], [30.4, 277.0], [30.5, 277.0], [30.6, 277.0], [30.7, 278.0], [30.8, 278.0], [30.9, 278.0], [31.0, 278.0], [31.1, 279.0], [31.2, 279.0], [31.3, 279.0], [31.4, 279.0], [31.5, 280.0], [31.6, 280.0], [31.7, 280.0], [31.8, 280.0], [31.9, 281.0], [32.0, 281.0], [32.1, 281.0], [32.2, 281.0], [32.3, 282.0], [32.4, 282.0], [32.5, 282.0], [32.6, 282.0], [32.7, 282.0], [32.8, 283.0], [32.9, 283.0], [33.0, 283.0], [33.1, 283.0], [33.2, 284.0], [33.3, 284.0], [33.4, 284.0], [33.5, 284.0], [33.6, 284.0], [33.7, 285.0], [33.8, 285.0], [33.9, 285.0], [34.0, 285.0], [34.1, 285.0], [34.2, 286.0], [34.3, 286.0], [34.4, 286.0], [34.5, 286.0], [34.6, 287.0], [34.7, 287.0], [34.8, 287.0], [34.9, 287.0], [35.0, 287.0], [35.1, 288.0], [35.2, 288.0], [35.3, 288.0], [35.4, 288.0], [35.5, 289.0], [35.6, 289.0], [35.7, 289.0], [35.8, 289.0], [35.9, 289.0], [36.0, 290.0], [36.1, 290.0], [36.2, 290.0], [36.3, 290.0], [36.4, 290.0], [36.5, 291.0], [36.6, 291.0], [36.7, 291.0], [36.8, 291.0], [36.9, 292.0], [37.0, 292.0], [37.1, 292.0], [37.2, 292.0], [37.3, 292.0], [37.4, 293.0], [37.5, 293.0], [37.6, 293.0], [37.7, 293.0], [37.8, 293.0], [37.9, 294.0], [38.0, 294.0], [38.1, 294.0], [38.2, 294.0], [38.3, 294.0], [38.4, 295.0], [38.5, 295.0], [38.6, 295.0], [38.7, 295.0], [38.8, 295.0], [38.9, 296.0], [39.0, 296.0], [39.1, 296.0], [39.2, 296.0], [39.3, 296.0], [39.4, 297.0], [39.5, 297.0], [39.6, 297.0], [39.7, 297.0], [39.8, 297.0], [39.9, 298.0], [40.0, 298.0], [40.1, 298.0], [40.2, 298.0], [40.3, 299.0], [40.4, 299.0], [40.5, 299.0], [40.6, 299.0], [40.7, 299.0], [40.8, 299.0], [40.9, 300.0], [41.0, 300.0], [41.1, 300.0], [41.2, 300.0], [41.3, 300.0], [41.4, 301.0], [41.5, 301.0], [41.6, 301.0], [41.7, 301.0], [41.8, 301.0], [41.9, 302.0], [42.0, 302.0], [42.1, 302.0], [42.2, 302.0], [42.3, 302.0], [42.4, 303.0], [42.5, 303.0], [42.6, 303.0], [42.7, 303.0], [42.8, 303.0], [42.9, 304.0], [43.0, 304.0], [43.1, 304.0], [43.2, 304.0], [43.3, 304.0], [43.4, 305.0], [43.5, 305.0], [43.6, 305.0], [43.7, 305.0], [43.8, 305.0], [43.9, 306.0], [44.0, 306.0], [44.1, 306.0], [44.2, 306.0], [44.3, 306.0], [44.4, 307.0], [44.5, 307.0], [44.6, 307.0], [44.7, 307.0], [44.8, 307.0], [44.9, 307.0], [45.0, 308.0], [45.1, 308.0], [45.2, 308.0], [45.3, 308.0], [45.4, 308.0], [45.5, 309.0], [45.6, 309.0], [45.7, 309.0], [45.8, 309.0], [45.9, 309.0], [46.0, 310.0], [46.1, 310.0], [46.2, 310.0], [46.3, 310.0], [46.4, 310.0], [46.5, 310.0], [46.6, 311.0], [46.7, 311.0], [46.8, 311.0], [46.9, 311.0], [47.0, 311.0], [47.1, 312.0], [47.2, 312.0], [47.3, 312.0], [47.4, 312.0], [47.5, 312.0], [47.6, 313.0], [47.7, 313.0], [47.8, 313.0], [47.9, 313.0], [48.0, 313.0], [48.1, 314.0], [48.2, 314.0], [48.3, 314.0], [48.4, 314.0], [48.5, 314.0], [48.6, 314.0], [48.7, 315.0], [48.8, 315.0], [48.9, 315.0], [49.0, 315.0], [49.1, 315.0], [49.2, 316.0], [49.3, 316.0], [49.4, 316.0], [49.5, 316.0], [49.6, 316.0], [49.7, 316.0], [49.8, 317.0], [49.9, 317.0], [50.0, 317.0], [50.1, 317.0], [50.2, 317.0], [50.3, 318.0], [50.4, 318.0], [50.5, 318.0], [50.6, 318.0], [50.7, 318.0], [50.8, 319.0], [50.9, 319.0], [51.0, 319.0], [51.1, 319.0], [51.2, 319.0], [51.3, 320.0], [51.4, 320.0], [51.5, 320.0], [51.6, 320.0], [51.7, 320.0], [51.8, 321.0], [51.9, 321.0], [52.0, 321.0], [52.1, 321.0], [52.2, 321.0], [52.3, 322.0], [52.4, 322.0], [52.5, 322.0], [52.6, 322.0], [52.7, 322.0], [52.8, 323.0], [52.9, 323.0], [53.0, 323.0], [53.1, 323.0], [53.2, 323.0], [53.3, 323.0], [53.4, 324.0], [53.5, 324.0], [53.6, 324.0], [53.7, 324.0], [53.8, 324.0], [53.9, 325.0], [54.0, 325.0], [54.1, 325.0], [54.2, 325.0], [54.3, 325.0], [54.4, 326.0], [54.5, 326.0], [54.6, 326.0], [54.7, 326.0], [54.8, 326.0], [54.9, 327.0], [55.0, 327.0], [55.1, 327.0], [55.2, 327.0], [55.3, 327.0], [55.4, 327.0], [55.5, 328.0], [55.6, 328.0], [55.7, 328.0], [55.8, 328.0], [55.9, 328.0], [56.0, 329.0], [56.1, 329.0], [56.2, 329.0], [56.3, 329.0], [56.4, 329.0], [56.5, 330.0], [56.6, 330.0], [56.7, 330.0], [56.8, 330.0], [56.9, 330.0], [57.0, 331.0], [57.1, 331.0], [57.2, 331.0], [57.3, 331.0], [57.4, 331.0], [57.5, 332.0], [57.6, 332.0], [57.7, 332.0], [57.8, 332.0], [57.9, 332.0], [58.0, 333.0], [58.1, 333.0], [58.2, 333.0], [58.3, 333.0], [58.4, 333.0], [58.5, 334.0], [58.6, 334.0], [58.7, 334.0], [58.8, 334.0], [58.9, 334.0], [59.0, 335.0], [59.1, 335.0], [59.2, 335.0], [59.3, 335.0], [59.4, 336.0], [59.5, 336.0], [59.6, 336.0], [59.7, 336.0], [59.8, 336.0], [59.9, 337.0], [60.0, 337.0], [60.1, 337.0], [60.2, 337.0], [60.3, 337.0], [60.4, 338.0], [60.5, 338.0], [60.6, 338.0], [60.7, 338.0], [60.8, 338.0], [60.9, 339.0], [61.0, 339.0], [61.1, 339.0], [61.2, 339.0], [61.3, 340.0], [61.4, 340.0], [61.5, 340.0], [61.6, 340.0], [61.7, 340.0], [61.8, 341.0], [61.9, 341.0], [62.0, 341.0], [62.1, 341.0], [62.2, 341.0], [62.3, 342.0], [62.4, 342.0], [62.5, 342.0], [62.6, 342.0], [62.7, 342.0], [62.8, 343.0], [62.9, 343.0], [63.0, 343.0], [63.1, 343.0], [63.2, 343.0], [63.3, 344.0], [63.4, 344.0], [63.5, 344.0], [63.6, 344.0], [63.7, 345.0], [63.8, 345.0], [63.9, 345.0], [64.0, 345.0], [64.1, 345.0], [64.2, 346.0], [64.3, 346.0], [64.4, 346.0], [64.5, 346.0], [64.6, 347.0], [64.7, 347.0], [64.8, 347.0], [64.9, 347.0], [65.0, 347.0], [65.1, 348.0], [65.2, 348.0], [65.3, 348.0], [65.4, 348.0], [65.5, 349.0], [65.6, 349.0], [65.7, 349.0], [65.8, 349.0], [65.9, 350.0], [66.0, 350.0], [66.1, 350.0], [66.2, 350.0], [66.3, 350.0], [66.4, 351.0], [66.5, 351.0], [66.6, 351.0], [66.7, 351.0], [66.8, 352.0], [66.9, 352.0], [67.0, 352.0], [67.1, 352.0], [67.2, 353.0], [67.3, 353.0], [67.4, 353.0], [67.5, 353.0], [67.6, 354.0], [67.7, 354.0], [67.8, 354.0], [67.9, 354.0], [68.0, 354.0], [68.1, 355.0], [68.2, 355.0], [68.3, 355.0], [68.4, 355.0], [68.5, 356.0], [68.6, 356.0], [68.7, 356.0], [68.8, 356.0], [68.9, 357.0], [69.0, 357.0], [69.1, 357.0], [69.2, 357.0], [69.3, 358.0], [69.4, 358.0], [69.5, 358.0], [69.6, 358.0], [69.7, 359.0], [69.8, 359.0], [69.9, 359.0], [70.0, 359.0], [70.1, 360.0], [70.2, 360.0], [70.3, 360.0], [70.4, 360.0], [70.5, 361.0], [70.6, 361.0], [70.7, 361.0], [70.8, 361.0], [70.9, 362.0], [71.0, 362.0], [71.1, 362.0], [71.2, 363.0], [71.3, 363.0], [71.4, 363.0], [71.5, 363.0], [71.6, 364.0], [71.7, 364.0], [71.8, 364.0], [71.9, 364.0], [72.0, 365.0], [72.1, 365.0], [72.2, 365.0], [72.3, 366.0], [72.4, 366.0], [72.5, 366.0], [72.6, 366.0], [72.7, 367.0], [72.8, 367.0], [72.9, 367.0], [73.0, 367.0], [73.1, 368.0], [73.2, 368.0], [73.3, 368.0], [73.4, 369.0], [73.5, 369.0], [73.6, 369.0], [73.7, 370.0], [73.8, 370.0], [73.9, 370.0], [74.0, 370.0], [74.1, 371.0], [74.2, 371.0], [74.3, 371.0], [74.4, 372.0], [74.5, 372.0], [74.6, 372.0], [74.7, 373.0], [74.8, 373.0], [74.9, 373.0], [75.0, 374.0], [75.1, 374.0], [75.2, 374.0], [75.3, 375.0], [75.4, 375.0], [75.5, 375.0], [75.6, 376.0], [75.7, 376.0], [75.8, 376.0], [75.9, 377.0], [76.0, 377.0], [76.1, 377.0], [76.2, 378.0], [76.3, 378.0], [76.4, 378.0], [76.5, 379.0], [76.6, 379.0], [76.7, 379.0], [76.8, 380.0], [76.9, 380.0], [77.0, 381.0], [77.1, 381.0], [77.2, 381.0], [77.3, 382.0], [77.4, 382.0], [77.5, 382.0], [77.6, 383.0], [77.7, 383.0], [77.8, 384.0], [77.9, 384.0], [78.0, 384.0], [78.1, 385.0], [78.2, 385.0], [78.3, 386.0], [78.4, 386.0], [78.5, 386.0], [78.6, 387.0], [78.7, 387.0], [78.8, 388.0], [78.9, 388.0], [79.0, 388.0], [79.1, 389.0], [79.2, 389.0], [79.3, 390.0], [79.4, 390.0], [79.5, 391.0], [79.6, 391.0], [79.7, 391.0], [79.8, 392.0], [79.9, 392.0], [80.0, 393.0], [80.1, 393.0], [80.2, 394.0], [80.3, 394.0], [80.4, 395.0], [80.5, 395.0], [80.6, 395.0], [80.7, 396.0], [80.8, 396.0], [80.9, 397.0], [81.0, 397.0], [81.1, 398.0], [81.2, 398.0], [81.3, 399.0], [81.4, 399.0], [81.5, 400.0], [81.6, 400.0], [81.7, 401.0], [81.8, 401.0], [81.9, 402.0], [82.0, 402.0], [82.1, 403.0], [82.2, 403.0], [82.3, 404.0], [82.4, 404.0], [82.5, 405.0], [82.6, 405.0], [82.7, 406.0], [82.8, 406.0], [82.9, 407.0], [83.0, 407.0], [83.1, 408.0], [83.2, 409.0], [83.3, 409.0], [83.4, 410.0], [83.5, 411.0], [83.6, 411.0], [83.7, 412.0], [83.8, 412.0], [83.9, 413.0], [84.0, 414.0], [84.1, 414.0], [84.2, 415.0], [84.3, 416.0], [84.4, 416.0], [84.5, 417.0], [84.6, 418.0], [84.7, 418.0], [84.8, 419.0], [84.9, 420.0], [85.0, 420.0], [85.1, 421.0], [85.2, 422.0], [85.3, 423.0], [85.4, 423.0], [85.5, 424.0], [85.6, 425.0], [85.7, 426.0], [85.8, 427.0], [85.9, 427.0], [86.0, 428.0], [86.1, 429.0], [86.2, 430.0], [86.3, 431.0], [86.4, 432.0], [86.5, 432.0], [86.6, 433.0], [86.7, 434.0], [86.8, 435.0], [86.9, 436.0], [87.0, 437.0], [87.1, 438.0], [87.2, 439.0], [87.3, 440.0], [87.4, 441.0], [87.5, 442.0], [87.6, 443.0], [87.7, 444.0], [87.8, 445.0], [87.9, 446.0], [88.0, 447.0], [88.1, 448.0], [88.2, 449.0], [88.3, 450.0], [88.4, 451.0], [88.5, 452.0], [88.6, 454.0], [88.7, 455.0], [88.8, 456.0], [88.9, 457.0], [89.0, 458.0], [89.1, 460.0], [89.2, 461.0], [89.3, 462.0], [89.4, 463.0], [89.5, 465.0], [89.6, 466.0], [89.7, 467.0], [89.8, 469.0], [89.9, 470.0], [90.0, 472.0], [90.1, 473.0], [90.2, 475.0], [90.3, 476.0], [90.4, 477.0], [90.5, 479.0], [90.6, 481.0], [90.7, 482.0], [90.8, 484.0], [90.9, 485.0], [91.0, 487.0], [91.1, 489.0], [91.2, 491.0], [91.3, 492.0], [91.4, 494.0], [91.5, 496.0], [91.6, 498.0], [91.7, 500.0], [91.8, 502.0], [91.9, 504.0], [92.0, 506.0], [92.1, 508.0], [92.2, 510.0], [92.3, 512.0], [92.4, 515.0], [92.5, 517.0], [92.6, 519.0], [92.7, 521.0], [92.8, 524.0], [92.9, 526.0], [93.0, 529.0], [93.1, 531.0], [93.2, 534.0], [93.3, 536.0], [93.4, 539.0], [93.5, 541.0], [93.6, 544.0], [93.7, 546.0], [93.8, 548.0], [93.9, 551.0], [94.0, 553.0], [94.1, 556.0], [94.2, 558.0], [94.3, 561.0], [94.4, 564.0], [94.5, 566.0], [94.6, 569.0], [94.7, 572.0], [94.8, 575.0], [94.9, 578.0], [95.0, 581.0], [95.1, 584.0], [95.2, 587.0], [95.3, 590.0], [95.4, 592.0], [95.5, 595.0], [95.6, 598.0], [95.7, 601.0], [95.8, 604.0], [95.9, 607.0], [96.0, 609.0], [96.1, 613.0], [96.2, 616.0], [96.3, 620.0], [96.4, 623.0], [96.5, 626.0], [96.6, 630.0], [96.7, 633.0], [96.8, 637.0], [96.9, 641.0], [97.0, 644.0], [97.1, 648.0], [97.2, 652.0], [97.3, 656.0], [97.4, 660.0], [97.5, 664.0], [97.6, 668.0], [97.7, 673.0], [97.8, 678.0], [97.9, 683.0], [98.0, 688.0], [98.1, 693.0], [98.2, 698.0], [98.3, 704.0], [98.4, 711.0], [98.5, 718.0], [98.6, 725.0], [98.7, 734.0], [98.8, 741.0], [98.9, 749.0], [99.0, 758.0], [99.1, 770.0], [99.2, 783.0], [99.3, 799.0], [99.4, 818.0], [99.5, 842.0], [99.6, 871.0], [99.7, 910.0], [99.8, 959.0], [99.9, 1055.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 109654.0, "series": [{"data": [[0.0, 944.0], [600.0, 6937.0], [700.0, 2921.0], [800.0, 1001.0], [900.0, 476.0], [1000.0, 192.0], [1100.0, 79.0], [1200.0, 40.0], [1300.0, 32.0], [1400.0, 22.0], [1500.0, 11.0], [100.0, 22449.0], [1600.0, 5.0], [1700.0, 6.0], [1800.0, 2.0], [1900.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2700.0, 2.0], [200.0, 86627.0], [3300.0, 1.0], [4600.0, 1.0], [300.0, 109654.0], [400.0, 27517.0], [500.0, 10687.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 31.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 247315.0, "series": [{"data": [[0.0, 247315.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 22263.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 31.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 145.39125431530474, "minX": 1.62013944E12, "maxY": 150.0, "series": [{"data": [[1.62013962E12, 150.0], [1.62013944E12, 145.39125431530474], [1.62013992E12, 150.0], [1.6201395E12, 150.0], [1.62013998E12, 150.0], [1.6201398E12, 150.0], [1.62013986E12, 150.0], [1.62013968E12, 150.0], [1.62013974E12, 150.0], [1.62013956E12, 150.0], [1.62014004E12, 149.50259810069875]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62014004E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 68.0, "minX": 1.0, "maxY": 494.0, "series": [{"data": [[2.0, 494.0], [4.0, 316.0], [5.0, 284.0], [6.0, 286.0], [7.0, 282.0], [8.0, 283.0], [11.0, 358.0], [13.0, 362.0], [14.0, 328.0], [17.0, 402.6666666666667], [18.0, 414.0], [20.0, 403.0], [21.0, 389.0], [22.0, 372.0], [23.0, 218.0], [24.0, 194.0], [28.0, 188.0], [29.0, 68.0], [30.0, 134.9230769230769], [31.0, 83.0], [32.0, 141.0], [33.0, 239.66666666666669], [34.0, 133.14285714285714], [35.0, 167.5], [37.0, 168.5], [36.0, 303.5], [38.0, 153.5], [39.0, 118.33333333333334], [40.0, 108.4], [41.0, 130.66666666666666], [42.0, 167.0], [43.0, 106.5], [44.0, 150.0], [45.0, 150.63636363636363], [46.0, 103.16666666666666], [48.0, 298.3333333333333], [51.0, 344.5], [52.0, 268.0], [53.0, 126.71428571428571], [54.0, 146.875], [55.0, 143.0], [56.0, 136.0], [57.0, 182.66666666666669], [58.0, 89.0], [59.0, 159.22222222222223], [61.0, 248.0], [62.0, 206.0], [64.0, 127.66666666666667], [65.0, 196.75], [66.0, 133.0], [67.0, 153.0], [68.0, 249.0], [69.0, 182.14285714285714], [71.0, 166.2], [70.0, 364.75], [72.0, 347.33333333333337], [73.0, 219.0], [74.0, 163.5], [75.0, 134.0], [76.0, 138.0], [77.0, 187.5], [79.0, 292.0], [78.0, 297.0], [82.0, 191.625], [83.0, 209.625], [81.0, 361.0], [80.0, 386.5], [84.0, 159.5], [85.0, 197.0], [86.0, 166.11111111111111], [87.0, 216.0], [88.0, 205.5], [89.0, 147.33333333333334], [91.0, 302.0], [90.0, 350.0], [93.0, 173.66666666666666], [94.0, 361.5], [92.0, 347.0], [96.0, 236.83333333333334], [97.0, 230.0], [98.0, 238.0], [99.0, 220.66666666666666], [100.0, 190.55555555555554], [102.0, 247.0], [101.0, 310.0], [104.0, 406.5], [105.0, 193.0], [106.0, 230.28571428571428], [107.0, 265.5], [109.0, 195.44444444444446], [111.0, 319.5], [108.0, 336.3333333333333], [112.0, 217.35714285714286], [113.0, 250.33333333333334], [114.0, 271.0], [115.0, 216.0], [116.0, 232.6], [118.0, 239.0], [119.0, 262.0], [117.0, 303.0], [120.0, 245.66666666666666], [123.0, 241.0], [122.0, 342.0], [121.0, 291.0], [124.0, 342.6666666666667], [126.0, 242.0], [127.0, 433.75], [130.0, 237.33333333333334], [131.0, 272.5], [132.0, 322.6], [133.0, 289.0], [134.0, 308.0], [135.0, 288.44444444444446], [136.0, 261.0], [137.0, 324.0], [139.0, 285.5], [142.0, 301.33333333333337], [143.0, 315.6666666666667], [141.0, 355.6666666666667], [140.0, 296.0], [138.0, 292.0], [145.0, 298.3333333333333], [147.0, 303.2857142857143], [148.0, 331.8], [150.0, 333.78497915630146], [146.0, 298.0], [144.0, 199.0], [1.0, 476.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[149.88452907729555, 333.59292160127904]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11514.25, "minX": 1.62013944E12, "maxY": 142157.4, "series": [{"data": [[1.62013962E12, 141301.13333333333], [1.62013944E12, 22014.666666666668], [1.62013992E12, 138289.13333333333], [1.6201395E12, 131092.08333333334], [1.62013998E12, 138570.2], [1.6201398E12, 141537.83333333334], [1.62013986E12, 130194.85], [1.62013968E12, 142157.4], [1.62013974E12, 134644.01666666666], [1.62013956E12, 131949.35], [1.62014004E12, 113003.38333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62013962E12, 73980.05], [1.62013944E12, 11514.25], [1.62013992E12, 72400.65], [1.6201395E12, 68627.05], [1.62013998E12, 72551.7], [1.6201398E12, 74099.3], [1.62013986E12, 68142.1], [1.62013968E12, 74427.9], [1.62013974E12, 70497.95], [1.62013956E12, 69064.3], [1.62014004E12, 59158.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62014004E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 320.27130954923985, "minX": 1.62013944E12, "maxY": 349.66858520650527, "series": [{"data": [[1.62013962E12, 322.39259232725465], [1.62013944E12, 320.58757192174903], [1.62013992E12, 329.64591339994854], [1.6201395E12, 347.27242537745826], [1.62013998E12, 328.778946599459], [1.6201398E12, 322.11440526428856], [1.62013986E12, 349.66858520650527], [1.62013968E12, 320.27130954923985], [1.62013974E12, 338.10840882607175], [1.62013956E12, 345.3511626122331], [1.62014004E12, 338.5086006092076]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62014004E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 320.2421491134342, "minX": 1.62013944E12, "maxY": 349.6470794119948, "series": [{"data": [[1.62013962E12, 322.36486728516377], [1.62013944E12, 320.5445339470658], [1.62013992E12, 329.61930383221505], [1.6201395E12, 347.2418040699695], [1.62013998E12, 328.7524289575591], [1.6201398E12, 322.08876332165136], [1.62013986E12, 349.6470794119948], [1.62013968E12, 320.2421491134342], [1.62013974E12, 338.0822463631942], [1.62013956E12, 345.3216944209929], [1.62014004E12, 338.48548647195804]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62014004E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016100178890876737, "minX": 1.62013944E12, "maxY": 0.1857307249712307, "series": [{"data": [[1.62013962E12, 0.02460866138911777], [1.62013944E12, 0.1857307249712307], [1.62013992E12, 0.024120639800885656], [1.6201395E12, 0.032513418542688265], [1.62013998E12, 0.02399737015121635], [1.6201398E12, 0.027000929833345406], [1.62013986E12, 0.016100178890876737], [1.62013968E12, 0.024852239549953713], [1.62013974E12, 0.030635642596699614], [1.62013956E12, 0.019338500498810345], [1.62014004E12, 0.02015767783551343]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62014004E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.62013944E12, "maxY": 4672.0, "series": [{"data": [[1.62013962E12, 1705.0], [1.62013944E12, 1290.0], [1.62013992E12, 3319.0], [1.6201395E12, 2768.0], [1.62013998E12, 2774.0], [1.6201398E12, 4672.0], [1.62013986E12, 1935.0], [1.62013968E12, 1474.0], [1.62013974E12, 2419.0], [1.62013956E12, 1833.0], [1.62014004E12, 2248.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62013962E12, 444.0], [1.62013944E12, 451.0], [1.62013992E12, 446.0], [1.6201395E12, 482.0], [1.62013998E12, 440.0], [1.6201398E12, 446.0], [1.62013986E12, 496.0], [1.62013968E12, 436.0], [1.62013974E12, 467.0], [1.62013956E12, 470.0], [1.62014004E12, 475.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62013962E12, 720.9900000000016], [1.62013944E12, 725.7799999999997], [1.62013992E12, 725.0], [1.6201395E12, 774.9700000000048], [1.62013998E12, 720.9900000000016], [1.6201398E12, 685.0], [1.62013986E12, 802.0], [1.62013968E12, 700.0], [1.62013974E12, 749.9900000000016], [1.62013956E12, 758.0], [1.62014004E12, 780.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62013962E12, 554.0], [1.62013944E12, 562.0], [1.62013992E12, 555.0], [1.6201395E12, 597.0], [1.62013998E12, 544.0], [1.6201398E12, 538.0], [1.62013986E12, 613.0], [1.62013968E12, 536.0], [1.62013974E12, 569.0], [1.62013956E12, 593.0], [1.62014004E12, 596.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62013962E12, 51.0], [1.62013944E12, 14.0], [1.62013992E12, 12.0], [1.6201395E12, 22.0], [1.62013998E12, 39.0], [1.6201398E12, 61.0], [1.62013986E12, 58.0], [1.62013968E12, 60.0], [1.62013974E12, 69.0], [1.62013956E12, 53.0], [1.62014004E12, 43.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62013962E12, 295.0], [1.62013944E12, 316.0], [1.62013992E12, 303.0], [1.6201395E12, 328.0], [1.62013998E12, 297.0], [1.6201398E12, 296.0], [1.62013986E12, 334.0], [1.62013968E12, 295.0], [1.62013974E12, 314.0], [1.62013956E12, 320.0], [1.62014004E12, 323.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62014004E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 150.5, "minX": 180.0, "maxY": 421.5, "series": [{"data": [[180.0, 319.0], [292.0, 150.5], [318.0, 421.5], [328.0, 381.0], [334.0, 374.0], [323.0, 406.0], [335.0, 397.0], [343.0, 376.0], [345.0, 368.0], [342.0, 384.0], [346.0, 379.0], [344.0, 386.0], [340.0, 377.0], [336.0, 406.0], [341.0, 397.0], [349.0, 359.0], [353.0, 381.0], [358.0, 359.0], [357.0, 376.0], [367.0, 367.0], [365.0, 370.0], [361.0, 371.0], [360.0, 389.0], [363.0, 390.0], [364.0, 371.0], [366.0, 360.0], [352.0, 387.0], [359.0, 373.0], [371.0, 354.0], [381.0, 362.0], [369.0, 365.0], [370.0, 360.5], [375.0, 381.0], [368.0, 351.0], [380.0, 356.0], [374.0, 358.0], [372.0, 371.0], [373.0, 365.0], [376.0, 373.0], [377.0, 356.0], [378.0, 351.0], [379.0, 344.0], [382.0, 352.0], [383.0, 354.0], [397.0, 340.0], [392.0, 347.0], [388.0, 359.5], [395.0, 338.0], [394.0, 345.0], [398.0, 355.0], [399.0, 341.0], [393.0, 346.0], [389.0, 349.0], [391.0, 346.5], [384.0, 346.0], [385.0, 344.0], [386.0, 362.0], [396.0, 357.0], [387.0, 346.0], [390.0, 335.0], [414.0, 331.5], [409.0, 343.0], [407.0, 398.0], [408.0, 337.0], [415.0, 325.0], [410.0, 332.0], [411.0, 324.0], [404.0, 336.0], [402.0, 343.0], [403.0, 340.0], [412.0, 328.0], [413.0, 323.0], [400.0, 341.0], [401.0, 343.0], [405.0, 344.0], [406.0, 336.0], [428.0, 317.0], [416.0, 319.0], [419.0, 330.0], [421.0, 337.0], [420.0, 297.0], [425.0, 346.0], [426.0, 331.0], [427.0, 310.0], [431.0, 318.0], [429.0, 316.0], [430.0, 316.0], [424.0, 323.0], [417.0, 329.0], [422.0, 334.0], [423.0, 329.0], [418.0, 337.0], [435.0, 316.0], [439.0, 315.0], [438.0, 311.5], [437.0, 309.0], [436.0, 320.0], [433.0, 318.0], [432.0, 327.0], [440.0, 335.0], [442.0, 319.0], [443.0, 306.0], [434.0, 321.5], [445.0, 311.0], [444.0, 313.0], [446.0, 315.0], [447.0, 306.0], [441.0, 309.0], [449.0, 325.0], [461.0, 302.0], [460.0, 295.0], [458.0, 319.5], [459.0, 298.0], [456.0, 299.5], [462.0, 304.0], [463.0, 295.0], [448.0, 319.5], [455.0, 303.0], [457.0, 299.0], [450.0, 307.0], [451.0, 333.0], [453.0, 313.5], [454.0, 309.0], [466.0, 301.0], [474.0, 299.0], [475.0, 304.0], [473.0, 298.0], [470.0, 295.5], [469.0, 344.0], [471.0, 305.0], [464.0, 301.5], [465.0, 287.0], [479.0, 298.0], [476.0, 301.0], [467.0, 292.0], [478.0, 303.0], [477.0, 292.0], [468.0, 303.0], [494.0, 292.0], [488.0, 294.5], [489.0, 288.0], [486.0, 297.0], [485.0, 296.0], [484.0, 296.0], [490.0, 275.0], [492.0, 295.0], [483.0, 279.5], [493.0, 280.0], [491.0, 303.0], [495.0, 277.0], [480.0, 298.0], [487.0, 297.0], [481.0, 305.0], [482.0, 290.0], [496.0, 288.0], [509.0, 282.0], [508.0, 286.0], [511.0, 281.0], [510.0, 270.5], [502.0, 281.0], [503.0, 287.0], [497.0, 288.0], [499.0, 295.0], [501.0, 294.0], [500.0, 281.0], [504.0, 272.0], [505.0, 273.0], [506.0, 291.0], [537.0, 268.0], [527.0, 269.0], [526.0, 262.0], [524.0, 274.0], [525.0, 304.0], [523.0, 281.0], [522.0, 273.5], [520.0, 281.0], [521.0, 286.0], [513.0, 274.0], [512.0, 279.0], [529.0, 266.0], [519.0, 270.0], [518.0, 278.0], [517.0, 270.5], [514.0, 284.0], [531.0, 287.0], [530.0, 250.0], [532.0, 260.0], [543.0, 257.0], [528.0, 270.0], [539.0, 263.0], [538.0, 257.0], [535.0, 265.0], [534.0, 262.5], [533.0, 262.0], [550.0, 248.0], [574.0, 244.0], [570.0, 245.0], [551.0, 254.0], [573.0, 259.0], [547.0, 260.0], [546.0, 270.5], [557.0, 257.0], [554.0, 257.0], [553.0, 264.0], [544.0, 260.5], [560.0, 256.0], [549.0, 256.0], [558.0, 245.5], [559.0, 256.0], [563.0, 246.0], [567.0, 262.0], [561.0, 247.0], [562.0, 255.5], [583.0, 244.0], [581.0, 242.0], [577.0, 236.0], [582.0, 236.0], [593.0, 225.0], [598.0, 241.0], [602.0, 241.0], [592.0, 237.0], [591.0, 236.0], [608.0, 226.0], [618.0, 237.5], [639.0, 209.0], [637.0, 208.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 639.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 150.5, "minX": 180.0, "maxY": 421.5, "series": [{"data": [[180.0, 319.0], [292.0, 150.5], [318.0, 421.5], [328.0, 381.0], [334.0, 374.0], [323.0, 406.0], [335.0, 397.0], [343.0, 376.0], [345.0, 367.0], [342.0, 384.0], [346.0, 379.0], [344.0, 386.0], [340.0, 377.0], [336.0, 406.0], [341.0, 397.0], [349.0, 359.0], [353.0, 381.0], [358.0, 359.0], [357.0, 376.0], [367.0, 367.0], [365.0, 370.0], [361.0, 371.0], [360.0, 389.0], [363.0, 390.0], [364.0, 371.0], [366.0, 360.0], [352.0, 387.0], [359.0, 373.0], [371.0, 354.0], [381.0, 362.0], [369.0, 365.0], [370.0, 360.5], [375.0, 381.0], [368.0, 351.0], [380.0, 356.0], [374.0, 358.0], [372.0, 371.0], [373.0, 365.0], [376.0, 373.0], [377.0, 356.0], [378.0, 351.0], [379.0, 344.0], [382.0, 352.0], [383.0, 354.0], [397.0, 340.0], [392.0, 347.0], [388.0, 359.0], [395.0, 338.0], [394.0, 345.0], [398.0, 355.0], [399.0, 341.0], [393.0, 346.0], [389.0, 349.0], [391.0, 346.5], [384.0, 345.5], [385.0, 344.0], [386.0, 362.0], [396.0, 357.0], [387.0, 346.0], [390.0, 335.0], [414.0, 331.0], [409.0, 342.0], [407.0, 398.0], [408.0, 337.0], [415.0, 325.0], [410.0, 332.0], [411.0, 324.0], [404.0, 336.0], [402.0, 343.0], [403.0, 340.0], [412.0, 328.0], [413.0, 323.0], [400.0, 341.0], [401.0, 343.0], [405.0, 344.0], [406.0, 336.0], [428.0, 317.0], [416.0, 319.0], [419.0, 330.0], [421.0, 337.0], [420.0, 297.0], [425.0, 346.0], [426.0, 331.0], [427.0, 310.0], [431.0, 318.0], [429.0, 316.0], [430.0, 316.0], [424.0, 322.5], [417.0, 329.0], [422.0, 334.0], [423.0, 329.0], [418.0, 337.0], [435.0, 316.0], [439.0, 314.5], [438.0, 311.0], [437.0, 309.0], [436.0, 320.0], [433.0, 318.0], [432.0, 327.0], [440.0, 335.0], [442.0, 319.0], [443.0, 305.0], [434.0, 321.5], [445.0, 311.0], [444.0, 313.0], [446.0, 315.0], [447.0, 306.0], [441.0, 309.0], [449.0, 325.0], [461.0, 302.0], [460.0, 295.0], [458.0, 319.5], [459.0, 298.0], [456.0, 299.5], [462.0, 304.0], [463.0, 295.0], [448.0, 319.5], [455.0, 303.0], [457.0, 299.0], [450.0, 307.0], [451.0, 333.0], [453.0, 313.5], [454.0, 309.0], [466.0, 301.0], [474.0, 299.0], [475.0, 304.0], [473.0, 298.0], [470.0, 295.0], [469.0, 344.0], [471.0, 305.0], [464.0, 301.0], [465.0, 286.5], [479.0, 298.0], [476.0, 301.0], [467.0, 292.0], [478.0, 303.0], [477.0, 292.0], [468.0, 302.5], [494.0, 292.0], [488.0, 294.5], [489.0, 288.0], [486.0, 296.5], [485.0, 296.0], [484.0, 296.0], [490.0, 275.0], [492.0, 295.0], [483.0, 279.5], [493.0, 280.0], [491.0, 303.0], [495.0, 276.5], [480.0, 298.0], [487.0, 297.0], [481.0, 305.0], [482.0, 290.0], [496.0, 288.0], [509.0, 282.0], [508.0, 286.0], [511.0, 281.0], [510.0, 270.5], [502.0, 281.0], [503.0, 287.0], [497.0, 288.0], [499.0, 295.0], [501.0, 294.0], [500.0, 281.0], [504.0, 272.0], [505.0, 273.0], [506.0, 291.0], [537.0, 268.0], [527.0, 269.0], [526.0, 261.5], [524.0, 274.0], [525.0, 304.0], [523.0, 281.0], [522.0, 273.5], [520.0, 281.0], [521.0, 286.0], [513.0, 274.0], [512.0, 279.0], [529.0, 266.0], [519.0, 270.0], [518.0, 278.0], [517.0, 270.5], [514.0, 284.0], [531.0, 287.0], [530.0, 250.0], [532.0, 260.0], [543.0, 257.0], [528.0, 270.0], [539.0, 263.0], [538.0, 257.0], [535.0, 265.0], [534.0, 262.5], [533.0, 262.0], [550.0, 248.0], [574.0, 244.0], [570.0, 245.0], [551.0, 254.0], [573.0, 259.0], [547.0, 260.0], [546.0, 270.5], [557.0, 257.0], [554.0, 257.0], [553.0, 264.0], [544.0, 260.5], [560.0, 256.0], [549.0, 256.0], [558.0, 245.5], [559.0, 256.0], [563.0, 246.0], [567.0, 262.0], [561.0, 247.0], [562.0, 255.5], [583.0, 244.0], [581.0, 242.0], [577.0, 236.0], [582.0, 236.0], [593.0, 225.0], [598.0, 241.0], [602.0, 241.0], [592.0, 237.0], [591.0, 236.0], [608.0, 226.0], [618.0, 237.5], [639.0, 209.0], [637.0, 208.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 639.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 74.91666666666667, "minX": 1.62013944E12, "maxY": 468.1, "series": [{"data": [[1.62013962E12, 465.28333333333336], [1.62013944E12, 74.91666666666667], [1.62013992E12, 455.35], [1.6201395E12, 431.6166666666667], [1.62013998E12, 456.28333333333336], [1.6201398E12, 466.03333333333336], [1.62013986E12, 428.56666666666666], [1.62013968E12, 468.1], [1.62013974E12, 443.3833333333333], [1.62013956E12, 434.3666666666667], [1.62014004E12, 369.5833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62014004E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 72.41666666666667, "minX": 1.62013944E12, "maxY": 468.1, "series": [{"data": [[1.62013962E12, 465.28333333333336], [1.62013944E12, 72.41666666666667], [1.62013992E12, 455.35], [1.6201395E12, 431.6166666666667], [1.62013998E12, 456.3], [1.6201398E12, 466.03333333333336], [1.62013986E12, 428.56666666666666], [1.62013968E12, 468.1], [1.62013974E12, 443.3833333333333], [1.62013956E12, 434.3666666666667], [1.62014004E12, 372.06666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62014004E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 72.41666666666667, "minX": 1.62013944E12, "maxY": 468.1, "series": [{"data": [[1.62013962E12, 465.28333333333336], [1.62013944E12, 72.41666666666667], [1.62013992E12, 455.35], [1.6201395E12, 431.6166666666667], [1.62013998E12, 456.3], [1.6201398E12, 466.03333333333336], [1.62013986E12, 428.56666666666666], [1.62013968E12, 468.1], [1.62013974E12, 443.3833333333333], [1.62013956E12, 434.3666666666667], [1.62014004E12, 372.06666666666666]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62014004E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 72.41666666666667, "minX": 1.62013944E12, "maxY": 468.1, "series": [{"data": [[1.62013962E12, 465.28333333333336], [1.62013944E12, 72.41666666666667], [1.62013992E12, 455.35], [1.6201395E12, 431.6166666666667], [1.62013998E12, 456.3], [1.6201398E12, 466.03333333333336], [1.62013986E12, 428.56666666666666], [1.62013968E12, 468.1], [1.62013974E12, 443.3833333333333], [1.62013956E12, 434.3666666666667], [1.62014004E12, 372.06666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62014004E12, "title": "Total Transactions Per Second"}},
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

