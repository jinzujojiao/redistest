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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1031.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 3.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 11.0], [20.6, 11.0], [20.7, 11.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 12.0], [32.6, 12.0], [32.7, 12.0], [32.8, 12.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 13.0], [36.4, 13.0], [36.5, 13.0], [36.6, 13.0], [36.7, 13.0], [36.8, 13.0], [36.9, 13.0], [37.0, 13.0], [37.1, 13.0], [37.2, 13.0], [37.3, 13.0], [37.4, 13.0], [37.5, 13.0], [37.6, 13.0], [37.7, 13.0], [37.8, 13.0], [37.9, 13.0], [38.0, 13.0], [38.1, 13.0], [38.2, 13.0], [38.3, 13.0], [38.4, 13.0], [38.5, 13.0], [38.6, 13.0], [38.7, 13.0], [38.8, 13.0], [38.9, 13.0], [39.0, 13.0], [39.1, 13.0], [39.2, 13.0], [39.3, 13.0], [39.4, 13.0], [39.5, 13.0], [39.6, 13.0], [39.7, 13.0], [39.8, 13.0], [39.9, 13.0], [40.0, 13.0], [40.1, 13.0], [40.2, 13.0], [40.3, 13.0], [40.4, 13.0], [40.5, 13.0], [40.6, 13.0], [40.7, 13.0], [40.8, 14.0], [40.9, 14.0], [41.0, 14.0], [41.1, 14.0], [41.2, 14.0], [41.3, 14.0], [41.4, 14.0], [41.5, 14.0], [41.6, 14.0], [41.7, 14.0], [41.8, 14.0], [41.9, 14.0], [42.0, 14.0], [42.1, 14.0], [42.2, 14.0], [42.3, 14.0], [42.4, 14.0], [42.5, 14.0], [42.6, 14.0], [42.7, 14.0], [42.8, 14.0], [42.9, 14.0], [43.0, 14.0], [43.1, 14.0], [43.2, 14.0], [43.3, 14.0], [43.4, 14.0], [43.5, 14.0], [43.6, 14.0], [43.7, 14.0], [43.8, 14.0], [43.9, 14.0], [44.0, 14.0], [44.1, 14.0], [44.2, 14.0], [44.3, 14.0], [44.4, 14.0], [44.5, 14.0], [44.6, 14.0], [44.7, 14.0], [44.8, 14.0], [44.9, 14.0], [45.0, 14.0], [45.1, 14.0], [45.2, 14.0], [45.3, 14.0], [45.4, 14.0], [45.5, 14.0], [45.6, 14.0], [45.7, 14.0], [45.8, 14.0], [45.9, 14.0], [46.0, 14.0], [46.1, 14.0], [46.2, 14.0], [46.3, 14.0], [46.4, 14.0], [46.5, 14.0], [46.6, 14.0], [46.7, 14.0], [46.8, 14.0], [46.9, 14.0], [47.0, 14.0], [47.1, 14.0], [47.2, 14.0], [47.3, 14.0], [47.4, 14.0], [47.5, 14.0], [47.6, 14.0], [47.7, 14.0], [47.8, 14.0], [47.9, 14.0], [48.0, 14.0], [48.1, 14.0], [48.2, 14.0], [48.3, 14.0], [48.4, 14.0], [48.5, 14.0], [48.6, 14.0], [48.7, 14.0], [48.8, 14.0], [48.9, 14.0], [49.0, 14.0], [49.1, 14.0], [49.2, 14.0], [49.3, 15.0], [49.4, 15.0], [49.5, 15.0], [49.6, 15.0], [49.7, 15.0], [49.8, 15.0], [49.9, 15.0], [50.0, 15.0], [50.1, 15.0], [50.2, 15.0], [50.3, 15.0], [50.4, 15.0], [50.5, 15.0], [50.6, 15.0], [50.7, 15.0], [50.8, 15.0], [50.9, 15.0], [51.0, 15.0], [51.1, 15.0], [51.2, 15.0], [51.3, 15.0], [51.4, 15.0], [51.5, 15.0], [51.6, 15.0], [51.7, 15.0], [51.8, 15.0], [51.9, 15.0], [52.0, 15.0], [52.1, 15.0], [52.2, 15.0], [52.3, 15.0], [52.4, 15.0], [52.5, 15.0], [52.6, 15.0], [52.7, 15.0], [52.8, 15.0], [52.9, 15.0], [53.0, 15.0], [53.1, 15.0], [53.2, 15.0], [53.3, 15.0], [53.4, 15.0], [53.5, 15.0], [53.6, 15.0], [53.7, 15.0], [53.8, 15.0], [53.9, 15.0], [54.0, 15.0], [54.1, 15.0], [54.2, 15.0], [54.3, 15.0], [54.4, 15.0], [54.5, 15.0], [54.6, 15.0], [54.7, 15.0], [54.8, 15.0], [54.9, 15.0], [55.0, 15.0], [55.1, 15.0], [55.2, 15.0], [55.3, 15.0], [55.4, 15.0], [55.5, 15.0], [55.6, 15.0], [55.7, 15.0], [55.8, 15.0], [55.9, 15.0], [56.0, 15.0], [56.1, 15.0], [56.2, 15.0], [56.3, 15.0], [56.4, 15.0], [56.5, 15.0], [56.6, 15.0], [56.7, 15.0], [56.8, 15.0], [56.9, 15.0], [57.0, 15.0], [57.1, 15.0], [57.2, 15.0], [57.3, 15.0], [57.4, 15.0], [57.5, 15.0], [57.6, 15.0], [57.7, 16.0], [57.8, 16.0], [57.9, 16.0], [58.0, 16.0], [58.1, 16.0], [58.2, 16.0], [58.3, 16.0], [58.4, 16.0], [58.5, 16.0], [58.6, 16.0], [58.7, 16.0], [58.8, 16.0], [58.9, 16.0], [59.0, 16.0], [59.1, 16.0], [59.2, 16.0], [59.3, 16.0], [59.4, 16.0], [59.5, 16.0], [59.6, 16.0], [59.7, 16.0], [59.8, 16.0], [59.9, 16.0], [60.0, 16.0], [60.1, 16.0], [60.2, 16.0], [60.3, 16.0], [60.4, 16.0], [60.5, 16.0], [60.6, 16.0], [60.7, 16.0], [60.8, 16.0], [60.9, 16.0], [61.0, 16.0], [61.1, 16.0], [61.2, 16.0], [61.3, 16.0], [61.4, 16.0], [61.5, 16.0], [61.6, 16.0], [61.7, 16.0], [61.8, 16.0], [61.9, 16.0], [62.0, 16.0], [62.1, 16.0], [62.2, 16.0], [62.3, 16.0], [62.4, 16.0], [62.5, 16.0], [62.6, 16.0], [62.7, 16.0], [62.8, 16.0], [62.9, 16.0], [63.0, 16.0], [63.1, 16.0], [63.2, 16.0], [63.3, 16.0], [63.4, 16.0], [63.5, 16.0], [63.6, 16.0], [63.7, 16.0], [63.8, 16.0], [63.9, 16.0], [64.0, 16.0], [64.1, 16.0], [64.2, 16.0], [64.3, 16.0], [64.4, 16.0], [64.5, 16.0], [64.6, 16.0], [64.7, 16.0], [64.8, 16.0], [64.9, 16.0], [65.0, 17.0], [65.1, 17.0], [65.2, 17.0], [65.3, 17.0], [65.4, 17.0], [65.5, 17.0], [65.6, 17.0], [65.7, 17.0], [65.8, 17.0], [65.9, 17.0], [66.0, 17.0], [66.1, 17.0], [66.2, 17.0], [66.3, 17.0], [66.4, 17.0], [66.5, 17.0], [66.6, 17.0], [66.7, 17.0], [66.8, 17.0], [66.9, 17.0], [67.0, 17.0], [67.1, 17.0], [67.2, 17.0], [67.3, 17.0], [67.4, 17.0], [67.5, 17.0], [67.6, 17.0], [67.7, 17.0], [67.8, 17.0], [67.9, 17.0], [68.0, 17.0], [68.1, 17.0], [68.2, 17.0], [68.3, 17.0], [68.4, 17.0], [68.5, 17.0], [68.6, 17.0], [68.7, 17.0], [68.8, 17.0], [68.9, 17.0], [69.0, 17.0], [69.1, 17.0], [69.2, 17.0], [69.3, 17.0], [69.4, 17.0], [69.5, 17.0], [69.6, 17.0], [69.7, 17.0], [69.8, 17.0], [69.9, 17.0], [70.0, 17.0], [70.1, 17.0], [70.2, 17.0], [70.3, 17.0], [70.4, 17.0], [70.5, 17.0], [70.6, 17.0], [70.7, 17.0], [70.8, 17.0], [70.9, 17.0], [71.0, 17.0], [71.1, 17.0], [71.2, 18.0], [71.3, 18.0], [71.4, 18.0], [71.5, 18.0], [71.6, 18.0], [71.7, 18.0], [71.8, 18.0], [71.9, 18.0], [72.0, 18.0], [72.1, 18.0], [72.2, 18.0], [72.3, 18.0], [72.4, 18.0], [72.5, 18.0], [72.6, 18.0], [72.7, 18.0], [72.8, 18.0], [72.9, 18.0], [73.0, 18.0], [73.1, 18.0], [73.2, 18.0], [73.3, 18.0], [73.4, 18.0], [73.5, 18.0], [73.6, 18.0], [73.7, 18.0], [73.8, 18.0], [73.9, 18.0], [74.0, 18.0], [74.1, 18.0], [74.2, 18.0], [74.3, 18.0], [74.4, 18.0], [74.5, 18.0], [74.6, 18.0], [74.7, 18.0], [74.8, 18.0], [74.9, 18.0], [75.0, 18.0], [75.1, 18.0], [75.2, 18.0], [75.3, 18.0], [75.4, 18.0], [75.5, 18.0], [75.6, 18.0], [75.7, 18.0], [75.8, 18.0], [75.9, 18.0], [76.0, 18.0], [76.1, 19.0], [76.2, 19.0], [76.3, 19.0], [76.4, 19.0], [76.5, 19.0], [76.6, 19.0], [76.7, 19.0], [76.8, 19.0], [76.9, 19.0], [77.0, 19.0], [77.1, 19.0], [77.2, 19.0], [77.3, 19.0], [77.4, 19.0], [77.5, 19.0], [77.6, 19.0], [77.7, 19.0], [77.8, 19.0], [77.9, 19.0], [78.0, 19.0], [78.1, 19.0], [78.2, 19.0], [78.3, 19.0], [78.4, 19.0], [78.5, 19.0], [78.6, 19.0], [78.7, 19.0], [78.8, 19.0], [78.9, 19.0], [79.0, 19.0], [79.1, 19.0], [79.2, 19.0], [79.3, 19.0], [79.4, 19.0], [79.5, 19.0], [79.6, 19.0], [79.7, 19.0], [79.8, 19.0], [79.9, 20.0], [80.0, 20.0], [80.1, 20.0], [80.2, 20.0], [80.3, 20.0], [80.4, 20.0], [80.5, 20.0], [80.6, 20.0], [80.7, 20.0], [80.8, 20.0], [80.9, 20.0], [81.0, 20.0], [81.1, 20.0], [81.2, 20.0], [81.3, 20.0], [81.4, 20.0], [81.5, 20.0], [81.6, 20.0], [81.7, 20.0], [81.8, 20.0], [81.9, 20.0], [82.0, 20.0], [82.1, 20.0], [82.2, 20.0], [82.3, 20.0], [82.4, 20.0], [82.5, 20.0], [82.6, 20.0], [82.7, 21.0], [82.8, 21.0], [82.9, 21.0], [83.0, 21.0], [83.1, 21.0], [83.2, 21.0], [83.3, 21.0], [83.4, 21.0], [83.5, 21.0], [83.6, 21.0], [83.7, 21.0], [83.8, 21.0], [83.9, 21.0], [84.0, 21.0], [84.1, 21.0], [84.2, 21.0], [84.3, 21.0], [84.4, 21.0], [84.5, 21.0], [84.6, 21.0], [84.7, 21.0], [84.8, 22.0], [84.9, 22.0], [85.0, 22.0], [85.1, 22.0], [85.2, 22.0], [85.3, 22.0], [85.4, 22.0], [85.5, 22.0], [85.6, 22.0], [85.7, 22.0], [85.8, 22.0], [85.9, 22.0], [86.0, 22.0], [86.1, 22.0], [86.2, 22.0], [86.3, 22.0], [86.4, 23.0], [86.5, 23.0], [86.6, 23.0], [86.7, 23.0], [86.8, 23.0], [86.9, 23.0], [87.0, 23.0], [87.1, 23.0], [87.2, 23.0], [87.3, 23.0], [87.4, 23.0], [87.5, 23.0], [87.6, 24.0], [87.7, 24.0], [87.8, 24.0], [87.9, 24.0], [88.0, 24.0], [88.1, 24.0], [88.2, 24.0], [88.3, 24.0], [88.4, 24.0], [88.5, 24.0], [88.6, 25.0], [88.7, 25.0], [88.8, 25.0], [88.9, 25.0], [89.0, 25.0], [89.1, 25.0], [89.2, 25.0], [89.3, 26.0], [89.4, 26.0], [89.5, 26.0], [89.6, 26.0], [89.7, 26.0], [89.8, 26.0], [89.9, 27.0], [90.0, 27.0], [90.1, 27.0], [90.2, 27.0], [90.3, 27.0], [90.4, 28.0], [90.5, 28.0], [90.6, 28.0], [90.7, 28.0], [90.8, 29.0], [90.9, 29.0], [91.0, 29.0], [91.1, 30.0], [91.2, 30.0], [91.3, 30.0], [91.4, 31.0], [91.5, 31.0], [91.6, 32.0], [91.7, 32.0], [91.8, 33.0], [91.9, 34.0], [92.0, 35.0], [92.1, 36.0], [92.2, 37.0], [92.3, 39.0], [92.4, 41.0], [92.5, 43.0], [92.6, 47.0], [92.7, 51.0], [92.8, 56.0], [92.9, 64.0], [93.0, 73.0], [93.1, 82.0], [93.2, 93.0], [93.3, 105.0], [93.4, 117.0], [93.5, 129.0], [93.6, 142.0], [93.7, 153.0], [93.8, 161.0], [93.9, 171.0], [94.0, 181.0], [94.1, 191.0], [94.2, 203.0], [94.3, 221.0], [94.4, 247.0], [94.5, 301.0], [94.6, 341.0], [94.7, 356.0], [94.8, 367.0], [94.9, 376.0], [95.0, 384.0], [95.1, 392.0], [95.2, 399.0], [95.3, 405.0], [95.4, 411.0], [95.5, 417.0], [95.6, 422.0], [95.7, 426.0], [95.8, 431.0], [95.9, 435.0], [96.0, 440.0], [96.1, 444.0], [96.2, 448.0], [96.3, 452.0], [96.4, 456.0], [96.5, 460.0], [96.6, 464.0], [96.7, 467.0], [96.8, 471.0], [96.9, 475.0], [97.0, 478.0], [97.1, 482.0], [97.2, 486.0], [97.3, 490.0], [97.4, 494.0], [97.5, 498.0], [97.6, 502.0], [97.7, 506.0], [97.8, 510.0], [97.9, 515.0], [98.0, 519.0], [98.1, 523.0], [98.2, 528.0], [98.3, 533.0], [98.4, 538.0], [98.5, 543.0], [98.6, 549.0], [98.7, 555.0], [98.8, 562.0], [98.9, 569.0], [99.0, 578.0], [99.1, 587.0], [99.2, 597.0], [99.3, 608.0], [99.4, 623.0], [99.5, 638.0], [99.6, 657.0], [99.7, 677.0], [99.8, 701.0], [99.9, 737.0], [100.0, 1031.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1910859.0, "series": [{"data": [[0.0, 1910859.0], [300.0, 14521.0], [600.0, 11634.0], [700.0, 3539.0], [100.0, 18874.0], [200.0, 6609.0], [400.0, 47891.0], [800.0, 681.0], [900.0, 5.0], [500.0, 34465.0], [1000.0, 1.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 49833.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1999246.0, "series": [{"data": [[0.0, 1999246.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 49833.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 297.0504798703749, "minX": 1.62614676E12, "maxY": 300.0, "series": [{"data": [[1.62614682E12, 300.0], [1.626147E12, 300.0], [1.62614688E12, 300.0], [1.62614706E12, 298.29163132744463], [1.62614676E12, 297.0504798703749], [1.62614694E12, 300.0]], "isOverall": false, "label": "role1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62614706E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.4705882352941178, "minX": 1.0, "maxY": 574.0, "series": [{"data": [[2.0, 1.526315789473684], [3.0, 1.4705882352941178], [4.0, 1.8333333333333335], [5.0, 1.5294117647058822], [6.0, 2.0588235294117645], [7.0, 1.5714285714285714], [8.0, 2.6666666666666665], [9.0, 1.8235294117647056], [10.0, 2.3829787234042556], [11.0, 2.307692307692308], [12.0, 1.9210526315789473], [13.0, 2.4750000000000014], [14.0, 5.636363636363635], [15.0, 4.333333333333334], [16.0, 2.8181818181818183], [17.0, 2.0], [18.0, 3.595238095238095], [19.0, 2.1366906474820144], [21.0, 2.0], [22.0, 9.0], [23.0, 3.3877551020408174], [24.0, 4.933333333333333], [25.0, 13.666666666666668], [27.0, 19.5], [28.0, 15.0], [29.0, 17.444444444444443], [31.0, 36.0], [33.0, 2.9326923076923084], [32.0, 8.515151515151516], [35.0, 9.0], [34.0, 7.8], [37.0, 6.105263157894737], [36.0, 16.071428571428573], [39.0, 4.387096774193548], [38.0, 3.444444444444444], [41.0, 22.809523809523807], [40.0, 17.161290322580648], [43.0, 3.3725490196078427], [42.0, 3.215686274509804], [45.0, 20.5], [44.0, 4.0740740740740735], [47.0, 28.142857142857142], [46.0, 9.0], [49.0, 43.0], [48.0, 37.6], [51.0, 42.0], [50.0, 34.0], [53.0, 6.818181818181818], [52.0, 34.6], [55.0, 4.16216216216216], [54.0, 4.459459459459459], [57.0, 5.5], [56.0, 11.372881355932204], [59.0, 13.0], [58.0, 5.800000000000001], [61.0, 2.0], [60.0, 15.944444444444441], [63.0, 2.0], [62.0, 9.375], [67.0, 47.5], [65.0, 44.333333333333336], [64.0, 23.07692307692308], [71.0, 54.0], [70.0, 58.4], [69.0, 43.5], [68.0, 31.0], [75.0, 9.545454545454547], [74.0, 21.5], [73.0, 3.4576271186440684], [72.0, 16.91176470588235], [79.0, 22.0], [78.0, 14.666666666666668], [77.0, 2.5], [76.0, 2.0], [83.0, 27.0], [82.0, 2.0], [81.0, 22.2], [80.0, 20.0], [87.0, 36.625], [86.0, 35.5], [85.0, 37.0], [84.0, 12.0], [91.0, 5.4], [90.0, 8.83333333333333], [89.0, 2.84931506849315], [88.0, 9.217391304347826], [94.0, 18.2], [93.0, 14.363636363636367], [92.0, 2.3333333333333335], [99.0, 29.428571428571427], [96.0, 26.285714285714285], [102.0, 22.71428571428571], [101.0, 30.333333333333332], [100.0, 24.0], [107.0, 17.21052631578947], [106.0, 22.333333333333332], [105.0, 23.478260869565215], [111.0, 60.8], [110.0, 36.733333333333334], [115.0, 17.230769230769234], [114.0, 25.3], [113.0, 53.75], [112.0, 52.6], [119.0, 4.2], [118.0, 7.066666666666666], [117.0, 20.5], [116.0, 24.500000000000007], [123.0, 3.6666666666666665], [122.0, 18.75], [121.0, 19.666666666666668], [120.0, 23.333333333333332], [127.0, 6.8], [126.0, 3.0], [125.0, 9.666666666666666], [124.0, 3.9333333333333336], [135.0, 5.0], [134.0, 6.0], [133.0, 7.235294117647059], [132.0, 8.0], [131.0, 5.909090909090909], [130.0, 4.833333333333333], [129.0, 6.0], [143.0, 7.25], [142.0, 11.933333333333332], [141.0, 7.299999999999999], [140.0, 7.857142857142857], [139.0, 6.0], [138.0, 7.0], [137.0, 6.7272727272727275], [136.0, 8.333333333333332], [151.0, 12.439393939393941], [150.0, 14.132812500000002], [149.0, 13.134615384615383], [148.0, 16.499999999999996], [147.0, 42.5], [144.0, 7.0], [159.0, 24.363636363636363], [158.0, 24.333333333333332], [157.0, 24.464285714285715], [156.0, 27.371428571428567], [155.0, 23.0], [154.0, 23.333333333333332], [153.0, 23.2], [152.0, 21.3], [167.0, 12.0], [166.0, 69.11111111111111], [165.0, 18.88235294117647], [164.0, 15.348837209302324], [163.0, 19.22222222222222], [162.0, 21.0], [161.0, 23.5], [160.0, 19.71428571428571], [175.0, 88.65], [174.0, 104.0], [173.0, 346.0], [172.0, 341.0], [171.0, 55.5], [170.0, 202.33333333333331], [169.0, 131.4], [168.0, 84.5], [183.0, 52.5], [182.0, 39.25], [181.0, 131.5], [180.0, 7.0], [179.0, 43.2], [178.0, 52.0], [177.0, 47.0], [176.0, 151.66666666666666], [191.0, 568.0], [190.0, 574.0], [189.0, 203.71428571428572], [188.0, 50.5], [187.0, 60.125], [185.0, 60.24999999999999], [184.0, 94.25], [198.0, 25.555555555555554], [199.0, 116.53333333333333], [197.0, 53.36363636363636], [196.0, 114.5], [195.0, 7.75], [194.0, 564.0], [193.0, 322.2857142857143], [202.0, 82.53846153846153], [204.0, 130.54545454545453], [205.0, 138.7777777777778], [200.0, 168.66666666666666], [201.0, 71.42857142857143], [206.0, 172.23999999999998], [207.0, 193.56250000000003], [203.0, 8.0], [208.0, 176.40425531914897], [212.0, 202.03333333333333], [213.0, 166.66666666666663], [210.0, 202.83333333333334], [211.0, 252.75], [209.0, 228.77777777777774], [215.0, 171.05882352941177], [214.0, 123.875], [216.0, 123.25], [219.0, 327.2857142857143], [218.0, 164.0], [223.0, 48.699999999999996], [220.0, 157.0], [222.0, 186.78947368421058], [221.0, 455.5], [217.0, 233.625], [224.0, 35.86666666666666], [225.0, 6.5], [226.0, 94.07142857142857], [227.0, 3.6999999999999997], [228.0, 7.166666666666666], [231.0, 10.0], [230.0, 373.08333333333337], [229.0, 9.0], [235.0, 38.121212121212125], [234.0, 57.38095238095238], [236.0, 4.833333333333334], [237.0, 40.727272727272734], [238.0, 103.07142857142856], [233.0, 222.99999999999997], [232.0, 11.6], [240.0, 9.250000000000002], [241.0, 167.33333333333331], [242.0, 207.33333333333331], [243.0, 57.666666666666664], [244.0, 164.75], [245.0, 9.399999999999999], [246.0, 33.69230769230769], [247.0, 29.13157894736842], [248.0, 75.9090909090909], [249.0, 18.0], [250.0, 92.0], [251.0, 18.714285714285715], [252.0, 39.23809523809524], [253.0, 24.933333333333334], [254.0, 32.68421052631579], [255.0, 69.55555555555556], [257.0, 78.57142857142857], [256.0, 48.16129032258064], [258.0, 35.66666666666666], [259.0, 67.52941176470588], [260.0, 5.0], [261.0, 119.18181818181819], [263.0, 150.0], [262.0, 3.0], [264.0, 29.958333333333332], [271.0, 35.083333333333336], [270.0, 113.42857142857143], [269.0, 34.76923076923077], [268.0, 77.18749999999999], [265.0, 17.216666666666665], [266.0, 101.5], [267.0, 51.08823529411765], [284.0, 13.0], [272.0, 50.666666666666664], [273.0, 10.88888888888889], [275.0, 7.571428571428571], [274.0, 8.411764705882353], [286.0, 14.0], [283.0, 13.166666666666666], [282.0, 14.0], [281.0, 14.0], [280.0, 53.31428571428571], [279.0, 21.948717948717952], [278.0, 5.0], [277.0, 10.0], [276.0, 3.0], [300.0, 43.59234981977285], [297.0, 8.0], [295.0, 31.545454545454543], [294.0, 13.714285714285715], [293.0, 11.0], [290.0, 48.2], [289.0, 257.0], [288.0, 18.17647058823529], [1.0, 1.5]], "isOverall": false, "label": "user2role", "isController": false}, {"data": [[299.6544730583932, 43.5806413515534]], "isOverall": false, "label": "user2role-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 32359.433333333334, "minX": 1.62614676E12, "maxY": 1983751.6833333333, "series": [{"data": [[1.62614682E12, 928784.0], [1.626147E12, 786603.2], [1.62614688E12, 798534.3166666667], [1.62614706E12, 778030.9666666667], [1.62614676E12, 32359.433333333334], [1.62614694E12, 798165.4333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62614682E12, 1983751.6833333333], [1.626147E12, 1687769.1833333333], [1.62614688E12, 1706743.1], [1.62614706E12, 1669375.8666666667], [1.62614676E12, 68545.26666666666], [1.62614694E12, 1710487.5166666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62614706E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 34.795213760438585, "minX": 1.62614676E12, "maxY": 45.989674901339974, "series": [{"data": [[1.62614682E12, 38.51836512780863], [1.626147E12, 45.989674901339974], [1.62614688E12, 45.25246336135783], [1.62614706E12, 44.07686539376433], [1.62614676E12, 34.795213760438585], [1.62614694E12, 45.29627258428833]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62614706E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 34.781939424155844, "minX": 1.62614676E12, "maxY": 45.98942937013469, "series": [{"data": [[1.62614682E12, 38.517938409618566], [1.626147E12, 45.98942937013469], [1.62614688E12, 45.25218118649514], [1.62614706E12, 44.076516311205566], [1.62614676E12, 34.781939424155844], [1.62614694E12, 45.29605581545485]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62614706E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015256183677801767, "minX": 1.62614676E12, "maxY": 1.0341518135360874, "series": [{"data": [[1.62614682E12, 0.0339013522851083], [1.626147E12, 0.015256183677801767], [1.62614688E12, 0.018500089439353933], [1.62614706E12, 0.016091413086199553], [1.62614676E12, 1.0341518135360874], [1.62614694E12, 0.015897221326019912]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62614706E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62614676E12, "maxY": 1031.0, "series": [{"data": [[1.62614682E12, 803.0], [1.626147E12, 932.0], [1.62614688E12, 1031.0], [1.62614706E12, 741.0], [1.62614676E12, 360.0], [1.62614694E12, 904.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62614682E12, 23.0], [1.626147E12, 27.0], [1.62614688E12, 26.0], [1.62614706E12, 27.0], [1.62614676E12, 84.0], [1.62614694E12, 23.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62614682E12, 584.0], [1.626147E12, 622.9900000000016], [1.62614688E12, 528.9900000000016], [1.62614706E12, 541.0], [1.62614676E12, 198.0], [1.62614694E12, 622.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62614682E12, 400.0], [1.626147E12, 429.9500000000007], [1.62614688E12, 426.0], [1.62614706E12, 386.0], [1.62614676E12, 140.0], [1.62614694E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62614682E12, 1.0], [1.626147E12, 1.0], [1.62614688E12, 1.0], [1.62614706E12, 1.0], [1.62614676E12, 1.0], [1.62614694E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62614682E12, 14.0], [1.626147E12, 15.0], [1.62614688E12, 15.0], [1.62614706E12, 14.0], [1.62614676E12, 18.0], [1.62614694E12, 14.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62614706E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 56.0, "maxY": 176.0, "series": [{"data": [[8301.0, 12.0], [9529.0, 10.0], [10769.0, 10.0], [56.0, 2.0], [148.0, 176.0], [3876.0, 19.0], [5032.0, 17.0], [5166.0, 19.0], [5280.0, 17.0], [5322.0, 16.0], [5606.0, 15.0], [5394.0, 16.0], [5480.0, 15.0], [5502.0, 16.0], [5428.0, 15.0], [5494.0, 16.0], [5676.0, 21.0], [5790.0, 18.0], [5654.0, 15.0], [5794.0, 15.0], [5656.0, 16.0], [5788.0, 15.0], [5922.0, 15.0], [5898.0, 16.0], [6034.0, 15.0], [5906.0, 15.0], [6078.0, 15.0], [6054.0, 15.0], [5912.0, 15.0], [6016.0, 15.0], [6030.0, 17.0], [6198.0, 15.0], [6346.0, 16.0], [6264.0, 16.0], [6160.0, 14.0], [6150.0, 14.0], [6268.0, 16.0], [6204.0, 15.0], [6336.0, 12.0], [6214.0, 15.0], [6228.0, 14.0], [6256.0, 15.0], [6296.0, 14.0], [6324.0, 16.0], [6384.0, 15.0], [6368.0, 15.0], [6458.0, 17.0], [6636.0, 15.0], [6594.0, 15.0], [6604.0, 16.0], [6652.0, 16.0], [6566.0, 15.0], [6422.0, 14.0], [6410.0, 16.0], [6424.0, 15.0], [6504.0, 15.0], [6488.0, 15.0], [6524.0, 16.0], [6444.0, 14.0], [6446.0, 16.0], [6902.0, 15.0], [6694.0, 15.0], [6716.0, 16.0], [6696.0, 15.0], [6782.0, 15.0], [6778.0, 15.0], [6776.0, 14.0], [6774.0, 15.0], [6750.0, 15.0], [6772.0, 14.0], [6788.0, 15.0], [6804.0, 15.0], [6812.0, 15.0], [6826.0, 14.0], [6882.0, 15.0], [6898.0, 15.0], [6854.0, 15.0], [6836.0, 15.0], [6842.0, 14.0], [6728.0, 16.0], [6742.0, 15.0], [6744.0, 14.0], [6928.0, 15.0], [7140.0, 15.0], [7164.0, 14.0], [7106.0, 15.0], [7110.0, 15.0], [7166.0, 14.0], [7098.0, 15.0], [7096.0, 15.0], [7088.0, 15.0], [7028.0, 14.0], [7010.0, 15.0], [6978.0, 15.0], [6924.0, 15.0], [6934.0, 15.0], [6950.0, 15.0], [7034.0, 15.0], [6918.0, 15.0], [7058.0, 15.0], [7178.0, 14.0], [7200.0, 15.0], [7234.0, 14.0], [7224.0, 14.0], [7220.0, 14.0], [7404.0, 14.0], [7422.0, 14.0], [7390.0, 14.0], [7304.0, 14.0], [7336.0, 14.0], [7184.0, 14.0], [7256.0, 15.0], [7254.0, 15.0], [7292.0, 14.0], [7286.0, 15.0], [7260.0, 15.0], [7196.0, 15.0], [7186.0, 14.0], [7546.0, 14.0], [7532.0, 14.0], [7488.0, 14.0], [7450.0, 14.0], [7530.0, 14.0], [7596.0, 14.0], [8150.0, 12.0], [8064.0, 13.0], [9376.0, 10.0], [9968.0, 9.0], [10092.0, 10.0], [10396.0, 9.0], [10264.0, 10.0], [9891.0, 10.0], [10331.0, 10.0], [10487.0, 9.0], [4259.0, 17.0], [5089.0, 16.0], [5301.0, 16.0], [5333.0, 16.0], [5589.0, 16.0], [5839.0, 15.0], [5873.0, 15.0], [5805.0, 15.0], [5739.0, 15.0], [5887.0, 16.0], [6123.0, 15.0], [5999.0, 16.0], [6129.0, 16.0], [6141.0, 15.0], [5957.0, 16.0], [5965.0, 15.0], [5975.0, 16.0], [5981.0, 15.0], [5995.0, 15.0], [5917.0, 14.0], [6099.0, 15.0], [6081.0, 16.0], [6063.0, 15.0], [6079.0, 15.0], [6061.0, 16.0], [6181.0, 16.0], [6269.0, 16.0], [6257.0, 15.0], [6229.0, 15.0], [6325.0, 16.0], [6317.0, 15.0], [6329.0, 14.0], [6397.0, 15.0], [6353.0, 14.0], [6197.0, 16.0], [6369.0, 15.0], [6163.0, 16.0], [6157.0, 16.0], [6393.0, 16.0], [6395.0, 16.0], [6595.0, 16.0], [6627.0, 15.0], [6617.0, 15.0], [6621.0, 15.0], [6537.0, 15.0], [6655.0, 14.0], [6637.0, 16.0], [6493.0, 14.0], [6505.0, 14.0], [6517.0, 16.0], [6501.0, 16.0], [6429.0, 16.0], [6459.0, 16.0], [6403.0, 16.0], [6469.0, 14.0], [6471.0, 16.0], [6541.0, 16.0], [6591.0, 16.0], [6547.0, 14.0], [6545.0, 14.0], [6703.0, 16.0], [6853.0, 22.0], [6699.0, 15.0], [6695.0, 15.0], [6705.0, 14.0], [6779.0, 15.0], [6663.0, 15.0], [6769.0, 14.0], [6767.0, 15.0], [6825.0, 15.0], [6787.0, 15.0], [6905.0, 15.0], [6785.0, 15.0], [6813.0, 15.0], [6761.0, 15.0], [6865.0, 15.0], [6859.0, 15.0], [6857.0, 15.0], [6827.0, 15.0], [6727.0, 14.0], [6723.0, 16.0], [6745.0, 16.0], [6753.0, 15.0], [6749.0, 16.0], [7153.0, 14.0], [7103.0, 14.0], [7093.0, 15.0], [6999.0, 15.0], [7037.0, 15.0], [7005.0, 14.0], [6931.0, 15.0], [6921.0, 15.0], [6983.0, 15.0], [6991.0, 15.0], [6943.0, 15.0], [7151.0, 14.0], [7163.0, 15.0], [7047.0, 15.0], [7049.0, 15.0], [7053.0, 15.0], [6945.0, 13.0], [6951.0, 15.0], [6947.0, 15.0], [7127.0, 15.0], [7125.0, 14.0], [6953.0, 15.0], [6963.0, 14.0], [7229.0, 15.0], [7243.0, 14.0], [7233.0, 14.0], [7395.0, 27.0], [7401.0, 14.0], [7375.0, 14.0], [7371.0, 14.0], [7215.0, 15.0], [7207.0, 15.0], [7407.0, 14.0], [7331.0, 14.0], [7335.0, 14.0], [7353.0, 14.0], [7321.0, 15.0], [7411.0, 14.0], [7197.0, 15.0], [7191.0, 15.0], [7179.0, 15.0], [7281.0, 14.0], [7665.0, 14.0], [7553.0, 14.0], [7499.0, 14.0], [7467.0, 14.0], [7477.0, 14.0], [7533.0, 14.0], [7529.0, 14.0], [7577.0, 14.0], [7559.0, 14.0], [7917.0, 13.0], [7777.0, 14.0], [7795.0, 13.0], [8015.0, 13.0], [10422.0, 9.0], [10474.0, 9.0], [10942.0, 9.0], [10890.0, 9.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10942.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 56.0, "maxY": 176.0, "series": [{"data": [[8301.0, 12.0], [9529.0, 10.0], [10769.0, 10.0], [56.0, 2.0], [148.0, 176.0], [3876.0, 19.0], [5032.0, 17.0], [5166.0, 19.0], [5280.0, 17.0], [5322.0, 16.0], [5606.0, 15.0], [5394.0, 16.0], [5480.0, 15.0], [5502.0, 16.0], [5428.0, 15.0], [5494.0, 16.0], [5676.0, 21.0], [5790.0, 18.0], [5654.0, 15.0], [5794.0, 15.0], [5656.0, 16.0], [5788.0, 15.0], [5922.0, 15.0], [5898.0, 16.0], [6034.0, 15.0], [5906.0, 15.0], [6078.0, 15.0], [6054.0, 15.0], [5912.0, 15.0], [6016.0, 15.0], [6030.0, 17.0], [6198.0, 15.0], [6346.0, 16.0], [6264.0, 16.0], [6160.0, 14.0], [6150.0, 14.0], [6268.0, 16.0], [6204.0, 15.0], [6336.0, 12.0], [6214.0, 15.0], [6228.0, 14.0], [6256.0, 15.0], [6296.0, 14.0], [6324.0, 16.0], [6384.0, 15.0], [6368.0, 15.0], [6458.0, 17.0], [6636.0, 15.0], [6594.0, 15.0], [6604.0, 16.0], [6652.0, 16.0], [6566.0, 15.0], [6422.0, 14.0], [6410.0, 16.0], [6424.0, 15.0], [6504.0, 15.0], [6488.0, 15.0], [6524.0, 16.0], [6444.0, 14.0], [6446.0, 16.0], [6902.0, 15.0], [6694.0, 15.0], [6716.0, 16.0], [6696.0, 15.0], [6782.0, 15.0], [6778.0, 15.0], [6776.0, 14.0], [6774.0, 15.0], [6750.0, 15.0], [6772.0, 14.0], [6788.0, 15.0], [6804.0, 15.0], [6812.0, 15.0], [6826.0, 14.0], [6882.0, 15.0], [6898.0, 15.0], [6854.0, 15.0], [6836.0, 15.0], [6842.0, 14.0], [6728.0, 16.0], [6742.0, 15.0], [6744.0, 14.0], [6928.0, 15.0], [7140.0, 15.0], [7164.0, 14.0], [7106.0, 15.0], [7110.0, 15.0], [7166.0, 14.0], [7098.0, 15.0], [7096.0, 15.0], [7088.0, 15.0], [7028.0, 14.0], [7010.0, 15.0], [6978.0, 15.0], [6924.0, 15.0], [6934.0, 15.0], [6950.0, 15.0], [7034.0, 15.0], [6918.0, 15.0], [7058.0, 15.0], [7178.0, 14.0], [7200.0, 15.0], [7234.0, 14.0], [7224.0, 14.0], [7220.0, 14.0], [7404.0, 14.0], [7422.0, 14.0], [7390.0, 14.0], [7304.0, 14.0], [7336.0, 14.0], [7184.0, 14.0], [7256.0, 15.0], [7254.0, 15.0], [7292.0, 14.0], [7286.0, 15.0], [7260.0, 15.0], [7196.0, 15.0], [7186.0, 14.0], [7546.0, 14.0], [7532.0, 14.0], [7488.0, 14.0], [7450.0, 14.0], [7530.0, 14.0], [7596.0, 14.0], [8150.0, 12.0], [8064.0, 13.0], [9376.0, 10.0], [9968.0, 9.0], [10092.0, 10.0], [10396.0, 9.0], [10264.0, 10.0], [9891.0, 10.0], [10331.0, 10.0], [10487.0, 9.0], [4259.0, 17.0], [5089.0, 16.0], [5301.0, 16.0], [5333.0, 16.0], [5589.0, 16.0], [5839.0, 15.0], [5873.0, 15.0], [5805.0, 15.0], [5739.0, 15.0], [5887.0, 16.0], [6123.0, 15.0], [5999.0, 16.0], [6129.0, 16.0], [6141.0, 15.0], [5957.0, 16.0], [5965.0, 15.0], [5975.0, 16.0], [5981.0, 15.0], [5995.0, 15.0], [5917.0, 14.0], [6099.0, 15.0], [6081.0, 16.0], [6063.0, 15.0], [6079.0, 15.0], [6061.0, 16.0], [6181.0, 16.0], [6269.0, 16.0], [6257.0, 15.0], [6229.0, 15.0], [6325.0, 16.0], [6317.0, 15.0], [6329.0, 14.0], [6397.0, 15.0], [6353.0, 14.0], [6197.0, 16.0], [6369.0, 15.0], [6163.0, 16.0], [6157.0, 16.0], [6393.0, 16.0], [6395.0, 16.0], [6595.0, 16.0], [6627.0, 15.0], [6617.0, 15.0], [6621.0, 15.0], [6537.0, 15.0], [6655.0, 14.0], [6637.0, 16.0], [6493.0, 14.0], [6505.0, 14.0], [6517.0, 16.0], [6501.0, 16.0], [6429.0, 16.0], [6459.0, 16.0], [6403.0, 16.0], [6469.0, 14.0], [6471.0, 16.0], [6541.0, 16.0], [6591.0, 16.0], [6547.0, 14.0], [6545.0, 14.0], [6703.0, 16.0], [6853.0, 22.0], [6699.0, 15.0], [6695.0, 15.0], [6705.0, 14.0], [6779.0, 15.0], [6663.0, 15.0], [6769.0, 14.0], [6767.0, 15.0], [6825.0, 15.0], [6787.0, 15.0], [6905.0, 15.0], [6785.0, 15.0], [6813.0, 15.0], [6761.0, 15.0], [6865.0, 15.0], [6859.0, 15.0], [6857.0, 15.0], [6827.0, 15.0], [6727.0, 14.0], [6723.0, 16.0], [6745.0, 16.0], [6753.0, 15.0], [6749.0, 16.0], [7153.0, 14.0], [7103.0, 14.0], [7093.0, 15.0], [6999.0, 15.0], [7037.0, 15.0], [7005.0, 14.0], [6931.0, 15.0], [6921.0, 15.0], [6983.0, 15.0], [6991.0, 15.0], [6943.0, 15.0], [7151.0, 14.0], [7163.0, 15.0], [7047.0, 15.0], [7049.0, 15.0], [7053.0, 15.0], [6945.0, 13.0], [6951.0, 15.0], [6947.0, 15.0], [7127.0, 15.0], [7125.0, 14.0], [6953.0, 15.0], [6963.0, 14.0], [7229.0, 15.0], [7243.0, 14.0], [7233.0, 14.0], [7395.0, 27.0], [7401.0, 14.0], [7375.0, 14.0], [7371.0, 14.0], [7215.0, 15.0], [7207.0, 15.0], [7407.0, 14.0], [7331.0, 14.0], [7335.0, 14.0], [7353.0, 14.0], [7321.0, 15.0], [7411.0, 14.0], [7197.0, 15.0], [7191.0, 15.0], [7179.0, 15.0], [7281.0, 14.0], [7665.0, 14.0], [7553.0, 14.0], [7499.0, 14.0], [7467.0, 14.0], [7477.0, 14.0], [7533.0, 14.0], [7529.0, 14.0], [7577.0, 14.0], [7559.0, 14.0], [7917.0, 13.0], [7777.0, 14.0], [7795.0, 13.0], [8015.0, 13.0], [10422.0, 9.0], [10474.0, 9.0], [10942.0, 9.0], [10890.0, 9.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10942.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 269.55, "minX": 1.62614676E12, "maxY": 7697.266666666666, "series": [{"data": [[1.62614682E12, 7697.266666666666], [1.626147E12, 6516.483333333334], [1.62614688E12, 6615.283333333334], [1.62614706E12, 6440.466666666666], [1.62614676E12, 269.55], [1.62614694E12, 6612.266666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62614706E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 267.43333333333334, "minX": 1.62614676E12, "maxY": 7694.383333333333, "series": [{"data": [[1.62614682E12, 7694.383333333333], [1.626147E12, 6516.483333333334], [1.62614688E12, 6615.283333333334], [1.62614706E12, 6445.466666666666], [1.62614676E12, 267.43333333333334], [1.62614694E12, 6612.266666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62614706E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 267.43333333333334, "minX": 1.62614676E12, "maxY": 7694.383333333333, "series": [{"data": [[1.62614682E12, 7694.383333333333], [1.626147E12, 6516.483333333334], [1.62614688E12, 6615.283333333334], [1.62614706E12, 6445.466666666666], [1.62614676E12, 267.43333333333334], [1.62614694E12, 6612.266666666666]], "isOverall": false, "label": "user2role-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62614706E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 267.43333333333334, "minX": 1.62614676E12, "maxY": 7694.383333333333, "series": [{"data": [[1.62614682E12, 7694.383333333333], [1.626147E12, 6516.483333333334], [1.62614688E12, 6615.283333333334], [1.62614706E12, 6445.466666666666], [1.62614676E12, 267.43333333333334], [1.62614694E12, 6612.266666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62614706E12, "title": "Total Transactions Per Second"}},
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

