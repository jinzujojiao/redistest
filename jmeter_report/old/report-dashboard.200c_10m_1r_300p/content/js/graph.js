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
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 5270.0, "series": [{"data": [[0.0, 12.0], [0.1, 83.0], [0.2, 93.0], [0.3, 98.0], [0.4, 103.0], [0.5, 106.0], [0.6, 110.0], [0.7, 113.0], [0.8, 115.0], [0.9, 118.0], [1.0, 121.0], [1.1, 123.0], [1.2, 125.0], [1.3, 128.0], [1.4, 130.0], [1.5, 131.0], [1.6, 133.0], [1.7, 135.0], [1.8, 137.0], [1.9, 139.0], [2.0, 140.0], [2.1, 142.0], [2.2, 144.0], [2.3, 146.0], [2.4, 147.0], [2.5, 149.0], [2.6, 150.0], [2.7, 152.0], [2.8, 153.0], [2.9, 154.0], [3.0, 156.0], [3.1, 157.0], [3.2, 158.0], [3.3, 160.0], [3.4, 161.0], [3.5, 162.0], [3.6, 164.0], [3.7, 165.0], [3.8, 166.0], [3.9, 167.0], [4.0, 169.0], [4.1, 170.0], [4.2, 171.0], [4.3, 172.0], [4.4, 173.0], [4.5, 174.0], [4.6, 176.0], [4.7, 177.0], [4.8, 178.0], [4.9, 179.0], [5.0, 180.0], [5.1, 181.0], [5.2, 182.0], [5.3, 183.0], [5.4, 184.0], [5.5, 185.0], [5.6, 186.0], [5.7, 187.0], [5.8, 188.0], [5.9, 189.0], [6.0, 190.0], [6.1, 191.0], [6.2, 192.0], [6.3, 193.0], [6.4, 194.0], [6.5, 195.0], [6.6, 196.0], [6.7, 197.0], [6.8, 198.0], [6.9, 199.0], [7.0, 199.0], [7.1, 200.0], [7.2, 201.0], [7.3, 202.0], [7.4, 203.0], [7.5, 203.0], [7.6, 204.0], [7.7, 205.0], [7.8, 206.0], [7.9, 207.0], [8.0, 208.0], [8.1, 209.0], [8.2, 209.0], [8.3, 210.0], [8.4, 211.0], [8.5, 212.0], [8.6, 212.0], [8.7, 213.0], [8.8, 214.0], [8.9, 215.0], [9.0, 216.0], [9.1, 216.0], [9.2, 217.0], [9.3, 218.0], [9.4, 219.0], [9.5, 219.0], [9.6, 220.0], [9.7, 221.0], [9.8, 221.0], [9.9, 222.0], [10.0, 223.0], [10.1, 223.0], [10.2, 224.0], [10.3, 225.0], [10.4, 226.0], [10.5, 226.0], [10.6, 227.0], [10.7, 228.0], [10.8, 228.0], [10.9, 229.0], [11.0, 230.0], [11.1, 230.0], [11.2, 231.0], [11.3, 232.0], [11.4, 232.0], [11.5, 233.0], [11.6, 234.0], [11.7, 234.0], [11.8, 235.0], [11.9, 235.0], [12.0, 236.0], [12.1, 237.0], [12.2, 237.0], [12.3, 238.0], [12.4, 239.0], [12.5, 239.0], [12.6, 240.0], [12.7, 240.0], [12.8, 241.0], [12.9, 242.0], [13.0, 242.0], [13.1, 243.0], [13.2, 243.0], [13.3, 244.0], [13.4, 244.0], [13.5, 245.0], [13.6, 246.0], [13.7, 246.0], [13.8, 247.0], [13.9, 247.0], [14.0, 248.0], [14.1, 248.0], [14.2, 249.0], [14.3, 249.0], [14.4, 250.0], [14.5, 251.0], [14.6, 251.0], [14.7, 252.0], [14.8, 252.0], [14.9, 253.0], [15.0, 253.0], [15.1, 254.0], [15.2, 254.0], [15.3, 255.0], [15.4, 255.0], [15.5, 256.0], [15.6, 256.0], [15.7, 257.0], [15.8, 258.0], [15.9, 258.0], [16.0, 259.0], [16.1, 259.0], [16.2, 260.0], [16.3, 260.0], [16.4, 261.0], [16.5, 261.0], [16.6, 262.0], [16.7, 262.0], [16.8, 263.0], [16.9, 263.0], [17.0, 264.0], [17.1, 264.0], [17.2, 265.0], [17.3, 265.0], [17.4, 266.0], [17.5, 266.0], [17.6, 267.0], [17.7, 267.0], [17.8, 268.0], [17.9, 268.0], [18.0, 269.0], [18.1, 269.0], [18.2, 270.0], [18.3, 270.0], [18.4, 271.0], [18.5, 271.0], [18.6, 271.0], [18.7, 272.0], [18.8, 272.0], [18.9, 273.0], [19.0, 273.0], [19.1, 274.0], [19.2, 274.0], [19.3, 275.0], [19.4, 275.0], [19.5, 276.0], [19.6, 276.0], [19.7, 277.0], [19.8, 277.0], [19.9, 278.0], [20.0, 278.0], [20.1, 279.0], [20.2, 279.0], [20.3, 279.0], [20.4, 280.0], [20.5, 280.0], [20.6, 281.0], [20.7, 281.0], [20.8, 282.0], [20.9, 282.0], [21.0, 283.0], [21.1, 283.0], [21.2, 284.0], [21.3, 284.0], [21.4, 284.0], [21.5, 285.0], [21.6, 285.0], [21.7, 286.0], [21.8, 286.0], [21.9, 287.0], [22.0, 287.0], [22.1, 288.0], [22.2, 288.0], [22.3, 289.0], [22.4, 289.0], [22.5, 289.0], [22.6, 290.0], [22.7, 290.0], [22.8, 291.0], [22.9, 291.0], [23.0, 291.0], [23.1, 292.0], [23.2, 292.0], [23.3, 293.0], [23.4, 293.0], [23.5, 294.0], [23.6, 294.0], [23.7, 294.0], [23.8, 295.0], [23.9, 295.0], [24.0, 295.0], [24.1, 296.0], [24.2, 296.0], [24.3, 297.0], [24.4, 297.0], [24.5, 297.0], [24.6, 298.0], [24.7, 298.0], [24.8, 299.0], [24.9, 299.0], [25.0, 299.0], [25.1, 300.0], [25.2, 300.0], [25.3, 301.0], [25.4, 301.0], [25.5, 301.0], [25.6, 302.0], [25.7, 302.0], [25.8, 303.0], [25.9, 303.0], [26.0, 303.0], [26.1, 304.0], [26.2, 304.0], [26.3, 305.0], [26.4, 305.0], [26.5, 305.0], [26.6, 306.0], [26.7, 306.0], [26.8, 306.0], [26.9, 307.0], [27.0, 307.0], [27.1, 307.0], [27.2, 308.0], [27.3, 308.0], [27.4, 309.0], [27.5, 309.0], [27.6, 309.0], [27.7, 310.0], [27.8, 310.0], [27.9, 310.0], [28.0, 311.0], [28.1, 311.0], [28.2, 311.0], [28.3, 312.0], [28.4, 312.0], [28.5, 313.0], [28.6, 313.0], [28.7, 313.0], [28.8, 314.0], [28.9, 314.0], [29.0, 314.0], [29.1, 315.0], [29.2, 315.0], [29.3, 315.0], [29.4, 316.0], [29.5, 316.0], [29.6, 316.0], [29.7, 317.0], [29.8, 317.0], [29.9, 317.0], [30.0, 318.0], [30.1, 318.0], [30.2, 318.0], [30.3, 319.0], [30.4, 319.0], [30.5, 319.0], [30.6, 320.0], [30.7, 320.0], [30.8, 320.0], [30.9, 321.0], [31.0, 321.0], [31.1, 321.0], [31.2, 322.0], [31.3, 322.0], [31.4, 322.0], [31.5, 323.0], [31.6, 323.0], [31.7, 323.0], [31.8, 324.0], [31.9, 324.0], [32.0, 324.0], [32.1, 325.0], [32.2, 325.0], [32.3, 325.0], [32.4, 326.0], [32.5, 326.0], [32.6, 326.0], [32.7, 327.0], [32.8, 327.0], [32.9, 327.0], [33.0, 328.0], [33.1, 328.0], [33.2, 328.0], [33.3, 329.0], [33.4, 329.0], [33.5, 329.0], [33.6, 330.0], [33.7, 330.0], [33.8, 330.0], [33.9, 331.0], [34.0, 331.0], [34.1, 331.0], [34.2, 332.0], [34.3, 332.0], [34.4, 332.0], [34.5, 333.0], [34.6, 333.0], [34.7, 333.0], [34.8, 333.0], [34.9, 334.0], [35.0, 334.0], [35.1, 334.0], [35.2, 335.0], [35.3, 335.0], [35.4, 335.0], [35.5, 336.0], [35.6, 336.0], [35.7, 336.0], [35.8, 337.0], [35.9, 337.0], [36.0, 337.0], [36.1, 337.0], [36.2, 338.0], [36.3, 338.0], [36.4, 338.0], [36.5, 339.0], [36.6, 339.0], [36.7, 339.0], [36.8, 340.0], [36.9, 340.0], [37.0, 340.0], [37.1, 340.0], [37.2, 341.0], [37.3, 341.0], [37.4, 341.0], [37.5, 342.0], [37.6, 342.0], [37.7, 342.0], [37.8, 343.0], [37.9, 343.0], [38.0, 343.0], [38.1, 343.0], [38.2, 344.0], [38.3, 344.0], [38.4, 344.0], [38.5, 345.0], [38.6, 345.0], [38.7, 345.0], [38.8, 346.0], [38.9, 346.0], [39.0, 346.0], [39.1, 346.0], [39.2, 347.0], [39.3, 347.0], [39.4, 347.0], [39.5, 348.0], [39.6, 348.0], [39.7, 348.0], [39.8, 348.0], [39.9, 349.0], [40.0, 349.0], [40.1, 349.0], [40.2, 349.0], [40.3, 350.0], [40.4, 350.0], [40.5, 350.0], [40.6, 351.0], [40.7, 351.0], [40.8, 351.0], [40.9, 351.0], [41.0, 352.0], [41.1, 352.0], [41.2, 352.0], [41.3, 353.0], [41.4, 353.0], [41.5, 353.0], [41.6, 353.0], [41.7, 354.0], [41.8, 354.0], [41.9, 354.0], [42.0, 355.0], [42.1, 355.0], [42.2, 355.0], [42.3, 355.0], [42.4, 356.0], [42.5, 356.0], [42.6, 356.0], [42.7, 357.0], [42.8, 357.0], [42.9, 357.0], [43.0, 357.0], [43.1, 358.0], [43.2, 358.0], [43.3, 358.0], [43.4, 358.0], [43.5, 359.0], [43.6, 359.0], [43.7, 359.0], [43.8, 359.0], [43.9, 360.0], [44.0, 360.0], [44.1, 360.0], [44.2, 360.0], [44.3, 361.0], [44.4, 361.0], [44.5, 361.0], [44.6, 362.0], [44.7, 362.0], [44.8, 362.0], [44.9, 362.0], [45.0, 363.0], [45.1, 363.0], [45.2, 363.0], [45.3, 363.0], [45.4, 364.0], [45.5, 364.0], [45.6, 364.0], [45.7, 365.0], [45.8, 365.0], [45.9, 365.0], [46.0, 365.0], [46.1, 366.0], [46.2, 366.0], [46.3, 366.0], [46.4, 366.0], [46.5, 367.0], [46.6, 367.0], [46.7, 367.0], [46.8, 367.0], [46.9, 368.0], [47.0, 368.0], [47.1, 368.0], [47.2, 369.0], [47.3, 369.0], [47.4, 369.0], [47.5, 369.0], [47.6, 370.0], [47.7, 370.0], [47.8, 370.0], [47.9, 370.0], [48.0, 371.0], [48.1, 371.0], [48.2, 371.0], [48.3, 372.0], [48.4, 372.0], [48.5, 372.0], [48.6, 372.0], [48.7, 373.0], [48.8, 373.0], [48.9, 373.0], [49.0, 373.0], [49.1, 374.0], [49.2, 374.0], [49.3, 374.0], [49.4, 374.0], [49.5, 375.0], [49.6, 375.0], [49.7, 375.0], [49.8, 375.0], [49.9, 376.0], [50.0, 376.0], [50.1, 376.0], [50.2, 376.0], [50.3, 377.0], [50.4, 377.0], [50.5, 377.0], [50.6, 377.0], [50.7, 378.0], [50.8, 378.0], [50.9, 378.0], [51.0, 379.0], [51.1, 379.0], [51.2, 379.0], [51.3, 379.0], [51.4, 380.0], [51.5, 380.0], [51.6, 380.0], [51.7, 380.0], [51.8, 381.0], [51.9, 381.0], [52.0, 381.0], [52.1, 382.0], [52.2, 382.0], [52.3, 382.0], [52.4, 382.0], [52.5, 383.0], [52.6, 383.0], [52.7, 383.0], [52.8, 384.0], [52.9, 384.0], [53.0, 384.0], [53.1, 384.0], [53.2, 385.0], [53.3, 385.0], [53.4, 385.0], [53.5, 385.0], [53.6, 386.0], [53.7, 386.0], [53.8, 386.0], [53.9, 387.0], [54.0, 387.0], [54.1, 387.0], [54.2, 387.0], [54.3, 388.0], [54.4, 388.0], [54.5, 388.0], [54.6, 388.0], [54.7, 389.0], [54.8, 389.0], [54.9, 389.0], [55.0, 390.0], [55.1, 390.0], [55.2, 390.0], [55.3, 390.0], [55.4, 391.0], [55.5, 391.0], [55.6, 391.0], [55.7, 391.0], [55.8, 392.0], [55.9, 392.0], [56.0, 392.0], [56.1, 393.0], [56.2, 393.0], [56.3, 393.0], [56.4, 393.0], [56.5, 394.0], [56.6, 394.0], [56.7, 394.0], [56.8, 395.0], [56.9, 395.0], [57.0, 395.0], [57.1, 395.0], [57.2, 396.0], [57.3, 396.0], [57.4, 396.0], [57.5, 397.0], [57.6, 397.0], [57.7, 397.0], [57.8, 397.0], [57.9, 398.0], [58.0, 398.0], [58.1, 398.0], [58.2, 399.0], [58.3, 399.0], [58.4, 399.0], [58.5, 400.0], [58.6, 400.0], [58.7, 400.0], [58.8, 400.0], [58.9, 401.0], [59.0, 401.0], [59.1, 401.0], [59.2, 402.0], [59.3, 402.0], [59.4, 402.0], [59.5, 402.0], [59.6, 403.0], [59.7, 403.0], [59.8, 403.0], [59.9, 404.0], [60.0, 404.0], [60.1, 404.0], [60.2, 405.0], [60.3, 405.0], [60.4, 405.0], [60.5, 406.0], [60.6, 406.0], [60.7, 406.0], [60.8, 406.0], [60.9, 407.0], [61.0, 407.0], [61.1, 407.0], [61.2, 408.0], [61.3, 408.0], [61.4, 408.0], [61.5, 409.0], [61.6, 409.0], [61.7, 409.0], [61.8, 410.0], [61.9, 410.0], [62.0, 410.0], [62.1, 411.0], [62.2, 411.0], [62.3, 411.0], [62.4, 412.0], [62.5, 412.0], [62.6, 412.0], [62.7, 412.0], [62.8, 413.0], [62.9, 413.0], [63.0, 413.0], [63.1, 414.0], [63.2, 414.0], [63.3, 415.0], [63.4, 415.0], [63.5, 415.0], [63.6, 416.0], [63.7, 416.0], [63.8, 416.0], [63.9, 417.0], [64.0, 417.0], [64.1, 417.0], [64.2, 418.0], [64.3, 418.0], [64.4, 418.0], [64.5, 419.0], [64.6, 419.0], [64.7, 419.0], [64.8, 420.0], [64.9, 420.0], [65.0, 420.0], [65.1, 421.0], [65.2, 421.0], [65.3, 421.0], [65.4, 422.0], [65.5, 422.0], [65.6, 422.0], [65.7, 423.0], [65.8, 423.0], [65.9, 423.0], [66.0, 424.0], [66.1, 424.0], [66.2, 424.0], [66.3, 425.0], [66.4, 425.0], [66.5, 425.0], [66.6, 426.0], [66.7, 426.0], [66.8, 426.0], [66.9, 427.0], [67.0, 427.0], [67.1, 428.0], [67.2, 428.0], [67.3, 428.0], [67.4, 429.0], [67.5, 429.0], [67.6, 429.0], [67.7, 430.0], [67.8, 430.0], [67.9, 431.0], [68.0, 431.0], [68.1, 431.0], [68.2, 432.0], [68.3, 432.0], [68.4, 433.0], [68.5, 433.0], [68.6, 433.0], [68.7, 434.0], [68.8, 434.0], [68.9, 435.0], [69.0, 435.0], [69.1, 436.0], [69.2, 436.0], [69.3, 436.0], [69.4, 437.0], [69.5, 437.0], [69.6, 438.0], [69.7, 438.0], [69.8, 439.0], [69.9, 439.0], [70.0, 440.0], [70.1, 440.0], [70.2, 440.0], [70.3, 441.0], [70.4, 441.0], [70.5, 442.0], [70.6, 442.0], [70.7, 443.0], [70.8, 443.0], [70.9, 444.0], [71.0, 444.0], [71.1, 445.0], [71.2, 445.0], [71.3, 446.0], [71.4, 446.0], [71.5, 447.0], [71.6, 447.0], [71.7, 448.0], [71.8, 448.0], [71.9, 449.0], [72.0, 449.0], [72.1, 449.0], [72.2, 450.0], [72.3, 451.0], [72.4, 451.0], [72.5, 451.0], [72.6, 452.0], [72.7, 453.0], [72.8, 453.0], [72.9, 454.0], [73.0, 454.0], [73.1, 455.0], [73.2, 455.0], [73.3, 456.0], [73.4, 456.0], [73.5, 457.0], [73.6, 457.0], [73.7, 458.0], [73.8, 458.0], [73.9, 459.0], [74.0, 460.0], [74.1, 460.0], [74.2, 461.0], [74.3, 461.0], [74.4, 462.0], [74.5, 462.0], [74.6, 463.0], [74.7, 464.0], [74.8, 464.0], [74.9, 465.0], [75.0, 465.0], [75.1, 466.0], [75.2, 466.0], [75.3, 467.0], [75.4, 468.0], [75.5, 468.0], [75.6, 469.0], [75.7, 469.0], [75.8, 470.0], [75.9, 471.0], [76.0, 471.0], [76.1, 472.0], [76.2, 472.0], [76.3, 473.0], [76.4, 473.0], [76.5, 474.0], [76.6, 475.0], [76.7, 475.0], [76.8, 476.0], [76.9, 477.0], [77.0, 477.0], [77.1, 478.0], [77.2, 478.0], [77.3, 479.0], [77.4, 480.0], [77.5, 480.0], [77.6, 481.0], [77.7, 482.0], [77.8, 482.0], [77.9, 483.0], [78.0, 483.0], [78.1, 484.0], [78.2, 485.0], [78.3, 485.0], [78.4, 486.0], [78.5, 487.0], [78.6, 487.0], [78.7, 488.0], [78.8, 489.0], [78.9, 489.0], [79.0, 490.0], [79.1, 491.0], [79.2, 491.0], [79.3, 492.0], [79.4, 493.0], [79.5, 493.0], [79.6, 494.0], [79.7, 495.0], [79.8, 495.0], [79.9, 496.0], [80.0, 497.0], [80.1, 498.0], [80.2, 498.0], [80.3, 499.0], [80.4, 500.0], [80.5, 500.0], [80.6, 501.0], [80.7, 502.0], [80.8, 502.0], [80.9, 503.0], [81.0, 504.0], [81.1, 504.0], [81.2, 505.0], [81.3, 506.0], [81.4, 507.0], [81.5, 507.0], [81.6, 508.0], [81.7, 509.0], [81.8, 510.0], [81.9, 510.0], [82.0, 511.0], [82.1, 512.0], [82.2, 513.0], [82.3, 514.0], [82.4, 515.0], [82.5, 515.0], [82.6, 516.0], [82.7, 517.0], [82.8, 518.0], [82.9, 519.0], [83.0, 519.0], [83.1, 520.0], [83.2, 521.0], [83.3, 522.0], [83.4, 523.0], [83.5, 524.0], [83.6, 525.0], [83.7, 526.0], [83.8, 527.0], [83.9, 527.0], [84.0, 528.0], [84.1, 529.0], [84.2, 530.0], [84.3, 531.0], [84.4, 532.0], [84.5, 533.0], [84.6, 534.0], [84.7, 535.0], [84.8, 536.0], [84.9, 537.0], [85.0, 538.0], [85.1, 539.0], [85.2, 540.0], [85.3, 541.0], [85.4, 542.0], [85.5, 543.0], [85.6, 544.0], [85.7, 546.0], [85.8, 547.0], [85.9, 548.0], [86.0, 549.0], [86.1, 550.0], [86.2, 552.0], [86.3, 553.0], [86.4, 554.0], [86.5, 555.0], [86.6, 557.0], [86.7, 558.0], [86.8, 559.0], [86.9, 560.0], [87.0, 562.0], [87.1, 563.0], [87.2, 565.0], [87.3, 566.0], [87.4, 568.0], [87.5, 569.0], [87.6, 571.0], [87.7, 572.0], [87.8, 574.0], [87.9, 575.0], [88.0, 576.0], [88.1, 578.0], [88.2, 580.0], [88.3, 581.0], [88.4, 583.0], [88.5, 584.0], [88.6, 586.0], [88.7, 588.0], [88.8, 589.0], [88.9, 591.0], [89.0, 593.0], [89.1, 594.0], [89.2, 596.0], [89.3, 598.0], [89.4, 599.0], [89.5, 601.0], [89.6, 603.0], [89.7, 604.0], [89.8, 606.0], [89.9, 608.0], [90.0, 610.0], [90.1, 612.0], [90.2, 614.0], [90.3, 616.0], [90.4, 617.0], [90.5, 619.0], [90.6, 621.0], [90.7, 623.0], [90.8, 625.0], [90.9, 627.0], [91.0, 629.0], [91.1, 631.0], [91.2, 633.0], [91.3, 635.0], [91.4, 637.0], [91.5, 639.0], [91.6, 641.0], [91.7, 644.0], [91.8, 646.0], [91.9, 648.0], [92.0, 650.0], [92.1, 652.0], [92.2, 654.0], [92.3, 656.0], [92.4, 658.0], [92.5, 660.0], [92.6, 663.0], [92.7, 665.0], [92.8, 667.0], [92.9, 669.0], [93.0, 672.0], [93.1, 674.0], [93.2, 676.0], [93.3, 678.0], [93.4, 681.0], [93.5, 683.0], [93.6, 685.0], [93.7, 688.0], [93.8, 690.0], [93.9, 692.0], [94.0, 695.0], [94.1, 697.0], [94.2, 700.0], [94.3, 702.0], [94.4, 704.0], [94.5, 707.0], [94.6, 710.0], [94.7, 712.0], [94.8, 715.0], [94.9, 718.0], [95.0, 720.0], [95.1, 724.0], [95.2, 726.0], [95.3, 729.0], [95.4, 732.0], [95.5, 735.0], [95.6, 738.0], [95.7, 741.0], [95.8, 745.0], [95.9, 748.0], [96.0, 751.0], [96.1, 755.0], [96.2, 758.0], [96.3, 762.0], [96.4, 765.0], [96.5, 769.0], [96.6, 773.0], [96.7, 776.0], [96.8, 781.0], [96.9, 785.0], [97.0, 789.0], [97.1, 793.0], [97.2, 798.0], [97.3, 803.0], [97.4, 808.0], [97.5, 814.0], [97.6, 819.0], [97.7, 825.0], [97.8, 833.0], [97.9, 840.0], [98.0, 847.0], [98.1, 855.0], [98.2, 864.0], [98.3, 874.0], [98.4, 884.0], [98.5, 895.0], [98.6, 906.0], [98.7, 918.0], [98.8, 930.0], [98.9, 944.0], [99.0, 960.0], [99.1, 976.0], [99.2, 995.0], [99.3, 1014.0], [99.4, 1039.0], [99.5, 1069.0], [99.6, 1106.0], [99.7, 1160.0], [99.8, 1270.0], [99.9, 1455.0], [100.0, 5270.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 100146.0, "series": [{"data": [[0.0, 968.0], [600.0, 14269.0], [700.0, 9117.0], [800.0, 3894.0], [900.0, 2044.0], [1000.0, 1066.0], [1100.0, 496.0], [1200.0, 209.0], [1300.0, 185.0], [1400.0, 106.0], [1500.0, 84.0], [100.0, 19987.0], [1600.0, 56.0], [1700.0, 35.0], [1800.0, 15.0], [1900.0, 7.0], [2000.0, 17.0], [2100.0, 9.0], [2200.0, 4.0], [2300.0, 5.0], [2400.0, 4.0], [2500.0, 1.0], [2600.0, 3.0], [2700.0, 4.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [200.0, 53855.0], [3500.0, 2.0], [3700.0, 1.0], [300.0, 100146.0], [5200.0, 2.0], [400.0, 65488.0], [500.0, 27024.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 252.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 240901.0, "series": [{"data": [[0.0, 240901.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 57955.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 252.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 195.63661016949166, "minX": 1.62023238E12, "maxY": 200.0, "series": [{"data": [[1.6202328E12, 200.0], [1.6202325E12, 200.0], [1.62023298E12, 195.63661016949166], [1.62023268E12, 200.0], [1.62023238E12, 199.15182300485438], [1.62023286E12, 200.0], [1.62023256E12, 200.0], [1.62023274E12, 200.0], [1.62023244E12, 200.0], [1.62023292E12, 200.0], [1.62023262E12, 200.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62023298E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 96.25, "minX": 1.0, "maxY": 900.0, "series": [{"data": [[3.0, 505.0], [4.0, 831.0], [5.0, 480.0], [7.0, 483.0], [8.0, 499.0], [9.0, 497.0], [10.0, 494.0], [12.0, 534.5], [15.0, 493.6666666666667], [16.0, 494.0], [17.0, 277.0], [20.0, 558.0], [21.0, 405.0], [23.0, 392.0], [25.0, 558.0], [26.0, 416.0], [27.0, 372.0], [29.0, 576.0], [31.0, 576.0], [33.0, 597.0], [32.0, 598.0], [34.0, 370.0], [37.0, 480.5], [36.0, 576.0], [39.0, 305.0], [38.0, 727.0], [40.0, 311.5], [43.0, 241.0], [44.0, 246.57142857142856], [45.0, 255.0], [47.0, 254.0], [46.0, 256.0], [49.0, 124.33333333333334], [48.0, 254.0], [51.0, 253.0], [50.0, 253.0], [53.0, 125.4], [52.0, 248.0], [55.0, 579.0], [54.0, 297.5], [57.0, 123.0], [58.0, 152.0], [59.0, 201.0], [60.0, 163.0], [61.0, 677.75], [62.0, 203.5], [63.0, 225.5], [66.0, 229.0], [65.0, 340.0], [64.0, 278.0], [70.0, 197.83333333333331], [71.0, 182.50000000000003], [69.0, 337.0], [68.0, 501.0], [72.0, 145.72727272727272], [73.0, 142.91666666666669], [74.0, 283.0], [75.0, 185.8], [76.0, 221.5], [78.0, 352.3333333333333], [82.0, 428.5], [80.0, 462.5], [85.0, 231.33333333333334], [86.0, 205.0], [87.0, 135.5], [88.0, 96.25], [90.0, 200.5], [91.0, 167.33333333333334], [89.0, 432.6666666666667], [92.0, 339.0], [94.0, 209.49999999999997], [95.0, 140.33333333333334], [97.0, 241.5], [99.0, 361.3333333333333], [96.0, 530.0], [103.0, 248.4], [102.0, 368.0], [104.0, 186.0], [105.0, 156.5], [106.0, 234.0], [107.0, 303.0], [108.0, 175.0], [109.0, 172.33333333333334], [111.0, 180.0], [110.0, 384.0], [113.0, 203.66666666666666], [114.0, 254.0], [115.0, 238.1428571428571], [112.0, 325.0], [117.0, 216.0], [118.0, 300.25], [119.0, 351.0], [123.0, 230.91666666666666], [122.0, 351.0], [125.0, 340.75], [126.0, 241.25], [127.0, 347.0], [128.0, 293.75], [129.0, 251.0], [130.0, 255.0], [134.0, 295.5], [135.0, 261.5], [133.0, 492.0], [132.0, 471.0], [131.0, 471.0], [138.0, 276.0], [139.0, 262.6666666666667], [142.0, 255.25], [143.0, 250.25], [141.0, 355.0], [140.0, 386.0], [137.0, 380.0], [136.0, 428.0], [145.0, 207.0], [146.0, 269.3333333333333], [147.0, 227.4], [148.0, 236.5], [150.0, 282.14285714285717], [144.0, 325.5], [153.0, 230.75], [157.0, 271.6666666666667], [158.0, 290.0], [159.0, 323.5], [161.0, 288.6666666666667], [162.0, 283.0], [163.0, 283.0], [164.0, 280.3333333333333], [165.0, 353.0], [166.0, 285.0], [167.0, 262.3333333333333], [168.0, 319.0], [170.0, 273.42857142857144], [171.0, 257.3333333333333], [172.0, 312.0], [173.0, 285.6], [174.0, 383.3333333333333], [175.0, 207.66666666666666], [176.0, 195.0], [177.0, 298.0], [178.0, 276.0], [179.0, 248.0], [180.0, 282.0], [181.0, 493.78947368421063], [182.0, 265.4166666666667], [183.0, 257.5], [184.0, 375.2], [185.0, 323.3333333333333], [186.0, 333.22222222222223], [187.0, 323.3333333333333], [188.0, 338.25], [190.0, 414.3333333333333], [191.0, 364.57142857142856], [189.0, 370.0], [192.0, 508.5], [193.0, 424.5], [194.0, 261.0], [195.0, 329.6666666666667], [196.0, 365.14285714285717], [197.0, 327.6], [198.0, 358.0], [199.0, 318.75], [200.0, 401.1387350997588], [1.0, 900.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[199.86008398304054, 400.96033874052387]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11652.5, "minX": 1.62023238E12, "maxY": 156997.11666666667, "series": [{"data": [[1.6202328E12, 146973.93333333332], [1.6202325E12, 142806.58333333334], [1.62023298E12, 22382.3], [1.62023268E12, 155691.5], [1.62023238E12, 134560.13333333333], [1.62023286E12, 156873.35], [1.62023256E12, 151426.58333333334], [1.62023274E12, 156997.11666666667], [1.62023244E12, 156307.95], [1.62023292E12, 137955.51666666666], [1.62023262E12, 152111.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6202328E12, 76443.03333333334], [1.6202325E12, 74320.56666666667], [1.62023298E12, 11652.5], [1.62023268E12, 80972.36666666667], [1.62023238E12, 69986.1], [1.62023286E12, 81628.06666666667], [1.62023256E12, 78752.46666666666], [1.62023274E12, 81693.9], [1.62023244E12, 81291.0], [1.62023292E12, 71753.06666666667], [1.62023262E12, 79158.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62023298E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 381.9061594611861, "minX": 1.62023238E12, "maxY": 439.6255871990615, "series": [{"data": [[1.6202328E12, 413.29491198456765], [1.6202325E12, 424.95556815363267], [1.62023298E12, 409.27774011299357], [1.62023268E12, 390.2165273667383], [1.62023238E12, 381.9061594611861], [1.62023286E12, 387.4903542163998], [1.62023256E12, 401.23152544639635], [1.62023274E12, 386.72778261290006], [1.62023244E12, 388.469906057662], [1.62023292E12, 439.6255871990615], [1.62023262E12, 399.21982701264164]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62023298E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 381.87707416187203, "minX": 1.62023238E12, "maxY": 439.5989430416917, "series": [{"data": [[1.6202328E12, 413.2666643701123], [1.6202325E12, 424.92662013251567], [1.62023298E12, 409.2540112994346], [1.62023268E12, 390.18774594295706], [1.62023238E12, 381.87707416187203], [1.62023286E12, 387.4624169301252], [1.62023256E12, 401.206346552534], [1.62023274E12, 386.7004802888202], [1.62023244E12, 388.44159378037034], [1.62023292E12, 439.5989430416917], [1.62023262E12, 399.19174983366645]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62023298E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013508994850531489, "minX": 1.62023238E12, "maxY": 0.08070888362117581, "series": [{"data": [[1.6202328E12, 0.015088359915946042], [1.6202325E12, 0.029762959288523336], [1.62023298E12, 0.048361581920903916], [1.62023268E12, 0.020163257341702268], [1.62023238E12, 0.08070888362117581], [1.62023286E12, 0.031066520420672067], [1.62023256E12, 0.013508994850531489], [1.62023274E12, 0.03020339747928915], [1.62023244E12, 0.016358924522189813], [1.62023292E12, 0.01497357604227841], [1.62023262E12, 0.035096473719228104]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62023298E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.62023238E12, "maxY": 5270.0, "series": [{"data": [[1.6202328E12, 2393.0], [1.6202325E12, 2982.0], [1.62023298E12, 2346.0], [1.62023268E12, 2800.0], [1.62023238E12, 3775.0], [1.62023286E12, 3054.0], [1.62023256E12, 5268.0], [1.62023274E12, 2751.0], [1.62023244E12, 3579.0], [1.62023292E12, 2798.0], [1.62023262E12, 5270.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6202328E12, 651.0], [1.6202325E12, 626.0], [1.62023298E12, 608.0], [1.62023268E12, 573.0], [1.62023238E12, 558.0], [1.62023286E12, 577.0], [1.62023256E12, 601.0], [1.62023274E12, 593.0], [1.62023244E12, 590.9000000000015], [1.62023292E12, 650.9000000000015], [1.62023262E12, 570.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6202328E12, 1006.0], [1.6202325E12, 961.0], [1.62023298E12, 976.4799999999996], [1.62023268E12, 881.0], [1.62023238E12, 873.9900000000016], [1.62023286E12, 909.0], [1.62023256E12, 949.0], [1.62023274E12, 949.9700000000048], [1.62023244E12, 934.0], [1.62023292E12, 1017.9900000000016], [1.62023262E12, 885.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6202328E12, 762.0], [1.6202325E12, 731.0], [1.62023298E12, 736.3999999999996], [1.62023268E12, 671.0], [1.62023238E12, 663.0], [1.62023286E12, 683.0], [1.62023256E12, 718.9500000000007], [1.62023274E12, 699.9500000000007], [1.62023244E12, 696.0], [1.62023292E12, 758.9500000000007], [1.62023262E12, 670.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6202328E12, 51.0], [1.6202325E12, 56.0], [1.62023298E12, 68.0], [1.62023268E12, 41.0], [1.62023238E12, 37.0], [1.62023286E12, 52.0], [1.62023256E12, 64.0], [1.62023274E12, 52.0], [1.62023244E12, 12.0], [1.62023292E12, 59.0], [1.62023262E12, 44.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6202328E12, 398.0], [1.6202325E12, 388.0], [1.62023298E12, 386.0], [1.62023268E12, 350.0], [1.62023238E12, 346.0], [1.62023286E12, 354.0], [1.62023256E12, 371.0], [1.62023274E12, 368.0], [1.62023244E12, 361.0], [1.62023292E12, 398.0], [1.62023262E12, 352.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62023298E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 129.0, "minX": 94.0, "maxY": 497.0, "series": [{"data": [[94.0, 129.0], [337.0, 476.0], [363.0, 465.0], [365.0, 494.0], [366.0, 489.5], [376.0, 481.0], [381.0, 437.0], [377.0, 457.5], [371.0, 454.0], [379.0, 454.0], [378.0, 451.0], [372.0, 427.5], [380.0, 449.5], [382.0, 455.0], [369.0, 497.0], [375.0, 449.0], [396.0, 449.5], [392.0, 446.5], [399.0, 435.0], [391.0, 427.0], [389.0, 419.0], [388.0, 454.0], [390.0, 406.0], [393.0, 452.0], [385.0, 454.0], [384.0, 435.5], [394.0, 452.0], [397.0, 437.0], [395.0, 439.0], [398.0, 418.5], [402.0, 418.0], [407.0, 414.0], [403.0, 432.0], [412.0, 425.5], [413.0, 424.0], [400.0, 434.0], [401.0, 436.0], [414.0, 421.0], [411.0, 417.0], [410.0, 423.0], [409.0, 431.0], [408.0, 429.0], [405.0, 447.0], [404.0, 415.0], [406.0, 426.0], [430.0, 395.0], [426.0, 424.5], [422.0, 421.0], [423.0, 410.0], [420.0, 397.0], [421.0, 389.0], [418.0, 417.5], [417.0, 411.0], [431.0, 396.0], [428.0, 407.5], [419.0, 428.0], [425.0, 415.0], [424.0, 425.0], [433.0, 403.0], [435.0, 392.0], [434.0, 421.0], [436.0, 406.5], [437.0, 417.0], [439.0, 406.0], [445.0, 404.0], [432.0, 414.0], [446.0, 398.0], [443.0, 399.0], [442.0, 403.0], [441.0, 412.0], [440.0, 408.0], [447.0, 406.0], [444.0, 413.5], [450.0, 413.0], [457.0, 360.0], [449.0, 404.5], [454.0, 397.5], [452.0, 399.0], [459.0, 400.0], [463.0, 395.0], [462.0, 369.5], [461.0, 403.0], [451.0, 412.0], [455.0, 389.0], [456.0, 408.0], [477.0, 395.0], [465.0, 353.0], [475.0, 400.0], [471.0, 390.0], [464.0, 398.0], [466.0, 387.0], [473.0, 375.0], [476.0, 387.0], [467.0, 370.0], [468.0, 393.5], [469.0, 422.0], [472.0, 375.0], [479.0, 390.0], [481.0, 397.5], [489.0, 389.0], [490.0, 391.0], [491.0, 367.0], [493.0, 375.0], [495.0, 371.0], [485.0, 381.0], [492.0, 341.0], [487.0, 397.0], [480.0, 375.0], [482.0, 375.5], [484.0, 370.0], [486.0, 388.5], [483.0, 351.0], [498.0, 373.0], [503.0, 314.0], [501.0, 390.5], [508.0, 392.0], [499.0, 379.0], [510.0, 354.0], [509.0, 393.0], [500.0, 375.0], [497.0, 385.0], [496.0, 368.0], [502.0, 383.5], [505.0, 368.0], [504.0, 343.0], [506.0, 350.0], [507.0, 363.0], [511.0, 361.5], [537.0, 351.0], [543.0, 348.0], [515.0, 359.0], [524.0, 338.5], [513.0, 362.0], [514.0, 340.0], [512.0, 360.0], [527.0, 347.5], [525.0, 358.0], [526.0, 356.0], [523.0, 374.0], [531.0, 327.5], [535.0, 354.5], [532.0, 362.5], [530.0, 375.0], [529.0, 360.0], [528.0, 351.0], [522.0, 358.0], [520.0, 369.0], [521.0, 346.0], [518.0, 383.0], [517.0, 366.0], [516.0, 366.0], [536.0, 341.0], [538.0, 331.0], [539.0, 357.0], [541.0, 340.0], [542.0, 331.5], [548.0, 334.0], [545.0, 337.0], [544.0, 364.0], [559.0, 328.0], [575.0, 347.0], [566.0, 340.5], [567.0, 317.0], [563.0, 318.0], [564.0, 334.5], [571.0, 338.0], [549.0, 358.0], [550.0, 343.0], [569.0, 330.0], [570.0, 321.5], [551.0, 336.0], [573.0, 299.0], [572.0, 327.0], [574.0, 332.0], [547.0, 336.0], [555.0, 350.0], [557.0, 319.0], [556.0, 336.5], [552.0, 337.0], [554.0, 371.0], [558.0, 303.0], [562.0, 335.0], [561.0, 321.0], [560.0, 324.5], [579.0, 308.0], [577.0, 322.0], [578.0, 312.0], [591.0, 326.0], [576.0, 344.0], [584.0, 318.0], [585.0, 303.0], [586.0, 297.0], [589.0, 323.0], [590.0, 323.0], [607.0, 347.0], [594.0, 316.5], [602.0, 315.5], [604.0, 332.5], [603.0, 307.5], [606.0, 302.0], [605.0, 310.0], [583.0, 316.0], [582.0, 318.5], [580.0, 312.0], [600.0, 310.5], [601.0, 297.0], [592.0, 304.0], [593.0, 327.0], [599.0, 295.0], [598.0, 316.0], [597.0, 350.0], [596.0, 347.0], [595.0, 319.0], [633.0, 312.0], [625.0, 307.0], [610.0, 277.0], [608.0, 298.0], [611.0, 323.0], [614.0, 285.5], [613.0, 286.0], [612.0, 295.0], [615.0, 293.0], [630.0, 304.0], [628.0, 269.0], [627.0, 307.0], [637.0, 310.0], [634.0, 263.0], [636.0, 316.0], [619.0, 302.0], [622.0, 310.0], [616.0, 305.0], [618.0, 320.0], [631.0, 288.0], [638.0, 277.0], [624.0, 299.0], [623.0, 294.0], [658.0, 265.5], [649.0, 310.0], [650.0, 271.0], [654.0, 259.0], [660.0, 280.0], [667.0, 278.0], [671.0, 291.0], [659.0, 294.0], [662.0, 298.5], [661.0, 257.0], [663.0, 274.5], [655.0, 288.0], [645.0, 314.0], [672.0, 287.0], [673.0, 269.0], [700.0, 262.0], [681.0, 247.0], [692.0, 271.0], [702.0, 278.0], [683.0, 269.0], [686.0, 290.0], [691.0, 253.0], [680.0, 265.0], [710.0, 267.5], [720.0, 251.5], [716.0, 251.0], [745.0, 251.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 745.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 129.0, "minX": 94.0, "maxY": 497.0, "series": [{"data": [[94.0, 129.0], [337.0, 476.0], [363.0, 465.0], [365.0, 494.0], [366.0, 489.5], [376.0, 481.0], [381.0, 437.0], [377.0, 457.5], [371.0, 454.0], [379.0, 454.0], [378.0, 451.0], [372.0, 427.5], [380.0, 449.5], [382.0, 455.0], [369.0, 497.0], [375.0, 449.0], [396.0, 449.5], [392.0, 446.0], [399.0, 435.0], [391.0, 427.0], [389.0, 419.0], [388.0, 454.0], [390.0, 405.5], [393.0, 452.0], [385.0, 454.0], [384.0, 435.5], [394.0, 452.0], [397.0, 437.0], [395.0, 439.0], [398.0, 418.5], [402.0, 418.0], [407.0, 414.0], [403.0, 432.0], [412.0, 425.5], [413.0, 424.0], [400.0, 434.0], [401.0, 436.0], [414.0, 421.0], [411.0, 417.0], [410.0, 423.0], [409.0, 431.0], [408.0, 429.0], [405.0, 447.0], [404.0, 415.0], [406.0, 425.5], [430.0, 395.0], [426.0, 424.0], [422.0, 421.0], [423.0, 410.0], [420.0, 397.0], [421.0, 389.0], [418.0, 417.5], [417.0, 411.0], [431.0, 396.0], [428.0, 407.5], [419.0, 428.0], [425.0, 415.0], [424.0, 425.0], [433.0, 403.0], [435.0, 392.0], [434.0, 421.0], [436.0, 406.5], [437.0, 417.0], [439.0, 406.0], [445.0, 404.0], [432.0, 414.0], [446.0, 398.0], [443.0, 399.0], [442.0, 403.0], [441.0, 412.0], [440.0, 408.0], [447.0, 406.0], [444.0, 413.5], [450.0, 413.0], [457.0, 360.0], [449.0, 404.0], [454.0, 397.5], [452.0, 399.0], [459.0, 400.0], [463.0, 395.0], [462.0, 369.5], [461.0, 403.0], [451.0, 412.0], [455.0, 389.0], [456.0, 408.0], [477.0, 395.0], [465.0, 353.0], [475.0, 400.0], [471.0, 390.0], [464.0, 398.0], [466.0, 387.0], [473.0, 375.0], [476.0, 387.0], [467.0, 370.0], [468.0, 393.5], [469.0, 422.0], [472.0, 375.0], [479.0, 390.0], [481.0, 397.5], [489.0, 389.0], [490.0, 391.0], [491.0, 367.0], [493.0, 375.0], [495.0, 371.0], [485.0, 380.0], [492.0, 341.0], [487.0, 397.0], [480.0, 375.0], [482.0, 375.0], [484.0, 370.0], [486.0, 388.5], [483.0, 351.0], [498.0, 373.0], [503.0, 314.0], [501.0, 390.5], [508.0, 392.0], [499.0, 379.0], [510.0, 354.0], [509.0, 393.0], [500.0, 375.0], [497.0, 385.0], [496.0, 368.0], [502.0, 383.5], [505.0, 368.0], [504.0, 343.0], [506.0, 349.5], [507.0, 363.0], [511.0, 361.5], [537.0, 351.0], [543.0, 348.0], [515.0, 359.0], [524.0, 338.5], [513.0, 362.0], [514.0, 340.0], [512.0, 360.0], [527.0, 347.5], [525.0, 358.0], [526.0, 356.0], [523.0, 374.0], [531.0, 327.5], [535.0, 354.5], [532.0, 362.5], [530.0, 375.0], [529.0, 360.0], [528.0, 351.0], [522.0, 358.0], [520.0, 369.0], [521.0, 346.0], [518.0, 383.0], [517.0, 365.5], [516.0, 365.5], [536.0, 341.0], [538.0, 331.0], [539.0, 357.0], [541.0, 340.0], [542.0, 331.5], [548.0, 334.0], [545.0, 337.0], [544.0, 364.0], [559.0, 328.0], [575.0, 347.0], [566.0, 340.5], [567.0, 317.0], [563.0, 318.0], [564.0, 334.5], [571.0, 338.0], [549.0, 358.0], [550.0, 343.0], [569.0, 330.0], [570.0, 321.5], [551.0, 336.0], [573.0, 299.0], [572.0, 327.0], [574.0, 332.0], [547.0, 336.0], [555.0, 350.0], [557.0, 319.0], [556.0, 336.5], [552.0, 337.0], [554.0, 371.0], [558.0, 303.0], [562.0, 335.0], [561.0, 321.0], [560.0, 324.5], [579.0, 308.0], [577.0, 322.0], [578.0, 312.0], [591.0, 326.0], [576.0, 344.0], [584.0, 318.0], [585.0, 303.0], [586.0, 297.0], [589.0, 323.0], [590.0, 323.0], [607.0, 347.0], [594.0, 316.5], [602.0, 315.5], [604.0, 332.5], [603.0, 307.0], [606.0, 302.0], [605.0, 310.0], [583.0, 316.0], [582.0, 318.5], [580.0, 312.0], [600.0, 310.5], [601.0, 297.0], [592.0, 304.0], [593.0, 327.0], [599.0, 295.0], [598.0, 316.0], [597.0, 350.0], [596.0, 347.0], [595.0, 319.0], [633.0, 312.0], [625.0, 307.0], [610.0, 277.0], [608.0, 298.0], [611.0, 323.0], [614.0, 285.5], [613.0, 286.0], [612.0, 295.0], [615.0, 293.0], [630.0, 304.0], [628.0, 269.0], [627.0, 307.0], [637.0, 310.0], [634.0, 263.0], [636.0, 316.0], [619.0, 302.0], [622.0, 309.5], [616.0, 305.0], [618.0, 320.0], [631.0, 288.0], [638.0, 277.0], [624.0, 299.0], [623.0, 294.0], [658.0, 265.5], [649.0, 310.0], [650.0, 271.0], [654.0, 259.0], [660.0, 280.0], [667.0, 278.0], [671.0, 291.0], [659.0, 294.0], [662.0, 298.5], [661.0, 257.0], [663.0, 274.5], [655.0, 288.0], [645.0, 314.0], [672.0, 287.0], [673.0, 269.0], [700.0, 262.0], [681.0, 247.0], [692.0, 271.0], [702.0, 278.0], [683.0, 269.0], [686.0, 290.0], [691.0, 253.0], [680.0, 265.0], [710.0, 267.5], [720.0, 251.0], [716.0, 251.0], [745.0, 251.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 745.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 70.41666666666667, "minX": 1.62023238E12, "maxY": 517.05, "series": [{"data": [[1.6202328E12, 483.81666666666666], [1.6202325E12, 470.3833333333333], [1.62023298E12, 70.41666666666667], [1.62023268E12, 512.5333333333333], [1.62023238E12, 446.28333333333336], [1.62023286E12, 516.6333333333333], [1.62023256E12, 498.43333333333334], [1.62023274E12, 517.05], [1.62023244E12, 514.5], [1.62023292E12, 454.1333333333333], [1.62023262E12, 500.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62023298E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 73.75, "minX": 1.62023238E12, "maxY": 517.05, "series": [{"data": [[1.6202328E12, 483.81666666666666], [1.6202325E12, 470.3833333333333], [1.62023298E12, 73.75], [1.62023268E12, 512.4833333333333], [1.62023238E12, 442.95], [1.62023286E12, 516.6333333333333], [1.62023256E12, 498.43333333333334], [1.62023274E12, 517.05], [1.62023244E12, 514.5], [1.62023292E12, 454.1333333333333], [1.62023262E12, 501.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62023298E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 73.75, "minX": 1.62023238E12, "maxY": 517.05, "series": [{"data": [[1.6202328E12, 483.81666666666666], [1.6202325E12, 470.3833333333333], [1.62023298E12, 73.75], [1.62023268E12, 512.4833333333333], [1.62023238E12, 442.95], [1.62023286E12, 516.6333333333333], [1.62023256E12, 498.43333333333334], [1.62023274E12, 517.05], [1.62023244E12, 514.5], [1.62023292E12, 454.1333333333333], [1.62023262E12, 501.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62023298E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 73.75, "minX": 1.62023238E12, "maxY": 517.05, "series": [{"data": [[1.6202328E12, 483.81666666666666], [1.6202325E12, 470.3833333333333], [1.62023298E12, 73.75], [1.62023268E12, 512.4833333333333], [1.62023238E12, 442.95], [1.62023286E12, 516.6333333333333], [1.62023256E12, 498.43333333333334], [1.62023274E12, 517.05], [1.62023244E12, 514.5], [1.62023292E12, 454.1333333333333], [1.62023262E12, 501.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62023298E12, "title": "Total Transactions Per Second"}},
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

