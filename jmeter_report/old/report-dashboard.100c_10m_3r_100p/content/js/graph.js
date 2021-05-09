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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 1799.0, "series": [{"data": [[0.0, 6.0], [0.1, 15.0], [0.2, 18.0], [0.3, 20.0], [0.4, 21.0], [0.5, 22.0], [0.6, 23.0], [0.7, 24.0], [0.8, 25.0], [0.9, 25.0], [1.0, 26.0], [1.1, 26.0], [1.2, 27.0], [1.3, 27.0], [1.4, 28.0], [1.5, 28.0], [1.6, 29.0], [1.7, 29.0], [1.8, 30.0], [1.9, 30.0], [2.0, 30.0], [2.1, 31.0], [2.2, 31.0], [2.3, 31.0], [2.4, 32.0], [2.5, 32.0], [2.6, 32.0], [2.7, 32.0], [2.8, 33.0], [2.9, 33.0], [3.0, 33.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 36.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 37.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 46.0], [12.1, 46.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 47.0], [12.7, 47.0], [12.8, 47.0], [12.9, 47.0], [13.0, 47.0], [13.1, 47.0], [13.2, 48.0], [13.3, 48.0], [13.4, 48.0], [13.5, 48.0], [13.6, 48.0], [13.7, 48.0], [13.8, 48.0], [13.9, 48.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 49.0], [14.4, 49.0], [14.5, 49.0], [14.6, 49.0], [14.7, 49.0], [14.8, 49.0], [14.9, 49.0], [15.0, 49.0], [15.1, 49.0], [15.2, 49.0], [15.3, 49.0], [15.4, 49.0], [15.5, 50.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 51.0], [16.8, 51.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 51.0], [17.3, 51.0], [17.4, 51.0], [17.5, 51.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 52.0], [18.1, 52.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 52.0], [19.3, 53.0], [19.4, 53.0], [19.5, 53.0], [19.6, 53.0], [19.7, 53.0], [19.8, 53.0], [19.9, 53.0], [20.0, 53.0], [20.1, 53.0], [20.2, 53.0], [20.3, 53.0], [20.4, 53.0], [20.5, 53.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 54.0], [21.5, 54.0], [21.6, 54.0], [21.7, 54.0], [21.8, 54.0], [21.9, 54.0], [22.0, 55.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 55.0], [22.7, 55.0], [22.8, 55.0], [22.9, 55.0], [23.0, 55.0], [23.1, 55.0], [23.2, 55.0], [23.3, 55.0], [23.4, 56.0], [23.5, 56.0], [23.6, 56.0], [23.7, 56.0], [23.8, 56.0], [23.9, 56.0], [24.0, 56.0], [24.1, 56.0], [24.2, 56.0], [24.3, 56.0], [24.4, 56.0], [24.5, 56.0], [24.6, 56.0], [24.7, 56.0], [24.8, 56.0], [24.9, 57.0], [25.0, 57.0], [25.1, 57.0], [25.2, 57.0], [25.3, 57.0], [25.4, 57.0], [25.5, 57.0], [25.6, 57.0], [25.7, 57.0], [25.8, 57.0], [25.9, 57.0], [26.0, 57.0], [26.1, 57.0], [26.2, 57.0], [26.3, 57.0], [26.4, 58.0], [26.5, 58.0], [26.6, 58.0], [26.7, 58.0], [26.8, 58.0], [26.9, 58.0], [27.0, 58.0], [27.1, 58.0], [27.2, 58.0], [27.3, 58.0], [27.4, 58.0], [27.5, 58.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 59.0], [28.0, 59.0], [28.1, 59.0], [28.2, 59.0], [28.3, 59.0], [28.4, 59.0], [28.5, 59.0], [28.6, 59.0], [28.7, 59.0], [28.8, 59.0], [28.9, 59.0], [29.0, 59.0], [29.1, 59.0], [29.2, 59.0], [29.3, 59.0], [29.4, 59.0], [29.5, 60.0], [29.6, 60.0], [29.7, 60.0], [29.8, 60.0], [29.9, 60.0], [30.0, 60.0], [30.1, 60.0], [30.2, 60.0], [30.3, 60.0], [30.4, 60.0], [30.5, 60.0], [30.6, 60.0], [30.7, 60.0], [30.8, 60.0], [30.9, 60.0], [31.0, 61.0], [31.1, 61.0], [31.2, 61.0], [31.3, 61.0], [31.4, 61.0], [31.5, 61.0], [31.6, 61.0], [31.7, 61.0], [31.8, 61.0], [31.9, 61.0], [32.0, 61.0], [32.1, 61.0], [32.2, 61.0], [32.3, 61.0], [32.4, 61.0], [32.5, 61.0], [32.6, 62.0], [32.7, 62.0], [32.8, 62.0], [32.9, 62.0], [33.0, 62.0], [33.1, 62.0], [33.2, 62.0], [33.3, 62.0], [33.4, 62.0], [33.5, 62.0], [33.6, 62.0], [33.7, 62.0], [33.8, 62.0], [33.9, 62.0], [34.0, 62.0], [34.1, 62.0], [34.2, 63.0], [34.3, 63.0], [34.4, 63.0], [34.5, 63.0], [34.6, 63.0], [34.7, 63.0], [34.8, 63.0], [34.9, 63.0], [35.0, 63.0], [35.1, 63.0], [35.2, 63.0], [35.3, 63.0], [35.4, 63.0], [35.5, 63.0], [35.6, 63.0], [35.7, 63.0], [35.8, 64.0], [35.9, 64.0], [36.0, 64.0], [36.1, 64.0], [36.2, 64.0], [36.3, 64.0], [36.4, 64.0], [36.5, 64.0], [36.6, 64.0], [36.7, 64.0], [36.8, 64.0], [36.9, 64.0], [37.0, 64.0], [37.1, 64.0], [37.2, 64.0], [37.3, 64.0], [37.4, 65.0], [37.5, 65.0], [37.6, 65.0], [37.7, 65.0], [37.8, 65.0], [37.9, 65.0], [38.0, 65.0], [38.1, 65.0], [38.2, 65.0], [38.3, 65.0], [38.4, 65.0], [38.5, 65.0], [38.6, 65.0], [38.7, 65.0], [38.8, 65.0], [38.9, 65.0], [39.0, 66.0], [39.1, 66.0], [39.2, 66.0], [39.3, 66.0], [39.4, 66.0], [39.5, 66.0], [39.6, 66.0], [39.7, 66.0], [39.8, 66.0], [39.9, 66.0], [40.0, 66.0], [40.1, 66.0], [40.2, 66.0], [40.3, 66.0], [40.4, 66.0], [40.5, 66.0], [40.6, 67.0], [40.7, 67.0], [40.8, 67.0], [40.9, 67.0], [41.0, 67.0], [41.1, 67.0], [41.2, 67.0], [41.3, 67.0], [41.4, 67.0], [41.5, 67.0], [41.6, 67.0], [41.7, 67.0], [41.8, 67.0], [41.9, 67.0], [42.0, 67.0], [42.1, 67.0], [42.2, 68.0], [42.3, 68.0], [42.4, 68.0], [42.5, 68.0], [42.6, 68.0], [42.7, 68.0], [42.8, 68.0], [42.9, 68.0], [43.0, 68.0], [43.1, 68.0], [43.2, 68.0], [43.3, 68.0], [43.4, 68.0], [43.5, 68.0], [43.6, 68.0], [43.7, 68.0], [43.8, 69.0], [43.9, 69.0], [44.0, 69.0], [44.1, 69.0], [44.2, 69.0], [44.3, 69.0], [44.4, 69.0], [44.5, 69.0], [44.6, 69.0], [44.7, 69.0], [44.8, 69.0], [44.9, 69.0], [45.0, 69.0], [45.1, 69.0], [45.2, 69.0], [45.3, 69.0], [45.4, 70.0], [45.5, 70.0], [45.6, 70.0], [45.7, 70.0], [45.8, 70.0], [45.9, 70.0], [46.0, 70.0], [46.1, 70.0], [46.2, 70.0], [46.3, 70.0], [46.4, 70.0], [46.5, 70.0], [46.6, 70.0], [46.7, 70.0], [46.8, 70.0], [46.9, 71.0], [47.0, 71.0], [47.1, 71.0], [47.2, 71.0], [47.3, 71.0], [47.4, 71.0], [47.5, 71.0], [47.6, 71.0], [47.7, 71.0], [47.8, 71.0], [47.9, 71.0], [48.0, 71.0], [48.1, 71.0], [48.2, 71.0], [48.3, 71.0], [48.4, 71.0], [48.5, 72.0], [48.6, 72.0], [48.7, 72.0], [48.8, 72.0], [48.9, 72.0], [49.0, 72.0], [49.1, 72.0], [49.2, 72.0], [49.3, 72.0], [49.4, 72.0], [49.5, 72.0], [49.6, 72.0], [49.7, 72.0], [49.8, 72.0], [49.9, 72.0], [50.0, 73.0], [50.1, 73.0], [50.2, 73.0], [50.3, 73.0], [50.4, 73.0], [50.5, 73.0], [50.6, 73.0], [50.7, 73.0], [50.8, 73.0], [50.9, 73.0], [51.0, 73.0], [51.1, 73.0], [51.2, 73.0], [51.3, 73.0], [51.4, 73.0], [51.5, 74.0], [51.6, 74.0], [51.7, 74.0], [51.8, 74.0], [51.9, 74.0], [52.0, 74.0], [52.1, 74.0], [52.2, 74.0], [52.3, 74.0], [52.4, 74.0], [52.5, 74.0], [52.6, 74.0], [52.7, 74.0], [52.8, 74.0], [52.9, 75.0], [53.0, 75.0], [53.1, 75.0], [53.2, 75.0], [53.3, 75.0], [53.4, 75.0], [53.5, 75.0], [53.6, 75.0], [53.7, 75.0], [53.8, 75.0], [53.9, 75.0], [54.0, 75.0], [54.1, 75.0], [54.2, 75.0], [54.3, 76.0], [54.4, 76.0], [54.5, 76.0], [54.6, 76.0], [54.7, 76.0], [54.8, 76.0], [54.9, 76.0], [55.0, 76.0], [55.1, 76.0], [55.2, 76.0], [55.3, 76.0], [55.4, 76.0], [55.5, 76.0], [55.6, 76.0], [55.7, 77.0], [55.8, 77.0], [55.9, 77.0], [56.0, 77.0], [56.1, 77.0], [56.2, 77.0], [56.3, 77.0], [56.4, 77.0], [56.5, 77.0], [56.6, 77.0], [56.7, 77.0], [56.8, 77.0], [56.9, 77.0], [57.0, 77.0], [57.1, 78.0], [57.2, 78.0], [57.3, 78.0], [57.4, 78.0], [57.5, 78.0], [57.6, 78.0], [57.7, 78.0], [57.8, 78.0], [57.9, 78.0], [58.0, 78.0], [58.1, 78.0], [58.2, 78.0], [58.3, 78.0], [58.4, 79.0], [58.5, 79.0], [58.6, 79.0], [58.7, 79.0], [58.8, 79.0], [58.9, 79.0], [59.0, 79.0], [59.1, 79.0], [59.2, 79.0], [59.3, 79.0], [59.4, 79.0], [59.5, 79.0], [59.6, 79.0], [59.7, 80.0], [59.8, 80.0], [59.9, 80.0], [60.0, 80.0], [60.1, 80.0], [60.2, 80.0], [60.3, 80.0], [60.4, 80.0], [60.5, 80.0], [60.6, 80.0], [60.7, 80.0], [60.8, 80.0], [60.9, 81.0], [61.0, 81.0], [61.1, 81.0], [61.2, 81.0], [61.3, 81.0], [61.4, 81.0], [61.5, 81.0], [61.6, 81.0], [61.7, 81.0], [61.8, 81.0], [61.9, 81.0], [62.0, 81.0], [62.1, 81.0], [62.2, 82.0], [62.3, 82.0], [62.4, 82.0], [62.5, 82.0], [62.6, 82.0], [62.7, 82.0], [62.8, 82.0], [62.9, 82.0], [63.0, 82.0], [63.1, 82.0], [63.2, 82.0], [63.3, 83.0], [63.4, 83.0], [63.5, 83.0], [63.6, 83.0], [63.7, 83.0], [63.8, 83.0], [63.9, 83.0], [64.0, 83.0], [64.1, 83.0], [64.2, 83.0], [64.3, 83.0], [64.4, 84.0], [64.5, 84.0], [64.6, 84.0], [64.7, 84.0], [64.8, 84.0], [64.9, 84.0], [65.0, 84.0], [65.1, 84.0], [65.2, 84.0], [65.3, 84.0], [65.4, 84.0], [65.5, 85.0], [65.6, 85.0], [65.7, 85.0], [65.8, 85.0], [65.9, 85.0], [66.0, 85.0], [66.1, 85.0], [66.2, 85.0], [66.3, 85.0], [66.4, 85.0], [66.5, 85.0], [66.6, 86.0], [66.7, 86.0], [66.8, 86.0], [66.9, 86.0], [67.0, 86.0], [67.1, 86.0], [67.2, 86.0], [67.3, 86.0], [67.4, 86.0], [67.5, 86.0], [67.6, 87.0], [67.7, 87.0], [67.8, 87.0], [67.9, 87.0], [68.0, 87.0], [68.1, 87.0], [68.2, 87.0], [68.3, 87.0], [68.4, 87.0], [68.5, 87.0], [68.6, 88.0], [68.7, 88.0], [68.8, 88.0], [68.9, 88.0], [69.0, 88.0], [69.1, 88.0], [69.2, 88.0], [69.3, 88.0], [69.4, 88.0], [69.5, 89.0], [69.6, 89.0], [69.7, 89.0], [69.8, 89.0], [69.9, 89.0], [70.0, 89.0], [70.1, 89.0], [70.2, 89.0], [70.3, 89.0], [70.4, 90.0], [70.5, 90.0], [70.6, 90.0], [70.7, 90.0], [70.8, 90.0], [70.9, 90.0], [71.0, 90.0], [71.1, 90.0], [71.2, 90.0], [71.3, 91.0], [71.4, 91.0], [71.5, 91.0], [71.6, 91.0], [71.7, 91.0], [71.8, 91.0], [71.9, 91.0], [72.0, 91.0], [72.1, 92.0], [72.2, 92.0], [72.3, 92.0], [72.4, 92.0], [72.5, 92.0], [72.6, 92.0], [72.7, 92.0], [72.8, 92.0], [72.9, 93.0], [73.0, 93.0], [73.1, 93.0], [73.2, 93.0], [73.3, 93.0], [73.4, 93.0], [73.5, 93.0], [73.6, 94.0], [73.7, 94.0], [73.8, 94.0], [73.9, 94.0], [74.0, 94.0], [74.1, 94.0], [74.2, 94.0], [74.3, 94.0], [74.4, 95.0], [74.5, 95.0], [74.6, 95.0], [74.7, 95.0], [74.8, 95.0], [74.9, 95.0], [75.0, 95.0], [75.1, 96.0], [75.2, 96.0], [75.3, 96.0], [75.4, 96.0], [75.5, 96.0], [75.6, 96.0], [75.7, 97.0], [75.8, 97.0], [75.9, 97.0], [76.0, 97.0], [76.1, 97.0], [76.2, 97.0], [76.3, 98.0], [76.4, 98.0], [76.5, 98.0], [76.6, 98.0], [76.7, 98.0], [76.8, 98.0], [76.9, 99.0], [77.0, 99.0], [77.1, 99.0], [77.2, 99.0], [77.3, 99.0], [77.4, 99.0], [77.5, 100.0], [77.6, 100.0], [77.7, 100.0], [77.8, 100.0], [77.9, 100.0], [78.0, 101.0], [78.1, 101.0], [78.2, 101.0], [78.3, 101.0], [78.4, 102.0], [78.5, 102.0], [78.6, 102.0], [78.7, 102.0], [78.8, 102.0], [78.9, 103.0], [79.0, 103.0], [79.1, 103.0], [79.2, 103.0], [79.3, 103.0], [79.4, 104.0], [79.5, 104.0], [79.6, 104.0], [79.7, 104.0], [79.8, 105.0], [79.9, 105.0], [80.0, 105.0], [80.1, 105.0], [80.2, 106.0], [80.3, 106.0], [80.4, 106.0], [80.5, 107.0], [80.6, 107.0], [80.7, 107.0], [80.8, 107.0], [80.9, 108.0], [81.0, 108.0], [81.1, 108.0], [81.2, 109.0], [81.3, 109.0], [81.4, 109.0], [81.5, 110.0], [81.6, 110.0], [81.7, 110.0], [81.8, 111.0], [81.9, 111.0], [82.0, 111.0], [82.1, 112.0], [82.2, 112.0], [82.3, 112.0], [82.4, 113.0], [82.5, 113.0], [82.6, 114.0], [82.7, 114.0], [82.8, 114.0], [82.9, 115.0], [83.0, 115.0], [83.1, 116.0], [83.2, 116.0], [83.3, 117.0], [83.4, 118.0], [83.5, 118.0], [83.6, 119.0], [83.7, 119.0], [83.8, 120.0], [83.9, 121.0], [84.0, 121.0], [84.1, 122.0], [84.2, 123.0], [84.3, 124.0], [84.4, 124.0], [84.5, 125.0], [84.6, 126.0], [84.7, 128.0], [84.8, 129.0], [84.9, 130.0], [85.0, 131.0], [85.1, 133.0], [85.2, 134.0], [85.3, 136.0], [85.4, 139.0], [85.5, 141.0], [85.6, 144.0], [85.7, 149.0], [85.8, 154.0], [85.9, 166.0], [86.0, 284.0], [86.1, 306.0], [86.2, 316.0], [86.3, 323.0], [86.4, 328.0], [86.5, 332.0], [86.6, 336.0], [86.7, 339.0], [86.8, 342.0], [86.9, 344.0], [87.0, 347.0], [87.1, 349.0], [87.2, 351.0], [87.3, 353.0], [87.4, 355.0], [87.5, 357.0], [87.6, 359.0], [87.7, 361.0], [87.8, 362.0], [87.9, 364.0], [88.0, 365.0], [88.1, 367.0], [88.2, 368.0], [88.3, 369.0], [88.4, 371.0], [88.5, 372.0], [88.6, 374.0], [88.7, 375.0], [88.8, 376.0], [88.9, 377.0], [89.0, 379.0], [89.1, 380.0], [89.2, 381.0], [89.3, 382.0], [89.4, 383.0], [89.5, 384.0], [89.6, 385.0], [89.7, 387.0], [89.8, 388.0], [89.9, 389.0], [90.0, 390.0], [90.1, 391.0], [90.2, 392.0], [90.3, 393.0], [90.4, 394.0], [90.5, 395.0], [90.6, 396.0], [90.7, 397.0], [90.8, 398.0], [90.9, 399.0], [91.0, 400.0], [91.1, 401.0], [91.2, 402.0], [91.3, 403.0], [91.4, 404.0], [91.5, 405.0], [91.6, 406.0], [91.7, 407.0], [91.8, 408.0], [91.9, 409.0], [92.0, 410.0], [92.1, 411.0], [92.2, 412.0], [92.3, 413.0], [92.4, 414.0], [92.5, 415.0], [92.6, 416.0], [92.7, 417.0], [92.8, 418.0], [92.9, 419.0], [93.0, 420.0], [93.1, 421.0], [93.2, 422.0], [93.3, 423.0], [93.4, 424.0], [93.5, 425.0], [93.6, 426.0], [93.7, 427.0], [93.8, 428.0], [93.9, 429.0], [94.0, 430.0], [94.1, 431.0], [94.2, 432.0], [94.3, 433.0], [94.4, 434.0], [94.5, 435.0], [94.6, 436.0], [94.7, 438.0], [94.8, 439.0], [94.9, 440.0], [95.0, 441.0], [95.1, 442.0], [95.2, 443.0], [95.3, 445.0], [95.4, 446.0], [95.5, 447.0], [95.6, 448.0], [95.7, 450.0], [95.8, 451.0], [95.9, 452.0], [96.0, 454.0], [96.1, 455.0], [96.2, 457.0], [96.3, 458.0], [96.4, 459.0], [96.5, 461.0], [96.6, 463.0], [96.7, 464.0], [96.8, 466.0], [96.9, 468.0], [97.0, 469.0], [97.1, 471.0], [97.2, 473.0], [97.3, 475.0], [97.4, 477.0], [97.5, 479.0], [97.6, 482.0], [97.7, 484.0], [97.8, 486.0], [97.9, 489.0], [98.0, 492.0], [98.1, 494.0], [98.2, 498.0], [98.3, 501.0], [98.4, 505.0], [98.5, 509.0], [98.6, 513.0], [98.7, 518.0], [98.8, 524.0], [98.9, 531.0], [99.0, 540.0], [99.1, 550.0], [99.2, 562.0], [99.3, 578.0], [99.4, 600.0], [99.5, 632.0], [99.6, 682.0], [99.7, 732.0], [99.8, 778.0], [99.9, 852.0], [100.0, 1799.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 382386.0, "series": [{"data": [[0.0, 382386.0], [600.0, 1178.0], [700.0, 998.0], [200.0, 455.0], [800.0, 449.0], [900.0, 97.0], [1000.0, 17.0], [1100.0, 2.0], [300.0, 24165.0], [1200.0, 14.0], [1300.0, 82.0], [1400.0, 106.0], [1500.0, 24.0], [100.0, 42299.0], [400.0, 36054.0], [1600.0, 5.0], [1700.0, 10.0], [500.0, 5694.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 37.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 485500.0, "series": [{"data": [[0.0, 485500.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8498.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 37.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 99.45448641627885, "minX": 1.6191006E12, "maxY": 100.0, "series": [{"data": [[1.6191012E12, 99.45448641627885], [1.61910072E12, 100.0], [1.6191009E12, 100.0], [1.61910108E12, 100.0], [1.6191006E12, 99.58075952981491], [1.61910078E12, 100.0], [1.61910096E12, 100.0], [1.61910114E12, 100.0], [1.61910066E12, 100.0], [1.61910084E12, 100.0], [1.61910102E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6191012E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15.5, "minX": 1.0, "maxY": 592.0, "series": [{"data": [[2.0, 342.0], [3.0, 335.0], [4.0, 340.0], [5.0, 314.0], [6.0, 386.0], [8.0, 309.0], [9.0, 301.0], [10.0, 323.0], [11.0, 592.0], [12.0, 327.0], [13.0, 387.0], [14.0, 335.0], [15.0, 344.0], [16.0, 369.0], [17.0, 314.0], [18.0, 403.0], [19.0, 338.0], [20.0, 340.0], [21.0, 87.16666666666667], [22.0, 108.83333333333333], [23.0, 87.5], [24.0, 108.6], [25.0, 58.875], [26.0, 199.5], [27.0, 71.875], [28.0, 44.25], [29.0, 97.83333333333334], [30.0, 100.4], [31.0, 89.5], [32.0, 65.33333333333334], [33.0, 312.0], [34.0, 114.2], [35.0, 85.16666666666666], [36.0, 28.57142857142857], [37.0, 27.333333333333336], [38.0, 132.25], [39.0, 25.75], [40.0, 15.5], [41.0, 53.2], [42.0, 80.375], [43.0, 61.0], [44.0, 159.6], [45.0, 80.125], [46.0, 121.5], [47.0, 110.83333333333333], [48.0, 109.625], [49.0, 103.10000000000001], [50.0, 45.5], [51.0, 87.5], [52.0, 99.75], [53.0, 44.57142857142857], [54.0, 113.8], [55.0, 65.0909090909091], [56.0, 44.0], [57.0, 148.125], [58.0, 146.71428571428572], [59.0, 68.54545454545455], [60.0, 150.16666666666669], [61.0, 121.14285714285712], [62.0, 175.0], [63.0, 149.60000000000002], [64.0, 59.857142857142854], [65.0, 107.0], [66.0, 88.0], [67.0, 104.0], [68.0, 77.11111111111111], [69.0, 50.33333333333333], [70.0, 111.0], [71.0, 120.57142857142857], [72.0, 74.88888888888889], [73.0, 98.57142857142857], [74.0, 147.0], [75.0, 283.0], [77.0, 116.46666666666668], [78.0, 76.42857142857143], [79.0, 63.0], [80.0, 98.33333333333333], [81.0, 107.75], [82.0, 74.33333333333333], [83.0, 80.25], [84.0, 99.72727272727272], [85.0, 118.33333333333333], [86.0, 200.7142857142857], [87.0, 174.33333333333334], [88.0, 112.5], [89.0, 71.2], [90.0, 117.94736842105264], [91.0, 52.5], [92.0, 62.7], [93.0, 120.83333333333333], [94.0, 95.42857142857143], [95.0, 115.33333333333334], [96.0, 66.0], [97.0, 117.14285714285714], [98.0, 180.6], [99.0, 62.25], [100.0, 121.34530248468482], [1.0, 296.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}, {"data": [[99.95413482850726, 121.32921958970437]], "isOverall": false, "label": "AuthzRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 24329.366666666665, "minX": 1.6191006E12, "maxY": 260213.46666666667, "series": [{"data": [[1.6191012E12, 46765.98333333333], [1.61910072E12, 258621.56666666668], [1.6191009E12, 242976.2], [1.61910108E12, 240676.9], [1.6191006E12, 212747.1], [1.61910078E12, 250972.11666666667], [1.61910096E12, 252922.3], [1.61910114E12, 246195.95], [1.61910066E12, 260213.46666666667], [1.61910084E12, 241609.65], [1.61910102E12, 247046.41666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6191012E12, 24329.366666666665], [1.61910072E12, 134542.26666666666], [1.6191009E12, 126405.26666666666], [1.61910108E12, 125209.73333333334], [1.6191006E12, 110668.46666666666], [1.61910078E12, 130563.3], [1.61910096E12, 131577.13333333333], [1.61910114E12, 128077.43333333333], [1.61910066E12, 135369.13333333333], [1.61910084E12, 125694.26666666666], [1.61910102E12, 128522.46666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6191012E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 112.71876933327012, "minX": 1.6191006E12, "maxY": 132.51228487931576, "series": [{"data": [[1.6191012E12, 132.51228487931576], [1.61910072E12, 117.35169889610816], [1.6191009E12, 125.05256030998663], [1.61910108E12, 126.16822999915834], [1.6191006E12, 112.71876933327012], [1.61910078E12, 120.95655593876685], [1.61910096E12, 120.0054837289358], [1.61910114E12, 123.34662910952449], [1.61910066E12, 116.6966501964757], [1.61910084E12, 125.59859213944445], [1.61910102E12, 122.84139245174772]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6191012E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 112.67860372150547, "minX": 1.6191006E12, "maxY": 132.46650070353965, "series": [{"data": [[1.6191012E12, 132.46650070353965], [1.61910072E12, 117.31394347451621], [1.6191009E12, 125.01189533769279], [1.61910108E12, 126.13171952553206], [1.6191006E12, 112.67860372150547], [1.61910078E12, 120.9183759908035], [1.61910096E12, 119.96849857903354], [1.61910114E12, 123.3088183892919], [1.61910066E12, 116.6604481967087], [1.61910084E12, 125.55560211179159], [1.61910102E12, 122.80047535139131]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6191012E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07460218651519378, "minX": 1.6191006E12, "maxY": 0.11141372664040815, "series": [{"data": [[1.6191012E12, 0.08106937980300898], [1.61910072E12, 0.09214749862992247], [1.6191009E12, 0.09218365901420804], [1.61910108E12, 0.08744847312189818], [1.6191006E12, 0.07583400751915496], [1.61910078E12, 0.07583550150259268], [1.61910096E12, 0.08357683224592725], [1.61910114E12, 0.10391265908670358], [1.61910066E12, 0.07460218651519378], [1.61910084E12, 0.11141372664040815], [1.61910102E12, 0.07976478301848057]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6191012E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.6191006E12, "maxY": 1799.0, "series": [{"data": [[1.6191012E12, 1486.0], [1.61910072E12, 1727.0], [1.6191009E12, 1583.0], [1.61910108E12, 1776.0], [1.6191006E12, 1593.0], [1.61910078E12, 1745.0], [1.61910096E12, 1799.0], [1.61910114E12, 1762.0], [1.61910066E12, 1784.0], [1.61910084E12, 1696.0], [1.61910102E12, 1777.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6191012E12, 413.0], [1.61910072E12, 377.0], [1.6191009E12, 381.0], [1.61910108E12, 411.0], [1.6191006E12, 368.90000000000146], [1.61910078E12, 385.0], [1.61910096E12, 389.0], [1.61910114E12, 397.0], [1.61910066E12, 376.0], [1.61910084E12, 400.90000000000146], [1.61910102E12, 395.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6191012E12, 581.0], [1.61910072E12, 513.9900000000016], [1.6191009E12, 513.0], [1.61910108E12, 572.9900000000016], [1.6191006E12, 506.9900000000016], [1.61910078E12, 517.0], [1.61910096E12, 523.0], [1.61910114E12, 552.0], [1.61910066E12, 510.0], [1.61910084E12, 532.9900000000016], [1.61910102E12, 545.9800000000032]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6191012E12, 473.0], [1.61910072E12, 426.0], [1.6191009E12, 427.0], [1.61910108E12, 463.0], [1.6191006E12, 417.0], [1.61910078E12, 433.0], [1.61910096E12, 438.0], [1.61910114E12, 451.0], [1.61910066E12, 425.0], [1.61910084E12, 450.0], [1.61910102E12, 445.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6191012E12, 11.0], [1.61910072E12, 11.0], [1.6191009E12, 8.0], [1.61910108E12, 6.0], [1.6191006E12, 8.0], [1.61910078E12, 9.0], [1.61910096E12, 8.0], [1.61910114E12, 6.0], [1.61910066E12, 9.0], [1.61910084E12, 7.0], [1.61910102E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6191012E12, 81.0], [1.61910072E12, 75.0], [1.6191009E12, 70.0], [1.61910108E12, 73.0], [1.6191006E12, 69.0], [1.61910078E12, 72.0], [1.61910096E12, 72.0], [1.61910114E12, 71.0], [1.61910066E12, 71.0], [1.61910084E12, 73.0], [1.61910102E12, 71.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6191012E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 128.0, "maxY": 124.0, "series": [{"data": [[128.0, 124.0], [489.0, 48.0], [667.0, 93.0], [663.0, 90.0], [642.0, 77.0], [646.0, 93.0], [649.0, 84.0], [693.0, 85.0], [688.0, 76.0], [703.0, 82.0], [702.0, 79.0], [689.0, 73.0], [685.0, 75.0], [682.0, 85.0], [732.0, 77.0], [708.0, 80.0], [717.0, 80.0], [716.0, 79.0], [705.0, 83.0], [726.0, 80.0], [727.0, 83.0], [720.0, 81.0], [733.0, 82.0], [725.0, 88.0], [721.0, 81.0], [724.0, 87.0], [730.0, 89.0], [729.0, 75.0], [710.0, 81.0], [731.0, 82.0], [762.0, 77.0], [752.0, 76.0], [767.0, 78.0], [764.0, 78.0], [763.0, 74.0], [766.0, 74.0], [765.0, 85.0], [750.0, 78.0], [756.0, 78.0], [754.0, 74.0], [755.0, 72.0], [757.0, 78.0], [760.0, 80.0], [761.0, 79.0], [747.0, 74.0], [745.0, 76.0], [749.0, 78.0], [748.0, 74.5], [743.0, 81.0], [751.0, 77.0], [736.0, 71.0], [737.0, 78.0], [741.0, 78.0], [739.0, 75.0], [742.0, 79.0], [753.0, 74.0], [759.0, 78.0], [758.0, 73.0], [792.0, 73.0], [794.0, 74.0], [796.0, 75.0], [793.0, 72.0], [790.0, 70.0], [789.0, 72.0], [791.0, 77.0], [788.0, 72.0], [787.0, 80.0], [786.0, 76.0], [785.0, 71.0], [784.0, 71.0], [799.0, 75.0], [797.0, 72.0], [798.0, 76.0], [773.0, 76.0], [768.0, 79.0], [781.0, 75.0], [782.0, 74.0], [783.0, 76.0], [769.0, 74.0], [770.0, 78.0], [772.0, 70.0], [775.0, 78.0], [774.0, 69.0], [780.0, 76.0], [795.0, 78.0], [779.0, 77.0], [778.0, 76.0], [777.0, 73.0], [776.0, 74.0], [824.0, 73.0], [814.0, 72.0], [831.0, 71.0], [817.0, 68.0], [816.0, 71.0], [828.0, 72.0], [829.0, 68.0], [827.0, 75.0], [825.0, 74.0], [826.0, 73.0], [830.0, 73.0], [808.0, 74.0], [823.0, 72.0], [822.0, 73.0], [821.0, 71.0], [820.0, 74.0], [819.0, 72.0], [818.0, 74.0], [809.0, 73.0], [811.0, 72.0], [810.0, 77.0], [813.0, 72.0], [812.0, 75.0], [802.0, 75.0], [800.0, 74.0], [801.0, 75.0], [805.0, 76.0], [803.0, 69.0], [804.0, 70.0], [807.0, 71.0], [806.0, 76.0], [839.0, 74.0], [860.0, 69.0], [863.0, 71.0], [848.0, 77.0], [850.0, 70.0], [849.0, 71.0], [836.0, 70.0], [838.0, 73.0], [837.0, 68.0], [835.0, 72.0], [834.0, 71.0], [833.0, 74.0], [832.0, 71.0], [856.0, 73.0], [857.0, 70.0], [858.0, 66.0], [859.0, 71.0], [843.0, 72.0], [842.0, 73.0], [844.0, 72.0], [846.0, 71.0], [845.0, 72.0], [847.0, 70.0], [840.0, 72.0], [841.0, 70.0], [854.0, 71.0], [855.0, 74.0], [853.0, 72.0], [852.0, 71.0], [851.0, 70.0], [861.0, 71.0], [862.0, 73.5], [868.0, 70.0], [869.0, 67.0], [870.0, 69.0], [890.0, 70.0], [893.0, 71.0], [888.0, 72.0], [871.0, 67.0], [877.0, 72.0], [895.0, 66.0], [873.0, 67.0], [874.0, 75.0], [872.0, 69.0], [887.0, 69.0], [886.0, 69.0], [885.0, 69.0], [882.0, 69.5], [884.0, 69.0], [883.0, 74.0], [881.0, 70.0], [880.0, 70.0], [879.0, 71.0], [878.0, 69.0], [866.0, 73.0], [867.0, 71.0], [864.0, 72.0], [865.0, 70.0], [876.0, 70.0], [875.0, 68.0], [922.0, 69.0], [900.0, 68.0], [919.0, 71.0], [918.0, 66.0], [916.0, 68.0], [914.0, 70.0], [917.0, 72.0], [912.0, 69.0], [898.0, 75.0], [897.0, 66.0], [911.0, 74.0], [896.0, 67.5], [899.0, 70.0], [913.0, 72.0], [903.0, 70.0], [901.0, 67.0], [910.0, 70.0], [909.0, 70.0], [904.0, 65.0], [905.0, 67.0], [931.0, 71.0], [938.0, 70.0], [950.0, 72.0], [957.0, 66.0], [947.0, 72.0], [933.0, 74.0], [952.0, 66.0], [941.0, 63.0], [928.0, 73.0], [930.0, 66.0], [936.0, 70.0], [934.0, 79.0], [976.0, 64.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 976.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 48.0, "minX": 128.0, "maxY": 124.0, "series": [{"data": [[128.0, 124.0], [489.0, 48.0], [667.0, 92.0], [663.0, 90.0], [642.0, 77.0], [646.0, 93.0], [649.0, 84.0], [693.0, 85.0], [688.0, 76.0], [703.0, 82.0], [702.0, 79.0], [689.0, 73.0], [685.0, 75.0], [682.0, 85.0], [732.0, 76.5], [708.0, 80.0], [717.0, 80.0], [716.0, 79.0], [705.0, 83.0], [726.0, 80.0], [727.0, 83.0], [720.0, 81.0], [733.0, 82.0], [725.0, 88.0], [721.0, 81.0], [724.0, 87.0], [730.0, 89.0], [729.0, 75.0], [710.0, 81.0], [731.0, 82.0], [762.0, 77.0], [752.0, 76.0], [767.0, 78.0], [764.0, 78.0], [763.0, 74.0], [766.0, 74.0], [765.0, 85.0], [750.0, 78.0], [756.0, 78.0], [754.0, 74.0], [755.0, 72.0], [757.0, 78.0], [760.0, 80.0], [761.0, 79.0], [747.0, 74.0], [745.0, 76.0], [749.0, 78.0], [748.0, 74.0], [743.0, 81.0], [751.0, 77.0], [736.0, 71.0], [737.0, 78.0], [741.0, 78.0], [739.0, 75.0], [742.0, 79.0], [753.0, 74.0], [759.0, 78.0], [758.0, 73.0], [792.0, 73.0], [794.0, 74.0], [796.0, 75.0], [793.0, 72.0], [790.0, 70.0], [789.0, 72.0], [791.0, 77.0], [788.0, 72.0], [787.0, 80.0], [786.0, 76.0], [785.0, 71.0], [784.0, 71.0], [799.0, 75.0], [797.0, 72.0], [798.0, 76.0], [773.0, 76.0], [768.0, 79.0], [781.0, 75.0], [782.0, 74.0], [783.0, 76.0], [769.0, 74.0], [770.0, 78.0], [772.0, 70.0], [775.0, 78.0], [774.0, 69.0], [780.0, 76.0], [795.0, 78.0], [779.0, 77.0], [778.0, 76.0], [777.0, 73.0], [776.0, 74.0], [824.0, 73.0], [814.0, 72.0], [831.0, 71.0], [817.0, 68.0], [816.0, 71.0], [828.0, 72.0], [829.0, 68.0], [827.0, 75.0], [825.0, 74.0], [826.0, 73.0], [830.0, 73.0], [808.0, 73.0], [823.0, 72.0], [822.0, 73.0], [821.0, 71.0], [820.0, 74.0], [819.0, 72.0], [818.0, 74.0], [809.0, 73.0], [811.0, 72.0], [810.0, 77.0], [813.0, 72.0], [812.0, 75.0], [802.0, 75.0], [800.0, 74.0], [801.0, 75.0], [805.0, 76.0], [803.0, 69.0], [804.0, 70.0], [807.0, 71.0], [806.0, 76.0], [839.0, 74.0], [860.0, 69.0], [863.0, 71.0], [848.0, 77.0], [850.0, 70.0], [849.0, 71.0], [836.0, 70.0], [838.0, 73.0], [837.0, 68.0], [835.0, 72.0], [834.0, 71.0], [833.0, 74.0], [832.0, 71.0], [856.0, 73.0], [857.0, 70.0], [858.0, 66.0], [859.0, 71.0], [843.0, 72.0], [842.0, 73.0], [844.0, 72.0], [846.0, 71.0], [845.0, 72.0], [847.0, 70.0], [840.0, 72.0], [841.0, 70.0], [854.0, 71.0], [855.0, 74.0], [853.0, 72.0], [852.0, 71.0], [851.0, 70.0], [861.0, 71.0], [862.0, 73.0], [868.0, 70.0], [869.0, 67.0], [870.0, 69.0], [890.0, 70.0], [893.0, 71.0], [888.0, 72.0], [871.0, 67.0], [877.0, 72.0], [895.0, 66.0], [873.0, 67.0], [874.0, 75.0], [872.0, 69.0], [887.0, 69.0], [886.0, 69.0], [885.0, 69.0], [882.0, 69.0], [884.0, 69.0], [883.0, 73.0], [881.0, 70.0], [880.0, 70.0], [879.0, 71.0], [878.0, 69.0], [866.0, 73.0], [867.0, 71.0], [864.0, 72.0], [865.0, 70.0], [876.0, 70.0], [875.0, 68.0], [922.0, 69.0], [900.0, 68.0], [919.0, 71.0], [918.0, 66.0], [916.0, 68.0], [914.0, 70.0], [917.0, 72.0], [912.0, 69.0], [898.0, 75.0], [897.0, 66.0], [911.0, 74.0], [896.0, 67.5], [899.0, 70.0], [913.0, 72.0], [903.0, 69.5], [901.0, 67.0], [910.0, 70.0], [909.0, 70.0], [904.0, 65.0], [905.0, 67.0], [931.0, 71.0], [938.0, 70.0], [950.0, 72.0], [957.0, 66.0], [947.0, 72.0], [933.0, 74.0], [952.0, 66.0], [941.0, 63.0], [928.0, 73.0], [930.0, 66.0], [936.0, 70.0], [934.0, 79.0], [976.0, 64.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 976.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 152.31666666666666, "minX": 1.6191006E12, "maxY": 856.75, "series": [{"data": [[1.6191012E12, 152.31666666666666], [1.61910072E12, 851.55], [1.6191009E12, 800.0166666666667], [1.61910108E12, 792.4666666666667], [1.6191006E12, 702.1], [1.61910078E12, 826.3333333333334], [1.61910096E12, 832.7833333333333], [1.61910114E12, 810.6333333333333], [1.61910066E12, 856.75], [1.61910084E12, 795.55], [1.61910102E12, 813.4166666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6191012E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 153.98333333333332, "minX": 1.6191006E12, "maxY": 856.7666666666667, "series": [{"data": [[1.6191012E12, 153.98333333333332], [1.61910072E12, 851.5333333333333], [1.6191009E12, 800.0333333333333], [1.61910108E12, 792.4666666666667], [1.6191006E12, 700.4333333333333], [1.61910078E12, 826.35], [1.61910096E12, 832.7666666666667], [1.61910114E12, 810.6166666666667], [1.61910066E12, 856.7666666666667], [1.61910084E12, 795.5333333333333], [1.61910102E12, 813.4333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6191012E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 153.98333333333332, "minX": 1.6191006E12, "maxY": 856.7666666666667, "series": [{"data": [[1.6191012E12, 153.98333333333332], [1.61910072E12, 851.5333333333333], [1.6191009E12, 800.0333333333333], [1.61910108E12, 792.4666666666667], [1.6191006E12, 700.4333333333333], [1.61910078E12, 826.35], [1.61910096E12, 832.7666666666667], [1.61910114E12, 810.6166666666667], [1.61910066E12, 856.7666666666667], [1.61910084E12, 795.5333333333333], [1.61910102E12, 813.4333333333333]], "isOverall": false, "label": "AuthzRequest-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6191012E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 153.98333333333332, "minX": 1.6191006E12, "maxY": 856.7666666666667, "series": [{"data": [[1.6191012E12, 153.98333333333332], [1.61910072E12, 851.5333333333333], [1.6191009E12, 800.0333333333333], [1.61910108E12, 792.4666666666667], [1.6191006E12, 700.4333333333333], [1.61910078E12, 826.35], [1.61910096E12, 832.7666666666667], [1.61910114E12, 810.6166666666667], [1.61910066E12, 856.7666666666667], [1.61910084E12, 795.5333333333333], [1.61910102E12, 813.4333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6191012E12, "title": "Total Transactions Per Second"}},
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

