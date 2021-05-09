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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 2752.0, "series": [{"data": [[0.0, 7.0], [0.1, 81.0], [0.2, 89.0], [0.3, 94.0], [0.4, 99.0], [0.5, 102.0], [0.6, 105.0], [0.7, 108.0], [0.8, 110.0], [0.9, 113.0], [1.0, 115.0], [1.1, 118.0], [1.2, 120.0], [1.3, 122.0], [1.4, 123.0], [1.5, 125.0], [1.6, 127.0], [1.7, 129.0], [1.8, 130.0], [1.9, 132.0], [2.0, 134.0], [2.1, 135.0], [2.2, 137.0], [2.3, 138.0], [2.4, 139.0], [2.5, 141.0], [2.6, 142.0], [2.7, 143.0], [2.8, 145.0], [2.9, 146.0], [3.0, 147.0], [3.1, 148.0], [3.2, 149.0], [3.3, 150.0], [3.4, 151.0], [3.5, 152.0], [3.6, 153.0], [3.7, 154.0], [3.8, 155.0], [3.9, 156.0], [4.0, 157.0], [4.1, 158.0], [4.2, 159.0], [4.3, 160.0], [4.4, 161.0], [4.5, 162.0], [4.6, 163.0], [4.7, 164.0], [4.8, 164.0], [4.9, 165.0], [5.0, 166.0], [5.1, 167.0], [5.2, 168.0], [5.3, 168.0], [5.4, 169.0], [5.5, 170.0], [5.6, 171.0], [5.7, 172.0], [5.8, 172.0], [5.9, 173.0], [6.0, 174.0], [6.1, 174.0], [6.2, 175.0], [6.3, 176.0], [6.4, 177.0], [6.5, 177.0], [6.6, 178.0], [6.7, 179.0], [6.8, 179.0], [6.9, 180.0], [7.0, 181.0], [7.1, 181.0], [7.2, 182.0], [7.3, 182.0], [7.4, 183.0], [7.5, 184.0], [7.6, 184.0], [7.7, 185.0], [7.8, 185.0], [7.9, 186.0], [8.0, 187.0], [8.1, 187.0], [8.2, 188.0], [8.3, 188.0], [8.4, 189.0], [8.5, 189.0], [8.6, 190.0], [8.7, 191.0], [8.8, 191.0], [8.9, 192.0], [9.0, 192.0], [9.1, 193.0], [9.2, 193.0], [9.3, 194.0], [9.4, 194.0], [9.5, 195.0], [9.6, 195.0], [9.7, 196.0], [9.8, 196.0], [9.9, 197.0], [10.0, 197.0], [10.1, 198.0], [10.2, 198.0], [10.3, 199.0], [10.4, 199.0], [10.5, 200.0], [10.6, 200.0], [10.7, 201.0], [10.8, 201.0], [10.9, 202.0], [11.0, 202.0], [11.1, 203.0], [11.2, 203.0], [11.3, 204.0], [11.4, 204.0], [11.5, 205.0], [11.6, 205.0], [11.7, 206.0], [11.8, 206.0], [11.9, 206.0], [12.0, 207.0], [12.1, 207.0], [12.2, 208.0], [12.3, 208.0], [12.4, 209.0], [12.5, 209.0], [12.6, 209.0], [12.7, 210.0], [12.8, 210.0], [12.9, 211.0], [13.0, 211.0], [13.1, 212.0], [13.2, 212.0], [13.3, 212.0], [13.4, 213.0], [13.5, 213.0], [13.6, 214.0], [13.7, 214.0], [13.8, 214.0], [13.9, 215.0], [14.0, 215.0], [14.1, 216.0], [14.2, 216.0], [14.3, 217.0], [14.4, 217.0], [14.5, 217.0], [14.6, 218.0], [14.7, 218.0], [14.8, 219.0], [14.9, 219.0], [15.0, 219.0], [15.1, 220.0], [15.2, 220.0], [15.3, 220.0], [15.4, 221.0], [15.5, 221.0], [15.6, 222.0], [15.7, 222.0], [15.8, 222.0], [15.9, 223.0], [16.0, 223.0], [16.1, 224.0], [16.2, 224.0], [16.3, 224.0], [16.4, 225.0], [16.5, 225.0], [16.6, 225.0], [16.7, 226.0], [16.8, 226.0], [16.9, 227.0], [17.0, 227.0], [17.1, 227.0], [17.2, 228.0], [17.3, 228.0], [17.4, 228.0], [17.5, 229.0], [17.6, 229.0], [17.7, 229.0], [17.8, 230.0], [17.9, 230.0], [18.0, 230.0], [18.1, 231.0], [18.2, 231.0], [18.3, 232.0], [18.4, 232.0], [18.5, 232.0], [18.6, 233.0], [18.7, 233.0], [18.8, 233.0], [18.9, 234.0], [19.0, 234.0], [19.1, 234.0], [19.2, 235.0], [19.3, 235.0], [19.4, 235.0], [19.5, 236.0], [19.6, 236.0], [19.7, 236.0], [19.8, 237.0], [19.9, 237.0], [20.0, 237.0], [20.1, 238.0], [20.2, 238.0], [20.3, 238.0], [20.4, 239.0], [20.5, 239.0], [20.6, 239.0], [20.7, 240.0], [20.8, 240.0], [20.9, 240.0], [21.0, 241.0], [21.1, 241.0], [21.2, 241.0], [21.3, 242.0], [21.4, 242.0], [21.5, 242.0], [21.6, 242.0], [21.7, 243.0], [21.8, 243.0], [21.9, 243.0], [22.0, 244.0], [22.1, 244.0], [22.2, 244.0], [22.3, 245.0], [22.4, 245.0], [22.5, 245.0], [22.6, 246.0], [22.7, 246.0], [22.8, 246.0], [22.9, 246.0], [23.0, 247.0], [23.1, 247.0], [23.2, 247.0], [23.3, 248.0], [23.4, 248.0], [23.5, 248.0], [23.6, 249.0], [23.7, 249.0], [23.8, 249.0], [23.9, 249.0], [24.0, 250.0], [24.1, 250.0], [24.2, 250.0], [24.3, 251.0], [24.4, 251.0], [24.5, 251.0], [24.6, 251.0], [24.7, 252.0], [24.8, 252.0], [24.9, 252.0], [25.0, 253.0], [25.1, 253.0], [25.2, 253.0], [25.3, 253.0], [25.4, 254.0], [25.5, 254.0], [25.6, 254.0], [25.7, 254.0], [25.8, 255.0], [25.9, 255.0], [26.0, 255.0], [26.1, 255.0], [26.2, 256.0], [26.3, 256.0], [26.4, 256.0], [26.5, 256.0], [26.6, 257.0], [26.7, 257.0], [26.8, 257.0], [26.9, 258.0], [27.0, 258.0], [27.1, 258.0], [27.2, 258.0], [27.3, 259.0], [27.4, 259.0], [27.5, 259.0], [27.6, 259.0], [27.7, 260.0], [27.8, 260.0], [27.9, 260.0], [28.0, 260.0], [28.1, 261.0], [28.2, 261.0], [28.3, 261.0], [28.4, 261.0], [28.5, 262.0], [28.6, 262.0], [28.7, 262.0], [28.8, 262.0], [28.9, 263.0], [29.0, 263.0], [29.1, 263.0], [29.2, 264.0], [29.3, 264.0], [29.4, 264.0], [29.5, 264.0], [29.6, 265.0], [29.7, 265.0], [29.8, 265.0], [29.9, 265.0], [30.0, 265.0], [30.1, 266.0], [30.2, 266.0], [30.3, 266.0], [30.4, 266.0], [30.5, 267.0], [30.6, 267.0], [30.7, 267.0], [30.8, 267.0], [30.9, 268.0], [31.0, 268.0], [31.1, 268.0], [31.2, 268.0], [31.3, 269.0], [31.4, 269.0], [31.5, 269.0], [31.6, 269.0], [31.7, 269.0], [31.8, 270.0], [31.9, 270.0], [32.0, 270.0], [32.1, 270.0], [32.2, 271.0], [32.3, 271.0], [32.4, 271.0], [32.5, 271.0], [32.6, 271.0], [32.7, 272.0], [32.8, 272.0], [32.9, 272.0], [33.0, 272.0], [33.1, 273.0], [33.2, 273.0], [33.3, 273.0], [33.4, 273.0], [33.5, 273.0], [33.6, 274.0], [33.7, 274.0], [33.8, 274.0], [33.9, 274.0], [34.0, 275.0], [34.1, 275.0], [34.2, 275.0], [34.3, 275.0], [34.4, 275.0], [34.5, 276.0], [34.6, 276.0], [34.7, 276.0], [34.8, 276.0], [34.9, 277.0], [35.0, 277.0], [35.1, 277.0], [35.2, 277.0], [35.3, 277.0], [35.4, 278.0], [35.5, 278.0], [35.6, 278.0], [35.7, 278.0], [35.8, 278.0], [35.9, 279.0], [36.0, 279.0], [36.1, 279.0], [36.2, 279.0], [36.3, 280.0], [36.4, 280.0], [36.5, 280.0], [36.6, 280.0], [36.7, 280.0], [36.8, 281.0], [36.9, 281.0], [37.0, 281.0], [37.1, 281.0], [37.2, 281.0], [37.3, 282.0], [37.4, 282.0], [37.5, 282.0], [37.6, 282.0], [37.7, 283.0], [37.8, 283.0], [37.9, 283.0], [38.0, 283.0], [38.1, 283.0], [38.2, 284.0], [38.3, 284.0], [38.4, 284.0], [38.5, 284.0], [38.6, 284.0], [38.7, 285.0], [38.8, 285.0], [38.9, 285.0], [39.0, 285.0], [39.1, 285.0], [39.2, 286.0], [39.3, 286.0], [39.4, 286.0], [39.5, 286.0], [39.6, 286.0], [39.7, 287.0], [39.8, 287.0], [39.9, 287.0], [40.0, 287.0], [40.1, 287.0], [40.2, 288.0], [40.3, 288.0], [40.4, 288.0], [40.5, 288.0], [40.6, 288.0], [40.7, 289.0], [40.8, 289.0], [40.9, 289.0], [41.0, 289.0], [41.1, 289.0], [41.2, 290.0], [41.3, 290.0], [41.4, 290.0], [41.5, 290.0], [41.6, 290.0], [41.7, 291.0], [41.8, 291.0], [41.9, 291.0], [42.0, 291.0], [42.1, 291.0], [42.2, 291.0], [42.3, 292.0], [42.4, 292.0], [42.5, 292.0], [42.6, 292.0], [42.7, 292.0], [42.8, 293.0], [42.9, 293.0], [43.0, 293.0], [43.1, 293.0], [43.2, 293.0], [43.3, 294.0], [43.4, 294.0], [43.5, 294.0], [43.6, 294.0], [43.7, 294.0], [43.8, 295.0], [43.9, 295.0], [44.0, 295.0], [44.1, 295.0], [44.2, 295.0], [44.3, 295.0], [44.4, 296.0], [44.5, 296.0], [44.6, 296.0], [44.7, 296.0], [44.8, 296.0], [44.9, 297.0], [45.0, 297.0], [45.1, 297.0], [45.2, 297.0], [45.3, 297.0], [45.4, 298.0], [45.5, 298.0], [45.6, 298.0], [45.7, 298.0], [45.8, 298.0], [45.9, 298.0], [46.0, 299.0], [46.1, 299.0], [46.2, 299.0], [46.3, 299.0], [46.4, 299.0], [46.5, 300.0], [46.6, 300.0], [46.7, 300.0], [46.8, 300.0], [46.9, 300.0], [47.0, 301.0], [47.1, 301.0], [47.2, 301.0], [47.3, 301.0], [47.4, 301.0], [47.5, 301.0], [47.6, 302.0], [47.7, 302.0], [47.8, 302.0], [47.9, 302.0], [48.0, 302.0], [48.1, 303.0], [48.2, 303.0], [48.3, 303.0], [48.4, 303.0], [48.5, 303.0], [48.6, 304.0], [48.7, 304.0], [48.8, 304.0], [48.9, 304.0], [49.0, 304.0], [49.1, 304.0], [49.2, 305.0], [49.3, 305.0], [49.4, 305.0], [49.5, 305.0], [49.6, 305.0], [49.7, 306.0], [49.8, 306.0], [49.9, 306.0], [50.0, 306.0], [50.1, 306.0], [50.2, 306.0], [50.3, 307.0], [50.4, 307.0], [50.5, 307.0], [50.6, 307.0], [50.7, 307.0], [50.8, 308.0], [50.9, 308.0], [51.0, 308.0], [51.1, 308.0], [51.2, 308.0], [51.3, 308.0], [51.4, 309.0], [51.5, 309.0], [51.6, 309.0], [51.7, 309.0], [51.8, 309.0], [51.9, 310.0], [52.0, 310.0], [52.1, 310.0], [52.2, 310.0], [52.3, 310.0], [52.4, 311.0], [52.5, 311.0], [52.6, 311.0], [52.7, 311.0], [52.8, 311.0], [52.9, 311.0], [53.0, 312.0], [53.1, 312.0], [53.2, 312.0], [53.3, 312.0], [53.4, 312.0], [53.5, 313.0], [53.6, 313.0], [53.7, 313.0], [53.8, 313.0], [53.9, 313.0], [54.0, 314.0], [54.1, 314.0], [54.2, 314.0], [54.3, 314.0], [54.4, 314.0], [54.5, 315.0], [54.6, 315.0], [54.7, 315.0], [54.8, 315.0], [54.9, 315.0], [55.0, 316.0], [55.1, 316.0], [55.2, 316.0], [55.3, 316.0], [55.4, 316.0], [55.5, 317.0], [55.6, 317.0], [55.7, 317.0], [55.8, 317.0], [55.9, 317.0], [56.0, 318.0], [56.1, 318.0], [56.2, 318.0], [56.3, 318.0], [56.4, 318.0], [56.5, 318.0], [56.6, 319.0], [56.7, 319.0], [56.8, 319.0], [56.9, 319.0], [57.0, 320.0], [57.1, 320.0], [57.2, 320.0], [57.3, 320.0], [57.4, 320.0], [57.5, 320.0], [57.6, 321.0], [57.7, 321.0], [57.8, 321.0], [57.9, 321.0], [58.0, 321.0], [58.1, 322.0], [58.2, 322.0], [58.3, 322.0], [58.4, 322.0], [58.5, 322.0], [58.6, 323.0], [58.7, 323.0], [58.8, 323.0], [58.9, 323.0], [59.0, 323.0], [59.1, 324.0], [59.2, 324.0], [59.3, 324.0], [59.4, 324.0], [59.5, 324.0], [59.6, 325.0], [59.7, 325.0], [59.8, 325.0], [59.9, 325.0], [60.0, 325.0], [60.1, 326.0], [60.2, 326.0], [60.3, 326.0], [60.4, 326.0], [60.5, 326.0], [60.6, 327.0], [60.7, 327.0], [60.8, 327.0], [60.9, 327.0], [61.0, 327.0], [61.1, 328.0], [61.2, 328.0], [61.3, 328.0], [61.4, 328.0], [61.5, 328.0], [61.6, 329.0], [61.7, 329.0], [61.8, 329.0], [61.9, 329.0], [62.0, 330.0], [62.1, 330.0], [62.2, 330.0], [62.3, 330.0], [62.4, 330.0], [62.5, 331.0], [62.6, 331.0], [62.7, 331.0], [62.8, 331.0], [62.9, 331.0], [63.0, 332.0], [63.1, 332.0], [63.2, 332.0], [63.3, 332.0], [63.4, 332.0], [63.5, 333.0], [63.6, 333.0], [63.7, 333.0], [63.8, 333.0], [63.9, 333.0], [64.0, 334.0], [64.1, 334.0], [64.2, 334.0], [64.3, 334.0], [64.4, 335.0], [64.5, 335.0], [64.6, 335.0], [64.7, 335.0], [64.8, 335.0], [64.9, 336.0], [65.0, 336.0], [65.1, 336.0], [65.2, 336.0], [65.3, 337.0], [65.4, 337.0], [65.5, 337.0], [65.6, 337.0], [65.7, 337.0], [65.8, 338.0], [65.9, 338.0], [66.0, 338.0], [66.1, 338.0], [66.2, 339.0], [66.3, 339.0], [66.4, 339.0], [66.5, 339.0], [66.6, 340.0], [66.7, 340.0], [66.8, 340.0], [66.9, 340.0], [67.0, 341.0], [67.1, 341.0], [67.2, 341.0], [67.3, 341.0], [67.4, 341.0], [67.5, 342.0], [67.6, 342.0], [67.7, 342.0], [67.8, 342.0], [67.9, 343.0], [68.0, 343.0], [68.1, 343.0], [68.2, 343.0], [68.3, 344.0], [68.4, 344.0], [68.5, 344.0], [68.6, 344.0], [68.7, 345.0], [68.8, 345.0], [68.9, 345.0], [69.0, 345.0], [69.1, 346.0], [69.2, 346.0], [69.3, 346.0], [69.4, 346.0], [69.5, 347.0], [69.6, 347.0], [69.7, 347.0], [69.8, 347.0], [69.9, 348.0], [70.0, 348.0], [70.1, 348.0], [70.2, 348.0], [70.3, 349.0], [70.4, 349.0], [70.5, 349.0], [70.6, 349.0], [70.7, 350.0], [70.8, 350.0], [70.9, 350.0], [71.0, 351.0], [71.1, 351.0], [71.2, 351.0], [71.3, 351.0], [71.4, 352.0], [71.5, 352.0], [71.6, 352.0], [71.7, 353.0], [71.8, 353.0], [71.9, 353.0], [72.0, 353.0], [72.1, 354.0], [72.2, 354.0], [72.3, 354.0], [72.4, 354.0], [72.5, 355.0], [72.6, 355.0], [72.7, 355.0], [72.8, 356.0], [72.9, 356.0], [73.0, 356.0], [73.1, 357.0], [73.2, 357.0], [73.3, 357.0], [73.4, 358.0], [73.5, 358.0], [73.6, 358.0], [73.7, 358.0], [73.8, 359.0], [73.9, 359.0], [74.0, 359.0], [74.1, 360.0], [74.2, 360.0], [74.3, 360.0], [74.4, 361.0], [74.5, 361.0], [74.6, 361.0], [74.7, 362.0], [74.8, 362.0], [74.9, 362.0], [75.0, 363.0], [75.1, 363.0], [75.2, 363.0], [75.3, 364.0], [75.4, 364.0], [75.5, 364.0], [75.6, 365.0], [75.7, 365.0], [75.8, 365.0], [75.9, 366.0], [76.0, 366.0], [76.1, 366.0], [76.2, 367.0], [76.3, 367.0], [76.4, 368.0], [76.5, 368.0], [76.6, 368.0], [76.7, 369.0], [76.8, 369.0], [76.9, 369.0], [77.0, 370.0], [77.1, 370.0], [77.2, 371.0], [77.3, 371.0], [77.4, 371.0], [77.5, 372.0], [77.6, 372.0], [77.7, 373.0], [77.8, 373.0], [77.9, 373.0], [78.0, 374.0], [78.1, 374.0], [78.2, 375.0], [78.3, 375.0], [78.4, 375.0], [78.5, 376.0], [78.6, 376.0], [78.7, 377.0], [78.8, 377.0], [78.9, 378.0], [79.0, 378.0], [79.1, 378.0], [79.2, 379.0], [79.3, 379.0], [79.4, 380.0], [79.5, 380.0], [79.6, 380.0], [79.7, 381.0], [79.8, 381.0], [79.9, 382.0], [80.0, 382.0], [80.1, 383.0], [80.2, 383.0], [80.3, 384.0], [80.4, 384.0], [80.5, 385.0], [80.6, 385.0], [80.7, 386.0], [80.8, 386.0], [80.9, 387.0], [81.0, 387.0], [81.1, 388.0], [81.2, 388.0], [81.3, 389.0], [81.4, 389.0], [81.5, 390.0], [81.6, 390.0], [81.7, 391.0], [81.8, 391.0], [81.9, 392.0], [82.0, 392.0], [82.1, 393.0], [82.2, 393.0], [82.3, 394.0], [82.4, 394.0], [82.5, 395.0], [82.6, 395.0], [82.7, 396.0], [82.8, 397.0], [82.9, 397.0], [83.0, 398.0], [83.1, 398.0], [83.2, 399.0], [83.3, 400.0], [83.4, 400.0], [83.5, 401.0], [83.6, 401.0], [83.7, 402.0], [83.8, 403.0], [83.9, 403.0], [84.0, 404.0], [84.1, 404.0], [84.2, 405.0], [84.3, 406.0], [84.4, 407.0], [84.5, 407.0], [84.6, 408.0], [84.7, 409.0], [84.8, 409.0], [84.9, 410.0], [85.0, 411.0], [85.1, 411.0], [85.2, 412.0], [85.3, 413.0], [85.4, 414.0], [85.5, 414.0], [85.6, 415.0], [85.7, 416.0], [85.8, 417.0], [85.9, 417.0], [86.0, 418.0], [86.1, 419.0], [86.2, 420.0], [86.3, 421.0], [86.4, 421.0], [86.5, 422.0], [86.6, 423.0], [86.7, 424.0], [86.8, 425.0], [86.9, 426.0], [87.0, 427.0], [87.1, 427.0], [87.2, 428.0], [87.3, 429.0], [87.4, 430.0], [87.5, 431.0], [87.6, 432.0], [87.7, 433.0], [87.8, 434.0], [87.9, 435.0], [88.0, 436.0], [88.1, 437.0], [88.2, 438.0], [88.3, 439.0], [88.4, 440.0], [88.5, 441.0], [88.6, 442.0], [88.7, 443.0], [88.8, 444.0], [88.9, 445.0], [89.0, 446.0], [89.1, 448.0], [89.2, 449.0], [89.3, 450.0], [89.4, 451.0], [89.5, 453.0], [89.6, 454.0], [89.7, 455.0], [89.8, 457.0], [89.9, 458.0], [90.0, 459.0], [90.1, 461.0], [90.2, 462.0], [90.3, 463.0], [90.4, 465.0], [90.5, 467.0], [90.6, 468.0], [90.7, 469.0], [90.8, 471.0], [90.9, 473.0], [91.0, 474.0], [91.1, 476.0], [91.2, 478.0], [91.3, 479.0], [91.4, 481.0], [91.5, 483.0], [91.6, 485.0], [91.7, 487.0], [91.8, 489.0], [91.9, 491.0], [92.0, 493.0], [92.1, 495.0], [92.2, 497.0], [92.3, 499.0], [92.4, 501.0], [92.5, 503.0], [92.6, 505.0], [92.7, 508.0], [92.8, 510.0], [92.9, 512.0], [93.0, 514.0], [93.1, 516.0], [93.2, 519.0], [93.3, 521.0], [93.4, 523.0], [93.5, 526.0], [93.6, 528.0], [93.7, 531.0], [93.8, 534.0], [93.9, 536.0], [94.0, 539.0], [94.1, 542.0], [94.2, 544.0], [94.3, 547.0], [94.4, 549.0], [94.5, 552.0], [94.6, 555.0], [94.7, 558.0], [94.8, 561.0], [94.9, 563.0], [95.0, 566.0], [95.1, 568.0], [95.2, 571.0], [95.3, 574.0], [95.4, 577.0], [95.5, 580.0], [95.6, 583.0], [95.7, 585.0], [95.8, 588.0], [95.9, 591.0], [96.0, 594.0], [96.1, 597.0], [96.2, 600.0], [96.3, 603.0], [96.4, 606.0], [96.5, 609.0], [96.6, 612.0], [96.7, 615.0], [96.8, 619.0], [96.9, 622.0], [97.0, 625.0], [97.1, 629.0], [97.2, 632.0], [97.3, 635.0], [97.4, 639.0], [97.5, 643.0], [97.6, 646.0], [97.7, 650.0], [97.8, 654.0], [97.9, 659.0], [98.0, 664.0], [98.1, 669.0], [98.2, 673.0], [98.3, 679.0], [98.4, 685.0], [98.5, 691.0], [98.6, 698.0], [98.7, 705.0], [98.8, 713.0], [98.9, 721.0], [99.0, 731.0], [99.1, 743.0], [99.2, 757.0], [99.3, 773.0], [99.4, 793.0], [99.5, 816.0], [99.6, 843.0], [99.7, 877.0], [99.8, 928.0], [99.9, 1018.0], [100.0, 2752.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 102788.0, "series": [{"data": [[0.0, 1178.0], [2300.0, 1.0], [600.0, 6824.0], [2500.0, 2.0], [700.0, 2230.0], [2700.0, 2.0], [200.0, 100413.0], [800.0, 888.0], [900.0, 394.0], [1000.0, 143.0], [1100.0, 60.0], [300.0, 102788.0], [1200.0, 34.0], [1300.0, 29.0], [1400.0, 21.0], [1500.0, 11.0], [100.0, 27947.0], [400.0, 25190.0], [1600.0, 6.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 10752.0], [2000.0, 1.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 27.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 257670.0, "series": [{"data": [[0.0, 257670.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21221.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 27.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 148.80502739284574, "minX": 1.61987988E12, "maxY": 150.0, "series": [{"data": [[1.61988048E12, 148.80502739284574], [1.61988E12, 150.0], [1.61988018E12, 150.0], [1.61988036E12, 150.0], [1.61987988E12, 149.02803424542512], [1.61988006E12, 150.0], [1.61987994E12, 150.0], [1.61988024E12, 150.0], [1.61988042E12, 150.0], [1.61988012E12, 150.0], [1.6198803E12, 150.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 97.0, "minX": 1.0, "maxY": 829.0, "series": [{"data": [[2.0, 330.0], [3.0, 347.0], [4.0, 436.0], [5.0, 330.0], [6.0, 483.0], [7.0, 317.0], [8.0, 426.0], [9.0, 545.0], [10.0, 335.0], [11.0, 295.0], [12.0, 522.0], [13.0, 274.0], [14.0, 485.0], [17.0, 320.0], [19.0, 300.0], [20.0, 358.5], [22.0, 261.0], [23.0, 316.0], [24.0, 225.0], [26.0, 572.0], [27.0, 286.0], [29.0, 415.5], [30.0, 274.0], [31.0, 287.0], [32.0, 118.2], [33.0, 189.0], [34.0, 97.0], [36.0, 151.0], [38.0, 129.0], [39.0, 364.5], [41.0, 133.0909090909091], [40.0, 403.3333333333333], [42.0, 218.0], [43.0, 186.83333333333331], [44.0, 294.66666666666663], [46.0, 272.4], [47.0, 394.0], [48.0, 252.0], [49.0, 171.66666666666669], [50.0, 123.83333333333333], [51.0, 172.0], [53.0, 306.0], [52.0, 307.0], [54.0, 197.0], [55.0, 202.5], [56.0, 224.0], [57.0, 308.0], [58.0, 192.0], [59.0, 149.5], [60.0, 152.0], [61.0, 161.0], [62.0, 162.0], [63.0, 569.0], [64.0, 138.0], [66.0, 174.4], [65.0, 297.0], [68.0, 123.66666666666667], [69.0, 242.8], [70.0, 250.5], [71.0, 226.5], [72.0, 148.66666666666666], [73.0, 150.5], [75.0, 297.0], [74.0, 297.0], [76.0, 152.11111111111111], [77.0, 207.5], [78.0, 233.5], [79.0, 177.4], [80.0, 138.21428571428572], [81.0, 263.0], [83.0, 227.0], [84.0, 203.28571428571428], [85.0, 216.5], [86.0, 504.5], [87.0, 309.0], [88.0, 201.5], [91.0, 312.8571428571429], [89.0, 461.0], [93.0, 229.5], [94.0, 258.5], [95.0, 210.4], [92.0, 322.0], [96.0, 214.0], [97.0, 237.8], [99.0, 195.0], [98.0, 615.0], [100.0, 161.0], [103.0, 184.0], [101.0, 611.5], [104.0, 215.0], [105.0, 223.62500000000003], [106.0, 287.0], [107.0, 210.83333333333331], [108.0, 527.8333333333334], [109.0, 216.33333333333334], [110.0, 182.5], [111.0, 274.25], [112.0, 227.89999999999998], [113.0, 219.0], [114.0, 254.44444444444446], [115.0, 205.0], [117.0, 148.0], [118.0, 294.6666666666667], [119.0, 714.0], [116.0, 346.0], [121.0, 351.8], [122.0, 187.0], [123.0, 344.0], [120.0, 339.0], [124.0, 278.5714285714286], [127.0, 306.0], [125.0, 383.0], [128.0, 318.25], [131.0, 247.625], [133.0, 257.6666666666667], [134.0, 275.8], [135.0, 316.0], [132.0, 326.0], [129.0, 468.3333333333333], [136.0, 282.0], [138.0, 306.5], [139.0, 377.75], [140.0, 275.375], [142.0, 329.6666666666667], [143.0, 504.0], [137.0, 829.0], [145.0, 268.0], [146.0, 278.42857142857144], [147.0, 319.6666666666667], [148.0, 252.75], [149.0, 380.6190476190476], [150.0, 322.57544937061476], [144.0, 559.5], [1.0, 679.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[149.8978373572199, 322.461511985605]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 24513.7, "minX": 1.61987988E12, "maxY": 153223.71666666667, "series": [{"data": [[1.61988048E12, 47125.48333333333], [1.61988E12, 141206.83333333334], [1.61988018E12, 133483.75], [1.61988036E12, 146815.13333333333], [1.61987988E12, 90473.9], [1.61988006E12, 146439.21666666667], [1.61987994E12, 135108.78333333333], [1.61988024E12, 141754.0], [1.61988042E12, 153223.71666666667], [1.61988012E12, 139122.46666666667], [1.6198803E12, 137126.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61988048E12, 24513.7], [1.61988E12, 73454.2], [1.61988018E12, 69451.53333333334], [1.61988036E12, 76374.56666666667], [1.61987988E12, 47060.3], [1.61988006E12, 76184.96666666666], [1.61987994E12, 70270.5], [1.61988024E12, 73749.13333333333], [1.61988042E12, 79713.63333333333], [1.61988012E12, 72382.43333333333], [1.6198803E12, 71329.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 297.24954576987966, "minX": 1.61987988E12, "maxY": 341.43705922499294, "series": [{"data": [[1.61988048E12, 334.41239660543647], [1.61988E12, 322.3899763389957], [1.61988018E12, 341.43705922499294], [1.61988036E12, 310.3810985070528], [1.61987988E12, 326.6869789043699], [1.61988006E12, 310.9750786353729], [1.61987994E12, 337.52883642495794], [1.61988024E12, 321.3976290794807], [1.61988042E12, 297.24954576987966], [1.61988012E12, 327.1842689271301], [1.6198803E12, 332.0067929264953]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 297.21994648343366, "minX": 1.61987988E12, "maxY": 341.4034276181091, "series": [{"data": [[1.61988048E12, 334.38360726178956], [1.61988E12, 322.3606151860598], [1.61988018E12, 341.4034276181091], [1.61988036E12, 310.3518601523985], [1.61987988E12, 326.6514464775341], [1.61988006E12, 310.94424665583983], [1.61987994E12, 337.49971894322505], [1.61988024E12, 321.3720274226953], [1.61988042E12, 297.21994648343366], [1.61988012E12, 327.1559646378307], [1.6198803E12, 331.9792520397232]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018422121312806867, "minX": 1.61987988E12, "maxY": 0.09753231492361972, "series": [{"data": [[1.61988048E12, 0.022021699430658456], [1.61988E12, 0.030580053058005586], [1.61988018E12, 0.03256995525896726], [1.61988036E12, 0.024618142950729217], [1.61987988E12, 0.09753231492361972], [1.61988006E12, 0.03535999446960015], [1.61987994E12, 0.01907438635937798], [1.61988024E12, 0.03338570306362943], [1.61988042E12, 0.03723035248257397], [1.61988012E12, 0.030159711863790142], [1.6198803E12, 0.018422121312806867]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.61987988E12, "maxY": 2752.0, "series": [{"data": [[1.61988048E12, 1583.0], [1.61988E12, 1727.0], [1.61988018E12, 1635.0], [1.61988036E12, 2518.0], [1.61987988E12, 1589.0], [1.61988006E12, 1653.0], [1.61987994E12, 2334.0], [1.61988024E12, 2068.0], [1.61988042E12, 1439.0], [1.61988012E12, 2752.0], [1.6198803E12, 2738.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61988048E12, 470.0], [1.61988E12, 453.0], [1.61988018E12, 465.0], [1.61988036E12, 433.0], [1.61987988E12, 457.0], [1.61988006E12, 441.0], [1.61987994E12, 461.0], [1.61988024E12, 450.0], [1.61988042E12, 413.0], [1.61988012E12, 465.0], [1.6198803E12, 472.90000000000146]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61988048E12, 739.0], [1.61988E12, 723.9800000000032], [1.61988018E12, 748.9900000000016], [1.61988036E12, 706.9900000000016], [1.61987988E12, 709.0], [1.61988006E12, 704.0], [1.61987994E12, 740.9700000000048], [1.61988024E12, 716.0], [1.61988042E12, 665.0], [1.61988012E12, 728.0], [1.6198803E12, 771.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61988048E12, 583.0], [1.61988E12, 566.0], [1.61988018E12, 574.0], [1.61988036E12, 535.0], [1.61987988E12, 559.0], [1.61988006E12, 548.0], [1.61987994E12, 578.9500000000007], [1.61988024E12, 553.9500000000007], [1.61988042E12, 513.0], [1.61988012E12, 572.0], [1.6198803E12, 592.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61988048E12, 48.0], [1.61988E12, 38.0], [1.61988018E12, 54.0], [1.61988036E12, 60.0], [1.61987988E12, 50.0], [1.61988006E12, 52.0], [1.61987994E12, 43.0], [1.61988024E12, 54.0], [1.61988042E12, 57.0], [1.61988012E12, 7.0], [1.6198803E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61988048E12, 316.0], [1.61988E12, 298.0], [1.61988018E12, 310.0], [1.61988036E12, 288.0], [1.61987988E12, 312.0], [1.61988006E12, 293.0], [1.61987994E12, 309.0], [1.61988024E12, 304.0], [1.61988042E12, 271.0], [1.61988012E12, 310.0], [1.6198803E12, 315.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 132.0, "minX": 163.0, "maxY": 403.0, "series": [{"data": [[163.0, 132.0], [295.0, 325.0], [335.0, 384.0], [345.0, 390.0], [341.0, 403.0], [346.0, 372.5], [350.0, 356.0], [356.0, 374.0], [357.0, 366.0], [361.0, 364.0], [355.0, 362.0], [353.0, 376.0], [359.0, 383.0], [362.0, 367.0], [380.0, 373.0], [369.0, 359.0], [368.0, 358.0], [382.0, 355.0], [372.0, 359.0], [375.0, 358.0], [373.0, 372.0], [374.0, 361.0], [378.0, 360.0], [376.0, 365.0], [377.0, 347.0], [370.0, 358.0], [383.0, 344.0], [399.0, 335.0], [396.0, 342.0], [393.0, 353.0], [397.0, 337.0], [388.0, 352.0], [394.0, 349.0], [395.0, 334.0], [384.0, 351.0], [390.0, 353.0], [391.0, 349.0], [385.0, 359.0], [387.0, 338.0], [389.0, 344.0], [398.0, 337.0], [392.0, 345.0], [402.0, 331.0], [407.0, 319.5], [400.0, 332.0], [401.0, 343.0], [406.0, 328.0], [411.0, 343.0], [408.0, 331.0], [409.0, 334.0], [410.0, 325.0], [415.0, 319.0], [414.0, 334.0], [413.0, 350.0], [403.0, 340.0], [405.0, 314.0], [430.0, 315.0], [417.0, 326.0], [416.0, 328.0], [423.0, 320.0], [425.0, 322.5], [429.0, 329.0], [426.0, 316.0], [427.0, 318.0], [424.0, 327.0], [431.0, 319.0], [419.0, 330.0], [418.0, 328.0], [428.0, 317.0], [422.0, 322.0], [421.0, 332.0], [420.0, 328.0], [447.0, 296.0], [442.0, 307.0], [439.0, 330.0], [438.0, 300.0], [446.0, 305.0], [445.0, 306.0], [444.0, 311.0], [443.0, 320.0], [432.0, 315.0], [441.0, 309.0], [440.0, 311.0], [433.0, 313.0], [435.0, 330.0], [437.0, 326.0], [436.0, 312.0], [449.0, 307.0], [452.0, 314.0], [460.0, 319.0], [461.0, 298.0], [451.0, 313.5], [450.0, 322.0], [455.0, 304.0], [448.0, 314.0], [453.0, 295.0], [458.0, 310.0], [459.0, 313.5], [454.0, 318.0], [462.0, 306.0], [457.0, 299.0], [456.0, 312.0], [463.0, 305.0], [465.0, 304.0], [473.0, 298.0], [469.0, 295.0], [470.0, 301.0], [464.0, 293.0], [471.0, 298.0], [477.0, 297.0], [467.0, 304.0], [466.0, 304.0], [476.0, 291.0], [478.0, 288.0], [472.0, 300.0], [479.0, 283.0], [468.0, 299.0], [474.0, 298.0], [475.0, 307.0], [492.0, 285.0], [484.0, 284.0], [489.0, 291.0], [483.0, 297.0], [491.0, 278.0], [490.0, 291.5], [487.0, 302.0], [480.0, 295.0], [493.0, 298.0], [488.0, 293.0], [495.0, 282.0], [486.0, 289.0], [485.0, 286.0], [499.0, 286.0], [503.0, 299.0], [498.0, 281.5], [502.0, 301.5], [505.0, 284.0], [500.0, 275.0], [496.0, 287.0], [497.0, 297.0], [506.0, 283.0], [507.0, 272.0], [510.0, 270.0], [504.0, 299.0], [508.0, 274.0], [509.0, 273.0], [536.0, 268.0], [512.0, 280.0], [542.0, 264.5], [540.0, 263.5], [541.0, 263.0], [539.0, 255.0], [537.0, 250.0], [524.0, 279.0], [522.0, 259.5], [520.0, 258.0], [521.0, 262.0], [523.0, 273.0], [513.0, 274.0], [514.0, 273.0], [515.0, 277.0], [516.0, 272.0], [528.0, 282.0], [543.0, 261.0], [529.0, 259.0], [533.0, 262.0], [532.0, 260.0], [531.0, 264.0], [535.0, 266.0], [534.0, 264.5], [527.0, 259.0], [525.0, 281.0], [526.0, 258.5], [517.0, 268.0], [519.0, 268.0], [518.0, 274.0], [569.0, 231.0], [550.0, 256.0], [572.0, 252.0], [570.0, 238.5], [571.0, 243.0], [573.0, 238.0], [562.0, 248.0], [563.0, 250.0], [561.0, 245.0], [575.0, 253.5], [560.0, 245.0], [555.0, 256.0], [558.0, 233.0], [552.0, 255.0], [554.0, 248.0], [568.0, 245.0], [551.0, 261.0], [565.0, 243.0], [566.0, 247.0], [559.0, 251.0], [549.0, 248.0], [546.0, 258.0], [545.0, 253.0], [583.0, 233.0], [582.0, 245.0], [605.0, 235.0], [600.0, 240.0], [581.0, 244.0], [590.0, 241.0], [587.0, 229.0], [593.0, 238.0], [598.0, 242.0], [599.0, 229.0], [579.0, 259.0], [578.0, 238.0], [577.0, 237.0], [625.0, 224.0], [610.0, 218.0], [611.0, 232.0], [608.0, 222.0], [609.0, 226.0], [641.0, 237.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 641.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 132.0, "minX": 163.0, "maxY": 403.0, "series": [{"data": [[163.0, 132.0], [295.0, 325.0], [335.0, 384.0], [345.0, 389.0], [341.0, 403.0], [346.0, 372.5], [350.0, 356.0], [356.0, 374.0], [357.0, 366.0], [361.0, 364.0], [355.0, 362.0], [353.0, 376.0], [359.0, 383.0], [362.0, 366.5], [380.0, 373.0], [369.0, 359.0], [368.0, 358.0], [382.0, 355.0], [372.0, 359.0], [375.0, 358.0], [373.0, 372.0], [374.0, 361.0], [378.0, 360.0], [376.0, 365.0], [377.0, 347.0], [370.0, 358.0], [383.0, 344.0], [399.0, 335.0], [396.0, 342.0], [393.0, 353.0], [397.0, 337.0], [388.0, 352.0], [394.0, 349.0], [395.0, 334.0], [384.0, 351.0], [390.0, 353.0], [391.0, 349.0], [385.0, 359.0], [387.0, 338.0], [389.0, 344.0], [398.0, 336.5], [392.0, 345.0], [402.0, 331.0], [407.0, 319.5], [400.0, 332.0], [401.0, 343.0], [406.0, 328.0], [411.0, 343.0], [408.0, 331.0], [409.0, 334.0], [410.0, 325.0], [415.0, 319.0], [414.0, 334.0], [413.0, 350.0], [403.0, 340.0], [405.0, 314.0], [430.0, 315.0], [417.0, 326.0], [416.0, 328.0], [423.0, 320.0], [425.0, 322.5], [429.0, 329.0], [426.0, 316.0], [427.0, 318.0], [424.0, 327.0], [431.0, 318.0], [419.0, 330.0], [418.0, 328.0], [428.0, 317.0], [422.0, 322.0], [421.0, 332.0], [420.0, 328.0], [447.0, 296.0], [442.0, 307.0], [439.0, 330.0], [438.0, 300.0], [446.0, 305.0], [445.0, 306.0], [444.0, 311.0], [443.0, 320.0], [432.0, 315.0], [441.0, 309.0], [440.0, 311.0], [433.0, 313.0], [435.0, 330.0], [437.0, 326.0], [436.0, 312.0], [449.0, 307.0], [452.0, 314.0], [460.0, 319.0], [461.0, 298.0], [451.0, 313.5], [450.0, 322.0], [455.0, 304.0], [448.0, 314.0], [453.0, 295.0], [458.0, 310.0], [459.0, 313.0], [454.0, 318.0], [462.0, 306.0], [457.0, 299.0], [456.0, 312.0], [463.0, 305.0], [465.0, 304.0], [473.0, 298.0], [469.0, 295.0], [470.0, 301.0], [464.0, 293.0], [471.0, 298.0], [477.0, 297.0], [467.0, 304.0], [466.0, 304.0], [476.0, 291.0], [478.0, 288.0], [472.0, 300.0], [479.0, 283.0], [468.0, 299.0], [474.0, 298.0], [475.0, 307.0], [492.0, 285.0], [484.0, 284.0], [489.0, 291.0], [483.0, 297.0], [491.0, 278.0], [490.0, 291.0], [487.0, 302.0], [480.0, 295.0], [493.0, 298.0], [488.0, 293.0], [495.0, 282.0], [486.0, 289.0], [485.0, 286.0], [499.0, 286.0], [503.0, 299.0], [498.0, 281.5], [502.0, 301.5], [505.0, 284.0], [500.0, 275.0], [496.0, 287.0], [497.0, 297.0], [506.0, 283.0], [507.0, 272.0], [510.0, 270.0], [504.0, 299.0], [508.0, 274.0], [509.0, 273.0], [536.0, 268.0], [512.0, 280.0], [542.0, 264.5], [540.0, 263.5], [541.0, 263.0], [539.0, 255.0], [537.0, 250.0], [524.0, 279.0], [522.0, 259.0], [520.0, 258.0], [521.0, 262.0], [523.0, 273.0], [513.0, 274.0], [514.0, 273.0], [515.0, 277.0], [516.0, 272.0], [528.0, 282.0], [543.0, 261.0], [529.0, 258.0], [533.0, 262.0], [532.0, 260.0], [531.0, 264.0], [535.0, 266.0], [534.0, 264.5], [527.0, 259.0], [525.0, 281.0], [526.0, 258.5], [517.0, 268.0], [519.0, 268.0], [518.0, 274.0], [569.0, 231.0], [550.0, 256.0], [572.0, 252.0], [570.0, 238.5], [571.0, 243.0], [573.0, 238.0], [562.0, 248.0], [563.0, 250.0], [561.0, 245.0], [575.0, 253.0], [560.0, 245.0], [555.0, 256.0], [558.0, 233.0], [552.0, 255.0], [554.0, 248.0], [568.0, 245.0], [551.0, 261.0], [565.0, 243.0], [566.0, 247.0], [559.0, 251.0], [549.0, 248.0], [546.0, 258.0], [545.0, 253.0], [583.0, 233.0], [582.0, 245.0], [605.0, 235.0], [600.0, 240.0], [581.0, 243.0], [590.0, 241.0], [587.0, 229.0], [593.0, 238.0], [598.0, 242.0], [599.0, 229.0], [579.0, 259.0], [578.0, 238.0], [577.0, 237.0], [625.0, 224.0], [610.0, 218.0], [611.0, 232.0], [608.0, 222.0], [609.0, 226.0], [641.0, 237.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 641.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 152.65, "minX": 1.61987988E12, "maxY": 504.51666666666665, "series": [{"data": [[1.61988048E12, 152.65], [1.61988E12, 464.9], [1.61988018E12, 439.56666666666666], [1.61988036E12, 483.3833333333333], [1.61987988E12, 300.3333333333333], [1.61988006E12, 482.1666666666667], [1.61987994E12, 444.76666666666665], [1.61988024E12, 466.76666666666665], [1.61988042E12, 504.51666666666665], [1.61988012E12, 458.1333333333333], [1.6198803E12, 451.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988048E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 155.15, "minX": 1.61987988E12, "maxY": 504.51666666666665, "series": [{"data": [[1.61988048E12, 155.15], [1.61988E12, 464.9], [1.61988018E12, 439.56666666666666], [1.61988036E12, 483.3833333333333], [1.61987988E12, 297.85], [1.61988006E12, 482.18333333333334], [1.61987994E12, 444.75], [1.61988024E12, 466.76666666666665], [1.61988042E12, 504.51666666666665], [1.61988012E12, 458.1166666666667], [1.6198803E12, 451.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61988048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 155.15, "minX": 1.61987988E12, "maxY": 504.51666666666665, "series": [{"data": [[1.61988048E12, 155.15], [1.61988E12, 464.9], [1.61988018E12, 439.56666666666666], [1.61988036E12, 483.3833333333333], [1.61987988E12, 297.85], [1.61988006E12, 482.18333333333334], [1.61987994E12, 444.75], [1.61988024E12, 466.76666666666665], [1.61988042E12, 504.51666666666665], [1.61988012E12, 458.1166666666667], [1.6198803E12, 451.45]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 155.15, "minX": 1.61987988E12, "maxY": 504.51666666666665, "series": [{"data": [[1.61988048E12, 155.15], [1.61988E12, 464.9], [1.61988018E12, 439.56666666666666], [1.61988036E12, 483.3833333333333], [1.61987988E12, 297.85], [1.61988006E12, 482.18333333333334], [1.61987994E12, 444.75], [1.61988024E12, 466.76666666666665], [1.61988042E12, 504.51666666666665], [1.61988012E12, 458.1166666666667], [1.6198803E12, 451.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61988048E12, "title": "Total Transactions Per Second"}},
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

