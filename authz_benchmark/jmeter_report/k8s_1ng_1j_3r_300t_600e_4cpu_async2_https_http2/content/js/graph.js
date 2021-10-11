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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1707.0, "series": [{"data": [[0.0, 2.0], [0.1, 19.0], [0.2, 29.0], [0.3, 37.0], [0.4, 43.0], [0.5, 52.0], [0.6, 60.0], [0.7, 63.0], [0.8, 65.0], [0.9, 66.0], [1.0, 68.0], [1.1, 69.0], [1.2, 70.0], [1.3, 71.0], [1.4, 72.0], [1.5, 72.0], [1.6, 73.0], [1.7, 73.0], [1.8, 74.0], [1.9, 74.0], [2.0, 75.0], [2.1, 75.0], [2.2, 75.0], [2.3, 76.0], [2.4, 76.0], [2.5, 76.0], [2.6, 77.0], [2.7, 77.0], [2.8, 77.0], [2.9, 78.0], [3.0, 78.0], [3.1, 78.0], [3.2, 78.0], [3.3, 79.0], [3.4, 79.0], [3.5, 79.0], [3.6, 79.0], [3.7, 80.0], [3.8, 80.0], [3.9, 80.0], [4.0, 80.0], [4.1, 80.0], [4.2, 81.0], [4.3, 81.0], [4.4, 81.0], [4.5, 81.0], [4.6, 81.0], [4.7, 81.0], [4.8, 82.0], [4.9, 82.0], [5.0, 82.0], [5.1, 82.0], [5.2, 82.0], [5.3, 82.0], [5.4, 83.0], [5.5, 83.0], [5.6, 83.0], [5.7, 83.0], [5.8, 83.0], [5.9, 83.0], [6.0, 83.0], [6.1, 83.0], [6.2, 84.0], [6.3, 84.0], [6.4, 84.0], [6.5, 84.0], [6.6, 84.0], [6.7, 84.0], [6.8, 84.0], [6.9, 84.0], [7.0, 85.0], [7.1, 85.0], [7.2, 85.0], [7.3, 85.0], [7.4, 85.0], [7.5, 85.0], [7.6, 85.0], [7.7, 85.0], [7.8, 85.0], [7.9, 85.0], [8.0, 86.0], [8.1, 86.0], [8.2, 86.0], [8.3, 86.0], [8.4, 86.0], [8.5, 86.0], [8.6, 86.0], [8.7, 86.0], [8.8, 86.0], [8.9, 86.0], [9.0, 86.0], [9.1, 87.0], [9.2, 87.0], [9.3, 87.0], [9.4, 87.0], [9.5, 87.0], [9.6, 87.0], [9.7, 87.0], [9.8, 87.0], [9.9, 87.0], [10.0, 87.0], [10.1, 87.0], [10.2, 87.0], [10.3, 88.0], [10.4, 88.0], [10.5, 88.0], [10.6, 88.0], [10.7, 88.0], [10.8, 88.0], [10.9, 88.0], [11.0, 88.0], [11.1, 88.0], [11.2, 88.0], [11.3, 88.0], [11.4, 88.0], [11.5, 88.0], [11.6, 89.0], [11.7, 89.0], [11.8, 89.0], [11.9, 89.0], [12.0, 89.0], [12.1, 89.0], [12.2, 89.0], [12.3, 89.0], [12.4, 89.0], [12.5, 89.0], [12.6, 89.0], [12.7, 89.0], [12.8, 89.0], [12.9, 89.0], [13.0, 90.0], [13.1, 90.0], [13.2, 90.0], [13.3, 90.0], [13.4, 90.0], [13.5, 90.0], [13.6, 90.0], [13.7, 90.0], [13.8, 90.0], [13.9, 90.0], [14.0, 90.0], [14.1, 90.0], [14.2, 90.0], [14.3, 90.0], [14.4, 90.0], [14.5, 90.0], [14.6, 91.0], [14.7, 91.0], [14.8, 91.0], [14.9, 91.0], [15.0, 91.0], [15.1, 91.0], [15.2, 91.0], [15.3, 91.0], [15.4, 91.0], [15.5, 91.0], [15.6, 91.0], [15.7, 91.0], [15.8, 91.0], [15.9, 91.0], [16.0, 91.0], [16.1, 91.0], [16.2, 91.0], [16.3, 92.0], [16.4, 92.0], [16.5, 92.0], [16.6, 92.0], [16.7, 92.0], [16.8, 92.0], [16.9, 92.0], [17.0, 92.0], [17.1, 92.0], [17.2, 92.0], [17.3, 92.0], [17.4, 92.0], [17.5, 92.0], [17.6, 92.0], [17.7, 92.0], [17.8, 92.0], [17.9, 92.0], [18.0, 92.0], [18.1, 92.0], [18.2, 92.0], [18.3, 93.0], [18.4, 93.0], [18.5, 93.0], [18.6, 93.0], [18.7, 93.0], [18.8, 93.0], [18.9, 93.0], [19.0, 93.0], [19.1, 93.0], [19.2, 93.0], [19.3, 93.0], [19.4, 93.0], [19.5, 93.0], [19.6, 93.0], [19.7, 93.0], [19.8, 93.0], [19.9, 93.0], [20.0, 93.0], [20.1, 93.0], [20.2, 93.0], [20.3, 94.0], [20.4, 94.0], [20.5, 94.0], [20.6, 94.0], [20.7, 94.0], [20.8, 94.0], [20.9, 94.0], [21.0, 94.0], [21.1, 94.0], [21.2, 94.0], [21.3, 94.0], [21.4, 94.0], [21.5, 94.0], [21.6, 94.0], [21.7, 94.0], [21.8, 94.0], [21.9, 94.0], [22.0, 94.0], [22.1, 94.0], [22.2, 94.0], [22.3, 94.0], [22.4, 94.0], [22.5, 95.0], [22.6, 95.0], [22.7, 95.0], [22.8, 95.0], [22.9, 95.0], [23.0, 95.0], [23.1, 95.0], [23.2, 95.0], [23.3, 95.0], [23.4, 95.0], [23.5, 95.0], [23.6, 95.0], [23.7, 95.0], [23.8, 95.0], [23.9, 95.0], [24.0, 95.0], [24.1, 95.0], [24.2, 95.0], [24.3, 95.0], [24.4, 95.0], [24.5, 95.0], [24.6, 95.0], [24.7, 95.0], [24.8, 95.0], [24.9, 96.0], [25.0, 96.0], [25.1, 96.0], [25.2, 96.0], [25.3, 96.0], [25.4, 96.0], [25.5, 96.0], [25.6, 96.0], [25.7, 96.0], [25.8, 96.0], [25.9, 96.0], [26.0, 96.0], [26.1, 96.0], [26.2, 96.0], [26.3, 96.0], [26.4, 96.0], [26.5, 96.0], [26.6, 96.0], [26.7, 96.0], [26.8, 96.0], [26.9, 96.0], [27.0, 96.0], [27.1, 96.0], [27.2, 96.0], [27.3, 96.0], [27.4, 97.0], [27.5, 97.0], [27.6, 97.0], [27.7, 97.0], [27.8, 97.0], [27.9, 97.0], [28.0, 97.0], [28.1, 97.0], [28.2, 97.0], [28.3, 97.0], [28.4, 97.0], [28.5, 97.0], [28.6, 97.0], [28.7, 97.0], [28.8, 97.0], [28.9, 97.0], [29.0, 97.0], [29.1, 97.0], [29.2, 97.0], [29.3, 97.0], [29.4, 97.0], [29.5, 97.0], [29.6, 97.0], [29.7, 97.0], [29.8, 97.0], [29.9, 97.0], [30.0, 98.0], [30.1, 98.0], [30.2, 98.0], [30.3, 98.0], [30.4, 98.0], [30.5, 98.0], [30.6, 98.0], [30.7, 98.0], [30.8, 98.0], [30.9, 98.0], [31.0, 98.0], [31.1, 98.0], [31.2, 98.0], [31.3, 98.0], [31.4, 98.0], [31.5, 98.0], [31.6, 98.0], [31.7, 98.0], [31.8, 98.0], [31.9, 98.0], [32.0, 98.0], [32.1, 98.0], [32.2, 98.0], [32.3, 98.0], [32.4, 98.0], [32.5, 98.0], [32.6, 99.0], [32.7, 99.0], [32.8, 99.0], [32.9, 99.0], [33.0, 99.0], [33.1, 99.0], [33.2, 99.0], [33.3, 99.0], [33.4, 99.0], [33.5, 99.0], [33.6, 99.0], [33.7, 99.0], [33.8, 99.0], [33.9, 99.0], [34.0, 99.0], [34.1, 99.0], [34.2, 99.0], [34.3, 99.0], [34.4, 99.0], [34.5, 99.0], [34.6, 99.0], [34.7, 99.0], [34.8, 99.0], [34.9, 99.0], [35.0, 99.0], [35.1, 99.0], [35.2, 99.0], [35.3, 99.0], [35.4, 100.0], [35.5, 100.0], [35.6, 100.0], [35.7, 100.0], [35.8, 100.0], [35.9, 100.0], [36.0, 100.0], [36.1, 100.0], [36.2, 100.0], [36.3, 100.0], [36.4, 100.0], [36.5, 100.0], [36.6, 100.0], [36.7, 100.0], [36.8, 100.0], [36.9, 100.0], [37.0, 100.0], [37.1, 100.0], [37.2, 100.0], [37.3, 100.0], [37.4, 100.0], [37.5, 100.0], [37.6, 100.0], [37.7, 100.0], [37.8, 100.0], [37.9, 100.0], [38.0, 100.0], [38.1, 101.0], [38.2, 101.0], [38.3, 101.0], [38.4, 101.0], [38.5, 101.0], [38.6, 101.0], [38.7, 101.0], [38.8, 101.0], [38.9, 101.0], [39.0, 101.0], [39.1, 101.0], [39.2, 101.0], [39.3, 101.0], [39.4, 101.0], [39.5, 101.0], [39.6, 101.0], [39.7, 101.0], [39.8, 101.0], [39.9, 101.0], [40.0, 101.0], [40.1, 101.0], [40.2, 101.0], [40.3, 101.0], [40.4, 101.0], [40.5, 101.0], [40.6, 101.0], [40.7, 102.0], [40.8, 102.0], [40.9, 102.0], [41.0, 102.0], [41.1, 102.0], [41.2, 102.0], [41.3, 102.0], [41.4, 102.0], [41.5, 102.0], [41.6, 102.0], [41.7, 102.0], [41.8, 102.0], [41.9, 102.0], [42.0, 102.0], [42.1, 102.0], [42.2, 102.0], [42.3, 102.0], [42.4, 102.0], [42.5, 102.0], [42.6, 102.0], [42.7, 102.0], [42.8, 102.0], [42.9, 102.0], [43.0, 102.0], [43.1, 102.0], [43.2, 102.0], [43.3, 103.0], [43.4, 103.0], [43.5, 103.0], [43.6, 103.0], [43.7, 103.0], [43.8, 103.0], [43.9, 103.0], [44.0, 103.0], [44.1, 103.0], [44.2, 103.0], [44.3, 103.0], [44.4, 103.0], [44.5, 103.0], [44.6, 103.0], [44.7, 103.0], [44.8, 103.0], [44.9, 103.0], [45.0, 103.0], [45.1, 103.0], [45.2, 103.0], [45.3, 103.0], [45.4, 103.0], [45.5, 103.0], [45.6, 103.0], [45.7, 103.0], [45.8, 103.0], [45.9, 104.0], [46.0, 104.0], [46.1, 104.0], [46.2, 104.0], [46.3, 104.0], [46.4, 104.0], [46.5, 104.0], [46.6, 104.0], [46.7, 104.0], [46.8, 104.0], [46.9, 104.0], [47.0, 104.0], [47.1, 104.0], [47.2, 104.0], [47.3, 104.0], [47.4, 104.0], [47.5, 104.0], [47.6, 104.0], [47.7, 104.0], [47.8, 104.0], [47.9, 104.0], [48.0, 104.0], [48.1, 104.0], [48.2, 104.0], [48.3, 104.0], [48.4, 104.0], [48.5, 104.0], [48.6, 105.0], [48.7, 105.0], [48.8, 105.0], [48.9, 105.0], [49.0, 105.0], [49.1, 105.0], [49.2, 105.0], [49.3, 105.0], [49.4, 105.0], [49.5, 105.0], [49.6, 105.0], [49.7, 105.0], [49.8, 105.0], [49.9, 105.0], [50.0, 105.0], [50.1, 105.0], [50.2, 105.0], [50.3, 105.0], [50.4, 105.0], [50.5, 105.0], [50.6, 105.0], [50.7, 105.0], [50.8, 105.0], [50.9, 105.0], [51.0, 105.0], [51.1, 106.0], [51.2, 106.0], [51.3, 106.0], [51.4, 106.0], [51.5, 106.0], [51.6, 106.0], [51.7, 106.0], [51.8, 106.0], [51.9, 106.0], [52.0, 106.0], [52.1, 106.0], [52.2, 106.0], [52.3, 106.0], [52.4, 106.0], [52.5, 106.0], [52.6, 106.0], [52.7, 106.0], [52.8, 106.0], [52.9, 106.0], [53.0, 106.0], [53.1, 106.0], [53.2, 106.0], [53.3, 106.0], [53.4, 106.0], [53.5, 106.0], [53.6, 106.0], [53.7, 107.0], [53.8, 107.0], [53.9, 107.0], [54.0, 107.0], [54.1, 107.0], [54.2, 107.0], [54.3, 107.0], [54.4, 107.0], [54.5, 107.0], [54.6, 107.0], [54.7, 107.0], [54.8, 107.0], [54.9, 107.0], [55.0, 107.0], [55.1, 107.0], [55.2, 107.0], [55.3, 107.0], [55.4, 107.0], [55.5, 107.0], [55.6, 107.0], [55.7, 107.0], [55.8, 107.0], [55.9, 107.0], [56.0, 108.0], [56.1, 108.0], [56.2, 108.0], [56.3, 108.0], [56.4, 108.0], [56.5, 108.0], [56.6, 108.0], [56.7, 108.0], [56.8, 108.0], [56.9, 108.0], [57.0, 108.0], [57.1, 108.0], [57.2, 108.0], [57.3, 108.0], [57.4, 108.0], [57.5, 108.0], [57.6, 108.0], [57.7, 108.0], [57.8, 108.0], [57.9, 108.0], [58.0, 108.0], [58.1, 108.0], [58.2, 108.0], [58.3, 108.0], [58.4, 109.0], [58.5, 109.0], [58.6, 109.0], [58.7, 109.0], [58.8, 109.0], [58.9, 109.0], [59.0, 109.0], [59.1, 109.0], [59.2, 109.0], [59.3, 109.0], [59.4, 109.0], [59.5, 109.0], [59.6, 109.0], [59.7, 109.0], [59.8, 109.0], [59.9, 109.0], [60.0, 109.0], [60.1, 109.0], [60.2, 109.0], [60.3, 109.0], [60.4, 109.0], [60.5, 109.0], [60.6, 110.0], [60.7, 110.0], [60.8, 110.0], [60.9, 110.0], [61.0, 110.0], [61.1, 110.0], [61.2, 110.0], [61.3, 110.0], [61.4, 110.0], [61.5, 110.0], [61.6, 110.0], [61.7, 110.0], [61.8, 110.0], [61.9, 110.0], [62.0, 110.0], [62.1, 110.0], [62.2, 110.0], [62.3, 110.0], [62.4, 110.0], [62.5, 110.0], [62.6, 110.0], [62.7, 110.0], [62.8, 111.0], [62.9, 111.0], [63.0, 111.0], [63.1, 111.0], [63.2, 111.0], [63.3, 111.0], [63.4, 111.0], [63.5, 111.0], [63.6, 111.0], [63.7, 111.0], [63.8, 111.0], [63.9, 111.0], [64.0, 111.0], [64.1, 111.0], [64.2, 111.0], [64.3, 111.0], [64.4, 111.0], [64.5, 111.0], [64.6, 111.0], [64.7, 111.0], [64.8, 111.0], [64.9, 111.0], [65.0, 112.0], [65.1, 112.0], [65.2, 112.0], [65.3, 112.0], [65.4, 112.0], [65.5, 112.0], [65.6, 112.0], [65.7, 112.0], [65.8, 112.0], [65.9, 112.0], [66.0, 112.0], [66.1, 112.0], [66.2, 112.0], [66.3, 112.0], [66.4, 112.0], [66.5, 112.0], [66.6, 112.0], [66.7, 112.0], [66.8, 112.0], [66.9, 112.0], [67.0, 113.0], [67.1, 113.0], [67.2, 113.0], [67.3, 113.0], [67.4, 113.0], [67.5, 113.0], [67.6, 113.0], [67.7, 113.0], [67.8, 113.0], [67.9, 113.0], [68.0, 113.0], [68.1, 113.0], [68.2, 113.0], [68.3, 113.0], [68.4, 113.0], [68.5, 113.0], [68.6, 113.0], [68.7, 113.0], [68.8, 113.0], [68.9, 113.0], [69.0, 114.0], [69.1, 114.0], [69.2, 114.0], [69.3, 114.0], [69.4, 114.0], [69.5, 114.0], [69.6, 114.0], [69.7, 114.0], [69.8, 114.0], [69.9, 114.0], [70.0, 114.0], [70.1, 114.0], [70.2, 114.0], [70.3, 114.0], [70.4, 114.0], [70.5, 114.0], [70.6, 114.0], [70.7, 114.0], [70.8, 114.0], [70.9, 115.0], [71.0, 115.0], [71.1, 115.0], [71.2, 115.0], [71.3, 115.0], [71.4, 115.0], [71.5, 115.0], [71.6, 115.0], [71.7, 115.0], [71.8, 115.0], [71.9, 115.0], [72.0, 115.0], [72.1, 115.0], [72.2, 115.0], [72.3, 115.0], [72.4, 115.0], [72.5, 115.0], [72.6, 115.0], [72.7, 116.0], [72.8, 116.0], [72.9, 116.0], [73.0, 116.0], [73.1, 116.0], [73.2, 116.0], [73.3, 116.0], [73.4, 116.0], [73.5, 116.0], [73.6, 116.0], [73.7, 116.0], [73.8, 116.0], [73.9, 116.0], [74.0, 116.0], [74.1, 116.0], [74.2, 116.0], [74.3, 116.0], [74.4, 117.0], [74.5, 117.0], [74.6, 117.0], [74.7, 117.0], [74.8, 117.0], [74.9, 117.0], [75.0, 117.0], [75.1, 117.0], [75.2, 117.0], [75.3, 117.0], [75.4, 117.0], [75.5, 117.0], [75.6, 117.0], [75.7, 117.0], [75.8, 117.0], [75.9, 117.0], [76.0, 118.0], [76.1, 118.0], [76.2, 118.0], [76.3, 118.0], [76.4, 118.0], [76.5, 118.0], [76.6, 118.0], [76.7, 118.0], [76.8, 118.0], [76.9, 118.0], [77.0, 118.0], [77.1, 118.0], [77.2, 118.0], [77.3, 118.0], [77.4, 118.0], [77.5, 119.0], [77.6, 119.0], [77.7, 119.0], [77.8, 119.0], [77.9, 119.0], [78.0, 119.0], [78.1, 119.0], [78.2, 119.0], [78.3, 119.0], [78.4, 119.0], [78.5, 119.0], [78.6, 119.0], [78.7, 119.0], [78.8, 119.0], [78.9, 119.0], [79.0, 120.0], [79.1, 120.0], [79.2, 120.0], [79.3, 120.0], [79.4, 120.0], [79.5, 120.0], [79.6, 120.0], [79.7, 120.0], [79.8, 120.0], [79.9, 120.0], [80.0, 120.0], [80.1, 120.0], [80.2, 120.0], [80.3, 120.0], [80.4, 120.0], [80.5, 121.0], [80.6, 121.0], [80.7, 121.0], [80.8, 121.0], [80.9, 121.0], [81.0, 121.0], [81.1, 121.0], [81.2, 121.0], [81.3, 121.0], [81.4, 121.0], [81.5, 121.0], [81.6, 121.0], [81.7, 121.0], [81.8, 122.0], [81.9, 122.0], [82.0, 122.0], [82.1, 122.0], [82.2, 122.0], [82.3, 122.0], [82.4, 122.0], [82.5, 122.0], [82.6, 122.0], [82.7, 122.0], [82.8, 122.0], [82.9, 122.0], [83.0, 122.0], [83.1, 123.0], [83.2, 123.0], [83.3, 123.0], [83.4, 123.0], [83.5, 123.0], [83.6, 123.0], [83.7, 123.0], [83.8, 123.0], [83.9, 123.0], [84.0, 123.0], [84.1, 123.0], [84.2, 124.0], [84.3, 124.0], [84.4, 124.0], [84.5, 124.0], [84.6, 124.0], [84.7, 124.0], [84.8, 124.0], [84.9, 124.0], [85.0, 124.0], [85.1, 124.0], [85.2, 124.0], [85.3, 125.0], [85.4, 125.0], [85.5, 125.0], [85.6, 125.0], [85.7, 125.0], [85.8, 125.0], [85.9, 125.0], [86.0, 125.0], [86.1, 125.0], [86.2, 125.0], [86.3, 126.0], [86.4, 126.0], [86.5, 126.0], [86.6, 126.0], [86.7, 126.0], [86.8, 126.0], [86.9, 126.0], [87.0, 126.0], [87.1, 126.0], [87.2, 126.0], [87.3, 127.0], [87.4, 127.0], [87.5, 127.0], [87.6, 127.0], [87.7, 127.0], [87.8, 127.0], [87.9, 127.0], [88.0, 127.0], [88.1, 128.0], [88.2, 128.0], [88.3, 128.0], [88.4, 128.0], [88.5, 128.0], [88.6, 128.0], [88.7, 128.0], [88.8, 128.0], [88.9, 128.0], [89.0, 129.0], [89.1, 129.0], [89.2, 129.0], [89.3, 129.0], [89.4, 129.0], [89.5, 129.0], [89.6, 129.0], [89.7, 129.0], [89.8, 130.0], [89.9, 130.0], [90.0, 130.0], [90.1, 130.0], [90.2, 130.0], [90.3, 130.0], [90.4, 130.0], [90.5, 131.0], [90.6, 131.0], [90.7, 131.0], [90.8, 131.0], [90.9, 131.0], [91.0, 131.0], [91.1, 131.0], [91.2, 132.0], [91.3, 132.0], [91.4, 132.0], [91.5, 132.0], [91.6, 132.0], [91.7, 132.0], [91.8, 133.0], [91.9, 133.0], [92.0, 133.0], [92.1, 133.0], [92.2, 133.0], [92.3, 133.0], [92.4, 134.0], [92.5, 134.0], [92.6, 134.0], [92.7, 134.0], [92.8, 134.0], [92.9, 134.0], [93.0, 135.0], [93.1, 135.0], [93.2, 135.0], [93.3, 135.0], [93.4, 135.0], [93.5, 136.0], [93.6, 136.0], [93.7, 136.0], [93.8, 136.0], [93.9, 137.0], [94.0, 137.0], [94.1, 137.0], [94.2, 137.0], [94.3, 137.0], [94.4, 138.0], [94.5, 138.0], [94.6, 138.0], [94.7, 139.0], [94.8, 139.0], [94.9, 139.0], [95.0, 139.0], [95.1, 140.0], [95.2, 140.0], [95.3, 140.0], [95.4, 141.0], [95.5, 141.0], [95.6, 141.0], [95.7, 142.0], [95.8, 142.0], [95.9, 142.0], [96.0, 143.0], [96.1, 143.0], [96.2, 143.0], [96.3, 144.0], [96.4, 144.0], [96.5, 145.0], [96.6, 145.0], [96.7, 146.0], [96.8, 146.0], [96.9, 147.0], [97.0, 147.0], [97.1, 148.0], [97.2, 148.0], [97.3, 149.0], [97.4, 149.0], [97.5, 150.0], [97.6, 151.0], [97.7, 151.0], [97.8, 152.0], [97.9, 153.0], [98.0, 154.0], [98.1, 155.0], [98.2, 156.0], [98.3, 157.0], [98.4, 158.0], [98.5, 160.0], [98.6, 161.0], [98.7, 163.0], [98.8, 165.0], [98.9, 168.0], [99.0, 171.0], [99.1, 175.0], [99.2, 179.0], [99.3, 185.0], [99.4, 191.0], [99.5, 199.0], [99.6, 206.0], [99.7, 218.0], [99.8, 239.0], [99.9, 276.0], [100.0, 1707.0]], "isOverall": false, "label": "AuthzUser-http2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1604801.0, "series": [{"data": [[0.0, 882486.0], [600.0, 27.0], [700.0, 8.0], [200.0, 10075.0], [900.0, 30.0], [1000.0, 69.0], [1100.0, 101.0], [1200.0, 71.0], [300.0, 1122.0], [1300.0, 87.0], [1400.0, 56.0], [1500.0, 39.0], [100.0, 1604801.0], [400.0, 342.0], [1600.0, 16.0], [1700.0, 1.0], [500.0, 82.0]], "isOverall": false, "label": "AuthzUser-http2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 55.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2498829.0, "series": [{"data": [[0.0, 2498829.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 529.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 55.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 235.5326994957732, "minX": 1.6338747E12, "maxY": 300.0, "series": [{"data": [[1.63387518E12, 300.0], [1.63387548E12, 300.0], [1.63387482E12, 300.0], [1.63387512E12, 300.0], [1.63387542E12, 300.0], [1.63387476E12, 300.0], [1.63387506E12, 300.0], [1.63387536E12, 300.0], [1.6338747E12, 299.4765399737875], [1.633875E12, 300.0], [1.6338753E12, 300.0], [1.6338756E12, 235.5326994957732], [1.63387494E12, 300.0], [1.63387524E12, 300.0], [1.63387554E12, 300.0], [1.63387488E12, 300.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6338756E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 1289.75641025641, "series": [{"data": [[2.0, 3.0], [3.0, 3.4696969696969706], [4.0, 6.666666666666667], [6.0, 5.666666666666667], [9.0, 5.545454545454546], [10.0, 6.874999999999999], [11.0, 6.525773195876288], [12.0, 12.5], [13.0, 11.0], [15.0, 10.5], [17.0, 11.561403508771932], [18.0, 11.817391304347826], [19.0, 13.214285714285714], [20.0, 14.666666666666666], [21.0, 24.5], [22.0, 12.89285714285714], [23.0, 15.75], [24.0, 13.0], [25.0, 13.333333333333334], [26.0, 19.069651741293537], [27.0, 17.73333333333333], [28.0, 17.480769230769234], [29.0, 18.658536585365855], [30.0, 18.333333333333332], [31.0, 18.07246376811594], [33.0, 16.985765124555165], [32.0, 20.476190476190474], [35.0, 20.833333333333336], [34.0, 21.875], [37.0, 21.2], [36.0, 19.584158415841593], [39.0, 30.227272727272734], [38.0, 19.224999999999998], [41.0, 21.73529411764706], [40.0, 29.0], [43.0, 24.933333333333337], [42.0, 23.125000000000004], [45.0, 18.50273224043716], [44.0, 22.666666666666664], [47.0, 15.659090909090908], [46.0, 19.34408602150539], [49.0, 25.5], [48.0, 20.092715231788073], [51.0, 14.11111111111111], [50.0, 18.660606060606067], [53.0, 19.545454545454547], [52.0, 23.18025751072962], [55.0, 18.870056497175142], [54.0, 15.285714285714285], [57.0, 24.89411764705882], [56.0, 29.18181818181818], [59.0, 27.0], [58.0, 28.7], [61.0, 21.783783783783786], [60.0, 23.376884422110567], [63.0, 26.634999999999998], [62.0, 18.952380952380953], [67.0, 23.2], [66.0, 18.0], [65.0, 18.90909090909091], [64.0, 20.652912621359203], [71.0, 24.848837209302314], [70.0, 20.680000000000003], [69.0, 20.714285714285715], [68.0, 24.384615384615387], [75.0, 34.300000000000004], [74.0, 33.0], [73.0, 39.75], [72.0, 30.0], [79.0, 30.636363636363637], [78.0, 31.75], [77.0, 30.5], [76.0, 37.4], [82.0, 31.5], [80.0, 31.624999999999996], [87.0, 31.8], [86.0, 32.8], [85.0, 31.5], [90.0, 36.0], [89.0, 36.2], [88.0, 32.692307692307686], [95.0, 38.833333333333336], [93.0, 36.285714285714285], [99.0, 44.285714285714285], [97.0, 42.25], [96.0, 41.0], [103.0, 37.333333333333336], [102.0, 36.0], [101.0, 40.19463087248322], [100.0, 49.4], [106.0, 37.63636363636363], [105.0, 37.0], [104.0, 37.2], [111.0, 34.333333333333336], [110.0, 34.142857142857146], [109.0, 38.530612244897966], [108.0, 38.43750000000001], [115.0, 39.91515151515152], [114.0, 39.833333333333336], [113.0, 41.997282608695635], [112.0, 38.038608562691145], [119.0, 40.609467455621285], [118.0, 39.719242902208215], [117.0, 69.52941176470588], [116.0, 55.85625000000001], [123.0, 44.92341356673958], [122.0, 40.95022624434392], [121.0, 44.810810810810814], [120.0, 42.15131578947368], [127.0, 57.06666666666667], [126.0, 46.0], [125.0, 52.96069868995633], [124.0, 47.19476744186045], [135.0, 64.5], [134.0, 66.0], [132.0, 66.0], [131.0, 43.11111111111115], [130.0, 56.166666666666664], [129.0, 66.1794871794872], [128.0, 57.75], [136.0, 67.0], [151.0, 63.0], [150.0, 63.0], [148.0, 64.0], [144.0, 64.0], [159.0, 63.0], [158.0, 62.0], [157.0, 63.0], [155.0, 63.0], [160.0, 61.0], [174.0, 58.0], [172.0, 61.0], [168.0, 58.0], [183.0, 56.5], [181.0, 57.0], [180.0, 57.0], [176.0, 56.5], [187.0, 1005.5609756097562], [188.0, 699.8333333333334], [191.0, 53.0], [189.0, 54.0], [186.0, 55.5], [197.0, 1246.0], [199.0, 663.5], [194.0, 53.0], [193.0, 53.0], [206.0, 58.0], [205.0, 61.0], [204.0, 60.75], [203.0, 56.0], [202.0, 51.0], [200.0, 51.0], [213.0, 56.0], [212.0, 58.5], [210.0, 57.0], [208.0, 57.0], [223.0, 53.0], [219.0, 55.666666666666664], [218.0, 54.0], [216.0, 58.0], [228.0, 51.0], [225.0, 55.679999999999986], [234.0, 1281.0], [235.0, 644.4468085106383], [236.0, 1289.75641025641], [239.0, 878.11320754717], [242.0, 550.2941176470587], [244.0, 429.19999999999993], [245.0, 453.99999999999994], [246.0, 437.62500000000006], [247.0, 360.28571428571433], [248.0, 442.6326530612245], [249.0, 414.25], [251.0, 405.1333333333333], [252.0, 429.125], [253.0, 434.64406779661016], [254.0, 331.25000000000006], [255.0, 48.375], [250.0, 47.833333333333336], [263.0, 344.2857142857143], [258.0, 346.1428571428571], [257.0, 51.2], [256.0, 51.666666666666664], [259.0, 52.5], [269.0, 55.33333333333334], [268.0, 56.0], [260.0, 307.28571428571433], [261.0, 362.38709677419354], [262.0, 362.2], [266.0, 418.56944444444434], [267.0, 362.01149425287355], [270.0, 360.6666666666667], [271.0, 289.91304347826093], [264.0, 52.28571428571429], [272.0, 125.4], [273.0, 311.1754385964912], [275.0, 57.0], [274.0, 58.0], [284.0, 117.83333333333331], [286.0, 181.0], [276.0, 283.0833333333333], [277.0, 290.2], [278.0, 365.47999999999996], [279.0, 378.10810810810807], [280.0, 361.0], [281.0, 262.20000000000005], [282.0, 201.33333333333334], [283.0, 80.18918918918918], [289.0, 158.41129032258058], [288.0, 363.1470588235293], [290.0, 331.42307692307685], [294.0, 136.22222222222223], [293.0, 107.35714285714286], [292.0, 104.125], [295.0, 121.22222222222224], [296.0, 444.70000000000005], [297.0, 217.4473684210526], [300.0, 107.85952977293375], [291.0, 99.45762711864406], [299.0, 135.69230769230774], [298.0, 130.78571428571428], [1.0, 3.375]], "isOverall": false, "label": "AuthzUser-http2", "isController": false}, {"data": [[298.9510401042132, 107.69380010426501]], "isOverall": false, "label": "AuthzUser-http2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.6338747E12, "maxY": 2.26359375E7, "series": [{"data": [[1.63387518E12, 2.15682456E7], [1.63387548E12, 2.18577222E7], [1.63387482E12, 2.22540075E7], [1.63387512E12, 2.23438269E7], [1.63387542E12, 2.26354107E7], [1.63387476E12, 2.26359375E7], [1.63387506E12, 2.20152354E7], [1.63387536E12, 2.22914103E7], [1.6338747E12, 1.3063323E7], [1.633875E12, 2.17698783E7], [1.6338753E12, 2.22825864E7], [1.6338756E12, 5249957.1], [1.63387494E12, 2.21773581E7], [1.63387524E12, 2.25487521E7], [1.63387554E12, 2.23321056E7], [1.63387488E12, 2.21469354E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63387518E12, 0.0], [1.63387548E12, 0.0], [1.63387482E12, 0.0], [1.63387512E12, 0.0], [1.63387542E12, 0.0], [1.63387476E12, 0.0], [1.63387506E12, 0.0], [1.63387536E12, 0.0], [1.6338747E12, 0.0], [1.633875E12, 0.0], [1.6338753E12, 0.0], [1.6338756E12, 0.0], [1.63387494E12, 0.0], [1.63387524E12, 0.0], [1.63387554E12, 0.0], [1.63387488E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6338756E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 87.85964428166491, "minX": 1.6338747E12, "maxY": 141.06038915213267, "series": [{"data": [[1.63387518E12, 109.72236944946603], [1.63387548E12, 108.3275369654026], [1.63387482E12, 106.42734132267877], [1.63387512E12, 105.95580494762915], [1.63387542E12, 104.65429304536559], [1.63387476E12, 104.60409600000166], [1.63387506E12, 107.51874229788997], [1.63387536E12, 106.21009813363091], [1.6338747E12, 141.06038915213267], [1.633875E12, 108.74430577317507], [1.6338753E12, 106.26219324790672], [1.6338756E12, 87.85964428166491], [1.63387494E12, 106.71861063108268], [1.63387524E12, 105.01578735259534], [1.63387554E12, 105.95894862238181], [1.63387488E12, 106.93141137712571]], "isOverall": false, "label": "AuthzUser-http2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6338756E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 87.75691744223934, "minX": 1.6338747E12, "maxY": 140.91458816412927, "series": [{"data": [[1.63387518E12, 109.61937008451054], [1.63387548E12, 108.21867129412055], [1.63387482E12, 106.32926172510727], [1.63387512E12, 105.85613325710077], [1.63387542E12, 104.55421798907443], [1.63387476E12, 104.50998109091034], [1.63387506E12, 107.41298261566774], [1.63387536E12, 106.11179316904672], [1.6338747E12, 140.91458816412927], [1.633875E12, 108.63925371599525], [1.6338753E12, 106.15610667170988], [1.6338756E12, 87.75691744223934], [1.63387494E12, 106.61792354789029], [1.63387524E12, 104.90619287086837], [1.63387554E12, 105.85709567843098], [1.63387488E12, 106.83093683471796]], "isOverall": false, "label": "AuthzUser-http2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6338756E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.964576288015514E-4, "minX": 1.6338747E12, "maxY": 3.9269180360923297, "series": [{"data": [[1.63387518E12, 6.716818914562041E-4], [1.63387548E12, 6.08558379427109E-4], [1.63387482E12, 5.97721556443247E-4], [1.63387512E12, 5.717418084724101E-4], [1.63387542E12, 6.341965776658221E-4], [1.63387476E12, 5.469090909090827E-4], [1.63387506E12, 6.161687464854611E-4], [1.63387536E12, 6.203510596186892E-4], [1.6338747E12, 3.9269180360923297], [1.633875E12, 6.352125542199296E-4], [1.6338753E12, 5.733131590146157E-4], [1.6338756E12, 5.017183854702346E-4], [1.63387494E12, 6.17602869477952E-4], [1.63387524E12, 4.964576288015514E-4], [1.63387554E12, 6.428099641441759E-4], [1.63387488E12, 5.470914951059124E-4]], "isOverall": false, "label": "AuthzUser-http2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6338756E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.6338747E12, "maxY": 1707.0, "series": [{"data": [[1.63387518E12, 205.0], [1.63387548E12, 243.0], [1.63387482E12, 224.0], [1.63387512E12, 217.0], [1.63387542E12, 183.0], [1.63387476E12, 197.0], [1.63387506E12, 230.0], [1.63387536E12, 271.0], [1.6338747E12, 1707.0], [1.633875E12, 207.0], [1.6338753E12, 193.0], [1.6338756E12, 292.0], [1.63387494E12, 197.0], [1.63387524E12, 324.0], [1.63387554E12, 229.0], [1.63387488E12, 220.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63387518E12, 162.0], [1.63387548E12, 155.0], [1.63387482E12, 143.0], [1.63387512E12, 157.0], [1.63387542E12, 140.0], [1.63387476E12, 143.0], [1.63387506E12, 171.0], [1.63387536E12, 141.0], [1.6338747E12, 335.0], [1.633875E12, 145.0], [1.6338753E12, 158.0], [1.6338756E12, 162.0], [1.63387494E12, 145.0], [1.63387524E12, 144.0], [1.63387554E12, 148.0], [1.63387488E12, 135.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63387518E12, 174.99947273254293], [1.63387548E12, 171.99947273254293], [1.63387482E12, 165.0], [1.63387512E12, 173.0], [1.63387542E12, 156.99947273254293], [1.63387476E12, 156.99947273254293], [1.63387506E12, 190.0], [1.63387536E12, 150.0], [1.6338747E12, 419.0], [1.633875E12, 165.0], [1.6338753E12, 182.0], [1.6338756E12, 286.9978909301717], [1.63387494E12, 163.99894546508585], [1.63387524E12, 157.0], [1.63387554E12, 159.99947273254293], [1.63387488E12, 156.99947273254293]], "isOverall": false, "label": "99.99th percentile", "isController": false}, {"data": [[1.63387518E12, 169.0], [1.63387548E12, 166.0], [1.63387482E12, 162.0], [1.63387512E12, 166.0], [1.63387542E12, 150.0], [1.63387476E12, 153.0], [1.63387506E12, 181.0], [1.63387536E12, 147.0], [1.6338747E12, 412.0], [1.633875E12, 157.99930519103873], [1.6338753E12, 180.0], [1.6338756E12, 173.99930519103873], [1.63387494E12, 157.99930519103873], [1.63387524E12, 153.0], [1.63387554E12, 156.0], [1.63387488E12, 149.99930519103873]], "isOverall": false, "label": "99.9th percentile", "isController": false}, {"data": [[1.63387518E12, 12.0], [1.63387548E12, 28.0], [1.63387482E12, 6.0], [1.63387512E12, 10.0], [1.63387542E12, 40.0], [1.63387476E12, 33.0], [1.63387506E12, 13.0], [1.63387536E12, 38.0], [1.6338747E12, 7.0], [1.633875E12, 5.0], [1.6338753E12, 8.0], [1.6338756E12, 2.0], [1.63387494E12, 26.0], [1.63387524E12, 39.0], [1.63387554E12, 6.0], [1.63387488E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63387518E12, 111.0], [1.63387548E12, 105.0], [1.63387482E12, 109.0], [1.63387512E12, 101.0], [1.63387542E12, 101.0], [1.63387476E12, 99.0], [1.63387506E12, 111.0], [1.63387536E12, 102.0], [1.6338747E12, 107.0], [1.633875E12, 106.0], [1.6338753E12, 108.0], [1.6338756E12, 47.0], [1.63387494E12, 107.0], [1.63387524E12, 102.0], [1.63387554E12, 104.0], [1.63387488E12, 100.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6338756E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 57.0, "maxY": 1010.0, "series": [{"data": [[57.0, 1010.0], [301.0, 376.0], [372.0, 463.0], [493.0, 9.0], [501.0, 362.0], [786.0, 279.5], [1252.0, 232.0], [1288.0, 239.0], [1280.0, 232.0], [1404.0, 200.0], [1358.0, 213.0], [1549.0, 192.0], [1574.0, 200.0], [1561.0, 185.0], [1536.0, 190.5], [1695.0, 182.0], [1852.0, 76.5], [1836.0, 162.0], [1825.0, 160.0], [1794.0, 165.0], [1807.0, 178.0], [1923.0, 157.0], [1941.0, 162.0], [1931.0, 154.0], [2102.0, 143.0], [2050.0, 113.0], [2078.0, 142.0], [2258.0, 121.0], [2210.0, 138.0], [2406.0, 122.0], [2340.0, 117.0], [2322.0, 133.0], [2376.0, 128.0], [2430.0, 122.0], [2328.0, 127.0], [2338.0, 128.0], [2356.0, 124.0], [2458.0, 123.0], [2540.0, 117.0], [2538.0, 115.0], [2534.0, 114.0], [2532.0, 118.0], [2528.0, 117.0], [2530.0, 113.0], [2442.0, 120.0], [2490.0, 119.0], [2478.0, 121.0], [2484.0, 119.0], [2488.0, 125.0], [2474.0, 110.0], [2470.0, 116.0], [2514.0, 116.0], [2524.0, 120.0], [2510.0, 114.0], [2508.0, 103.0], [2556.0, 107.0], [2504.0, 116.0], [2496.0, 120.0], [2558.0, 114.0], [2544.0, 117.0], [2542.0, 104.0], [2546.0, 118.0], [2550.0, 114.0], [2666.0, 109.0], [2662.0, 113.0], [2612.0, 113.0], [2680.0, 112.0], [2682.0, 111.0], [2664.0, 114.0], [2670.0, 113.0], [2678.0, 104.0], [2676.0, 106.0], [2672.0, 109.0], [2660.0, 111.0], [2610.0, 110.0], [2600.0, 112.0], [2592.0, 108.0], [2596.0, 117.0], [2630.0, 113.0], [2636.0, 113.0], [2634.0, 121.0], [2628.0, 105.0], [2624.0, 110.0], [2652.0, 115.0], [2650.0, 116.0], [2648.0, 110.0], [2646.0, 110.0], [2644.0, 118.0], [2638.0, 23.0], [2574.0, 116.0], [2572.0, 115.0], [2578.0, 113.0], [2584.0, 115.0], [2566.0, 115.0], [2622.0, 114.0], [2620.0, 112.0], [2614.0, 112.0], [2562.0, 114.0], [2806.0, 107.0], [2704.0, 109.0], [2702.0, 110.0], [2780.0, 110.0], [2782.0, 108.0], [2774.0, 107.0], [2746.0, 110.0], [2742.0, 112.0], [2744.0, 104.0], [2750.0, 105.0], [2748.0, 107.0], [2688.0, 112.0], [2690.0, 104.0], [2700.0, 115.0], [2758.0, 108.0], [2764.0, 109.0], [2760.0, 108.0], [2756.0, 111.0], [2752.0, 110.0], [2766.0, 111.0], [2808.0, 106.0], [2810.0, 105.0], [2712.0, 111.0], [2718.0, 110.0], [2716.0, 106.0], [2706.0, 112.0], [2708.0, 109.0], [2784.0, 105.0], [2786.0, 108.0], [2790.0, 106.0], [2788.0, 105.0], [2792.0, 106.0], [2796.0, 104.0], [2800.0, 99.5], [2802.0, 108.0], [2804.0, 105.0], [2798.0, 105.0], [2814.0, 104.0], [2812.0, 103.0], [2732.0, 107.0], [2734.0, 111.0], [2736.0, 111.0], [2738.0, 108.0], [2722.0, 107.0], [2720.0, 112.0], [2728.0, 111.0], [2726.0, 108.0], [2772.0, 106.0], [2768.0, 106.0], [2770.0, 105.0], [2886.0, 104.0], [2912.0, 103.0], [2860.0, 102.0], [2906.0, 102.0], [2910.0, 100.0], [2898.0, 104.0], [2896.0, 101.0], [2894.0, 102.0], [2892.0, 102.0], [2890.0, 100.0], [2888.0, 103.0], [2882.0, 104.0], [2884.0, 100.0], [2902.0, 101.0], [2904.0, 102.0], [2900.0, 102.0], [2880.0, 103.0], [2852.0, 106.0], [2848.0, 104.0], [2926.0, 102.0], [2924.0, 100.0], [2922.0, 102.0], [2920.0, 100.0], [2918.0, 100.0], [2914.0, 101.0], [2930.0, 103.0], [2928.0, 101.0], [2854.0, 103.0], [2856.0, 103.0], [2858.0, 105.0], [2846.0, 102.0], [2834.0, 104.0], [2836.0, 109.0], [2838.0, 107.0], [2842.0, 105.0], [2832.0, 104.0], [2830.0, 105.0], [2826.0, 104.0], [2824.0, 107.0], [2818.0, 105.0], [2816.0, 103.0], [2822.0, 105.0], [2820.0, 103.0], [2878.0, 103.0], [2874.0, 103.0], [2876.0, 104.0], [2870.0, 99.0], [2868.0, 102.0], [2866.0, 103.0], [2864.0, 104.0], [2942.0, 101.0], [2936.0, 100.0], [2938.0, 101.0], [2940.0, 101.0], [2934.0, 101.0], [2964.0, 100.0], [3020.0, 97.0], [3022.0, 100.0], [3024.0, 98.0], [3026.0, 98.0], [3028.0, 99.0], [3016.0, 102.0], [3036.0, 98.0], [3038.0, 97.0], [3032.0, 99.0], [2954.0, 101.0], [2962.0, 99.0], [2960.0, 106.0], [2958.0, 100.0], [2956.0, 101.0], [3012.0, 98.0], [3014.0, 99.0], [2990.0, 100.0], [2992.0, 99.0], [2996.0, 98.0], [2998.0, 100.0], [3000.0, 98.0], [3002.0, 99.0], [3004.0, 99.0], [3006.0, 99.0], [2988.0, 99.0], [2978.0, 101.0], [2980.0, 100.0], [2976.0, 99.0], [2986.0, 100.0], [2984.0, 100.0], [2982.0, 102.0], [3008.0, 100.0], [3010.0, 98.0], [3054.0, 93.0], [3060.0, 96.0], [3046.0, 102.0], [2974.0, 99.0], [2972.0, 104.0], [2968.0, 99.0], [2970.0, 101.0], [3044.0, 97.0], [3042.0, 98.0], [2944.0, 101.0], [2946.0, 101.0], [2950.0, 100.0], [2952.0, 101.0], [3090.0, 98.0], [3136.0, 96.0], [3114.0, 94.0], [3092.0, 96.0], [3080.0, 92.0], [3120.0, 93.0], [3076.0, 98.0], [2137.0, 136.0], [2295.0, 136.0], [2245.0, 132.0], [2405.0, 121.0], [2361.0, 122.0], [2357.0, 124.0], [2411.0, 126.0], [2423.0, 124.0], [2417.0, 122.0], [2313.0, 131.0], [2409.0, 121.0], [2397.0, 127.0], [2383.0, 124.0], [2317.0, 131.0], [2401.0, 121.0], [2439.0, 119.0], [2475.0, 114.0], [2487.0, 111.0], [2533.0, 116.0], [2535.0, 119.0], [2441.0, 123.0], [2443.0, 126.0], [2489.0, 113.0], [2449.0, 120.0], [2447.0, 116.0], [2479.0, 124.0], [2517.0, 118.0], [2521.0, 121.0], [2527.0, 118.0], [2519.0, 119.0], [2551.0, 117.0], [2507.0, 121.0], [2515.0, 117.0], [2499.0, 119.0], [2497.0, 121.0], [2553.0, 119.0], [2503.0, 119.0], [2545.0, 116.0], [2543.0, 117.0], [2465.0, 118.0], [2467.0, 119.0], [2589.0, 112.0], [2615.0, 110.0], [2613.0, 109.0], [2611.0, 113.0], [2679.0, 110.0], [2669.0, 113.0], [2673.0, 110.0], [2675.0, 109.0], [2671.0, 108.0], [2591.0, 115.0], [2659.0, 116.0], [2661.0, 110.0], [2667.0, 110.0], [2665.0, 110.0], [2595.0, 108.0], [2603.0, 115.0], [2605.0, 117.0], [2647.0, 111.0], [2645.0, 116.0], [2631.0, 111.0], [2635.0, 108.0], [2633.0, 113.0], [2641.0, 81.5], [2651.0, 108.0], [2653.0, 116.0], [2687.0, 113.0], [2625.0, 113.0], [2629.0, 111.0], [2627.0, 112.0], [2683.0, 109.0], [2681.0, 107.0], [2585.0, 114.0], [2583.0, 114.0], [2581.0, 116.0], [2571.0, 116.0], [2577.0, 109.0], [2567.0, 120.0], [2623.0, 113.0], [2563.0, 114.0], [2621.0, 112.0], [2617.0, 116.0], [2699.0, 113.0], [2765.0, 105.0], [2779.0, 106.0], [2781.0, 105.0], [2775.0, 108.0], [2777.0, 106.0], [2743.0, 108.0], [2745.0, 106.0], [2747.0, 107.0], [2749.0, 108.0], [2693.0, 110.0], [2689.0, 111.0], [2697.0, 110.0], [2695.0, 112.0], [2763.0, 108.0], [2757.0, 105.0], [2761.0, 111.0], [2815.0, 105.0], [2753.0, 109.0], [2767.0, 109.0], [2771.0, 109.0], [2769.0, 111.0], [2813.0, 103.0], [2809.0, 107.0], [2797.0, 107.0], [2717.0, 111.0], [2715.0, 104.0], [2713.0, 105.0], [2707.0, 107.0], [2705.0, 106.0], [2703.0, 111.0], [2719.0, 109.0], [2787.0, 106.0], [2791.0, 104.0], [2795.0, 107.0], [2793.0, 107.0], [2801.0, 105.0], [2799.0, 104.0], [2805.0, 102.0], [2803.0, 101.0], [2741.0, 108.0], [2735.0, 109.0], [2727.0, 110.0], [2737.0, 110.0], [2725.0, 109.0], [2723.0, 108.0], [2887.0, 102.0], [2909.0, 102.0], [2907.0, 102.0], [2905.0, 102.0], [2903.0, 102.0], [2901.0, 99.0], [2897.0, 103.0], [2895.0, 106.0], [2893.0, 101.0], [2889.0, 102.0], [2891.0, 101.0], [2885.0, 102.0], [2883.0, 102.0], [2851.0, 105.0], [2849.0, 104.0], [2929.0, 102.0], [2931.0, 100.0], [2927.0, 101.0], [2915.0, 101.0], [2913.0, 99.0], [2847.0, 106.0], [2921.0, 101.0], [2923.0, 101.0], [2919.0, 101.0], [2917.0, 102.0], [2933.0, 101.0], [2853.0, 104.0], [2855.0, 108.0], [2859.0, 103.0], [2857.0, 102.0], [2825.0, 106.0], [2845.0, 104.0], [2839.0, 106.0], [2835.0, 102.0], [2841.0, 108.0], [2843.0, 102.0], [2829.0, 105.0], [2833.0, 103.0], [2831.0, 103.0], [2819.0, 104.0], [2879.0, 103.0], [2817.0, 102.0], [2877.0, 103.0], [2823.0, 105.0], [2875.0, 105.0], [2871.0, 104.0], [2867.0, 102.0], [2865.0, 103.0], [2861.0, 102.0], [2863.0, 104.0], [2873.0, 101.0], [2941.0, 97.0], [2881.0, 106.0], [2937.0, 102.0], [2935.0, 101.0], [2939.0, 100.0], [2957.0, 101.0], [2967.0, 98.0], [3017.0, 98.0], [3025.0, 98.0], [3023.0, 99.0], [3031.0, 98.0], [3039.0, 95.0], [3033.0, 98.0], [3037.0, 96.0], [2955.0, 100.0], [2963.0, 100.0], [2959.0, 102.0], [2961.0, 100.0], [2965.0, 100.0], [2993.0, 101.0], [2991.0, 101.0], [2995.0, 97.0], [2997.0, 100.0], [3001.0, 102.0], [2999.0, 100.0], [3003.0, 98.0], [3005.0, 99.0], [2989.0, 100.0], [2987.0, 100.0], [2983.0, 99.0], [2985.0, 100.0], [2981.0, 100.0], [2979.0, 100.0], [2977.0, 100.0], [3059.0, 97.0], [3065.0, 97.0], [3009.0, 94.0], [3015.0, 101.0], [3051.0, 99.0], [3047.0, 98.0], [3045.0, 99.0], [2973.0, 99.0], [2971.0, 101.0], [3043.0, 97.0], [3041.0, 100.0], [2975.0, 99.0], [2953.0, 100.0], [2949.0, 99.0], [2951.0, 101.0], [2945.0, 101.0], [2947.0, 101.0], [3087.0, 96.0], [3079.0, 98.0], [3075.0, 97.0], [3159.0, 96.0], [3155.0, 93.0], [3121.0, 96.0], [3111.0, 97.0], [3099.0, 100.0], [3089.0, 97.0], [3093.0, 97.0], [3179.0, 94.0], [3083.0, 93.0], [3081.0, 96.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3179.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 57.0, "maxY": 1009.0, "series": [{"data": [[57.0, 1009.0], [301.0, 376.0], [372.0, 462.0], [493.0, 9.0], [501.0, 361.0], [786.0, 279.5], [1252.0, 232.0], [1288.0, 238.0], [1280.0, 232.0], [1404.0, 200.0], [1358.0, 213.0], [1549.0, 192.0], [1574.0, 200.0], [1561.0, 185.0], [1536.0, 190.0], [1695.0, 182.0], [1852.0, 76.5], [1836.0, 161.0], [1825.0, 160.0], [1794.0, 164.5], [1807.0, 178.0], [1923.0, 157.0], [1941.0, 162.0], [1931.0, 154.0], [2102.0, 143.0], [2050.0, 113.0], [2078.0, 142.0], [2258.0, 121.0], [2210.0, 138.0], [2406.0, 121.5], [2340.0, 117.0], [2322.0, 133.0], [2376.0, 128.0], [2430.0, 122.0], [2328.0, 127.0], [2338.0, 128.0], [2356.0, 123.0], [2458.0, 123.0], [2540.0, 117.0], [2538.0, 115.0], [2534.0, 114.0], [2532.0, 118.0], [2528.0, 117.0], [2530.0, 113.0], [2442.0, 120.0], [2490.0, 119.0], [2478.0, 121.0], [2484.0, 119.0], [2488.0, 125.0], [2474.0, 110.0], [2470.0, 116.0], [2514.0, 116.0], [2524.0, 120.0], [2510.0, 114.0], [2508.0, 103.0], [2556.0, 107.0], [2504.0, 116.0], [2496.0, 120.0], [2558.0, 114.0], [2544.0, 117.0], [2542.0, 104.0], [2546.0, 117.0], [2550.0, 114.0], [2666.0, 109.0], [2662.0, 113.0], [2612.0, 113.0], [2680.0, 112.0], [2682.0, 111.0], [2664.0, 114.0], [2670.0, 112.0], [2678.0, 104.0], [2676.0, 106.0], [2672.0, 109.0], [2660.0, 111.0], [2610.0, 110.0], [2600.0, 112.0], [2592.0, 108.0], [2596.0, 117.0], [2630.0, 113.0], [2636.0, 113.0], [2634.0, 121.0], [2628.0, 105.0], [2624.0, 110.0], [2652.0, 115.0], [2650.0, 116.0], [2648.0, 110.0], [2646.0, 110.0], [2644.0, 118.0], [2638.0, 23.0], [2574.0, 116.0], [2572.0, 114.5], [2578.0, 113.0], [2584.0, 114.0], [2566.0, 115.0], [2622.0, 114.0], [2620.0, 112.0], [2614.0, 112.0], [2562.0, 114.0], [2806.0, 107.0], [2704.0, 109.0], [2702.0, 110.0], [2780.0, 110.0], [2782.0, 108.0], [2774.0, 107.0], [2746.0, 110.0], [2742.0, 112.0], [2744.0, 104.0], [2750.0, 105.0], [2748.0, 107.0], [2688.0, 112.0], [2690.0, 104.0], [2700.0, 115.0], [2758.0, 108.0], [2764.0, 109.0], [2760.0, 108.0], [2756.0, 111.0], [2752.0, 110.0], [2766.0, 111.0], [2808.0, 106.0], [2810.0, 105.0], [2712.0, 111.0], [2718.0, 109.0], [2716.0, 106.0], [2706.0, 111.0], [2708.0, 109.0], [2784.0, 105.0], [2786.0, 108.0], [2790.0, 106.0], [2788.0, 105.0], [2792.0, 106.0], [2796.0, 103.0], [2800.0, 99.0], [2802.0, 108.0], [2804.0, 105.0], [2798.0, 105.0], [2814.0, 104.0], [2812.0, 103.0], [2732.0, 107.0], [2734.0, 111.0], [2736.0, 111.0], [2738.0, 108.0], [2722.0, 107.0], [2720.0, 112.0], [2728.0, 111.0], [2726.0, 107.0], [2772.0, 106.0], [2768.0, 106.0], [2770.0, 105.0], [2886.0, 104.0], [2912.0, 103.0], [2860.0, 102.0], [2906.0, 102.0], [2910.0, 100.0], [2898.0, 103.0], [2896.0, 101.0], [2894.0, 102.0], [2892.0, 102.0], [2890.0, 100.0], [2888.0, 103.0], [2882.0, 104.0], [2884.0, 100.0], [2902.0, 101.0], [2904.0, 102.0], [2900.0, 102.0], [2880.0, 103.0], [2852.0, 106.0], [2848.0, 104.0], [2926.0, 101.0], [2924.0, 100.0], [2922.0, 102.0], [2920.0, 100.0], [2918.0, 100.0], [2914.0, 101.0], [2930.0, 103.0], [2928.0, 101.0], [2854.0, 103.0], [2856.0, 103.0], [2858.0, 105.0], [2846.0, 102.0], [2834.0, 104.0], [2836.0, 109.0], [2838.0, 107.0], [2842.0, 105.0], [2832.0, 104.0], [2830.0, 105.0], [2826.0, 104.0], [2824.0, 106.5], [2818.0, 104.0], [2816.0, 103.0], [2822.0, 105.0], [2820.0, 103.0], [2878.0, 103.0], [2874.0, 103.0], [2876.0, 103.0], [2870.0, 99.0], [2868.0, 102.0], [2866.0, 103.0], [2864.0, 104.0], [2942.0, 101.0], [2936.0, 100.0], [2938.0, 101.0], [2940.0, 101.0], [2934.0, 101.0], [2964.0, 100.0], [3020.0, 97.0], [3022.0, 100.0], [3024.0, 98.0], [3026.0, 98.0], [3028.0, 99.0], [3016.0, 102.0], [3036.0, 97.0], [3038.0, 97.0], [3032.0, 99.0], [2954.0, 101.0], [2962.0, 99.0], [2960.0, 106.0], [2958.0, 100.0], [2956.0, 101.0], [3012.0, 97.0], [3014.0, 99.0], [2990.0, 99.0], [2992.0, 99.0], [2996.0, 97.0], [2998.0, 100.0], [3000.0, 98.0], [3002.0, 99.0], [3004.0, 99.0], [3006.0, 99.0], [2988.0, 99.0], [2978.0, 101.0], [2980.0, 100.0], [2976.0, 98.0], [2986.0, 100.0], [2984.0, 100.0], [2982.0, 102.0], [3008.0, 99.0], [3010.0, 98.0], [3054.0, 93.0], [3060.0, 96.0], [3046.0, 102.0], [2974.0, 98.0], [2972.0, 104.0], [2968.0, 99.0], [2970.0, 101.0], [3044.0, 97.0], [3042.0, 98.0], [2944.0, 101.0], [2946.0, 101.0], [2950.0, 100.0], [2952.0, 101.0], [3090.0, 98.0], [3136.0, 95.0], [3114.0, 94.0], [3092.0, 96.0], [3080.0, 92.0], [3120.0, 93.0], [3076.0, 98.0], [2137.0, 136.0], [2295.0, 135.0], [2245.0, 132.0], [2405.0, 121.0], [2361.0, 122.0], [2357.0, 124.0], [2411.0, 126.0], [2423.0, 124.0], [2417.0, 122.0], [2313.0, 131.0], [2409.0, 121.0], [2397.0, 127.0], [2383.0, 123.0], [2317.0, 131.0], [2401.0, 121.0], [2439.0, 119.0], [2475.0, 114.0], [2487.0, 111.0], [2533.0, 116.0], [2535.0, 119.0], [2441.0, 122.0], [2443.0, 126.0], [2489.0, 113.0], [2449.0, 120.0], [2447.0, 116.0], [2479.0, 124.0], [2517.0, 118.0], [2521.0, 121.0], [2527.0, 118.0], [2519.0, 118.0], [2551.0, 117.0], [2507.0, 120.0], [2515.0, 117.0], [2499.0, 119.0], [2497.0, 121.0], [2553.0, 119.0], [2503.0, 119.0], [2545.0, 116.0], [2543.0, 117.0], [2465.0, 118.0], [2467.0, 119.0], [2589.0, 112.0], [2615.0, 110.0], [2613.0, 109.0], [2611.0, 113.0], [2679.0, 110.0], [2669.0, 113.0], [2673.0, 109.0], [2675.0, 108.0], [2671.0, 108.0], [2591.0, 115.0], [2659.0, 116.0], [2661.0, 110.0], [2667.0, 110.0], [2665.0, 110.0], [2595.0, 107.0], [2603.0, 115.0], [2605.0, 117.0], [2647.0, 111.0], [2645.0, 116.0], [2631.0, 111.0], [2635.0, 108.0], [2633.0, 113.0], [2641.0, 81.5], [2651.0, 108.0], [2653.0, 116.0], [2687.0, 113.0], [2625.0, 113.0], [2629.0, 111.0], [2627.0, 112.0], [2683.0, 108.0], [2681.0, 107.0], [2585.0, 114.0], [2583.0, 114.0], [2581.0, 116.0], [2571.0, 116.0], [2577.0, 109.0], [2567.0, 119.0], [2623.0, 113.0], [2563.0, 114.0], [2621.0, 112.0], [2617.0, 116.0], [2699.0, 113.0], [2765.0, 105.0], [2779.0, 106.0], [2781.0, 105.0], [2775.0, 107.0], [2777.0, 106.0], [2743.0, 108.0], [2745.0, 106.0], [2747.0, 106.0], [2749.0, 108.0], [2693.0, 110.0], [2689.0, 111.0], [2697.0, 110.0], [2695.0, 112.0], [2763.0, 108.0], [2757.0, 105.0], [2761.0, 111.0], [2815.0, 105.0], [2753.0, 109.0], [2767.0, 109.0], [2771.0, 109.0], [2769.0, 111.0], [2813.0, 103.0], [2809.0, 107.0], [2797.0, 107.0], [2717.0, 111.0], [2715.0, 104.0], [2713.0, 105.0], [2707.0, 107.0], [2705.0, 106.0], [2703.0, 111.0], [2719.0, 109.0], [2787.0, 106.0], [2791.0, 104.0], [2795.0, 107.0], [2793.0, 107.0], [2801.0, 105.0], [2799.0, 104.0], [2805.0, 102.0], [2803.0, 101.0], [2741.0, 108.0], [2735.0, 109.0], [2727.0, 110.0], [2737.0, 110.0], [2725.0, 109.0], [2723.0, 108.0], [2887.0, 102.0], [2909.0, 102.0], [2907.0, 102.0], [2905.0, 102.0], [2903.0, 102.0], [2901.0, 99.0], [2897.0, 103.0], [2895.0, 106.0], [2893.0, 101.0], [2889.0, 102.0], [2891.0, 101.0], [2885.0, 101.0], [2883.0, 102.0], [2851.0, 105.0], [2849.0, 104.0], [2929.0, 101.0], [2931.0, 100.0], [2927.0, 101.0], [2915.0, 101.0], [2913.0, 99.0], [2847.0, 106.0], [2921.0, 101.0], [2923.0, 101.0], [2919.0, 101.0], [2917.0, 102.0], [2933.0, 101.0], [2853.0, 104.0], [2855.0, 108.0], [2859.0, 103.0], [2857.0, 102.0], [2825.0, 106.0], [2845.0, 104.0], [2839.0, 106.0], [2835.0, 102.0], [2841.0, 108.0], [2843.0, 102.0], [2829.0, 105.0], [2833.0, 103.0], [2831.0, 103.0], [2819.0, 104.0], [2879.0, 103.0], [2817.0, 102.0], [2877.0, 103.0], [2823.0, 105.0], [2875.0, 105.0], [2871.0, 104.0], [2867.0, 102.0], [2865.0, 102.0], [2861.0, 102.0], [2863.0, 104.0], [2873.0, 101.0], [2941.0, 96.0], [2881.0, 106.0], [2937.0, 102.0], [2935.0, 101.0], [2939.0, 100.0], [2957.0, 100.0], [2967.0, 98.0], [3017.0, 98.0], [3025.0, 98.0], [3023.0, 98.0], [3031.0, 98.0], [3039.0, 95.0], [3033.0, 97.0], [3037.0, 96.0], [2955.0, 100.0], [2963.0, 100.0], [2959.0, 102.0], [2961.0, 100.0], [2965.0, 100.0], [2993.0, 101.0], [2991.0, 101.0], [2995.0, 97.0], [2997.0, 100.0], [3001.0, 102.0], [2999.0, 99.0], [3003.0, 98.0], [3005.0, 99.0], [2989.0, 100.0], [2987.0, 99.0], [2983.0, 99.0], [2985.0, 100.0], [2981.0, 100.0], [2979.0, 100.0], [2977.0, 99.0], [3059.0, 97.0], [3065.0, 97.0], [3009.0, 94.0], [3015.0, 101.0], [3051.0, 99.0], [3047.0, 98.0], [3045.0, 99.0], [2973.0, 99.0], [2971.0, 100.0], [3043.0, 97.0], [3041.0, 100.0], [2975.0, 99.0], [2953.0, 100.0], [2949.0, 98.0], [2951.0, 101.0], [2945.0, 101.0], [2947.0, 101.0], [3087.0, 96.0], [3079.0, 98.0], [3075.0, 97.0], [3159.0, 96.0], [3155.0, 93.0], [3121.0, 95.0], [3111.0, 97.0], [3099.0, 100.0], [3089.0, 97.0], [3093.0, 97.0], [3179.0, 94.0], [3083.0, 93.0], [3081.0, 96.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3179.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 659.4, "minX": 1.6338747E12, "maxY": 2864.5666666666666, "series": [{"data": [[1.63387518E12, 2729.4666666666667], [1.63387548E12, 2766.1], [1.63387482E12, 2816.266666666667], [1.63387512E12, 2827.616666666667], [1.63387542E12, 2864.516666666667], [1.63387476E12, 2864.5666666666666], [1.63387506E12, 2786.0333333333333], [1.63387536E12, 2820.983333333333], [1.6338747E12, 1658.1666666666667], [1.633875E12, 2754.983333333333], [1.6338753E12, 2819.866666666667], [1.6338756E12, 659.4], [1.63387494E12, 2806.55], [1.63387524E12, 2853.55], [1.63387554E12, 2826.116666666667], [1.63387488E12, 2802.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6338756E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 664.3833333333333, "minX": 1.6338747E12, "maxY": 2864.5833333333335, "series": [{"data": [[1.63387518E12, 2729.4666666666667], [1.63387548E12, 2766.1], [1.63387482E12, 2816.25], [1.63387512E12, 2827.616666666667], [1.63387542E12, 2864.516666666667], [1.63387476E12, 2864.5833333333335], [1.63387506E12, 2786.0333333333333], [1.63387536E12, 2820.983333333333], [1.6338747E12, 1653.1666666666667], [1.633875E12, 2754.983333333333], [1.6338753E12, 2819.866666666667], [1.6338756E12, 664.3833333333333], [1.63387494E12, 2806.55], [1.63387524E12, 2853.55], [1.63387554E12, 2826.133333333333], [1.63387488E12, 2802.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6338756E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 664.3833333333333, "minX": 1.6338747E12, "maxY": 2864.5833333333335, "series": [{"data": [[1.63387518E12, 2729.4666666666667], [1.63387548E12, 2766.1], [1.63387482E12, 2816.25], [1.63387512E12, 2827.616666666667], [1.63387542E12, 2864.516666666667], [1.63387476E12, 2864.5833333333335], [1.63387506E12, 2786.0333333333333], [1.63387536E12, 2820.983333333333], [1.6338747E12, 1653.1666666666667], [1.633875E12, 2754.983333333333], [1.6338753E12, 2819.866666666667], [1.6338756E12, 664.3833333333333], [1.63387494E12, 2806.55], [1.63387524E12, 2853.55], [1.63387554E12, 2826.133333333333], [1.63387488E12, 2802.7]], "isOverall": false, "label": "AuthzUser-http2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6338756E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 664.3833333333333, "minX": 1.6338747E12, "maxY": 2864.5833333333335, "series": [{"data": [[1.63387518E12, 2729.4666666666667], [1.63387548E12, 2766.1], [1.63387482E12, 2816.25], [1.63387512E12, 2827.616666666667], [1.63387542E12, 2864.516666666667], [1.63387476E12, 2864.5833333333335], [1.63387506E12, 2786.0333333333333], [1.63387536E12, 2820.983333333333], [1.6338747E12, 1653.1666666666667], [1.633875E12, 2754.983333333333], [1.6338753E12, 2819.866666666667], [1.6338756E12, 664.3833333333333], [1.63387494E12, 2806.55], [1.63387524E12, 2853.55], [1.63387554E12, 2826.133333333333], [1.63387488E12, 2802.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6338756E12, "title": "Total Transactions Per Second"}},
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

