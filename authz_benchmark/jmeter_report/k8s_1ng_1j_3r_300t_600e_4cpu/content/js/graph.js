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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 330.0, "series": [{"data": [[0.0, 6.0], [0.1, 30.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 35.0], [0.6, 35.0], [0.7, 36.0], [0.8, 36.0], [0.9, 36.0], [1.0, 37.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 39.0], [2.1, 40.0], [2.2, 40.0], [2.3, 40.0], [2.4, 40.0], [2.5, 40.0], [2.6, 41.0], [2.7, 41.0], [2.8, 41.0], [2.9, 41.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 42.0], [3.4, 42.0], [3.5, 42.0], [3.6, 42.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 43.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 43.0], [4.9, 43.0], [5.0, 43.0], [5.1, 44.0], [5.2, 44.0], [5.3, 44.0], [5.4, 44.0], [5.5, 44.0], [5.6, 44.0], [5.7, 44.0], [5.8, 44.0], [5.9, 44.0], [6.0, 44.0], [6.1, 44.0], [6.2, 44.0], [6.3, 45.0], [6.4, 45.0], [6.5, 45.0], [6.6, 45.0], [6.7, 45.0], [6.8, 45.0], [6.9, 45.0], [7.0, 45.0], [7.1, 45.0], [7.2, 45.0], [7.3, 45.0], [7.4, 45.0], [7.5, 45.0], [7.6, 45.0], [7.7, 46.0], [7.8, 46.0], [7.9, 46.0], [8.0, 46.0], [8.1, 46.0], [8.2, 46.0], [8.3, 46.0], [8.4, 46.0], [8.5, 46.0], [8.6, 46.0], [8.7, 46.0], [8.8, 46.0], [8.9, 46.0], [9.0, 46.0], [9.1, 46.0], [9.2, 47.0], [9.3, 47.0], [9.4, 47.0], [9.5, 47.0], [9.6, 47.0], [9.7, 47.0], [9.8, 47.0], [9.9, 47.0], [10.0, 47.0], [10.1, 47.0], [10.2, 47.0], [10.3, 47.0], [10.4, 47.0], [10.5, 47.0], [10.6, 47.0], [10.7, 47.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 48.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 48.0], [12.0, 48.0], [12.1, 48.0], [12.2, 48.0], [12.3, 48.0], [12.4, 49.0], [12.5, 49.0], [12.6, 49.0], [12.7, 49.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 49.0], [13.3, 49.0], [13.4, 49.0], [13.5, 49.0], [13.6, 49.0], [13.7, 49.0], [13.8, 50.0], [13.9, 50.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 50.0], [14.8, 50.0], [14.9, 50.0], [15.0, 50.0], [15.1, 50.0], [15.2, 50.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 51.0], [16.6, 51.0], [16.7, 51.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 52.0], [17.9, 52.0], [18.0, 52.0], [18.1, 52.0], [18.2, 53.0], [18.3, 53.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 53.0], [18.8, 53.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 54.0], [20.2, 54.0], [20.3, 55.0], [20.4, 55.0], [20.5, 55.0], [20.6, 55.0], [20.7, 55.0], [20.8, 55.0], [20.9, 55.0], [21.0, 55.0], [21.1, 55.0], [21.2, 55.0], [21.3, 55.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 56.0], [21.8, 56.0], [21.9, 56.0], [22.0, 56.0], [22.1, 56.0], [22.2, 56.0], [22.3, 56.0], [22.4, 56.0], [22.5, 56.0], [22.6, 56.0], [22.7, 56.0], [22.8, 56.0], [22.9, 56.0], [23.0, 56.0], [23.1, 56.0], [23.2, 56.0], [23.3, 56.0], [23.4, 56.0], [23.5, 56.0], [23.6, 57.0], [23.7, 57.0], [23.8, 57.0], [23.9, 57.0], [24.0, 57.0], [24.1, 57.0], [24.2, 57.0], [24.3, 57.0], [24.4, 57.0], [24.5, 57.0], [24.6, 57.0], [24.7, 57.0], [24.8, 57.0], [24.9, 57.0], [25.0, 57.0], [25.1, 57.0], [25.2, 57.0], [25.3, 57.0], [25.4, 57.0], [25.5, 57.0], [25.6, 57.0], [25.7, 57.0], [25.8, 57.0], [25.9, 57.0], [26.0, 57.0], [26.1, 57.0], [26.2, 58.0], [26.3, 58.0], [26.4, 58.0], [26.5, 58.0], [26.6, 58.0], [26.7, 58.0], [26.8, 58.0], [26.9, 58.0], [27.0, 58.0], [27.1, 58.0], [27.2, 58.0], [27.3, 58.0], [27.4, 58.0], [27.5, 58.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 58.0], [28.0, 58.0], [28.1, 58.0], [28.2, 58.0], [28.3, 58.0], [28.4, 58.0], [28.5, 58.0], [28.6, 58.0], [28.7, 58.0], [28.8, 58.0], [28.9, 58.0], [29.0, 58.0], [29.1, 58.0], [29.2, 58.0], [29.3, 58.0], [29.4, 59.0], [29.5, 59.0], [29.6, 59.0], [29.7, 59.0], [29.8, 59.0], [29.9, 59.0], [30.0, 59.0], [30.1, 59.0], [30.2, 59.0], [30.3, 59.0], [30.4, 59.0], [30.5, 59.0], [30.6, 59.0], [30.7, 59.0], [30.8, 59.0], [30.9, 59.0], [31.0, 59.0], [31.1, 59.0], [31.2, 59.0], [31.3, 59.0], [31.4, 59.0], [31.5, 59.0], [31.6, 59.0], [31.7, 59.0], [31.8, 59.0], [31.9, 59.0], [32.0, 59.0], [32.1, 59.0], [32.2, 59.0], [32.3, 59.0], [32.4, 59.0], [32.5, 59.0], [32.6, 59.0], [32.7, 60.0], [32.8, 60.0], [32.9, 60.0], [33.0, 60.0], [33.1, 60.0], [33.2, 60.0], [33.3, 60.0], [33.4, 60.0], [33.5, 60.0], [33.6, 60.0], [33.7, 60.0], [33.8, 60.0], [33.9, 60.0], [34.0, 60.0], [34.1, 60.0], [34.2, 60.0], [34.3, 60.0], [34.4, 60.0], [34.5, 60.0], [34.6, 60.0], [34.7, 60.0], [34.8, 60.0], [34.9, 60.0], [35.0, 60.0], [35.1, 60.0], [35.2, 60.0], [35.3, 60.0], [35.4, 60.0], [35.5, 60.0], [35.6, 60.0], [35.7, 60.0], [35.8, 60.0], [35.9, 60.0], [36.0, 60.0], [36.1, 61.0], [36.2, 61.0], [36.3, 61.0], [36.4, 61.0], [36.5, 61.0], [36.6, 61.0], [36.7, 61.0], [36.8, 61.0], [36.9, 61.0], [37.0, 61.0], [37.1, 61.0], [37.2, 61.0], [37.3, 61.0], [37.4, 61.0], [37.5, 61.0], [37.6, 61.0], [37.7, 61.0], [37.8, 61.0], [37.9, 61.0], [38.0, 61.0], [38.1, 61.0], [38.2, 61.0], [38.3, 61.0], [38.4, 61.0], [38.5, 61.0], [38.6, 61.0], [38.7, 61.0], [38.8, 61.0], [38.9, 61.0], [39.0, 61.0], [39.1, 61.0], [39.2, 61.0], [39.3, 61.0], [39.4, 62.0], [39.5, 62.0], [39.6, 62.0], [39.7, 62.0], [39.8, 62.0], [39.9, 62.0], [40.0, 62.0], [40.1, 62.0], [40.2, 62.0], [40.3, 62.0], [40.4, 62.0], [40.5, 62.0], [40.6, 62.0], [40.7, 62.0], [40.8, 62.0], [40.9, 62.0], [41.0, 62.0], [41.1, 62.0], [41.2, 62.0], [41.3, 62.0], [41.4, 62.0], [41.5, 62.0], [41.6, 62.0], [41.7, 62.0], [41.8, 62.0], [41.9, 62.0], [42.0, 62.0], [42.1, 62.0], [42.2, 62.0], [42.3, 62.0], [42.4, 62.0], [42.5, 62.0], [42.6, 63.0], [42.7, 63.0], [42.8, 63.0], [42.9, 63.0], [43.0, 63.0], [43.1, 63.0], [43.2, 63.0], [43.3, 63.0], [43.4, 63.0], [43.5, 63.0], [43.6, 63.0], [43.7, 63.0], [43.8, 63.0], [43.9, 63.0], [44.0, 63.0], [44.1, 63.0], [44.2, 63.0], [44.3, 63.0], [44.4, 63.0], [44.5, 63.0], [44.6, 63.0], [44.7, 63.0], [44.8, 63.0], [44.9, 63.0], [45.0, 63.0], [45.1, 63.0], [45.2, 63.0], [45.3, 63.0], [45.4, 63.0], [45.5, 63.0], [45.6, 63.0], [45.7, 64.0], [45.8, 64.0], [45.9, 64.0], [46.0, 64.0], [46.1, 64.0], [46.2, 64.0], [46.3, 64.0], [46.4, 64.0], [46.5, 64.0], [46.6, 64.0], [46.7, 64.0], [46.8, 64.0], [46.9, 64.0], [47.0, 64.0], [47.1, 64.0], [47.2, 64.0], [47.3, 64.0], [47.4, 64.0], [47.5, 64.0], [47.6, 64.0], [47.7, 64.0], [47.8, 64.0], [47.9, 64.0], [48.0, 64.0], [48.1, 64.0], [48.2, 64.0], [48.3, 64.0], [48.4, 64.0], [48.5, 64.0], [48.6, 64.0], [48.7, 65.0], [48.8, 65.0], [48.9, 65.0], [49.0, 65.0], [49.1, 65.0], [49.2, 65.0], [49.3, 65.0], [49.4, 65.0], [49.5, 65.0], [49.6, 65.0], [49.7, 65.0], [49.8, 65.0], [49.9, 65.0], [50.0, 65.0], [50.1, 65.0], [50.2, 65.0], [50.3, 65.0], [50.4, 65.0], [50.5, 65.0], [50.6, 65.0], [50.7, 65.0], [50.8, 65.0], [50.9, 65.0], [51.0, 65.0], [51.1, 65.0], [51.2, 65.0], [51.3, 65.0], [51.4, 65.0], [51.5, 65.0], [51.6, 66.0], [51.7, 66.0], [51.8, 66.0], [51.9, 66.0], [52.0, 66.0], [52.1, 66.0], [52.2, 66.0], [52.3, 66.0], [52.4, 66.0], [52.5, 66.0], [52.6, 66.0], [52.7, 66.0], [52.8, 66.0], [52.9, 66.0], [53.0, 66.0], [53.1, 66.0], [53.2, 66.0], [53.3, 66.0], [53.4, 66.0], [53.5, 66.0], [53.6, 66.0], [53.7, 66.0], [53.8, 66.0], [53.9, 66.0], [54.0, 66.0], [54.1, 66.0], [54.2, 66.0], [54.3, 66.0], [54.4, 67.0], [54.5, 67.0], [54.6, 67.0], [54.7, 67.0], [54.8, 67.0], [54.9, 67.0], [55.0, 67.0], [55.1, 67.0], [55.2, 67.0], [55.3, 67.0], [55.4, 67.0], [55.5, 67.0], [55.6, 67.0], [55.7, 67.0], [55.8, 67.0], [55.9, 67.0], [56.0, 67.0], [56.1, 67.0], [56.2, 67.0], [56.3, 67.0], [56.4, 67.0], [56.5, 67.0], [56.6, 67.0], [56.7, 67.0], [56.8, 67.0], [56.9, 67.0], [57.0, 67.0], [57.1, 68.0], [57.2, 68.0], [57.3, 68.0], [57.4, 68.0], [57.5, 68.0], [57.6, 68.0], [57.7, 68.0], [57.8, 68.0], [57.9, 68.0], [58.0, 68.0], [58.1, 68.0], [58.2, 68.0], [58.3, 68.0], [58.4, 68.0], [58.5, 68.0], [58.6, 68.0], [58.7, 68.0], [58.8, 68.0], [58.9, 68.0], [59.0, 68.0], [59.1, 68.0], [59.2, 68.0], [59.3, 68.0], [59.4, 68.0], [59.5, 68.0], [59.6, 69.0], [59.7, 69.0], [59.8, 69.0], [59.9, 69.0], [60.0, 69.0], [60.1, 69.0], [60.2, 69.0], [60.3, 69.0], [60.4, 69.0], [60.5, 69.0], [60.6, 69.0], [60.7, 69.0], [60.8, 69.0], [60.9, 69.0], [61.0, 69.0], [61.1, 69.0], [61.2, 69.0], [61.3, 69.0], [61.4, 69.0], [61.5, 69.0], [61.6, 69.0], [61.7, 69.0], [61.8, 69.0], [61.9, 69.0], [62.0, 70.0], [62.1, 70.0], [62.2, 70.0], [62.3, 70.0], [62.4, 70.0], [62.5, 70.0], [62.6, 70.0], [62.7, 70.0], [62.8, 70.0], [62.9, 70.0], [63.0, 70.0], [63.1, 70.0], [63.2, 70.0], [63.3, 70.0], [63.4, 70.0], [63.5, 70.0], [63.6, 70.0], [63.7, 70.0], [63.8, 70.0], [63.9, 70.0], [64.0, 70.0], [64.1, 70.0], [64.2, 70.0], [64.3, 71.0], [64.4, 71.0], [64.5, 71.0], [64.6, 71.0], [64.7, 71.0], [64.8, 71.0], [64.9, 71.0], [65.0, 71.0], [65.1, 71.0], [65.2, 71.0], [65.3, 71.0], [65.4, 71.0], [65.5, 71.0], [65.6, 71.0], [65.7, 71.0], [65.8, 71.0], [65.9, 71.0], [66.0, 71.0], [66.1, 71.0], [66.2, 71.0], [66.3, 72.0], [66.4, 72.0], [66.5, 72.0], [66.6, 72.0], [66.7, 72.0], [66.8, 72.0], [66.9, 72.0], [67.0, 72.0], [67.1, 72.0], [67.2, 72.0], [67.3, 72.0], [67.4, 72.0], [67.5, 72.0], [67.6, 72.0], [67.7, 72.0], [67.8, 72.0], [67.9, 72.0], [68.0, 72.0], [68.1, 72.0], [68.2, 73.0], [68.3, 73.0], [68.4, 73.0], [68.5, 73.0], [68.6, 73.0], [68.7, 73.0], [68.8, 73.0], [68.9, 73.0], [69.0, 73.0], [69.1, 73.0], [69.2, 73.0], [69.3, 73.0], [69.4, 73.0], [69.5, 73.0], [69.6, 73.0], [69.7, 73.0], [69.8, 74.0], [69.9, 74.0], [70.0, 74.0], [70.1, 74.0], [70.2, 74.0], [70.3, 74.0], [70.4, 74.0], [70.5, 74.0], [70.6, 74.0], [70.7, 74.0], [70.8, 74.0], [70.9, 74.0], [71.0, 74.0], [71.1, 74.0], [71.2, 74.0], [71.3, 75.0], [71.4, 75.0], [71.5, 75.0], [71.6, 75.0], [71.7, 75.0], [71.8, 75.0], [71.9, 75.0], [72.0, 75.0], [72.1, 75.0], [72.2, 75.0], [72.3, 75.0], [72.4, 75.0], [72.5, 76.0], [72.6, 76.0], [72.7, 76.0], [72.8, 76.0], [72.9, 76.0], [73.0, 76.0], [73.1, 76.0], [73.2, 76.0], [73.3, 76.0], [73.4, 76.0], [73.5, 76.0], [73.6, 77.0], [73.7, 77.0], [73.8, 77.0], [73.9, 77.0], [74.0, 77.0], [74.1, 77.0], [74.2, 77.0], [74.3, 77.0], [74.4, 77.0], [74.5, 77.0], [74.6, 78.0], [74.7, 78.0], [74.8, 78.0], [74.9, 78.0], [75.0, 78.0], [75.1, 78.0], [75.2, 78.0], [75.3, 78.0], [75.4, 79.0], [75.5, 79.0], [75.6, 79.0], [75.7, 79.0], [75.8, 79.0], [75.9, 79.0], [76.0, 79.0], [76.1, 80.0], [76.2, 80.0], [76.3, 80.0], [76.4, 80.0], [76.5, 80.0], [76.6, 80.0], [76.7, 81.0], [76.8, 81.0], [76.9, 81.0], [77.0, 81.0], [77.1, 81.0], [77.2, 81.0], [77.3, 82.0], [77.4, 82.0], [77.5, 82.0], [77.6, 82.0], [77.7, 82.0], [77.8, 82.0], [77.9, 83.0], [78.0, 83.0], [78.1, 83.0], [78.2, 83.0], [78.3, 83.0], [78.4, 83.0], [78.5, 84.0], [78.6, 84.0], [78.7, 84.0], [78.8, 84.0], [78.9, 84.0], [79.0, 84.0], [79.1, 85.0], [79.2, 85.0], [79.3, 85.0], [79.4, 85.0], [79.5, 85.0], [79.6, 85.0], [79.7, 86.0], [79.8, 86.0], [79.9, 86.0], [80.0, 86.0], [80.1, 86.0], [80.2, 86.0], [80.3, 86.0], [80.4, 87.0], [80.5, 87.0], [80.6, 87.0], [80.7, 87.0], [80.8, 87.0], [80.9, 87.0], [81.0, 87.0], [81.1, 87.0], [81.2, 88.0], [81.3, 88.0], [81.4, 88.0], [81.5, 88.0], [81.6, 88.0], [81.7, 88.0], [81.8, 88.0], [81.9, 88.0], [82.0, 89.0], [82.1, 89.0], [82.2, 89.0], [82.3, 89.0], [82.4, 89.0], [82.5, 89.0], [82.6, 89.0], [82.7, 89.0], [82.8, 89.0], [82.9, 89.0], [83.0, 90.0], [83.1, 90.0], [83.2, 90.0], [83.3, 90.0], [83.4, 90.0], [83.5, 90.0], [83.6, 90.0], [83.7, 90.0], [83.8, 90.0], [83.9, 91.0], [84.0, 91.0], [84.1, 91.0], [84.2, 91.0], [84.3, 91.0], [84.4, 91.0], [84.5, 91.0], [84.6, 91.0], [84.7, 91.0], [84.8, 92.0], [84.9, 92.0], [85.0, 92.0], [85.1, 92.0], [85.2, 92.0], [85.3, 92.0], [85.4, 92.0], [85.5, 92.0], [85.6, 92.0], [85.7, 92.0], [85.8, 93.0], [85.9, 93.0], [86.0, 93.0], [86.1, 93.0], [86.2, 93.0], [86.3, 93.0], [86.4, 93.0], [86.5, 93.0], [86.6, 94.0], [86.7, 94.0], [86.8, 94.0], [86.9, 94.0], [87.0, 94.0], [87.1, 94.0], [87.2, 94.0], [87.3, 94.0], [87.4, 95.0], [87.5, 95.0], [87.6, 95.0], [87.7, 95.0], [87.8, 95.0], [87.9, 95.0], [88.0, 95.0], [88.1, 96.0], [88.2, 96.0], [88.3, 96.0], [88.4, 96.0], [88.5, 96.0], [88.6, 97.0], [88.7, 97.0], [88.8, 97.0], [88.9, 97.0], [89.0, 98.0], [89.1, 98.0], [89.2, 98.0], [89.3, 98.0], [89.4, 99.0], [89.5, 99.0], [89.6, 99.0], [89.7, 99.0], [89.8, 100.0], [89.9, 100.0], [90.0, 100.0], [90.1, 100.0], [90.2, 101.0], [90.3, 101.0], [90.4, 102.0], [90.5, 102.0], [90.6, 102.0], [90.7, 103.0], [90.8, 103.0], [90.9, 103.0], [91.0, 104.0], [91.1, 104.0], [91.2, 105.0], [91.3, 105.0], [91.4, 105.0], [91.5, 106.0], [91.6, 106.0], [91.7, 106.0], [91.8, 107.0], [91.9, 107.0], [92.0, 107.0], [92.1, 108.0], [92.2, 108.0], [92.3, 108.0], [92.4, 109.0], [92.5, 109.0], [92.6, 109.0], [92.7, 110.0], [92.8, 110.0], [92.9, 110.0], [93.0, 111.0], [93.1, 111.0], [93.2, 111.0], [93.3, 112.0], [93.4, 112.0], [93.5, 112.0], [93.6, 113.0], [93.7, 113.0], [93.8, 113.0], [93.9, 114.0], [94.0, 114.0], [94.1, 115.0], [94.2, 115.0], [94.3, 115.0], [94.4, 116.0], [94.5, 116.0], [94.6, 117.0], [94.7, 117.0], [94.8, 118.0], [94.9, 119.0], [95.0, 119.0], [95.1, 120.0], [95.2, 121.0], [95.3, 122.0], [95.4, 123.0], [95.5, 124.0], [95.6, 124.0], [95.7, 125.0], [95.8, 126.0], [95.9, 127.0], [96.0, 128.0], [96.1, 129.0], [96.2, 130.0], [96.3, 131.0], [96.4, 132.0], [96.5, 133.0], [96.6, 134.0], [96.7, 135.0], [96.8, 136.0], [96.9, 137.0], [97.0, 138.0], [97.1, 139.0], [97.2, 140.0], [97.3, 141.0], [97.4, 142.0], [97.5, 143.0], [97.6, 145.0], [97.7, 146.0], [97.8, 147.0], [97.9, 148.0], [98.0, 149.0], [98.1, 151.0], [98.2, 152.0], [98.3, 153.0], [98.4, 155.0], [98.5, 156.0], [98.6, 158.0], [98.7, 159.0], [98.8, 161.0], [98.9, 163.0], [99.0, 165.0], [99.1, 168.0], [99.2, 170.0], [99.3, 173.0], [99.4, 176.0], [99.5, 180.0], [99.6, 184.0], [99.7, 190.0], [99.8, 198.0], [99.9, 208.0], [100.0, 330.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 805398.0, "series": [{"data": [[0.0, 805398.0], [300.0, 14.0], [100.0, 90275.0], [200.0, 1618.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 897305.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 897305.0, "series": [{"data": [[0.0, 897305.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 298.5598964555936, "minX": 1.63176936E12, "maxY": 300.0, "series": [{"data": [[1.63176966E12, 300.0], [1.63176996E12, 300.0], [1.63177026E12, 299.67612205175163], [1.6317696E12, 300.0], [1.63176942E12, 300.0], [1.63176972E12, 300.0], [1.63177002E12, 300.0], [1.63176936E12, 298.5598964555936], [1.63177014E12, 300.0], [1.63176948E12, 300.0], [1.63176978E12, 300.0], [1.63177008E12, 300.0], [1.6317699E12, 300.0], [1.6317702E12, 300.0], [1.63176954E12, 300.0], [1.63176984E12, 300.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63177026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 121.0, "maxY": 290.8181818181818, "series": [{"data": [[121.0, 6.0], [136.0, 119.78571428571428], [137.0, 114.0], [139.0, 131.5], [140.0, 128.0], [141.0, 138.5], [145.0, 124.33333333333333], [146.0, 144.66666666666666], [150.0, 166.0], [154.0, 175.0], [157.0, 201.0], [158.0, 190.25], [159.0, 194.0], [160.0, 202.33333333333334], [161.0, 185.2857142857143], [163.0, 205.0], [164.0, 210.66666666666666], [165.0, 222.5], [166.0, 49.56521739130434], [167.0, 236.66666666666666], [176.0, 259.0], [182.0, 279.0], [183.0, 251.0], [184.0, 253.5], [185.0, 261.44444444444446], [186.0, 264.4], [188.0, 283.2857142857143], [189.0, 290.8181818181818], [190.0, 278.0], [192.0, 201.75], [193.0, 80.0], [195.0, 184.75], [196.0, 188.0], [197.0, 180.0], [198.0, 246.76470588235293], [199.0, 172.0], [200.0, 222.75], [201.0, 216.11111111111111], [202.0, 183.00000000000003], [203.0, 182.875], [205.0, 151.75], [206.0, 137.9090909090909], [208.0, 149.875], [210.0, 146.0], [211.0, 147.0], [212.0, 147.0], [213.0, 150.5], [215.0, 149.41666666666663], [209.0, 50.0], [217.0, 146.71428571428572], [218.0, 137.0], [219.0, 135.5], [220.0, 136.0], [222.0, 46.708333333333336], [216.0, 49.0], [225.0, 139.0], [226.0, 136.0], [230.0, 143.0], [231.0, 143.5], [235.0, 152.5], [236.0, 155.0], [237.0, 154.0], [238.0, 155.0], [239.0, 158.0], [240.0, 157.61538461538464], [241.0, 155.0], [242.0, 156.0], [243.0, 155.6], [244.0, 158.25], [245.0, 158.0], [246.0, 162.0], [248.0, 162.5], [249.0, 158.5], [250.0, 162.22222222222223], [251.0, 162.5], [252.0, 164.0], [253.0, 165.0], [254.0, 165.83333333333334], [255.0, 165.6], [257.0, 169.66666666666666], [256.0, 168.0], [258.0, 173.10000000000002], [259.0, 176.5], [260.0, 173.375], [261.0, 173.0], [262.0, 177.5], [263.0, 180.0], [264.0, 181.2], [271.0, 187.0], [268.0, 183.2], [270.0, 182.83333333333334], [265.0, 182.25], [266.0, 182.66666666666666], [267.0, 182.5], [273.0, 186.5], [272.0, 190.0], [274.0, 190.0], [275.0, 185.66666666666666], [276.0, 185.0], [277.0, 187.33333333333331], [278.0, 187.6], [279.0, 187.25], [280.0, 188.77777777777774], [286.0, 161.7142857142857], [287.0, 184.0], [284.0, 187.33333333333334], [285.0, 190.0], [281.0, 132.61111111111111], [283.0, 145.66666666666666], [290.0, 193.0], [291.0, 193.0], [293.0, 193.5], [295.0, 97.88059701492536], [298.0, 207.0], [299.0, 124.55555555555556], [300.0, 70.97989801222018], [296.0, 98.0]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[299.9470904542025, 71.04473618223449]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 68867.4, "minX": 1.63176936E12, "maxY": 7910215.066666666, "series": [{"data": [[1.63176966E12, 7907177.533333333], [1.63176996E12, 7896612.2], [1.63177026E12, 4613851.15], [1.6317696E12, 7909950.933333334], [1.63176942E12, 7901894.866666666], [1.63176972E12, 7906781.333333333], [1.63177002E12, 7897536.666666667], [1.63176936E12, 3316194.0], [1.63177014E12, 7881820.816666666], [1.63176948E12, 7899517.666666667], [1.63176978E12, 7906517.2], [1.63177008E12, 7894631.033333333], [1.6317699E12, 7906649.266666667], [1.6317702E12, 7884594.133333334], [1.63176954E12, 7910215.066666666], [1.63176984E12, 7869406.466666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63176966E12, 165648.63333333333], [1.63176996E12, 165427.3], [1.63177026E12, 96656.26666666666], [1.6317696E12, 165706.73333333334], [1.63176942E12, 164540.75], [1.63176972E12, 165640.33333333334], [1.63177002E12, 165446.66666666666], [1.63176936E12, 68867.4], [1.63177014E12, 165117.43333333332], [1.63176948E12, 165237.23333333334], [1.63176978E12, 165634.8], [1.63177008E12, 165385.8], [1.6317699E12, 165637.56666666668], [1.6317702E12, 165175.53333333333], [1.63176954E12, 165712.26666666666], [1.63176984E12, 164857.36666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63177026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 68.33464048545876, "minX": 1.63176936E12, "maxY": 81.05085623257537, "series": [{"data": [[1.63176966E12, 70.45852053513288], [1.63176996E12, 71.85496630040349], [1.63177026E12, 68.33464048545876], [1.6317696E12, 70.82056633385592], [1.63176942E12, 72.76294018351051], [1.63176972E12, 70.57090362451981], [1.63177002E12, 70.34494983277574], [1.63176936E12, 81.05085623257537], [1.63177014E12, 72.93200516077188], [1.63176948E12, 70.99324584134469], [1.63176978E12, 70.90889957907424], [1.63177008E12, 70.14602362072992], [1.6317699E12, 70.45654679383304], [1.6317702E12, 70.82261900773779], [1.63176954E12, 69.61044143181631], [1.63176984E12, 69.32624565760875]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63177026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 68.17248683306575, "minX": 1.63176936E12, "maxY": 80.87992831541278, "series": [{"data": [[1.63176966E12, 70.29417266547502], [1.63176996E12, 71.69004732995457], [1.63177026E12, 68.17248683306575], [1.6317696E12, 70.65058269609624], [1.63176942E12, 72.58862166363045], [1.63176972E12, 70.41199265074358], [1.63177002E12, 70.1845986622074], [1.63176936E12, 80.87992831541278], [1.63177014E12, 72.76932357031575], [1.63176948E12, 70.81822285379923], [1.63176978E12, 70.74685975813372], [1.63177008E12, 69.9837900230862], [1.6317699E12, 70.2928059596782], [1.6317702E12, 70.65115071521828], [1.63176954E12, 69.43034593294999], [1.63176984E12, 69.16318995754179]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63177026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013279146388373379, "minX": 1.63176936E12, "maxY": 0.2151334129828776, "series": [{"data": [[1.63176966E12, 0.014981711288894596], [1.63176996E12, 0.013279146388373379], [1.63177026E12, 0.015027478818410702], [1.6317696E12, 0.015210204694960917], [1.63176942E12, 0.01480788193806086], [1.63176972E12, 0.014447970602973202], [1.63177002E12, 0.014280936454849643], [1.63176936E12, 0.2151334129828776], [1.63177014E12, 0.013840250666041035], [1.63176948E12, 0.015397475549611237], [1.63176978E12, 0.01389724059597778], [1.63177008E12, 0.0134163070025763], [1.6317699E12, 0.01461524328116371], [1.6317702E12, 0.014053130548390566], [1.63176954E12, 0.015009349539201359], [1.63176984E12, 0.01448302482085042]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63177026E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.63176936E12, "maxY": 330.0, "series": [{"data": [[1.63176966E12, 264.0], [1.63176996E12, 206.0], [1.63177026E12, 189.0], [1.6317696E12, 206.0], [1.63176942E12, 203.0], [1.63176972E12, 192.0], [1.63177002E12, 206.0], [1.63176936E12, 330.0], [1.63177014E12, 222.0], [1.63176948E12, 185.0], [1.63176978E12, 251.0], [1.63177008E12, 211.0], [1.6317699E12, 221.0], [1.6317702E12, 216.0], [1.63176954E12, 196.0], [1.63176984E12, 209.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63176966E12, 92.0], [1.63176996E12, 97.0], [1.63177026E12, 95.0], [1.6317696E12, 104.0], [1.63176942E12, 105.0], [1.63176972E12, 98.0], [1.63177002E12, 97.0], [1.63176936E12, 106.0], [1.63177014E12, 110.0], [1.63176948E12, 100.0], [1.63176978E12, 104.0], [1.63177008E12, 94.0], [1.6317699E12, 95.0], [1.6317702E12, 95.90000000000146], [1.63176954E12, 94.0], [1.63176984E12, 98.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63176966E12, 136.0], [1.63176996E12, 148.0], [1.63177026E12, 164.0], [1.6317696E12, 164.0], [1.63176942E12, 167.0], [1.63176972E12, 160.0], [1.63177002E12, 171.0], [1.63176936E12, 177.9900000000016], [1.63177014E12, 183.0], [1.63176948E12, 143.0], [1.63176978E12, 190.0], [1.63177008E12, 139.0], [1.6317699E12, 192.0], [1.6317702E12, 160.0], [1.63176954E12, 152.0], [1.63176984E12, 155.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63176966E12, 108.0], [1.63176996E12, 116.0], [1.63177026E12, 113.0], [1.6317696E12, 129.0], [1.63176942E12, 130.0], [1.63176972E12, 117.0], [1.63177002E12, 114.0], [1.63176936E12, 123.0], [1.63177014E12, 142.0], [1.63176948E12, 115.0], [1.63176978E12, 131.0], [1.63177008E12, 111.0], [1.6317699E12, 119.0], [1.6317702E12, 124.0], [1.63176954E12, 111.95000000000073], [1.63176984E12, 121.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63176966E12, 14.0], [1.63176996E12, 17.0], [1.63177026E12, 6.0], [1.6317696E12, 11.0], [1.63176942E12, 16.0], [1.63176972E12, 19.0], [1.63177002E12, 19.0], [1.63176936E12, 34.0], [1.63177014E12, 9.0], [1.63176948E12, 28.0], [1.63176978E12, 15.0], [1.63177008E12, 25.0], [1.6317699E12, 17.0], [1.6317702E12, 19.0], [1.63176954E12, 17.0], [1.63176984E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63176966E12, 63.0], [1.63176996E12, 64.0], [1.63177026E12, 63.0], [1.6317696E12, 65.0], [1.63176942E12, 66.0], [1.63176972E12, 65.0], [1.63177002E12, 65.0], [1.63176936E12, 67.0], [1.63177014E12, 68.0], [1.63176948E12, 65.0], [1.63176978E12, 64.0], [1.63177008E12, 63.0], [1.6317699E12, 64.0], [1.6317702E12, 62.0], [1.63176954E12, 64.0], [1.63176984E12, 63.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63177026E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 31.0, "minX": 45.0, "maxY": 182.0, "series": [{"data": [[45.0, 31.0], [665.0, 62.0], [697.0, 62.0], [700.0, 64.0], [702.0, 59.0], [734.0, 64.0], [705.0, 67.0], [732.0, 58.0], [730.0, 62.0], [728.0, 60.5], [727.0, 62.0], [721.0, 64.0], [735.0, 61.0], [725.0, 58.0], [739.0, 61.0], [759.0, 64.0], [746.0, 62.0], [754.0, 62.0], [757.0, 63.0], [736.0, 61.0], [767.0, 55.0], [764.0, 61.0], [772.0, 59.0], [797.0, 64.0], [780.0, 63.0], [783.0, 65.0], [769.0, 60.0], [778.0, 69.0], [785.0, 70.0], [776.0, 63.0], [777.0, 66.0], [790.0, 70.0], [773.0, 64.0], [788.0, 66.0], [806.0, 76.5], [807.0, 61.0], [811.0, 60.0], [820.0, 65.0], [801.0, 62.0], [804.0, 66.0], [805.0, 65.0], [827.0, 64.0], [824.0, 60.0], [856.0, 86.0], [863.0, 71.0], [852.0, 64.0], [836.0, 60.5], [850.0, 64.0], [847.0, 67.0], [857.0, 62.0], [838.0, 66.0], [883.0, 75.0], [870.0, 66.0], [873.0, 75.0], [878.0, 68.0], [872.0, 66.0], [907.0, 83.0], [898.0, 73.0], [924.0, 72.0], [923.0, 66.0], [904.0, 80.0], [908.0, 94.0], [909.0, 71.0], [912.0, 68.0], [955.0, 73.0], [953.0, 68.0], [950.0, 68.0], [951.0, 64.0], [944.0, 72.0], [952.0, 80.0], [931.0, 95.0], [930.0, 72.0], [957.0, 63.5], [958.0, 68.0], [959.0, 63.0], [956.0, 69.0], [929.0, 110.0], [928.0, 69.0], [937.0, 74.0], [941.0, 65.0], [942.0, 64.0], [986.0, 66.0], [963.0, 66.0], [974.0, 67.0], [975.0, 65.0], [962.0, 67.0], [961.0, 64.0], [985.0, 66.0], [984.0, 63.0], [967.0, 63.0], [966.0, 65.0], [965.0, 64.0], [964.0, 58.0], [973.0, 62.0], [969.0, 64.0], [968.0, 65.0], [970.0, 64.0], [972.0, 63.0], [971.0, 65.0], [988.0, 64.0], [987.0, 64.0], [990.0, 65.0], [989.0, 64.0], [991.0, 64.0], [976.0, 63.0], [979.0, 64.0], [978.0, 62.0], [980.0, 65.0], [977.0, 66.0], [981.0, 66.0], [983.0, 65.0], [982.0, 67.0], [1018.0, 66.0], [997.0, 65.0], [1004.0, 63.0], [1006.0, 65.0], [1005.0, 63.0], [1001.0, 64.0], [1002.0, 63.0], [1000.0, 65.0], [1003.0, 62.0], [1011.0, 63.0], [1014.0, 63.0], [1015.0, 62.0], [1012.0, 63.0], [1013.0, 65.0], [1007.0, 65.0], [995.0, 64.0], [996.0, 63.0], [1010.0, 62.0], [1009.0, 64.0], [1008.0, 66.0], [1022.0, 67.0], [1021.0, 66.0], [1023.0, 64.0], [1019.0, 65.0], [1020.0, 66.0], [999.0, 66.0], [1017.0, 63.0], [1016.0, 65.0], [998.0, 65.0], [992.0, 65.0], [993.0, 67.0], [994.0, 66.0], [1029.0, 66.0], [1077.0, 182.0], [1058.0, 82.0], [1056.0, 60.0], [1082.0, 65.0], [1084.0, 67.0], [1087.0, 66.0], [1083.0, 63.0], [1043.0, 70.0], [1044.0, 63.0], [1042.0, 68.0], [1035.0, 69.0], [1038.0, 63.0], [1039.0, 62.0], [1032.0, 64.0], [1034.0, 66.0], [1030.0, 63.0], [1031.0, 63.0], [1045.0, 67.0], [1026.0, 65.0], [1027.0, 63.0], [1028.0, 65.0], [1041.0, 62.0], [1040.0, 61.0], [1024.0, 65.0], [1051.0, 71.0], [1050.0, 62.0], [1047.0, 67.0], [1048.0, 63.0], [1025.0, 63.0], [1103.0, 65.0], [1092.0, 62.0], [1129.0, 71.0], [1105.0, 70.0], [1119.0, 68.0], [1100.0, 74.0], [1143.0, 68.0], [1144.0, 78.0], [1126.0, 69.0], [1132.0, 86.0], [1133.0, 80.0], [1151.0, 69.0], [1121.0, 75.0], [1148.0, 70.0], [1165.0, 66.0], [1186.0, 69.0], [1189.0, 78.0], [1191.0, 72.0], [1193.0, 70.0], [1192.0, 78.0], [1207.0, 71.0], [1153.0, 68.0], [1202.0, 72.0], [1167.0, 83.0], [1213.0, 69.0], [1182.0, 70.0], [1178.0, 63.0], [1181.0, 67.0], [1161.0, 105.0], [1164.0, 81.0], [1276.0, 71.0], [1255.0, 74.0], [1254.0, 72.0], [1220.0, 64.0], [1221.0, 70.0], [1219.0, 70.0], [1217.0, 70.0], [1246.0, 69.0], [1238.0, 74.0], [1244.0, 90.0], [1236.0, 67.0], [1251.0, 69.0], [1277.0, 62.0], [1222.0, 73.0], [1225.0, 71.0], [1270.0, 63.0], [1229.0, 70.0], [1287.0, 72.0], [1286.0, 76.0], [1297.0, 68.0], [1310.0, 76.5], [1282.0, 68.0], [1284.0, 71.0], [1281.0, 70.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1310.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 30.0, "minX": 45.0, "maxY": 182.0, "series": [{"data": [[45.0, 30.0], [665.0, 62.0], [697.0, 61.0], [700.0, 64.0], [702.0, 59.0], [734.0, 64.0], [705.0, 67.0], [732.0, 57.5], [730.0, 62.0], [728.0, 60.0], [727.0, 62.0], [721.0, 64.0], [735.0, 61.0], [725.0, 58.0], [739.0, 61.0], [759.0, 64.0], [746.0, 61.0], [754.0, 62.0], [757.0, 62.0], [736.0, 61.0], [767.0, 55.0], [764.0, 60.0], [772.0, 59.0], [797.0, 64.0], [780.0, 63.0], [783.0, 65.0], [769.0, 60.0], [778.0, 69.0], [785.0, 70.0], [776.0, 62.0], [777.0, 66.0], [790.0, 69.0], [773.0, 63.0], [788.0, 66.0], [806.0, 76.5], [807.0, 61.0], [811.0, 59.0], [820.0, 65.0], [801.0, 62.0], [804.0, 66.0], [805.0, 65.0], [827.0, 63.0], [824.0, 60.0], [856.0, 86.0], [863.0, 71.0], [852.0, 64.0], [836.0, 60.0], [850.0, 64.0], [847.0, 66.0], [857.0, 62.0], [838.0, 66.0], [883.0, 75.0], [870.0, 66.0], [873.0, 75.0], [878.0, 68.0], [872.0, 66.0], [907.0, 83.0], [898.0, 73.0], [924.0, 72.0], [923.0, 66.0], [904.0, 79.0], [908.0, 94.0], [909.0, 70.0], [912.0, 67.5], [955.0, 73.0], [953.0, 68.0], [950.0, 67.0], [951.0, 64.0], [944.0, 71.0], [952.0, 79.0], [931.0, 95.0], [930.0, 72.0], [957.0, 63.0], [958.0, 68.0], [959.0, 63.0], [956.0, 69.0], [929.0, 110.0], [928.0, 69.0], [937.0, 73.0], [941.0, 64.0], [942.0, 64.0], [986.0, 66.0], [963.0, 66.0], [974.0, 67.0], [975.0, 65.0], [962.0, 67.0], [961.0, 64.0], [985.0, 66.0], [984.0, 63.0], [967.0, 62.0], [966.0, 64.5], [965.0, 64.0], [964.0, 57.5], [973.0, 62.0], [969.0, 63.0], [968.0, 65.0], [970.0, 64.0], [972.0, 63.0], [971.0, 65.0], [988.0, 64.0], [987.0, 64.0], [990.0, 65.0], [989.0, 64.0], [991.0, 64.0], [976.0, 62.0], [979.0, 64.0], [978.0, 62.0], [980.0, 65.0], [977.0, 66.0], [981.0, 66.0], [983.0, 65.0], [982.0, 67.0], [1018.0, 66.0], [997.0, 65.0], [1004.0, 63.0], [1006.0, 65.0], [1005.0, 63.0], [1001.0, 64.0], [1002.0, 63.0], [1000.0, 65.0], [1003.0, 62.0], [1011.0, 63.0], [1014.0, 63.0], [1015.0, 62.0], [1012.0, 63.0], [1013.0, 65.0], [1007.0, 64.0], [995.0, 64.0], [996.0, 63.0], [1010.0, 62.0], [1009.0, 64.0], [1008.0, 66.0], [1022.0, 67.0], [1021.0, 65.0], [1023.0, 63.0], [1019.0, 65.0], [1020.0, 65.0], [999.0, 66.0], [1017.0, 63.0], [1016.0, 65.0], [998.0, 65.0], [992.0, 65.0], [993.0, 66.0], [994.0, 66.0], [1029.0, 66.0], [1077.0, 182.0], [1058.0, 82.0], [1056.0, 60.0], [1082.0, 65.0], [1084.0, 66.0], [1087.0, 66.0], [1083.0, 63.0], [1043.0, 70.0], [1044.0, 63.0], [1042.0, 68.0], [1035.0, 69.0], [1038.0, 63.0], [1039.0, 62.0], [1032.0, 64.0], [1034.0, 66.0], [1030.0, 63.0], [1031.0, 63.0], [1045.0, 67.0], [1026.0, 64.0], [1027.0, 63.0], [1028.0, 65.0], [1041.0, 62.0], [1040.0, 61.0], [1024.0, 65.0], [1051.0, 71.0], [1050.0, 62.0], [1047.0, 66.0], [1048.0, 63.0], [1025.0, 63.0], [1103.0, 64.0], [1092.0, 62.0], [1129.0, 71.0], [1105.0, 70.0], [1119.0, 68.0], [1100.0, 74.0], [1143.0, 68.0], [1144.0, 77.5], [1126.0, 69.0], [1132.0, 86.0], [1133.0, 80.0], [1151.0, 69.0], [1121.0, 74.0], [1148.0, 70.0], [1165.0, 66.0], [1186.0, 69.0], [1189.0, 77.0], [1191.0, 72.0], [1193.0, 70.0], [1192.0, 78.0], [1207.0, 71.0], [1153.0, 68.0], [1202.0, 72.0], [1167.0, 83.0], [1213.0, 68.0], [1182.0, 70.0], [1178.0, 63.0], [1181.0, 67.0], [1161.0, 104.0], [1164.0, 80.0], [1276.0, 71.0], [1255.0, 74.0], [1254.0, 72.0], [1220.0, 64.0], [1221.0, 70.0], [1219.0, 70.0], [1217.0, 70.0], [1246.0, 69.0], [1238.0, 74.0], [1244.0, 90.0], [1236.0, 67.0], [1251.0, 69.0], [1277.0, 62.0], [1222.0, 72.5], [1225.0, 71.0], [1270.0, 63.0], [1229.0, 69.0], [1287.0, 72.0], [1286.0, 75.5], [1297.0, 68.0], [1310.0, 76.0], [1282.0, 68.0], [1284.0, 71.0], [1281.0, 70.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1310.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 419.31666666666666, "minX": 1.63176936E12, "maxY": 998.6, "series": [{"data": [[1.63176966E12, 998.0666666666667], [1.63176996E12, 996.2833333333333], [1.63177026E12, 581.15], [1.6317696E12, 998.05], [1.63176942E12, 997.05], [1.63176972E12, 997.8333333333334], [1.63177002E12, 996.4833333333333], [1.63176936E12, 419.31666666666666], [1.63177014E12, 994.3], [1.63176948E12, 997.4], [1.63176978E12, 998.6], [1.63177008E12, 996.8833333333333], [1.6317699E12, 997.8666666666667], [1.6317702E12, 995.3333333333334], [1.63176954E12, 997.9333333333333], [1.63176984E12, 992.5333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63177026E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 418.5, "minX": 1.63176936E12, "maxY": 998.2666666666667, "series": [{"data": [[1.63176966E12, 997.8833333333333], [1.63176996E12, 996.55], [1.63177026E12, 582.2666666666667], [1.6317696E12, 998.2333333333333], [1.63176942E12, 997.2166666666667], [1.63176972E12, 997.8333333333334], [1.63177002E12, 996.6666666666666], [1.63176936E12, 418.5], [1.63177014E12, 994.6833333333333], [1.63176948E12, 996.9166666666666], [1.63176978E12, 997.8], [1.63177008E12, 996.3], [1.6317699E12, 997.8166666666667], [1.6317702E12, 995.0333333333333], [1.63176954E12, 998.2666666666667], [1.63176984E12, 993.1166666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63177026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 418.5, "minX": 1.63176936E12, "maxY": 998.2666666666667, "series": [{"data": [[1.63176966E12, 997.8833333333333], [1.63176996E12, 996.55], [1.63177026E12, 582.2666666666667], [1.6317696E12, 998.2333333333333], [1.63176942E12, 997.2166666666667], [1.63176972E12, 997.8333333333334], [1.63177002E12, 996.6666666666666], [1.63176936E12, 418.5], [1.63177014E12, 994.6833333333333], [1.63176948E12, 996.9166666666666], [1.63176978E12, 997.8], [1.63177008E12, 996.3], [1.6317699E12, 997.8166666666667], [1.6317702E12, 995.0333333333333], [1.63176954E12, 998.2666666666667], [1.63176984E12, 993.1166666666667]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63177026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 418.5, "minX": 1.63176936E12, "maxY": 998.2666666666667, "series": [{"data": [[1.63176966E12, 997.8833333333333], [1.63176996E12, 996.55], [1.63177026E12, 582.2666666666667], [1.6317696E12, 998.2333333333333], [1.63176942E12, 997.2166666666667], [1.63176972E12, 997.8333333333334], [1.63177002E12, 996.6666666666666], [1.63176936E12, 418.5], [1.63177014E12, 994.6833333333333], [1.63176948E12, 996.9166666666666], [1.63176978E12, 997.8], [1.63177008E12, 996.3], [1.6317699E12, 997.8166666666667], [1.6317702E12, 995.0333333333333], [1.63176954E12, 998.2666666666667], [1.63176984E12, 993.1166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63177026E12, "title": "Total Transactions Per Second"}},
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

