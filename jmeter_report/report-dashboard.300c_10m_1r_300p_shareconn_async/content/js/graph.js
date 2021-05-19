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
        data: {"result": {"minY": 107.0, "minX": 0.0, "maxY": 1236.0, "series": [{"data": [[0.0, 107.0], [0.1, 165.0], [0.2, 173.0], [0.3, 177.0], [0.4, 180.0], [0.5, 182.0], [0.6, 184.0], [0.7, 186.0], [0.8, 187.0], [0.9, 189.0], [1.0, 190.0], [1.1, 192.0], [1.2, 193.0], [1.3, 194.0], [1.4, 195.0], [1.5, 196.0], [1.6, 197.0], [1.7, 198.0], [1.8, 199.0], [1.9, 200.0], [2.0, 201.0], [2.1, 202.0], [2.2, 202.0], [2.3, 203.0], [2.4, 204.0], [2.5, 205.0], [2.6, 206.0], [2.7, 206.0], [2.8, 207.0], [2.9, 208.0], [3.0, 208.0], [3.1, 209.0], [3.2, 209.0], [3.3, 210.0], [3.4, 211.0], [3.5, 211.0], [3.6, 212.0], [3.7, 212.0], [3.8, 213.0], [3.9, 213.0], [4.0, 214.0], [4.1, 214.0], [4.2, 215.0], [4.3, 215.0], [4.4, 216.0], [4.5, 216.0], [4.6, 217.0], [4.7, 217.0], [4.8, 217.0], [4.9, 218.0], [5.0, 218.0], [5.1, 219.0], [5.2, 219.0], [5.3, 219.0], [5.4, 220.0], [5.5, 220.0], [5.6, 220.0], [5.7, 221.0], [5.8, 221.0], [5.9, 221.0], [6.0, 222.0], [6.1, 222.0], [6.2, 222.0], [6.3, 223.0], [6.4, 223.0], [6.5, 223.0], [6.6, 224.0], [6.7, 224.0], [6.8, 224.0], [6.9, 224.0], [7.0, 225.0], [7.1, 225.0], [7.2, 225.0], [7.3, 225.0], [7.4, 226.0], [7.5, 226.0], [7.6, 226.0], [7.7, 226.0], [7.8, 227.0], [7.9, 227.0], [8.0, 227.0], [8.1, 227.0], [8.2, 227.0], [8.3, 228.0], [8.4, 228.0], [8.5, 228.0], [8.6, 228.0], [8.7, 229.0], [8.8, 229.0], [8.9, 229.0], [9.0, 229.0], [9.1, 229.0], [9.2, 230.0], [9.3, 230.0], [9.4, 230.0], [9.5, 230.0], [9.6, 230.0], [9.7, 231.0], [9.8, 231.0], [9.9, 231.0], [10.0, 231.0], [10.1, 231.0], [10.2, 232.0], [10.3, 232.0], [10.4, 232.0], [10.5, 232.0], [10.6, 232.0], [10.7, 232.0], [10.8, 233.0], [10.9, 233.0], [11.0, 233.0], [11.1, 233.0], [11.2, 233.0], [11.3, 233.0], [11.4, 234.0], [11.5, 234.0], [11.6, 234.0], [11.7, 234.0], [11.8, 234.0], [11.9, 234.0], [12.0, 235.0], [12.1, 235.0], [12.2, 235.0], [12.3, 235.0], [12.4, 235.0], [12.5, 235.0], [12.6, 236.0], [12.7, 236.0], [12.8, 236.0], [12.9, 236.0], [13.0, 236.0], [13.1, 236.0], [13.2, 236.0], [13.3, 237.0], [13.4, 237.0], [13.5, 237.0], [13.6, 237.0], [13.7, 237.0], [13.8, 237.0], [13.9, 237.0], [14.0, 238.0], [14.1, 238.0], [14.2, 238.0], [14.3, 238.0], [14.4, 238.0], [14.5, 238.0], [14.6, 238.0], [14.7, 238.0], [14.8, 239.0], [14.9, 239.0], [15.0, 239.0], [15.1, 239.0], [15.2, 239.0], [15.3, 239.0], [15.4, 239.0], [15.5, 240.0], [15.6, 240.0], [15.7, 240.0], [15.8, 240.0], [15.9, 240.0], [16.0, 240.0], [16.1, 240.0], [16.2, 240.0], [16.3, 241.0], [16.4, 241.0], [16.5, 241.0], [16.6, 241.0], [16.7, 241.0], [16.8, 241.0], [16.9, 241.0], [17.0, 241.0], [17.1, 242.0], [17.2, 242.0], [17.3, 242.0], [17.4, 242.0], [17.5, 242.0], [17.6, 242.0], [17.7, 242.0], [17.8, 242.0], [17.9, 242.0], [18.0, 243.0], [18.1, 243.0], [18.2, 243.0], [18.3, 243.0], [18.4, 243.0], [18.5, 243.0], [18.6, 243.0], [18.7, 243.0], [18.8, 243.0], [18.9, 244.0], [19.0, 244.0], [19.1, 244.0], [19.2, 244.0], [19.3, 244.0], [19.4, 244.0], [19.5, 244.0], [19.6, 244.0], [19.7, 244.0], [19.8, 245.0], [19.9, 245.0], [20.0, 245.0], [20.1, 245.0], [20.2, 245.0], [20.3, 245.0], [20.4, 245.0], [20.5, 245.0], [20.6, 245.0], [20.7, 246.0], [20.8, 246.0], [20.9, 246.0], [21.0, 246.0], [21.1, 246.0], [21.2, 246.0], [21.3, 246.0], [21.4, 246.0], [21.5, 246.0], [21.6, 246.0], [21.7, 247.0], [21.8, 247.0], [21.9, 247.0], [22.0, 247.0], [22.1, 247.0], [22.2, 247.0], [22.3, 247.0], [22.4, 247.0], [22.5, 247.0], [22.6, 247.0], [22.7, 248.0], [22.8, 248.0], [22.9, 248.0], [23.0, 248.0], [23.1, 248.0], [23.2, 248.0], [23.3, 248.0], [23.4, 248.0], [23.5, 248.0], [23.6, 248.0], [23.7, 249.0], [23.8, 249.0], [23.9, 249.0], [24.0, 249.0], [24.1, 249.0], [24.2, 249.0], [24.3, 249.0], [24.4, 249.0], [24.5, 249.0], [24.6, 249.0], [24.7, 249.0], [24.8, 249.0], [24.9, 250.0], [25.0, 250.0], [25.1, 250.0], [25.2, 250.0], [25.3, 250.0], [25.4, 250.0], [25.5, 250.0], [25.6, 250.0], [25.7, 250.0], [25.8, 250.0], [25.9, 250.0], [26.0, 251.0], [26.1, 251.0], [26.2, 251.0], [26.3, 251.0], [26.4, 251.0], [26.5, 251.0], [26.6, 251.0], [26.7, 251.0], [26.8, 251.0], [26.9, 251.0], [27.0, 251.0], [27.1, 252.0], [27.2, 252.0], [27.3, 252.0], [27.4, 252.0], [27.5, 252.0], [27.6, 252.0], [27.7, 252.0], [27.8, 252.0], [27.9, 252.0], [28.0, 252.0], [28.1, 252.0], [28.2, 252.0], [28.3, 253.0], [28.4, 253.0], [28.5, 253.0], [28.6, 253.0], [28.7, 253.0], [28.8, 253.0], [28.9, 253.0], [29.0, 253.0], [29.1, 253.0], [29.2, 253.0], [29.3, 253.0], [29.4, 253.0], [29.5, 254.0], [29.6, 254.0], [29.7, 254.0], [29.8, 254.0], [29.9, 254.0], [30.0, 254.0], [30.1, 254.0], [30.2, 254.0], [30.3, 254.0], [30.4, 254.0], [30.5, 254.0], [30.6, 254.0], [30.7, 255.0], [30.8, 255.0], [30.9, 255.0], [31.0, 255.0], [31.1, 255.0], [31.2, 255.0], [31.3, 255.0], [31.4, 255.0], [31.5, 255.0], [31.6, 255.0], [31.7, 255.0], [31.8, 255.0], [31.9, 255.0], [32.0, 256.0], [32.1, 256.0], [32.2, 256.0], [32.3, 256.0], [32.4, 256.0], [32.5, 256.0], [32.6, 256.0], [32.7, 256.0], [32.8, 256.0], [32.9, 256.0], [33.0, 256.0], [33.1, 256.0], [33.2, 256.0], [33.3, 257.0], [33.4, 257.0], [33.5, 257.0], [33.6, 257.0], [33.7, 257.0], [33.8, 257.0], [33.9, 257.0], [34.0, 257.0], [34.1, 257.0], [34.2, 257.0], [34.3, 257.0], [34.4, 257.0], [34.5, 257.0], [34.6, 258.0], [34.7, 258.0], [34.8, 258.0], [34.9, 258.0], [35.0, 258.0], [35.1, 258.0], [35.2, 258.0], [35.3, 258.0], [35.4, 258.0], [35.5, 258.0], [35.6, 258.0], [35.7, 258.0], [35.8, 258.0], [35.9, 258.0], [36.0, 259.0], [36.1, 259.0], [36.2, 259.0], [36.3, 259.0], [36.4, 259.0], [36.5, 259.0], [36.6, 259.0], [36.7, 259.0], [36.8, 259.0], [36.9, 259.0], [37.0, 259.0], [37.1, 259.0], [37.2, 259.0], [37.3, 260.0], [37.4, 260.0], [37.5, 260.0], [37.6, 260.0], [37.7, 260.0], [37.8, 260.0], [37.9, 260.0], [38.0, 260.0], [38.1, 260.0], [38.2, 260.0], [38.3, 260.0], [38.4, 260.0], [38.5, 260.0], [38.6, 260.0], [38.7, 261.0], [38.8, 261.0], [38.9, 261.0], [39.0, 261.0], [39.1, 261.0], [39.2, 261.0], [39.3, 261.0], [39.4, 261.0], [39.5, 261.0], [39.6, 261.0], [39.7, 261.0], [39.8, 261.0], [39.9, 261.0], [40.0, 261.0], [40.1, 262.0], [40.2, 262.0], [40.3, 262.0], [40.4, 262.0], [40.5, 262.0], [40.6, 262.0], [40.7, 262.0], [40.8, 262.0], [40.9, 262.0], [41.0, 262.0], [41.1, 262.0], [41.2, 262.0], [41.3, 262.0], [41.4, 263.0], [41.5, 263.0], [41.6, 263.0], [41.7, 263.0], [41.8, 263.0], [41.9, 263.0], [42.0, 263.0], [42.1, 263.0], [42.2, 263.0], [42.3, 263.0], [42.4, 263.0], [42.5, 263.0], [42.6, 263.0], [42.7, 263.0], [42.8, 264.0], [42.9, 264.0], [43.0, 264.0], [43.1, 264.0], [43.2, 264.0], [43.3, 264.0], [43.4, 264.0], [43.5, 264.0], [43.6, 264.0], [43.7, 264.0], [43.8, 264.0], [43.9, 264.0], [44.0, 264.0], [44.1, 264.0], [44.2, 265.0], [44.3, 265.0], [44.4, 265.0], [44.5, 265.0], [44.6, 265.0], [44.7, 265.0], [44.8, 265.0], [44.9, 265.0], [45.0, 265.0], [45.1, 265.0], [45.2, 265.0], [45.3, 265.0], [45.4, 265.0], [45.5, 265.0], [45.6, 266.0], [45.7, 266.0], [45.8, 266.0], [45.9, 266.0], [46.0, 266.0], [46.1, 266.0], [46.2, 266.0], [46.3, 266.0], [46.4, 266.0], [46.5, 266.0], [46.6, 266.0], [46.7, 266.0], [46.8, 266.0], [46.9, 266.0], [47.0, 267.0], [47.1, 267.0], [47.2, 267.0], [47.3, 267.0], [47.4, 267.0], [47.5, 267.0], [47.6, 267.0], [47.7, 267.0], [47.8, 267.0], [47.9, 267.0], [48.0, 267.0], [48.1, 267.0], [48.2, 267.0], [48.3, 267.0], [48.4, 268.0], [48.5, 268.0], [48.6, 268.0], [48.7, 268.0], [48.8, 268.0], [48.9, 268.0], [49.0, 268.0], [49.1, 268.0], [49.2, 268.0], [49.3, 268.0], [49.4, 268.0], [49.5, 268.0], [49.6, 268.0], [49.7, 269.0], [49.8, 269.0], [49.9, 269.0], [50.0, 269.0], [50.1, 269.0], [50.2, 269.0], [50.3, 269.0], [50.4, 269.0], [50.5, 269.0], [50.6, 269.0], [50.7, 269.0], [50.8, 269.0], [50.9, 269.0], [51.0, 269.0], [51.1, 270.0], [51.2, 270.0], [51.3, 270.0], [51.4, 270.0], [51.5, 270.0], [51.6, 270.0], [51.7, 270.0], [51.8, 270.0], [51.9, 270.0], [52.0, 270.0], [52.1, 270.0], [52.2, 270.0], [52.3, 270.0], [52.4, 271.0], [52.5, 271.0], [52.6, 271.0], [52.7, 271.0], [52.8, 271.0], [52.9, 271.0], [53.0, 271.0], [53.1, 271.0], [53.2, 271.0], [53.3, 271.0], [53.4, 271.0], [53.5, 271.0], [53.6, 271.0], [53.7, 271.0], [53.8, 272.0], [53.9, 272.0], [54.0, 272.0], [54.1, 272.0], [54.2, 272.0], [54.3, 272.0], [54.4, 272.0], [54.5, 272.0], [54.6, 272.0], [54.7, 272.0], [54.8, 272.0], [54.9, 272.0], [55.0, 272.0], [55.1, 272.0], [55.2, 273.0], [55.3, 273.0], [55.4, 273.0], [55.5, 273.0], [55.6, 273.0], [55.7, 273.0], [55.8, 273.0], [55.9, 273.0], [56.0, 273.0], [56.1, 273.0], [56.2, 273.0], [56.3, 273.0], [56.4, 273.0], [56.5, 274.0], [56.6, 274.0], [56.7, 274.0], [56.8, 274.0], [56.9, 274.0], [57.0, 274.0], [57.1, 274.0], [57.2, 274.0], [57.3, 274.0], [57.4, 274.0], [57.5, 274.0], [57.6, 274.0], [57.7, 274.0], [57.8, 274.0], [57.9, 275.0], [58.0, 275.0], [58.1, 275.0], [58.2, 275.0], [58.3, 275.0], [58.4, 275.0], [58.5, 275.0], [58.6, 275.0], [58.7, 275.0], [58.8, 275.0], [58.9, 275.0], [59.0, 275.0], [59.1, 275.0], [59.2, 275.0], [59.3, 276.0], [59.4, 276.0], [59.5, 276.0], [59.6, 276.0], [59.7, 276.0], [59.8, 276.0], [59.9, 276.0], [60.0, 276.0], [60.1, 276.0], [60.2, 276.0], [60.3, 276.0], [60.4, 276.0], [60.5, 276.0], [60.6, 277.0], [60.7, 277.0], [60.8, 277.0], [60.9, 277.0], [61.0, 277.0], [61.1, 277.0], [61.2, 277.0], [61.3, 277.0], [61.4, 277.0], [61.5, 277.0], [61.6, 277.0], [61.7, 277.0], [61.8, 277.0], [61.9, 277.0], [62.0, 278.0], [62.1, 278.0], [62.2, 278.0], [62.3, 278.0], [62.4, 278.0], [62.5, 278.0], [62.6, 278.0], [62.7, 278.0], [62.8, 278.0], [62.9, 278.0], [63.0, 278.0], [63.1, 278.0], [63.2, 278.0], [63.3, 279.0], [63.4, 279.0], [63.5, 279.0], [63.6, 279.0], [63.7, 279.0], [63.8, 279.0], [63.9, 279.0], [64.0, 279.0], [64.1, 279.0], [64.2, 279.0], [64.3, 279.0], [64.4, 279.0], [64.5, 279.0], [64.6, 280.0], [64.7, 280.0], [64.8, 280.0], [64.9, 280.0], [65.0, 280.0], [65.1, 280.0], [65.2, 280.0], [65.3, 280.0], [65.4, 280.0], [65.5, 280.0], [65.6, 280.0], [65.7, 280.0], [65.8, 281.0], [65.9, 281.0], [66.0, 281.0], [66.1, 281.0], [66.2, 281.0], [66.3, 281.0], [66.4, 281.0], [66.5, 281.0], [66.6, 281.0], [66.7, 281.0], [66.8, 281.0], [66.9, 281.0], [67.0, 281.0], [67.1, 282.0], [67.2, 282.0], [67.3, 282.0], [67.4, 282.0], [67.5, 282.0], [67.6, 282.0], [67.7, 282.0], [67.8, 282.0], [67.9, 282.0], [68.0, 282.0], [68.1, 282.0], [68.2, 282.0], [68.3, 283.0], [68.4, 283.0], [68.5, 283.0], [68.6, 283.0], [68.7, 283.0], [68.8, 283.0], [68.9, 283.0], [69.0, 283.0], [69.1, 283.0], [69.2, 283.0], [69.3, 283.0], [69.4, 283.0], [69.5, 284.0], [69.6, 284.0], [69.7, 284.0], [69.8, 284.0], [69.9, 284.0], [70.0, 284.0], [70.1, 284.0], [70.2, 284.0], [70.3, 284.0], [70.4, 284.0], [70.5, 284.0], [70.6, 285.0], [70.7, 285.0], [70.8, 285.0], [70.9, 285.0], [71.0, 285.0], [71.1, 285.0], [71.2, 285.0], [71.3, 285.0], [71.4, 285.0], [71.5, 285.0], [71.6, 285.0], [71.7, 286.0], [71.8, 286.0], [71.9, 286.0], [72.0, 286.0], [72.1, 286.0], [72.2, 286.0], [72.3, 286.0], [72.4, 286.0], [72.5, 286.0], [72.6, 286.0], [72.7, 286.0], [72.8, 287.0], [72.9, 287.0], [73.0, 287.0], [73.1, 287.0], [73.2, 287.0], [73.3, 287.0], [73.4, 287.0], [73.5, 287.0], [73.6, 287.0], [73.7, 287.0], [73.8, 288.0], [73.9, 288.0], [74.0, 288.0], [74.1, 288.0], [74.2, 288.0], [74.3, 288.0], [74.4, 288.0], [74.5, 288.0], [74.6, 288.0], [74.7, 288.0], [74.8, 288.0], [74.9, 289.0], [75.0, 289.0], [75.1, 289.0], [75.2, 289.0], [75.3, 289.0], [75.4, 289.0], [75.5, 289.0], [75.6, 289.0], [75.7, 289.0], [75.8, 290.0], [75.9, 290.0], [76.0, 290.0], [76.1, 290.0], [76.2, 290.0], [76.3, 290.0], [76.4, 290.0], [76.5, 290.0], [76.6, 290.0], [76.7, 290.0], [76.8, 291.0], [76.9, 291.0], [77.0, 291.0], [77.1, 291.0], [77.2, 291.0], [77.3, 291.0], [77.4, 291.0], [77.5, 291.0], [77.6, 291.0], [77.7, 291.0], [77.8, 292.0], [77.9, 292.0], [78.0, 292.0], [78.1, 292.0], [78.2, 292.0], [78.3, 292.0], [78.4, 292.0], [78.5, 292.0], [78.6, 292.0], [78.7, 293.0], [78.8, 293.0], [78.9, 293.0], [79.0, 293.0], [79.1, 293.0], [79.2, 293.0], [79.3, 293.0], [79.4, 293.0], [79.5, 293.0], [79.6, 294.0], [79.7, 294.0], [79.8, 294.0], [79.9, 294.0], [80.0, 294.0], [80.1, 294.0], [80.2, 294.0], [80.3, 294.0], [80.4, 294.0], [80.5, 295.0], [80.6, 295.0], [80.7, 295.0], [80.8, 295.0], [80.9, 295.0], [81.0, 295.0], [81.1, 295.0], [81.2, 295.0], [81.3, 295.0], [81.4, 296.0], [81.5, 296.0], [81.6, 296.0], [81.7, 296.0], [81.8, 296.0], [81.9, 296.0], [82.0, 296.0], [82.1, 296.0], [82.2, 297.0], [82.3, 297.0], [82.4, 297.0], [82.5, 297.0], [82.6, 297.0], [82.7, 297.0], [82.8, 297.0], [82.9, 297.0], [83.0, 298.0], [83.1, 298.0], [83.2, 298.0], [83.3, 298.0], [83.4, 298.0], [83.5, 298.0], [83.6, 298.0], [83.7, 298.0], [83.8, 299.0], [83.9, 299.0], [84.0, 299.0], [84.1, 299.0], [84.2, 299.0], [84.3, 299.0], [84.4, 299.0], [84.5, 299.0], [84.6, 300.0], [84.7, 300.0], [84.8, 300.0], [84.9, 300.0], [85.0, 300.0], [85.1, 300.0], [85.2, 300.0], [85.3, 301.0], [85.4, 301.0], [85.5, 301.0], [85.6, 301.0], [85.7, 301.0], [85.8, 301.0], [85.9, 301.0], [86.0, 302.0], [86.1, 302.0], [86.2, 302.0], [86.3, 302.0], [86.4, 302.0], [86.5, 302.0], [86.6, 303.0], [86.7, 303.0], [86.8, 303.0], [86.9, 303.0], [87.0, 303.0], [87.1, 303.0], [87.2, 303.0], [87.3, 304.0], [87.4, 304.0], [87.5, 304.0], [87.6, 304.0], [87.7, 304.0], [87.8, 304.0], [87.9, 305.0], [88.0, 305.0], [88.1, 305.0], [88.2, 305.0], [88.3, 305.0], [88.4, 305.0], [88.5, 306.0], [88.6, 306.0], [88.7, 306.0], [88.8, 306.0], [88.9, 306.0], [89.0, 307.0], [89.1, 307.0], [89.2, 307.0], [89.3, 307.0], [89.4, 307.0], [89.5, 307.0], [89.6, 308.0], [89.7, 308.0], [89.8, 308.0], [89.9, 308.0], [90.0, 308.0], [90.1, 309.0], [90.2, 309.0], [90.3, 309.0], [90.4, 309.0], [90.5, 309.0], [90.6, 310.0], [90.7, 310.0], [90.8, 310.0], [90.9, 310.0], [91.0, 311.0], [91.1, 311.0], [91.2, 311.0], [91.3, 311.0], [91.4, 312.0], [91.5, 312.0], [91.6, 312.0], [91.7, 312.0], [91.8, 313.0], [91.9, 313.0], [92.0, 313.0], [92.1, 313.0], [92.2, 314.0], [92.3, 314.0], [92.4, 314.0], [92.5, 314.0], [92.6, 315.0], [92.7, 315.0], [92.8, 315.0], [92.9, 316.0], [93.0, 316.0], [93.1, 316.0], [93.2, 317.0], [93.3, 317.0], [93.4, 317.0], [93.5, 317.0], [93.6, 318.0], [93.7, 318.0], [93.8, 318.0], [93.9, 319.0], [94.0, 319.0], [94.1, 319.0], [94.2, 320.0], [94.3, 320.0], [94.4, 321.0], [94.5, 321.0], [94.6, 321.0], [94.7, 322.0], [94.8, 322.0], [94.9, 323.0], [95.0, 323.0], [95.1, 324.0], [95.2, 324.0], [95.3, 325.0], [95.4, 325.0], [95.5, 326.0], [95.6, 326.0], [95.7, 327.0], [95.8, 327.0], [95.9, 328.0], [96.0, 328.0], [96.1, 329.0], [96.2, 329.0], [96.3, 330.0], [96.4, 330.0], [96.5, 331.0], [96.6, 332.0], [96.7, 332.0], [96.8, 333.0], [96.9, 334.0], [97.0, 335.0], [97.1, 336.0], [97.2, 336.0], [97.3, 337.0], [97.4, 338.0], [97.5, 340.0], [97.6, 341.0], [97.7, 342.0], [97.8, 343.0], [97.9, 345.0], [98.0, 346.0], [98.1, 348.0], [98.2, 350.0], [98.3, 353.0], [98.4, 355.0], [98.5, 357.0], [98.6, 360.0], [98.7, 365.0], [98.8, 370.0], [98.9, 376.0], [99.0, 382.0], [99.1, 388.0], [99.2, 396.0], [99.3, 407.0], [99.4, 424.0], [99.5, 455.0], [99.6, 486.0], [99.7, 528.0], [99.8, 586.0], [99.9, 680.0], [100.0, 1236.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 548771.0, "series": [{"data": [[1100.0, 76.0], [300.0, 97694.0], [600.0, 622.0], [1200.0, 2.0], [700.0, 211.0], [100.0, 12230.0], [200.0, 548771.0], [800.0, 89.0], [400.0, 2659.0], [900.0, 86.0], [500.0, 1213.0], [1000.0, 137.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2424.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 661366.0, "series": [{"data": [[0.0, 661366.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2424.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 212.67592592592584, "minX": 1.6213245E12, "maxY": 300.0, "series": [{"data": [[1.6213248E12, 300.0], [1.6213251E12, 212.67592592592584], [1.6213245E12, 299.98897396630827], [1.62132498E12, 300.0], [1.62132468E12, 300.0], [1.62132486E12, 300.0], [1.62132504E12, 300.0], [1.62132456E12, 300.0], [1.62132474E12, 300.0], [1.62132492E12, 300.0], [1.62132462E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6213251E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133.0, "minX": 1.0, "maxY": 456.0, "series": [{"data": [[2.0, 142.0], [3.0, 149.0], [4.0, 153.0], [5.0, 166.0], [6.0, 152.0], [7.0, 160.0], [8.0, 161.0], [10.0, 160.0], [11.0, 160.0], [12.0, 162.0], [13.0, 168.0], [14.0, 161.0], [15.0, 165.0], [16.0, 165.0], [17.0, 165.0], [18.0, 164.0], [19.0, 164.0], [20.0, 164.0], [21.0, 163.0], [22.0, 162.0], [24.0, 163.5], [25.0, 162.0], [26.0, 163.0], [27.0, 162.0], [28.0, 163.0], [30.0, 166.5], [31.0, 163.0], [33.0, 162.0], [32.0, 162.0], [35.0, 162.0], [34.0, 163.0], [37.0, 162.0], [36.0, 162.0], [39.0, 161.0], [38.0, 161.0], [41.0, 161.0], [40.0, 160.0], [43.0, 237.0], [42.0, 236.0], [44.0, 238.0], [47.0, 244.0], [46.0, 243.5], [49.0, 242.0], [48.0, 242.0], [51.0, 244.0], [50.0, 244.0], [53.0, 254.0], [52.0, 247.0], [55.0, 248.0], [54.0, 254.0], [57.0, 253.0], [56.0, 252.0], [59.0, 253.0], [58.0, 252.0], [61.0, 252.0], [60.0, 254.0], [62.0, 253.0], [67.0, 262.0], [66.0, 256.0], [65.0, 255.0], [64.0, 253.0], [70.0, 284.0], [69.0, 283.0], [68.0, 255.0], [75.0, 279.0], [78.0, 260.5], [77.0, 255.0], [83.0, 268.0], [87.0, 266.0], [91.0, 282.0], [90.0, 278.0], [89.0, 280.0], [88.0, 261.5], [95.0, 265.0], [94.0, 260.0], [93.0, 281.0], [92.0, 267.0], [99.0, 274.0], [98.0, 271.0], [97.0, 266.0], [96.0, 273.0], [102.0, 206.5], [101.0, 276.0], [100.0, 277.0], [106.0, 277.0], [105.0, 278.6666666666667], [110.0, 277.0], [109.0, 277.0], [114.0, 279.0], [113.0, 276.0], [112.0, 278.5], [119.0, 273.0], [116.0, 284.5], [123.0, 272.5], [121.0, 276.0], [120.0, 269.0], [127.0, 272.0], [126.0, 272.0], [124.0, 275.0], [135.0, 269.0], [134.0, 270.0], [133.0, 270.0], [131.0, 271.0], [129.0, 271.0], [143.0, 286.0], [142.0, 285.0], [141.0, 285.0], [140.0, 285.0], [139.0, 269.0], [137.0, 268.5], [151.0, 286.0], [150.0, 285.0], [148.0, 285.5], [147.0, 285.0], [145.0, 286.0], [144.0, 285.0], [153.0, 258.0], [157.0, 295.0], [158.0, 282.0], [156.0, 283.0], [155.0, 283.0], [154.0, 284.0], [152.0, 284.0], [167.0, 285.0], [165.0, 285.0], [164.0, 285.0], [163.0, 283.0], [161.0, 282.0], [160.0, 285.0], [175.0, 276.0], [173.0, 277.0], [172.0, 277.0], [171.0, 278.0], [170.0, 278.0], [169.0, 278.0], [168.0, 282.0], [183.0, 268.0], [182.0, 270.0], [181.0, 271.0], [180.0, 272.5], [178.0, 272.0], [177.0, 273.0], [176.0, 275.0], [189.0, 267.0], [188.0, 267.0], [187.0, 269.0], [186.0, 269.5], [184.0, 268.0], [199.0, 264.0], [198.0, 264.5], [196.0, 263.6666666666667], [195.0, 264.0], [194.0, 266.0], [193.0, 266.0], [192.0, 266.0], [206.0, 263.0], [204.0, 265.0], [202.0, 263.0], [201.0, 263.0], [200.0, 263.0], [214.0, 310.0], [213.0, 361.0], [209.0, 363.3333333333333], [208.0, 366.0], [223.0, 353.0], [221.0, 307.0], [220.0, 354.0], [219.0, 355.0], [218.0, 355.6666666666667], [216.0, 294.0], [231.0, 347.0], [230.0, 259.0], [229.0, 349.0], [228.0, 350.5], [226.0, 351.0], [225.0, 305.5], [238.0, 337.0], [237.0, 345.0], [235.0, 328.4], [246.0, 311.22222222222223], [245.0, 331.2], [243.0, 335.0], [242.0, 297.0], [252.0, 353.25], [254.0, 355.6666666666667], [251.0, 307.0], [249.0, 305.3333333333333], [269.0, 268.75], [271.0, 281.3333333333333], [267.0, 390.3333333333333], [270.0, 257.0], [266.0, 277.6666666666667], [264.0, 289.0], [263.0, 259.0], [261.0, 291.5], [259.0, 292.0], [257.0, 293.6666666666667], [256.0, 295.6666666666667], [285.0, 456.0], [282.0, 303.5555555555556], [287.0, 264.0], [286.0, 264.0], [284.0, 268.0], [283.0, 269.3333333333333], [279.0, 261.0], [277.0, 265.0], [275.0, 267.0], [274.0, 266.0], [273.0, 271.0], [296.0, 260.57142857142856], [300.0, 271.0175266962948], [299.0, 256.8947368421052], [298.0, 258.3333333333333], [297.0, 259.6666666666667], [295.0, 259.0], [294.0, 261.0], [293.0, 260.0], [292.0, 261.4285714285714], [291.0, 259.0], [290.0, 260.0], [289.0, 261.0], [288.0, 261.5], [1.0, 133.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.92798324771064, 271.01716054776966]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1422.0, "minX": 1.6213245E12, "maxY": 9560817.616666667, "series": [{"data": [[1.6213248E12, 9211492.25], [1.6213251E12, 71478.0], [1.6213245E12, 7779044.0], [1.62132498E12, 8655695.8], [1.62132468E12, 8783429.633333333], [1.62132486E12, 8858349.166666666], [1.62132504E12, 8675141.066666666], [1.62132456E12, 8735632.633333333], [1.62132474E12, 9560817.616666667], [1.62132492E12, 8803681.733333332], [1.62132462E12, 8725717.766666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6213248E12, 183264.2], [1.6213251E12, 1422.0], [1.6213245E12, 154761.0], [1.62132498E12, 172204.2], [1.62132468E12, 174745.36666666667], [1.62132486E12, 176235.83333333334], [1.62132504E12, 172593.93333333332], [1.62132456E12, 173797.36666666667], [1.62132474E12, 190210.93333333332], [1.62132492E12, 175148.26666666666], [1.62132462E12, 173597.23333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6213251E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 249.3981337911165, "minX": 1.6213245E12, "maxY": 302.78832737791123, "series": [{"data": [[1.6213248E12, 258.4742793919034], [1.6213251E12, 267.7111111111113], [1.6213245E12, 302.78832737791123], [1.62132498E12, 275.2412147903484], [1.62132468E12, 271.00349613465687], [1.62132486E12, 268.82762794172277], [1.62132504E12, 274.4545024564405], [1.62132456E12, 272.6241306686478], [1.62132474E12, 249.3981337911165], [1.62132492E12, 270.6558515756567], [1.62132462E12, 273.0344341125289]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6213251E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 249.37077749473883, "minX": 1.6213245E12, "maxY": 302.75756338267973, "series": [{"data": [[1.6213248E12, 258.44692071155526], [1.6213251E12, 267.6870370370372], [1.6213245E12, 302.75756338267973], [1.62132498E12, 275.21647245924635], [1.62132468E12, 270.97638602149306], [1.62132486E12, 268.8008666417574], [1.62132504E12, 274.4311128741912], [1.62132456E12, 272.6016151759902], [1.62132474E12, 249.37077749473883], [1.62132492E12, 270.63096884772875], [1.62132462E12, 273.00697783778156]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6213251E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6213245E12, "maxY": 0.05058703420112292, "series": [{"data": [[1.6213248E12, 0.021582320314969438], [1.6213251E12, 0.0], [1.6213245E12, 0.05058703420112292], [1.62132498E12, 0.013518059760834372], [1.62132468E12, 0.013095435434530383], [1.62132486E12, 0.013911094508778485], [1.62132504E12, 0.021726526502090133], [1.62132456E12, 0.020651828058000886], [1.62132474E12, 0.01557481448665415], [1.62132492E12, 0.013215660331970247], [1.62132462E12, 0.013864660285484547]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6213251E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 107.0, "minX": 1.6213245E12, "maxY": 1236.0, "series": [{"data": [[1.6213248E12, 483.0], [1.6213251E12, 366.0], [1.6213245E12, 1236.0], [1.62132498E12, 365.0], [1.62132468E12, 409.0], [1.62132486E12, 396.0], [1.62132504E12, 364.0], [1.62132456E12, 368.0], [1.62132474E12, 382.0], [1.62132492E12, 396.0], [1.62132462E12, 383.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6213248E12, 288.0], [1.6213251E12, 304.90000000000003], [1.6213245E12, 306.0], [1.62132498E12, 310.0], [1.62132468E12, 316.0], [1.62132486E12, 322.0], [1.62132504E12, 301.0], [1.62132456E12, 301.0], [1.62132474E12, 311.0], [1.62132492E12, 303.0], [1.62132462E12, 297.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6213248E12, 341.0], [1.6213251E12, 361.59000000000003], [1.6213245E12, 331.0], [1.62132498E12, 337.0], [1.62132468E12, 377.9900000000016], [1.62132486E12, 353.0], [1.62132504E12, 321.0], [1.62132456E12, 328.0], [1.62132474E12, 339.0], [1.62132492E12, 331.0], [1.62132462E12, 312.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6213248E12, 301.0], [1.6213251E12, 346.94999999999993], [1.6213245E12, 317.0], [1.62132498E12, 320.0], [1.62132468E12, 334.0], [1.62132486E12, 333.0], [1.62132504E12, 308.0], [1.62132456E12, 310.0], [1.62132474E12, 323.0], [1.62132492E12, 314.0], [1.62132462E12, 303.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6213248E12, 107.0], [1.6213251E12, 133.0], [1.6213245E12, 136.0], [1.62132498E12, 156.0], [1.62132468E12, 180.0], [1.62132486E12, 149.0], [1.62132504E12, 211.0], [1.62132456E12, 198.0], [1.62132474E12, 119.0], [1.62132492E12, 174.0], [1.62132462E12, 172.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6213248E12, 238.0], [1.6213251E12, 269.0], [1.6213245E12, 276.0], [1.62132498E12, 278.0], [1.62132468E12, 269.0], [1.62132486E12, 271.0], [1.62132504E12, 271.0], [1.62132456E12, 266.0], [1.62132474E12, 260.0], [1.62132492E12, 264.0], [1.62132462E12, 272.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6213251E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 205.0, "minX": 8.0, "maxY": 1031.0, "series": [{"data": [[8.0, 556.5], [275.0, 1031.0], [468.0, 578.0], [515.0, 641.0], [540.0, 269.0], [545.0, 658.0], [597.0, 495.0], [587.0, 528.0], [686.0, 440.0], [779.0, 363.0], [821.0, 339.0], [833.0, 380.0], [874.0, 331.0], [893.0, 309.0], [923.0, 320.0], [897.0, 343.0], [905.0, 335.0], [920.0, 353.0], [940.0, 322.0], [954.0, 301.0], [946.0, 310.5], [929.0, 315.0], [989.0, 302.0], [970.0, 306.0], [968.0, 306.0], [979.0, 304.0], [982.0, 285.0], [963.0, 307.0], [966.0, 301.0], [987.0, 300.0], [986.0, 305.0], [977.0, 333.0], [976.0, 307.0], [990.0, 304.0], [960.0, 286.5], [972.0, 300.0], [978.0, 318.0], [1008.0, 297.0], [1000.0, 295.5], [1012.0, 296.0], [1015.0, 289.0], [1014.0, 291.0], [1013.0, 274.0], [1011.0, 297.0], [1019.0, 294.0], [1018.0, 288.0], [1016.0, 303.0], [998.0, 296.0], [995.0, 300.0], [993.0, 292.0], [1007.0, 306.0], [1003.0, 293.0], [999.0, 295.0], [1002.0, 299.0], [1021.0, 297.0], [1023.0, 287.0], [1022.0, 284.0], [1073.0, 278.0], [1031.0, 296.0], [1024.0, 293.0], [1029.0, 292.0], [1030.0, 283.0], [1026.0, 282.0], [1027.0, 290.0], [1025.0, 290.0], [1028.0, 301.0], [1053.0, 285.0], [1054.0, 281.0], [1055.0, 280.0], [1051.0, 290.0], [1047.0, 289.0], [1049.0, 285.0], [1050.0, 282.0], [1052.0, 283.0], [1057.0, 282.0], [1044.0, 287.0], [1045.0, 292.0], [1043.0, 284.0], [1042.0, 284.0], [1040.0, 284.0], [1062.0, 284.0], [1058.0, 283.0], [1059.0, 283.0], [1061.0, 277.0], [1060.0, 282.0], [1082.0, 278.0], [1076.0, 280.0], [1075.0, 274.0], [1074.0, 279.0], [1079.0, 276.0], [1080.0, 274.0], [1081.0, 269.0], [1078.0, 273.0], [1087.0, 270.0], [1084.0, 271.0], [1085.0, 272.0], [1086.0, 277.0], [1070.0, 281.0], [1071.0, 280.0], [1067.0, 282.0], [1068.0, 277.0], [1065.0, 280.0], [1064.0, 281.0], [1063.0, 276.0], [1066.0, 276.0], [1032.0, 288.0], [1033.0, 293.0], [1034.0, 287.0], [1036.0, 294.0], [1037.0, 282.0], [1035.0, 283.0], [1072.0, 276.0], [1039.0, 290.0], [1038.0, 276.0], [1046.0, 291.0], [1145.0, 262.0], [1088.0, 278.0], [1090.0, 273.0], [1089.0, 276.0], [1093.0, 273.0], [1094.0, 272.0], [1097.0, 272.0], [1095.0, 272.0], [1091.0, 275.0], [1112.0, 265.0], [1099.0, 273.0], [1100.0, 269.0], [1101.0, 268.0], [1140.0, 267.0], [1103.0, 272.0], [1136.0, 266.0], [1139.0, 268.0], [1138.0, 262.0], [1137.0, 265.0], [1143.0, 262.0], [1144.0, 261.0], [1141.0, 261.0], [1142.0, 267.0], [1102.0, 273.0], [1149.0, 262.0], [1146.0, 262.0], [1147.0, 256.0], [1098.0, 270.0], [1114.0, 270.0], [1113.0, 265.0], [1120.0, 260.0], [1151.0, 264.0], [1121.0, 272.0], [1128.0, 263.0], [1127.0, 265.0], [1123.0, 268.0], [1122.0, 269.0], [1124.0, 269.0], [1126.0, 260.0], [1125.0, 272.0], [1134.0, 264.0], [1135.0, 261.0], [1132.0, 265.0], [1133.0, 266.0], [1131.0, 267.0], [1130.0, 259.0], [1129.0, 267.0], [1150.0, 261.0], [1105.0, 273.0], [1106.0, 267.0], [1107.0, 270.0], [1104.0, 271.0], [1108.0, 270.0], [1110.0, 270.0], [1109.0, 275.0], [1111.0, 267.0], [1115.0, 266.0], [1118.0, 269.0], [1117.0, 266.0], [1116.0, 276.0], [1119.0, 262.0], [1162.0, 254.0], [1155.0, 258.0], [1156.0, 261.0], [1154.0, 257.0], [1152.0, 259.0], [1153.0, 267.0], [1183.0, 256.0], [1182.0, 257.0], [1181.0, 254.0], [1180.0, 256.0], [1178.0, 257.0], [1177.0, 257.0], [1179.0, 254.0], [1194.0, 260.0], [1195.0, 255.0], [1199.0, 250.0], [1196.0, 253.0], [1193.0, 253.0], [1188.0, 257.0], [1189.0, 250.0], [1190.0, 248.0], [1192.0, 261.0], [1191.0, 259.0], [1186.0, 251.0], [1185.0, 254.0], [1184.0, 232.0], [1214.0, 245.0], [1212.0, 246.0], [1208.0, 245.5], [1210.0, 253.0], [1168.0, 260.0], [1169.0, 255.0], [1170.0, 253.0], [1171.0, 267.0], [1172.0, 263.0], [1173.0, 253.0], [1175.0, 259.0], [1174.0, 255.0], [1176.0, 256.0], [1207.0, 248.0], [1161.0, 257.0], [1160.0, 263.0], [1159.0, 262.0], [1157.0, 261.0], [1165.0, 266.0], [1166.0, 257.0], [1163.0, 259.0], [1164.0, 256.0], [1167.0, 247.0], [1200.0, 249.0], [1201.0, 257.0], [1202.0, 253.0], [1204.0, 246.0], [1205.0, 247.0], [1206.0, 251.0], [1223.0, 242.0], [1264.0, 236.0], [1227.0, 242.0], [1224.0, 239.0], [1228.0, 248.0], [1229.0, 246.0], [1231.0, 242.0], [1273.0, 237.0], [1272.0, 235.0], [1278.0, 228.0], [1274.0, 236.0], [1260.0, 242.0], [1261.0, 236.0], [1255.0, 234.0], [1252.0, 246.0], [1216.0, 244.0], [1246.0, 241.0], [1218.0, 248.0], [1220.0, 242.0], [1219.0, 243.0], [1236.0, 244.0], [1233.0, 244.0], [1237.0, 242.0], [1334.0, 229.0], [1337.0, 220.0], [1302.0, 232.0], [1331.0, 228.0], [1343.0, 205.0], [1298.0, 232.0], [1282.0, 236.0], [1394.0, 215.0], [1379.0, 217.0], [1385.0, 218.0], [1386.0, 219.0], [1376.0, 211.0], [1370.0, 217.0], [1362.0, 224.0], [1359.0, 221.0], [1377.0, 216.0], [1392.0, 215.0], [1407.0, 213.0], [1410.0, 210.0], [1447.0, 205.0], [1429.0, 218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1447.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 204.0, "minX": 8.0, "maxY": 1031.0, "series": [{"data": [[8.0, 556.5], [275.0, 1031.0], [468.0, 578.0], [515.0, 641.0], [540.0, 269.0], [545.0, 658.0], [597.0, 495.0], [587.0, 528.0], [686.0, 440.0], [779.0, 363.0], [821.0, 339.0], [833.0, 380.0], [874.0, 331.0], [893.0, 309.0], [923.0, 320.0], [897.0, 343.0], [905.0, 335.0], [920.0, 353.0], [940.0, 322.0], [954.0, 301.0], [946.0, 310.5], [929.0, 314.0], [989.0, 302.0], [970.0, 306.0], [968.0, 306.0], [979.0, 304.0], [982.0, 285.0], [963.0, 307.0], [966.0, 301.0], [987.0, 300.0], [986.0, 305.0], [977.0, 333.0], [976.0, 307.0], [990.0, 304.0], [960.0, 286.5], [972.0, 300.0], [978.0, 318.0], [1008.0, 297.0], [1000.0, 295.5], [1012.0, 296.0], [1015.0, 289.0], [1014.0, 291.0], [1013.0, 274.0], [1011.0, 297.0], [1019.0, 294.0], [1018.0, 288.0], [1016.0, 302.5], [998.0, 296.0], [995.0, 300.0], [993.0, 292.0], [1007.0, 306.0], [1003.0, 293.0], [999.0, 295.0], [1002.0, 299.0], [1021.0, 297.0], [1023.0, 287.0], [1022.0, 284.0], [1073.0, 278.0], [1031.0, 296.0], [1024.0, 293.0], [1029.0, 292.0], [1030.0, 283.0], [1026.0, 282.0], [1027.0, 290.0], [1025.0, 290.0], [1028.0, 301.0], [1053.0, 285.0], [1054.0, 281.0], [1055.0, 280.0], [1051.0, 290.0], [1047.0, 289.0], [1049.0, 285.0], [1050.0, 282.0], [1052.0, 283.0], [1057.0, 282.0], [1044.0, 287.0], [1045.0, 292.0], [1043.0, 284.0], [1042.0, 284.0], [1040.0, 284.0], [1062.0, 283.0], [1058.0, 283.0], [1059.0, 283.0], [1061.0, 277.0], [1060.0, 282.0], [1082.0, 278.0], [1076.0, 280.0], [1075.0, 274.0], [1074.0, 279.0], [1079.0, 276.0], [1080.0, 274.0], [1081.0, 269.0], [1078.0, 272.0], [1087.0, 270.0], [1084.0, 271.0], [1085.0, 272.0], [1086.0, 277.0], [1070.0, 281.0], [1071.0, 280.0], [1067.0, 282.0], [1068.0, 277.0], [1065.0, 280.0], [1064.0, 281.0], [1063.0, 276.0], [1066.0, 276.0], [1032.0, 288.0], [1033.0, 293.0], [1034.0, 287.0], [1036.0, 294.0], [1037.0, 282.0], [1035.0, 283.0], [1072.0, 276.0], [1039.0, 290.0], [1038.0, 276.0], [1046.0, 291.0], [1145.0, 262.0], [1088.0, 278.0], [1090.0, 273.0], [1089.0, 276.0], [1093.0, 273.0], [1094.0, 272.0], [1097.0, 272.0], [1095.0, 272.0], [1091.0, 275.0], [1112.0, 265.0], [1099.0, 273.0], [1100.0, 269.0], [1101.0, 268.0], [1140.0, 267.0], [1103.0, 272.0], [1136.0, 266.0], [1139.0, 268.0], [1138.0, 262.0], [1137.0, 265.0], [1143.0, 262.0], [1144.0, 261.0], [1141.0, 261.0], [1142.0, 266.0], [1102.0, 273.0], [1149.0, 262.0], [1146.0, 261.5], [1147.0, 256.0], [1098.0, 270.0], [1114.0, 270.0], [1113.0, 265.0], [1120.0, 260.0], [1151.0, 264.0], [1121.0, 272.0], [1128.0, 263.0], [1127.0, 265.0], [1123.0, 268.0], [1122.0, 269.0], [1124.0, 269.0], [1126.0, 260.0], [1125.0, 272.0], [1134.0, 264.0], [1135.0, 261.0], [1132.0, 265.0], [1133.0, 266.0], [1131.0, 267.0], [1130.0, 259.0], [1129.0, 267.0], [1150.0, 261.0], [1105.0, 273.0], [1106.0, 267.0], [1107.0, 269.0], [1104.0, 271.0], [1108.0, 270.0], [1110.0, 270.0], [1109.0, 275.0], [1111.0, 267.0], [1115.0, 266.0], [1118.0, 269.0], [1117.0, 266.0], [1116.0, 276.0], [1119.0, 262.0], [1162.0, 254.0], [1155.0, 258.0], [1156.0, 261.0], [1154.0, 257.0], [1152.0, 259.0], [1153.0, 267.0], [1183.0, 256.0], [1182.0, 257.0], [1181.0, 254.0], [1180.0, 256.0], [1178.0, 257.0], [1177.0, 257.0], [1179.0, 254.0], [1194.0, 260.0], [1195.0, 255.0], [1199.0, 250.0], [1196.0, 253.0], [1193.0, 253.0], [1188.0, 257.0], [1189.0, 250.0], [1190.0, 248.0], [1192.0, 261.0], [1191.0, 259.0], [1186.0, 251.0], [1185.0, 254.0], [1184.0, 232.0], [1214.0, 245.0], [1212.0, 246.0], [1208.0, 245.0], [1210.0, 253.0], [1168.0, 260.0], [1169.0, 255.0], [1170.0, 253.0], [1171.0, 267.0], [1172.0, 263.0], [1173.0, 253.0], [1175.0, 259.0], [1174.0, 255.0], [1176.0, 256.0], [1207.0, 248.0], [1161.0, 257.0], [1160.0, 263.0], [1159.0, 262.0], [1157.0, 261.0], [1165.0, 266.0], [1166.0, 257.0], [1163.0, 259.0], [1164.0, 256.0], [1167.0, 247.0], [1200.0, 249.0], [1201.0, 257.0], [1202.0, 253.0], [1204.0, 246.0], [1205.0, 247.0], [1206.0, 251.0], [1223.0, 242.0], [1264.0, 236.0], [1227.0, 241.0], [1224.0, 239.0], [1228.0, 248.0], [1229.0, 246.0], [1231.0, 242.0], [1273.0, 237.0], [1272.0, 235.0], [1278.0, 228.0], [1274.0, 236.0], [1260.0, 242.0], [1261.0, 236.0], [1255.0, 234.0], [1252.0, 246.0], [1216.0, 244.0], [1246.0, 241.0], [1218.0, 248.0], [1220.0, 242.0], [1219.0, 243.0], [1236.0, 244.0], [1233.0, 244.0], [1237.0, 242.0], [1334.0, 229.0], [1337.0, 220.0], [1302.0, 232.0], [1331.0, 228.0], [1343.0, 204.0], [1298.0, 232.0], [1282.0, 236.0], [1394.0, 215.0], [1379.0, 217.0], [1385.0, 218.0], [1386.0, 219.0], [1376.0, 211.0], [1370.0, 217.0], [1362.0, 224.0], [1359.0, 220.0], [1377.0, 216.0], [1392.0, 215.0], [1407.0, 213.0], [1410.0, 210.0], [1447.0, 205.0], [1429.0, 217.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1447.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.6213245E12, "maxY": 1203.8666666666666, "series": [{"data": [[1.6213248E12, 1159.9], [1.6213251E12, 4.016666666666667], [1.6213245E12, 984.5], [1.62132498E12, 1089.9], [1.62132468E12, 1105.9833333333333], [1.62132486E12, 1115.4166666666667], [1.62132504E12, 1092.35], [1.62132456E12, 1099.9833333333333], [1.62132474E12, 1203.8666666666666], [1.62132492E12, 1108.5333333333333], [1.62132462E12, 1098.7166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6213251E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.6213245E12, "maxY": 1203.8666666666666, "series": [{"data": [[1.6213248E12, 1159.9], [1.6213251E12, 9.0], [1.6213245E12, 979.5], [1.62132498E12, 1089.9], [1.62132468E12, 1105.9833333333333], [1.62132486E12, 1115.4166666666667], [1.62132504E12, 1092.3666666666666], [1.62132456E12, 1099.9833333333333], [1.62132474E12, 1203.8666666666666], [1.62132492E12, 1108.5333333333333], [1.62132462E12, 1098.7166666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6213251E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.6213245E12, "maxY": 1203.8666666666666, "series": [{"data": [[1.6213248E12, 1159.9], [1.6213251E12, 9.0], [1.6213245E12, 979.5], [1.62132498E12, 1089.9], [1.62132468E12, 1105.9833333333333], [1.62132486E12, 1115.4166666666667], [1.62132504E12, 1092.3666666666666], [1.62132456E12, 1099.9833333333333], [1.62132474E12, 1203.8666666666666], [1.62132492E12, 1108.5333333333333], [1.62132462E12, 1098.7166666666667]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6213251E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.6213245E12, "maxY": 1203.8666666666666, "series": [{"data": [[1.6213248E12, 1159.9], [1.6213251E12, 9.0], [1.6213245E12, 979.5], [1.62132498E12, 1089.9], [1.62132468E12, 1105.9833333333333], [1.62132486E12, 1115.4166666666667], [1.62132504E12, 1092.3666666666666], [1.62132456E12, 1099.9833333333333], [1.62132474E12, 1203.8666666666666], [1.62132492E12, 1108.5333333333333], [1.62132462E12, 1098.7166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6213251E12, "title": "Total Transactions Per Second"}},
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

