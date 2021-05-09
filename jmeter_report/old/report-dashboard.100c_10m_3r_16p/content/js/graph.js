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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 1872.0, "series": [{"data": [[0.0, 15.0], [0.1, 23.0], [0.2, 25.0], [0.3, 26.0], [0.4, 27.0], [0.5, 28.0], [0.6, 29.0], [0.7, 30.0], [0.8, 31.0], [0.9, 32.0], [1.0, 34.0], [1.1, 36.0], [1.2, 40.0], [1.3, 160.0], [1.4, 165.0], [1.5, 167.0], [1.6, 169.0], [1.7, 170.0], [1.8, 171.0], [1.9, 172.0], [2.0, 172.0], [2.1, 173.0], [2.2, 174.0], [2.3, 174.0], [2.4, 175.0], [2.5, 175.0], [2.6, 176.0], [2.7, 176.0], [2.8, 177.0], [2.9, 177.0], [3.0, 177.0], [3.1, 178.0], [3.2, 178.0], [3.3, 178.0], [3.4, 179.0], [3.5, 179.0], [3.6, 179.0], [3.7, 180.0], [3.8, 180.0], [3.9, 180.0], [4.0, 181.0], [4.1, 181.0], [4.2, 181.0], [4.3, 181.0], [4.4, 182.0], [4.5, 182.0], [4.6, 182.0], [4.7, 182.0], [4.8, 183.0], [4.9, 183.0], [5.0, 183.0], [5.1, 183.0], [5.2, 184.0], [5.3, 184.0], [5.4, 184.0], [5.5, 184.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 186.0], [6.2, 186.0], [6.3, 186.0], [6.4, 186.0], [6.5, 186.0], [6.6, 187.0], [6.7, 187.0], [6.8, 187.0], [6.9, 187.0], [7.0, 187.0], [7.1, 187.0], [7.2, 188.0], [7.3, 188.0], [7.4, 188.0], [7.5, 188.0], [7.6, 188.0], [7.7, 189.0], [7.8, 189.0], [7.9, 189.0], [8.0, 189.0], [8.1, 189.0], [8.2, 189.0], [8.3, 190.0], [8.4, 190.0], [8.5, 190.0], [8.6, 190.0], [8.7, 190.0], [8.8, 191.0], [8.9, 191.0], [9.0, 191.0], [9.1, 191.0], [9.2, 191.0], [9.3, 191.0], [9.4, 192.0], [9.5, 192.0], [9.6, 192.0], [9.7, 192.0], [9.8, 192.0], [9.9, 192.0], [10.0, 193.0], [10.1, 193.0], [10.2, 193.0], [10.3, 193.0], [10.4, 193.0], [10.5, 193.0], [10.6, 193.0], [10.7, 194.0], [10.8, 194.0], [10.9, 194.0], [11.0, 194.0], [11.1, 194.0], [11.2, 194.0], [11.3, 195.0], [11.4, 195.0], [11.5, 195.0], [11.6, 195.0], [11.7, 195.0], [11.8, 195.0], [11.9, 195.0], [12.0, 196.0], [12.1, 196.0], [12.2, 196.0], [12.3, 196.0], [12.4, 196.0], [12.5, 196.0], [12.6, 197.0], [12.7, 197.0], [12.8, 197.0], [12.9, 197.0], [13.0, 197.0], [13.1, 197.0], [13.2, 197.0], [13.3, 198.0], [13.4, 198.0], [13.5, 198.0], [13.6, 198.0], [13.7, 198.0], [13.8, 198.0], [13.9, 199.0], [14.0, 199.0], [14.1, 199.0], [14.2, 199.0], [14.3, 199.0], [14.4, 199.0], [14.5, 199.0], [14.6, 200.0], [14.7, 200.0], [14.8, 200.0], [14.9, 200.0], [15.0, 200.0], [15.1, 200.0], [15.2, 201.0], [15.3, 201.0], [15.4, 201.0], [15.5, 201.0], [15.6, 201.0], [15.7, 201.0], [15.8, 202.0], [15.9, 202.0], [16.0, 202.0], [16.1, 202.0], [16.2, 202.0], [16.3, 202.0], [16.4, 203.0], [16.5, 203.0], [16.6, 203.0], [16.7, 203.0], [16.8, 203.0], [16.9, 203.0], [17.0, 204.0], [17.1, 204.0], [17.2, 204.0], [17.3, 204.0], [17.4, 204.0], [17.5, 205.0], [17.6, 205.0], [17.7, 205.0], [17.8, 205.0], [17.9, 205.0], [18.0, 205.0], [18.1, 206.0], [18.2, 206.0], [18.3, 206.0], [18.4, 206.0], [18.5, 206.0], [18.6, 207.0], [18.7, 207.0], [18.8, 207.0], [18.9, 207.0], [19.0, 207.0], [19.1, 207.0], [19.2, 208.0], [19.3, 208.0], [19.4, 208.0], [19.5, 208.0], [19.6, 208.0], [19.7, 209.0], [19.8, 209.0], [19.9, 209.0], [20.0, 209.0], [20.1, 209.0], [20.2, 210.0], [20.3, 210.0], [20.4, 210.0], [20.5, 210.0], [20.6, 210.0], [20.7, 211.0], [20.8, 211.0], [20.9, 211.0], [21.0, 211.0], [21.1, 211.0], [21.2, 212.0], [21.3, 212.0], [21.4, 212.0], [21.5, 212.0], [21.6, 213.0], [21.7, 213.0], [21.8, 213.0], [21.9, 213.0], [22.0, 214.0], [22.1, 214.0], [22.2, 214.0], [22.3, 214.0], [22.4, 215.0], [22.5, 215.0], [22.6, 215.0], [22.7, 215.0], [22.8, 216.0], [22.9, 216.0], [23.0, 216.0], [23.1, 216.0], [23.2, 217.0], [23.3, 217.0], [23.4, 217.0], [23.5, 218.0], [23.6, 218.0], [23.7, 218.0], [23.8, 219.0], [23.9, 219.0], [24.0, 219.0], [24.1, 219.0], [24.2, 220.0], [24.3, 220.0], [24.4, 220.0], [24.5, 221.0], [24.6, 221.0], [24.7, 221.0], [24.8, 222.0], [24.9, 222.0], [25.0, 223.0], [25.1, 223.0], [25.2, 223.0], [25.3, 224.0], [25.4, 224.0], [25.5, 225.0], [25.6, 225.0], [25.7, 226.0], [25.8, 226.0], [25.9, 227.0], [26.0, 227.0], [26.1, 228.0], [26.2, 228.0], [26.3, 229.0], [26.4, 229.0], [26.5, 230.0], [26.6, 231.0], [26.7, 231.0], [26.8, 232.0], [26.9, 233.0], [27.0, 234.0], [27.1, 235.0], [27.2, 236.0], [27.3, 238.0], [27.4, 239.0], [27.5, 241.0], [27.6, 243.0], [27.7, 246.0], [27.8, 252.0], [27.9, 290.0], [28.0, 314.0], [28.1, 317.0], [28.2, 320.0], [28.3, 322.0], [28.4, 323.0], [28.5, 324.0], [28.6, 325.0], [28.7, 326.0], [28.8, 327.0], [28.9, 327.0], [29.0, 328.0], [29.1, 329.0], [29.2, 329.0], [29.3, 330.0], [29.4, 331.0], [29.5, 331.0], [29.6, 332.0], [29.7, 332.0], [29.8, 333.0], [29.9, 333.0], [30.0, 334.0], [30.1, 334.0], [30.2, 335.0], [30.3, 335.0], [30.4, 335.0], [30.5, 336.0], [30.6, 336.0], [30.7, 337.0], [30.8, 337.0], [30.9, 337.0], [31.0, 337.0], [31.1, 338.0], [31.2, 338.0], [31.3, 338.0], [31.4, 339.0], [31.5, 339.0], [31.6, 339.0], [31.7, 339.0], [31.8, 340.0], [31.9, 340.0], [32.0, 340.0], [32.1, 341.0], [32.2, 341.0], [32.3, 341.0], [32.4, 341.0], [32.5, 342.0], [32.6, 342.0], [32.7, 342.0], [32.8, 342.0], [32.9, 343.0], [33.0, 343.0], [33.1, 343.0], [33.2, 343.0], [33.3, 343.0], [33.4, 344.0], [33.5, 344.0], [33.6, 344.0], [33.7, 344.0], [33.8, 345.0], [33.9, 345.0], [34.0, 345.0], [34.1, 345.0], [34.2, 345.0], [34.3, 346.0], [34.4, 346.0], [34.5, 346.0], [34.6, 346.0], [34.7, 346.0], [34.8, 347.0], [34.9, 347.0], [35.0, 347.0], [35.1, 347.0], [35.2, 347.0], [35.3, 347.0], [35.4, 348.0], [35.5, 348.0], [35.6, 348.0], [35.7, 348.0], [35.8, 348.0], [35.9, 348.0], [36.0, 349.0], [36.1, 349.0], [36.2, 349.0], [36.3, 349.0], [36.4, 349.0], [36.5, 350.0], [36.6, 350.0], [36.7, 350.0], [36.8, 350.0], [36.9, 350.0], [37.0, 350.0], [37.1, 351.0], [37.2, 351.0], [37.3, 351.0], [37.4, 351.0], [37.5, 351.0], [37.6, 351.0], [37.7, 352.0], [37.8, 352.0], [37.9, 352.0], [38.0, 352.0], [38.1, 352.0], [38.2, 352.0], [38.3, 352.0], [38.4, 353.0], [38.5, 353.0], [38.6, 353.0], [38.7, 353.0], [38.8, 353.0], [38.9, 353.0], [39.0, 353.0], [39.1, 354.0], [39.2, 354.0], [39.3, 354.0], [39.4, 354.0], [39.5, 354.0], [39.6, 354.0], [39.7, 354.0], [39.8, 355.0], [39.9, 355.0], [40.0, 355.0], [40.1, 355.0], [40.2, 355.0], [40.3, 355.0], [40.4, 355.0], [40.5, 356.0], [40.6, 356.0], [40.7, 356.0], [40.8, 356.0], [40.9, 356.0], [41.0, 356.0], [41.1, 356.0], [41.2, 357.0], [41.3, 357.0], [41.4, 357.0], [41.5, 357.0], [41.6, 357.0], [41.7, 357.0], [41.8, 357.0], [41.9, 358.0], [42.0, 358.0], [42.1, 358.0], [42.2, 358.0], [42.3, 358.0], [42.4, 358.0], [42.5, 358.0], [42.6, 359.0], [42.7, 359.0], [42.8, 359.0], [42.9, 359.0], [43.0, 359.0], [43.1, 359.0], [43.2, 359.0], [43.3, 360.0], [43.4, 360.0], [43.5, 360.0], [43.6, 360.0], [43.7, 360.0], [43.8, 360.0], [43.9, 360.0], [44.0, 360.0], [44.1, 361.0], [44.2, 361.0], [44.3, 361.0], [44.4, 361.0], [44.5, 361.0], [44.6, 361.0], [44.7, 361.0], [44.8, 362.0], [44.9, 362.0], [45.0, 362.0], [45.1, 362.0], [45.2, 362.0], [45.3, 362.0], [45.4, 362.0], [45.5, 362.0], [45.6, 363.0], [45.7, 363.0], [45.8, 363.0], [45.9, 363.0], [46.0, 363.0], [46.1, 363.0], [46.2, 363.0], [46.3, 363.0], [46.4, 364.0], [46.5, 364.0], [46.6, 364.0], [46.7, 364.0], [46.8, 364.0], [46.9, 364.0], [47.0, 364.0], [47.1, 365.0], [47.2, 365.0], [47.3, 365.0], [47.4, 365.0], [47.5, 365.0], [47.6, 365.0], [47.7, 365.0], [47.8, 366.0], [47.9, 366.0], [48.0, 366.0], [48.1, 366.0], [48.2, 366.0], [48.3, 366.0], [48.4, 366.0], [48.5, 366.0], [48.6, 367.0], [48.7, 367.0], [48.8, 367.0], [48.9, 367.0], [49.0, 367.0], [49.1, 367.0], [49.2, 367.0], [49.3, 367.0], [49.4, 368.0], [49.5, 368.0], [49.6, 368.0], [49.7, 368.0], [49.8, 368.0], [49.9, 368.0], [50.0, 368.0], [50.1, 369.0], [50.2, 369.0], [50.3, 369.0], [50.4, 369.0], [50.5, 369.0], [50.6, 369.0], [50.7, 369.0], [50.8, 369.0], [50.9, 370.0], [51.0, 370.0], [51.1, 370.0], [51.2, 370.0], [51.3, 370.0], [51.4, 370.0], [51.5, 370.0], [51.6, 371.0], [51.7, 371.0], [51.8, 371.0], [51.9, 371.0], [52.0, 371.0], [52.1, 371.0], [52.2, 371.0], [52.3, 371.0], [52.4, 372.0], [52.5, 372.0], [52.6, 372.0], [52.7, 372.0], [52.8, 372.0], [52.9, 372.0], [53.0, 372.0], [53.1, 373.0], [53.2, 373.0], [53.3, 373.0], [53.4, 373.0], [53.5, 373.0], [53.6, 373.0], [53.7, 374.0], [53.8, 374.0], [53.9, 374.0], [54.0, 374.0], [54.1, 374.0], [54.2, 374.0], [54.3, 374.0], [54.4, 375.0], [54.5, 375.0], [54.6, 375.0], [54.7, 375.0], [54.8, 375.0], [54.9, 375.0], [55.0, 375.0], [55.1, 376.0], [55.2, 376.0], [55.3, 376.0], [55.4, 376.0], [55.5, 376.0], [55.6, 376.0], [55.7, 376.0], [55.8, 377.0], [55.9, 377.0], [56.0, 377.0], [56.1, 377.0], [56.2, 377.0], [56.3, 377.0], [56.4, 378.0], [56.5, 378.0], [56.6, 378.0], [56.7, 378.0], [56.8, 378.0], [56.9, 378.0], [57.0, 378.0], [57.1, 379.0], [57.2, 379.0], [57.3, 379.0], [57.4, 379.0], [57.5, 379.0], [57.6, 379.0], [57.7, 379.0], [57.8, 380.0], [57.9, 380.0], [58.0, 380.0], [58.1, 380.0], [58.2, 380.0], [58.3, 380.0], [58.4, 380.0], [58.5, 381.0], [58.6, 381.0], [58.7, 381.0], [58.8, 381.0], [58.9, 381.0], [59.0, 381.0], [59.1, 382.0], [59.2, 382.0], [59.3, 382.0], [59.4, 382.0], [59.5, 382.0], [59.6, 382.0], [59.7, 382.0], [59.8, 383.0], [59.9, 383.0], [60.0, 383.0], [60.1, 383.0], [60.2, 383.0], [60.3, 383.0], [60.4, 383.0], [60.5, 384.0], [60.6, 384.0], [60.7, 384.0], [60.8, 384.0], [60.9, 384.0], [61.0, 384.0], [61.1, 385.0], [61.2, 385.0], [61.3, 385.0], [61.4, 385.0], [61.5, 385.0], [61.6, 385.0], [61.7, 386.0], [61.8, 386.0], [61.9, 386.0], [62.0, 386.0], [62.1, 386.0], [62.2, 386.0], [62.3, 387.0], [62.4, 387.0], [62.5, 387.0], [62.6, 387.0], [62.7, 387.0], [62.8, 387.0], [62.9, 388.0], [63.0, 388.0], [63.1, 388.0], [63.2, 388.0], [63.3, 388.0], [63.4, 388.0], [63.5, 389.0], [63.6, 389.0], [63.7, 389.0], [63.8, 389.0], [63.9, 389.0], [64.0, 390.0], [64.1, 390.0], [64.2, 390.0], [64.3, 390.0], [64.4, 390.0], [64.5, 390.0], [64.6, 391.0], [64.7, 391.0], [64.8, 391.0], [64.9, 391.0], [65.0, 391.0], [65.1, 391.0], [65.2, 392.0], [65.3, 392.0], [65.4, 392.0], [65.5, 392.0], [65.6, 392.0], [65.7, 392.0], [65.8, 393.0], [65.9, 393.0], [66.0, 393.0], [66.1, 393.0], [66.2, 393.0], [66.3, 393.0], [66.4, 394.0], [66.5, 394.0], [66.6, 394.0], [66.7, 394.0], [66.8, 394.0], [66.9, 395.0], [67.0, 395.0], [67.1, 395.0], [67.2, 395.0], [67.3, 395.0], [67.4, 395.0], [67.5, 396.0], [67.6, 396.0], [67.7, 396.0], [67.8, 396.0], [67.9, 396.0], [68.0, 397.0], [68.1, 397.0], [68.2, 397.0], [68.3, 397.0], [68.4, 398.0], [68.5, 398.0], [68.6, 398.0], [68.7, 398.0], [68.8, 398.0], [68.9, 398.0], [69.0, 399.0], [69.1, 399.0], [69.2, 399.0], [69.3, 399.0], [69.4, 400.0], [69.5, 400.0], [69.6, 400.0], [69.7, 400.0], [69.8, 400.0], [69.9, 401.0], [70.0, 401.0], [70.1, 401.0], [70.2, 401.0], [70.3, 402.0], [70.4, 402.0], [70.5, 402.0], [70.6, 402.0], [70.7, 403.0], [70.8, 403.0], [70.9, 403.0], [71.0, 403.0], [71.1, 404.0], [71.2, 404.0], [71.3, 404.0], [71.4, 404.0], [71.5, 405.0], [71.6, 405.0], [71.7, 405.0], [71.8, 405.0], [71.9, 406.0], [72.0, 406.0], [72.1, 406.0], [72.2, 406.0], [72.3, 407.0], [72.4, 407.0], [72.5, 407.0], [72.6, 408.0], [72.7, 408.0], [72.8, 408.0], [72.9, 409.0], [73.0, 409.0], [73.1, 409.0], [73.2, 410.0], [73.3, 410.0], [73.4, 410.0], [73.5, 410.0], [73.6, 411.0], [73.7, 411.0], [73.8, 412.0], [73.9, 412.0], [74.0, 412.0], [74.1, 413.0], [74.2, 413.0], [74.3, 414.0], [74.4, 414.0], [74.5, 414.0], [74.6, 415.0], [74.7, 415.0], [74.8, 416.0], [74.9, 416.0], [75.0, 417.0], [75.1, 417.0], [75.2, 418.0], [75.3, 418.0], [75.4, 419.0], [75.5, 420.0], [75.6, 420.0], [75.7, 421.0], [75.8, 421.0], [75.9, 422.0], [76.0, 422.0], [76.1, 423.0], [76.2, 424.0], [76.3, 424.0], [76.4, 425.0], [76.5, 426.0], [76.6, 427.0], [76.7, 428.0], [76.8, 429.0], [76.9, 430.0], [77.0, 432.0], [77.1, 433.0], [77.2, 434.0], [77.3, 436.0], [77.4, 437.0], [77.5, 439.0], [77.6, 442.0], [77.7, 445.0], [77.8, 451.0], [77.9, 461.0], [78.0, 470.0], [78.1, 474.0], [78.2, 477.0], [78.3, 481.0], [78.4, 483.0], [78.5, 485.0], [78.6, 487.0], [78.7, 489.0], [78.8, 490.0], [78.9, 492.0], [79.0, 493.0], [79.1, 494.0], [79.2, 496.0], [79.3, 497.0], [79.4, 498.0], [79.5, 499.0], [79.6, 500.0], [79.7, 501.0], [79.8, 502.0], [79.9, 503.0], [80.0, 503.0], [80.1, 504.0], [80.2, 505.0], [80.3, 506.0], [80.4, 507.0], [80.5, 507.0], [80.6, 508.0], [80.7, 509.0], [80.8, 509.0], [80.9, 510.0], [81.0, 511.0], [81.1, 511.0], [81.2, 512.0], [81.3, 513.0], [81.4, 513.0], [81.5, 514.0], [81.6, 515.0], [81.7, 515.0], [81.8, 516.0], [81.9, 516.0], [82.0, 517.0], [82.1, 518.0], [82.2, 518.0], [82.3, 519.0], [82.4, 520.0], [82.5, 520.0], [82.6, 521.0], [82.7, 521.0], [82.8, 522.0], [82.9, 523.0], [83.0, 523.0], [83.1, 524.0], [83.2, 524.0], [83.3, 525.0], [83.4, 526.0], [83.5, 526.0], [83.6, 527.0], [83.7, 527.0], [83.8, 528.0], [83.9, 528.0], [84.0, 529.0], [84.1, 529.0], [84.2, 530.0], [84.3, 530.0], [84.4, 531.0], [84.5, 532.0], [84.6, 532.0], [84.7, 533.0], [84.8, 533.0], [84.9, 534.0], [85.0, 534.0], [85.1, 535.0], [85.2, 535.0], [85.3, 536.0], [85.4, 536.0], [85.5, 537.0], [85.6, 537.0], [85.7, 538.0], [85.8, 538.0], [85.9, 539.0], [86.0, 539.0], [86.1, 540.0], [86.2, 540.0], [86.3, 541.0], [86.4, 542.0], [86.5, 542.0], [86.6, 543.0], [86.7, 543.0], [86.8, 544.0], [86.9, 544.0], [87.0, 545.0], [87.1, 546.0], [87.2, 546.0], [87.3, 547.0], [87.4, 547.0], [87.5, 548.0], [87.6, 549.0], [87.7, 549.0], [87.8, 550.0], [87.9, 551.0], [88.0, 551.0], [88.1, 552.0], [88.2, 552.0], [88.3, 553.0], [88.4, 554.0], [88.5, 554.0], [88.6, 555.0], [88.7, 556.0], [88.8, 556.0], [88.9, 557.0], [89.0, 558.0], [89.1, 558.0], [89.2, 559.0], [89.3, 559.0], [89.4, 560.0], [89.5, 561.0], [89.6, 562.0], [89.7, 562.0], [89.8, 563.0], [89.9, 564.0], [90.0, 564.0], [90.1, 565.0], [90.2, 566.0], [90.3, 566.0], [90.4, 567.0], [90.5, 568.0], [90.6, 569.0], [90.7, 569.0], [90.8, 570.0], [90.9, 571.0], [91.0, 572.0], [91.1, 573.0], [91.2, 574.0], [91.3, 574.0], [91.4, 575.0], [91.5, 576.0], [91.6, 577.0], [91.7, 578.0], [91.8, 579.0], [91.9, 580.0], [92.0, 581.0], [92.1, 582.0], [92.2, 583.0], [92.3, 584.0], [92.4, 585.0], [92.5, 586.0], [92.6, 587.0], [92.7, 589.0], [92.8, 590.0], [92.9, 591.0], [93.0, 593.0], [93.1, 595.0], [93.2, 596.0], [93.3, 598.0], [93.4, 600.0], [93.5, 602.0], [93.6, 604.0], [93.7, 606.0], [93.8, 608.0], [93.9, 611.0], [94.0, 614.0], [94.1, 617.0], [94.2, 621.0], [94.3, 624.0], [94.4, 628.0], [94.5, 634.0], [94.6, 640.0], [94.7, 647.0], [94.8, 652.0], [94.9, 657.0], [95.0, 661.0], [95.1, 665.0], [95.2, 668.0], [95.3, 671.0], [95.4, 674.0], [95.5, 678.0], [95.6, 681.0], [95.7, 684.0], [95.8, 687.0], [95.9, 690.0], [96.0, 693.0], [96.1, 696.0], [96.2, 699.0], [96.3, 702.0], [96.4, 705.0], [96.5, 708.0], [96.6, 710.0], [96.7, 713.0], [96.8, 715.0], [96.9, 718.0], [97.0, 721.0], [97.1, 724.0], [97.2, 727.0], [97.3, 730.0], [97.4, 733.0], [97.5, 736.0], [97.6, 739.0], [97.7, 743.0], [97.8, 747.0], [97.9, 750.0], [98.0, 755.0], [98.1, 760.0], [98.2, 766.0], [98.3, 772.0], [98.4, 780.0], [98.5, 789.0], [98.6, 799.0], [98.7, 809.0], [98.8, 820.0], [98.9, 834.0], [99.0, 846.0], [99.1, 859.0], [99.2, 872.0], [99.3, 887.0], [99.4, 902.0], [99.5, 919.0], [99.6, 942.0], [99.7, 975.0], [99.8, 1018.0], [99.9, 1092.0], [100.0, 1872.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 66571.0, "series": [{"data": [[0.0, 1995.0], [600.0, 4553.0], [700.0, 3827.0], [200.0, 21549.0], [800.0, 1241.0], [900.0, 614.0], [1000.0, 232.0], [1100.0, 83.0], [300.0, 66571.0], [1200.0, 38.0], [1300.0, 20.0], [1400.0, 5.0], [1500.0, 3.0], [400.0, 16414.0], [100.0, 21313.0], [1600.0, 2.0], [1800.0, 1.0], [500.0, 22224.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 128017.0, "series": [{"data": [[0.0, 128017.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 32662.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 86.84895833333337, "minX": 1.61850096E12, "maxY": 100.0, "series": [{"data": [[1.61850132E12, 100.0], [1.6185015E12, 100.0], [1.61850102E12, 100.0], [1.61850144E12, 100.0], [1.61850096E12, 86.84895833333337], [1.61850114E12, 100.0], [1.61850156E12, 99.6919056803335], [1.61850108E12, 100.0], [1.61850126E12, 100.0], [1.6185012E12, 100.0], [1.61850138E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61850156E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 154.0, "minX": 1.0, "maxY": 838.0, "series": [{"data": [[2.0, 514.0], [3.0, 377.0], [4.0, 421.0], [5.0, 409.0], [6.0, 424.0], [8.0, 513.0], [9.0, 290.0], [11.0, 434.5], [12.0, 597.0], [13.0, 289.0], [14.0, 458.0], [17.0, 359.0], [19.0, 379.5], [20.0, 299.0], [22.0, 307.5], [23.0, 311.0], [24.0, 308.0], [25.0, 316.0], [26.0, 318.0], [27.0, 467.0], [28.0, 320.0], [29.0, 319.0], [30.0, 316.0], [31.0, 319.0], [33.0, 328.0], [32.0, 475.0], [35.0, 329.0], [34.0, 338.0], [37.0, 488.0], [36.0, 325.0], [39.0, 343.0], [38.0, 837.0], [40.0, 276.0], [41.0, 291.6666666666667], [42.0, 283.0], [43.0, 228.2], [45.0, 350.0], [44.0, 838.0], [46.0, 243.66666666666666], [47.0, 342.0], [49.0, 274.6666666666667], [48.0, 353.0], [50.0, 335.5], [51.0, 419.0], [53.0, 201.0], [52.0, 196.0], [54.0, 453.0], [55.0, 154.0], [57.0, 276.5], [56.0, 739.0], [58.0, 237.75], [59.0, 364.0], [61.0, 172.0], [60.0, 352.0], [62.0, 387.0], [63.0, 299.4], [64.0, 416.66666666666663], [65.0, 356.3333333333333], [67.0, 349.0], [66.0, 350.0], [68.0, 321.8], [70.0, 287.5], [71.0, 500.0], [69.0, 351.0], [72.0, 172.0], [73.0, 326.0], [74.0, 304.125], [75.0, 354.0], [78.0, 550.0], [79.0, 354.8], [77.0, 364.0], [76.0, 512.0], [80.0, 258.0], [82.0, 240.5], [83.0, 226.0], [81.0, 272.0], [84.0, 413.2], [85.0, 399.0], [86.0, 294.4], [87.0, 225.0], [88.0, 225.57142857142858], [89.0, 262.0], [90.0, 345.0], [91.0, 399.75], [95.0, 513.0], [94.0, 188.0], [93.0, 187.0], [92.0, 493.0], [99.0, 352.7142857142857], [98.0, 314.25], [97.0, 350.5], [96.0, 347.0], [100.0, 373.22560485503647], [1.0, 326.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}, {"data": [[99.9534679652724, 373.18363257304424]], "isOverall": false, "label": "AuthzRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 505.6, "minX": 1.61850096E12, "maxY": 82558.83333333333, "series": [{"data": [[1.61850132E12, 80102.21666666666], [1.6185015E12, 80643.33333333333], [1.61850102E12, 81509.8], [1.61850144E12, 80554.6], [1.61850096E12, 972.8], [1.61850114E12, 82558.83333333333], [1.61850156E12, 81356.78333333334], [1.61850108E12, 81319.6], [1.61850126E12, 81799.98333333334], [1.6185012E12, 81623.36666666667], [1.61850138E12, 80939.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61850132E12, 41661.96666666667], [1.6185015E12, 41959.53333333333], [1.61850102E12, 42388.76666666667], [1.61850144E12, 41896.333333333336], [1.61850096E12, 505.6], [1.61850114E12, 42936.5], [1.61850156E12, 42325.566666666666], [1.61850108E12, 42315.03333333333], [1.61850126E12, 42559.933333333334], [1.6185012E12, 42470.4], [1.61850138E12, 42117.53333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61850156E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 366.8747589124603, "minX": 1.61850096E12, "maxY": 379.21098539915226, "series": [{"data": [[1.61850132E12, 379.21098539915226], [1.6185015E12, 376.2714949165329], [1.61850102E12, 373.082313474562], [1.61850144E12, 377.20383406662387], [1.61850096E12, 368.7291666666667], [1.61850114E12, 367.6510886231217], [1.61850156E12, 366.8747589124603], [1.61850108E12, 373.47308482170627], [1.61850126E12, 370.9985769087987], [1.6185012E12, 372.25582837301636], [1.61850138E12, 375.134487932976]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61850156E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 366.84981024077643, "minX": 1.61850096E12, "maxY": 379.19290816004235, "series": [{"data": [[1.61850132E12, 379.19290816004235], [1.6185015E12, 376.24996862056173], [1.61850102E12, 373.05553829906034], [1.61850144E12, 377.18321810182357], [1.61850096E12, 368.3854166666668], [1.61850114E12, 367.63005213124757], [1.61850156E12, 366.84981024077643], [1.61850108E12, 373.4526728483424], [1.61850126E12, 370.98180918203303], [1.6185012E12, 372.2373511904758], [1.61850138E12, 375.1139177191441]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61850156E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014102006585077966, "minX": 1.61850096E12, "maxY": 5.500000000000002, "series": [{"data": [[1.61850132E12, 0.01725554642563679], [1.6185015E12, 0.023973892305761288], [1.61850102E12, 0.014102006585077966], [1.61850144E12, 0.01489629164047765], [1.61850096E12, 5.500000000000002], [1.61850114E12, 0.017724624348359395], [1.61850156E12, 0.029241585267218366], [1.61850108E12, 0.027444147115564067], [1.61850126E12, 0.02295507981685444], [1.6185012E12, 0.03168402777777799], [1.61850138E12, 0.027947980492684616]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61850156E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.61850096E12, "maxY": 1872.0, "series": [{"data": [[1.61850132E12, 1872.0], [1.6185015E12, 1494.0], [1.61850102E12, 1686.0], [1.61850144E12, 1382.0], [1.61850096E12, 986.0], [1.61850114E12, 1541.0], [1.61850156E12, 1493.0], [1.61850108E12, 1572.0], [1.61850126E12, 1397.0], [1.6185012E12, 1501.0], [1.61850138E12, 1613.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61850132E12, 572.0], [1.6185015E12, 570.0], [1.61850102E12, 557.0], [1.61850144E12, 563.0], [1.61850096E12, 638.8000000000002], [1.61850114E12, 560.0], [1.61850156E12, 563.0], [1.61850108E12, 571.0], [1.61850126E12, 559.0], [1.6185012E12, 567.0], [1.61850138E12, 566.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61850132E12, 851.5600000000013], [1.6185015E12, 828.0], [1.61850102E12, 837.0200000000004], [1.61850144E12, 859.8899999999994], [1.61850096E12, 915.3199999999995], [1.61850114E12, 856.9400000000005], [1.61850156E12, 852.0], [1.61850108E12, 836.2999999999993], [1.61850126E12, 838.739999999998], [1.6185012E12, 831.0], [1.61850138E12, 865.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61850132E12, 661.0], [1.6185015E12, 635.0], [1.61850102E12, 607.0], [1.61850144E12, 670.0], [1.61850096E12, 697.5999999999999], [1.61850114E12, 676.0], [1.61850156E12, 680.0], [1.61850108E12, 647.5], [1.61850126E12, 644.0], [1.6185012E12, 645.0], [1.61850138E12, 668.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61850132E12, 18.0], [1.6185015E12, 17.0], [1.61850102E12, 17.0], [1.61850144E12, 17.0], [1.61850096E12, 24.0], [1.61850114E12, 18.0], [1.61850156E12, 17.0], [1.61850108E12, 15.0], [1.61850126E12, 17.0], [1.6185012E12, 19.0], [1.61850138E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61850132E12, 375.0], [1.6185015E12, 373.0], [1.61850102E12, 369.0], [1.61850144E12, 369.0], [1.61850096E12, 338.0], [1.61850114E12, 363.0], [1.61850156E12, 362.0], [1.61850108E12, 367.0], [1.61850126E12, 365.0], [1.6185012E12, 368.0], [1.61850138E12, 373.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61850156E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 277.5, "minX": 12.0, "maxY": 447.0, "series": [{"data": [[12.0, 277.5], [180.0, 350.5], [230.0, 439.0], [231.0, 430.0], [226.0, 447.0], [229.0, 436.0], [236.0, 419.0], [239.0, 417.0], [237.0, 422.0], [238.0, 420.0], [234.0, 415.0], [235.0, 426.0], [233.0, 426.0], [240.0, 415.0], [241.0, 413.0], [246.0, 405.0], [242.0, 408.0], [243.0, 408.0], [247.0, 401.0], [245.0, 405.0], [244.0, 403.0], [254.0, 391.0], [251.0, 396.0], [253.0, 394.0], [249.0, 398.0], [248.0, 404.0], [252.0, 393.0], [250.0, 396.0], [255.0, 390.0], [259.0, 383.0], [256.0, 388.0], [266.0, 374.0], [267.0, 371.0], [265.0, 375.0], [262.0, 379.0], [260.0, 382.0], [261.0, 383.0], [263.0, 379.0], [258.0, 383.0], [257.0, 385.0], [270.0, 365.0], [268.0, 375.0], [269.0, 369.0], [271.0, 365.0], [264.0, 374.0], [273.0, 364.0], [276.0, 361.0], [277.0, 361.0], [285.0, 349.0], [284.0, 352.0], [286.0, 346.0], [282.0, 352.0], [283.0, 352.0], [281.0, 354.0], [280.0, 356.0], [287.0, 347.0], [278.0, 357.0], [272.0, 364.0], [279.0, 355.0], [275.0, 361.0], [274.0, 361.0], [291.0, 343.0], [294.0, 340.0], [288.0, 346.0], [295.0, 350.0], [297.0, 336.0], [289.0, 344.0], [290.0, 339.0], [298.0, 337.0], [299.0, 338.0], [293.0, 339.0], [292.0, 343.0], [300.0, 333.0], [302.0, 326.0], [296.0, 342.5], [303.0, 321.0], [308.0, 327.0], [312.0, 321.0], [306.0, 324.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 312.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 277.5, "minX": 12.0, "maxY": 447.0, "series": [{"data": [[12.0, 277.5], [180.0, 350.5], [230.0, 439.0], [231.0, 430.0], [226.0, 447.0], [229.0, 436.0], [236.0, 419.0], [239.0, 417.0], [237.0, 422.0], [238.0, 420.0], [234.0, 415.0], [235.0, 426.0], [233.0, 426.0], [240.0, 415.0], [241.0, 413.0], [246.0, 405.0], [242.0, 408.0], [243.0, 408.0], [247.0, 401.0], [245.0, 405.0], [244.0, 403.0], [254.0, 391.0], [251.0, 396.0], [253.0, 394.0], [249.0, 398.0], [248.0, 404.0], [252.0, 393.0], [250.0, 395.5], [255.0, 390.0], [259.0, 383.0], [256.0, 388.0], [266.0, 374.0], [267.0, 371.0], [265.0, 375.0], [262.0, 379.0], [260.0, 382.0], [261.0, 383.0], [263.0, 379.0], [258.0, 383.0], [257.0, 385.0], [270.0, 365.0], [268.0, 375.0], [269.0, 369.0], [271.0, 365.0], [264.0, 374.0], [273.0, 364.0], [276.0, 361.0], [277.0, 361.0], [285.0, 349.0], [284.0, 352.0], [286.0, 346.0], [282.0, 352.0], [283.0, 352.0], [281.0, 354.0], [280.0, 356.0], [287.0, 347.0], [278.0, 357.0], [272.0, 364.0], [279.0, 355.0], [275.0, 361.0], [274.0, 361.0], [291.0, 343.0], [294.0, 340.0], [288.0, 346.0], [295.0, 350.0], [297.0, 336.0], [289.0, 344.0], [290.0, 339.0], [298.0, 337.0], [299.0, 338.0], [293.0, 339.0], [292.0, 343.0], [300.0, 333.0], [302.0, 326.0], [296.0, 342.5], [303.0, 321.0], [308.0, 327.0], [312.0, 321.0], [306.0, 324.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 312.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.61850096E12, "maxY": 271.75, "series": [{"data": [[1.61850132E12, 263.68333333333334], [1.6185015E12, 265.56666666666666], [1.61850102E12, 268.28333333333336], [1.61850144E12, 265.1666666666667], [1.61850096E12, 4.866666666666666], [1.61850114E12, 271.75], [1.61850156E12, 266.21666666666664], [1.61850108E12, 267.81666666666666], [1.61850126E12, 269.3666666666667], [1.6185012E12, 268.8], [1.61850138E12, 266.56666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61850156E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.61850096E12, "maxY": 271.75, "series": [{"data": [[1.61850132E12, 263.68333333333334], [1.6185015E12, 265.56666666666666], [1.61850102E12, 268.28333333333336], [1.61850144E12, 265.1666666666667], [1.61850096E12, 3.2], [1.61850114E12, 271.75], [1.61850156E12, 267.8833333333333], [1.61850108E12, 267.81666666666666], [1.61850126E12, 269.3666666666667], [1.6185012E12, 268.8], [1.61850138E12, 266.56666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61850156E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.61850096E12, "maxY": 271.75, "series": [{"data": [[1.61850132E12, 263.68333333333334], [1.6185015E12, 265.56666666666666], [1.61850102E12, 268.28333333333336], [1.61850144E12, 265.1666666666667], [1.61850096E12, 3.2], [1.61850114E12, 271.75], [1.61850156E12, 267.8833333333333], [1.61850108E12, 267.81666666666666], [1.61850126E12, 269.3666666666667], [1.6185012E12, 268.8], [1.61850138E12, 266.56666666666666]], "isOverall": false, "label": "AuthzRequest-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61850156E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.61850096E12, "maxY": 271.75, "series": [{"data": [[1.61850132E12, 263.68333333333334], [1.6185015E12, 265.56666666666666], [1.61850102E12, 268.28333333333336], [1.61850144E12, 265.1666666666667], [1.61850096E12, 3.2], [1.61850114E12, 271.75], [1.61850156E12, 267.8833333333333], [1.61850108E12, 267.81666666666666], [1.61850126E12, 269.3666666666667], [1.6185012E12, 268.8], [1.61850138E12, 266.56666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61850156E12, "title": "Total Transactions Per Second"}},
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

