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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 5653.0, "series": [{"data": [[0.0, 7.0], [0.1, 86.0], [0.2, 97.0], [0.3, 103.0], [0.4, 108.0], [0.5, 112.0], [0.6, 116.0], [0.7, 119.0], [0.8, 122.0], [0.9, 125.0], [1.0, 127.0], [1.1, 129.0], [1.2, 132.0], [1.3, 134.0], [1.4, 136.0], [1.5, 138.0], [1.6, 140.0], [1.7, 142.0], [1.8, 144.0], [1.9, 146.0], [2.0, 148.0], [2.1, 150.0], [2.2, 151.0], [2.3, 153.0], [2.4, 155.0], [2.5, 156.0], [2.6, 158.0], [2.7, 160.0], [2.8, 161.0], [2.9, 163.0], [3.0, 164.0], [3.1, 166.0], [3.2, 167.0], [3.3, 169.0], [3.4, 170.0], [3.5, 172.0], [3.6, 173.0], [3.7, 174.0], [3.8, 176.0], [3.9, 177.0], [4.0, 178.0], [4.1, 180.0], [4.2, 181.0], [4.3, 182.0], [4.4, 183.0], [4.5, 185.0], [4.6, 186.0], [4.7, 187.0], [4.8, 188.0], [4.9, 189.0], [5.0, 191.0], [5.1, 192.0], [5.2, 193.0], [5.3, 194.0], [5.4, 195.0], [5.5, 196.0], [5.6, 197.0], [5.7, 198.0], [5.8, 199.0], [5.9, 200.0], [6.0, 201.0], [6.1, 202.0], [6.2, 203.0], [6.3, 204.0], [6.4, 205.0], [6.5, 206.0], [6.6, 207.0], [6.7, 208.0], [6.8, 209.0], [6.9, 210.0], [7.0, 210.0], [7.1, 211.0], [7.2, 212.0], [7.3, 213.0], [7.4, 214.0], [7.5, 215.0], [7.6, 215.0], [7.7, 216.0], [7.8, 217.0], [7.9, 218.0], [8.0, 219.0], [8.1, 219.0], [8.2, 220.0], [8.3, 221.0], [8.4, 222.0], [8.5, 222.0], [8.6, 223.0], [8.7, 224.0], [8.8, 225.0], [8.9, 225.0], [9.0, 226.0], [9.1, 227.0], [9.2, 228.0], [9.3, 228.0], [9.4, 229.0], [9.5, 230.0], [9.6, 231.0], [9.7, 231.0], [9.8, 232.0], [9.9, 233.0], [10.0, 233.0], [10.1, 234.0], [10.2, 235.0], [10.3, 235.0], [10.4, 236.0], [10.5, 237.0], [10.6, 238.0], [10.7, 238.0], [10.8, 239.0], [10.9, 240.0], [11.0, 240.0], [11.1, 241.0], [11.2, 242.0], [11.3, 242.0], [11.4, 243.0], [11.5, 244.0], [11.6, 244.0], [11.7, 245.0], [11.8, 246.0], [11.9, 246.0], [12.0, 247.0], [12.1, 248.0], [12.2, 248.0], [12.3, 249.0], [12.4, 250.0], [12.5, 250.0], [12.6, 251.0], [12.7, 251.0], [12.8, 252.0], [12.9, 253.0], [13.0, 253.0], [13.1, 254.0], [13.2, 255.0], [13.3, 255.0], [13.4, 256.0], [13.5, 256.0], [13.6, 257.0], [13.7, 257.0], [13.8, 258.0], [13.9, 259.0], [14.0, 259.0], [14.1, 260.0], [14.2, 261.0], [14.3, 261.0], [14.4, 262.0], [14.5, 262.0], [14.6, 263.0], [14.7, 264.0], [14.8, 264.0], [14.9, 265.0], [15.0, 265.0], [15.1, 266.0], [15.2, 266.0], [15.3, 267.0], [15.4, 267.0], [15.5, 268.0], [15.6, 268.0], [15.7, 269.0], [15.8, 270.0], [15.9, 270.0], [16.0, 271.0], [16.1, 271.0], [16.2, 272.0], [16.3, 272.0], [16.4, 273.0], [16.5, 273.0], [16.6, 274.0], [16.7, 275.0], [16.8, 275.0], [16.9, 276.0], [17.0, 276.0], [17.1, 277.0], [17.2, 277.0], [17.3, 278.0], [17.4, 278.0], [17.5, 279.0], [17.6, 279.0], [17.7, 280.0], [17.8, 280.0], [17.9, 281.0], [18.0, 281.0], [18.1, 282.0], [18.2, 282.0], [18.3, 283.0], [18.4, 283.0], [18.5, 284.0], [18.6, 284.0], [18.7, 285.0], [18.8, 286.0], [18.9, 286.0], [19.0, 287.0], [19.1, 287.0], [19.2, 288.0], [19.3, 288.0], [19.4, 289.0], [19.5, 289.0], [19.6, 290.0], [19.7, 290.0], [19.8, 290.0], [19.9, 291.0], [20.0, 291.0], [20.1, 292.0], [20.2, 292.0], [20.3, 293.0], [20.4, 293.0], [20.5, 294.0], [20.6, 294.0], [20.7, 295.0], [20.8, 295.0], [20.9, 296.0], [21.0, 296.0], [21.1, 297.0], [21.2, 297.0], [21.3, 298.0], [21.4, 298.0], [21.5, 298.0], [21.6, 299.0], [21.7, 299.0], [21.8, 300.0], [21.9, 300.0], [22.0, 301.0], [22.1, 301.0], [22.2, 302.0], [22.3, 302.0], [22.4, 303.0], [22.5, 303.0], [22.6, 304.0], [22.7, 304.0], [22.8, 304.0], [22.9, 305.0], [23.0, 305.0], [23.1, 306.0], [23.2, 306.0], [23.3, 307.0], [23.4, 307.0], [23.5, 308.0], [23.6, 308.0], [23.7, 308.0], [23.8, 309.0], [23.9, 309.0], [24.0, 310.0], [24.1, 310.0], [24.2, 311.0], [24.3, 311.0], [24.4, 311.0], [24.5, 312.0], [24.6, 312.0], [24.7, 313.0], [24.8, 313.0], [24.9, 314.0], [25.0, 314.0], [25.1, 314.0], [25.2, 315.0], [25.3, 315.0], [25.4, 316.0], [25.5, 316.0], [25.6, 316.0], [25.7, 317.0], [25.8, 317.0], [25.9, 318.0], [26.0, 318.0], [26.1, 318.0], [26.2, 319.0], [26.3, 319.0], [26.4, 320.0], [26.5, 320.0], [26.6, 320.0], [26.7, 321.0], [26.8, 321.0], [26.9, 322.0], [27.0, 322.0], [27.1, 322.0], [27.2, 323.0], [27.3, 323.0], [27.4, 323.0], [27.5, 324.0], [27.6, 324.0], [27.7, 325.0], [27.8, 325.0], [27.9, 325.0], [28.0, 326.0], [28.1, 326.0], [28.2, 326.0], [28.3, 327.0], [28.4, 327.0], [28.5, 328.0], [28.6, 328.0], [28.7, 328.0], [28.8, 329.0], [28.9, 329.0], [29.0, 329.0], [29.1, 330.0], [29.2, 330.0], [29.3, 330.0], [29.4, 331.0], [29.5, 331.0], [29.6, 332.0], [29.7, 332.0], [29.8, 332.0], [29.9, 333.0], [30.0, 333.0], [30.1, 333.0], [30.2, 334.0], [30.3, 334.0], [30.4, 334.0], [30.5, 335.0], [30.6, 335.0], [30.7, 336.0], [30.8, 336.0], [30.9, 336.0], [31.0, 337.0], [31.1, 337.0], [31.2, 337.0], [31.3, 338.0], [31.4, 338.0], [31.5, 338.0], [31.6, 338.0], [31.7, 339.0], [31.8, 339.0], [31.9, 339.0], [32.0, 340.0], [32.1, 340.0], [32.2, 340.0], [32.3, 341.0], [32.4, 341.0], [32.5, 341.0], [32.6, 342.0], [32.7, 342.0], [32.8, 342.0], [32.9, 343.0], [33.0, 343.0], [33.1, 343.0], [33.2, 344.0], [33.3, 344.0], [33.4, 344.0], [33.5, 345.0], [33.6, 345.0], [33.7, 345.0], [33.8, 346.0], [33.9, 346.0], [34.0, 346.0], [34.1, 346.0], [34.2, 347.0], [34.3, 347.0], [34.4, 347.0], [34.5, 348.0], [34.6, 348.0], [34.7, 348.0], [34.8, 348.0], [34.9, 349.0], [35.0, 349.0], [35.1, 349.0], [35.2, 350.0], [35.3, 350.0], [35.4, 350.0], [35.5, 350.0], [35.6, 351.0], [35.7, 351.0], [35.8, 351.0], [35.9, 352.0], [36.0, 352.0], [36.1, 352.0], [36.2, 352.0], [36.3, 353.0], [36.4, 353.0], [36.5, 353.0], [36.6, 354.0], [36.7, 354.0], [36.8, 354.0], [36.9, 355.0], [37.0, 355.0], [37.1, 355.0], [37.2, 355.0], [37.3, 356.0], [37.4, 356.0], [37.5, 356.0], [37.6, 356.0], [37.7, 357.0], [37.8, 357.0], [37.9, 357.0], [38.0, 358.0], [38.1, 358.0], [38.2, 358.0], [38.3, 358.0], [38.4, 359.0], [38.5, 359.0], [38.6, 359.0], [38.7, 359.0], [38.8, 360.0], [38.9, 360.0], [39.0, 360.0], [39.1, 361.0], [39.2, 361.0], [39.3, 361.0], [39.4, 361.0], [39.5, 362.0], [39.6, 362.0], [39.7, 362.0], [39.8, 362.0], [39.9, 363.0], [40.0, 363.0], [40.1, 363.0], [40.2, 363.0], [40.3, 364.0], [40.4, 364.0], [40.5, 364.0], [40.6, 364.0], [40.7, 365.0], [40.8, 365.0], [40.9, 365.0], [41.0, 365.0], [41.1, 366.0], [41.2, 366.0], [41.3, 366.0], [41.4, 367.0], [41.5, 367.0], [41.6, 367.0], [41.7, 367.0], [41.8, 368.0], [41.9, 368.0], [42.0, 368.0], [42.1, 368.0], [42.2, 369.0], [42.3, 369.0], [42.4, 369.0], [42.5, 370.0], [42.6, 370.0], [42.7, 370.0], [42.8, 370.0], [42.9, 371.0], [43.0, 371.0], [43.1, 371.0], [43.2, 371.0], [43.3, 372.0], [43.4, 372.0], [43.5, 372.0], [43.6, 372.0], [43.7, 373.0], [43.8, 373.0], [43.9, 373.0], [44.0, 373.0], [44.1, 374.0], [44.2, 374.0], [44.3, 374.0], [44.4, 374.0], [44.5, 375.0], [44.6, 375.0], [44.7, 375.0], [44.8, 375.0], [44.9, 376.0], [45.0, 376.0], [45.1, 376.0], [45.2, 377.0], [45.3, 377.0], [45.4, 377.0], [45.5, 377.0], [45.6, 378.0], [45.7, 378.0], [45.8, 378.0], [45.9, 378.0], [46.0, 379.0], [46.1, 379.0], [46.2, 379.0], [46.3, 379.0], [46.4, 380.0], [46.5, 380.0], [46.6, 380.0], [46.7, 380.0], [46.8, 381.0], [46.9, 381.0], [47.0, 381.0], [47.1, 381.0], [47.2, 382.0], [47.3, 382.0], [47.4, 382.0], [47.5, 382.0], [47.6, 383.0], [47.7, 383.0], [47.8, 383.0], [47.9, 383.0], [48.0, 384.0], [48.1, 384.0], [48.2, 384.0], [48.3, 384.0], [48.4, 385.0], [48.5, 385.0], [48.6, 385.0], [48.7, 386.0], [48.8, 386.0], [48.9, 386.0], [49.0, 386.0], [49.1, 387.0], [49.2, 387.0], [49.3, 387.0], [49.4, 387.0], [49.5, 388.0], [49.6, 388.0], [49.7, 388.0], [49.8, 388.0], [49.9, 389.0], [50.0, 389.0], [50.1, 389.0], [50.2, 389.0], [50.3, 390.0], [50.4, 390.0], [50.5, 390.0], [50.6, 390.0], [50.7, 391.0], [50.8, 391.0], [50.9, 391.0], [51.0, 391.0], [51.1, 392.0], [51.2, 392.0], [51.3, 392.0], [51.4, 392.0], [51.5, 393.0], [51.6, 393.0], [51.7, 393.0], [51.8, 393.0], [51.9, 394.0], [52.0, 394.0], [52.1, 394.0], [52.2, 394.0], [52.3, 395.0], [52.4, 395.0], [52.5, 395.0], [52.6, 395.0], [52.7, 396.0], [52.8, 396.0], [52.9, 396.0], [53.0, 397.0], [53.1, 397.0], [53.2, 397.0], [53.3, 397.0], [53.4, 398.0], [53.5, 398.0], [53.6, 398.0], [53.7, 398.0], [53.8, 399.0], [53.9, 399.0], [54.0, 399.0], [54.1, 400.0], [54.2, 400.0], [54.3, 400.0], [54.4, 400.0], [54.5, 401.0], [54.6, 401.0], [54.7, 401.0], [54.8, 401.0], [54.9, 402.0], [55.0, 402.0], [55.1, 402.0], [55.2, 403.0], [55.3, 403.0], [55.4, 403.0], [55.5, 403.0], [55.6, 404.0], [55.7, 404.0], [55.8, 404.0], [55.9, 405.0], [56.0, 405.0], [56.1, 405.0], [56.2, 405.0], [56.3, 406.0], [56.4, 406.0], [56.5, 406.0], [56.6, 407.0], [56.7, 407.0], [56.8, 407.0], [56.9, 407.0], [57.0, 408.0], [57.1, 408.0], [57.2, 408.0], [57.3, 408.0], [57.4, 409.0], [57.5, 409.0], [57.6, 409.0], [57.7, 410.0], [57.8, 410.0], [57.9, 410.0], [58.0, 411.0], [58.1, 411.0], [58.2, 411.0], [58.3, 411.0], [58.4, 412.0], [58.5, 412.0], [58.6, 412.0], [58.7, 413.0], [58.8, 413.0], [58.9, 413.0], [59.0, 414.0], [59.1, 414.0], [59.2, 414.0], [59.3, 415.0], [59.4, 415.0], [59.5, 415.0], [59.6, 415.0], [59.7, 416.0], [59.8, 416.0], [59.9, 416.0], [60.0, 417.0], [60.1, 417.0], [60.2, 417.0], [60.3, 418.0], [60.4, 418.0], [60.5, 418.0], [60.6, 419.0], [60.7, 419.0], [60.8, 419.0], [60.9, 420.0], [61.0, 420.0], [61.1, 420.0], [61.2, 421.0], [61.3, 421.0], [61.4, 421.0], [61.5, 422.0], [61.6, 422.0], [61.7, 422.0], [61.8, 423.0], [61.9, 423.0], [62.0, 423.0], [62.1, 424.0], [62.2, 424.0], [62.3, 424.0], [62.4, 425.0], [62.5, 425.0], [62.6, 425.0], [62.7, 426.0], [62.8, 426.0], [62.9, 426.0], [63.0, 427.0], [63.1, 427.0], [63.2, 427.0], [63.3, 428.0], [63.4, 428.0], [63.5, 429.0], [63.6, 429.0], [63.7, 429.0], [63.8, 430.0], [63.9, 430.0], [64.0, 430.0], [64.1, 431.0], [64.2, 431.0], [64.3, 432.0], [64.4, 432.0], [64.5, 432.0], [64.6, 433.0], [64.7, 433.0], [64.8, 433.0], [64.9, 434.0], [65.0, 434.0], [65.1, 435.0], [65.2, 435.0], [65.3, 435.0], [65.4, 436.0], [65.5, 436.0], [65.6, 437.0], [65.7, 437.0], [65.8, 437.0], [65.9, 438.0], [66.0, 438.0], [66.1, 438.0], [66.2, 439.0], [66.3, 439.0], [66.4, 440.0], [66.5, 440.0], [66.6, 441.0], [66.7, 441.0], [66.8, 441.0], [66.9, 442.0], [67.0, 442.0], [67.1, 443.0], [67.2, 443.0], [67.3, 444.0], [67.4, 444.0], [67.5, 445.0], [67.6, 445.0], [67.7, 445.0], [67.8, 446.0], [67.9, 446.0], [68.0, 447.0], [68.1, 447.0], [68.2, 448.0], [68.3, 448.0], [68.4, 449.0], [68.5, 449.0], [68.6, 449.0], [68.7, 450.0], [68.8, 450.0], [68.9, 451.0], [69.0, 451.0], [69.1, 452.0], [69.2, 452.0], [69.3, 452.0], [69.4, 453.0], [69.5, 453.0], [69.6, 454.0], [69.7, 454.0], [69.8, 455.0], [69.9, 455.0], [70.0, 456.0], [70.1, 456.0], [70.2, 457.0], [70.3, 457.0], [70.4, 457.0], [70.5, 458.0], [70.6, 458.0], [70.7, 459.0], [70.8, 459.0], [70.9, 460.0], [71.0, 460.0], [71.1, 461.0], [71.2, 461.0], [71.3, 462.0], [71.4, 462.0], [71.5, 463.0], [71.6, 463.0], [71.7, 464.0], [71.8, 464.0], [71.9, 465.0], [72.0, 465.0], [72.1, 466.0], [72.2, 466.0], [72.3, 467.0], [72.4, 467.0], [72.5, 468.0], [72.6, 468.0], [72.7, 469.0], [72.8, 469.0], [72.9, 470.0], [73.0, 470.0], [73.1, 471.0], [73.2, 471.0], [73.3, 472.0], [73.4, 472.0], [73.5, 473.0], [73.6, 473.0], [73.7, 474.0], [73.8, 474.0], [73.9, 475.0], [74.0, 475.0], [74.1, 476.0], [74.2, 477.0], [74.3, 477.0], [74.4, 478.0], [74.5, 478.0], [74.6, 479.0], [74.7, 479.0], [74.8, 480.0], [74.9, 480.0], [75.0, 481.0], [75.1, 481.0], [75.2, 482.0], [75.3, 482.0], [75.4, 483.0], [75.5, 483.0], [75.6, 484.0], [75.7, 485.0], [75.8, 485.0], [75.9, 486.0], [76.0, 486.0], [76.1, 487.0], [76.2, 487.0], [76.3, 488.0], [76.4, 488.0], [76.5, 489.0], [76.6, 490.0], [76.7, 490.0], [76.8, 491.0], [76.9, 491.0], [77.0, 492.0], [77.1, 493.0], [77.2, 493.0], [77.3, 494.0], [77.4, 494.0], [77.5, 495.0], [77.6, 496.0], [77.7, 496.0], [77.8, 497.0], [77.9, 497.0], [78.0, 498.0], [78.1, 499.0], [78.2, 499.0], [78.3, 500.0], [78.4, 500.0], [78.5, 501.0], [78.6, 502.0], [78.7, 502.0], [78.8, 503.0], [78.9, 504.0], [79.0, 504.0], [79.1, 505.0], [79.2, 506.0], [79.3, 506.0], [79.4, 507.0], [79.5, 508.0], [79.6, 508.0], [79.7, 509.0], [79.8, 510.0], [79.9, 511.0], [80.0, 511.0], [80.1, 512.0], [80.2, 513.0], [80.3, 513.0], [80.4, 514.0], [80.5, 515.0], [80.6, 516.0], [80.7, 516.0], [80.8, 517.0], [80.9, 518.0], [81.0, 518.0], [81.1, 519.0], [81.2, 520.0], [81.3, 521.0], [81.4, 521.0], [81.5, 522.0], [81.6, 523.0], [81.7, 524.0], [81.8, 525.0], [81.9, 525.0], [82.0, 526.0], [82.1, 527.0], [82.2, 528.0], [82.3, 529.0], [82.4, 529.0], [82.5, 530.0], [82.6, 531.0], [82.7, 532.0], [82.8, 533.0], [82.9, 534.0], [83.0, 535.0], [83.1, 536.0], [83.2, 537.0], [83.3, 537.0], [83.4, 538.0], [83.5, 539.0], [83.6, 540.0], [83.7, 541.0], [83.8, 542.0], [83.9, 543.0], [84.0, 545.0], [84.1, 546.0], [84.2, 547.0], [84.3, 548.0], [84.4, 549.0], [84.5, 550.0], [84.6, 551.0], [84.7, 552.0], [84.8, 553.0], [84.9, 554.0], [85.0, 555.0], [85.1, 557.0], [85.2, 558.0], [85.3, 559.0], [85.4, 560.0], [85.5, 562.0], [85.6, 563.0], [85.7, 564.0], [85.8, 565.0], [85.9, 567.0], [86.0, 568.0], [86.1, 569.0], [86.2, 571.0], [86.3, 572.0], [86.4, 573.0], [86.5, 575.0], [86.6, 576.0], [86.7, 577.0], [86.8, 579.0], [86.9, 580.0], [87.0, 582.0], [87.1, 583.0], [87.2, 585.0], [87.3, 586.0], [87.4, 587.0], [87.5, 589.0], [87.6, 590.0], [87.7, 592.0], [87.8, 594.0], [87.9, 595.0], [88.0, 597.0], [88.1, 598.0], [88.2, 600.0], [88.3, 602.0], [88.4, 603.0], [88.5, 604.0], [88.6, 606.0], [88.7, 608.0], [88.8, 609.0], [88.9, 611.0], [89.0, 613.0], [89.1, 614.0], [89.2, 616.0], [89.3, 618.0], [89.4, 620.0], [89.5, 622.0], [89.6, 624.0], [89.7, 626.0], [89.8, 627.0], [89.9, 629.0], [90.0, 631.0], [90.1, 633.0], [90.2, 635.0], [90.3, 636.0], [90.4, 638.0], [90.5, 640.0], [90.6, 642.0], [90.7, 644.0], [90.8, 646.0], [90.9, 648.0], [91.0, 650.0], [91.1, 652.0], [91.2, 654.0], [91.3, 656.0], [91.4, 658.0], [91.5, 660.0], [91.6, 663.0], [91.7, 665.0], [91.8, 667.0], [91.9, 669.0], [92.0, 672.0], [92.1, 674.0], [92.2, 677.0], [92.3, 679.0], [92.4, 681.0], [92.5, 684.0], [92.6, 686.0], [92.7, 688.0], [92.8, 690.0], [92.9, 693.0], [93.0, 695.0], [93.1, 698.0], [93.2, 700.0], [93.3, 703.0], [93.4, 705.0], [93.5, 707.0], [93.6, 710.0], [93.7, 712.0], [93.8, 715.0], [93.9, 717.0], [94.0, 720.0], [94.1, 722.0], [94.2, 725.0], [94.3, 727.0], [94.4, 730.0], [94.5, 733.0], [94.6, 736.0], [94.7, 738.0], [94.8, 741.0], [94.9, 743.0], [95.0, 746.0], [95.1, 749.0], [95.2, 752.0], [95.3, 755.0], [95.4, 758.0], [95.5, 761.0], [95.6, 764.0], [95.7, 767.0], [95.8, 770.0], [95.9, 773.0], [96.0, 776.0], [96.1, 780.0], [96.2, 784.0], [96.3, 788.0], [96.4, 792.0], [96.5, 795.0], [96.6, 799.0], [96.7, 803.0], [96.8, 807.0], [96.9, 811.0], [97.0, 816.0], [97.1, 821.0], [97.2, 825.0], [97.3, 831.0], [97.4, 836.0], [97.5, 842.0], [97.6, 848.0], [97.7, 855.0], [97.8, 862.0], [97.9, 869.0], [98.0, 876.0], [98.1, 884.0], [98.2, 893.0], [98.3, 901.0], [98.4, 911.0], [98.5, 921.0], [98.6, 931.0], [98.7, 943.0], [98.8, 956.0], [98.9, 969.0], [99.0, 983.0], [99.1, 999.0], [99.2, 1016.0], [99.3, 1037.0], [99.4, 1060.0], [99.5, 1091.0], [99.6, 1133.0], [99.7, 1184.0], [99.8, 1281.0], [99.9, 1499.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 93370.0, "series": [{"data": [[0.0, 679.0], [600.0, 14432.0], [700.0, 9917.0], [800.0, 4816.0], [900.0, 2384.0], [1000.0, 1214.0], [1100.0, 549.0], [1200.0, 289.0], [1300.0, 157.0], [1400.0, 85.0], [1500.0, 87.0], [100.0, 16129.0], [1600.0, 59.0], [1700.0, 40.0], [1800.0, 22.0], [1900.0, 13.0], [2000.0, 15.0], [2100.0, 8.0], [2300.0, 3.0], [2200.0, 4.0], [2400.0, 2.0], [2500.0, 4.0], [2600.0, 2.0], [2700.0, 9.0], [2800.0, 5.0], [2900.0, 2.0], [3000.0, 3.0], [200.0, 45838.0], [3200.0, 2.0], [3500.0, 1.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4500.0, 1.0], [300.0, 93370.0], [5000.0, 1.0], [5300.0, 1.0], [5600.0, 1.0], [400.0, 69697.0], [500.0, 28565.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 288.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 226190.0, "series": [{"data": [[0.0, 226190.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 61931.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 288.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 140.15689981096403, "minX": 1.6202592E12, "maxY": 200.0, "series": [{"data": [[1.62025944E12, 200.0], [1.62025974E12, 200.0], [1.62025962E12, 200.0], [1.62025932E12, 200.0], [1.6202595E12, 200.0], [1.62025968E12, 200.0], [1.6202592E12, 140.15689981096403], [1.62025938E12, 200.0], [1.6202598E12, 199.2762789004186], [1.62025956E12, 200.0], [1.62025926E12, 200.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202598E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 23.0, "minX": 1.0, "maxY": 1350.6666666666665, "series": [{"data": [[2.0, 869.0], [3.0, 557.0], [4.0, 651.0], [5.0, 525.0], [7.0, 488.0], [9.0, 459.5], [10.0, 461.0], [11.0, 567.0], [13.0, 611.0], [14.0, 568.0], [16.0, 247.5], [18.0, 232.0], [20.0, 259.0], [23.0, 242.5], [24.0, 465.0], [25.0, 264.0], [26.0, 275.0], [27.0, 331.5], [28.0, 314.5], [29.0, 260.0], [31.0, 407.5], [33.0, 445.0], [32.0, 298.0], [35.0, 226.0], [34.0, 250.0], [36.0, 213.0], [39.0, 219.0], [38.0, 278.0], [41.0, 222.0], [42.0, 119.0], [43.0, 87.11111111111111], [45.0, 47.0], [44.0, 282.0], [47.0, 109.5], [46.0, 384.6666666666667], [48.0, 119.77777777777777], [49.0, 299.0], [50.0, 143.66666666666666], [51.0, 45.666666666666664], [52.0, 42.0], [53.0, 116.71428571428571], [54.0, 282.5], [55.0, 136.5], [56.0, 23.0], [57.0, 113.33333333333333], [58.0, 166.0], [59.0, 178.58333333333334], [60.0, 76.83333333333334], [62.0, 128.0], [63.0, 234.0], [64.0, 62.0], [65.0, 131.55555555555554], [66.0, 184.66666666666669], [67.0, 170.8], [68.0, 1350.6666666666665], [69.0, 70.5], [71.0, 195.0], [72.0, 205.0], [73.0, 100.10000000000001], [74.0, 145.0], [75.0, 205.0], [79.0, 227.0], [77.0, 308.5], [76.0, 256.0], [82.0, 206.33333333333334], [83.0, 107.62499999999999], [81.0, 335.0], [80.0, 514.5], [84.0, 114.76923076923076], [85.0, 125.375], [86.0, 136.0], [87.0, 122.0], [88.0, 178.0], [89.0, 129.0], [90.0, 131.6], [91.0, 186.0], [92.0, 140.16666666666666], [93.0, 148.66666666666666], [94.0, 146.5], [95.0, 173.5], [96.0, 213.0], [97.0, 158.0], [98.0, 111.57142857142857], [99.0, 187.33333333333331], [100.0, 141.5], [101.0, 141.25], [103.0, 95.66666666666667], [102.0, 378.3333333333333], [104.0, 107.0], [105.0, 237.42857142857142], [106.0, 148.83333333333334], [107.0, 171.85714285714286], [108.0, 231.66666666666669], [109.0, 200.66666666666666], [110.0, 127.0], [111.0, 228.6], [114.0, 227.0], [115.0, 128.6], [113.0, 293.0], [117.0, 218.0], [118.0, 273.0], [119.0, 212.75], [120.0, 178.0], [123.0, 342.0], [122.0, 336.3333333333333], [125.0, 218.0], [127.0, 318.5], [128.0, 198.5], [129.0, 225.0], [130.0, 167.0], [133.0, 230.0], [135.0, 233.5], [134.0, 314.0], [132.0, 326.0], [131.0, 321.0], [136.0, 233.5], [138.0, 258.25], [139.0, 252.0], [140.0, 268.25], [141.0, 248.4], [142.0, 260.5], [143.0, 247.33333333333334], [137.0, 547.0], [144.0, 281.6666666666667], [145.0, 244.0], [148.0, 309.5], [149.0, 314.5], [150.0, 377.0], [151.0, 404.0], [146.0, 300.3333333333333], [152.0, 273.0], [153.0, 277.25], [155.0, 355.2], [156.0, 208.0], [158.0, 343.8], [159.0, 266.8571428571429], [157.0, 389.0], [160.0, 292.6666666666667], [161.0, 248.5], [162.0, 470.0], [163.0, 350.0], [164.0, 352.0], [165.0, 368.0], [167.0, 318.0], [168.0, 342.4], [169.0, 280.0], [172.0, 322.0], [173.0, 319.0], [174.0, 301.0], [176.0, 357.6666666666667], [177.0, 347.1666666666667], [178.0, 310.4], [181.0, 339.3333333333333], [183.0, 327.3333333333333], [182.0, 275.6], [180.0, 397.66666666666663], [185.0, 336.25], [186.0, 353.0], [187.0, 275.0], [190.0, 352.1428571428571], [191.0, 354.0], [189.0, 347.0], [188.0, 304.6666666666667], [195.0, 368.6666666666667], [196.0, 341.3], [197.0, 329.25], [198.0, 372.33333333333337], [199.0, 287.8], [194.0, 250.0], [192.0, 306.0], [200.0, 416.1882719588027], [1.0, 1177.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[199.82131278843525, 415.8427545603629]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1393.0333333333333, "minX": 1.6202592E12, "maxY": 158708.58333333334, "series": [{"data": [[1.62025944E12, 158708.58333333334], [1.62025974E12, 153058.91666666666], [1.62025962E12, 146219.16666666666], [1.62025932E12, 142773.2], [1.6202595E12, 143080.68333333332], [1.62025968E12, 152981.5], [1.6202592E12, 2680.266666666667], [1.62025938E12, 137821.95], [1.6202598E12, 139023.56666666668], [1.62025956E12, 148261.58333333334], [1.62025926E12, 135310.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62025944E12, 82539.2], [1.62025974E12, 79632.0], [1.62025962E12, 76074.36666666667], [1.62025932E12, 74254.73333333334], [1.6202595E12, 74457.5], [1.62025968E12, 79581.96666666666], [1.6202592E12, 1393.0333333333333], [1.62025938E12, 71729.36666666667], [1.6202598E12, 72324.5], [1.62025956E12, 77114.53333333334], [1.62025926E12, 70375.83333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202598E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 215.80529300567125, "minX": 1.6202592E12, "maxY": 448.48486435921575, "series": [{"data": [[1.62025944E12, 382.9769971924412], [1.62025974E12, 396.70677910052956], [1.62025962E12, 415.6684897365783], [1.62025932E12, 425.60529115539964], [1.6202595E12, 423.88880636605086], [1.62025968E12, 396.78600972833584], [1.6202592E12, 215.80529300567125], [1.62025938E12, 440.54649583317905], [1.6202598E12, 431.1993446204263], [1.62025956E12, 409.89287665619304], [1.62025926E12, 448.48486435921575]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202598E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 215.65595463137996, "minX": 1.6202592E12, "maxY": 448.4562394761456, "series": [{"data": [[1.62025944E12, 382.9494640122512], [1.62025974E12, 396.67979497354713], [1.62025962E12, 415.63840908304445], [1.62025932E12, 425.577133130007], [1.6202595E12, 423.8598054818779], [1.62025968E12, 396.7585784719254], [1.6202592E12, 215.65595463137996], [1.62025938E12, 440.5136752450524], [1.6202598E12, 431.17363917713465], [1.62025956E12, 409.8601625460976], [1.62025926E12, 448.4562394761456]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202598E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017549111318989685, "minX": 1.6202592E12, "maxY": 2.7731568998109624, "series": [{"data": [[1.62025944E12, 0.025778458397141175], [1.62025974E12, 0.02652116402116395], [1.62025962E12, 0.03319602616913025], [1.62025932E12, 0.01844102418611237], [1.6202595E12, 0.03734748010610071], [1.62025968E12, 0.028390854041891372], [1.6202592E12, 2.7731568998109624], [1.62025938E12, 0.029296229670692866], [1.6202598E12, 0.02024394684143448], [1.62025956E12, 0.018610845512908057], [1.62025926E12, 0.017549111318989685]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202598E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.6202592E12, "maxY": 5653.0, "series": [{"data": [[1.62025944E12, 5380.0], [1.62025974E12, 2851.0], [1.62025962E12, 5653.0], [1.62025932E12, 4573.0], [1.6202595E12, 3279.0], [1.62025968E12, 4010.0], [1.6202592E12, 627.0], [1.62025938E12, 3206.0], [1.6202598E12, 3771.0], [1.62025956E12, 3998.0], [1.62025926E12, 5017.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62025944E12, 572.0], [1.62025974E12, 618.0], [1.62025962E12, 591.0], [1.62025932E12, 655.0], [1.6202595E12, 646.0], [1.62025968E12, 645.0], [1.6202592E12, 381.0], [1.62025938E12, 662.0], [1.6202598E12, 651.0], [1.62025956E12, 623.0], [1.62025926E12, 678.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62025944E12, 875.0], [1.62025974E12, 995.0], [1.62025962E12, 934.9900000000016], [1.62025932E12, 1007.0], [1.6202595E12, 991.0], [1.62025968E12, 1012.9900000000016], [1.6202592E12, 489.4000000000001], [1.62025938E12, 1013.9900000000016], [1.6202598E12, 989.0], [1.62025956E12, 952.0], [1.62025926E12, 1030.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62025944E12, 671.0], [1.62025974E12, 731.0], [1.62025962E12, 708.0], [1.62025932E12, 768.9500000000007], [1.6202595E12, 761.0], [1.62025968E12, 760.0], [1.6202592E12, 431.0], [1.62025938E12, 775.0], [1.6202598E12, 762.9500000000007], [1.62025956E12, 730.0], [1.62025926E12, 790.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62025944E12, 7.0], [1.62025974E12, 55.0], [1.62025962E12, 39.0], [1.62025932E12, 46.0], [1.6202595E12, 51.0], [1.62025968E12, 43.0], [1.6202592E12, 15.0], [1.62025938E12, 71.0], [1.6202598E12, 62.0], [1.62025956E12, 63.0], [1.62025926E12, 23.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62025944E12, 344.0], [1.62025974E12, 378.0], [1.62025962E12, 367.0], [1.62025932E12, 396.0], [1.6202595E12, 395.0], [1.62025968E12, 401.0], [1.6202592E12, 206.0], [1.62025938E12, 413.0], [1.6202598E12, 403.0], [1.62025956E12, 383.0], [1.62025926E12, 411.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202598E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 86.5, "minX": 40.0, "maxY": 497.0, "series": [{"data": [[40.0, 86.5], [93.0, 285.0], [345.0, 494.0], [338.0, 493.0], [353.0, 480.0], [354.0, 458.0], [367.0, 436.0], [364.0, 450.0], [366.0, 486.0], [358.0, 466.0], [352.0, 479.0], [370.0, 473.5], [371.0, 459.0], [380.0, 497.0], [373.0, 450.0], [372.0, 466.0], [378.0, 447.5], [379.0, 452.5], [376.0, 466.0], [383.0, 457.0], [382.0, 441.0], [381.0, 429.5], [369.0, 459.0], [374.0, 433.5], [377.0, 461.0], [385.0, 490.0], [384.0, 464.0], [386.0, 460.0], [391.0, 463.0], [397.0, 422.0], [396.0, 432.0], [387.0, 466.0], [395.0, 443.0], [392.0, 429.0], [393.0, 446.5], [394.0, 423.0], [399.0, 445.0], [388.0, 464.0], [390.0, 434.0], [389.0, 463.0], [413.0, 410.0], [406.0, 422.5], [405.0, 437.0], [404.0, 429.0], [403.0, 440.5], [402.0, 431.0], [412.0, 436.0], [414.0, 414.5], [407.0, 420.0], [400.0, 432.0], [401.0, 421.0], [411.0, 420.0], [410.0, 420.0], [415.0, 411.0], [408.0, 437.0], [409.0, 445.0], [419.0, 417.0], [417.0, 429.0], [423.0, 436.0], [416.0, 415.0], [418.0, 431.0], [422.0, 426.0], [421.0, 399.0], [427.0, 425.0], [426.0, 428.0], [425.0, 419.5], [424.0, 407.5], [429.0, 417.0], [428.0, 401.0], [435.0, 408.0], [440.0, 418.0], [436.0, 424.0], [437.0, 416.0], [441.0, 420.0], [442.0, 395.0], [438.0, 407.0], [446.0, 410.0], [444.0, 417.0], [445.0, 396.0], [447.0, 410.0], [434.0, 410.0], [433.0, 419.0], [432.0, 430.0], [451.0, 399.0], [455.0, 379.0], [454.0, 419.0], [457.0, 411.0], [449.0, 419.0], [448.0, 408.0], [461.0, 378.0], [456.0, 411.5], [463.0, 392.0], [462.0, 373.5], [460.0, 390.0], [459.0, 407.0], [458.0, 434.0], [453.0, 380.0], [450.0, 400.0], [465.0, 368.0], [478.0, 398.0], [471.0, 396.0], [475.0, 393.0], [474.0, 402.0], [479.0, 349.0], [472.0, 401.0], [473.0, 402.5], [467.0, 397.5], [464.0, 399.0], [476.0, 382.5], [477.0, 404.0], [469.0, 410.0], [468.0, 380.0], [482.0, 399.0], [489.0, 337.0], [488.0, 392.0], [485.0, 394.0], [484.0, 347.5], [486.0, 371.5], [481.0, 377.0], [490.0, 380.0], [491.0, 391.0], [487.0, 398.0], [480.0, 390.5], [494.0, 397.0], [495.0, 371.0], [499.0, 394.0], [502.0, 381.0], [501.0, 382.5], [504.0, 339.0], [511.0, 371.0], [508.0, 401.0], [506.0, 375.0], [507.0, 379.5], [505.0, 356.5], [498.0, 388.5], [503.0, 433.0], [497.0, 363.0], [500.0, 376.0], [536.0, 379.5], [542.0, 390.0], [517.0, 364.0], [516.0, 395.0], [518.0, 376.0], [519.0, 344.0], [529.0, 332.5], [534.0, 343.0], [535.0, 353.0], [531.0, 363.0], [532.0, 356.5], [513.0, 358.0], [524.0, 350.0], [523.0, 394.5], [520.0, 350.0], [525.0, 334.0], [543.0, 330.0], [528.0, 364.0], [526.0, 362.0], [512.0, 329.5], [540.0, 337.0], [541.0, 361.5], [537.0, 357.0], [539.0, 335.0], [572.0, 317.0], [563.0, 363.0], [564.0, 316.0], [562.0, 322.5], [561.0, 365.0], [566.0, 335.0], [567.0, 323.5], [565.0, 348.0], [560.0, 334.0], [574.0, 318.0], [547.0, 340.0], [573.0, 347.5], [550.0, 339.0], [551.0, 343.0], [571.0, 332.0], [570.0, 347.0], [553.0, 351.0], [552.0, 365.5], [554.0, 339.5], [546.0, 383.0], [544.0, 345.5], [559.0, 315.0], [556.0, 336.0], [558.0, 331.5], [555.0, 341.0], [579.0, 314.0], [599.0, 321.0], [588.0, 300.0], [587.0, 320.0], [586.0, 329.5], [584.0, 351.0], [585.0, 329.5], [597.0, 313.0], [591.0, 296.5], [577.0, 305.0], [578.0, 303.0], [576.0, 316.0], [605.0, 335.0], [602.0, 377.0], [604.0, 278.0], [593.0, 310.5], [595.0, 324.0], [594.0, 304.0], [590.0, 282.0], [582.0, 312.0], [580.0, 320.0], [583.0, 306.5], [589.0, 307.0], [612.0, 292.0], [631.0, 273.0], [628.0, 279.0], [616.0, 323.0], [635.0, 277.5], [639.0, 282.0], [611.0, 292.0], [617.0, 294.0], [633.0, 284.0], [610.0, 309.0], [623.0, 296.0], [608.0, 315.0], [618.0, 323.0], [645.0, 273.0], [661.0, 274.0], [649.0, 265.0], [663.0, 275.0], [670.0, 262.0], [660.0, 256.0], [648.0, 293.0], [651.0, 272.0], [667.0, 262.0], [662.0, 257.0], [672.0, 279.5], [679.0, 267.0], [683.0, 276.0], [673.0, 289.0], [689.0, 276.0], [686.0, 265.5], [677.0, 280.0], [727.0, 247.0], [724.0, 237.0], [747.0, 257.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 747.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 78.5, "minX": 40.0, "maxY": 497.0, "series": [{"data": [[40.0, 78.5], [93.0, 285.0], [345.0, 494.0], [338.0, 493.0], [353.0, 480.0], [354.0, 458.0], [367.0, 436.0], [364.0, 450.0], [366.0, 486.0], [358.0, 466.0], [352.0, 479.0], [370.0, 473.5], [371.0, 459.0], [380.0, 497.0], [373.0, 450.0], [372.0, 466.0], [378.0, 447.5], [379.0, 452.5], [376.0, 466.0], [383.0, 457.0], [382.0, 441.0], [381.0, 429.5], [369.0, 459.0], [374.0, 433.5], [377.0, 461.0], [385.0, 490.0], [384.0, 464.0], [386.0, 460.0], [391.0, 463.0], [397.0, 422.0], [396.0, 432.0], [387.0, 466.0], [395.0, 443.0], [392.0, 429.0], [393.0, 446.5], [394.0, 423.0], [399.0, 445.0], [388.0, 464.0], [390.0, 434.0], [389.0, 463.0], [413.0, 410.0], [406.0, 422.5], [405.0, 437.0], [404.0, 429.0], [403.0, 440.5], [402.0, 431.0], [412.0, 435.5], [414.0, 414.5], [407.0, 420.0], [400.0, 432.0], [401.0, 421.0], [411.0, 420.0], [410.0, 420.0], [415.0, 411.0], [408.0, 437.0], [409.0, 445.0], [419.0, 417.0], [417.0, 429.0], [423.0, 436.0], [416.0, 415.0], [418.0, 431.0], [422.0, 426.0], [421.0, 399.0], [427.0, 425.0], [426.0, 428.0], [425.0, 419.5], [424.0, 407.5], [429.0, 417.0], [428.0, 401.0], [435.0, 408.0], [440.0, 417.5], [436.0, 424.0], [437.0, 416.0], [441.0, 420.0], [442.0, 395.0], [438.0, 407.0], [446.0, 410.0], [444.0, 417.0], [445.0, 396.0], [447.0, 410.0], [434.0, 410.0], [433.0, 419.0], [432.0, 430.0], [451.0, 399.0], [455.0, 379.0], [454.0, 419.0], [457.0, 411.0], [449.0, 419.0], [448.0, 408.0], [461.0, 378.0], [456.0, 411.5], [463.0, 392.0], [462.0, 373.5], [460.0, 390.0], [459.0, 407.0], [458.0, 433.5], [453.0, 380.0], [450.0, 400.0], [465.0, 368.0], [478.0, 398.0], [471.0, 396.0], [475.0, 393.0], [474.0, 402.0], [479.0, 349.0], [472.0, 401.0], [473.0, 402.0], [467.0, 397.5], [464.0, 398.5], [476.0, 382.5], [477.0, 404.0], [469.0, 410.0], [468.0, 380.0], [482.0, 398.0], [489.0, 337.0], [488.0, 392.0], [485.0, 394.0], [484.0, 347.5], [486.0, 371.5], [481.0, 377.0], [490.0, 379.5], [491.0, 391.0], [487.0, 398.0], [480.0, 390.0], [494.0, 397.0], [495.0, 371.0], [499.0, 394.0], [502.0, 381.0], [501.0, 382.5], [504.0, 339.0], [511.0, 371.0], [508.0, 401.0], [506.0, 375.0], [507.0, 379.5], [505.0, 356.5], [498.0, 388.5], [503.0, 432.0], [497.0, 363.0], [500.0, 376.0], [536.0, 379.5], [542.0, 390.0], [517.0, 364.0], [516.0, 395.0], [518.0, 376.0], [519.0, 344.0], [529.0, 332.5], [534.0, 343.0], [535.0, 353.0], [531.0, 363.0], [532.0, 356.5], [513.0, 358.0], [524.0, 350.0], [523.0, 394.5], [520.0, 350.0], [525.0, 334.0], [543.0, 330.0], [528.0, 364.0], [526.0, 361.5], [512.0, 329.5], [540.0, 337.0], [541.0, 361.5], [537.0, 357.0], [539.0, 335.0], [572.0, 317.0], [563.0, 362.0], [564.0, 316.0], [562.0, 322.5], [561.0, 365.0], [566.0, 335.0], [567.0, 323.5], [565.0, 348.0], [560.0, 334.0], [574.0, 318.0], [547.0, 340.0], [573.0, 347.5], [550.0, 339.0], [551.0, 343.0], [571.0, 332.0], [570.0, 347.0], [553.0, 351.0], [552.0, 365.5], [554.0, 339.5], [546.0, 383.0], [544.0, 345.5], [559.0, 315.0], [556.0, 336.0], [558.0, 331.5], [555.0, 341.0], [579.0, 314.0], [599.0, 321.0], [588.0, 300.0], [587.0, 320.0], [586.0, 329.5], [584.0, 351.0], [585.0, 329.5], [597.0, 313.0], [591.0, 296.5], [577.0, 305.0], [578.0, 303.0], [576.0, 316.0], [605.0, 335.0], [602.0, 377.0], [604.0, 278.0], [593.0, 310.5], [595.0, 324.0], [594.0, 304.0], [590.0, 282.0], [582.0, 312.0], [580.0, 320.0], [583.0, 306.5], [589.0, 307.0], [612.0, 292.0], [631.0, 273.0], [628.0, 279.0], [616.0, 323.0], [635.0, 277.5], [639.0, 282.0], [611.0, 292.0], [617.0, 294.0], [633.0, 283.5], [610.0, 309.0], [623.0, 296.0], [608.0, 315.0], [618.0, 323.0], [645.0, 273.0], [661.0, 274.0], [649.0, 265.0], [663.0, 275.0], [670.0, 262.0], [660.0, 256.0], [648.0, 293.0], [651.0, 272.0], [667.0, 262.0], [662.0, 257.0], [672.0, 279.5], [679.0, 267.0], [683.0, 276.0], [673.0, 289.0], [689.0, 276.0], [686.0, 265.5], [677.0, 280.0], [727.0, 247.0], [724.0, 237.0], [747.0, 257.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 747.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.15, "minX": 1.6202592E12, "maxY": 522.4, "series": [{"data": [[1.62025944E12, 522.4], [1.62025974E12, 504.0], [1.62025962E12, 481.46666666666664], [1.62025932E12, 469.96666666666664], [1.6202595E12, 471.25], [1.62025968E12, 503.7], [1.6202592E12, 12.15], [1.62025938E12, 453.98333333333335], [1.6202598E12, 454.4166666666667], [1.62025956E12, 488.06666666666666], [1.62025926E12, 445.4166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202598E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.816666666666666, "minX": 1.6202592E12, "maxY": 522.4, "series": [{"data": [[1.62025944E12, 522.4], [1.62025974E12, 504.0], [1.62025962E12, 481.48333333333335], [1.62025932E12, 469.96666666666664], [1.6202595E12, 471.25], [1.62025968E12, 503.68333333333334], [1.6202592E12, 8.816666666666666], [1.62025938E12, 453.98333333333335], [1.6202598E12, 457.75], [1.62025956E12, 488.06666666666666], [1.62025926E12, 445.4166666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6202598E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.816666666666666, "minX": 1.6202592E12, "maxY": 522.4, "series": [{"data": [[1.62025944E12, 522.4], [1.62025974E12, 504.0], [1.62025962E12, 481.48333333333335], [1.62025932E12, 469.96666666666664], [1.6202595E12, 471.25], [1.62025968E12, 503.68333333333334], [1.6202592E12, 8.816666666666666], [1.62025938E12, 453.98333333333335], [1.6202598E12, 457.75], [1.62025956E12, 488.06666666666666], [1.62025926E12, 445.4166666666667]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202598E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.816666666666666, "minX": 1.6202592E12, "maxY": 522.4, "series": [{"data": [[1.62025944E12, 522.4], [1.62025974E12, 504.0], [1.62025962E12, 481.48333333333335], [1.62025932E12, 469.96666666666664], [1.6202595E12, 471.25], [1.62025968E12, 503.68333333333334], [1.6202592E12, 8.816666666666666], [1.62025938E12, 453.98333333333335], [1.6202598E12, 457.75], [1.62025956E12, 488.06666666666666], [1.62025926E12, 445.4166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6202598E12, "title": "Total Transactions Per Second"}},
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

