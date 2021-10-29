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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 520.0, "series": [{"data": [[0.0, 6.0], [0.1, 29.0], [0.2, 31.0], [0.3, 32.0], [0.4, 33.0], [0.5, 34.0], [0.6, 34.0], [0.7, 35.0], [0.8, 35.0], [0.9, 36.0], [1.0, 36.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 38.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 40.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 42.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 42.0], [4.5, 43.0], [4.6, 43.0], [4.7, 43.0], [4.8, 43.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 43.0], [5.3, 43.0], [5.4, 43.0], [5.5, 44.0], [5.6, 44.0], [5.7, 44.0], [5.8, 44.0], [5.9, 44.0], [6.0, 44.0], [6.1, 44.0], [6.2, 44.0], [6.3, 44.0], [6.4, 44.0], [6.5, 44.0], [6.6, 44.0], [6.7, 45.0], [6.8, 45.0], [6.9, 45.0], [7.0, 45.0], [7.1, 45.0], [7.2, 45.0], [7.3, 45.0], [7.4, 45.0], [7.5, 45.0], [7.6, 45.0], [7.7, 45.0], [7.8, 45.0], [7.9, 45.0], [8.0, 46.0], [8.1, 46.0], [8.2, 46.0], [8.3, 46.0], [8.4, 46.0], [8.5, 46.0], [8.6, 46.0], [8.7, 46.0], [8.8, 46.0], [8.9, 46.0], [9.0, 46.0], [9.1, 46.0], [9.2, 46.0], [9.3, 46.0], [9.4, 46.0], [9.5, 47.0], [9.6, 47.0], [9.7, 47.0], [9.8, 47.0], [9.9, 47.0], [10.0, 47.0], [10.1, 47.0], [10.2, 47.0], [10.3, 47.0], [10.4, 47.0], [10.5, 47.0], [10.6, 47.0], [10.7, 47.0], [10.8, 47.0], [10.9, 47.0], [11.0, 48.0], [11.1, 48.0], [11.2, 48.0], [11.3, 48.0], [11.4, 48.0], [11.5, 48.0], [11.6, 48.0], [11.7, 48.0], [11.8, 48.0], [11.9, 48.0], [12.0, 48.0], [12.1, 48.0], [12.2, 48.0], [12.3, 48.0], [12.4, 48.0], [12.5, 49.0], [12.6, 49.0], [12.7, 49.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 49.0], [13.3, 49.0], [13.4, 49.0], [13.5, 49.0], [13.6, 49.0], [13.7, 49.0], [13.8, 49.0], [13.9, 50.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 50.0], [14.8, 50.0], [14.9, 50.0], [15.0, 50.0], [15.1, 50.0], [15.2, 50.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 51.0], [16.6, 51.0], [16.7, 51.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 52.0], [17.9, 52.0], [18.0, 52.0], [18.1, 53.0], [18.2, 53.0], [18.3, 53.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 53.0], [18.8, 53.0], [18.9, 53.0], [19.0, 53.0], [19.1, 54.0], [19.2, 54.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 54.0], [20.1, 55.0], [20.2, 55.0], [20.3, 55.0], [20.4, 55.0], [20.5, 55.0], [20.6, 55.0], [20.7, 55.0], [20.8, 55.0], [20.9, 55.0], [21.0, 55.0], [21.1, 55.0], [21.2, 55.0], [21.3, 55.0], [21.4, 56.0], [21.5, 56.0], [21.6, 56.0], [21.7, 56.0], [21.8, 56.0], [21.9, 56.0], [22.0, 56.0], [22.1, 56.0], [22.2, 56.0], [22.3, 56.0], [22.4, 56.0], [22.5, 56.0], [22.6, 56.0], [22.7, 56.0], [22.8, 56.0], [22.9, 56.0], [23.0, 56.0], [23.1, 57.0], [23.2, 57.0], [23.3, 57.0], [23.4, 57.0], [23.5, 57.0], [23.6, 57.0], [23.7, 57.0], [23.8, 57.0], [23.9, 57.0], [24.0, 57.0], [24.1, 57.0], [24.2, 57.0], [24.3, 57.0], [24.4, 57.0], [24.5, 57.0], [24.6, 57.0], [24.7, 57.0], [24.8, 57.0], [24.9, 57.0], [25.0, 57.0], [25.1, 57.0], [25.2, 57.0], [25.3, 58.0], [25.4, 58.0], [25.5, 58.0], [25.6, 58.0], [25.7, 58.0], [25.8, 58.0], [25.9, 58.0], [26.0, 58.0], [26.1, 58.0], [26.2, 58.0], [26.3, 58.0], [26.4, 58.0], [26.5, 58.0], [26.6, 58.0], [26.7, 58.0], [26.8, 58.0], [26.9, 58.0], [27.0, 58.0], [27.1, 58.0], [27.2, 58.0], [27.3, 58.0], [27.4, 58.0], [27.5, 58.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 58.0], [28.0, 59.0], [28.1, 59.0], [28.2, 59.0], [28.3, 59.0], [28.4, 59.0], [28.5, 59.0], [28.6, 59.0], [28.7, 59.0], [28.8, 59.0], [28.9, 59.0], [29.0, 59.0], [29.1, 59.0], [29.2, 59.0], [29.3, 59.0], [29.4, 59.0], [29.5, 59.0], [29.6, 59.0], [29.7, 59.0], [29.8, 59.0], [29.9, 59.0], [30.0, 59.0], [30.1, 59.0], [30.2, 59.0], [30.3, 59.0], [30.4, 59.0], [30.5, 59.0], [30.6, 59.0], [30.7, 59.0], [30.8, 59.0], [30.9, 59.0], [31.0, 60.0], [31.1, 60.0], [31.2, 60.0], [31.3, 60.0], [31.4, 60.0], [31.5, 60.0], [31.6, 60.0], [31.7, 60.0], [31.8, 60.0], [31.9, 60.0], [32.0, 60.0], [32.1, 60.0], [32.2, 60.0], [32.3, 60.0], [32.4, 60.0], [32.5, 60.0], [32.6, 60.0], [32.7, 60.0], [32.8, 60.0], [32.9, 60.0], [33.0, 60.0], [33.1, 60.0], [33.2, 60.0], [33.3, 60.0], [33.4, 60.0], [33.5, 60.0], [33.6, 60.0], [33.7, 60.0], [33.8, 60.0], [33.9, 60.0], [34.0, 60.0], [34.1, 61.0], [34.2, 61.0], [34.3, 61.0], [34.4, 61.0], [34.5, 61.0], [34.6, 61.0], [34.7, 61.0], [34.8, 61.0], [34.9, 61.0], [35.0, 61.0], [35.1, 61.0], [35.2, 61.0], [35.3, 61.0], [35.4, 61.0], [35.5, 61.0], [35.6, 61.0], [35.7, 61.0], [35.8, 61.0], [35.9, 61.0], [36.0, 61.0], [36.1, 61.0], [36.2, 61.0], [36.3, 61.0], [36.4, 61.0], [36.5, 61.0], [36.6, 61.0], [36.7, 61.0], [36.8, 61.0], [36.9, 61.0], [37.0, 61.0], [37.1, 62.0], [37.2, 62.0], [37.3, 62.0], [37.4, 62.0], [37.5, 62.0], [37.6, 62.0], [37.7, 62.0], [37.8, 62.0], [37.9, 62.0], [38.0, 62.0], [38.1, 62.0], [38.2, 62.0], [38.3, 62.0], [38.4, 62.0], [38.5, 62.0], [38.6, 62.0], [38.7, 62.0], [38.8, 62.0], [38.9, 62.0], [39.0, 62.0], [39.1, 62.0], [39.2, 62.0], [39.3, 62.0], [39.4, 62.0], [39.5, 62.0], [39.6, 62.0], [39.7, 62.0], [39.8, 62.0], [39.9, 62.0], [40.0, 62.0], [40.1, 63.0], [40.2, 63.0], [40.3, 63.0], [40.4, 63.0], [40.5, 63.0], [40.6, 63.0], [40.7, 63.0], [40.8, 63.0], [40.9, 63.0], [41.0, 63.0], [41.1, 63.0], [41.2, 63.0], [41.3, 63.0], [41.4, 63.0], [41.5, 63.0], [41.6, 63.0], [41.7, 63.0], [41.8, 63.0], [41.9, 63.0], [42.0, 63.0], [42.1, 63.0], [42.2, 63.0], [42.3, 63.0], [42.4, 63.0], [42.5, 63.0], [42.6, 63.0], [42.7, 63.0], [42.8, 63.0], [42.9, 63.0], [43.0, 64.0], [43.1, 64.0], [43.2, 64.0], [43.3, 64.0], [43.4, 64.0], [43.5, 64.0], [43.6, 64.0], [43.7, 64.0], [43.8, 64.0], [43.9, 64.0], [44.0, 64.0], [44.1, 64.0], [44.2, 64.0], [44.3, 64.0], [44.4, 64.0], [44.5, 64.0], [44.6, 64.0], [44.7, 64.0], [44.8, 64.0], [44.9, 64.0], [45.0, 64.0], [45.1, 64.0], [45.2, 64.0], [45.3, 64.0], [45.4, 64.0], [45.5, 64.0], [45.6, 64.0], [45.7, 65.0], [45.8, 65.0], [45.9, 65.0], [46.0, 65.0], [46.1, 65.0], [46.2, 65.0], [46.3, 65.0], [46.4, 65.0], [46.5, 65.0], [46.6, 65.0], [46.7, 65.0], [46.8, 65.0], [46.9, 65.0], [47.0, 65.0], [47.1, 65.0], [47.2, 65.0], [47.3, 65.0], [47.4, 65.0], [47.5, 65.0], [47.6, 65.0], [47.7, 65.0], [47.8, 65.0], [47.9, 65.0], [48.0, 65.0], [48.1, 65.0], [48.2, 65.0], [48.3, 66.0], [48.4, 66.0], [48.5, 66.0], [48.6, 66.0], [48.7, 66.0], [48.8, 66.0], [48.9, 66.0], [49.0, 66.0], [49.1, 66.0], [49.2, 66.0], [49.3, 66.0], [49.4, 66.0], [49.5, 66.0], [49.6, 66.0], [49.7, 66.0], [49.8, 66.0], [49.9, 66.0], [50.0, 66.0], [50.1, 66.0], [50.2, 66.0], [50.3, 66.0], [50.4, 66.0], [50.5, 66.0], [50.6, 66.0], [50.7, 66.0], [50.8, 66.0], [50.9, 67.0], [51.0, 67.0], [51.1, 67.0], [51.2, 67.0], [51.3, 67.0], [51.4, 67.0], [51.5, 67.0], [51.6, 67.0], [51.7, 67.0], [51.8, 67.0], [51.9, 67.0], [52.0, 67.0], [52.1, 67.0], [52.2, 67.0], [52.3, 67.0], [52.4, 67.0], [52.5, 67.0], [52.6, 67.0], [52.7, 67.0], [52.8, 67.0], [52.9, 67.0], [53.0, 67.0], [53.1, 67.0], [53.2, 67.0], [53.3, 68.0], [53.4, 68.0], [53.5, 68.0], [53.6, 68.0], [53.7, 68.0], [53.8, 68.0], [53.9, 68.0], [54.0, 68.0], [54.1, 68.0], [54.2, 68.0], [54.3, 68.0], [54.4, 68.0], [54.5, 68.0], [54.6, 68.0], [54.7, 68.0], [54.8, 68.0], [54.9, 68.0], [55.0, 68.0], [55.1, 68.0], [55.2, 68.0], [55.3, 68.0], [55.4, 68.0], [55.5, 68.0], [55.6, 69.0], [55.7, 69.0], [55.8, 69.0], [55.9, 69.0], [56.0, 69.0], [56.1, 69.0], [56.2, 69.0], [56.3, 69.0], [56.4, 69.0], [56.5, 69.0], [56.6, 69.0], [56.7, 69.0], [56.8, 69.0], [56.9, 69.0], [57.0, 69.0], [57.1, 69.0], [57.2, 69.0], [57.3, 69.0], [57.4, 69.0], [57.5, 69.0], [57.6, 69.0], [57.7, 70.0], [57.8, 70.0], [57.9, 70.0], [58.0, 70.0], [58.1, 70.0], [58.2, 70.0], [58.3, 70.0], [58.4, 70.0], [58.5, 70.0], [58.6, 70.0], [58.7, 70.0], [58.8, 70.0], [58.9, 70.0], [59.0, 70.0], [59.1, 70.0], [59.2, 70.0], [59.3, 70.0], [59.4, 70.0], [59.5, 70.0], [59.6, 71.0], [59.7, 71.0], [59.8, 71.0], [59.9, 71.0], [60.0, 71.0], [60.1, 71.0], [60.2, 71.0], [60.3, 71.0], [60.4, 71.0], [60.5, 71.0], [60.6, 71.0], [60.7, 71.0], [60.8, 71.0], [60.9, 71.0], [61.0, 71.0], [61.1, 71.0], [61.2, 71.0], [61.3, 72.0], [61.4, 72.0], [61.5, 72.0], [61.6, 72.0], [61.7, 72.0], [61.8, 72.0], [61.9, 72.0], [62.0, 72.0], [62.1, 72.0], [62.2, 72.0], [62.3, 72.0], [62.4, 72.0], [62.5, 72.0], [62.6, 72.0], [62.7, 72.0], [62.8, 72.0], [62.9, 73.0], [63.0, 73.0], [63.1, 73.0], [63.2, 73.0], [63.3, 73.0], [63.4, 73.0], [63.5, 73.0], [63.6, 73.0], [63.7, 73.0], [63.8, 73.0], [63.9, 73.0], [64.0, 73.0], [64.1, 73.0], [64.2, 74.0], [64.3, 74.0], [64.4, 74.0], [64.5, 74.0], [64.6, 74.0], [64.7, 74.0], [64.8, 74.0], [64.9, 74.0], [65.0, 74.0], [65.1, 74.0], [65.2, 74.0], [65.3, 74.0], [65.4, 75.0], [65.5, 75.0], [65.6, 75.0], [65.7, 75.0], [65.8, 75.0], [65.9, 75.0], [66.0, 75.0], [66.1, 75.0], [66.2, 75.0], [66.3, 75.0], [66.4, 75.0], [66.5, 76.0], [66.6, 76.0], [66.7, 76.0], [66.8, 76.0], [66.9, 76.0], [67.0, 76.0], [67.1, 76.0], [67.2, 76.0], [67.3, 76.0], [67.4, 77.0], [67.5, 77.0], [67.6, 77.0], [67.7, 77.0], [67.8, 77.0], [67.9, 77.0], [68.0, 77.0], [68.1, 77.0], [68.2, 78.0], [68.3, 78.0], [68.4, 78.0], [68.5, 78.0], [68.6, 78.0], [68.7, 78.0], [68.8, 79.0], [68.9, 79.0], [69.0, 79.0], [69.1, 79.0], [69.2, 79.0], [69.3, 79.0], [69.4, 80.0], [69.5, 80.0], [69.6, 80.0], [69.7, 80.0], [69.8, 80.0], [69.9, 80.0], [70.0, 81.0], [70.1, 81.0], [70.2, 81.0], [70.3, 81.0], [70.4, 82.0], [70.5, 82.0], [70.6, 82.0], [70.7, 82.0], [70.8, 82.0], [70.9, 83.0], [71.0, 83.0], [71.1, 83.0], [71.2, 83.0], [71.3, 84.0], [71.4, 84.0], [71.5, 84.0], [71.6, 84.0], [71.7, 84.0], [71.8, 85.0], [71.9, 85.0], [72.0, 85.0], [72.1, 85.0], [72.2, 85.0], [72.3, 86.0], [72.4, 86.0], [72.5, 86.0], [72.6, 86.0], [72.7, 86.0], [72.8, 87.0], [72.9, 87.0], [73.0, 87.0], [73.1, 87.0], [73.2, 87.0], [73.3, 87.0], [73.4, 88.0], [73.5, 88.0], [73.6, 88.0], [73.7, 88.0], [73.8, 88.0], [73.9, 88.0], [74.0, 88.0], [74.1, 89.0], [74.2, 89.0], [74.3, 89.0], [74.4, 89.0], [74.5, 89.0], [74.6, 89.0], [74.7, 89.0], [74.8, 90.0], [74.9, 90.0], [75.0, 90.0], [75.1, 90.0], [75.2, 90.0], [75.3, 90.0], [75.4, 90.0], [75.5, 91.0], [75.6, 91.0], [75.7, 91.0], [75.8, 91.0], [75.9, 91.0], [76.0, 91.0], [76.1, 91.0], [76.2, 91.0], [76.3, 92.0], [76.4, 92.0], [76.5, 92.0], [76.6, 92.0], [76.7, 92.0], [76.8, 92.0], [76.9, 92.0], [77.0, 93.0], [77.1, 93.0], [77.2, 93.0], [77.3, 93.0], [77.4, 93.0], [77.5, 93.0], [77.6, 93.0], [77.7, 94.0], [77.8, 94.0], [77.9, 94.0], [78.0, 94.0], [78.1, 94.0], [78.2, 94.0], [78.3, 95.0], [78.4, 95.0], [78.5, 95.0], [78.6, 95.0], [78.7, 95.0], [78.8, 96.0], [78.9, 96.0], [79.0, 96.0], [79.1, 97.0], [79.2, 97.0], [79.3, 97.0], [79.4, 97.0], [79.5, 98.0], [79.6, 98.0], [79.7, 98.0], [79.8, 99.0], [79.9, 99.0], [80.0, 99.0], [80.1, 100.0], [80.2, 100.0], [80.3, 101.0], [80.4, 101.0], [80.5, 102.0], [80.6, 102.0], [80.7, 103.0], [80.8, 103.0], [80.9, 104.0], [81.0, 104.0], [81.1, 105.0], [81.2, 105.0], [81.3, 106.0], [81.4, 106.0], [81.5, 107.0], [81.6, 107.0], [81.7, 108.0], [81.8, 108.0], [81.9, 108.0], [82.0, 109.0], [82.1, 109.0], [82.2, 110.0], [82.3, 110.0], [82.4, 111.0], [82.5, 111.0], [82.6, 111.0], [82.7, 112.0], [82.8, 112.0], [82.9, 113.0], [83.0, 114.0], [83.1, 114.0], [83.2, 115.0], [83.3, 116.0], [83.4, 116.0], [83.5, 117.0], [83.6, 118.0], [83.7, 119.0], [83.8, 121.0], [83.9, 122.0], [84.0, 124.0], [84.1, 126.0], [84.2, 128.0], [84.3, 130.0], [84.4, 132.0], [84.5, 135.0], [84.6, 137.0], [84.7, 140.0], [84.8, 143.0], [84.9, 145.0], [85.0, 147.0], [85.1, 149.0], [85.2, 151.0], [85.3, 153.0], [85.4, 155.0], [85.5, 156.0], [85.6, 158.0], [85.7, 160.0], [85.8, 162.0], [85.9, 163.0], [86.0, 165.0], [86.1, 167.0], [86.2, 168.0], [86.3, 170.0], [86.4, 172.0], [86.5, 173.0], [86.6, 175.0], [86.7, 176.0], [86.8, 179.0], [86.9, 181.0], [87.0, 183.0], [87.1, 184.0], [87.2, 186.0], [87.3, 188.0], [87.4, 189.0], [87.5, 191.0], [87.6, 193.0], [87.7, 195.0], [87.8, 196.0], [87.9, 198.0], [88.0, 200.0], [88.1, 202.0], [88.2, 204.0], [88.3, 206.0], [88.4, 208.0], [88.5, 210.0], [88.6, 212.0], [88.7, 213.0], [88.8, 215.0], [88.9, 216.0], [89.0, 218.0], [89.1, 219.0], [89.2, 221.0], [89.3, 222.0], [89.4, 223.0], [89.5, 225.0], [89.6, 226.0], [89.7, 227.0], [89.8, 228.0], [89.9, 230.0], [90.0, 231.0], [90.1, 232.0], [90.2, 234.0], [90.3, 235.0], [90.4, 236.0], [90.5, 237.0], [90.6, 239.0], [90.7, 240.0], [90.8, 241.0], [90.9, 242.0], [91.0, 243.0], [91.1, 245.0], [91.2, 246.0], [91.3, 247.0], [91.4, 248.0], [91.5, 249.0], [91.6, 250.0], [91.7, 251.0], [91.8, 252.0], [91.9, 253.0], [92.0, 254.0], [92.1, 255.0], [92.2, 256.0], [92.3, 257.0], [92.4, 258.0], [92.5, 259.0], [92.6, 260.0], [92.7, 261.0], [92.8, 262.0], [92.9, 263.0], [93.0, 264.0], [93.1, 264.0], [93.2, 265.0], [93.3, 266.0], [93.4, 267.0], [93.5, 268.0], [93.6, 269.0], [93.7, 270.0], [93.8, 271.0], [93.9, 272.0], [94.0, 273.0], [94.1, 274.0], [94.2, 275.0], [94.3, 276.0], [94.4, 277.0], [94.5, 278.0], [94.6, 279.0], [94.7, 280.0], [94.8, 281.0], [94.9, 282.0], [95.0, 283.0], [95.1, 284.0], [95.2, 285.0], [95.3, 286.0], [95.4, 287.0], [95.5, 288.0], [95.6, 289.0], [95.7, 290.0], [95.8, 292.0], [95.9, 293.0], [96.0, 294.0], [96.1, 295.0], [96.2, 296.0], [96.3, 297.0], [96.4, 298.0], [96.5, 299.0], [96.6, 300.0], [96.7, 302.0], [96.8, 303.0], [96.9, 304.0], [97.0, 305.0], [97.1, 307.0], [97.2, 308.0], [97.3, 309.0], [97.4, 311.0], [97.5, 313.0], [97.6, 314.0], [97.7, 316.0], [97.8, 318.0], [97.9, 319.0], [98.0, 321.0], [98.1, 323.0], [98.2, 325.0], [98.3, 327.0], [98.4, 329.0], [98.5, 331.0], [98.6, 333.0], [98.7, 335.0], [98.8, 338.0], [98.9, 341.0], [99.0, 344.0], [99.1, 348.0], [99.2, 352.0], [99.3, 356.0], [99.4, 361.0], [99.5, 368.0], [99.6, 378.0], [99.7, 389.0], [99.8, 403.0], [99.9, 428.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 98.0, "minX": 0.0, "maxY": 716727.0, "series": [{"data": [[0.0, 716727.0], [300.0, 29227.0], [200.0, 76644.0], [100.0, 71221.0], [400.0, 1891.0], [500.0, 98.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 94.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 895714.0, "series": [{"data": [[0.0, 895714.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 94.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 595.7323187373944, "minX": 1.63175514E12, "maxY": 600.0, "series": [{"data": [[1.63175604E12, 598.8400075987851], [1.63175574E12, 600.0], [1.63175568E12, 600.0], [1.63175538E12, 600.0], [1.6317558E12, 600.0], [1.6317555E12, 600.0], [1.63175544E12, 600.0], [1.63175514E12, 595.7323187373944], [1.63175556E12, 600.0], [1.63175526E12, 600.0], [1.6317552E12, 600.0], [1.63175586E12, 600.0], [1.63175532E12, 600.0], [1.63175598E12, 600.0], [1.63175592E12, 600.0], [1.63175562E12, 600.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63175604E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 211.0, "maxY": 397.0, "series": [{"data": [[211.0, 6.0], [253.0, 262.6666666666667], [254.0, 270.0], [263.0, 278.25], [256.0, 35.55555555555556], [260.0, 284.0], [261.0, 270.5], [262.0, 297.0], [264.0, 270.22222222222223], [265.0, 281.5], [266.0, 293.5], [267.0, 248.5], [269.0, 293.77777777777777], [270.0, 297.54838709677426], [285.0, 293.75], [286.0, 260.5555555555556], [284.0, 265.0], [275.0, 318.6], [274.0, 320.1428571428571], [272.0, 304.75], [283.0, 323.0], [282.0, 304.25], [281.0, 305.71428571428567], [280.0, 248.2], [279.0, 267.3571428571429], [278.0, 262.3333333333333], [277.0, 187.5], [276.0, 322.0], [300.0, 169.66666666666666], [303.0, 145.53333333333333], [290.0, 203.99999999999997], [299.0, 175.0], [291.0, 170.0], [289.0, 276.0], [295.0, 12.444444444444445], [307.0, 154.66666666666666], [304.0, 134.625], [306.0, 129.33333333333331], [308.0, 125.2], [311.0, 105.0], [309.0, 109.0], [312.0, 104.14285714285714], [317.0, 109.0], [316.0, 106.5], [318.0, 108.0], [313.0, 104.33333333333333], [315.0, 108.0], [324.0, 119.5], [325.0, 120.0], [330.0, 129.0], [334.0, 14.5], [347.0, 163.0], [349.0, 165.0], [344.0, 156.0], [350.0, 168.0], [341.0, 153.0], [342.0, 155.0], [343.0, 154.0], [354.0, 174.0], [352.0, 171.5], [355.0, 175.0], [364.0, 156.85714285714286], [365.0, 151.0], [366.0, 154.0], [367.0, 153.0], [356.0, 176.0], [357.0, 178.0], [359.0, 185.0], [360.0, 185.0], [361.0, 161.83333333333334], [362.0, 156.75], [363.0, 158.0], [370.0, 155.33333333333334], [368.0, 153.0], [371.0, 156.0], [372.0, 50.63636363636363], [374.0, 159.75], [375.0, 159.45454545454547], [377.0, 159.66666666666666], [378.0, 160.5], [379.0, 163.0], [412.0, 13.454545454545455], [444.0, 299.0], [445.0, 299.0], [446.0, 300.0], [447.0, 301.0], [448.0, 303.0], [459.0, 324.0], [449.0, 18.5], [465.0, 337.8333333333333], [464.0, 337.0], [467.0, 343.6666666666667], [476.0, 355.0], [478.0, 354.0], [479.0, 355.0], [468.0, 347.5], [469.0, 350.5], [470.0, 354.0], [471.0, 354.0], [472.0, 354.0], [473.0, 355.0], [474.0, 356.0], [475.0, 355.3636363636364], [481.0, 68.63999999999999], [480.0, 354.0], [482.0, 356.25], [483.0, 356.25], [484.0, 358.25000000000006], [485.0, 358.62499999999994], [486.0, 360.0], [489.0, 363.4285714285714], [494.0, 364.66666666666663], [495.0, 364.0], [492.0, 362.0], [493.0, 364.0], [490.0, 362.0], [491.0, 362.6666666666667], [498.0, 366.6666666666667], [497.0, 365.8571428571429], [499.0, 370.0], [508.0, 381.0], [509.0, 382.0], [510.0, 315.2], [511.0, 381.125], [500.0, 372.5], [501.0, 378.0], [502.0, 157.66666666666666], [503.0, 376.3333333333333], [504.0, 378.9285714285714], [505.0, 380.2857142857143], [506.0, 382.25], [507.0, 86.45054945054949], [518.0, 383.0], [513.0, 213.0], [512.0, 269.3333333333333], [524.0, 378.5], [525.0, 52.0], [527.0, 382.6666666666667], [522.0, 315.6], [523.0, 375.5], [514.0, 376.6], [516.0, 379.0], [517.0, 381.3333333333333], [519.0, 273.6666666666667], [536.0, 378.8333333333333], [537.0, 372.25], [538.0, 372.42857142857144], [540.0, 372.3636363636364], [541.0, 371.4], [543.0, 371.0], [528.0, 384.0], [529.0, 380.0], [530.0, 325.83333333333337], [531.0, 375.16666666666663], [532.0, 46.80645161290323], [534.0, 378.75], [535.0, 379.5], [520.0, 385.0], [521.0, 379.0], [545.0, 369.25], [544.0, 368.8333333333333], [546.0, 368.5], [562.0, 381.1111111111111], [561.0, 381.0], [570.0, 386.22222222222223], [575.0, 397.0], [574.0, 392.0], [568.0, 385.5], [569.0, 386.6666666666667], [563.0, 380.3333333333333], [565.0, 380.6666666666667], [567.0, 259.0], [566.0, 383.0], [547.0, 366.0], [549.0, 371.5], [548.0, 372.0], [559.0, 378.3333333333333], [558.0, 379.0], [557.0, 379.0], [556.0, 377.6666666666667], [554.0, 379.0], [553.0, 378.5], [552.0, 377.0], [579.0, 396.0], [587.0, 276.0], [584.0, 394.75], [585.0, 306.375], [586.0, 336.75], [583.0, 386.25], [600.0, 94.85316174407359], [593.0, 173.15384615384613], [595.0, 268.55555555555554], [596.0, 55.214285714285715], [597.0, 265.0], [598.0, 259.0], [599.0, 260.5], [594.0, 290.0], [592.0, 225.0], [582.0, 152.8450704225352], [581.0, 193.0], [578.0, 395.0], [577.0, 394.0], [591.0, 305.2], [590.0, 169.65217391304353], [588.0, 321.3636363636364], [589.0, 337.6]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[599.805332169413, 95.03360764807239]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 600.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 72818.66666666667, "minX": 1.63175514E12, "maxY": 7910105.416666667, "series": [{"data": [[1.63175604E12, 3475974.1666666665], [1.63175574E12, 7864544.083333333], [1.63175568E12, 7891216.8], [1.63175538E12, 7910105.416666667], [1.6317558E12, 7907728.3], [1.6317555E12, 7902574.616666666], [1.63175544E12, 7899672.483333333], [1.63175514E12, 4451703.2], [1.63175556E12, 7894917.25], [1.63175526E12, 7873128.0], [1.6317552E12, 7865071.016666667], [1.63175586E12, 7888312.0], [1.63175532E12, 7873389.133333334], [1.63175598E12, 7829545.666666667], [1.63175592E12, 7888843.266666667], [1.63175562E12, 7889237.633333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63175604E12, 72818.66666666667], [1.63175574E12, 164755.0], [1.63175568E12, 165313.86666666667], [1.63175538E12, 165709.5], [1.6317558E12, 165659.7], [1.6317555E12, 165551.8], [1.63175544E12, 165490.93333333332], [1.63175514E12, 92511.9], [1.63175556E12, 165391.33333333334], [1.63175526E12, 164822.55], [1.6317552E12, 163773.5], [1.63175586E12, 165253.0], [1.63175532E12, 164940.36666666667], [1.63175598E12, 164021.83333333334], [1.63175592E12, 165264.06666666668], [1.63175562E12, 165272.36666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63175604E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 89.67535442022222, "minX": 1.63175514E12, "maxY": 108.79334282662931, "series": [{"data": [[1.63175604E12, 90.9759498480243], [1.63175574E12, 95.18990764063734], [1.63175568E12, 95.65100749765696], [1.63175538E12, 93.81826529760323], [1.6317558E12, 91.47133289910988], [1.6317555E12, 93.64069654734439], [1.63175544E12, 89.67535442022222], [1.63175514E12, 108.79334282662931], [1.63175556E12, 92.53596520575444], [1.63175526E12, 101.13570410131764], [1.6317552E12, 101.04155892131672], [1.63175586E12, 90.69775657123758], [1.63175532E12, 93.5111796970667], [1.63175598E12, 99.17864552584894], [1.63175592E12, 96.64221381457777], [1.63175562E12, 90.38634347222016]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63175604E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 89.51372542463606, "minX": 1.63175514E12, "maxY": 108.61032989201404, "series": [{"data": [[1.63175604E12, 90.81382978723398], [1.63175574E12, 95.02194794290409], [1.63175568E12, 95.48398379970519], [1.63175538E12, 93.65215794306737], [1.6317558E12, 91.29956410641863], [1.6317555E12, 93.47279320832844], [1.63175544E12, 89.51372542463606], [1.63175514E12, 108.61032989201404], [1.63175556E12, 92.37356975577073], [1.63175526E12, 100.96950431938372], [1.6317552E12, 100.87622997615533], [1.63175586E12, 90.53666499246567], [1.63175532E12, 93.35028599225028], [1.63175598E12, 99.01764358606688], [1.63175592E12, 96.47828707268943], [1.63175562E12, 90.22496944941919]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63175604E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01232111809549285, "minX": 1.63175514E12, "maxY": 0.4039693841224652, "series": [{"data": [[1.63175604E12, 0.033244680851063746], [1.63175574E12, 0.015046179680940366], [1.63175568E12, 0.014074842683090267], [1.63175538E12, 0.014558811253026348], [1.6317558E12, 0.016884613457588155], [1.6317555E12, 0.016544670610648633], [1.63175544E12, 0.01232111809549285], [1.63175514E12, 0.4039693841224652], [1.63175556E12, 0.01338240214118448], [1.63175526E12, 0.01571752075819858], [1.6317552E12, 0.012946233670282317], [1.63175586E12, 0.013209442491210492], [1.63175532E12, 0.013083516446651264], [1.63175598E12, 0.015805009698912135], [1.63175592E12, 0.013593598285733378], [1.63175562E12, 0.018614928771113117]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63175604E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.63175514E12, "maxY": 520.0, "series": [{"data": [[1.63175604E12, 364.0], [1.63175574E12, 412.0], [1.63175568E12, 460.0], [1.63175538E12, 366.0], [1.6317558E12, 377.0], [1.6317555E12, 376.0], [1.63175544E12, 363.0], [1.63175514E12, 421.0], [1.63175556E12, 347.0], [1.63175526E12, 447.0], [1.6317552E12, 414.0], [1.63175586E12, 357.0], [1.63175532E12, 439.0], [1.63175598E12, 520.0], [1.63175592E12, 408.0], [1.63175562E12, 435.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63175604E12, 235.0], [1.63175574E12, 228.90000000000146], [1.63175568E12, 221.0], [1.63175538E12, 226.0], [1.6317558E12, 115.0], [1.6317555E12, 183.0], [1.63175544E12, 172.0], [1.63175514E12, 268.90000000000146], [1.63175556E12, 187.90000000000146], [1.63175526E12, 247.0], [1.6317552E12, 245.0], [1.63175586E12, 221.0], [1.63175532E12, 238.0], [1.63175598E12, 236.0], [1.63175592E12, 263.0], [1.63175562E12, 210.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63175604E12, 329.0], [1.63175574E12, 379.0], [1.63175568E12, 322.0], [1.63175538E12, 308.0], [1.6317558E12, 325.0], [1.6317555E12, 300.0], [1.63175544E12, 291.0], [1.63175514E12, 356.0], [1.63175556E12, 330.0], [1.63175526E12, 407.0], [1.6317552E12, 331.0], [1.63175586E12, 327.0], [1.63175532E12, 327.0], [1.63175598E12, 471.9900000000016], [1.63175592E12, 329.0], [1.63175562E12, 323.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63175604E12, 274.0], [1.63175574E12, 326.0], [1.63175568E12, 273.0], [1.63175538E12, 270.0], [1.6317558E12, 255.0], [1.6317555E12, 255.0], [1.63175544E12, 247.0], [1.63175514E12, 315.0], [1.63175556E12, 289.0], [1.63175526E12, 320.9500000000007], [1.6317552E12, 288.0], [1.63175586E12, 263.0], [1.63175532E12, 276.0], [1.63175598E12, 292.0], [1.63175592E12, 303.0], [1.63175562E12, 264.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63175604E12, 6.0], [1.63175574E12, 13.0], [1.63175568E12, 25.0], [1.63175538E12, 25.0], [1.6317558E12, 15.0], [1.6317555E12, 16.0], [1.63175544E12, 18.0], [1.63175514E12, 13.0], [1.63175556E12, 14.0], [1.63175526E12, 18.0], [1.6317552E12, 23.0], [1.63175586E12, 20.0], [1.63175532E12, 26.0], [1.63175598E12, 7.0], [1.63175592E12, 13.0], [1.63175562E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63175604E12, 64.0], [1.63175574E12, 67.0], [1.63175568E12, 66.0], [1.63175538E12, 66.0], [1.6317558E12, 66.0], [1.6317555E12, 66.0], [1.63175544E12, 64.0], [1.63175514E12, 65.0], [1.63175556E12, 65.0], [1.63175526E12, 67.0], [1.6317552E12, 67.0], [1.63175586E12, 66.0], [1.63175532E12, 66.0], [1.63175598E12, 66.0], [1.63175592E12, 65.0], [1.63175562E12, 67.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63175604E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.0, "minX": 294.0, "maxY": 356.0, "series": [{"data": [[294.0, 67.0], [336.0, 47.0], [339.0, 64.0], [345.0, 65.0], [364.0, 71.0], [361.0, 65.0], [371.0, 57.0], [374.0, 65.0], [370.0, 54.0], [384.0, 59.0], [387.0, 75.0], [394.0, 67.0], [392.0, 71.5], [390.0, 64.0], [396.0, 48.0], [407.0, 69.0], [414.0, 63.0], [426.0, 65.5], [423.0, 63.0], [416.0, 96.0], [427.0, 57.0], [432.0, 65.0], [436.0, 60.0], [434.0, 68.0], [437.0, 61.0], [445.0, 63.0], [449.0, 263.0], [453.0, 61.0], [454.0, 62.0], [460.0, 52.0], [479.0, 69.0], [466.0, 65.0], [478.0, 64.0], [511.0, 69.0], [501.0, 62.0], [500.0, 64.0], [507.0, 66.0], [505.0, 84.0], [506.0, 58.0], [540.0, 64.0], [536.0, 68.5], [534.0, 70.0], [524.0, 62.5], [533.0, 59.0], [519.0, 65.0], [528.0, 59.5], [512.0, 58.0], [514.0, 62.5], [557.0, 61.0], [558.0, 66.0], [552.0, 250.5], [599.0, 356.0], [591.0, 151.0], [583.0, 101.0], [598.0, 103.0], [576.0, 145.0], [616.0, 62.0], [614.0, 62.0], [633.0, 61.0], [639.0, 62.0], [634.0, 55.0], [628.0, 258.0], [662.0, 64.0], [664.0, 59.0], [658.0, 67.0], [661.0, 265.0], [703.0, 66.0], [697.0, 64.0], [700.0, 67.0], [676.0, 63.0], [693.0, 64.0], [711.0, 61.0], [715.0, 287.0], [712.0, 258.5], [723.0, 66.0], [728.0, 61.0], [709.0, 62.0], [734.0, 63.0], [735.0, 63.0], [707.0, 62.0], [705.0, 59.0], [740.0, 65.0], [754.0, 75.0], [744.0, 67.0], [751.0, 61.0], [748.0, 62.0], [760.0, 57.0], [749.0, 59.0], [747.0, 62.0], [745.0, 280.0], [742.0, 293.5], [775.0, 59.0], [773.0, 64.0], [796.0, 62.0], [789.0, 67.0], [771.0, 63.0], [793.0, 63.0], [776.0, 66.0], [816.0, 58.0], [804.0, 61.0], [822.0, 66.0], [805.0, 236.0], [825.0, 58.0], [821.0, 284.0], [820.0, 240.0], [809.0, 62.0], [817.0, 61.0], [802.0, 48.0], [850.0, 58.0], [848.0, 65.0], [846.0, 64.0], [852.0, 62.0], [842.0, 66.0], [854.0, 66.0], [857.0, 62.0], [832.0, 63.0], [868.0, 59.0], [877.0, 318.0], [872.0, 66.0], [875.0, 62.0], [879.0, 68.0], [867.0, 67.0], [887.0, 64.0], [883.0, 67.0], [886.0, 62.0], [882.0, 61.0], [881.0, 66.0], [890.0, 63.0], [916.0, 60.0], [926.0, 108.0], [901.0, 91.5], [896.0, 61.0], [908.0, 61.0], [900.0, 66.0], [905.0, 59.0], [914.0, 76.0], [954.0, 63.0], [944.0, 63.0], [951.0, 64.0], [940.0, 69.0], [943.0, 65.0], [938.0, 92.0], [937.0, 64.0], [939.0, 61.0], [949.0, 63.0], [946.0, 64.0], [928.0, 65.0], [950.0, 65.0], [955.0, 64.0], [958.0, 66.0], [953.0, 60.0], [935.0, 65.0], [988.0, 64.0], [976.0, 62.0], [981.0, 63.0], [983.0, 60.0], [982.0, 65.0], [978.0, 61.0], [980.0, 63.0], [979.0, 65.0], [977.0, 63.0], [973.0, 62.0], [974.0, 60.0], [972.0, 61.0], [968.0, 63.0], [969.0, 62.0], [971.0, 60.0], [970.0, 64.0], [990.0, 65.0], [991.0, 63.0], [986.0, 62.0], [985.0, 65.0], [987.0, 63.0], [975.0, 63.0], [989.0, 63.0], [963.0, 63.0], [966.0, 64.0], [964.0, 63.0], [965.0, 65.0], [967.0, 64.0], [960.0, 63.0], [962.0, 61.0], [961.0, 62.0], [984.0, 62.0], [1016.0, 63.0], [992.0, 64.0], [995.0, 64.0], [996.0, 63.0], [998.0, 62.0], [999.0, 64.0], [997.0, 66.0], [993.0, 64.0], [994.0, 64.0], [1001.0, 62.0], [1000.0, 65.0], [1006.0, 63.0], [1011.0, 61.0], [1014.0, 66.0], [1015.0, 60.0], [1012.0, 63.0], [1013.0, 63.0], [1007.0, 63.0], [1004.0, 63.0], [1003.0, 63.0], [1005.0, 65.0], [1010.0, 63.0], [1009.0, 62.0], [1021.0, 93.0], [1023.0, 62.0], [1022.0, 63.0], [1008.0, 63.0], [1020.0, 61.0], [1019.0, 63.0], [1018.0, 63.0], [1017.0, 68.0], [1002.0, 64.0], [1033.0, 61.0], [1065.0, 66.0], [1058.0, 211.0], [1063.0, 63.0], [1064.0, 64.0], [1066.0, 91.0], [1069.0, 211.0], [1070.0, 188.5], [1067.0, 268.0], [1041.0, 61.0], [1040.0, 63.0], [1043.0, 62.0], [1042.0, 61.0], [1049.0, 72.0], [1052.0, 66.0], [1051.0, 263.0], [1055.0, 64.0], [1045.0, 63.0], [1046.0, 61.0], [1048.0, 227.5], [1047.0, 61.0], [1025.0, 73.0], [1024.0, 64.0], [1044.0, 253.0], [1082.0, 270.0], [1083.0, 257.0], [1074.0, 70.0], [1085.0, 248.0], [1086.0, 242.0], [1084.0, 66.0], [1027.0, 61.0], [1028.0, 63.0], [1029.0, 64.0], [1031.0, 66.0], [1030.0, 64.0], [1026.0, 63.0], [1087.0, 227.0], [1039.0, 280.0], [1037.0, 66.0], [1038.0, 60.0], [1035.0, 64.0], [1034.0, 64.0], [1073.0, 61.0], [1140.0, 231.0], [1138.0, 267.0], [1100.0, 62.0], [1103.0, 251.0], [1134.0, 263.0], [1117.0, 234.0], [1115.0, 216.0], [1112.0, 197.0], [1089.0, 214.0], [1090.0, 108.0], [1091.0, 220.0], [1095.0, 211.0], [1094.0, 235.0], [1099.0, 285.0], [1135.0, 185.0], [1121.0, 253.0], [1122.0, 213.0], [1127.0, 212.0], [1129.0, 226.0], [1147.0, 246.0], [1144.0, 253.5], [1141.0, 217.0], [1139.0, 262.0], [1162.0, 290.0], [1157.0, 268.0], [1156.0, 206.0], [1152.0, 223.0], [1196.0, 225.0], [1198.0, 267.5], [1211.0, 194.0], [1208.0, 199.0], [1180.0, 73.0], [1167.0, 67.0], [1172.0, 66.0], [1270.0, 142.0], [1222.0, 67.0], [1224.0, 218.5], [1278.0, 177.5], [1273.0, 182.0], [1271.0, 170.0], [1229.0, 168.0], [1251.0, 249.0], [1257.0, 74.0], [1262.0, 70.0], [1266.0, 174.5], [1230.0, 221.0], [1235.0, 159.0], [1241.0, 71.0], [1246.0, 161.0], [1243.0, 67.0], [1242.0, 69.0], [1295.0, 202.0], [1302.0, 75.5], [1299.0, 70.0], [1317.0, 121.0], [1336.0, 66.0], [1309.0, 181.0], [1324.0, 187.0], [1327.0, 77.0], [1294.0, 167.0], [1304.0, 153.0], [1291.0, 175.0], [1323.0, 207.0], [1406.0, 135.0], [1407.0, 162.0], [1379.0, 73.0], [1349.0, 165.0], [1387.0, 167.0], [1347.0, 254.0], [1363.0, 81.0], [1456.0, 170.0], [1468.0, 235.0], [1437.0, 154.0], [1454.0, 166.0], [1461.0, 185.0], [1462.0, 188.0], [1470.0, 167.0], [1436.0, 127.0], [1433.0, 182.0], [1452.0, 154.0], [1414.0, 79.0], [1418.0, 112.5], [1478.0, 156.0], [1488.0, 131.0], [1495.0, 145.0], [1500.0, 169.0], [1516.0, 93.0], [1519.0, 93.0], [1526.0, 114.0], [1484.0, 120.5], [1528.0, 163.0], [1531.0, 85.0], [1588.0, 129.0], [1570.0, 219.0], [1563.0, 166.0], [1581.0, 166.0], [1579.0, 165.0], [1554.0, 148.0], [1562.0, 146.5], [1536.0, 113.5], [1549.0, 196.0], [1564.0, 118.0], [1571.0, 132.0], [1573.0, 132.0], [1590.0, 130.0], [1651.0, 116.0], [1600.0, 200.0], [1643.0, 177.0], [1627.0, 129.5], [1611.0, 172.0], [1610.0, 119.0], [1603.0, 206.0], [1623.0, 142.0], [1626.0, 218.0], [1650.0, 116.5], [1647.0, 118.0], [1652.0, 158.0], [1657.0, 153.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1657.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 294.0, "maxY": 356.0, "series": [{"data": [[294.0, 67.0], [336.0, 47.0], [339.0, 64.0], [345.0, 64.0], [364.0, 71.0], [361.0, 65.0], [371.0, 57.0], [374.0, 64.0], [370.0, 54.0], [384.0, 59.0], [387.0, 75.0], [394.0, 67.0], [392.0, 71.5], [390.0, 64.0], [396.0, 48.0], [407.0, 69.0], [414.0, 62.0], [426.0, 65.5], [423.0, 62.0], [416.0, 96.0], [427.0, 57.0], [432.0, 65.0], [436.0, 60.0], [434.0, 68.0], [437.0, 61.0], [445.0, 63.0], [449.0, 262.0], [453.0, 61.0], [454.0, 62.0], [460.0, 52.0], [479.0, 68.0], [466.0, 65.0], [478.0, 64.0], [511.0, 69.0], [501.0, 62.0], [500.0, 64.0], [507.0, 65.0], [505.0, 83.0], [506.0, 58.0], [540.0, 64.0], [536.0, 68.0], [534.0, 69.0], [524.0, 62.0], [533.0, 59.0], [519.0, 65.0], [528.0, 59.0], [512.0, 58.0], [514.0, 62.0], [557.0, 61.0], [558.0, 66.0], [552.0, 250.5], [599.0, 356.0], [591.0, 151.0], [583.0, 101.0], [598.0, 103.0], [576.0, 145.0], [616.0, 62.0], [614.0, 62.0], [633.0, 61.0], [639.0, 62.0], [634.0, 55.0], [628.0, 258.0], [662.0, 64.0], [664.0, 59.0], [658.0, 66.0], [661.0, 264.0], [703.0, 66.0], [697.0, 63.0], [700.0, 67.0], [676.0, 63.0], [693.0, 64.0], [711.0, 61.0], [715.0, 287.0], [712.0, 258.5], [723.0, 66.0], [728.0, 61.0], [709.0, 62.0], [734.0, 62.0], [735.0, 63.0], [707.0, 61.0], [705.0, 59.0], [740.0, 65.0], [754.0, 75.0], [744.0, 66.5], [751.0, 61.0], [748.0, 62.0], [760.0, 56.0], [749.0, 59.0], [747.0, 62.0], [745.0, 280.0], [742.0, 293.0], [775.0, 58.0], [773.0, 64.0], [796.0, 62.0], [789.0, 67.0], [771.0, 63.0], [793.0, 63.0], [776.0, 66.0], [816.0, 58.0], [804.0, 61.0], [822.0, 66.0], [805.0, 236.0], [825.0, 57.0], [821.0, 284.0], [820.0, 239.0], [809.0, 62.0], [817.0, 61.0], [802.0, 48.0], [850.0, 57.0], [848.0, 64.0], [846.0, 64.0], [852.0, 62.0], [842.0, 66.0], [854.0, 66.0], [857.0, 62.0], [832.0, 62.0], [868.0, 58.5], [877.0, 318.0], [872.0, 65.0], [875.0, 62.0], [879.0, 68.0], [867.0, 67.0], [887.0, 64.0], [883.0, 67.0], [886.0, 62.0], [882.0, 61.0], [881.0, 66.0], [890.0, 63.0], [916.0, 59.0], [926.0, 107.5], [901.0, 91.5], [896.0, 61.0], [908.0, 61.0], [900.0, 65.0], [905.0, 59.0], [914.0, 76.0], [954.0, 63.0], [944.0, 63.0], [951.0, 64.0], [940.0, 69.0], [943.0, 65.0], [938.0, 92.0], [937.0, 64.0], [939.0, 61.0], [949.0, 63.0], [946.0, 64.0], [928.0, 64.0], [950.0, 65.0], [955.0, 64.0], [958.0, 66.0], [953.0, 60.0], [935.0, 65.0], [988.0, 64.0], [976.0, 62.0], [981.0, 63.0], [983.0, 60.0], [982.0, 65.0], [978.0, 61.0], [980.0, 63.0], [979.0, 65.0], [977.0, 63.0], [973.0, 62.0], [974.0, 60.0], [972.0, 61.0], [968.0, 63.0], [969.0, 62.0], [971.0, 60.0], [970.0, 64.0], [990.0, 65.0], [991.0, 63.0], [986.0, 62.0], [985.0, 65.0], [987.0, 63.0], [975.0, 62.0], [989.0, 63.0], [963.0, 63.0], [966.0, 64.0], [964.0, 63.0], [965.0, 65.0], [967.0, 64.0], [960.0, 62.0], [962.0, 61.0], [961.0, 61.0], [984.0, 62.0], [1016.0, 63.0], [992.0, 64.0], [995.0, 64.0], [996.0, 63.0], [998.0, 62.0], [999.0, 63.0], [997.0, 66.0], [993.0, 64.0], [994.0, 64.0], [1001.0, 62.0], [1000.0, 65.0], [1006.0, 62.0], [1011.0, 61.0], [1014.0, 66.0], [1015.0, 60.0], [1012.0, 63.0], [1013.0, 63.0], [1007.0, 63.0], [1004.0, 63.0], [1003.0, 62.0], [1005.0, 64.0], [1010.0, 63.0], [1009.0, 62.0], [1021.0, 92.0], [1023.0, 62.0], [1022.0, 63.0], [1008.0, 63.0], [1020.0, 61.0], [1019.0, 63.0], [1018.0, 63.0], [1017.0, 68.0], [1002.0, 64.0], [1033.0, 61.0], [1065.0, 66.0], [1058.0, 211.0], [1063.0, 63.0], [1064.0, 64.0], [1066.0, 91.0], [1069.0, 211.0], [1070.0, 188.5], [1067.0, 268.0], [1041.0, 61.0], [1040.0, 63.0], [1043.0, 62.0], [1042.0, 61.0], [1049.0, 72.0], [1052.0, 66.0], [1051.0, 263.0], [1055.0, 64.0], [1045.0, 63.0], [1046.0, 61.0], [1048.0, 227.0], [1047.0, 61.0], [1025.0, 73.0], [1024.0, 63.0], [1044.0, 253.0], [1082.0, 269.5], [1083.0, 257.0], [1074.0, 70.0], [1085.0, 248.0], [1086.0, 242.0], [1084.0, 66.0], [1027.0, 61.0], [1028.0, 63.0], [1029.0, 63.0], [1031.0, 66.0], [1030.0, 64.0], [1026.0, 63.0], [1087.0, 226.5], [1039.0, 280.0], [1037.0, 65.0], [1038.0, 60.0], [1035.0, 64.0], [1034.0, 63.0], [1073.0, 60.0], [1140.0, 230.0], [1138.0, 267.0], [1100.0, 62.0], [1103.0, 251.0], [1134.0, 263.0], [1117.0, 233.0], [1115.0, 216.0], [1112.0, 197.0], [1089.0, 214.0], [1090.0, 108.0], [1091.0, 220.0], [1095.0, 211.0], [1094.0, 235.0], [1099.0, 285.0], [1135.0, 185.0], [1121.0, 253.0], [1122.0, 213.0], [1127.0, 211.0], [1129.0, 225.0], [1147.0, 246.0], [1144.0, 253.0], [1141.0, 217.0], [1139.0, 262.0], [1162.0, 290.0], [1157.0, 268.0], [1156.0, 206.0], [1152.0, 223.0], [1196.0, 224.0], [1198.0, 267.0], [1211.0, 193.0], [1208.0, 199.0], [1180.0, 73.0], [1167.0, 67.0], [1172.0, 66.0], [1270.0, 142.0], [1222.0, 67.0], [1224.0, 218.0], [1278.0, 177.0], [1273.0, 182.0], [1271.0, 169.0], [1229.0, 168.0], [1251.0, 249.0], [1257.0, 74.0], [1262.0, 70.0], [1266.0, 174.0], [1230.0, 221.0], [1235.0, 159.0], [1241.0, 71.0], [1246.0, 160.5], [1243.0, 67.0], [1242.0, 69.0], [1295.0, 202.0], [1302.0, 75.5], [1299.0, 70.0], [1317.0, 121.0], [1336.0, 66.0], [1309.0, 181.0], [1324.0, 187.0], [1327.0, 77.0], [1294.0, 166.0], [1304.0, 153.0], [1291.0, 174.0], [1323.0, 207.0], [1406.0, 135.0], [1407.0, 162.0], [1379.0, 73.0], [1349.0, 164.0], [1387.0, 167.0], [1347.0, 254.0], [1363.0, 81.0], [1456.0, 170.0], [1468.0, 235.0], [1437.0, 154.0], [1454.0, 166.0], [1461.0, 185.0], [1462.0, 188.0], [1470.0, 167.0], [1436.0, 127.0], [1433.0, 182.0], [1452.0, 154.0], [1414.0, 79.0], [1418.0, 112.5], [1478.0, 156.0], [1488.0, 130.5], [1495.0, 144.0], [1500.0, 169.0], [1516.0, 92.5], [1519.0, 93.0], [1526.0, 114.0], [1484.0, 120.5], [1528.0, 163.0], [1531.0, 85.0], [1588.0, 129.0], [1570.0, 219.0], [1563.0, 166.0], [1581.0, 164.0], [1579.0, 165.0], [1554.0, 148.0], [1562.0, 146.5], [1536.0, 113.0], [1549.0, 195.0], [1564.0, 117.5], [1571.0, 132.0], [1573.0, 132.0], [1590.0, 130.0], [1651.0, 116.0], [1600.0, 199.5], [1643.0, 177.0], [1627.0, 129.0], [1611.0, 172.0], [1610.0, 119.0], [1603.0, 206.0], [1623.0, 142.0], [1626.0, 218.0], [1650.0, 116.0], [1647.0, 118.0], [1652.0, 158.0], [1657.0, 153.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1657.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 437.35, "minX": 1.63175514E12, "maxY": 999.3666666666667, "series": [{"data": [[1.63175604E12, 437.35], [1.63175574E12, 991.7], [1.63175568E12, 995.3666666666667], [1.63175538E12, 999.3666666666667], [1.6317558E12, 998.7333333333333], [1.6317555E12, 997.3333333333334], [1.63175544E12, 997.2], [1.63175514E12, 563.2166666666667], [1.63175556E12, 995.7166666666667], [1.63175526E12, 993.0166666666667], [1.6317552E12, 992.8], [1.63175586E12, 995.5166666666667], [1.63175532E12, 992.5333333333333], [1.63175598E12, 988.5166666666667], [1.63175592E12, 995.65], [1.63175562E12, 996.1166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63175604E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 438.6666666666667, "minX": 1.63175514E12, "maxY": 998.25, "series": [{"data": [[1.63175604E12, 438.6666666666667], [1.63175574E12, 992.5], [1.63175568E12, 995.8666666666667], [1.63175538E12, 998.25], [1.6317558E12, 997.95], [1.6317555E12, 997.3], [1.63175544E12, 996.9333333333333], [1.63175514E12, 561.8], [1.63175556E12, 996.3333333333334], [1.63175526E12, 993.5833333333334], [1.6317552E12, 992.5666666666667], [1.63175586E12, 995.5], [1.63175532E12, 993.6166666666667], [1.63175598E12, 988.0833333333334], [1.63175592E12, 995.5666666666667], [1.63175562E12, 995.6166666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63175604E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 438.6666666666667, "minX": 1.63175514E12, "maxY": 998.25, "series": [{"data": [[1.63175604E12, 438.6666666666667], [1.63175574E12, 992.5], [1.63175568E12, 995.8666666666667], [1.63175538E12, 998.25], [1.6317558E12, 997.95], [1.6317555E12, 997.3], [1.63175544E12, 996.9333333333333], [1.63175514E12, 561.8], [1.63175556E12, 996.3333333333334], [1.63175526E12, 993.5833333333334], [1.6317552E12, 992.5666666666667], [1.63175586E12, 995.5], [1.63175532E12, 993.6166666666667], [1.63175598E12, 988.0833333333334], [1.63175592E12, 995.5666666666667], [1.63175562E12, 995.6166666666667]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63175604E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 438.6666666666667, "minX": 1.63175514E12, "maxY": 998.25, "series": [{"data": [[1.63175604E12, 438.6666666666667], [1.63175574E12, 992.5], [1.63175568E12, 995.8666666666667], [1.63175538E12, 998.25], [1.6317558E12, 997.95], [1.6317555E12, 997.3], [1.63175544E12, 996.9333333333333], [1.63175514E12, 561.8], [1.63175556E12, 996.3333333333334], [1.63175526E12, 993.5833333333334], [1.6317552E12, 992.5666666666667], [1.63175586E12, 995.5], [1.63175532E12, 993.6166666666667], [1.63175598E12, 988.0833333333334], [1.63175592E12, 995.5666666666667], [1.63175562E12, 995.6166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63175604E12, "title": "Total Transactions Per Second"}},
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

