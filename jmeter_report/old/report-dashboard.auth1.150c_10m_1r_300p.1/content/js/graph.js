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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 2434.0, "series": [{"data": [[0.0, 18.0], [0.1, 85.0], [0.2, 93.0], [0.3, 98.0], [0.4, 103.0], [0.5, 106.0], [0.6, 110.0], [0.7, 113.0], [0.8, 116.0], [0.9, 118.0], [1.0, 121.0], [1.1, 124.0], [1.2, 126.0], [1.3, 128.0], [1.4, 130.0], [1.5, 132.0], [1.6, 134.0], [1.7, 135.0], [1.8, 137.0], [1.9, 139.0], [2.0, 140.0], [2.1, 142.0], [2.2, 143.0], [2.3, 145.0], [2.4, 146.0], [2.5, 147.0], [2.6, 149.0], [2.7, 150.0], [2.8, 151.0], [2.9, 152.0], [3.0, 153.0], [3.1, 155.0], [3.2, 156.0], [3.3, 157.0], [3.4, 158.0], [3.5, 159.0], [3.6, 160.0], [3.7, 161.0], [3.8, 162.0], [3.9, 163.0], [4.0, 164.0], [4.1, 165.0], [4.2, 166.0], [4.3, 167.0], [4.4, 167.0], [4.5, 168.0], [4.6, 169.0], [4.7, 170.0], [4.8, 171.0], [4.9, 171.0], [5.0, 172.0], [5.1, 173.0], [5.2, 174.0], [5.3, 175.0], [5.4, 175.0], [5.5, 176.0], [5.6, 177.0], [5.7, 177.0], [5.8, 178.0], [5.9, 179.0], [6.0, 180.0], [6.1, 180.0], [6.2, 181.0], [6.3, 182.0], [6.4, 182.0], [6.5, 183.0], [6.6, 183.0], [6.7, 184.0], [6.8, 185.0], [6.9, 185.0], [7.0, 186.0], [7.1, 187.0], [7.2, 187.0], [7.3, 188.0], [7.4, 188.0], [7.5, 189.0], [7.6, 190.0], [7.7, 190.0], [7.8, 191.0], [7.9, 191.0], [8.0, 192.0], [8.1, 192.0], [8.2, 193.0], [8.3, 193.0], [8.4, 194.0], [8.5, 195.0], [8.6, 195.0], [8.7, 196.0], [8.8, 196.0], [8.9, 197.0], [9.0, 197.0], [9.1, 198.0], [9.2, 198.0], [9.3, 199.0], [9.4, 199.0], [9.5, 200.0], [9.6, 200.0], [9.7, 201.0], [9.8, 201.0], [9.9, 202.0], [10.0, 202.0], [10.1, 203.0], [10.2, 203.0], [10.3, 203.0], [10.4, 204.0], [10.5, 204.0], [10.6, 205.0], [10.7, 205.0], [10.8, 206.0], [10.9, 206.0], [11.0, 207.0], [11.1, 207.0], [11.2, 208.0], [11.3, 208.0], [11.4, 209.0], [11.5, 209.0], [11.6, 210.0], [11.7, 210.0], [11.8, 211.0], [11.9, 211.0], [12.0, 211.0], [12.1, 212.0], [12.2, 212.0], [12.3, 213.0], [12.4, 213.0], [12.5, 214.0], [12.6, 214.0], [12.7, 214.0], [12.8, 215.0], [12.9, 215.0], [13.0, 216.0], [13.1, 216.0], [13.2, 217.0], [13.3, 217.0], [13.4, 217.0], [13.5, 218.0], [13.6, 218.0], [13.7, 218.0], [13.8, 219.0], [13.9, 219.0], [14.0, 220.0], [14.1, 220.0], [14.2, 220.0], [14.3, 221.0], [14.4, 221.0], [14.5, 222.0], [14.6, 222.0], [14.7, 222.0], [14.8, 223.0], [14.9, 223.0], [15.0, 223.0], [15.1, 224.0], [15.2, 224.0], [15.3, 225.0], [15.4, 225.0], [15.5, 225.0], [15.6, 226.0], [15.7, 226.0], [15.8, 226.0], [15.9, 227.0], [16.0, 227.0], [16.1, 227.0], [16.2, 228.0], [16.3, 228.0], [16.4, 229.0], [16.5, 229.0], [16.6, 229.0], [16.7, 230.0], [16.8, 230.0], [16.9, 230.0], [17.0, 231.0], [17.1, 231.0], [17.2, 231.0], [17.3, 232.0], [17.4, 232.0], [17.5, 232.0], [17.6, 233.0], [17.7, 233.0], [17.8, 233.0], [17.9, 234.0], [18.0, 234.0], [18.1, 234.0], [18.2, 235.0], [18.3, 235.0], [18.4, 235.0], [18.5, 236.0], [18.6, 236.0], [18.7, 236.0], [18.8, 237.0], [18.9, 237.0], [19.0, 237.0], [19.1, 238.0], [19.2, 238.0], [19.3, 238.0], [19.4, 239.0], [19.5, 239.0], [19.6, 239.0], [19.7, 240.0], [19.8, 240.0], [19.9, 240.0], [20.0, 241.0], [20.1, 241.0], [20.2, 241.0], [20.3, 242.0], [20.4, 242.0], [20.5, 242.0], [20.6, 243.0], [20.7, 243.0], [20.8, 243.0], [20.9, 243.0], [21.0, 244.0], [21.1, 244.0], [21.2, 244.0], [21.3, 245.0], [21.4, 245.0], [21.5, 245.0], [21.6, 246.0], [21.7, 246.0], [21.8, 246.0], [21.9, 247.0], [22.0, 247.0], [22.1, 247.0], [22.2, 247.0], [22.3, 248.0], [22.4, 248.0], [22.5, 248.0], [22.6, 249.0], [22.7, 249.0], [22.8, 249.0], [22.9, 249.0], [23.0, 250.0], [23.1, 250.0], [23.2, 250.0], [23.3, 251.0], [23.4, 251.0], [23.5, 251.0], [23.6, 252.0], [23.7, 252.0], [23.8, 252.0], [23.9, 252.0], [24.0, 253.0], [24.1, 253.0], [24.2, 253.0], [24.3, 253.0], [24.4, 254.0], [24.5, 254.0], [24.6, 254.0], [24.7, 255.0], [24.8, 255.0], [24.9, 255.0], [25.0, 255.0], [25.1, 256.0], [25.2, 256.0], [25.3, 256.0], [25.4, 256.0], [25.5, 257.0], [25.6, 257.0], [25.7, 257.0], [25.8, 257.0], [25.9, 258.0], [26.0, 258.0], [26.1, 258.0], [26.2, 258.0], [26.3, 259.0], [26.4, 259.0], [26.5, 259.0], [26.6, 259.0], [26.7, 260.0], [26.8, 260.0], [26.9, 260.0], [27.0, 260.0], [27.1, 261.0], [27.2, 261.0], [27.3, 261.0], [27.4, 261.0], [27.5, 262.0], [27.6, 262.0], [27.7, 262.0], [27.8, 262.0], [27.9, 263.0], [28.0, 263.0], [28.1, 263.0], [28.2, 263.0], [28.3, 264.0], [28.4, 264.0], [28.5, 264.0], [28.6, 264.0], [28.7, 265.0], [28.8, 265.0], [28.9, 265.0], [29.0, 265.0], [29.1, 266.0], [29.2, 266.0], [29.3, 266.0], [29.4, 266.0], [29.5, 266.0], [29.6, 267.0], [29.7, 267.0], [29.8, 267.0], [29.9, 267.0], [30.0, 268.0], [30.1, 268.0], [30.2, 268.0], [30.3, 268.0], [30.4, 268.0], [30.5, 269.0], [30.6, 269.0], [30.7, 269.0], [30.8, 269.0], [30.9, 270.0], [31.0, 270.0], [31.1, 270.0], [31.2, 270.0], [31.3, 271.0], [31.4, 271.0], [31.5, 271.0], [31.6, 271.0], [31.7, 271.0], [31.8, 272.0], [31.9, 272.0], [32.0, 272.0], [32.1, 272.0], [32.2, 273.0], [32.3, 273.0], [32.4, 273.0], [32.5, 273.0], [32.6, 273.0], [32.7, 274.0], [32.8, 274.0], [32.9, 274.0], [33.0, 274.0], [33.1, 275.0], [33.2, 275.0], [33.3, 275.0], [33.4, 275.0], [33.5, 275.0], [33.6, 276.0], [33.7, 276.0], [33.8, 276.0], [33.9, 276.0], [34.0, 276.0], [34.1, 277.0], [34.2, 277.0], [34.3, 277.0], [34.4, 277.0], [34.5, 277.0], [34.6, 278.0], [34.7, 278.0], [34.8, 278.0], [34.9, 278.0], [35.0, 279.0], [35.1, 279.0], [35.2, 279.0], [35.3, 279.0], [35.4, 279.0], [35.5, 280.0], [35.6, 280.0], [35.7, 280.0], [35.8, 280.0], [35.9, 280.0], [36.0, 281.0], [36.1, 281.0], [36.2, 281.0], [36.3, 281.0], [36.4, 281.0], [36.5, 282.0], [36.6, 282.0], [36.7, 282.0], [36.8, 282.0], [36.9, 282.0], [37.0, 283.0], [37.1, 283.0], [37.2, 283.0], [37.3, 283.0], [37.4, 283.0], [37.5, 284.0], [37.6, 284.0], [37.7, 284.0], [37.8, 284.0], [37.9, 284.0], [38.0, 285.0], [38.1, 285.0], [38.2, 285.0], [38.3, 285.0], [38.4, 285.0], [38.5, 286.0], [38.6, 286.0], [38.7, 286.0], [38.8, 286.0], [38.9, 286.0], [39.0, 287.0], [39.1, 287.0], [39.2, 287.0], [39.3, 287.0], [39.4, 287.0], [39.5, 288.0], [39.6, 288.0], [39.7, 288.0], [39.8, 288.0], [39.9, 288.0], [40.0, 289.0], [40.1, 289.0], [40.2, 289.0], [40.3, 289.0], [40.4, 289.0], [40.5, 289.0], [40.6, 290.0], [40.7, 290.0], [40.8, 290.0], [40.9, 290.0], [41.0, 290.0], [41.1, 291.0], [41.2, 291.0], [41.3, 291.0], [41.4, 291.0], [41.5, 291.0], [41.6, 292.0], [41.7, 292.0], [41.8, 292.0], [41.9, 292.0], [42.0, 292.0], [42.1, 292.0], [42.2, 293.0], [42.3, 293.0], [42.4, 293.0], [42.5, 293.0], [42.6, 293.0], [42.7, 294.0], [42.8, 294.0], [42.9, 294.0], [43.0, 294.0], [43.1, 294.0], [43.2, 294.0], [43.3, 295.0], [43.4, 295.0], [43.5, 295.0], [43.6, 295.0], [43.7, 295.0], [43.8, 296.0], [43.9, 296.0], [44.0, 296.0], [44.1, 296.0], [44.2, 296.0], [44.3, 297.0], [44.4, 297.0], [44.5, 297.0], [44.6, 297.0], [44.7, 297.0], [44.8, 297.0], [44.9, 298.0], [45.0, 298.0], [45.1, 298.0], [45.2, 298.0], [45.3, 298.0], [45.4, 299.0], [45.5, 299.0], [45.6, 299.0], [45.7, 299.0], [45.8, 299.0], [45.9, 299.0], [46.0, 300.0], [46.1, 300.0], [46.2, 300.0], [46.3, 300.0], [46.4, 300.0], [46.5, 301.0], [46.6, 301.0], [46.7, 301.0], [46.8, 301.0], [46.9, 301.0], [47.0, 301.0], [47.1, 302.0], [47.2, 302.0], [47.3, 302.0], [47.4, 302.0], [47.5, 302.0], [47.6, 303.0], [47.7, 303.0], [47.8, 303.0], [47.9, 303.0], [48.0, 303.0], [48.1, 303.0], [48.2, 304.0], [48.3, 304.0], [48.4, 304.0], [48.5, 304.0], [48.6, 304.0], [48.7, 305.0], [48.8, 305.0], [48.9, 305.0], [49.0, 305.0], [49.1, 305.0], [49.2, 305.0], [49.3, 306.0], [49.4, 306.0], [49.5, 306.0], [49.6, 306.0], [49.7, 306.0], [49.8, 307.0], [49.9, 307.0], [50.0, 307.0], [50.1, 307.0], [50.2, 307.0], [50.3, 307.0], [50.4, 308.0], [50.5, 308.0], [50.6, 308.0], [50.7, 308.0], [50.8, 308.0], [50.9, 308.0], [51.0, 309.0], [51.1, 309.0], [51.2, 309.0], [51.3, 309.0], [51.4, 309.0], [51.5, 310.0], [51.6, 310.0], [51.7, 310.0], [51.8, 310.0], [51.9, 310.0], [52.0, 310.0], [52.1, 311.0], [52.2, 311.0], [52.3, 311.0], [52.4, 311.0], [52.5, 311.0], [52.6, 312.0], [52.7, 312.0], [52.8, 312.0], [52.9, 312.0], [53.0, 312.0], [53.1, 312.0], [53.2, 313.0], [53.3, 313.0], [53.4, 313.0], [53.5, 313.0], [53.6, 313.0], [53.7, 313.0], [53.8, 314.0], [53.9, 314.0], [54.0, 314.0], [54.1, 314.0], [54.2, 314.0], [54.3, 315.0], [54.4, 315.0], [54.5, 315.0], [54.6, 315.0], [54.7, 315.0], [54.8, 315.0], [54.9, 316.0], [55.0, 316.0], [55.1, 316.0], [55.2, 316.0], [55.3, 316.0], [55.4, 316.0], [55.5, 317.0], [55.6, 317.0], [55.7, 317.0], [55.8, 317.0], [55.9, 317.0], [56.0, 318.0], [56.1, 318.0], [56.2, 318.0], [56.3, 318.0], [56.4, 318.0], [56.5, 318.0], [56.6, 319.0], [56.7, 319.0], [56.8, 319.0], [56.9, 319.0], [57.0, 319.0], [57.1, 320.0], [57.2, 320.0], [57.3, 320.0], [57.4, 320.0], [57.5, 320.0], [57.6, 320.0], [57.7, 321.0], [57.8, 321.0], [57.9, 321.0], [58.0, 321.0], [58.1, 321.0], [58.2, 322.0], [58.3, 322.0], [58.4, 322.0], [58.5, 322.0], [58.6, 322.0], [58.7, 323.0], [58.8, 323.0], [58.9, 323.0], [59.0, 323.0], [59.1, 323.0], [59.2, 324.0], [59.3, 324.0], [59.4, 324.0], [59.5, 324.0], [59.6, 324.0], [59.7, 325.0], [59.8, 325.0], [59.9, 325.0], [60.0, 325.0], [60.1, 325.0], [60.2, 325.0], [60.3, 326.0], [60.4, 326.0], [60.5, 326.0], [60.6, 326.0], [60.7, 327.0], [60.8, 327.0], [60.9, 327.0], [61.0, 327.0], [61.1, 327.0], [61.2, 328.0], [61.3, 328.0], [61.4, 328.0], [61.5, 328.0], [61.6, 328.0], [61.7, 329.0], [61.8, 329.0], [61.9, 329.0], [62.0, 329.0], [62.1, 329.0], [62.2, 330.0], [62.3, 330.0], [62.4, 330.0], [62.5, 330.0], [62.6, 330.0], [62.7, 331.0], [62.8, 331.0], [62.9, 331.0], [63.0, 331.0], [63.1, 331.0], [63.2, 332.0], [63.3, 332.0], [63.4, 332.0], [63.5, 332.0], [63.6, 333.0], [63.7, 333.0], [63.8, 333.0], [63.9, 333.0], [64.0, 333.0], [64.1, 334.0], [64.2, 334.0], [64.3, 334.0], [64.4, 334.0], [64.5, 334.0], [64.6, 335.0], [64.7, 335.0], [64.8, 335.0], [64.9, 335.0], [65.0, 336.0], [65.1, 336.0], [65.2, 336.0], [65.3, 336.0], [65.4, 336.0], [65.5, 337.0], [65.6, 337.0], [65.7, 337.0], [65.8, 337.0], [65.9, 338.0], [66.0, 338.0], [66.1, 338.0], [66.2, 338.0], [66.3, 339.0], [66.4, 339.0], [66.5, 339.0], [66.6, 339.0], [66.7, 340.0], [66.8, 340.0], [66.9, 340.0], [67.0, 340.0], [67.1, 340.0], [67.2, 341.0], [67.3, 341.0], [67.4, 341.0], [67.5, 341.0], [67.6, 342.0], [67.7, 342.0], [67.8, 342.0], [67.9, 342.0], [68.0, 343.0], [68.1, 343.0], [68.2, 343.0], [68.3, 343.0], [68.4, 344.0], [68.5, 344.0], [68.6, 344.0], [68.7, 344.0], [68.8, 345.0], [68.9, 345.0], [69.0, 345.0], [69.1, 345.0], [69.2, 346.0], [69.3, 346.0], [69.4, 346.0], [69.5, 346.0], [69.6, 347.0], [69.7, 347.0], [69.8, 347.0], [69.9, 348.0], [70.0, 348.0], [70.1, 348.0], [70.2, 348.0], [70.3, 349.0], [70.4, 349.0], [70.5, 349.0], [70.6, 350.0], [70.7, 350.0], [70.8, 350.0], [70.9, 350.0], [71.0, 351.0], [71.1, 351.0], [71.2, 351.0], [71.3, 351.0], [71.4, 352.0], [71.5, 352.0], [71.6, 352.0], [71.7, 353.0], [71.8, 353.0], [71.9, 353.0], [72.0, 353.0], [72.1, 354.0], [72.2, 354.0], [72.3, 354.0], [72.4, 354.0], [72.5, 355.0], [72.6, 355.0], [72.7, 355.0], [72.8, 356.0], [72.9, 356.0], [73.0, 356.0], [73.1, 356.0], [73.2, 357.0], [73.3, 357.0], [73.4, 357.0], [73.5, 358.0], [73.6, 358.0], [73.7, 358.0], [73.8, 359.0], [73.9, 359.0], [74.0, 359.0], [74.1, 360.0], [74.2, 360.0], [74.3, 360.0], [74.4, 360.0], [74.5, 361.0], [74.6, 361.0], [74.7, 361.0], [74.8, 362.0], [74.9, 362.0], [75.0, 363.0], [75.1, 363.0], [75.2, 363.0], [75.3, 363.0], [75.4, 364.0], [75.5, 364.0], [75.6, 364.0], [75.7, 365.0], [75.8, 365.0], [75.9, 365.0], [76.0, 366.0], [76.1, 366.0], [76.2, 367.0], [76.3, 367.0], [76.4, 367.0], [76.5, 368.0], [76.6, 368.0], [76.7, 368.0], [76.8, 369.0], [76.9, 369.0], [77.0, 370.0], [77.1, 370.0], [77.2, 370.0], [77.3, 371.0], [77.4, 371.0], [77.5, 371.0], [77.6, 372.0], [77.7, 372.0], [77.8, 373.0], [77.9, 373.0], [78.0, 373.0], [78.1, 374.0], [78.2, 374.0], [78.3, 375.0], [78.4, 375.0], [78.5, 376.0], [78.6, 376.0], [78.7, 376.0], [78.8, 377.0], [78.9, 377.0], [79.0, 378.0], [79.1, 378.0], [79.2, 378.0], [79.3, 379.0], [79.4, 379.0], [79.5, 380.0], [79.6, 380.0], [79.7, 381.0], [79.8, 381.0], [79.9, 382.0], [80.0, 382.0], [80.1, 383.0], [80.2, 383.0], [80.3, 384.0], [80.4, 384.0], [80.5, 385.0], [80.6, 385.0], [80.7, 386.0], [80.8, 386.0], [80.9, 387.0], [81.0, 387.0], [81.1, 388.0], [81.2, 388.0], [81.3, 389.0], [81.4, 389.0], [81.5, 390.0], [81.6, 390.0], [81.7, 391.0], [81.8, 391.0], [81.9, 392.0], [82.0, 392.0], [82.1, 393.0], [82.2, 394.0], [82.3, 394.0], [82.4, 395.0], [82.5, 395.0], [82.6, 396.0], [82.7, 397.0], [82.8, 397.0], [82.9, 398.0], [83.0, 398.0], [83.1, 399.0], [83.2, 400.0], [83.3, 400.0], [83.4, 401.0], [83.5, 401.0], [83.6, 402.0], [83.7, 403.0], [83.8, 403.0], [83.9, 404.0], [84.0, 405.0], [84.1, 405.0], [84.2, 406.0], [84.3, 406.0], [84.4, 407.0], [84.5, 408.0], [84.6, 409.0], [84.7, 409.0], [84.8, 410.0], [84.9, 411.0], [85.0, 411.0], [85.1, 412.0], [85.2, 413.0], [85.3, 414.0], [85.4, 414.0], [85.5, 415.0], [85.6, 416.0], [85.7, 417.0], [85.8, 417.0], [85.9, 418.0], [86.0, 419.0], [86.1, 420.0], [86.2, 420.0], [86.3, 421.0], [86.4, 422.0], [86.5, 423.0], [86.6, 423.0], [86.7, 424.0], [86.8, 425.0], [86.9, 426.0], [87.0, 427.0], [87.1, 428.0], [87.2, 429.0], [87.3, 430.0], [87.4, 430.0], [87.5, 431.0], [87.6, 432.0], [87.7, 433.0], [87.8, 434.0], [87.9, 435.0], [88.0, 436.0], [88.1, 437.0], [88.2, 438.0], [88.3, 439.0], [88.4, 440.0], [88.5, 441.0], [88.6, 442.0], [88.7, 443.0], [88.8, 444.0], [88.9, 446.0], [89.0, 447.0], [89.1, 448.0], [89.2, 449.0], [89.3, 450.0], [89.4, 451.0], [89.5, 453.0], [89.6, 454.0], [89.7, 455.0], [89.8, 457.0], [89.9, 458.0], [90.0, 460.0], [90.1, 461.0], [90.2, 462.0], [90.3, 464.0], [90.4, 465.0], [90.5, 467.0], [90.6, 468.0], [90.7, 470.0], [90.8, 471.0], [90.9, 473.0], [91.0, 475.0], [91.1, 476.0], [91.2, 478.0], [91.3, 480.0], [91.4, 482.0], [91.5, 484.0], [91.6, 485.0], [91.7, 487.0], [91.8, 489.0], [91.9, 491.0], [92.0, 493.0], [92.1, 495.0], [92.2, 497.0], [92.3, 500.0], [92.4, 502.0], [92.5, 504.0], [92.6, 506.0], [92.7, 508.0], [92.8, 511.0], [92.9, 513.0], [93.0, 516.0], [93.1, 518.0], [93.2, 520.0], [93.3, 523.0], [93.4, 525.0], [93.5, 528.0], [93.6, 530.0], [93.7, 532.0], [93.8, 535.0], [93.9, 537.0], [94.0, 540.0], [94.1, 543.0], [94.2, 545.0], [94.3, 548.0], [94.4, 550.0], [94.5, 553.0], [94.6, 555.0], [94.7, 558.0], [94.8, 560.0], [94.9, 563.0], [95.0, 566.0], [95.1, 568.0], [95.2, 571.0], [95.3, 574.0], [95.4, 577.0], [95.5, 579.0], [95.6, 582.0], [95.7, 584.0], [95.8, 588.0], [95.9, 590.0], [96.0, 593.0], [96.1, 596.0], [96.2, 599.0], [96.3, 602.0], [96.4, 605.0], [96.5, 608.0], [96.6, 611.0], [96.7, 615.0], [96.8, 618.0], [96.9, 622.0], [97.0, 625.0], [97.1, 628.0], [97.2, 631.0], [97.3, 634.0], [97.4, 638.0], [97.5, 642.0], [97.6, 646.0], [97.7, 650.0], [97.8, 654.0], [97.9, 658.0], [98.0, 662.0], [98.1, 667.0], [98.2, 672.0], [98.3, 677.0], [98.4, 682.0], [98.5, 688.0], [98.6, 693.0], [98.7, 700.0], [98.8, 708.0], [98.9, 717.0], [99.0, 727.0], [99.1, 738.0], [99.2, 753.0], [99.3, 768.0], [99.4, 786.0], [99.5, 806.0], [99.6, 834.0], [99.7, 870.0], [99.8, 919.0], [99.9, 1021.0], [100.0, 2434.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 103404.0, "series": [{"data": [[0.0, 887.0], [600.0, 6876.0], [2400.0, 1.0], [700.0, 2156.0], [200.0, 101258.0], [800.0, 826.0], [900.0, 349.0], [1000.0, 126.0], [1100.0, 64.0], [300.0, 103404.0], [1200.0, 55.0], [1300.0, 18.0], [1400.0, 26.0], [1500.0, 7.0], [100.0, 25402.0], [400.0, 25307.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 1.0], [500.0, 10865.0], [2000.0, 1.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 256382.0, "series": [{"data": [[0.0, 256382.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21238.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 17.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 146.97828022075834, "minX": 1.61988138E12, "maxY": 150.0, "series": [{"data": [[1.61988144E12, 150.0], [1.61988192E12, 150.0], [1.61988162E12, 150.0], [1.6198818E12, 150.0], [1.6198815E12, 150.0], [1.61988198E12, 149.45203115756274], [1.61988168E12, 150.0], [1.61988138E12, 146.97828022075834], [1.61988186E12, 150.0], [1.61988156E12, 150.0], [1.61988174E12, 150.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988198E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 68.0, "minX": 1.0, "maxY": 746.0, "series": [{"data": [[2.0, 290.0], [3.0, 289.0], [4.0, 283.0], [5.0, 296.0], [7.0, 282.0], [10.0, 212.5], [12.0, 261.3333333333333], [13.0, 234.0], [15.0, 216.5], [16.0, 279.5], [17.0, 181.0], [18.0, 181.0], [19.0, 272.0], [26.0, 303.0], [28.0, 249.0], [30.0, 275.14285714285717], [33.0, 74.25], [32.0, 236.25], [34.0, 178.66666666666666], [35.0, 122.28571428571429], [37.0, 178.0], [36.0, 234.0], [38.0, 108.85714285714286], [39.0, 141.66666666666666], [41.0, 87.6], [40.0, 558.0], [42.0, 350.0], [44.0, 68.0], [45.0, 259.6666666666667], [46.0, 399.0], [49.0, 204.5], [48.0, 328.6666666666667], [50.0, 109.25], [51.0, 129.0], [52.0, 117.0], [53.0, 132.0], [54.0, 122.125], [55.0, 208.66666666666666], [56.0, 174.5], [57.0, 179.2], [58.0, 117.5], [59.0, 388.5], [61.0, 154.625], [60.0, 250.0], [62.0, 140.0], [63.0, 167.0], [65.0, 146.28571428571428], [64.0, 254.0], [70.0, 185.0], [71.0, 252.0], [69.0, 387.0], [72.0, 222.0], [74.0, 289.5], [75.0, 136.57142857142856], [76.0, 198.76923076923075], [77.0, 183.28571428571428], [79.0, 217.0], [82.0, 258.5], [83.0, 203.4], [81.0, 245.0], [80.0, 237.0], [84.0, 190.63636363636363], [87.0, 203.5], [86.0, 471.0], [85.0, 474.0], [88.0, 198.0], [89.0, 174.5], [90.0, 216.0], [91.0, 212.33333333333334], [93.0, 170.0], [94.0, 206.33333333333334], [95.0, 223.5], [96.0, 242.83333333333331], [97.0, 188.25], [98.0, 148.25], [99.0, 260.5], [100.0, 170.33333333333334], [101.0, 210.33333333333337], [102.0, 188.0], [103.0, 241.5], [104.0, 221.0], [106.0, 185.0], [107.0, 206.75], [105.0, 268.5], [108.0, 246.66666666666666], [111.0, 221.0], [110.0, 253.0], [109.0, 243.0], [114.0, 194.8], [115.0, 198.0], [113.0, 193.0], [112.0, 270.5], [116.0, 211.10000000000002], [117.0, 161.0], [119.0, 232.44444444444446], [121.0, 201.0], [122.0, 261.3333333333333], [123.0, 265.5], [120.0, 174.0], [124.0, 178.75], [125.0, 287.16666666666663], [126.0, 276.8571428571429], [127.0, 294.1666666666667], [128.0, 235.8], [129.0, 445.0], [130.0, 255.44444444444446], [132.0, 322.6666666666667], [133.0, 227.11111111111111], [135.0, 348.85714285714283], [134.0, 256.0], [131.0, 221.0], [136.0, 264.5], [138.0, 465.33333333333337], [139.0, 233.0], [140.0, 259.2], [143.0, 274.0], [142.0, 163.0], [141.0, 542.0], [137.0, 247.0], [144.0, 237.4], [145.0, 247.66666666666666], [146.0, 229.4], [147.0, 256.2], [148.0, 219.66666666666666], [149.0, 248.57894736842104], [150.0, 324.0909628817108], [1.0, 746.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[149.89883192802017, 323.9173921343341]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 14885.05, "minX": 1.61988138E12, "maxY": 149525.3, "series": [{"data": [[1.61988144E12, 136751.26666666666], [1.61988192E12, 141779.1], [1.61988162E12, 143254.75], [1.6198818E12, 137855.8], [1.6198815E12, 149525.3], [1.61988198E12, 102692.03333333334], [1.61988168E12, 131313.8], [1.61988138E12, 28459.466666666667], [1.61988186E12, 141889.83333333334], [1.61988156E12, 144329.58333333334], [1.61988174E12, 147538.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61988144E12, 71600.35], [1.61988192E12, 74226.5], [1.61988162E12, 74984.4], [1.6198818E12, 72178.05], [1.6198815E12, 78281.0], [1.61988198E12, 53752.6], [1.61988168E12, 68746.3], [1.61988138E12, 14885.05], [1.61988186E12, 74287.45], [1.61988156E12, 75554.15], [1.61988174E12, 77242.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988198E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 304.5037914691955, "minX": 1.61988138E12, "maxY": 351.2847564582903, "series": [{"data": [[1.61988144E12, 333.20685443576843], [1.61988192E12, 321.5213852195635], [1.61988162E12, 318.33230845349163], [1.6198818E12, 330.47218856702585], [1.6198815E12, 304.5037914691955], [1.61988198E12, 351.2847564582903], [1.61988168E12, 346.781628247629], [1.61988138E12, 322.4888730639134], [1.61988186E12, 320.76898655156526], [1.61988156E12, 315.60250429658697], [1.61988174E12, 308.6225470015093]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988198E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 304.47315504400615, "minX": 1.61988138E12, "maxY": 351.25468349437773, "series": [{"data": [[1.61988144E12, 333.1748029164668], [1.61988192E12, 321.4939664405586], [1.61988162E12, 318.30382386203], [1.6198818E12, 330.4457539376575], [1.6198815E12, 304.47315504400615], [1.61988198E12, 351.25468349437773], [1.61988168E12, 346.75271760080165], [1.61988138E12, 322.458251735802], [1.61988186E12, 320.7420183355334], [1.61988156E12, 315.57363824488954], [1.61988174E12, 308.585666254975]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988198E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0197199763360284, "minX": 1.61988138E12, "maxY": 0.14402706070856333, "series": [{"data": [[1.61988144E12, 0.028350420074762094], [1.61988192E12, 0.025847911460192868], [1.61988162E12, 0.02639949109414755], [1.6198818E12, 0.027866505121709396], [1.6198815E12, 0.03584969532836826], [1.61988198E12, 0.0197199763360284], [1.61988168E12, 0.021817901472515593], [1.61988138E12, 0.14402706070856333], [1.61988186E12, 0.029643634288160615], [1.61988156E12, 0.03303987934481436], [1.61988174E12, 0.0364690544805816]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988198E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.61988138E12, "maxY": 2434.0, "series": [{"data": [[1.61988144E12, 2041.0], [1.61988192E12, 1467.0], [1.61988162E12, 1547.0], [1.6198818E12, 2434.0], [1.6198815E12, 1413.0], [1.61988198E12, 1813.0], [1.61988168E12, 1759.0], [1.61988138E12, 1470.0], [1.61988186E12, 1629.0], [1.61988156E12, 1589.0], [1.61988174E12, 1469.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61988144E12, 471.0], [1.61988192E12, 460.0], [1.61988162E12, 451.0], [1.6198818E12, 463.0], [1.6198815E12, 425.0], [1.61988198E12, 500.90000000000146], [1.61988168E12, 479.0], [1.61988138E12, 458.0], [1.61988186E12, 441.0], [1.61988156E12, 435.0], [1.61988174E12, 439.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61988144E12, 754.0], [1.61988192E12, 719.9900000000016], [1.61988162E12, 714.0], [1.6198818E12, 728.9900000000016], [1.6198815E12, 697.9800000000032], [1.61988198E12, 791.0], [1.61988168E12, 765.0], [1.61988138E12, 736.8199999999997], [1.61988186E12, 697.9900000000016], [1.61988156E12, 695.0], [1.61988174E12, 682.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61988144E12, 580.0], [1.61988192E12, 562.0], [1.61988162E12, 556.0], [1.6198818E12, 576.0], [1.6198815E12, 529.0], [1.61988198E12, 621.0], [1.61988168E12, 600.0], [1.61988138E12, 566.0999999999995], [1.61988186E12, 547.0], [1.61988156E12, 541.0], [1.61988174E12, 532.9500000000007]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61988144E12, 48.0], [1.61988192E12, 51.0], [1.61988162E12, 53.0], [1.6198818E12, 52.0], [1.6198815E12, 55.0], [1.61988198E12, 72.0], [1.61988168E12, 51.0], [1.61988138E12, 51.0], [1.61988186E12, 40.0], [1.61988156E12, 18.0], [1.61988174E12, 52.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61988144E12, 309.0], [1.61988192E12, 307.0], [1.61988162E12, 304.0], [1.6198818E12, 308.0], [1.6198815E12, 286.0], [1.61988198E12, 329.0], [1.61988168E12, 326.0], [1.61988138E12, 309.0], [1.61988186E12, 302.0], [1.61988156E12, 298.0], [1.61988174E12, 288.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988198E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 148.5, "minX": 206.0, "maxY": 388.0, "series": [{"data": [[206.0, 148.5], [287.0, 245.0], [354.0, 374.0], [362.0, 364.5], [363.0, 346.0], [366.0, 358.0], [367.0, 371.0], [357.0, 376.0], [355.0, 388.0], [359.0, 329.0], [371.0, 357.0], [379.0, 352.0], [377.0, 347.0], [380.0, 360.0], [381.0, 352.0], [370.0, 362.0], [374.0, 347.0], [383.0, 353.5], [376.0, 359.0], [373.0, 367.0], [372.0, 379.0], [396.0, 341.0], [388.0, 333.0], [399.0, 340.0], [393.0, 342.0], [395.0, 338.0], [394.0, 333.0], [389.0, 351.0], [398.0, 356.0], [390.0, 343.0], [385.0, 336.0], [391.0, 344.0], [397.0, 336.0], [386.0, 342.0], [387.0, 342.0], [401.0, 347.0], [404.0, 336.0], [408.0, 334.0], [407.0, 346.0], [400.0, 348.0], [406.0, 333.0], [402.0, 340.0], [403.0, 355.0], [412.0, 329.0], [411.0, 323.0], [410.0, 332.0], [409.0, 337.0], [405.0, 338.0], [413.0, 319.0], [414.0, 320.0], [415.0, 331.0], [428.0, 318.0], [429.0, 320.0], [420.0, 320.0], [423.0, 318.0], [422.0, 323.0], [421.0, 326.0], [416.0, 327.0], [427.0, 315.0], [426.0, 329.0], [430.0, 322.0], [425.0, 323.0], [431.0, 325.0], [424.0, 331.5], [418.0, 324.0], [419.0, 330.0], [417.0, 324.0], [434.0, 313.0], [444.0, 313.0], [437.0, 317.0], [439.0, 309.0], [438.0, 319.0], [433.0, 321.0], [432.0, 310.0], [435.0, 318.0], [446.0, 312.0], [436.0, 309.0], [442.0, 312.0], [447.0, 320.0], [440.0, 312.0], [441.0, 316.0], [443.0, 293.5], [445.0, 312.0], [461.0, 300.0], [456.0, 308.0], [457.0, 314.0], [462.0, 301.0], [463.0, 314.0], [455.0, 316.0], [453.0, 312.0], [454.0, 296.5], [452.0, 305.0], [450.0, 302.0], [460.0, 306.0], [451.0, 311.0], [448.0, 318.0], [449.0, 305.0], [458.0, 315.0], [459.0, 315.0], [478.0, 295.0], [473.0, 298.0], [466.0, 302.0], [475.0, 300.0], [474.0, 285.0], [470.0, 296.0], [476.0, 297.0], [467.0, 296.0], [477.0, 298.0], [469.0, 300.0], [468.0, 291.0], [471.0, 299.0], [465.0, 306.0], [464.0, 292.0], [472.0, 300.0], [479.0, 293.0], [492.0, 290.0], [493.0, 275.0], [489.0, 289.0], [491.0, 278.0], [490.0, 285.0], [484.0, 294.0], [485.0, 292.0], [487.0, 292.0], [486.0, 285.0], [480.0, 291.0], [483.0, 278.0], [482.0, 297.0], [481.0, 298.0], [495.0, 294.0], [488.0, 296.0], [494.0, 285.0], [508.0, 277.0], [497.0, 280.0], [496.0, 272.0], [503.0, 274.0], [506.0, 273.0], [507.0, 276.0], [511.0, 272.0], [504.0, 287.0], [509.0, 286.0], [510.0, 292.5], [502.0, 277.0], [498.0, 282.0], [499.0, 276.0], [501.0, 273.0], [500.0, 281.0], [516.0, 277.0], [525.0, 260.5], [532.0, 258.0], [524.0, 270.0], [520.0, 279.0], [521.0, 261.0], [522.0, 281.0], [523.0, 284.0], [512.0, 279.0], [527.0, 276.0], [526.0, 271.0], [534.0, 262.0], [533.0, 272.0], [530.0, 260.0], [529.0, 265.5], [531.0, 271.0], [528.0, 259.0], [543.0, 268.0], [542.0, 268.0], [539.0, 261.0], [538.0, 268.0], [537.0, 268.0], [514.0, 271.0], [513.0, 273.5], [515.0, 259.0], [519.0, 269.0], [517.0, 275.0], [518.0, 286.5], [550.0, 256.0], [574.0, 247.0], [569.0, 233.0], [571.0, 249.0], [553.0, 268.0], [552.0, 254.5], [546.0, 268.0], [547.0, 264.0], [549.0, 251.0], [559.0, 252.0], [555.0, 263.0], [554.0, 257.5], [545.0, 247.0], [544.0, 268.5], [563.0, 260.0], [564.0, 279.0], [562.0, 244.5], [567.0, 255.0], [565.0, 240.0], [579.0, 237.0], [582.0, 230.5], [600.0, 239.0], [593.0, 235.0], [581.0, 254.0], [580.0, 260.0], [584.0, 232.0], [586.0, 245.0], [588.0, 238.5], [585.0, 235.0], [576.0, 238.0], [610.0, 223.0], [617.0, 226.0], [622.0, 233.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 622.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 148.5, "minX": 206.0, "maxY": 388.0, "series": [{"data": [[206.0, 148.5], [287.0, 245.0], [354.0, 374.0], [362.0, 364.0], [363.0, 346.0], [366.0, 358.0], [367.0, 371.0], [357.0, 376.0], [355.0, 388.0], [359.0, 329.0], [371.0, 357.0], [379.0, 352.0], [377.0, 347.0], [380.0, 360.0], [381.0, 352.0], [370.0, 361.5], [374.0, 347.0], [383.0, 353.5], [376.0, 358.5], [373.0, 366.0], [372.0, 378.5], [396.0, 341.0], [388.0, 333.0], [399.0, 340.0], [393.0, 342.0], [395.0, 338.0], [394.0, 333.0], [389.0, 351.0], [398.0, 356.0], [390.0, 343.0], [385.0, 336.0], [391.0, 344.0], [397.0, 336.0], [386.0, 342.0], [387.0, 342.0], [401.0, 347.0], [404.0, 336.0], [408.0, 334.0], [407.0, 345.0], [400.0, 348.0], [406.0, 333.0], [402.0, 340.0], [403.0, 355.0], [412.0, 329.0], [411.0, 323.0], [410.0, 332.0], [409.0, 337.0], [405.0, 338.0], [413.0, 319.0], [414.0, 320.0], [415.0, 331.0], [428.0, 318.0], [429.0, 320.0], [420.0, 320.0], [423.0, 318.0], [422.0, 323.0], [421.0, 326.0], [416.0, 327.0], [427.0, 315.0], [426.0, 329.0], [430.0, 322.0], [425.0, 323.0], [431.0, 325.0], [424.0, 331.5], [418.0, 324.0], [419.0, 330.0], [417.0, 324.0], [434.0, 313.0], [444.0, 313.0], [437.0, 317.0], [439.0, 309.0], [438.0, 319.0], [433.0, 321.0], [432.0, 310.0], [435.0, 318.0], [446.0, 312.0], [436.0, 308.5], [442.0, 312.0], [447.0, 320.0], [440.0, 312.0], [441.0, 316.0], [443.0, 293.5], [445.0, 312.0], [461.0, 300.0], [456.0, 308.0], [457.0, 314.0], [462.0, 301.0], [463.0, 314.0], [455.0, 316.0], [453.0, 312.0], [454.0, 296.0], [452.0, 305.0], [450.0, 302.0], [460.0, 306.0], [451.0, 311.0], [448.0, 318.0], [449.0, 305.0], [458.0, 315.0], [459.0, 315.0], [478.0, 295.0], [473.0, 298.0], [466.0, 302.0], [475.0, 300.0], [474.0, 285.0], [470.0, 296.0], [476.0, 297.0], [467.0, 296.0], [477.0, 298.0], [469.0, 300.0], [468.0, 291.0], [471.0, 299.0], [465.0, 306.0], [464.0, 292.0], [472.0, 300.0], [479.0, 292.5], [492.0, 290.0], [493.0, 275.0], [489.0, 289.0], [491.0, 278.0], [490.0, 285.0], [484.0, 294.0], [485.0, 292.0], [487.0, 292.0], [486.0, 285.0], [480.0, 291.0], [483.0, 278.0], [482.0, 297.0], [481.0, 298.0], [495.0, 294.0], [488.0, 296.0], [494.0, 285.0], [508.0, 277.0], [497.0, 280.0], [496.0, 272.0], [503.0, 274.0], [506.0, 273.0], [507.0, 276.0], [511.0, 272.0], [504.0, 287.0], [509.0, 286.0], [510.0, 292.5], [502.0, 277.0], [498.0, 282.0], [499.0, 276.0], [501.0, 273.0], [500.0, 281.0], [516.0, 277.0], [525.0, 260.5], [532.0, 258.0], [524.0, 270.0], [520.0, 279.0], [521.0, 261.0], [522.0, 281.0], [523.0, 284.0], [512.0, 279.0], [527.0, 276.0], [526.0, 271.0], [534.0, 262.0], [533.0, 272.0], [530.0, 260.0], [529.0, 265.5], [531.0, 270.0], [528.0, 259.0], [543.0, 268.0], [542.0, 268.0], [539.0, 261.0], [538.0, 268.0], [537.0, 268.0], [514.0, 271.0], [513.0, 273.5], [515.0, 259.0], [519.0, 269.0], [517.0, 275.0], [518.0, 286.5], [550.0, 256.0], [574.0, 247.0], [569.0, 233.0], [571.0, 249.0], [553.0, 268.0], [552.0, 254.5], [546.0, 268.0], [547.0, 264.0], [549.0, 251.0], [559.0, 252.0], [555.0, 263.0], [554.0, 257.5], [545.0, 247.0], [544.0, 268.5], [563.0, 260.0], [564.0, 279.0], [562.0, 244.5], [567.0, 255.0], [565.0, 240.0], [579.0, 237.0], [582.0, 230.5], [600.0, 239.0], [593.0, 235.0], [581.0, 254.0], [580.0, 260.0], [584.0, 232.0], [586.0, 245.0], [588.0, 238.5], [585.0, 235.0], [576.0, 237.5], [610.0, 223.0], [617.0, 226.0], [622.0, 233.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 622.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 96.11666666666666, "minX": 1.61988138E12, "maxY": 492.3333333333333, "series": [{"data": [[1.61988144E12, 450.31666666666666], [1.61988192E12, 466.8333333333333], [1.61988162E12, 471.6], [1.6198818E12, 453.95], [1.6198815E12, 492.3333333333333], [1.61988198E12, 335.56666666666666], [1.61988168E12, 432.3666666666667], [1.61988138E12, 96.11666666666666], [1.61988186E12, 467.21666666666664], [1.61988156E12, 475.18333333333334], [1.61988174E12, 485.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988198E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 93.61666666666666, "minX": 1.61988138E12, "maxY": 492.3333333333333, "series": [{"data": [[1.61988144E12, 450.31666666666666], [1.61988192E12, 466.8333333333333], [1.61988162E12, 471.6], [1.6198818E12, 453.95], [1.6198815E12, 492.3333333333333], [1.61988198E12, 338.06666666666666], [1.61988168E12, 432.3666666666667], [1.61988138E12, 93.61666666666666], [1.61988186E12, 467.21666666666664], [1.61988156E12, 475.18333333333334], [1.61988174E12, 485.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988198E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 93.61666666666666, "minX": 1.61988138E12, "maxY": 492.3333333333333, "series": [{"data": [[1.61988144E12, 450.31666666666666], [1.61988192E12, 466.8333333333333], [1.61988162E12, 471.6], [1.6198818E12, 453.95], [1.6198815E12, 492.3333333333333], [1.61988198E12, 338.06666666666666], [1.61988168E12, 432.3666666666667], [1.61988138E12, 93.61666666666666], [1.61988186E12, 467.21666666666664], [1.61988156E12, 475.18333333333334], [1.61988174E12, 485.8]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988198E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 93.61666666666666, "minX": 1.61988138E12, "maxY": 492.3333333333333, "series": [{"data": [[1.61988144E12, 450.31666666666666], [1.61988192E12, 466.8333333333333], [1.61988162E12, 471.6], [1.6198818E12, 453.95], [1.6198815E12, 492.3333333333333], [1.61988198E12, 338.06666666666666], [1.61988168E12, 432.3666666666667], [1.61988138E12, 93.61666666666666], [1.61988186E12, 467.21666666666664], [1.61988156E12, 475.18333333333334], [1.61988174E12, 485.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988198E12, "title": "Total Transactions Per Second"}},
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

