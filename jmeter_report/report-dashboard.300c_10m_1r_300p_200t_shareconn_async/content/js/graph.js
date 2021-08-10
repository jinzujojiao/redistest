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
        data: {"result": {"minY": 121.0, "minX": 0.0, "maxY": 3762.0, "series": [{"data": [[0.0, 121.0], [0.1, 200.0], [0.2, 204.0], [0.3, 208.0], [0.4, 212.0], [0.5, 214.0], [0.6, 216.0], [0.7, 218.0], [0.8, 219.0], [0.9, 220.0], [1.0, 222.0], [1.1, 223.0], [1.2, 223.0], [1.3, 224.0], [1.4, 225.0], [1.5, 226.0], [1.6, 227.0], [1.7, 227.0], [1.8, 228.0], [1.9, 229.0], [2.0, 229.0], [2.1, 230.0], [2.2, 230.0], [2.3, 231.0], [2.4, 231.0], [2.5, 232.0], [2.6, 232.0], [2.7, 233.0], [2.8, 233.0], [2.9, 234.0], [3.0, 234.0], [3.1, 235.0], [3.2, 235.0], [3.3, 235.0], [3.4, 236.0], [3.5, 236.0], [3.6, 237.0], [3.7, 237.0], [3.8, 237.0], [3.9, 238.0], [4.0, 238.0], [4.1, 238.0], [4.2, 239.0], [4.3, 239.0], [4.4, 239.0], [4.5, 240.0], [4.6, 240.0], [4.7, 240.0], [4.8, 240.0], [4.9, 241.0], [5.0, 241.0], [5.1, 241.0], [5.2, 242.0], [5.3, 242.0], [5.4, 242.0], [5.5, 242.0], [5.6, 243.0], [5.7, 243.0], [5.8, 243.0], [5.9, 243.0], [6.0, 244.0], [6.1, 244.0], [6.2, 244.0], [6.3, 244.0], [6.4, 245.0], [6.5, 245.0], [6.6, 245.0], [6.7, 245.0], [6.8, 245.0], [6.9, 246.0], [7.0, 246.0], [7.1, 246.0], [7.2, 246.0], [7.3, 247.0], [7.4, 247.0], [7.5, 247.0], [7.6, 247.0], [7.7, 247.0], [7.8, 248.0], [7.9, 248.0], [8.0, 248.0], [8.1, 248.0], [8.2, 248.0], [8.3, 249.0], [8.4, 249.0], [8.5, 249.0], [8.6, 249.0], [8.7, 249.0], [8.8, 250.0], [8.9, 250.0], [9.0, 250.0], [9.1, 250.0], [9.2, 250.0], [9.3, 250.0], [9.4, 251.0], [9.5, 251.0], [9.6, 251.0], [9.7, 251.0], [9.8, 251.0], [9.9, 251.0], [10.0, 252.0], [10.1, 252.0], [10.2, 252.0], [10.3, 252.0], [10.4, 252.0], [10.5, 252.0], [10.6, 253.0], [10.7, 253.0], [10.8, 253.0], [10.9, 253.0], [11.0, 253.0], [11.1, 253.0], [11.2, 253.0], [11.3, 254.0], [11.4, 254.0], [11.5, 254.0], [11.6, 254.0], [11.7, 254.0], [11.8, 254.0], [11.9, 254.0], [12.0, 255.0], [12.1, 255.0], [12.2, 255.0], [12.3, 255.0], [12.4, 255.0], [12.5, 255.0], [12.6, 255.0], [12.7, 256.0], [12.8, 256.0], [12.9, 256.0], [13.0, 256.0], [13.1, 256.0], [13.2, 256.0], [13.3, 256.0], [13.4, 257.0], [13.5, 257.0], [13.6, 257.0], [13.7, 257.0], [13.8, 257.0], [13.9, 257.0], [14.0, 257.0], [14.1, 258.0], [14.2, 258.0], [14.3, 258.0], [14.4, 258.0], [14.5, 258.0], [14.6, 258.0], [14.7, 258.0], [14.8, 258.0], [14.9, 259.0], [15.0, 259.0], [15.1, 259.0], [15.2, 259.0], [15.3, 259.0], [15.4, 259.0], [15.5, 259.0], [15.6, 259.0], [15.7, 259.0], [15.8, 260.0], [15.9, 260.0], [16.0, 260.0], [16.1, 260.0], [16.2, 260.0], [16.3, 260.0], [16.4, 260.0], [16.5, 260.0], [16.6, 260.0], [16.7, 261.0], [16.8, 261.0], [16.9, 261.0], [17.0, 261.0], [17.1, 261.0], [17.2, 261.0], [17.3, 261.0], [17.4, 261.0], [17.5, 261.0], [17.6, 262.0], [17.7, 262.0], [17.8, 262.0], [17.9, 262.0], [18.0, 262.0], [18.1, 262.0], [18.2, 262.0], [18.3, 262.0], [18.4, 262.0], [18.5, 263.0], [18.6, 263.0], [18.7, 263.0], [18.8, 263.0], [18.9, 263.0], [19.0, 263.0], [19.1, 263.0], [19.2, 263.0], [19.3, 263.0], [19.4, 263.0], [19.5, 264.0], [19.6, 264.0], [19.7, 264.0], [19.8, 264.0], [19.9, 264.0], [20.0, 264.0], [20.1, 264.0], [20.2, 264.0], [20.3, 264.0], [20.4, 265.0], [20.5, 265.0], [20.6, 265.0], [20.7, 265.0], [20.8, 265.0], [20.9, 265.0], [21.0, 265.0], [21.1, 265.0], [21.2, 265.0], [21.3, 265.0], [21.4, 266.0], [21.5, 266.0], [21.6, 266.0], [21.7, 266.0], [21.8, 266.0], [21.9, 266.0], [22.0, 266.0], [22.1, 266.0], [22.2, 266.0], [22.3, 266.0], [22.4, 267.0], [22.5, 267.0], [22.6, 267.0], [22.7, 267.0], [22.8, 267.0], [22.9, 267.0], [23.0, 267.0], [23.1, 267.0], [23.2, 267.0], [23.3, 267.0], [23.4, 268.0], [23.5, 268.0], [23.6, 268.0], [23.7, 268.0], [23.8, 268.0], [23.9, 268.0], [24.0, 268.0], [24.1, 268.0], [24.2, 268.0], [24.3, 268.0], [24.4, 268.0], [24.5, 269.0], [24.6, 269.0], [24.7, 269.0], [24.8, 269.0], [24.9, 269.0], [25.0, 269.0], [25.1, 269.0], [25.2, 269.0], [25.3, 269.0], [25.4, 269.0], [25.5, 269.0], [25.6, 270.0], [25.7, 270.0], [25.8, 270.0], [25.9, 270.0], [26.0, 270.0], [26.1, 270.0], [26.2, 270.0], [26.3, 270.0], [26.4, 270.0], [26.5, 270.0], [26.6, 270.0], [26.7, 270.0], [26.8, 271.0], [26.9, 271.0], [27.0, 271.0], [27.1, 271.0], [27.2, 271.0], [27.3, 271.0], [27.4, 271.0], [27.5, 271.0], [27.6, 271.0], [27.7, 271.0], [27.8, 271.0], [27.9, 271.0], [28.0, 271.0], [28.1, 272.0], [28.2, 272.0], [28.3, 272.0], [28.4, 272.0], [28.5, 272.0], [28.6, 272.0], [28.7, 272.0], [28.8, 272.0], [28.9, 272.0], [29.0, 272.0], [29.1, 272.0], [29.2, 272.0], [29.3, 272.0], [29.4, 273.0], [29.5, 273.0], [29.6, 273.0], [29.7, 273.0], [29.8, 273.0], [29.9, 273.0], [30.0, 273.0], [30.1, 273.0], [30.2, 273.0], [30.3, 273.0], [30.4, 273.0], [30.5, 273.0], [30.6, 273.0], [30.7, 274.0], [30.8, 274.0], [30.9, 274.0], [31.0, 274.0], [31.1, 274.0], [31.2, 274.0], [31.3, 274.0], [31.4, 274.0], [31.5, 274.0], [31.6, 274.0], [31.7, 274.0], [31.8, 274.0], [31.9, 274.0], [32.0, 274.0], [32.1, 275.0], [32.2, 275.0], [32.3, 275.0], [32.4, 275.0], [32.5, 275.0], [32.6, 275.0], [32.7, 275.0], [32.8, 275.0], [32.9, 275.0], [33.0, 275.0], [33.1, 275.0], [33.2, 275.0], [33.3, 275.0], [33.4, 275.0], [33.5, 275.0], [33.6, 276.0], [33.7, 276.0], [33.8, 276.0], [33.9, 276.0], [34.0, 276.0], [34.1, 276.0], [34.2, 276.0], [34.3, 276.0], [34.4, 276.0], [34.5, 276.0], [34.6, 276.0], [34.7, 276.0], [34.8, 276.0], [34.9, 276.0], [35.0, 276.0], [35.1, 277.0], [35.2, 277.0], [35.3, 277.0], [35.4, 277.0], [35.5, 277.0], [35.6, 277.0], [35.7, 277.0], [35.8, 277.0], [35.9, 277.0], [36.0, 277.0], [36.1, 277.0], [36.2, 277.0], [36.3, 277.0], [36.4, 277.0], [36.5, 277.0], [36.6, 278.0], [36.7, 278.0], [36.8, 278.0], [36.9, 278.0], [37.0, 278.0], [37.1, 278.0], [37.2, 278.0], [37.3, 278.0], [37.4, 278.0], [37.5, 278.0], [37.6, 278.0], [37.7, 278.0], [37.8, 278.0], [37.9, 278.0], [38.0, 278.0], [38.1, 279.0], [38.2, 279.0], [38.3, 279.0], [38.4, 279.0], [38.5, 279.0], [38.6, 279.0], [38.7, 279.0], [38.8, 279.0], [38.9, 279.0], [39.0, 279.0], [39.1, 279.0], [39.2, 279.0], [39.3, 279.0], [39.4, 279.0], [39.5, 279.0], [39.6, 279.0], [39.7, 280.0], [39.8, 280.0], [39.9, 280.0], [40.0, 280.0], [40.1, 280.0], [40.2, 280.0], [40.3, 280.0], [40.4, 280.0], [40.5, 280.0], [40.6, 280.0], [40.7, 280.0], [40.8, 280.0], [40.9, 280.0], [41.0, 280.0], [41.1, 280.0], [41.2, 280.0], [41.3, 281.0], [41.4, 281.0], [41.5, 281.0], [41.6, 281.0], [41.7, 281.0], [41.8, 281.0], [41.9, 281.0], [42.0, 281.0], [42.1, 281.0], [42.2, 281.0], [42.3, 281.0], [42.4, 281.0], [42.5, 281.0], [42.6, 281.0], [42.7, 281.0], [42.8, 282.0], [42.9, 282.0], [43.0, 282.0], [43.1, 282.0], [43.2, 282.0], [43.3, 282.0], [43.4, 282.0], [43.5, 282.0], [43.6, 282.0], [43.7, 282.0], [43.8, 282.0], [43.9, 282.0], [44.0, 282.0], [44.1, 282.0], [44.2, 282.0], [44.3, 282.0], [44.4, 283.0], [44.5, 283.0], [44.6, 283.0], [44.7, 283.0], [44.8, 283.0], [44.9, 283.0], [45.0, 283.0], [45.1, 283.0], [45.2, 283.0], [45.3, 283.0], [45.4, 283.0], [45.5, 283.0], [45.6, 283.0], [45.7, 283.0], [45.8, 283.0], [45.9, 283.0], [46.0, 284.0], [46.1, 284.0], [46.2, 284.0], [46.3, 284.0], [46.4, 284.0], [46.5, 284.0], [46.6, 284.0], [46.7, 284.0], [46.8, 284.0], [46.9, 284.0], [47.0, 284.0], [47.1, 284.0], [47.2, 284.0], [47.3, 284.0], [47.4, 284.0], [47.5, 284.0], [47.6, 285.0], [47.7, 285.0], [47.8, 285.0], [47.9, 285.0], [48.0, 285.0], [48.1, 285.0], [48.2, 285.0], [48.3, 285.0], [48.4, 285.0], [48.5, 285.0], [48.6, 285.0], [48.7, 285.0], [48.8, 285.0], [48.9, 285.0], [49.0, 285.0], [49.1, 286.0], [49.2, 286.0], [49.3, 286.0], [49.4, 286.0], [49.5, 286.0], [49.6, 286.0], [49.7, 286.0], [49.8, 286.0], [49.9, 286.0], [50.0, 286.0], [50.1, 286.0], [50.2, 286.0], [50.3, 286.0], [50.4, 286.0], [50.5, 286.0], [50.6, 287.0], [50.7, 287.0], [50.8, 287.0], [50.9, 287.0], [51.0, 287.0], [51.1, 287.0], [51.2, 287.0], [51.3, 287.0], [51.4, 287.0], [51.5, 287.0], [51.6, 287.0], [51.7, 287.0], [51.8, 287.0], [51.9, 287.0], [52.0, 287.0], [52.1, 288.0], [52.2, 288.0], [52.3, 288.0], [52.4, 288.0], [52.5, 288.0], [52.6, 288.0], [52.7, 288.0], [52.8, 288.0], [52.9, 288.0], [53.0, 288.0], [53.1, 288.0], [53.2, 288.0], [53.3, 288.0], [53.4, 288.0], [53.5, 288.0], [53.6, 289.0], [53.7, 289.0], [53.8, 289.0], [53.9, 289.0], [54.0, 289.0], [54.1, 289.0], [54.2, 289.0], [54.3, 289.0], [54.4, 289.0], [54.5, 289.0], [54.6, 289.0], [54.7, 289.0], [54.8, 289.0], [54.9, 289.0], [55.0, 290.0], [55.1, 290.0], [55.2, 290.0], [55.3, 290.0], [55.4, 290.0], [55.5, 290.0], [55.6, 290.0], [55.7, 290.0], [55.8, 290.0], [55.9, 290.0], [56.0, 290.0], [56.1, 290.0], [56.2, 290.0], [56.3, 290.0], [56.4, 290.0], [56.5, 291.0], [56.6, 291.0], [56.7, 291.0], [56.8, 291.0], [56.9, 291.0], [57.0, 291.0], [57.1, 291.0], [57.2, 291.0], [57.3, 291.0], [57.4, 291.0], [57.5, 291.0], [57.6, 291.0], [57.7, 291.0], [57.8, 291.0], [57.9, 292.0], [58.0, 292.0], [58.1, 292.0], [58.2, 292.0], [58.3, 292.0], [58.4, 292.0], [58.5, 292.0], [58.6, 292.0], [58.7, 292.0], [58.8, 292.0], [58.9, 292.0], [59.0, 292.0], [59.1, 292.0], [59.2, 292.0], [59.3, 293.0], [59.4, 293.0], [59.5, 293.0], [59.6, 293.0], [59.7, 293.0], [59.8, 293.0], [59.9, 293.0], [60.0, 293.0], [60.1, 293.0], [60.2, 293.0], [60.3, 293.0], [60.4, 293.0], [60.5, 293.0], [60.6, 293.0], [60.7, 294.0], [60.8, 294.0], [60.9, 294.0], [61.0, 294.0], [61.1, 294.0], [61.2, 294.0], [61.3, 294.0], [61.4, 294.0], [61.5, 294.0], [61.6, 294.0], [61.7, 294.0], [61.8, 294.0], [61.9, 294.0], [62.0, 294.0], [62.1, 295.0], [62.2, 295.0], [62.3, 295.0], [62.4, 295.0], [62.5, 295.0], [62.6, 295.0], [62.7, 295.0], [62.8, 295.0], [62.9, 295.0], [63.0, 295.0], [63.1, 295.0], [63.2, 295.0], [63.3, 295.0], [63.4, 295.0], [63.5, 296.0], [63.6, 296.0], [63.7, 296.0], [63.8, 296.0], [63.9, 296.0], [64.0, 296.0], [64.1, 296.0], [64.2, 296.0], [64.3, 296.0], [64.4, 296.0], [64.5, 296.0], [64.6, 296.0], [64.7, 296.0], [64.8, 296.0], [64.9, 297.0], [65.0, 297.0], [65.1, 297.0], [65.2, 297.0], [65.3, 297.0], [65.4, 297.0], [65.5, 297.0], [65.6, 297.0], [65.7, 297.0], [65.8, 297.0], [65.9, 297.0], [66.0, 297.0], [66.1, 297.0], [66.2, 297.0], [66.3, 298.0], [66.4, 298.0], [66.5, 298.0], [66.6, 298.0], [66.7, 298.0], [66.8, 298.0], [66.9, 298.0], [67.0, 298.0], [67.1, 298.0], [67.2, 298.0], [67.3, 298.0], [67.4, 298.0], [67.5, 298.0], [67.6, 299.0], [67.7, 299.0], [67.8, 299.0], [67.9, 299.0], [68.0, 299.0], [68.1, 299.0], [68.2, 299.0], [68.3, 299.0], [68.4, 299.0], [68.5, 299.0], [68.6, 299.0], [68.7, 299.0], [68.8, 300.0], [68.9, 300.0], [69.0, 300.0], [69.1, 300.0], [69.2, 300.0], [69.3, 300.0], [69.4, 300.0], [69.5, 300.0], [69.6, 300.0], [69.7, 300.0], [69.8, 300.0], [69.9, 300.0], [70.0, 300.0], [70.1, 301.0], [70.2, 301.0], [70.3, 301.0], [70.4, 301.0], [70.5, 301.0], [70.6, 301.0], [70.7, 301.0], [70.8, 301.0], [70.9, 301.0], [71.0, 301.0], [71.1, 301.0], [71.2, 301.0], [71.3, 302.0], [71.4, 302.0], [71.5, 302.0], [71.6, 302.0], [71.7, 302.0], [71.8, 302.0], [71.9, 302.0], [72.0, 302.0], [72.1, 302.0], [72.2, 302.0], [72.3, 302.0], [72.4, 302.0], [72.5, 303.0], [72.6, 303.0], [72.7, 303.0], [72.8, 303.0], [72.9, 303.0], [73.0, 303.0], [73.1, 303.0], [73.2, 303.0], [73.3, 303.0], [73.4, 303.0], [73.5, 303.0], [73.6, 304.0], [73.7, 304.0], [73.8, 304.0], [73.9, 304.0], [74.0, 304.0], [74.1, 304.0], [74.2, 304.0], [74.3, 304.0], [74.4, 304.0], [74.5, 304.0], [74.6, 304.0], [74.7, 304.0], [74.8, 305.0], [74.9, 305.0], [75.0, 305.0], [75.1, 305.0], [75.2, 305.0], [75.3, 305.0], [75.4, 305.0], [75.5, 305.0], [75.6, 305.0], [75.7, 305.0], [75.8, 305.0], [75.9, 306.0], [76.0, 306.0], [76.1, 306.0], [76.2, 306.0], [76.3, 306.0], [76.4, 306.0], [76.5, 306.0], [76.6, 306.0], [76.7, 306.0], [76.8, 306.0], [76.9, 306.0], [77.0, 307.0], [77.1, 307.0], [77.2, 307.0], [77.3, 307.0], [77.4, 307.0], [77.5, 307.0], [77.6, 307.0], [77.7, 307.0], [77.8, 307.0], [77.9, 307.0], [78.0, 308.0], [78.1, 308.0], [78.2, 308.0], [78.3, 308.0], [78.4, 308.0], [78.5, 308.0], [78.6, 308.0], [78.7, 308.0], [78.8, 308.0], [78.9, 308.0], [79.0, 309.0], [79.1, 309.0], [79.2, 309.0], [79.3, 309.0], [79.4, 309.0], [79.5, 309.0], [79.6, 309.0], [79.7, 309.0], [79.8, 309.0], [79.9, 309.0], [80.0, 310.0], [80.1, 310.0], [80.2, 310.0], [80.3, 310.0], [80.4, 310.0], [80.5, 310.0], [80.6, 310.0], [80.7, 310.0], [80.8, 310.0], [80.9, 311.0], [81.0, 311.0], [81.1, 311.0], [81.2, 311.0], [81.3, 311.0], [81.4, 311.0], [81.5, 311.0], [81.6, 311.0], [81.7, 311.0], [81.8, 312.0], [81.9, 312.0], [82.0, 312.0], [82.1, 312.0], [82.2, 312.0], [82.3, 312.0], [82.4, 312.0], [82.5, 312.0], [82.6, 312.0], [82.7, 313.0], [82.8, 313.0], [82.9, 313.0], [83.0, 313.0], [83.1, 313.0], [83.2, 313.0], [83.3, 313.0], [83.4, 313.0], [83.5, 314.0], [83.6, 314.0], [83.7, 314.0], [83.8, 314.0], [83.9, 314.0], [84.0, 314.0], [84.1, 314.0], [84.2, 315.0], [84.3, 315.0], [84.4, 315.0], [84.5, 315.0], [84.6, 315.0], [84.7, 315.0], [84.8, 315.0], [84.9, 316.0], [85.0, 316.0], [85.1, 316.0], [85.2, 316.0], [85.3, 316.0], [85.4, 316.0], [85.5, 316.0], [85.6, 317.0], [85.7, 317.0], [85.8, 317.0], [85.9, 317.0], [86.0, 317.0], [86.1, 317.0], [86.2, 317.0], [86.3, 318.0], [86.4, 318.0], [86.5, 318.0], [86.6, 318.0], [86.7, 318.0], [86.8, 318.0], [86.9, 318.0], [87.0, 319.0], [87.1, 319.0], [87.2, 319.0], [87.3, 319.0], [87.4, 319.0], [87.5, 319.0], [87.6, 319.0], [87.7, 320.0], [87.8, 320.0], [87.9, 320.0], [88.0, 320.0], [88.1, 320.0], [88.2, 320.0], [88.3, 321.0], [88.4, 321.0], [88.5, 321.0], [88.6, 321.0], [88.7, 321.0], [88.8, 321.0], [88.9, 322.0], [89.0, 322.0], [89.1, 322.0], [89.2, 322.0], [89.3, 322.0], [89.4, 322.0], [89.5, 323.0], [89.6, 323.0], [89.7, 323.0], [89.8, 323.0], [89.9, 323.0], [90.0, 324.0], [90.1, 324.0], [90.2, 324.0], [90.3, 324.0], [90.4, 324.0], [90.5, 324.0], [90.6, 325.0], [90.7, 325.0], [90.8, 325.0], [90.9, 325.0], [91.0, 325.0], [91.1, 326.0], [91.2, 326.0], [91.3, 326.0], [91.4, 326.0], [91.5, 327.0], [91.6, 327.0], [91.7, 327.0], [91.8, 327.0], [91.9, 328.0], [92.0, 328.0], [92.1, 328.0], [92.2, 328.0], [92.3, 329.0], [92.4, 329.0], [92.5, 329.0], [92.6, 329.0], [92.7, 330.0], [92.8, 330.0], [92.9, 330.0], [93.0, 330.0], [93.1, 331.0], [93.2, 331.0], [93.3, 331.0], [93.4, 332.0], [93.5, 332.0], [93.6, 332.0], [93.7, 332.0], [93.8, 333.0], [93.9, 333.0], [94.0, 333.0], [94.1, 334.0], [94.2, 334.0], [94.3, 334.0], [94.4, 335.0], [94.5, 335.0], [94.6, 335.0], [94.7, 336.0], [94.8, 336.0], [94.9, 336.0], [95.0, 337.0], [95.1, 337.0], [95.2, 337.0], [95.3, 338.0], [95.4, 338.0], [95.5, 338.0], [95.6, 339.0], [95.7, 339.0], [95.8, 340.0], [95.9, 340.0], [96.0, 340.0], [96.1, 341.0], [96.2, 341.0], [96.3, 342.0], [96.4, 342.0], [96.5, 343.0], [96.6, 343.0], [96.7, 344.0], [96.8, 345.0], [96.9, 345.0], [97.0, 346.0], [97.1, 347.0], [97.2, 347.0], [97.3, 348.0], [97.4, 349.0], [97.5, 349.0], [97.6, 350.0], [97.7, 351.0], [97.8, 352.0], [97.9, 353.0], [98.0, 354.0], [98.1, 355.0], [98.2, 356.0], [98.3, 358.0], [98.4, 359.0], [98.5, 361.0], [98.6, 364.0], [98.7, 367.0], [98.8, 370.0], [98.9, 373.0], [99.0, 378.0], [99.1, 385.0], [99.2, 405.0], [99.3, 435.0], [99.4, 466.0], [99.5, 485.0], [99.6, 533.0], [99.7, 573.0], [99.8, 695.0], [99.9, 772.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 426071.0, "series": [{"data": [[2400.0, 1.0], [600.0, 472.0], [2500.0, 10.0], [2600.0, 9.0], [2800.0, 13.0], [2700.0, 21.0], [700.0, 677.0], [2900.0, 32.0], [3000.0, 29.0], [3100.0, 35.0], [3200.0, 40.0], [3300.0, 29.0], [800.0, 180.0], [200.0, 426071.0], [3400.0, 26.0], [3500.0, 23.0], [3600.0, 20.0], [3700.0, 12.0], [900.0, 62.0], [300.0, 188446.0], [400.0, 2258.0], [100.0, 616.0], [500.0, 1113.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 300.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 617403.0, "series": [{"data": [[0.0, 617403.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2492.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 300.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 299.15474778055057, "minX": 1.62719532E12, "maxY": 300.0, "series": [{"data": [[1.62719568E12, 300.0], [1.62719538E12, 300.0], [1.62719586E12, 300.0], [1.62719556E12, 300.0], [1.62719574E12, 300.0], [1.62719544E12, 300.0], [1.62719592E12, 299.15474778055057], [1.62719562E12, 300.0], [1.62719532E12, 300.0], [1.6271958E12, 300.0], [1.6271955E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719592E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.0, "maxY": 361.7540983606556, "series": [{"data": [[2.0, 145.0], [3.0, 141.0], [4.0, 138.0], [5.0, 137.0], [6.0, 134.0], [7.0, 133.0], [8.0, 135.0], [9.0, 130.0], [10.0, 128.0], [11.0, 126.0], [12.0, 124.0], [13.0, 121.0], [14.0, 122.0], [15.0, 192.0], [16.0, 194.0], [17.0, 193.0], [18.0, 189.0], [19.0, 194.0], [20.0, 187.0], [21.0, 189.0], [22.0, 191.0], [23.0, 188.0], [24.0, 191.0], [25.0, 190.0], [26.0, 191.0], [27.0, 189.0], [28.0, 192.0], [29.0, 193.0], [31.0, 196.5], [33.0, 200.0], [32.0, 198.0], [35.0, 207.0], [34.0, 207.0], [37.0, 217.0], [36.0, 215.0], [39.0, 217.0], [38.0, 217.0], [41.0, 227.0], [40.0, 219.0], [43.0, 223.5], [45.0, 222.5], [47.0, 226.0], [46.0, 222.0], [49.0, 226.0], [48.0, 227.0], [51.0, 228.0], [50.0, 228.0], [52.0, 229.0], [55.0, 247.0], [54.0, 297.0], [57.0, 281.5], [59.0, 279.0], [58.0, 276.0], [60.0, 278.0], [63.0, 284.0], [62.0, 267.5], [66.0, 265.0], [65.0, 246.0], [64.0, 288.0], [71.0, 252.0], [69.0, 259.0], [68.0, 252.0], [75.0, 263.0], [74.0, 252.5], [72.0, 250.0], [78.0, 255.0], [77.0, 260.0], [76.0, 252.0], [83.0, 261.0], [82.0, 265.5], [80.0, 260.5], [87.0, 263.0], [86.0, 264.0], [85.0, 266.0], [84.0, 263.0], [91.0, 271.0], [90.0, 268.0], [89.0, 268.0], [88.0, 267.0], [95.0, 277.0], [94.0, 270.0], [93.0, 267.0], [92.0, 269.0], [99.0, 273.5], [97.0, 271.0], [96.0, 274.0], [103.0, 275.0], [102.0, 271.0], [101.0, 275.0], [107.0, 274.0], [106.0, 275.0], [105.0, 276.0], [104.0, 272.0], [111.0, 276.0], [110.0, 275.0], [109.0, 274.0], [108.0, 275.0], [115.0, 281.0], [114.0, 279.5], [112.0, 282.0], [119.0, 287.0], [118.0, 281.5], [116.0, 282.0], [123.0, 304.0], [122.0, 303.0], [121.0, 289.0], [127.0, 293.0], [126.0, 286.0], [125.0, 292.6666666666667], [134.0, 290.0], [133.0, 295.0], [132.0, 297.0], [131.0, 291.0], [130.0, 286.0], [129.0, 295.0], [143.0, 297.5], [142.0, 297.5], [141.0, 294.0], [138.0, 293.0], [137.0, 289.0], [136.0, 288.0], [151.0, 312.0], [150.0, 299.0], [149.0, 296.0], [148.0, 297.3333333333333], [145.0, 296.0], [144.0, 300.0], [159.0, 297.5], [157.0, 302.5], [155.0, 294.0], [154.0, 296.5], [152.0, 298.0], [166.0, 297.5], [164.0, 297.0], [163.0, 298.3333333333333], [160.0, 296.0], [173.0, 300.0], [205.0, 297.0], [201.0, 293.0], [220.0, 298.0], [218.0, 294.0], [231.0, 295.0], [243.0, 299.0], [253.0, 296.0], [271.0, 312.0], [269.0, 312.14285714285717], [268.0, 309.6666666666667], [265.0, 311.8], [264.0, 324.0], [263.0, 327.0], [262.0, 333.58333333333326], [261.0, 361.7540983606556], [286.0, 322.5], [287.0, 318.0], [285.0, 318.6], [283.0, 318.5], [282.0, 296.875], [279.0, 298.5], [278.0, 303.0], [277.0, 302.0], [274.0, 305.5], [273.0, 311.5], [296.0, 316.0], [300.0, 290.0555268744949], [299.0, 310.8571428571429], [298.0, 313.3333333333333], [297.0, 314.25], [295.0, 318.5], [294.0, 318.6666666666667], [293.0, 318.3333333333333], [292.0, 321.0], [291.0, 319.99999999999994], [290.0, 319.3333333333333], [289.0, 318.3333333333333], [288.0, 320.6666666666667], [1.0, 146.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.93337418070075, 290.0573706656687]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 18773.033333333333, "minX": 1.62719532E12, "maxY": 8706789.333333334, "series": [{"data": [[1.62719568E12, 8066664.133333334], [1.62719538E12, 7971227.766666667], [1.62719586E12, 8464016.233333332], [1.62719556E12, 8389109.333333334], [1.62719574E12, 8566877.766666668], [1.62719544E12, 8235166.9], [1.62719592E12, 6470731.866666666], [1.62719562E12, 7985788.1], [1.62719532E12, 943641.9666666667], [1.6271958E12, 8290231.433333334], [1.6271955E12, 8706789.333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62719568E12, 160485.86666666667], [1.62719538E12, 158587.23333333334], [1.62719586E12, 168393.76666666666], [1.62719556E12, 166900.66666666666], [1.62719574E12, 170437.23333333334], [1.62719544E12, 163838.1], [1.62719592E12, 128733.13333333333], [1.62719562E12, 158876.9], [1.62719532E12, 18773.033333333333], [1.6271958E12, 164933.56666666668], [1.6271955E12, 173220.66666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719592E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 273.3499239890572, "minX": 1.62719532E12, "maxY": 588.8835741338162, "series": [{"data": [[1.62719568E12, 295.1127592544005], [1.62719538E12, 298.77870581007386], [1.62719586E12, 281.4076031713755], [1.62719556E12, 284.0517355632701], [1.62719574E12, 278.2587488219039], [1.62719544E12, 289.4206888792443], [1.62719592E12, 280.8889866219369], [1.62719562E12, 298.24409527124686], [1.62719532E12, 588.8835741338162], [1.6271958E12, 287.2897833410527], [1.6271955E12, 273.3499239890572]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719592E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 273.33222864092727, "minX": 1.62719532E12, "maxY": 587.8486463739655, "series": [{"data": [[1.62719568E12, 295.0955467314295], [1.62719538E12, 298.76150308021914], [1.62719586E12, 281.38963516661914], [1.62719556E12, 284.0360523824559], [1.62719574E12, 278.2407335877496], [1.62719544E12, 289.4029123872893], [1.62719592E12, 280.86988094750984], [1.62719562E12, 298.2255482074495], [1.62719532E12, 587.8486463739655], [1.6271958E12, 287.272667763], [1.6271955E12, 273.33222864092727]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719592E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006934500675039921, "minX": 1.62719532E12, "maxY": 0.47159489409454075, "series": [{"data": [[1.62719568E12, 0.011354686269361864], [1.62719538E12, 0.011938960197930988], [1.62719586E12, 0.01859352276103642], [1.62719556E12, 0.01219627642789528], [1.62719574E12, 0.011835050909259555], [1.62719544E12, 0.011813491489464329], [1.62719592E12, 0.006934500675039921], [1.62719562E12, 0.011138183083884479], [1.62719532E12, 0.47159489409454075], [1.6271958E12, 0.012086280395318796], [1.6271955E12, 0.011097598054119936]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719592E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.62719532E12, "maxY": 3762.0, "series": [{"data": [[1.62719568E12, 401.0], [1.62719538E12, 510.0], [1.62719586E12, 460.0], [1.62719556E12, 372.0], [1.62719574E12, 414.0], [1.62719544E12, 383.0], [1.62719592E12, 400.0], [1.62719562E12, 406.0], [1.62719532E12, 3762.0], [1.6271958E12, 429.0], [1.6271955E12, 400.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62719568E12, 321.0], [1.62719538E12, 325.0], [1.62719586E12, 310.0], [1.62719556E12, 326.0], [1.62719574E12, 324.0], [1.62719544E12, 319.0], [1.62719592E12, 317.0], [1.62719562E12, 329.0], [1.62719532E12, 758.0], [1.6271958E12, 314.0], [1.6271955E12, 318.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62719568E12, 354.0], [1.62719538E12, 353.0], [1.62719586E12, 338.0], [1.62719556E12, 343.0], [1.62719574E12, 360.0], [1.62719544E12, 350.0], [1.62719592E12, 357.0], [1.62719562E12, 355.0], [1.62719532E12, 3442.0999999999995], [1.6271958E12, 342.0], [1.6271955E12, 350.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62719568E12, 335.0], [1.62719538E12, 337.0], [1.62719586E12, 322.0], [1.62719556E12, 332.0], [1.62719574E12, 338.0], [1.62719544E12, 333.0], [1.62719592E12, 329.0], [1.62719562E12, 337.0], [1.62719532E12, 903.0], [1.6271958E12, 323.0], [1.6271955E12, 328.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62719568E12, 205.0], [1.62719538E12, 239.0], [1.62719586E12, 194.0], [1.62719556E12, 199.0], [1.62719574E12, 173.0], [1.62719544E12, 222.0], [1.62719592E12, 121.0], [1.62719562E12, 233.0], [1.62719532E12, 272.0], [1.6271958E12, 189.0], [1.6271955E12, 180.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62719568E12, 281.0], [1.62719538E12, 292.0], [1.62719586E12, 275.0], [1.62719556E12, 284.0], [1.62719574E12, 285.0], [1.62719544E12, 284.0], [1.62719592E12, 278.0], [1.62719562E12, 302.0], [1.62719532E12, 465.0], [1.6271958E12, 274.0], [1.6271955E12, 284.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719592E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 239.0, "minX": 108.0, "maxY": 2952.5, "series": [{"data": [[108.0, 2952.5], [354.0, 682.0], [438.0, 928.0], [447.0, 734.0], [520.0, 697.5], [582.0, 460.0], [613.0, 477.0], [655.0, 421.0], [713.0, 349.0], [737.0, 553.0], [787.0, 399.0], [811.0, 282.0], [855.0, 357.0], [853.0, 366.0], [872.0, 337.0], [892.0, 338.0], [864.0, 344.0], [913.0, 312.0], [900.0, 307.0], [897.0, 321.0], [911.0, 322.0], [920.0, 313.0], [922.0, 323.0], [924.0, 289.0], [912.0, 317.0], [927.0, 323.0], [915.0, 307.0], [909.0, 329.0], [907.0, 333.0], [917.0, 334.0], [919.0, 321.0], [918.0, 304.0], [901.0, 325.0], [914.0, 325.0], [953.0, 301.0], [959.0, 297.0], [947.0, 299.0], [946.0, 307.0], [944.0, 307.0], [933.0, 324.0], [952.0, 302.0], [935.0, 295.0], [931.0, 303.0], [932.0, 307.0], [930.0, 320.0], [942.0, 307.0], [928.0, 318.0], [943.0, 311.0], [937.0, 313.0], [936.0, 325.0], [941.0, 316.0], [957.0, 301.0], [956.0, 292.0], [954.0, 300.0], [955.0, 305.0], [948.0, 301.0], [950.0, 301.0], [938.0, 303.0], [940.0, 322.0], [939.0, 319.0], [987.0, 308.0], [975.0, 308.0], [986.0, 302.0], [985.0, 294.0], [989.0, 290.0], [990.0, 296.0], [991.0, 296.0], [977.0, 302.0], [976.0, 296.0], [988.0, 304.0], [968.0, 319.0], [967.0, 308.0], [973.0, 302.0], [972.0, 305.0], [974.0, 308.0], [961.0, 295.0], [962.0, 311.0], [960.0, 320.0], [963.0, 326.0], [964.0, 293.0], [965.0, 302.0], [966.0, 298.0], [978.0, 296.0], [979.0, 308.0], [981.0, 301.0], [980.0, 301.0], [983.0, 303.0], [982.0, 302.0], [971.0, 303.0], [970.0, 293.0], [969.0, 315.0], [1020.0, 287.0], [994.0, 297.0], [1010.0, 298.0], [1013.0, 296.0], [1012.0, 290.0], [1015.0, 284.5], [1014.0, 299.0], [1011.0, 299.0], [1001.0, 297.0], [1000.0, 283.0], [992.0, 294.0], [1016.0, 293.0], [998.0, 304.0], [997.0, 296.0], [1017.0, 291.0], [1018.0, 290.0], [1019.0, 293.0], [995.0, 301.0], [996.0, 288.0], [1009.0, 285.0], [993.0, 296.0], [1008.0, 294.5], [1021.0, 297.0], [1022.0, 301.0], [1023.0, 293.0], [1006.0, 293.0], [1007.0, 293.0], [1005.0, 301.0], [1004.0, 296.0], [1002.0, 292.0], [1034.0, 301.0], [1081.0, 280.0], [1071.0, 283.0], [1041.0, 295.0], [1067.0, 284.0], [1040.0, 280.0], [1060.0, 281.0], [1056.0, 286.0], [1057.0, 284.0], [1058.0, 279.0], [1059.0, 285.0], [1082.0, 281.0], [1083.0, 268.0], [1085.0, 283.0], [1087.0, 279.0], [1086.0, 287.0], [1035.0, 289.0], [1036.0, 289.0], [1049.0, 286.0], [1050.0, 285.0], [1051.0, 282.0], [1052.0, 280.0], [1053.0, 286.0], [1047.0, 289.0], [1046.0, 280.0], [1048.0, 280.0], [1025.0, 297.0], [1024.0, 279.0], [1055.0, 274.0], [1028.0, 297.0], [1029.0, 296.0], [1026.0, 290.0], [1027.0, 289.0], [1054.0, 288.0], [1032.0, 294.0], [1031.0, 289.0], [1033.0, 285.0], [1030.0, 290.0], [1043.0, 274.0], [1042.0, 281.0], [1044.0, 295.0], [1076.0, 275.0], [1039.0, 283.0], [1038.0, 282.0], [1075.0, 274.0], [1072.0, 279.0], [1073.0, 282.0], [1074.0, 285.0], [1077.0, 278.0], [1078.0, 277.0], [1079.0, 277.0], [1080.0, 269.0], [1037.0, 292.0], [1070.0, 291.0], [1068.0, 284.0], [1069.0, 276.0], [1064.0, 284.0], [1066.0, 285.0], [1065.0, 282.0], [1061.0, 279.0], [1062.0, 281.0], [1063.0, 298.0], [1097.0, 287.0], [1144.0, 259.0], [1120.0, 273.0], [1100.0, 277.0], [1099.0, 285.0], [1098.0, 278.0], [1101.0, 275.0], [1102.0, 258.0], [1108.0, 267.0], [1112.0, 272.0], [1109.0, 266.0], [1110.0, 285.0], [1111.0, 276.0], [1104.0, 268.0], [1105.0, 271.0], [1106.0, 282.0], [1092.0, 278.0], [1091.0, 285.0], [1096.0, 279.0], [1095.0, 293.0], [1093.0, 287.0], [1088.0, 267.0], [1089.0, 288.0], [1119.0, 268.0], [1118.0, 264.0], [1117.0, 276.0], [1115.0, 264.0], [1116.0, 255.0], [1114.0, 264.0], [1090.0, 282.0], [1113.0, 273.0], [1132.0, 274.0], [1126.0, 275.0], [1123.0, 263.0], [1121.0, 270.0], [1124.0, 269.0], [1125.0, 283.0], [1129.0, 265.0], [1130.0, 263.0], [1128.0, 273.0], [1127.0, 274.0], [1103.0, 272.0], [1135.0, 263.0], [1134.0, 268.0], [1136.0, 265.0], [1138.0, 268.0], [1139.0, 265.0], [1142.0, 259.0], [1141.0, 267.0], [1140.0, 268.0], [1151.0, 270.0], [1148.0, 260.0], [1147.0, 278.0], [1145.0, 264.0], [1155.0, 269.0], [1182.0, 261.0], [1180.0, 268.0], [1153.0, 266.0], [1183.0, 255.0], [1157.0, 273.0], [1156.0, 261.0], [1161.0, 266.0], [1162.0, 266.0], [1160.0, 286.0], [1163.0, 271.0], [1200.0, 248.0], [1211.0, 250.0], [1209.0, 247.0], [1165.0, 259.0], [1164.0, 248.0], [1166.0, 273.0], [1159.0, 272.0], [1179.0, 261.0], [1173.0, 260.0], [1175.0, 256.0], [1178.0, 261.0], [1169.0, 259.0], [1170.0, 263.0], [1171.0, 257.0], [1168.0, 263.0], [1172.0, 260.0], [1187.0, 246.0], [1190.0, 252.0], [1186.0, 266.0], [1184.0, 254.0], [1191.0, 258.0], [1197.0, 246.0], [1196.0, 251.0], [1194.0, 247.0], [1195.0, 251.0], [1239.0, 247.0], [1222.0, 245.0], [1230.0, 243.0], [1217.0, 243.0], [1250.0, 239.0], [1260.0, 240.0], [1216.0, 257.0], [1234.0, 239.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1260.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 239.0, "minX": 108.0, "maxY": 2909.0, "series": [{"data": [[108.0, 2909.0], [354.0, 682.0], [438.0, 928.0], [447.0, 734.0], [520.0, 697.0], [582.0, 460.0], [613.0, 477.0], [655.0, 421.0], [713.0, 349.0], [737.0, 553.0], [787.0, 399.0], [811.0, 282.0], [855.0, 357.0], [853.0, 366.0], [872.0, 337.0], [892.0, 338.0], [864.0, 344.0], [913.0, 312.0], [900.0, 307.0], [897.0, 321.0], [911.0, 322.0], [920.0, 313.0], [922.0, 323.0], [924.0, 289.0], [912.0, 317.0], [927.0, 323.0], [915.0, 307.0], [909.0, 329.0], [907.0, 333.0], [917.0, 334.0], [919.0, 321.0], [918.0, 304.0], [901.0, 325.0], [914.0, 325.0], [953.0, 301.0], [959.0, 297.0], [947.0, 299.0], [946.0, 307.0], [944.0, 307.0], [933.0, 324.0], [952.0, 302.0], [935.0, 295.0], [931.0, 303.0], [932.0, 307.0], [930.0, 320.0], [942.0, 307.0], [928.0, 318.0], [943.0, 311.0], [937.0, 313.0], [936.0, 325.0], [941.0, 315.0], [957.0, 301.0], [956.0, 292.0], [954.0, 300.0], [955.0, 305.0], [948.0, 301.0], [950.0, 301.0], [938.0, 303.0], [940.0, 322.0], [939.0, 319.0], [987.0, 308.0], [975.0, 308.0], [986.0, 302.0], [985.0, 294.0], [989.0, 290.0], [990.0, 296.0], [991.0, 296.0], [977.0, 302.0], [976.0, 296.0], [988.0, 304.0], [968.0, 319.0], [967.0, 308.0], [973.0, 302.0], [972.0, 305.0], [974.0, 308.0], [961.0, 295.0], [962.0, 311.0], [960.0, 320.0], [963.0, 326.0], [964.0, 293.0], [965.0, 302.0], [966.0, 298.0], [978.0, 296.0], [979.0, 308.0], [981.0, 301.0], [980.0, 301.0], [983.0, 303.0], [982.0, 302.0], [971.0, 303.0], [970.0, 293.0], [969.0, 315.0], [1020.0, 287.0], [994.0, 297.0], [1010.0, 298.0], [1013.0, 296.0], [1012.0, 290.0], [1015.0, 284.5], [1014.0, 299.0], [1011.0, 298.0], [1001.0, 297.0], [1000.0, 283.0], [992.0, 294.0], [1016.0, 293.0], [998.0, 304.0], [997.0, 296.0], [1017.0, 291.0], [1018.0, 290.0], [1019.0, 293.0], [995.0, 301.0], [996.0, 288.0], [1009.0, 285.0], [993.0, 296.0], [1008.0, 294.0], [1021.0, 297.0], [1022.0, 301.0], [1023.0, 293.0], [1006.0, 293.0], [1007.0, 293.0], [1005.0, 301.0], [1004.0, 296.0], [1002.0, 291.0], [1034.0, 301.0], [1081.0, 280.0], [1071.0, 283.0], [1041.0, 295.0], [1067.0, 284.0], [1040.0, 280.0], [1060.0, 281.0], [1056.0, 286.0], [1057.0, 284.0], [1058.0, 279.0], [1059.0, 285.0], [1082.0, 281.0], [1083.0, 268.0], [1085.0, 283.0], [1087.0, 279.0], [1086.0, 287.0], [1035.0, 289.0], [1036.0, 289.0], [1049.0, 286.0], [1050.0, 285.0], [1051.0, 282.0], [1052.0, 280.0], [1053.0, 286.0], [1047.0, 289.0], [1046.0, 280.0], [1048.0, 280.0], [1025.0, 297.0], [1024.0, 279.0], [1055.0, 274.0], [1028.0, 297.0], [1029.0, 296.0], [1026.0, 290.0], [1027.0, 289.0], [1054.0, 288.0], [1032.0, 294.0], [1031.0, 289.0], [1033.0, 285.0], [1030.0, 290.0], [1043.0, 274.0], [1042.0, 281.0], [1044.0, 295.0], [1076.0, 275.0], [1039.0, 283.0], [1038.0, 282.0], [1075.0, 274.0], [1072.0, 279.0], [1073.0, 282.0], [1074.0, 285.0], [1077.0, 278.0], [1078.0, 277.0], [1079.0, 277.0], [1080.0, 269.0], [1037.0, 292.0], [1070.0, 291.0], [1068.0, 284.0], [1069.0, 276.0], [1064.0, 284.0], [1066.0, 285.0], [1065.0, 282.0], [1061.0, 279.0], [1062.0, 281.0], [1063.0, 298.0], [1097.0, 287.0], [1144.0, 259.0], [1120.0, 273.0], [1100.0, 277.0], [1099.0, 285.0], [1098.0, 278.0], [1101.0, 275.0], [1102.0, 258.0], [1108.0, 267.0], [1112.0, 272.0], [1109.0, 266.0], [1110.0, 285.0], [1111.0, 276.0], [1104.0, 268.0], [1105.0, 271.0], [1106.0, 282.0], [1092.0, 278.0], [1091.0, 285.0], [1096.0, 279.0], [1095.0, 293.0], [1093.0, 287.0], [1088.0, 267.0], [1089.0, 288.0], [1119.0, 268.0], [1118.0, 264.0], [1117.0, 276.0], [1115.0, 264.0], [1116.0, 255.0], [1114.0, 264.0], [1090.0, 282.0], [1113.0, 273.0], [1132.0, 274.0], [1126.0, 275.0], [1123.0, 263.0], [1121.0, 270.0], [1124.0, 269.0], [1125.0, 283.0], [1129.0, 265.0], [1130.0, 263.0], [1128.0, 273.0], [1127.0, 274.0], [1103.0, 272.0], [1135.0, 263.0], [1134.0, 268.0], [1136.0, 265.0], [1138.0, 268.0], [1139.0, 265.0], [1142.0, 259.0], [1141.0, 267.0], [1140.0, 268.0], [1151.0, 270.0], [1148.0, 260.0], [1147.0, 278.0], [1145.0, 264.0], [1155.0, 269.0], [1182.0, 261.0], [1180.0, 268.0], [1153.0, 266.0], [1183.0, 255.0], [1157.0, 273.0], [1156.0, 261.0], [1161.0, 266.0], [1162.0, 266.0], [1160.0, 286.0], [1163.0, 271.0], [1200.0, 248.0], [1211.0, 250.0], [1209.0, 247.0], [1165.0, 259.0], [1164.0, 248.0], [1166.0, 273.0], [1159.0, 272.0], [1179.0, 261.0], [1173.0, 260.0], [1175.0, 256.0], [1178.0, 261.0], [1169.0, 259.0], [1170.0, 263.0], [1171.0, 257.0], [1168.0, 263.0], [1172.0, 260.0], [1187.0, 246.0], [1190.0, 252.0], [1186.0, 266.0], [1184.0, 254.0], [1191.0, 258.0], [1197.0, 246.0], [1196.0, 251.0], [1194.0, 247.0], [1195.0, 251.0], [1239.0, 247.0], [1222.0, 245.0], [1230.0, 243.0], [1217.0, 243.0], [1250.0, 239.0], [1260.0, 240.0], [1216.0, 257.0], [1234.0, 239.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1260.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 123.81666666666666, "minX": 1.62719532E12, "maxY": 1096.3333333333333, "series": [{"data": [[1.62719568E12, 1015.7333333333333], [1.62719538E12, 1003.7166666666667], [1.62719586E12, 1065.7833333333333], [1.62719556E12, 1056.3333333333333], [1.62719574E12, 1078.7166666666667], [1.62719544E12, 1036.95], [1.62719592E12, 809.7666666666667], [1.62719562E12, 1005.55], [1.62719532E12, 123.81666666666666], [1.6271958E12, 1043.8833333333334], [1.6271955E12, 1096.3333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719592E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 118.81666666666666, "minX": 1.62719532E12, "maxY": 1096.3333333333333, "series": [{"data": [[1.62719568E12, 1015.7333333333333], [1.62719538E12, 1003.7166666666667], [1.62719586E12, 1065.7833333333333], [1.62719556E12, 1056.3333333333333], [1.62719574E12, 1078.7166666666667], [1.62719544E12, 1036.95], [1.62719592E12, 814.7666666666667], [1.62719562E12, 1005.55], [1.62719532E12, 118.81666666666666], [1.6271958E12, 1043.8833333333334], [1.6271955E12, 1096.3333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719592E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 118.81666666666666, "minX": 1.62719532E12, "maxY": 1096.3333333333333, "series": [{"data": [[1.62719568E12, 1015.7333333333333], [1.62719538E12, 1003.7166666666667], [1.62719586E12, 1065.7833333333333], [1.62719556E12, 1056.3333333333333], [1.62719574E12, 1078.7166666666667], [1.62719544E12, 1036.95], [1.62719592E12, 814.7666666666667], [1.62719562E12, 1005.55], [1.62719532E12, 118.81666666666666], [1.6271958E12, 1043.8833333333334], [1.6271955E12, 1096.3333333333333]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719592E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 118.81666666666666, "minX": 1.62719532E12, "maxY": 1096.3333333333333, "series": [{"data": [[1.62719568E12, 1015.7333333333333], [1.62719538E12, 1003.7166666666667], [1.62719586E12, 1065.7833333333333], [1.62719556E12, 1056.3333333333333], [1.62719574E12, 1078.7166666666667], [1.62719544E12, 1036.95], [1.62719592E12, 814.7666666666667], [1.62719562E12, 1005.55], [1.62719532E12, 118.81666666666666], [1.6271958E12, 1043.8833333333334], [1.6271955E12, 1096.3333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719592E12, "title": "Total Transactions Per Second"}},
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

