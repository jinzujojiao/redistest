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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 9183.0, "series": [{"data": [[0.0, 7.0], [0.1, 14.0], [0.2, 16.0], [0.3, 18.0], [0.4, 20.0], [0.5, 21.0], [0.6, 22.0], [0.7, 22.0], [0.8, 23.0], [0.9, 24.0], [1.0, 24.0], [1.1, 25.0], [1.2, 25.0], [1.3, 26.0], [1.4, 26.0], [1.5, 27.0], [1.6, 27.0], [1.7, 28.0], [1.8, 28.0], [1.9, 28.0], [2.0, 29.0], [2.1, 29.0], [2.2, 30.0], [2.3, 30.0], [2.4, 30.0], [2.5, 31.0], [2.6, 31.0], [2.7, 31.0], [2.8, 31.0], [2.9, 32.0], [3.0, 32.0], [3.1, 32.0], [3.2, 33.0], [3.3, 33.0], [3.4, 33.0], [3.5, 33.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 37.0], [5.1, 37.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 46.0], [10.9, 46.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 47.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 48.0], [12.6, 48.0], [12.7, 48.0], [12.8, 48.0], [12.9, 48.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 48.0], [13.4, 49.0], [13.5, 49.0], [13.6, 49.0], [13.7, 49.0], [13.8, 49.0], [13.9, 49.0], [14.0, 49.0], [14.1, 49.0], [14.2, 49.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 50.0], [14.8, 50.0], [14.9, 50.0], [15.0, 50.0], [15.1, 50.0], [15.2, 51.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 52.0], [16.3, 52.0], [16.4, 52.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 53.0], [17.3, 53.0], [17.4, 53.0], [17.5, 53.0], [17.6, 53.0], [17.7, 53.0], [17.8, 53.0], [17.9, 53.0], [18.0, 53.0], [18.1, 53.0], [18.2, 54.0], [18.3, 54.0], [18.4, 54.0], [18.5, 54.0], [18.6, 54.0], [18.7, 54.0], [18.8, 54.0], [18.9, 54.0], [19.0, 54.0], [19.1, 54.0], [19.2, 54.0], [19.3, 55.0], [19.4, 55.0], [19.5, 55.0], [19.6, 55.0], [19.7, 55.0], [19.8, 55.0], [19.9, 55.0], [20.0, 55.0], [20.1, 55.0], [20.2, 55.0], [20.3, 55.0], [20.4, 56.0], [20.5, 56.0], [20.6, 56.0], [20.7, 56.0], [20.8, 56.0], [20.9, 56.0], [21.0, 56.0], [21.1, 56.0], [21.2, 56.0], [21.3, 56.0], [21.4, 56.0], [21.5, 57.0], [21.6, 57.0], [21.7, 57.0], [21.8, 57.0], [21.9, 57.0], [22.0, 57.0], [22.1, 57.0], [22.2, 57.0], [22.3, 57.0], [22.4, 57.0], [22.5, 57.0], [22.6, 58.0], [22.7, 58.0], [22.8, 58.0], [22.9, 58.0], [23.0, 58.0], [23.1, 58.0], [23.2, 58.0], [23.3, 58.0], [23.4, 58.0], [23.5, 58.0], [23.6, 58.0], [23.7, 59.0], [23.8, 59.0], [23.9, 59.0], [24.0, 59.0], [24.1, 59.0], [24.2, 59.0], [24.3, 59.0], [24.4, 59.0], [24.5, 59.0], [24.6, 59.0], [24.7, 59.0], [24.8, 59.0], [24.9, 60.0], [25.0, 60.0], [25.1, 60.0], [25.2, 60.0], [25.3, 60.0], [25.4, 60.0], [25.5, 60.0], [25.6, 60.0], [25.7, 60.0], [25.8, 60.0], [25.9, 60.0], [26.0, 61.0], [26.1, 61.0], [26.2, 61.0], [26.3, 61.0], [26.4, 61.0], [26.5, 61.0], [26.6, 61.0], [26.7, 61.0], [26.8, 61.0], [26.9, 61.0], [27.0, 61.0], [27.1, 61.0], [27.2, 62.0], [27.3, 62.0], [27.4, 62.0], [27.5, 62.0], [27.6, 62.0], [27.7, 62.0], [27.8, 62.0], [27.9, 62.0], [28.0, 62.0], [28.1, 62.0], [28.2, 62.0], [28.3, 62.0], [28.4, 63.0], [28.5, 63.0], [28.6, 63.0], [28.7, 63.0], [28.8, 63.0], [28.9, 63.0], [29.0, 63.0], [29.1, 63.0], [29.2, 63.0], [29.3, 63.0], [29.4, 63.0], [29.5, 63.0], [29.6, 64.0], [29.7, 64.0], [29.8, 64.0], [29.9, 64.0], [30.0, 64.0], [30.1, 64.0], [30.2, 64.0], [30.3, 64.0], [30.4, 64.0], [30.5, 64.0], [30.6, 64.0], [30.7, 64.0], [30.8, 65.0], [30.9, 65.0], [31.0, 65.0], [31.1, 65.0], [31.2, 65.0], [31.3, 65.0], [31.4, 65.0], [31.5, 65.0], [31.6, 65.0], [31.7, 65.0], [31.8, 65.0], [31.9, 65.0], [32.0, 66.0], [32.1, 66.0], [32.2, 66.0], [32.3, 66.0], [32.4, 66.0], [32.5, 66.0], [32.6, 66.0], [32.7, 66.0], [32.8, 66.0], [32.9, 66.0], [33.0, 66.0], [33.1, 66.0], [33.2, 67.0], [33.3, 67.0], [33.4, 67.0], [33.5, 67.0], [33.6, 67.0], [33.7, 67.0], [33.8, 67.0], [33.9, 67.0], [34.0, 67.0], [34.1, 67.0], [34.2, 67.0], [34.3, 67.0], [34.4, 68.0], [34.5, 68.0], [34.6, 68.0], [34.7, 68.0], [34.8, 68.0], [34.9, 68.0], [35.0, 68.0], [35.1, 68.0], [35.2, 68.0], [35.3, 68.0], [35.4, 68.0], [35.5, 68.0], [35.6, 68.0], [35.7, 69.0], [35.8, 69.0], [35.9, 69.0], [36.0, 69.0], [36.1, 69.0], [36.2, 69.0], [36.3, 69.0], [36.4, 69.0], [36.5, 69.0], [36.6, 69.0], [36.7, 69.0], [36.8, 69.0], [36.9, 70.0], [37.0, 70.0], [37.1, 70.0], [37.2, 70.0], [37.3, 70.0], [37.4, 70.0], [37.5, 70.0], [37.6, 70.0], [37.7, 70.0], [37.8, 70.0], [37.9, 70.0], [38.0, 70.0], [38.1, 71.0], [38.2, 71.0], [38.3, 71.0], [38.4, 71.0], [38.5, 71.0], [38.6, 71.0], [38.7, 71.0], [38.8, 71.0], [38.9, 71.0], [39.0, 71.0], [39.1, 71.0], [39.2, 71.0], [39.3, 72.0], [39.4, 72.0], [39.5, 72.0], [39.6, 72.0], [39.7, 72.0], [39.8, 72.0], [39.9, 72.0], [40.0, 72.0], [40.1, 72.0], [40.2, 72.0], [40.3, 72.0], [40.4, 72.0], [40.5, 73.0], [40.6, 73.0], [40.7, 73.0], [40.8, 73.0], [40.9, 73.0], [41.0, 73.0], [41.1, 73.0], [41.2, 73.0], [41.3, 73.0], [41.4, 73.0], [41.5, 73.0], [41.6, 73.0], [41.7, 74.0], [41.8, 74.0], [41.9, 74.0], [42.0, 74.0], [42.1, 74.0], [42.2, 74.0], [42.3, 74.0], [42.4, 74.0], [42.5, 74.0], [42.6, 74.0], [42.7, 74.0], [42.8, 75.0], [42.9, 75.0], [43.0, 75.0], [43.1, 75.0], [43.2, 75.0], [43.3, 75.0], [43.4, 75.0], [43.5, 75.0], [43.6, 75.0], [43.7, 75.0], [43.8, 75.0], [43.9, 75.0], [44.0, 76.0], [44.1, 76.0], [44.2, 76.0], [44.3, 76.0], [44.4, 76.0], [44.5, 76.0], [44.6, 76.0], [44.7, 76.0], [44.8, 76.0], [44.9, 76.0], [45.0, 76.0], [45.1, 76.0], [45.2, 77.0], [45.3, 77.0], [45.4, 77.0], [45.5, 77.0], [45.6, 77.0], [45.7, 77.0], [45.8, 77.0], [45.9, 77.0], [46.0, 77.0], [46.1, 77.0], [46.2, 77.0], [46.3, 78.0], [46.4, 78.0], [46.5, 78.0], [46.6, 78.0], [46.7, 78.0], [46.8, 78.0], [46.9, 78.0], [47.0, 78.0], [47.1, 78.0], [47.2, 78.0], [47.3, 78.0], [47.4, 79.0], [47.5, 79.0], [47.6, 79.0], [47.7, 79.0], [47.8, 79.0], [47.9, 79.0], [48.0, 79.0], [48.1, 79.0], [48.2, 79.0], [48.3, 79.0], [48.4, 79.0], [48.5, 79.0], [48.6, 80.0], [48.7, 80.0], [48.8, 80.0], [48.9, 80.0], [49.0, 80.0], [49.1, 80.0], [49.2, 80.0], [49.3, 80.0], [49.4, 80.0], [49.5, 80.0], [49.6, 80.0], [49.7, 81.0], [49.8, 81.0], [49.9, 81.0], [50.0, 81.0], [50.1, 81.0], [50.2, 81.0], [50.3, 81.0], [50.4, 81.0], [50.5, 81.0], [50.6, 81.0], [50.7, 82.0], [50.8, 82.0], [50.9, 82.0], [51.0, 82.0], [51.1, 82.0], [51.2, 82.0], [51.3, 82.0], [51.4, 82.0], [51.5, 82.0], [51.6, 82.0], [51.7, 82.0], [51.8, 83.0], [51.9, 83.0], [52.0, 83.0], [52.1, 83.0], [52.2, 83.0], [52.3, 83.0], [52.4, 83.0], [52.5, 83.0], [52.6, 83.0], [52.7, 83.0], [52.8, 84.0], [52.9, 84.0], [53.0, 84.0], [53.1, 84.0], [53.2, 84.0], [53.3, 84.0], [53.4, 84.0], [53.5, 84.0], [53.6, 84.0], [53.7, 84.0], [53.8, 84.0], [53.9, 85.0], [54.0, 85.0], [54.1, 85.0], [54.2, 85.0], [54.3, 85.0], [54.4, 85.0], [54.5, 85.0], [54.6, 85.0], [54.7, 85.0], [54.8, 85.0], [54.9, 86.0], [55.0, 86.0], [55.1, 86.0], [55.2, 86.0], [55.3, 86.0], [55.4, 86.0], [55.5, 86.0], [55.6, 86.0], [55.7, 86.0], [55.8, 87.0], [55.9, 87.0], [56.0, 87.0], [56.1, 87.0], [56.2, 87.0], [56.3, 87.0], [56.4, 87.0], [56.5, 87.0], [56.6, 87.0], [56.7, 87.0], [56.8, 88.0], [56.9, 88.0], [57.0, 88.0], [57.1, 88.0], [57.2, 88.0], [57.3, 88.0], [57.4, 88.0], [57.5, 88.0], [57.6, 88.0], [57.7, 89.0], [57.8, 89.0], [57.9, 89.0], [58.0, 89.0], [58.1, 89.0], [58.2, 89.0], [58.3, 89.0], [58.4, 89.0], [58.5, 89.0], [58.6, 90.0], [58.7, 90.0], [58.8, 90.0], [58.9, 90.0], [59.0, 90.0], [59.1, 90.0], [59.2, 90.0], [59.3, 90.0], [59.4, 90.0], [59.5, 91.0], [59.6, 91.0], [59.7, 91.0], [59.8, 91.0], [59.9, 91.0], [60.0, 91.0], [60.1, 91.0], [60.2, 91.0], [60.3, 91.0], [60.4, 92.0], [60.5, 92.0], [60.6, 92.0], [60.7, 92.0], [60.8, 92.0], [60.9, 92.0], [61.0, 92.0], [61.1, 92.0], [61.2, 92.0], [61.3, 93.0], [61.4, 93.0], [61.5, 93.0], [61.6, 93.0], [61.7, 93.0], [61.8, 93.0], [61.9, 93.0], [62.0, 93.0], [62.1, 94.0], [62.2, 94.0], [62.3, 94.0], [62.4, 94.0], [62.5, 94.0], [62.6, 94.0], [62.7, 94.0], [62.8, 94.0], [62.9, 95.0], [63.0, 95.0], [63.1, 95.0], [63.2, 95.0], [63.3, 95.0], [63.4, 95.0], [63.5, 95.0], [63.6, 95.0], [63.7, 96.0], [63.8, 96.0], [63.9, 96.0], [64.0, 96.0], [64.1, 96.0], [64.2, 96.0], [64.3, 96.0], [64.4, 97.0], [64.5, 97.0], [64.6, 97.0], [64.7, 97.0], [64.8, 97.0], [64.9, 97.0], [65.0, 97.0], [65.1, 97.0], [65.2, 98.0], [65.3, 98.0], [65.4, 98.0], [65.5, 98.0], [65.6, 98.0], [65.7, 98.0], [65.8, 98.0], [65.9, 99.0], [66.0, 99.0], [66.1, 99.0], [66.2, 99.0], [66.3, 99.0], [66.4, 99.0], [66.5, 99.0], [66.6, 100.0], [66.7, 100.0], [66.8, 100.0], [66.9, 100.0], [67.0, 100.0], [67.1, 100.0], [67.2, 101.0], [67.3, 101.0], [67.4, 101.0], [67.5, 101.0], [67.6, 101.0], [67.7, 101.0], [67.8, 101.0], [67.9, 102.0], [68.0, 102.0], [68.1, 102.0], [68.2, 102.0], [68.3, 102.0], [68.4, 102.0], [68.5, 103.0], [68.6, 103.0], [68.7, 103.0], [68.8, 103.0], [68.9, 103.0], [69.0, 103.0], [69.1, 103.0], [69.2, 104.0], [69.3, 104.0], [69.4, 104.0], [69.5, 104.0], [69.6, 104.0], [69.7, 105.0], [69.8, 105.0], [69.9, 105.0], [70.0, 105.0], [70.1, 105.0], [70.2, 105.0], [70.3, 106.0], [70.4, 106.0], [70.5, 106.0], [70.6, 106.0], [70.7, 106.0], [70.8, 106.0], [70.9, 107.0], [71.0, 107.0], [71.1, 107.0], [71.2, 107.0], [71.3, 107.0], [71.4, 108.0], [71.5, 108.0], [71.6, 108.0], [71.7, 108.0], [71.8, 108.0], [71.9, 109.0], [72.0, 109.0], [72.1, 109.0], [72.2, 109.0], [72.3, 109.0], [72.4, 110.0], [72.5, 110.0], [72.6, 110.0], [72.7, 110.0], [72.8, 110.0], [72.9, 111.0], [73.0, 111.0], [73.1, 111.0], [73.2, 111.0], [73.3, 112.0], [73.4, 112.0], [73.5, 112.0], [73.6, 112.0], [73.7, 112.0], [73.8, 113.0], [73.9, 113.0], [74.0, 113.0], [74.1, 113.0], [74.2, 114.0], [74.3, 114.0], [74.4, 114.0], [74.5, 114.0], [74.6, 115.0], [74.7, 115.0], [74.8, 115.0], [74.9, 115.0], [75.0, 116.0], [75.1, 116.0], [75.2, 116.0], [75.3, 116.0], [75.4, 117.0], [75.5, 117.0], [75.6, 117.0], [75.7, 117.0], [75.8, 118.0], [75.9, 118.0], [76.0, 118.0], [76.1, 119.0], [76.2, 119.0], [76.3, 119.0], [76.4, 119.0], [76.5, 120.0], [76.6, 120.0], [76.7, 120.0], [76.8, 121.0], [76.9, 121.0], [77.0, 121.0], [77.1, 122.0], [77.2, 122.0], [77.3, 122.0], [77.4, 123.0], [77.5, 123.0], [77.6, 123.0], [77.7, 124.0], [77.8, 124.0], [77.9, 124.0], [78.0, 125.0], [78.1, 125.0], [78.2, 125.0], [78.3, 126.0], [78.4, 126.0], [78.5, 127.0], [78.6, 127.0], [78.7, 128.0], [78.8, 128.0], [78.9, 128.0], [79.0, 129.0], [79.1, 129.0], [79.2, 130.0], [79.3, 130.0], [79.4, 131.0], [79.5, 131.0], [79.6, 132.0], [79.7, 132.0], [79.8, 133.0], [79.9, 133.0], [80.0, 134.0], [80.1, 134.0], [80.2, 135.0], [80.3, 135.0], [80.4, 136.0], [80.5, 137.0], [80.6, 137.0], [80.7, 138.0], [80.8, 138.0], [80.9, 139.0], [81.0, 140.0], [81.1, 140.0], [81.2, 141.0], [81.3, 142.0], [81.4, 143.0], [81.5, 143.0], [81.6, 144.0], [81.7, 145.0], [81.8, 146.0], [81.9, 147.0], [82.0, 148.0], [82.1, 149.0], [82.2, 150.0], [82.3, 151.0], [82.4, 152.0], [82.5, 153.0], [82.6, 154.0], [82.7, 156.0], [82.8, 157.0], [82.9, 159.0], [83.0, 160.0], [83.1, 162.0], [83.2, 164.0], [83.3, 166.0], [83.4, 168.0], [83.5, 170.0], [83.6, 172.0], [83.7, 175.0], [83.8, 178.0], [83.9, 182.0], [84.0, 187.0], [84.1, 193.0], [84.2, 202.0], [84.3, 222.0], [84.4, 324.0], [84.5, 354.0], [84.6, 367.0], [84.7, 378.0], [84.8, 385.0], [84.9, 391.0], [85.0, 397.0], [85.1, 402.0], [85.2, 407.0], [85.3, 411.0], [85.4, 415.0], [85.5, 419.0], [85.6, 423.0], [85.7, 427.0], [85.8, 430.0], [85.9, 433.0], [86.0, 436.0], [86.1, 440.0], [86.2, 443.0], [86.3, 446.0], [86.4, 448.0], [86.5, 451.0], [86.6, 454.0], [86.7, 457.0], [86.8, 459.0], [86.9, 462.0], [87.0, 465.0], [87.1, 467.0], [87.2, 470.0], [87.3, 473.0], [87.4, 475.0], [87.5, 478.0], [87.6, 480.0], [87.7, 483.0], [87.8, 485.0], [87.9, 487.0], [88.0, 490.0], [88.1, 493.0], [88.2, 495.0], [88.3, 498.0], [88.4, 501.0], [88.5, 503.0], [88.6, 506.0], [88.7, 509.0], [88.8, 512.0], [88.9, 515.0], [89.0, 518.0], [89.1, 521.0], [89.2, 524.0], [89.3, 527.0], [89.4, 530.0], [89.5, 533.0], [89.6, 537.0], [89.7, 540.0], [89.8, 544.0], [89.9, 547.0], [90.0, 550.0], [90.1, 554.0], [90.2, 557.0], [90.3, 561.0], [90.4, 565.0], [90.5, 569.0], [90.6, 573.0], [90.7, 577.0], [90.8, 582.0], [90.9, 586.0], [91.0, 590.0], [91.1, 595.0], [91.2, 600.0], [91.3, 605.0], [91.4, 611.0], [91.5, 616.0], [91.6, 622.0], [91.7, 628.0], [91.8, 634.0], [91.9, 640.0], [92.0, 646.0], [92.1, 653.0], [92.2, 660.0], [92.3, 666.0], [92.4, 673.0], [92.5, 680.0], [92.6, 688.0], [92.7, 696.0], [92.8, 704.0], [92.9, 712.0], [93.0, 720.0], [93.1, 729.0], [93.2, 738.0], [93.3, 747.0], [93.4, 755.0], [93.5, 764.0], [93.6, 774.0], [93.7, 783.0], [93.8, 793.0], [93.9, 803.0], [94.0, 813.0], [94.1, 823.0], [94.2, 833.0], [94.3, 844.0], [94.4, 855.0], [94.5, 866.0], [94.6, 878.0], [94.7, 890.0], [94.8, 902.0], [94.9, 914.0], [95.0, 927.0], [95.1, 940.0], [95.2, 953.0], [95.3, 967.0], [95.4, 981.0], [95.5, 995.0], [95.6, 1011.0], [95.7, 1024.0], [95.8, 1040.0], [95.9, 1057.0], [96.0, 1075.0], [96.1, 1092.0], [96.2, 1109.0], [96.3, 1127.0], [96.4, 1145.0], [96.5, 1163.0], [96.6, 1184.0], [96.7, 1205.0], [96.8, 1225.0], [96.9, 1248.0], [97.0, 1271.0], [97.1, 1293.0], [97.2, 1317.0], [97.3, 1340.0], [97.4, 1366.0], [97.5, 1393.0], [97.6, 1419.0], [97.7, 1446.0], [97.8, 1478.0], [97.9, 1509.0], [98.0, 1540.0], [98.1, 1571.0], [98.2, 1607.0], [98.3, 1644.0], [98.4, 1684.0], [98.5, 1728.0], [98.6, 1776.0], [98.7, 1825.0], [98.8, 1881.0], [98.9, 1946.0], [99.0, 2016.0], [99.1, 2088.0], [99.2, 2166.0], [99.3, 2256.0], [99.4, 2372.0], [99.5, 2496.0], [99.6, 2645.0], [99.7, 2839.0], [99.8, 3115.0], [99.9, 3580.0], [100.0, 9183.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 288950.0, "series": [{"data": [[0.0, 288950.0], [600.0, 6766.0], [700.0, 4892.0], [800.0, 3936.0], [900.0, 3264.0], [1000.0, 2671.0], [1100.0, 2304.0], [1200.0, 1972.0], [1300.0, 1727.0], [1400.0, 1521.0], [1500.0, 1332.0], [1600.0, 1106.0], [1700.0, 921.0], [1800.0, 801.0], [1900.0, 645.0], [2000.0, 585.0], [2100.0, 558.0], [2300.0, 350.0], [2200.0, 435.0], [2400.0, 347.0], [2500.0, 293.0], [2600.0, 241.0], [2700.0, 241.0], [2800.0, 184.0], [2900.0, 168.0], [3000.0, 139.0], [3100.0, 140.0], [3200.0, 94.0], [3300.0, 86.0], [3400.0, 80.0], [3500.0, 69.0], [3600.0, 40.0], [3700.0, 56.0], [3800.0, 39.0], [3900.0, 29.0], [4000.0, 31.0], [4300.0, 24.0], [4100.0, 31.0], [4200.0, 16.0], [4500.0, 28.0], [4400.0, 19.0], [4600.0, 14.0], [4800.0, 7.0], [4700.0, 10.0], [5000.0, 7.0], [5100.0, 8.0], [4900.0, 13.0], [5300.0, 1.0], [5200.0, 4.0], [5500.0, 5.0], [5400.0, 6.0], [5600.0, 4.0], [5800.0, 1.0], [5700.0, 3.0], [5900.0, 5.0], [6100.0, 1.0], [6000.0, 1.0], [6300.0, 2.0], [6200.0, 2.0], [6500.0, 2.0], [6400.0, 2.0], [6700.0, 2.0], [6800.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [8600.0, 1.0], [9100.0, 1.0], [100.0, 76689.0], [200.0, 819.0], [300.0, 2970.0], [400.0, 14371.0], [500.0, 12277.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9229.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 383962.0, "series": [{"data": [[0.0, 383962.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 41173.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9229.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 149.07339574622833, "minX": 1.61913102E12, "maxY": 150.0, "series": [{"data": [[1.61913132E12, 150.0], [1.61913162E12, 149.48404855376555], [1.61913102E12, 149.07339574622833], [1.61913144E12, 150.0], [1.6191315E12, 150.0], [1.61913114E12, 150.0], [1.61913108E12, 150.0], [1.61913138E12, 150.0], [1.61913126E12, 150.0], [1.6191312E12, 150.0], [1.61913156E12, 150.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61913162E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 19.5, "minX": 1.0, "maxY": 2100.0, "series": [{"data": [[2.0, 1407.0], [3.0, 640.0], [4.0, 494.0], [5.0, 1355.0], [7.0, 969.5], [9.0, 1183.5], [10.0, 544.0], [11.0, 1118.0], [12.0, 1432.0], [13.0, 671.0], [15.0, 550.5], [16.0, 667.0], [17.0, 606.0], [18.0, 385.0], [19.0, 2100.0], [20.0, 846.0], [21.0, 1132.0], [22.0, 864.0], [23.0, 644.0], [24.0, 615.0], [26.0, 1230.5], [27.0, 423.0], [28.0, 1405.0], [29.0, 881.0], [30.0, 1102.0], [31.0, 425.0], [33.0, 1095.0], [32.0, 1793.0], [34.0, 111.0], [35.0, 123.14285714285714], [36.0, 585.0], [37.0, 87.0], [38.0, 124.66666666666667], [39.0, 172.5], [40.0, 336.0], [41.0, 1364.0], [42.0, 216.25], [43.0, 113.2], [44.0, 255.66666666666666], [45.0, 308.0], [46.0, 124.33333333333333], [47.0, 155.75], [48.0, 19.5], [49.0, 365.5], [50.0, 93.75], [51.0, 91.14285714285714], [53.0, 101.75], [52.0, 367.0], [54.0, 493.75], [55.0, 188.0], [56.0, 392.3333333333333], [57.0, 292.0], [58.0, 418.57142857142856], [59.0, 552.0], [60.0, 374.5], [61.0, 496.6666666666667], [62.0, 142.33333333333331], [63.0, 266.5], [64.0, 196.66666666666666], [65.0, 150.71428571428572], [66.0, 218.33333333333334], [67.0, 276.0], [68.0, 297.8], [69.0, 129.25], [70.0, 324.625], [71.0, 1504.0], [73.0, 141.42857142857144], [74.0, 157.75], [75.0, 692.5], [72.0, 419.0], [79.0, 1223.0], [78.0, 744.0], [77.0, 470.0], [76.0, 474.0], [81.0, 146.25], [82.0, 289.1666666666667], [83.0, 306.5], [80.0, 455.0], [84.0, 694.6666666666666], [85.0, 651.6666666666666], [86.0, 288.3333333333333], [87.0, 242.85714285714286], [88.0, 89.33333333333333], [89.0, 77.25], [90.0, 79.66666666666667], [91.0, 419.0], [92.0, 192.9], [93.0, 290.1428571428571], [94.0, 144.85714285714286], [95.0, 217.33333333333334], [96.0, 350.0], [97.0, 241.0], [98.0, 351.25], [99.0, 538.2], [100.0, 127.8], [101.0, 239.4285714285714], [102.0, 249.9], [103.0, 123.66666666666666], [105.0, 130.25], [107.0, 66.57142857142857], [108.0, 211.125], [109.0, 61.25], [110.0, 80.5], [111.0, 151.33333333333334], [112.0, 181.16666666666669], [113.0, 170.0], [114.0, 67.0], [115.0, 244.5], [117.0, 74.10000000000001], [118.0, 183.75], [119.0, 112.83333333333333], [116.0, 72.0], [120.0, 103.75], [121.0, 180.5], [122.0, 269.0], [123.0, 96.0], [124.0, 96.6], [125.0, 64.83333333333333], [126.0, 32.0], [127.0, 721.0], [128.0, 309.0], [129.0, 164.0], [130.0, 87.16666666666666], [131.0, 203.25], [132.0, 114.4], [133.0, 64.4], [134.0, 51.25], [135.0, 172.99999999999997], [136.0, 54.5], [138.0, 281.88888888888886], [139.0, 196.62499999999997], [141.0, 180.66666666666666], [142.0, 78.5], [143.0, 106.0], [144.0, 264.83333333333337], [145.0, 194.2857142857143], [146.0, 360.75], [147.0, 60.75], [148.0, 148.5], [149.0, 116.63636363636364], [150.0, 206.97959734080553], [1.0, 1237.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}, {"data": [[149.92673656196664, 207.04982687331432]], "isOverall": false, "label": "AuthzRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 57943.86666666667, "minX": 1.61913102E12, "maxY": 227190.9, "series": [{"data": [[1.61913132E12, 213181.83333333334], [1.61913162E12, 112177.51666666666], [1.61913102E12, 111413.95], [1.61913144E12, 219644.48333333334], [1.6191315E12, 215597.66666666666], [1.61913114E12, 227190.9], [1.61913108E12, 224150.43333333332], [1.61913138E12, 222539.71666666667], [1.61913126E12, 214237.63333333333], [1.6191312E12, 219252.18333333332], [1.61913156E12, 219327.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61913132E12, 110905.46666666666], [1.61913162E12, 58357.3], [1.61913102E12, 57943.86666666667], [1.61913144E12, 114265.6], [1.6191315E12, 112161.56666666667], [1.61913114E12, 118194.53333333334], [1.61913108E12, 116609.26666666666], [1.61913138E12, 115771.86666666667], [1.61913126E12, 111453.2], [1.6191312E12, 114060.2], [1.61913156E12, 114102.33333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61913162E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 199.12970369023893, "minX": 1.61913102E12, "maxY": 213.8824199829047, "series": [{"data": [[1.61913132E12, 213.8824199829047], [1.61913162E12, 206.7220342042326], [1.61913102E12, 199.12970369023893], [1.61913144E12, 207.04689804572388], [1.6191315E12, 211.33949240485617], [1.61913114E12, 200.47685143926645], [1.61913108E12, 203.22243801092824], [1.61913138E12, 204.80720589573448], [1.61913126E12, 212.45210755127098], [1.6191312E12, 207.59588123932159], [1.61913156E12, 207.55748903761832]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61913162E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 199.08353026722398, "minX": 1.61913102E12, "maxY": 213.82657422357235, "series": [{"data": [[1.61913132E12, 213.82657422357235], [1.61913162E12, 206.67528541130864], [1.61913102E12, 199.08353026722398], [1.61913144E12, 206.99571349557496], [1.6191315E12, 211.28967201183272], [1.61913114E12, 200.4293734961232], [1.61913108E12, 203.1691883835427], [1.61913138E12, 204.7607360567738], [1.61913126E12, 212.3960164445701], [1.6191312E12, 207.54617444705943], [1.61913156E12, 207.5052619432267]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61913162E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08081765263300325, "minX": 1.61913102E12, "maxY": 0.14074713688420235, "series": [{"data": [[1.61913132E12, 0.1109792003039226], [1.61913162E12, 0.08081765263300325], [1.61913102E12, 0.14074713688420235], [1.61913144E12, 0.12133573008849526], [1.6191315E12, 0.10705984551452023], [1.61913114E12, 0.09560199625701864], [1.61913108E12, 0.10631859446276212], [1.61913138E12, 0.10504048767173121], [1.61913126E12, 0.10521217276249897], [1.6191312E12, 0.09306459805143774], [1.61913156E12, 0.10136164320332267]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61913162E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.61913102E12, "maxY": 9183.0, "series": [{"data": [[1.61913132E12, 5703.0], [1.61913162E12, 6862.0], [1.61913102E12, 7020.0], [1.61913144E12, 7285.0], [1.6191315E12, 9183.0], [1.61913114E12, 6191.0], [1.61913108E12, 5984.0], [1.61913138E12, 6460.0], [1.61913126E12, 6783.0], [1.6191312E12, 8642.0], [1.61913156E12, 6516.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61913132E12, 582.9000000000015], [1.61913162E12, 548.0], [1.61913102E12, 553.0], [1.61913144E12, 557.0], [1.6191315E12, 557.0], [1.61913114E12, 519.0], [1.61913108E12, 517.0], [1.61913138E12, 540.0], [1.61913126E12, 567.9000000000015], [1.6191312E12, 531.0], [1.61913156E12, 547.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61913132E12, 1986.900000000016], [1.61913162E12, 1997.950000000008], [1.61913102E12, 1974.9300000000112], [1.61913144E12, 2012.950000000008], [1.6191315E12, 2038.9300000000112], [1.61913114E12, 1958.9700000000048], [1.61913108E12, 1985.9800000000032], [1.61913138E12, 2011.9700000000048], [1.61913126E12, 2026.0], [1.6191312E12, 2135.9600000000064], [1.61913156E12, 1907.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61913132E12, 986.0], [1.61913162E12, 923.9500000000007], [1.61913102E12, 925.9500000000007], [1.61913144E12, 923.0], [1.6191315E12, 940.9500000000007], [1.61913114E12, 864.0], [1.61913108E12, 899.9500000000007], [1.61913138E12, 913.0], [1.61913126E12, 948.9500000000007], [1.6191312E12, 930.0], [1.61913156E12, 934.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61913132E12, 8.0], [1.61913162E12, 9.0], [1.61913102E12, 9.0], [1.61913144E12, 7.0], [1.6191315E12, 8.0], [1.61913114E12, 8.0], [1.61913108E12, 8.0], [1.61913138E12, 8.0], [1.61913126E12, 7.0], [1.6191312E12, 10.0], [1.61913156E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61913132E12, 84.0], [1.61913162E12, 79.0], [1.61913102E12, 77.0], [1.61913144E12, 79.0], [1.6191315E12, 82.0], [1.61913114E12, 77.0], [1.61913108E12, 78.0], [1.61913138E12, 80.0], [1.61913126E12, 85.0], [1.6191312E12, 84.0], [1.61913156E12, 78.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61913162E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.0, "minX": 74.0, "maxY": 642.0, "series": [{"data": [[74.0, 642.0], [449.0, 80.0], [590.0, 89.0], [605.0, 103.0], [606.0, 92.0], [596.0, 87.0], [636.0, 89.0], [635.0, 86.0], [631.0, 93.0], [608.0, 92.0], [616.0, 84.0], [625.0, 87.0], [609.0, 77.0], [638.0, 89.0], [633.0, 83.0], [627.0, 96.0], [628.0, 90.0], [647.0, 90.0], [671.0, 85.0], [657.0, 84.0], [669.0, 84.0], [670.0, 85.0], [668.0, 86.0], [641.0, 86.0], [642.0, 80.0], [644.0, 99.0], [643.0, 88.0], [649.0, 94.0], [650.0, 85.0], [651.0, 84.0], [652.0, 91.0], [653.0, 87.0], [654.0, 91.0], [655.0, 98.0], [648.0, 95.0], [640.0, 85.0], [658.0, 89.0], [667.0, 84.0], [665.0, 92.0], [664.0, 80.0], [666.0, 84.0], [656.0, 90.0], [660.0, 87.0], [661.0, 86.0], [662.0, 86.0], [698.0, 83.0], [684.0, 84.5], [683.0, 85.0], [681.0, 86.0], [680.0, 90.0], [682.0, 84.0], [685.0, 84.0], [686.0, 86.0], [689.0, 82.0], [691.0, 84.0], [690.0, 79.0], [692.0, 86.0], [703.0, 84.0], [688.0, 88.0], [694.0, 87.0], [695.0, 82.0], [693.0, 81.0], [702.0, 83.0], [696.0, 84.0], [697.0, 88.0], [699.0, 83.0], [700.0, 84.0], [701.0, 87.0], [678.0, 89.0], [676.0, 84.0], [677.0, 85.0], [675.0, 88.0], [674.0, 84.5], [673.0, 85.0], [687.0, 81.0], [672.0, 84.5], [729.0, 81.0], [720.0, 84.0], [725.0, 79.0], [707.0, 80.0], [711.0, 83.0], [709.0, 81.0], [710.0, 79.0], [708.0, 87.0], [728.0, 78.0], [733.0, 80.0], [732.0, 82.0], [731.0, 80.0], [730.0, 78.0], [714.0, 80.0], [712.0, 81.0], [713.0, 80.0], [715.0, 81.0], [718.0, 83.0], [716.0, 80.0], [717.0, 85.0], [705.0, 85.0], [706.0, 83.0], [704.0, 84.0], [719.0, 78.0], [734.0, 77.5], [727.0, 79.0], [726.0, 78.0], [735.0, 80.0], [723.0, 82.0], [724.0, 76.0], [722.0, 83.0], [721.0, 82.0], [760.0, 77.0], [754.0, 78.0], [749.0, 76.0], [748.0, 77.0], [747.0, 79.0], [744.0, 82.0], [745.0, 83.0], [746.0, 80.0], [758.0, 77.0], [757.0, 74.0], [759.0, 80.0], [756.0, 75.0], [750.0, 78.0], [738.0, 79.0], [751.0, 80.0], [737.0, 80.0], [736.0, 84.0], [743.0, 81.0], [742.0, 86.0], [740.0, 79.0], [739.0, 79.0], [741.0, 81.0], [761.0, 78.0], [762.0, 83.5], [763.0, 80.0], [764.0, 82.0], [765.0, 78.0], [767.0, 79.0], [752.0, 79.0], [753.0, 77.0], [755.0, 76.0], [793.0, 77.0], [799.0, 72.0], [785.0, 77.0], [784.0, 78.0], [796.0, 75.0], [794.0, 73.0], [797.0, 77.0], [798.0, 79.0], [771.0, 78.0], [779.0, 76.0], [776.0, 79.0], [777.0, 78.0], [778.0, 81.0], [768.0, 81.0], [781.0, 73.0], [783.0, 78.0], [780.0, 77.0], [769.0, 76.0], [770.0, 76.0], [786.0, 78.0], [774.0, 73.0], [773.0, 78.0], [772.0, 80.0], [775.0, 77.0], [792.0, 75.0], [791.0, 71.0], [790.0, 78.0], [789.0, 76.0], [787.0, 75.0], [788.0, 83.0], [825.0, 69.0], [802.0, 79.0], [811.0, 75.0], [818.0, 75.0], [822.0, 72.0], [806.0, 80.5], [804.0, 77.0], [807.0, 73.0], [816.0, 72.0], [828.0, 72.0], [831.0, 76.0], [800.0, 78.0], [801.0, 79.0], [808.0, 72.0], [809.0, 80.0], [834.0, 71.0], [836.0, 71.0], [832.0, 79.0], [857.0, 69.0], [843.0, 72.0], [844.0, 67.0], [833.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 857.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 67.0, "minX": 74.0, "maxY": 642.0, "series": [{"data": [[74.0, 642.0], [449.0, 80.0], [590.0, 89.0], [605.0, 103.0], [606.0, 92.0], [596.0, 87.0], [636.0, 89.0], [635.0, 85.5], [631.0, 93.0], [608.0, 92.0], [616.0, 84.0], [625.0, 87.0], [609.0, 77.0], [638.0, 89.0], [633.0, 83.0], [627.0, 96.0], [628.0, 90.0], [647.0, 90.0], [671.0, 85.0], [657.0, 84.0], [669.0, 84.0], [670.0, 85.0], [668.0, 86.0], [641.0, 86.0], [642.0, 80.0], [644.0, 99.0], [643.0, 88.0], [649.0, 94.0], [650.0, 85.0], [651.0, 84.0], [652.0, 91.0], [653.0, 87.0], [654.0, 91.0], [655.0, 98.0], [648.0, 95.0], [640.0, 85.0], [658.0, 89.0], [667.0, 84.0], [665.0, 92.0], [664.0, 80.0], [666.0, 83.5], [656.0, 90.0], [660.0, 87.0], [661.0, 86.0], [662.0, 86.0], [698.0, 83.0], [684.0, 84.5], [683.0, 85.0], [681.0, 86.0], [680.0, 90.0], [682.0, 84.0], [685.0, 83.5], [686.0, 86.0], [689.0, 82.0], [691.0, 84.0], [690.0, 79.0], [692.0, 86.0], [703.0, 84.0], [688.0, 88.0], [694.0, 87.0], [695.0, 82.0], [693.0, 81.0], [702.0, 83.0], [696.0, 84.0], [697.0, 88.0], [699.0, 83.0], [700.0, 84.0], [701.0, 87.0], [678.0, 89.0], [676.0, 84.0], [677.0, 85.0], [675.0, 88.0], [674.0, 84.0], [673.0, 85.0], [687.0, 81.0], [672.0, 84.5], [729.0, 81.0], [720.0, 84.0], [725.0, 79.0], [707.0, 80.0], [711.0, 83.0], [709.0, 81.0], [710.0, 79.0], [708.0, 87.0], [728.0, 78.0], [733.0, 80.0], [732.0, 82.0], [731.0, 80.0], [730.0, 78.0], [714.0, 80.0], [712.0, 81.0], [713.0, 80.0], [715.0, 81.0], [718.0, 83.0], [716.0, 80.0], [717.0, 85.0], [705.0, 85.0], [706.0, 83.0], [704.0, 84.0], [719.0, 78.0], [734.0, 77.0], [727.0, 79.0], [726.0, 78.0], [735.0, 79.0], [723.0, 82.0], [724.0, 76.0], [722.0, 83.0], [721.0, 82.0], [760.0, 77.0], [754.0, 78.0], [749.0, 76.0], [748.0, 77.0], [747.0, 78.5], [744.0, 82.0], [745.0, 83.0], [746.0, 80.0], [758.0, 77.0], [757.0, 74.0], [759.0, 80.0], [756.0, 75.0], [750.0, 78.0], [738.0, 79.0], [751.0, 80.0], [737.0, 80.0], [736.0, 84.0], [743.0, 81.0], [742.0, 86.0], [740.0, 79.0], [739.0, 78.0], [741.0, 81.0], [761.0, 78.0], [762.0, 83.0], [763.0, 80.0], [764.0, 82.0], [765.0, 78.0], [767.0, 78.5], [752.0, 79.0], [753.0, 77.0], [755.0, 76.0], [793.0, 77.0], [799.0, 72.0], [785.0, 77.0], [784.0, 78.0], [796.0, 75.0], [794.0, 72.5], [797.0, 77.0], [798.0, 79.0], [771.0, 78.0], [779.0, 76.0], [776.0, 79.0], [777.0, 78.0], [778.0, 81.0], [768.0, 81.0], [781.0, 73.0], [783.0, 78.0], [780.0, 77.0], [769.0, 76.0], [770.0, 76.0], [786.0, 78.0], [774.0, 73.0], [773.0, 78.0], [772.0, 80.0], [775.0, 77.0], [792.0, 75.0], [791.0, 71.0], [790.0, 78.0], [789.0, 76.0], [787.0, 75.0], [788.0, 83.0], [825.0, 69.0], [802.0, 79.0], [811.0, 75.0], [818.0, 75.0], [822.0, 72.0], [806.0, 80.5], [804.0, 77.0], [807.0, 72.0], [816.0, 72.0], [828.0, 72.0], [831.0, 76.0], [800.0, 78.0], [801.0, 79.0], [808.0, 71.0], [809.0, 80.0], [834.0, 71.0], [836.0, 71.0], [832.0, 79.0], [857.0, 69.0], [843.0, 72.0], [844.0, 67.0], [833.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 857.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 366.85, "minX": 1.61913102E12, "maxY": 748.0666666666667, "series": [{"data": [[1.61913132E12, 701.9666666666667], [1.61913162E12, 366.85], [1.61913102E12, 369.23333333333335], [1.61913144E12, 723.2], [1.6191315E12, 709.8833333333333], [1.61913114E12, 748.0666666666667], [1.61913108E12, 738.0333333333333], [1.61913138E12, 732.7333333333333], [1.61913126E12, 705.3666666666667], [1.6191312E12, 721.9], [1.61913156E12, 722.1666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61913162E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 366.73333333333335, "minX": 1.61913102E12, "maxY": 748.0666666666667, "series": [{"data": [[1.61913132E12, 701.9333333333333], [1.61913162E12, 369.35], [1.61913102E12, 366.73333333333335], [1.61913144E12, 723.2], [1.6191315E12, 709.8833333333333], [1.61913114E12, 748.0666666666667], [1.61913108E12, 738.0333333333333], [1.61913138E12, 732.7333333333333], [1.61913126E12, 705.4], [1.6191312E12, 721.9], [1.61913156E12, 722.1666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61913162E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 366.73333333333335, "minX": 1.61913102E12, "maxY": 748.0666666666667, "series": [{"data": [[1.61913132E12, 701.9333333333333], [1.61913162E12, 369.35], [1.61913102E12, 366.73333333333335], [1.61913144E12, 723.2], [1.6191315E12, 709.8833333333333], [1.61913114E12, 748.0666666666667], [1.61913108E12, 738.0333333333333], [1.61913138E12, 732.7333333333333], [1.61913126E12, 705.4], [1.6191312E12, 721.9], [1.61913156E12, 722.1666666666666]], "isOverall": false, "label": "AuthzRequest-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61913162E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 366.73333333333335, "minX": 1.61913102E12, "maxY": 748.0666666666667, "series": [{"data": [[1.61913132E12, 701.9333333333333], [1.61913162E12, 369.35], [1.61913102E12, 366.73333333333335], [1.61913144E12, 723.2], [1.6191315E12, 709.8833333333333], [1.61913114E12, 748.0666666666667], [1.61913108E12, 738.0333333333333], [1.61913138E12, 732.7333333333333], [1.61913126E12, 705.4], [1.6191312E12, 721.9], [1.61913156E12, 722.1666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61913162E12, "title": "Total Transactions Per Second"}},
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

