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
        data: {"result": {"minY": 72.0, "minX": 0.0, "maxY": 498.0, "series": [{"data": [[0.0, 72.0], [0.1, 187.0], [0.2, 195.0], [0.3, 201.0], [0.4, 204.0], [0.5, 208.0], [0.6, 211.0], [0.7, 214.0], [0.8, 216.0], [0.9, 218.0], [1.0, 220.0], [1.1, 222.0], [1.2, 224.0], [1.3, 225.0], [1.4, 227.0], [1.5, 228.0], [1.6, 229.0], [1.7, 230.0], [1.8, 231.0], [1.9, 232.0], [2.0, 233.0], [2.1, 234.0], [2.2, 234.0], [2.3, 235.0], [2.4, 236.0], [2.5, 236.0], [2.6, 237.0], [2.7, 238.0], [2.8, 238.0], [2.9, 239.0], [3.0, 239.0], [3.1, 240.0], [3.2, 240.0], [3.3, 241.0], [3.4, 241.0], [3.5, 242.0], [3.6, 242.0], [3.7, 243.0], [3.8, 243.0], [3.9, 244.0], [4.0, 244.0], [4.1, 244.0], [4.2, 245.0], [4.3, 245.0], [4.4, 245.0], [4.5, 246.0], [4.6, 246.0], [4.7, 246.0], [4.8, 247.0], [4.9, 247.0], [5.0, 247.0], [5.1, 248.0], [5.2, 248.0], [5.3, 248.0], [5.4, 248.0], [5.5, 249.0], [5.6, 249.0], [5.7, 249.0], [5.8, 250.0], [5.9, 250.0], [6.0, 250.0], [6.1, 250.0], [6.2, 251.0], [6.3, 251.0], [6.4, 251.0], [6.5, 251.0], [6.6, 251.0], [6.7, 252.0], [6.8, 252.0], [6.9, 252.0], [7.0, 252.0], [7.1, 253.0], [7.2, 253.0], [7.3, 253.0], [7.4, 253.0], [7.5, 253.0], [7.6, 254.0], [7.7, 254.0], [7.8, 254.0], [7.9, 254.0], [8.0, 254.0], [8.1, 255.0], [8.2, 255.0], [8.3, 255.0], [8.4, 255.0], [8.5, 255.0], [8.6, 256.0], [8.7, 256.0], [8.8, 256.0], [8.9, 256.0], [9.0, 256.0], [9.1, 257.0], [9.2, 257.0], [9.3, 257.0], [9.4, 257.0], [9.5, 257.0], [9.6, 257.0], [9.7, 258.0], [9.8, 258.0], [9.9, 258.0], [10.0, 258.0], [10.1, 258.0], [10.2, 259.0], [10.3, 259.0], [10.4, 259.0], [10.5, 259.0], [10.6, 259.0], [10.7, 259.0], [10.8, 259.0], [10.9, 260.0], [11.0, 260.0], [11.1, 260.0], [11.2, 260.0], [11.3, 260.0], [11.4, 260.0], [11.5, 260.0], [11.6, 261.0], [11.7, 261.0], [11.8, 261.0], [11.9, 261.0], [12.0, 261.0], [12.1, 261.0], [12.2, 262.0], [12.3, 262.0], [12.4, 262.0], [12.5, 262.0], [12.6, 262.0], [12.7, 262.0], [12.8, 262.0], [12.9, 262.0], [13.0, 263.0], [13.1, 263.0], [13.2, 263.0], [13.3, 263.0], [13.4, 263.0], [13.5, 263.0], [13.6, 263.0], [13.7, 264.0], [13.8, 264.0], [13.9, 264.0], [14.0, 264.0], [14.1, 264.0], [14.2, 264.0], [14.3, 264.0], [14.4, 264.0], [14.5, 265.0], [14.6, 265.0], [14.7, 265.0], [14.8, 265.0], [14.9, 265.0], [15.0, 265.0], [15.1, 265.0], [15.2, 265.0], [15.3, 265.0], [15.4, 266.0], [15.5, 266.0], [15.6, 266.0], [15.7, 266.0], [15.8, 266.0], [15.9, 266.0], [16.0, 266.0], [16.1, 266.0], [16.2, 267.0], [16.3, 267.0], [16.4, 267.0], [16.5, 267.0], [16.6, 267.0], [16.7, 267.0], [16.8, 267.0], [16.9, 267.0], [17.0, 268.0], [17.1, 268.0], [17.2, 268.0], [17.3, 268.0], [17.4, 268.0], [17.5, 268.0], [17.6, 268.0], [17.7, 268.0], [17.8, 268.0], [17.9, 269.0], [18.0, 269.0], [18.1, 269.0], [18.2, 269.0], [18.3, 269.0], [18.4, 269.0], [18.5, 269.0], [18.6, 269.0], [18.7, 269.0], [18.8, 270.0], [18.9, 270.0], [19.0, 270.0], [19.1, 270.0], [19.2, 270.0], [19.3, 270.0], [19.4, 270.0], [19.5, 270.0], [19.6, 270.0], [19.7, 271.0], [19.8, 271.0], [19.9, 271.0], [20.0, 271.0], [20.1, 271.0], [20.2, 271.0], [20.3, 271.0], [20.4, 271.0], [20.5, 271.0], [20.6, 271.0], [20.7, 272.0], [20.8, 272.0], [20.9, 272.0], [21.0, 272.0], [21.1, 272.0], [21.2, 272.0], [21.3, 272.0], [21.4, 272.0], [21.5, 272.0], [21.6, 272.0], [21.7, 273.0], [21.8, 273.0], [21.9, 273.0], [22.0, 273.0], [22.1, 273.0], [22.2, 273.0], [22.3, 273.0], [22.4, 273.0], [22.5, 273.0], [22.6, 273.0], [22.7, 274.0], [22.8, 274.0], [22.9, 274.0], [23.0, 274.0], [23.1, 274.0], [23.2, 274.0], [23.3, 274.0], [23.4, 274.0], [23.5, 274.0], [23.6, 274.0], [23.7, 274.0], [23.8, 275.0], [23.9, 275.0], [24.0, 275.0], [24.1, 275.0], [24.2, 275.0], [24.3, 275.0], [24.4, 275.0], [24.5, 275.0], [24.6, 275.0], [24.7, 275.0], [24.8, 275.0], [24.9, 276.0], [25.0, 276.0], [25.1, 276.0], [25.2, 276.0], [25.3, 276.0], [25.4, 276.0], [25.5, 276.0], [25.6, 276.0], [25.7, 276.0], [25.8, 276.0], [25.9, 276.0], [26.0, 277.0], [26.1, 277.0], [26.2, 277.0], [26.3, 277.0], [26.4, 277.0], [26.5, 277.0], [26.6, 277.0], [26.7, 277.0], [26.8, 277.0], [26.9, 277.0], [27.0, 277.0], [27.1, 277.0], [27.2, 277.0], [27.3, 278.0], [27.4, 278.0], [27.5, 278.0], [27.6, 278.0], [27.7, 278.0], [27.8, 278.0], [27.9, 278.0], [28.0, 278.0], [28.1, 278.0], [28.2, 278.0], [28.3, 278.0], [28.4, 278.0], [28.5, 278.0], [28.6, 279.0], [28.7, 279.0], [28.8, 279.0], [28.9, 279.0], [29.0, 279.0], [29.1, 279.0], [29.2, 279.0], [29.3, 279.0], [29.4, 279.0], [29.5, 279.0], [29.6, 279.0], [29.7, 279.0], [29.8, 279.0], [29.9, 280.0], [30.0, 280.0], [30.1, 280.0], [30.2, 280.0], [30.3, 280.0], [30.4, 280.0], [30.5, 280.0], [30.6, 280.0], [30.7, 280.0], [30.8, 280.0], [30.9, 280.0], [31.0, 280.0], [31.1, 280.0], [31.2, 281.0], [31.3, 281.0], [31.4, 281.0], [31.5, 281.0], [31.6, 281.0], [31.7, 281.0], [31.8, 281.0], [31.9, 281.0], [32.0, 281.0], [32.1, 281.0], [32.2, 281.0], [32.3, 281.0], [32.4, 281.0], [32.5, 282.0], [32.6, 282.0], [32.7, 282.0], [32.8, 282.0], [32.9, 282.0], [33.0, 282.0], [33.1, 282.0], [33.2, 282.0], [33.3, 282.0], [33.4, 282.0], [33.5, 282.0], [33.6, 282.0], [33.7, 282.0], [33.8, 283.0], [33.9, 283.0], [34.0, 283.0], [34.1, 283.0], [34.2, 283.0], [34.3, 283.0], [34.4, 283.0], [34.5, 283.0], [34.6, 283.0], [34.7, 283.0], [34.8, 283.0], [34.9, 283.0], [35.0, 283.0], [35.1, 284.0], [35.2, 284.0], [35.3, 284.0], [35.4, 284.0], [35.5, 284.0], [35.6, 284.0], [35.7, 284.0], [35.8, 284.0], [35.9, 284.0], [36.0, 284.0], [36.1, 284.0], [36.2, 284.0], [36.3, 284.0], [36.4, 285.0], [36.5, 285.0], [36.6, 285.0], [36.7, 285.0], [36.8, 285.0], [36.9, 285.0], [37.0, 285.0], [37.1, 285.0], [37.2, 285.0], [37.3, 285.0], [37.4, 285.0], [37.5, 285.0], [37.6, 285.0], [37.7, 286.0], [37.8, 286.0], [37.9, 286.0], [38.0, 286.0], [38.1, 286.0], [38.2, 286.0], [38.3, 286.0], [38.4, 286.0], [38.5, 286.0], [38.6, 286.0], [38.7, 286.0], [38.8, 286.0], [38.9, 286.0], [39.0, 286.0], [39.1, 287.0], [39.2, 287.0], [39.3, 287.0], [39.4, 287.0], [39.5, 287.0], [39.6, 287.0], [39.7, 287.0], [39.8, 287.0], [39.9, 287.0], [40.0, 287.0], [40.1, 287.0], [40.2, 287.0], [40.3, 287.0], [40.4, 288.0], [40.5, 288.0], [40.6, 288.0], [40.7, 288.0], [40.8, 288.0], [40.9, 288.0], [41.0, 288.0], [41.1, 288.0], [41.2, 288.0], [41.3, 288.0], [41.4, 288.0], [41.5, 288.0], [41.6, 288.0], [41.7, 289.0], [41.8, 289.0], [41.9, 289.0], [42.0, 289.0], [42.1, 289.0], [42.2, 289.0], [42.3, 289.0], [42.4, 289.0], [42.5, 289.0], [42.6, 289.0], [42.7, 289.0], [42.8, 289.0], [42.9, 289.0], [43.0, 289.0], [43.1, 289.0], [43.2, 290.0], [43.3, 290.0], [43.4, 290.0], [43.5, 290.0], [43.6, 290.0], [43.7, 290.0], [43.8, 290.0], [43.9, 290.0], [44.0, 290.0], [44.1, 290.0], [44.2, 290.0], [44.3, 290.0], [44.4, 290.0], [44.5, 290.0], [44.6, 291.0], [44.7, 291.0], [44.8, 291.0], [44.9, 291.0], [45.0, 291.0], [45.1, 291.0], [45.2, 291.0], [45.3, 291.0], [45.4, 291.0], [45.5, 291.0], [45.6, 291.0], [45.7, 291.0], [45.8, 291.0], [45.9, 291.0], [46.0, 292.0], [46.1, 292.0], [46.2, 292.0], [46.3, 292.0], [46.4, 292.0], [46.5, 292.0], [46.6, 292.0], [46.7, 292.0], [46.8, 292.0], [46.9, 292.0], [47.0, 292.0], [47.1, 292.0], [47.2, 292.0], [47.3, 293.0], [47.4, 293.0], [47.5, 293.0], [47.6, 293.0], [47.7, 293.0], [47.8, 293.0], [47.9, 293.0], [48.0, 293.0], [48.1, 293.0], [48.2, 293.0], [48.3, 293.0], [48.4, 293.0], [48.5, 293.0], [48.6, 294.0], [48.7, 294.0], [48.8, 294.0], [48.9, 294.0], [49.0, 294.0], [49.1, 294.0], [49.2, 294.0], [49.3, 294.0], [49.4, 294.0], [49.5, 294.0], [49.6, 294.0], [49.7, 294.0], [49.8, 294.0], [49.9, 295.0], [50.0, 295.0], [50.1, 295.0], [50.2, 295.0], [50.3, 295.0], [50.4, 295.0], [50.5, 295.0], [50.6, 295.0], [50.7, 295.0], [50.8, 295.0], [50.9, 295.0], [51.0, 295.0], [51.1, 295.0], [51.2, 296.0], [51.3, 296.0], [51.4, 296.0], [51.5, 296.0], [51.6, 296.0], [51.7, 296.0], [51.8, 296.0], [51.9, 296.0], [52.0, 296.0], [52.1, 296.0], [52.2, 296.0], [52.3, 296.0], [52.4, 296.0], [52.5, 297.0], [52.6, 297.0], [52.7, 297.0], [52.8, 297.0], [52.9, 297.0], [53.0, 297.0], [53.1, 297.0], [53.2, 297.0], [53.3, 297.0], [53.4, 297.0], [53.5, 297.0], [53.6, 297.0], [53.7, 297.0], [53.8, 298.0], [53.9, 298.0], [54.0, 298.0], [54.1, 298.0], [54.2, 298.0], [54.3, 298.0], [54.4, 298.0], [54.5, 298.0], [54.6, 298.0], [54.7, 298.0], [54.8, 298.0], [54.9, 298.0], [55.0, 298.0], [55.1, 299.0], [55.2, 299.0], [55.3, 299.0], [55.4, 299.0], [55.5, 299.0], [55.6, 299.0], [55.7, 299.0], [55.8, 299.0], [55.9, 299.0], [56.0, 299.0], [56.1, 299.0], [56.2, 299.0], [56.3, 299.0], [56.4, 299.0], [56.5, 300.0], [56.6, 300.0], [56.7, 300.0], [56.8, 300.0], [56.9, 300.0], [57.0, 300.0], [57.1, 300.0], [57.2, 300.0], [57.3, 300.0], [57.4, 300.0], [57.5, 300.0], [57.6, 300.0], [57.7, 301.0], [57.8, 301.0], [57.9, 301.0], [58.0, 301.0], [58.1, 301.0], [58.2, 301.0], [58.3, 301.0], [58.4, 301.0], [58.5, 301.0], [58.6, 301.0], [58.7, 301.0], [58.8, 301.0], [58.9, 301.0], [59.0, 302.0], [59.1, 302.0], [59.2, 302.0], [59.3, 302.0], [59.4, 302.0], [59.5, 302.0], [59.6, 302.0], [59.7, 302.0], [59.8, 302.0], [59.9, 302.0], [60.0, 302.0], [60.1, 302.0], [60.2, 303.0], [60.3, 303.0], [60.4, 303.0], [60.5, 303.0], [60.6, 303.0], [60.7, 303.0], [60.8, 303.0], [60.9, 303.0], [61.0, 303.0], [61.1, 303.0], [61.2, 303.0], [61.3, 303.0], [61.4, 304.0], [61.5, 304.0], [61.6, 304.0], [61.7, 304.0], [61.8, 304.0], [61.9, 304.0], [62.0, 304.0], [62.1, 304.0], [62.2, 304.0], [62.3, 304.0], [62.4, 304.0], [62.5, 304.0], [62.6, 304.0], [62.7, 305.0], [62.8, 305.0], [62.9, 305.0], [63.0, 305.0], [63.1, 305.0], [63.2, 305.0], [63.3, 305.0], [63.4, 305.0], [63.5, 305.0], [63.6, 305.0], [63.7, 305.0], [63.8, 305.0], [63.9, 306.0], [64.0, 306.0], [64.1, 306.0], [64.2, 306.0], [64.3, 306.0], [64.4, 306.0], [64.5, 306.0], [64.6, 306.0], [64.7, 306.0], [64.8, 306.0], [64.9, 306.0], [65.0, 306.0], [65.1, 307.0], [65.2, 307.0], [65.3, 307.0], [65.4, 307.0], [65.5, 307.0], [65.6, 307.0], [65.7, 307.0], [65.8, 307.0], [65.9, 307.0], [66.0, 307.0], [66.1, 307.0], [66.2, 307.0], [66.3, 308.0], [66.4, 308.0], [66.5, 308.0], [66.6, 308.0], [66.7, 308.0], [66.8, 308.0], [66.9, 308.0], [67.0, 308.0], [67.1, 308.0], [67.2, 308.0], [67.3, 308.0], [67.4, 308.0], [67.5, 309.0], [67.6, 309.0], [67.7, 309.0], [67.8, 309.0], [67.9, 309.0], [68.0, 309.0], [68.1, 309.0], [68.2, 309.0], [68.3, 309.0], [68.4, 309.0], [68.5, 309.0], [68.6, 310.0], [68.7, 310.0], [68.8, 310.0], [68.9, 310.0], [69.0, 310.0], [69.1, 310.0], [69.2, 310.0], [69.3, 310.0], [69.4, 310.0], [69.5, 310.0], [69.6, 311.0], [69.7, 311.0], [69.8, 311.0], [69.9, 311.0], [70.0, 311.0], [70.1, 311.0], [70.2, 311.0], [70.3, 311.0], [70.4, 311.0], [70.5, 311.0], [70.6, 311.0], [70.7, 312.0], [70.8, 312.0], [70.9, 312.0], [71.0, 312.0], [71.1, 312.0], [71.2, 312.0], [71.3, 312.0], [71.4, 312.0], [71.5, 312.0], [71.6, 312.0], [71.7, 313.0], [71.8, 313.0], [71.9, 313.0], [72.0, 313.0], [72.1, 313.0], [72.2, 313.0], [72.3, 313.0], [72.4, 313.0], [72.5, 313.0], [72.6, 313.0], [72.7, 314.0], [72.8, 314.0], [72.9, 314.0], [73.0, 314.0], [73.1, 314.0], [73.2, 314.0], [73.3, 314.0], [73.4, 314.0], [73.5, 314.0], [73.6, 314.0], [73.7, 315.0], [73.8, 315.0], [73.9, 315.0], [74.0, 315.0], [74.1, 315.0], [74.2, 315.0], [74.3, 315.0], [74.4, 315.0], [74.5, 315.0], [74.6, 315.0], [74.7, 316.0], [74.8, 316.0], [74.9, 316.0], [75.0, 316.0], [75.1, 316.0], [75.2, 316.0], [75.3, 316.0], [75.4, 316.0], [75.5, 316.0], [75.6, 316.0], [75.7, 317.0], [75.8, 317.0], [75.9, 317.0], [76.0, 317.0], [76.1, 317.0], [76.2, 317.0], [76.3, 317.0], [76.4, 317.0], [76.5, 317.0], [76.6, 317.0], [76.7, 318.0], [76.8, 318.0], [76.9, 318.0], [77.0, 318.0], [77.1, 318.0], [77.2, 318.0], [77.3, 318.0], [77.4, 318.0], [77.5, 318.0], [77.6, 319.0], [77.7, 319.0], [77.8, 319.0], [77.9, 319.0], [78.0, 319.0], [78.1, 319.0], [78.2, 319.0], [78.3, 319.0], [78.4, 319.0], [78.5, 320.0], [78.6, 320.0], [78.7, 320.0], [78.8, 320.0], [78.9, 320.0], [79.0, 320.0], [79.1, 320.0], [79.2, 320.0], [79.3, 320.0], [79.4, 321.0], [79.5, 321.0], [79.6, 321.0], [79.7, 321.0], [79.8, 321.0], [79.9, 321.0], [80.0, 321.0], [80.1, 321.0], [80.2, 322.0], [80.3, 322.0], [80.4, 322.0], [80.5, 322.0], [80.6, 322.0], [80.7, 322.0], [80.8, 322.0], [80.9, 322.0], [81.0, 323.0], [81.1, 323.0], [81.2, 323.0], [81.3, 323.0], [81.4, 323.0], [81.5, 323.0], [81.6, 323.0], [81.7, 323.0], [81.8, 324.0], [81.9, 324.0], [82.0, 324.0], [82.1, 324.0], [82.2, 324.0], [82.3, 324.0], [82.4, 324.0], [82.5, 325.0], [82.6, 325.0], [82.7, 325.0], [82.8, 325.0], [82.9, 325.0], [83.0, 325.0], [83.1, 325.0], [83.2, 325.0], [83.3, 326.0], [83.4, 326.0], [83.5, 326.0], [83.6, 326.0], [83.7, 326.0], [83.8, 326.0], [83.9, 326.0], [84.0, 327.0], [84.1, 327.0], [84.2, 327.0], [84.3, 327.0], [84.4, 327.0], [84.5, 327.0], [84.6, 327.0], [84.7, 328.0], [84.8, 328.0], [84.9, 328.0], [85.0, 328.0], [85.1, 328.0], [85.2, 328.0], [85.3, 328.0], [85.4, 329.0], [85.5, 329.0], [85.6, 329.0], [85.7, 329.0], [85.8, 329.0], [85.9, 329.0], [86.0, 329.0], [86.1, 330.0], [86.2, 330.0], [86.3, 330.0], [86.4, 330.0], [86.5, 330.0], [86.6, 330.0], [86.7, 331.0], [86.8, 331.0], [86.9, 331.0], [87.0, 331.0], [87.1, 331.0], [87.2, 331.0], [87.3, 332.0], [87.4, 332.0], [87.5, 332.0], [87.6, 332.0], [87.7, 332.0], [87.8, 332.0], [87.9, 333.0], [88.0, 333.0], [88.1, 333.0], [88.2, 333.0], [88.3, 333.0], [88.4, 334.0], [88.5, 334.0], [88.6, 334.0], [88.7, 334.0], [88.8, 334.0], [88.9, 334.0], [89.0, 335.0], [89.1, 335.0], [89.2, 335.0], [89.3, 335.0], [89.4, 335.0], [89.5, 336.0], [89.6, 336.0], [89.7, 336.0], [89.8, 336.0], [89.9, 336.0], [90.0, 336.0], [90.1, 337.0], [90.2, 337.0], [90.3, 337.0], [90.4, 337.0], [90.5, 337.0], [90.6, 338.0], [90.7, 338.0], [90.8, 338.0], [90.9, 338.0], [91.0, 338.0], [91.1, 339.0], [91.2, 339.0], [91.3, 339.0], [91.4, 339.0], [91.5, 340.0], [91.6, 340.0], [91.7, 340.0], [91.8, 340.0], [91.9, 340.0], [92.0, 341.0], [92.1, 341.0], [92.2, 341.0], [92.3, 341.0], [92.4, 342.0], [92.5, 342.0], [92.6, 342.0], [92.7, 342.0], [92.8, 343.0], [92.9, 343.0], [93.0, 343.0], [93.1, 343.0], [93.2, 344.0], [93.3, 344.0], [93.4, 344.0], [93.5, 345.0], [93.6, 345.0], [93.7, 345.0], [93.8, 346.0], [93.9, 346.0], [94.0, 346.0], [94.1, 347.0], [94.2, 347.0], [94.3, 347.0], [94.4, 348.0], [94.5, 348.0], [94.6, 348.0], [94.7, 349.0], [94.8, 349.0], [94.9, 349.0], [95.0, 350.0], [95.1, 350.0], [95.2, 351.0], [95.3, 351.0], [95.4, 351.0], [95.5, 352.0], [95.6, 352.0], [95.7, 353.0], [95.8, 353.0], [95.9, 353.0], [96.0, 354.0], [96.1, 354.0], [96.2, 355.0], [96.3, 355.0], [96.4, 356.0], [96.5, 356.0], [96.6, 357.0], [96.7, 357.0], [96.8, 358.0], [96.9, 358.0], [97.0, 359.0], [97.1, 360.0], [97.2, 360.0], [97.3, 361.0], [97.4, 361.0], [97.5, 362.0], [97.6, 363.0], [97.7, 363.0], [97.8, 364.0], [97.9, 365.0], [98.0, 366.0], [98.1, 366.0], [98.2, 367.0], [98.3, 368.0], [98.4, 369.0], [98.5, 370.0], [98.6, 371.0], [98.7, 372.0], [98.8, 374.0], [98.9, 376.0], [99.0, 377.0], [99.1, 379.0], [99.2, 381.0], [99.3, 384.0], [99.4, 387.0], [99.5, 391.0], [99.6, 396.0], [99.7, 401.0], [99.8, 406.0], [99.9, 415.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 341001.0, "series": [{"data": [[0.0, 2.0], [300.0, 262869.0], [100.0, 1669.0], [200.0, 341001.0], [400.0, 2016.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 607557.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 607557.0, "series": [{"data": [[0.0, 607557.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 298.5986394557826, "minX": 1.62719202E12, "maxY": 300.0, "series": [{"data": [[1.6271922E12, 300.0], [1.62719238E12, 300.0], [1.62719232E12, 300.0], [1.62719202E12, 298.5986394557826], [1.6271925E12, 300.0], [1.62719244E12, 300.0], [1.62719214E12, 300.0], [1.62719262E12, 298.91837970487927], [1.62719208E12, 300.0], [1.62719256E12, 300.0], [1.62719226E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719262E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 104.0, "minX": 1.0, "maxY": 371.0, "series": [{"data": [[2.0, 104.0], [3.0, 165.0], [4.0, 160.0], [5.0, 160.0], [6.0, 162.0], [7.0, 159.0], [8.0, 170.0], [9.0, 312.0], [10.0, 167.0], [11.0, 168.0], [12.0, 165.0], [13.0, 171.0], [14.0, 179.0], [15.0, 156.0], [16.0, 156.0], [17.0, 155.0], [18.0, 163.0], [19.0, 161.0], [20.0, 230.0], [23.0, 231.33333333333334], [24.0, 240.0], [25.0, 247.0], [26.0, 248.0], [27.0, 247.0], [29.0, 264.0], [46.0, 368.0], [50.0, 218.5], [59.0, 261.0], [60.0, 371.0], [63.0, 367.0], [66.0, 167.0], [65.0, 343.33333333333337], [70.0, 246.0], [68.0, 241.0], [73.0, 194.0], [78.0, 312.5], [76.0, 273.75], [83.0, 344.0], [84.0, 214.0], [89.0, 157.11111111111111], [90.0, 172.5], [91.0, 275.16666666666663], [92.0, 241.5], [93.0, 121.0], [94.0, 194.33333333333331], [95.0, 186.75], [97.0, 281.6666666666667], [98.0, 163.0], [99.0, 158.0], [96.0, 326.0], [100.0, 221.66666666666669], [101.0, 165.0], [102.0, 138.66666666666666], [103.0, 275.6], [104.0, 197.25], [105.0, 155.0], [106.0, 189.6], [107.0, 183.0], [108.0, 281.0], [109.0, 184.55555555555554], [111.0, 208.0], [114.0, 174.0], [115.0, 203.0], [112.0, 209.0], [116.0, 213.0], [117.0, 187.5], [118.0, 194.0], [119.0, 161.0], [120.0, 209.0], [121.0, 188.5], [122.0, 147.5], [123.0, 144.5], [124.0, 150.0], [125.0, 160.0], [126.0, 156.5], [127.0, 148.66666666666666], [128.0, 142.0], [129.0, 141.0], [130.0, 138.0], [131.0, 137.0], [132.0, 132.66666666666666], [133.0, 130.0], [137.0, 178.0], [139.0, 148.0], [140.0, 163.0], [141.0, 150.0], [142.0, 152.25], [143.0, 152.0], [144.0, 152.0], [146.0, 153.0], [147.0, 156.0], [148.0, 155.33333333333334], [150.0, 158.0], [151.0, 162.66666666666666], [152.0, 160.5], [153.0, 189.0], [155.0, 165.33333333333334], [156.0, 169.0], [157.0, 169.0], [158.0, 169.0], [160.0, 172.33333333333334], [161.0, 170.66666666666666], [162.0, 182.5], [163.0, 165.6], [165.0, 166.33333333333331], [166.0, 167.66666666666666], [167.0, 170.5], [168.0, 171.25], [169.0, 186.33333333333334], [170.0, 168.0], [171.0, 193.0], [172.0, 173.0], [174.0, 177.0], [175.0, 179.0], [176.0, 180.0], [177.0, 181.5], [178.0, 182.25], [179.0, 181.0], [180.0, 183.33333333333334], [181.0, 183.5], [182.0, 184.33333333333334], [183.0, 184.5], [185.0, 189.0], [186.0, 193.0], [187.0, 196.66666666666666], [189.0, 209.0], [192.0, 199.25], [193.0, 197.0], [194.0, 199.0], [195.0, 207.0], [196.0, 200.0], [197.0, 199.66666666666666], [198.0, 201.0], [201.0, 212.5], [204.0, 198.0], [208.0, 206.0], [210.0, 210.0], [212.0, 215.0], [213.0, 230.25], [214.0, 238.0], [209.0, 210.0], [216.0, 234.75], [217.0, 226.0], [219.0, 244.4], [220.0, 265.6666666666667], [222.0, 238.0], [224.0, 233.0], [225.0, 240.0], [227.0, 243.33333333333334], [228.0, 242.0], [229.0, 243.0], [230.0, 246.5], [232.0, 249.0], [233.0, 248.25], [235.0, 252.66666666666666], [236.0, 253.0], [237.0, 255.66666666666666], [238.0, 253.33333333333334], [239.0, 252.0], [240.0, 258.0], [241.0, 251.75], [242.0, 258.0], [245.0, 262.0], [246.0, 264.0], [247.0, 249.0], [244.0, 221.0], [243.0, 217.0], [248.0, 261.5], [250.0, 265.0], [251.0, 263.5], [252.0, 264.3333333333333], [254.0, 283.5], [255.0, 301.5], [257.0, 262.6666666666667], [256.0, 287.93518518518516], [258.0, 280.3333333333333], [259.0, 281.0], [260.0, 277.8], [261.0, 287.0], [262.0, 294.0], [263.0, 276.375], [264.0, 287.3333333333333], [268.0, 247.0], [270.0, 255.6111111111111], [265.0, 276.7142857142857], [266.0, 240.0], [273.0, 265.0], [272.0, 304.0], [275.0, 294.75], [284.0, 276.0], [274.0, 303.0], [276.0, 311.0], [277.0, 323.5], [279.0, 335.6666666666667], [282.0, 323.6857142857143], [283.0, 280.0], [281.0, 302.6], [280.0, 337.125], [287.0, 273.0], [286.0, 271.5], [285.0, 300.0], [278.0, 313.0], [300.0, 296.1455985103092], [288.0, 321.5], [290.0, 304.6666666666667], [289.0, 274.25], [294.0, 301.75], [293.0, 294.0], [292.0, 293.0], [296.0, 305.0], [299.0, 287.90909090909093], [298.0, 293.5], [297.0, 293.0], [295.0, 291.0], [1.0, 107.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.8746290471566, 296.0836892670133]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 79355.5, "minX": 1.62719202E12, "maxY": 8605396.466666667, "series": [{"data": [[1.6271922E12, 8340454.4], [1.62719238E12, 7833963.533333333], [1.62719232E12, 8010540.666666667], [1.62719202E12, 3988767.5166666666], [1.6271925E12, 7811593.566666666], [1.62719244E12, 7866922.833333333], [1.62719214E12, 7923455.966666667], [1.62719262E12, 4153123.9], [1.62719208E12, 7923993.65], [1.62719256E12, 7959182.4], [1.62719226E12, 8605396.466666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6271922E12, 165934.23333333334], [1.62719238E12, 155856.46666666667], [1.62719232E12, 159369.33333333334], [1.62719202E12, 79355.5], [1.6271925E12, 155411.43333333332], [1.62719244E12, 156512.16666666666], [1.62719214E12, 157636.6], [1.62719262E12, 82626.1], [1.62719208E12, 157647.13333333333], [1.62719256E12, 158347.6], [1.62719226E12, 171203.53333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719262E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 276.9220321776845, "minX": 1.62719202E12, "maxY": 305.0980903807333, "series": [{"data": [[1.6271922E12, 285.499119229368], [1.62719238E12, 304.41474335146586], [1.62719232E12, 296.9183906146777], [1.62719202E12, 298.01423593827906], [1.6271925E12, 305.0980903807333], [1.62719244E12, 302.5324976865479], [1.62719214E12, 300.6223313621342], [1.62719262E12, 284.7786913981554], [1.62719208E12, 300.76788160224163], [1.62719256E12, 299.3810949244985], [1.62719226E12, 276.9220321776845]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719262E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 276.9046205432702, "minX": 1.62719202E12, "maxY": 305.07789281055176, "series": [{"data": [[1.6271922E12, 285.48009140970737], [1.62719238E12, 304.39730679552633], [1.62719232E12, 296.90295769993804], [1.62719202E12, 297.9925004148019], [1.6271925E12, 305.07789281055176], [1.62719244E12, 302.5145284764915], [1.62719214E12, 300.60415622598725], [1.62719262E12, 284.76084393026656], [1.62719208E12, 300.75154511742926], [1.62719256E12, 299.36258564491135], [1.62719226E12, 276.9046205432702]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719262E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01054912834241639, "minX": 1.62719202E12, "maxY": 0.12387589182014218, "series": [{"data": [[1.6271922E12, 0.0174884547633026], [1.62719238E12, 0.011100598114418927], [1.62719232E12, 0.01085591539986786], [1.62719202E12, 0.12387589182014218], [1.6271925E12, 0.012115153260924867], [1.62719244E12, 0.011407419870446663], [1.62719214E12, 0.011058768500885285], [1.62719262E12, 0.01054912834241639], [1.62719208E12, 0.011258477265893924], [1.62719256E12, 0.011857247389077334], [1.62719226E12, 0.011505214261543684]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719262E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 72.0, "minX": 1.62719202E12, "maxY": 498.0, "series": [{"data": [[1.6271922E12, 422.0], [1.62719238E12, 405.0], [1.62719232E12, 417.0], [1.62719202E12, 471.0], [1.6271925E12, 419.0], [1.62719244E12, 423.0], [1.62719214E12, 415.0], [1.62719262E12, 498.0], [1.62719208E12, 452.0], [1.62719256E12, 446.0], [1.62719226E12, 422.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6271922E12, 333.0], [1.62719238E12, 344.0], [1.62719232E12, 334.0], [1.62719202E12, 325.0], [1.6271925E12, 354.0], [1.62719244E12, 339.0], [1.62719214E12, 339.0], [1.62719262E12, 332.0], [1.62719208E12, 338.0], [1.62719256E12, 342.0], [1.62719226E12, 329.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6271922E12, 363.0], [1.62719238E12, 371.0], [1.62719232E12, 365.0], [1.62719202E12, 357.0], [1.6271925E12, 383.0], [1.62719244E12, 363.0], [1.62719214E12, 373.0], [1.62719262E12, 366.0], [1.62719208E12, 385.0], [1.62719256E12, 396.0], [1.62719226E12, 367.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6271922E12, 344.0], [1.62719238E12, 351.0], [1.62719232E12, 349.0], [1.62719202E12, 339.0], [1.6271925E12, 366.0], [1.62719244E12, 352.0], [1.62719214E12, 349.0], [1.62719262E12, 345.0], [1.62719208E12, 348.0], [1.62719256E12, 354.0], [1.62719226E12, 338.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6271922E12, 151.0], [1.62719238E12, 236.0], [1.62719232E12, 211.0], [1.62719202E12, 72.0], [1.6271925E12, 235.0], [1.62719244E12, 225.0], [1.62719214E12, 242.0], [1.62719262E12, 104.0], [1.62719208E12, 228.0], [1.62719256E12, 186.0], [1.62719226E12, 172.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6271922E12, 287.0], [1.62719238E12, 304.0], [1.62719232E12, 299.0], [1.62719202E12, 288.0], [1.6271925E12, 304.0], [1.62719244E12, 298.0], [1.62719214E12, 296.0], [1.62719262E12, 283.0], [1.62719208E12, 297.0], [1.62719256E12, 293.0], [1.62719226E12, 286.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719262E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 166.0, "minX": 192.0, "maxY": 389.0, "series": [{"data": [[192.0, 166.0], [691.0, 348.0], [763.0, 389.0], [768.0, 381.0], [828.0, 350.0], [805.0, 351.0], [821.0, 340.0], [844.0, 360.0], [854.0, 356.0], [893.0, 331.0], [895.0, 294.0], [889.0, 320.0], [892.0, 325.0], [891.0, 337.0], [870.0, 330.0], [886.0, 354.0], [882.0, 328.0], [885.0, 330.0], [878.0, 330.0], [865.0, 340.0], [869.0, 348.0], [871.0, 354.0], [898.0, 327.0], [907.0, 315.0], [904.0, 329.0], [900.0, 312.0], [899.0, 336.0], [910.0, 315.0], [909.0, 325.0], [911.0, 309.0], [897.0, 348.0], [920.0, 311.0], [914.0, 322.0], [916.0, 325.0], [917.0, 334.0], [918.0, 303.0], [919.0, 311.0], [924.0, 318.0], [921.0, 324.0], [922.0, 330.0], [926.0, 321.0], [913.0, 307.0], [912.0, 300.0], [927.0, 295.0], [901.0, 329.0], [903.0, 330.0], [902.0, 331.5], [933.0, 315.0], [928.0, 322.0], [929.0, 311.0], [931.0, 292.0], [932.0, 307.0], [943.0, 313.0], [940.0, 316.0], [941.0, 311.0], [942.0, 309.0], [945.0, 310.0], [950.0, 317.0], [951.0, 303.0], [947.0, 309.0], [948.0, 314.0], [956.0, 306.0], [957.0, 312.0], [958.0, 302.0], [944.0, 326.0], [959.0, 307.5], [955.0, 316.0], [935.0, 311.0], [952.0, 309.0], [953.0, 308.0], [954.0, 318.0], [934.0, 307.0], [939.0, 324.0], [938.0, 317.0], [937.0, 317.0], [936.0, 313.0], [964.0, 314.0], [960.0, 306.0], [968.0, 306.0], [962.0, 306.0], [961.0, 303.0], [981.0, 305.0], [976.0, 308.0], [980.0, 297.0], [979.0, 293.0], [977.0, 288.0], [978.0, 312.0], [989.0, 301.0], [991.0, 298.0], [965.0, 316.0], [966.0, 305.0], [967.0, 301.0], [986.0, 311.0], [987.0, 283.0], [985.0, 306.0], [984.0, 296.0], [988.0, 282.0], [969.0, 307.0], [974.0, 306.0], [975.0, 302.0], [972.0, 286.0], [973.0, 303.0], [970.0, 307.0], [971.0, 305.0], [982.0, 300.0], [983.0, 296.0], [963.0, 312.0], [995.0, 292.0], [1017.0, 295.0], [1000.0, 303.0], [1001.0, 290.0], [1018.0, 288.0], [1019.0, 286.0], [1023.0, 293.0], [1021.0, 295.0], [1022.0, 315.0], [1011.0, 299.0], [1010.0, 296.0], [1008.0, 296.0], [1012.0, 294.0], [1013.0, 272.0], [1015.0, 297.0], [1014.0, 286.0], [1020.0, 291.0], [999.0, 286.0], [998.0, 290.0], [1016.0, 287.0], [994.0, 299.0], [992.0, 295.0], [993.0, 305.0], [1004.0, 303.0], [1005.0, 295.0], [1006.0, 298.0], [1002.0, 302.0], [1003.0, 290.0], [1007.0, 301.0], [996.0, 293.0], [997.0, 300.0], [1029.0, 293.0], [1081.0, 282.0], [1071.0, 277.0], [1065.0, 282.0], [1064.0, 266.5], [1067.0, 296.0], [1068.0, 277.5], [1066.0, 275.0], [1069.0, 272.0], [1050.0, 288.0], [1059.0, 284.0], [1058.0, 280.0], [1062.0, 286.0], [1083.0, 272.0], [1082.0, 282.0], [1085.0, 275.0], [1084.0, 282.0], [1086.0, 268.0], [1087.0, 278.5], [1056.0, 266.0], [1057.0, 282.0], [1025.0, 284.0], [1024.0, 294.0], [1028.0, 292.0], [1027.0, 297.0], [1026.0, 296.0], [1054.0, 285.0], [1053.0, 283.0], [1051.0, 275.0], [1052.0, 282.0], [1032.0, 290.0], [1030.0, 282.0], [1031.0, 280.0], [1033.0, 287.0], [1034.0, 289.0], [1036.0, 286.0], [1038.0, 289.0], [1039.0, 293.0], [1037.0, 294.0], [1074.0, 301.0], [1072.0, 280.0], [1035.0, 288.0], [1080.0, 280.0], [1079.0, 293.0], [1078.0, 269.0], [1076.0, 288.0], [1077.0, 285.0], [1075.0, 281.0], [1047.0, 302.0], [1046.0, 262.0], [1048.0, 291.0], [1049.0, 279.0], [1044.0, 291.0], [1045.0, 296.0], [1040.0, 287.0], [1041.0, 283.0], [1042.0, 289.0], [1043.0, 285.0], [1138.0, 276.0], [1091.0, 275.0], [1118.0, 275.0], [1101.0, 271.0], [1117.0, 266.0], [1116.0, 289.0], [1115.0, 282.0], [1108.0, 276.0], [1112.0, 272.0], [1111.0, 287.0], [1110.0, 269.0], [1107.0, 274.0], [1104.0, 273.0], [1105.0, 265.0], [1103.0, 274.0], [1102.0, 277.0], [1136.0, 278.5], [1137.0, 283.0], [1094.0, 283.0], [1092.0, 275.0], [1093.0, 270.0], [1100.0, 283.0], [1099.0, 273.0], [1098.0, 273.0], [1095.0, 267.0], [1125.0, 271.0], [1123.0, 260.0], [1128.0, 272.0], [1127.0, 268.0], [1130.0, 262.0], [1131.0, 273.0], [1134.0, 266.0], [1132.0, 293.0], [1121.0, 267.0], [1144.0, 267.0], [1142.0, 261.0], [1143.0, 275.0], [1139.0, 280.0], [1140.0, 267.0], [1148.0, 263.0], [1151.0, 273.0], [1146.0, 260.0], [1145.0, 265.0], [1147.0, 279.0], [1090.0, 276.0], [1088.0, 274.0], [1089.0, 277.0], [1165.0, 277.0], [1186.0, 264.0], [1168.0, 275.0], [1174.0, 263.0], [1198.0, 278.0], [1199.0, 259.0], [1175.0, 269.0], [1167.0, 256.0], [1166.0, 260.0], [1213.0, 245.0], [1185.0, 261.0], [1211.0, 252.0], [1153.0, 270.0], [1159.0, 267.0], [1154.0, 275.0], [1155.0, 245.0], [1161.0, 263.0], [1162.0, 269.0], [1180.0, 250.0], [1183.0, 258.0], [1181.0, 256.0], [1257.0, 253.0], [1237.0, 231.0], [1258.0, 234.0], [1251.0, 252.0], [1235.0, 250.0], [1223.0, 232.0], [1272.0, 232.0], [1340.0, 222.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1340.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 166.0, "minX": 192.0, "maxY": 389.0, "series": [{"data": [[192.0, 166.0], [691.0, 348.0], [763.0, 389.0], [768.0, 381.0], [828.0, 350.0], [805.0, 351.0], [821.0, 340.0], [844.0, 360.0], [854.0, 356.0], [893.0, 331.0], [895.0, 294.0], [889.0, 320.0], [892.0, 325.0], [891.0, 337.0], [870.0, 330.0], [886.0, 354.0], [882.0, 328.0], [885.0, 330.0], [878.0, 330.0], [865.0, 340.0], [869.0, 348.0], [871.0, 354.0], [898.0, 327.0], [907.0, 315.0], [904.0, 329.0], [900.0, 312.0], [899.0, 336.0], [910.0, 315.0], [909.0, 325.0], [911.0, 309.0], [897.0, 348.0], [920.0, 311.0], [914.0, 322.0], [916.0, 325.0], [917.0, 334.0], [918.0, 303.0], [919.0, 311.0], [924.0, 318.0], [921.0, 324.0], [922.0, 330.0], [926.0, 321.0], [913.0, 307.0], [912.0, 300.0], [927.0, 295.0], [901.0, 329.0], [903.0, 330.0], [902.0, 331.5], [933.0, 315.0], [928.0, 322.0], [929.0, 311.0], [931.0, 292.0], [932.0, 307.0], [943.0, 313.0], [940.0, 316.0], [941.0, 311.0], [942.0, 309.0], [945.0, 310.0], [950.0, 317.0], [951.0, 303.0], [947.0, 309.0], [948.0, 314.0], [956.0, 306.0], [957.0, 312.0], [958.0, 302.0], [944.0, 326.0], [959.0, 307.0], [955.0, 316.0], [935.0, 311.0], [952.0, 309.0], [953.0, 308.0], [954.0, 318.0], [934.0, 307.0], [939.0, 324.0], [938.0, 317.0], [937.0, 317.0], [936.0, 313.0], [964.0, 314.0], [960.0, 306.0], [968.0, 306.0], [962.0, 306.0], [961.0, 303.0], [981.0, 305.0], [976.0, 308.0], [980.0, 297.0], [979.0, 293.0], [977.0, 288.0], [978.0, 312.0], [989.0, 301.0], [991.0, 298.0], [965.0, 316.0], [966.0, 305.0], [967.0, 301.0], [986.0, 311.0], [987.0, 283.0], [985.0, 306.0], [984.0, 296.0], [988.0, 282.0], [969.0, 307.0], [974.0, 306.0], [975.0, 302.0], [972.0, 286.0], [973.0, 303.0], [970.0, 307.0], [971.0, 305.0], [982.0, 300.0], [983.0, 296.0], [963.0, 312.0], [995.0, 292.0], [1017.0, 295.0], [1000.0, 303.0], [1001.0, 290.0], [1018.0, 288.0], [1019.0, 286.0], [1023.0, 293.0], [1021.0, 295.0], [1022.0, 315.0], [1011.0, 299.0], [1010.0, 296.0], [1008.0, 296.0], [1012.0, 294.0], [1013.0, 272.0], [1015.0, 297.0], [1014.0, 286.0], [1020.0, 291.0], [999.0, 286.0], [998.0, 290.0], [1016.0, 287.0], [994.0, 299.0], [992.0, 294.5], [993.0, 305.0], [1004.0, 303.0], [1005.0, 295.0], [1006.0, 298.0], [1002.0, 302.0], [1003.0, 290.0], [1007.0, 301.0], [996.0, 293.0], [997.0, 300.0], [1029.0, 293.0], [1081.0, 282.0], [1071.0, 277.0], [1065.0, 282.0], [1064.0, 266.5], [1067.0, 296.0], [1068.0, 277.0], [1066.0, 275.0], [1069.0, 272.0], [1050.0, 288.0], [1059.0, 284.0], [1058.0, 280.0], [1062.0, 286.0], [1083.0, 272.0], [1082.0, 282.0], [1085.0, 275.0], [1084.0, 282.0], [1086.0, 268.0], [1087.0, 278.5], [1056.0, 266.0], [1057.0, 282.0], [1025.0, 284.0], [1024.0, 294.0], [1028.0, 292.0], [1027.0, 297.0], [1026.0, 296.0], [1054.0, 285.0], [1053.0, 283.0], [1051.0, 275.0], [1052.0, 282.0], [1032.0, 290.0], [1030.0, 282.0], [1031.0, 280.0], [1033.0, 287.0], [1034.0, 289.0], [1036.0, 286.0], [1038.0, 289.0], [1039.0, 293.0], [1037.0, 294.0], [1074.0, 301.0], [1072.0, 280.0], [1035.0, 288.0], [1080.0, 280.0], [1079.0, 293.0], [1078.0, 269.0], [1076.0, 288.0], [1077.0, 285.0], [1075.0, 281.0], [1047.0, 302.0], [1046.0, 262.0], [1048.0, 291.0], [1049.0, 279.0], [1044.0, 291.0], [1045.0, 296.0], [1040.0, 287.0], [1041.0, 283.0], [1042.0, 289.0], [1043.0, 285.0], [1138.0, 276.0], [1091.0, 275.0], [1118.0, 275.0], [1101.0, 271.0], [1117.0, 266.0], [1116.0, 289.0], [1115.0, 282.0], [1108.0, 276.0], [1112.0, 272.0], [1111.0, 287.0], [1110.0, 269.0], [1107.0, 274.0], [1104.0, 273.0], [1105.0, 265.0], [1103.0, 274.0], [1102.0, 277.0], [1136.0, 278.5], [1137.0, 283.0], [1094.0, 283.0], [1092.0, 275.0], [1093.0, 270.0], [1100.0, 283.0], [1099.0, 273.0], [1098.0, 273.0], [1095.0, 267.0], [1125.0, 271.0], [1123.0, 260.0], [1128.0, 272.0], [1127.0, 268.0], [1130.0, 262.0], [1131.0, 273.0], [1134.0, 266.0], [1132.0, 293.0], [1121.0, 267.0], [1144.0, 267.0], [1142.0, 261.0], [1143.0, 275.0], [1139.0, 280.0], [1140.0, 267.0], [1148.0, 263.0], [1151.0, 273.0], [1146.0, 260.0], [1145.0, 265.0], [1147.0, 279.0], [1090.0, 276.0], [1088.0, 274.0], [1089.0, 277.0], [1165.0, 277.0], [1186.0, 264.0], [1168.0, 275.0], [1174.0, 263.0], [1198.0, 278.0], [1199.0, 259.0], [1175.0, 269.0], [1167.0, 256.0], [1166.0, 260.0], [1213.0, 245.0], [1185.0, 261.0], [1211.0, 252.0], [1153.0, 270.0], [1159.0, 267.0], [1154.0, 275.0], [1155.0, 245.0], [1161.0, 263.0], [1162.0, 269.0], [1180.0, 250.0], [1183.0, 258.0], [1181.0, 256.0], [1257.0, 253.0], [1237.0, 231.0], [1258.0, 234.0], [1251.0, 252.0], [1235.0, 250.0], [1223.0, 232.0], [1272.0, 232.0], [1340.0, 222.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1340.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 507.25, "minX": 1.62719202E12, "maxY": 1083.5666666666666, "series": [{"data": [[1.6271922E12, 1050.2166666666667], [1.62719238E12, 986.4333333333333], [1.62719232E12, 1008.6666666666666], [1.62719202E12, 507.25], [1.6271925E12, 983.6166666666667], [1.62719244E12, 990.5833333333334], [1.62719214E12, 997.7], [1.62719262E12, 517.95], [1.62719208E12, 997.7666666666667], [1.62719256E12, 1002.2], [1.62719226E12, 1083.5666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719262E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 502.25, "minX": 1.62719202E12, "maxY": 1083.5666666666666, "series": [{"data": [[1.6271922E12, 1050.2166666666667], [1.62719238E12, 986.4333333333333], [1.62719232E12, 1008.6666666666666], [1.62719202E12, 502.25], [1.6271925E12, 983.6166666666667], [1.62719244E12, 990.5833333333334], [1.62719214E12, 997.7], [1.62719262E12, 522.95], [1.62719208E12, 997.7666666666667], [1.62719256E12, 1002.2], [1.62719226E12, 1083.5666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62719262E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 502.25, "minX": 1.62719202E12, "maxY": 1083.5666666666666, "series": [{"data": [[1.6271922E12, 1050.2166666666667], [1.62719238E12, 986.4333333333333], [1.62719232E12, 1008.6666666666666], [1.62719202E12, 502.25], [1.6271925E12, 983.6166666666667], [1.62719244E12, 990.5833333333334], [1.62719214E12, 997.7], [1.62719262E12, 522.95], [1.62719208E12, 997.7666666666667], [1.62719256E12, 1002.2], [1.62719226E12, 1083.5666666666666]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719262E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 502.25, "minX": 1.62719202E12, "maxY": 1083.5666666666666, "series": [{"data": [[1.6271922E12, 1050.2166666666667], [1.62719238E12, 986.4333333333333], [1.62719232E12, 1008.6666666666666], [1.62719202E12, 502.25], [1.6271925E12, 983.6166666666667], [1.62719244E12, 990.5833333333334], [1.62719214E12, 997.7], [1.62719262E12, 522.95], [1.62719208E12, 997.7666666666667], [1.62719256E12, 1002.2], [1.62719226E12, 1083.5666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62719262E12, "title": "Total Transactions Per Second"}},
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

