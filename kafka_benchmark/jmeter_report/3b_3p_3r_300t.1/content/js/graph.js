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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1088.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 5.0], [8.1, 5.0], [8.2, 5.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 6.0], [16.8, 6.0], [16.9, 6.0], [17.0, 6.0], [17.1, 6.0], [17.2, 6.0], [17.3, 6.0], [17.4, 6.0], [17.5, 6.0], [17.6, 6.0], [17.7, 6.0], [17.8, 6.0], [17.9, 6.0], [18.0, 6.0], [18.1, 6.0], [18.2, 6.0], [18.3, 6.0], [18.4, 6.0], [18.5, 6.0], [18.6, 6.0], [18.7, 6.0], [18.8, 6.0], [18.9, 6.0], [19.0, 6.0], [19.1, 6.0], [19.2, 6.0], [19.3, 6.0], [19.4, 6.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 6.0], [20.0, 6.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 6.0], [26.9, 6.0], [27.0, 6.0], [27.1, 6.0], [27.2, 6.0], [27.3, 6.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 8.0], [37.9, 8.0], [38.0, 8.0], [38.1, 8.0], [38.2, 8.0], [38.3, 8.0], [38.4, 8.0], [38.5, 8.0], [38.6, 8.0], [38.7, 8.0], [38.8, 8.0], [38.9, 8.0], [39.0, 8.0], [39.1, 8.0], [39.2, 8.0], [39.3, 8.0], [39.4, 8.0], [39.5, 8.0], [39.6, 8.0], [39.7, 8.0], [39.8, 8.0], [39.9, 8.0], [40.0, 8.0], [40.1, 8.0], [40.2, 8.0], [40.3, 8.0], [40.4, 8.0], [40.5, 8.0], [40.6, 8.0], [40.7, 8.0], [40.8, 8.0], [40.9, 8.0], [41.0, 8.0], [41.1, 8.0], [41.2, 8.0], [41.3, 8.0], [41.4, 8.0], [41.5, 8.0], [41.6, 8.0], [41.7, 8.0], [41.8, 8.0], [41.9, 8.0], [42.0, 8.0], [42.1, 8.0], [42.2, 8.0], [42.3, 8.0], [42.4, 8.0], [42.5, 8.0], [42.6, 8.0], [42.7, 8.0], [42.8, 8.0], [42.9, 8.0], [43.0, 8.0], [43.1, 8.0], [43.2, 8.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 8.0], [44.0, 8.0], [44.1, 8.0], [44.2, 8.0], [44.3, 8.0], [44.4, 8.0], [44.5, 8.0], [44.6, 8.0], [44.7, 8.0], [44.8, 8.0], [44.9, 8.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 8.0], [46.6, 8.0], [46.7, 8.0], [46.8, 8.0], [46.9, 8.0], [47.0, 9.0], [47.1, 9.0], [47.2, 9.0], [47.3, 9.0], [47.4, 9.0], [47.5, 9.0], [47.6, 9.0], [47.7, 9.0], [47.8, 9.0], [47.9, 9.0], [48.0, 9.0], [48.1, 9.0], [48.2, 9.0], [48.3, 9.0], [48.4, 9.0], [48.5, 9.0], [48.6, 9.0], [48.7, 9.0], [48.8, 9.0], [48.9, 9.0], [49.0, 9.0], [49.1, 9.0], [49.2, 9.0], [49.3, 9.0], [49.4, 9.0], [49.5, 9.0], [49.6, 9.0], [49.7, 9.0], [49.8, 9.0], [49.9, 9.0], [50.0, 9.0], [50.1, 9.0], [50.2, 9.0], [50.3, 9.0], [50.4, 9.0], [50.5, 9.0], [50.6, 9.0], [50.7, 9.0], [50.8, 9.0], [50.9, 9.0], [51.0, 9.0], [51.1, 9.0], [51.2, 9.0], [51.3, 9.0], [51.4, 9.0], [51.5, 9.0], [51.6, 9.0], [51.7, 9.0], [51.8, 9.0], [51.9, 9.0], [52.0, 9.0], [52.1, 9.0], [52.2, 9.0], [52.3, 9.0], [52.4, 9.0], [52.5, 9.0], [52.6, 9.0], [52.7, 9.0], [52.8, 9.0], [52.9, 9.0], [53.0, 9.0], [53.1, 9.0], [53.2, 9.0], [53.3, 9.0], [53.4, 9.0], [53.5, 9.0], [53.6, 9.0], [53.7, 9.0], [53.8, 9.0], [53.9, 9.0], [54.0, 9.0], [54.1, 9.0], [54.2, 9.0], [54.3, 9.0], [54.4, 9.0], [54.5, 9.0], [54.6, 9.0], [54.7, 9.0], [54.8, 9.0], [54.9, 10.0], [55.0, 10.0], [55.1, 10.0], [55.2, 10.0], [55.3, 10.0], [55.4, 10.0], [55.5, 10.0], [55.6, 10.0], [55.7, 10.0], [55.8, 10.0], [55.9, 10.0], [56.0, 10.0], [56.1, 10.0], [56.2, 10.0], [56.3, 10.0], [56.4, 10.0], [56.5, 10.0], [56.6, 10.0], [56.7, 10.0], [56.8, 10.0], [56.9, 10.0], [57.0, 10.0], [57.1, 10.0], [57.2, 10.0], [57.3, 10.0], [57.4, 10.0], [57.5, 10.0], [57.6, 10.0], [57.7, 10.0], [57.8, 10.0], [57.9, 10.0], [58.0, 10.0], [58.1, 10.0], [58.2, 10.0], [58.3, 10.0], [58.4, 10.0], [58.5, 10.0], [58.6, 10.0], [58.7, 10.0], [58.8, 10.0], [58.9, 10.0], [59.0, 10.0], [59.1, 10.0], [59.2, 10.0], [59.3, 10.0], [59.4, 10.0], [59.5, 10.0], [59.6, 10.0], [59.7, 10.0], [59.8, 10.0], [59.9, 10.0], [60.0, 10.0], [60.1, 10.0], [60.2, 10.0], [60.3, 10.0], [60.4, 10.0], [60.5, 10.0], [60.6, 10.0], [60.7, 10.0], [60.8, 10.0], [60.9, 10.0], [61.0, 10.0], [61.1, 10.0], [61.2, 10.0], [61.3, 10.0], [61.4, 10.0], [61.5, 10.0], [61.6, 10.0], [61.7, 10.0], [61.8, 11.0], [61.9, 11.0], [62.0, 11.0], [62.1, 11.0], [62.2, 11.0], [62.3, 11.0], [62.4, 11.0], [62.5, 11.0], [62.6, 11.0], [62.7, 11.0], [62.8, 11.0], [62.9, 11.0], [63.0, 11.0], [63.1, 11.0], [63.2, 11.0], [63.3, 11.0], [63.4, 11.0], [63.5, 11.0], [63.6, 11.0], [63.7, 11.0], [63.8, 11.0], [63.9, 11.0], [64.0, 11.0], [64.1, 11.0], [64.2, 11.0], [64.3, 11.0], [64.4, 11.0], [64.5, 11.0], [64.6, 11.0], [64.7, 11.0], [64.8, 11.0], [64.9, 11.0], [65.0, 11.0], [65.1, 11.0], [65.2, 11.0], [65.3, 11.0], [65.4, 11.0], [65.5, 11.0], [65.6, 11.0], [65.7, 11.0], [65.8, 11.0], [65.9, 11.0], [66.0, 11.0], [66.1, 11.0], [66.2, 11.0], [66.3, 11.0], [66.4, 11.0], [66.5, 11.0], [66.6, 11.0], [66.7, 11.0], [66.8, 11.0], [66.9, 11.0], [67.0, 11.0], [67.1, 11.0], [67.2, 11.0], [67.3, 11.0], [67.4, 11.0], [67.5, 11.0], [67.6, 12.0], [67.7, 12.0], [67.8, 12.0], [67.9, 12.0], [68.0, 12.0], [68.1, 12.0], [68.2, 12.0], [68.3, 12.0], [68.4, 12.0], [68.5, 12.0], [68.6, 12.0], [68.7, 12.0], [68.8, 12.0], [68.9, 12.0], [69.0, 12.0], [69.1, 12.0], [69.2, 12.0], [69.3, 12.0], [69.4, 12.0], [69.5, 12.0], [69.6, 12.0], [69.7, 12.0], [69.8, 12.0], [69.9, 12.0], [70.0, 12.0], [70.1, 12.0], [70.2, 12.0], [70.3, 12.0], [70.4, 12.0], [70.5, 12.0], [70.6, 12.0], [70.7, 12.0], [70.8, 12.0], [70.9, 12.0], [71.0, 12.0], [71.1, 12.0], [71.2, 12.0], [71.3, 12.0], [71.4, 12.0], [71.5, 12.0], [71.6, 12.0], [71.7, 12.0], [71.8, 12.0], [71.9, 12.0], [72.0, 12.0], [72.1, 12.0], [72.2, 12.0], [72.3, 12.0], [72.4, 12.0], [72.5, 13.0], [72.6, 13.0], [72.7, 13.0], [72.8, 13.0], [72.9, 13.0], [73.0, 13.0], [73.1, 13.0], [73.2, 13.0], [73.3, 13.0], [73.4, 13.0], [73.5, 13.0], [73.6, 13.0], [73.7, 13.0], [73.8, 13.0], [73.9, 13.0], [74.0, 13.0], [74.1, 13.0], [74.2, 13.0], [74.3, 13.0], [74.4, 13.0], [74.5, 13.0], [74.6, 13.0], [74.7, 13.0], [74.8, 13.0], [74.9, 13.0], [75.0, 13.0], [75.1, 13.0], [75.2, 13.0], [75.3, 13.0], [75.4, 13.0], [75.5, 13.0], [75.6, 13.0], [75.7, 13.0], [75.8, 13.0], [75.9, 13.0], [76.0, 13.0], [76.1, 13.0], [76.2, 13.0], [76.3, 13.0], [76.4, 13.0], [76.5, 13.0], [76.6, 14.0], [76.7, 14.0], [76.8, 14.0], [76.9, 14.0], [77.0, 14.0], [77.1, 14.0], [77.2, 14.0], [77.3, 14.0], [77.4, 14.0], [77.5, 14.0], [77.6, 14.0], [77.7, 14.0], [77.8, 14.0], [77.9, 14.0], [78.0, 14.0], [78.1, 14.0], [78.2, 14.0], [78.3, 14.0], [78.4, 14.0], [78.5, 14.0], [78.6, 14.0], [78.7, 14.0], [78.8, 14.0], [78.9, 14.0], [79.0, 14.0], [79.1, 14.0], [79.2, 14.0], [79.3, 14.0], [79.4, 14.0], [79.5, 14.0], [79.6, 14.0], [79.7, 14.0], [79.8, 14.0], [79.9, 15.0], [80.0, 15.0], [80.1, 15.0], [80.2, 15.0], [80.3, 15.0], [80.4, 15.0], [80.5, 15.0], [80.6, 15.0], [80.7, 15.0], [80.8, 15.0], [80.9, 15.0], [81.0, 15.0], [81.1, 15.0], [81.2, 15.0], [81.3, 15.0], [81.4, 15.0], [81.5, 15.0], [81.6, 15.0], [81.7, 15.0], [81.8, 15.0], [81.9, 15.0], [82.0, 15.0], [82.1, 15.0], [82.2, 15.0], [82.3, 15.0], [82.4, 15.0], [82.5, 16.0], [82.6, 16.0], [82.7, 16.0], [82.8, 16.0], [82.9, 16.0], [83.0, 16.0], [83.1, 16.0], [83.2, 16.0], [83.3, 16.0], [83.4, 16.0], [83.5, 16.0], [83.6, 16.0], [83.7, 16.0], [83.8, 16.0], [83.9, 16.0], [84.0, 16.0], [84.1, 16.0], [84.2, 16.0], [84.3, 16.0], [84.4, 16.0], [84.5, 16.0], [84.6, 17.0], [84.7, 17.0], [84.8, 17.0], [84.9, 17.0], [85.0, 17.0], [85.1, 17.0], [85.2, 17.0], [85.3, 17.0], [85.4, 17.0], [85.5, 17.0], [85.6, 17.0], [85.7, 17.0], [85.8, 17.0], [85.9, 17.0], [86.0, 17.0], [86.1, 17.0], [86.2, 17.0], [86.3, 18.0], [86.4, 18.0], [86.5, 18.0], [86.6, 18.0], [86.7, 18.0], [86.8, 18.0], [86.9, 18.0], [87.0, 18.0], [87.1, 18.0], [87.2, 18.0], [87.3, 18.0], [87.4, 18.0], [87.5, 18.0], [87.6, 19.0], [87.7, 19.0], [87.8, 19.0], [87.9, 19.0], [88.0, 19.0], [88.1, 19.0], [88.2, 19.0], [88.3, 19.0], [88.4, 19.0], [88.5, 19.0], [88.6, 19.0], [88.7, 20.0], [88.8, 20.0], [88.9, 20.0], [89.0, 20.0], [89.1, 20.0], [89.2, 20.0], [89.3, 20.0], [89.4, 20.0], [89.5, 21.0], [89.6, 21.0], [89.7, 21.0], [89.8, 21.0], [89.9, 21.0], [90.0, 21.0], [90.1, 21.0], [90.2, 22.0], [90.3, 22.0], [90.4, 22.0], [90.5, 22.0], [90.6, 22.0], [90.7, 22.0], [90.8, 23.0], [90.9, 23.0], [91.0, 23.0], [91.1, 23.0], [91.2, 24.0], [91.3, 24.0], [91.4, 24.0], [91.5, 24.0], [91.6, 25.0], [91.7, 25.0], [91.8, 25.0], [91.9, 26.0], [92.0, 26.0], [92.1, 26.0], [92.2, 27.0], [92.3, 27.0], [92.4, 28.0], [92.5, 28.0], [92.6, 29.0], [92.7, 29.0], [92.8, 30.0], [92.9, 31.0], [93.0, 31.0], [93.1, 32.0], [93.2, 33.0], [93.3, 34.0], [93.4, 35.0], [93.5, 36.0], [93.6, 38.0], [93.7, 39.0], [93.8, 41.0], [93.9, 43.0], [94.0, 45.0], [94.1, 48.0], [94.2, 51.0], [94.3, 54.0], [94.4, 58.0], [94.5, 63.0], [94.6, 70.0], [94.7, 78.0], [94.8, 87.0], [94.9, 95.0], [95.0, 101.0], [95.1, 108.0], [95.2, 114.0], [95.3, 120.0], [95.4, 126.0], [95.5, 132.0], [95.6, 137.0], [95.7, 143.0], [95.8, 148.0], [95.9, 152.0], [96.0, 157.0], [96.1, 161.0], [96.2, 165.0], [96.3, 170.0], [96.4, 174.0], [96.5, 178.0], [96.6, 183.0], [96.7, 187.0], [96.8, 191.0], [96.9, 195.0], [97.0, 200.0], [97.1, 205.0], [97.2, 210.0], [97.3, 215.0], [97.4, 220.0], [97.5, 225.0], [97.6, 230.0], [97.7, 236.0], [97.8, 242.0], [97.9, 247.0], [98.0, 253.0], [98.1, 260.0], [98.2, 266.0], [98.3, 273.0], [98.4, 280.0], [98.5, 287.0], [98.6, 295.0], [98.7, 302.0], [98.8, 310.0], [98.9, 319.0], [99.0, 329.0], [99.1, 341.0], [99.2, 354.0], [99.3, 369.0], [99.4, 385.0], [99.5, 403.0], [99.6, 425.0], [99.7, 450.0], [99.8, 483.0], [99.9, 538.0], [100.0, 1088.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3743899.0, "series": [{"data": [[0.0, 3743899.0], [300.0, 32221.0], [600.0, 1167.0], [700.0, 503.0], [100.0, 79745.0], [200.0, 65696.0], [400.0, 13989.0], [800.0, 103.0], [900.0, 32.0], [500.0, 4679.0], [1000.0, 1.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6408.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3935627.0, "series": [{"data": [[0.0, 3935627.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6408.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 298.01643810871354, "minX": 1.6261758E12, "maxY": 300.0, "series": [{"data": [[1.6261758E12, 299.8553529202584], [1.62617598E12, 300.0], [1.62617592E12, 300.0], [1.6261761E12, 298.01643810871354], [1.62617604E12, 300.0], [1.62617586E12, 300.0]], "isOverall": false, "label": "role1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6261761E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 170.14285714285714, "series": [{"data": [[2.0, 1.0], [3.0, 1.5], [4.0, 1.3636363636363635], [5.0, 1.8], [6.0, 1.6666666666666667], [7.0, 1.7142857142857144], [8.0, 1.8], [9.0, 2.0], [10.0, 2.0], [11.0, 1.5], [12.0, 3.5], [13.0, 3.2], [14.0, 3.25], [15.0, 2.5], [16.0, 2.4999999999999996], [17.0, 2.2142857142857144], [19.0, 3.266666666666667], [20.0, 2.0], [21.0, 3.0], [22.0, 2.0], [23.0, 2.520833333333335], [24.0, 2.5882352941176467], [25.0, 5.571428571428571], [26.0, 5.571428571428571], [27.0, 4.0], [28.0, 2.5909090909090913], [29.0, 2.7999999999999994], [30.0, 2.5], [31.0, 3.2452830188679247], [33.0, 3.227272727272727], [32.0, 3.5714285714285716], [35.0, 2.0168539325842683], [34.0, 6.235294117647059], [37.0, 2.454545454545455], [36.0, 1.7199999999999995], [39.0, 3.052631578947368], [38.0, 3.6999999999999997], [41.0, 2.9201877934272296], [40.0, 1.6666666666666667], [43.0, 13.5], [42.0, 5.093333333333333], [45.0, 5.0], [44.0, 10.152173913043478], [47.0, 3.1052631578947367], [46.0, 4.5], [49.0, 6.611111111111111], [48.0, 1.8571428571428572], [51.0, 11.0], [50.0, 7.222222222222221], [52.0, 11.083333333333334], [55.0, 3.4761904761904763], [54.0, 4.570621468926554], [57.0, 3.704819277108433], [56.0, 4.166666666666667], [59.0, 4.0], [58.0, 3.911764705882353], [61.0, 3.372093023255814], [60.0, 4.428571428571429], [63.0, 7.511111111111112], [62.0, 3.548387096774195], [67.0, 4.5], [66.0, 5.0], [65.0, 4.0], [64.0, 6.127659574468085], [71.0, 4.8], [70.0, 4.322580645161289], [69.0, 5.0], [68.0, 4.333333333333334], [75.0, 4.896551724137932], [74.0, 4.2], [73.0, 4.777777777777778], [72.0, 3.5], [79.0, 5.481481481481481], [78.0, 5.0], [77.0, 5.2], [76.0, 5.615384615384616], [83.0, 7.0], [82.0, 7.5], [81.0, 6.733333333333333], [80.0, 6.499999999999999], [87.0, 7.2], [86.0, 5.75], [85.0, 5.5], [84.0, 6.25], [91.0, 9.79310344827586], [90.0, 10.458333333333336], [89.0, 9.5], [88.0, 7.982456140350877], [95.0, 11.0], [94.0, 7.0], [93.0, 7.749999999999999], [92.0, 8.5], [99.0, 6.857142857142857], [97.0, 6.124999999999999], [96.0, 7.6], [103.0, 6.0], [102.0, 7.999999999999999], [101.0, 10.5], [100.0, 7.333333333333333], [107.0, 8.0], [106.0, 8.666666666666666], [105.0, 7.666666666666667], [104.0, 9.88888888888889], [111.0, 12.11111111111111], [109.0, 10.142857142857144], [108.0, 8.8125], [115.0, 7.0], [113.0, 9.5], [112.0, 9.90909090909091], [119.0, 9.0], [118.0, 8.666666666666666], [117.0, 8.2], [116.0, 11.2], [122.0, 7.333333333333333], [121.0, 8.75], [120.0, 13.0], [127.0, 7.416666666666665], [126.0, 8.0], [125.0, 7.818181818181819], [124.0, 7.88888888888889], [135.0, 13.96875], [134.0, 10.461538461538458], [133.0, 8.543478260869568], [131.0, 5.909090909090909], [130.0, 7.0], [129.0, 7.0], [128.0, 7.75], [143.0, 6.7894736842105265], [142.0, 7.0], [141.0, 7.5], [140.0, 4.0], [139.0, 3.0], [137.0, 13.0], [136.0, 9.15], [151.0, 7.999999999999998], [150.0, 7.476190476190476], [149.0, 6.7], [148.0, 7.083333333333332], [147.0, 7.7457627118644075], [146.0, 7.636363636363635], [145.0, 7.666666666666667], [144.0, 6.0], [159.0, 35.68750000000001], [158.0, 14.227272727272727], [156.0, 6.25], [155.0, 43.69230769230769], [154.0, 6.962962962962963], [153.0, 7.666666666666667], [152.0, 8.714285714285714], [167.0, 6.0], [166.0, 18.68], [165.0, 33.0], [164.0, 6.5], [163.0, 6.0], [162.0, 6.818181818181818], [161.0, 7.0], [160.0, 7.0], [175.0, 8.236363636363636], [174.0, 9.225352112676058], [173.0, 5.730769230769233], [172.0, 7.0], [171.0, 5.312500000000001], [170.0, 5.888888888888889], [169.0, 5.625], [168.0, 6.48], [183.0, 52.58333333333333], [181.0, 111.75], [180.0, 42.75], [179.0, 5.0], [178.0, 37.35714285714284], [177.0, 17.76923076923077], [176.0, 6.2], [191.0, 59.06451612903226], [190.0, 20.36111111111111], [189.0, 44.71428571428571], [187.0, 28.583333333333332], [186.0, 55.99999999999999], [185.0, 28.833333333333336], [184.0, 51.666666666666664], [192.0, 78.48000000000002], [193.0, 129.5], [194.0, 36.29729729729731], [195.0, 15.490384615384617], [196.0, 97.92307692307693], [197.0, 24.73684210526316], [198.0, 133.5], [199.0, 141.24], [200.0, 97.61458333333329], [201.0, 43.47619047619048], [205.0, 126.85714285714285], [206.0, 72.23999999999998], [203.0, 108.77777777777779], [207.0, 62.94594594594595], [202.0, 33.333333333333336], [204.0, 7.333333333333333], [208.0, 47.1], [209.0, 30.571428571428562], [210.0, 28.66666666666667], [211.0, 33.04347826086957], [215.0, 61.84210526315789], [214.0, 80.0], [213.0, 24.857142857142858], [212.0, 9.0], [223.0, 91.05555555555556], [222.0, 84.40000000000002], [221.0, 79.12], [218.0, 73.19999999999999], [217.0, 26.54545454545454], [216.0, 48.260869565217384], [219.0, 43.77777777777777], [225.0, 56.73170731707317], [226.0, 19.42857142857143], [228.0, 49.125], [229.0, 35.391304347826086], [230.0, 48.80000000000001], [224.0, 56.25], [231.0, 60.29032258064516], [227.0, 56.5], [232.0, 53.0], [233.0, 51.625], [234.0, 35.3125], [235.0, 20.840909090909086], [236.0, 21.692307692307693], [237.0, 20.30769230769231], [238.0, 9.0], [239.0, 63.78947368421051], [240.0, 8.25], [241.0, 26.078947368421055], [242.0, 11.000000000000002], [243.0, 24.72727272727273], [245.0, 23.292307692307695], [246.0, 54.625], [247.0, 23.666666666666668], [255.0, 100.71428571428572], [254.0, 22.5], [253.0, 116.27272727272728], [251.0, 111.66666666666666], [249.0, 170.14285714285714], [250.0, 88.0], [248.0, 86.75862068965516], [270.0, 38.3125], [271.0, 54.833333333333336], [269.0, 73.66666666666667], [268.0, 66.21739130434783], [267.0, 54.35999999999999], [266.0, 68.66666666666667], [264.0, 49.192307692307686], [263.0, 94.3], [259.0, 98.0], [258.0, 115.8], [256.0, 93.70000000000002], [262.0, 45.68181818181818], [261.0, 17.0], [260.0, 31.0], [274.0, 52.38095238095237], [273.0, 26.18181818181818], [272.0, 126.9375], [275.0, 45.0], [284.0, 15.625], [285.0, 14.291666666666666], [287.0, 28.245283018867934], [286.0, 15.181818181818183], [276.0, 27.88888888888889], [277.0, 128.8], [278.0, 63.111111111111114], [279.0, 74.71428571428571], [280.0, 5.375000000000001], [281.0, 23.391304347826086], [282.0, 27.133333333333322], [283.0, 19.352941176470587], [290.0, 35.90909090909091], [294.0, 10.635514018691588], [293.0, 28.154411764705877], [291.0, 17.749999999999993], [300.0, 22.44760000528619], [292.0, 11.925], [289.0, 11.896551724137929], [288.0, 117.77083333333333], [295.0, 9.422222222222226], [296.0, 75.37446808510637], [297.0, 33.04255319148936], [298.0, 13.2], [299.0, 118.95049504950498], [1.0, 1.5]], "isOverall": false, "label": "user2role", "isController": false}, {"data": [[299.7840660978392, 22.456029436572294]], "isOverall": false, "label": "user2role-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 801892.4, "minX": 1.6261758E12, "maxY": 3403717.566666667, "series": [{"data": [[1.6261758E12, 843209.6666666666], [1.62617598E12, 1575954.3166666667], [1.62617592E12, 1586342.6833333333], [1.6261761E12, 801892.4], [1.62617604E12, 1551115.35], [1.62617586E12, 1572280.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6261758E12, 1800230.95], [1.62617598E12, 3381430.6166666667], [1.62617592E12, 3403717.566666667], [1.6261761E12, 1720562.9], [1.62617604E12, 3328128.4166666665], [1.62617586E12, 3363862.2333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6261761E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 18.776255162984558, "minX": 1.6261758E12, "maxY": 23.141818040323717, "series": [{"data": [[1.6261758E12, 18.776255162984558], [1.62617598E12, 22.808978953025207], [1.62617592E12, 22.752652484572607], [1.6261761E12, 22.957120922461], [1.62617604E12, 23.141818040323717], [1.62617586E12, 22.844141386741146]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6261761E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 18.77416730097877, "minX": 1.6261758E12, "maxY": 23.141475625651903, "series": [{"data": [[1.6261758E12, 18.77416730097877], [1.62617598E12, 22.80869172252749], [1.62617592E12, 22.75220226605838], [1.6261761E12, 22.95681233159202], [1.62617604E12, 23.141475625651903], [1.62617586E12, 22.843896989952302]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6261761E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0211204888959412, "minX": 1.6261758E12, "maxY": 0.1487583782919611, "series": [{"data": [[1.6261758E12, 0.1487583782919611], [1.62617598E12, 0.024396720210688103], [1.62617592E12, 0.02371954049810665], [1.6261761E12, 0.021859774302157846], [1.62617604E12, 0.02435554056770793], [1.62617586E12, 0.0211204888959412]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6261761E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6261758E12, "maxY": 1088.0, "series": [{"data": [[1.6261758E12, 1088.0], [1.62617598E12, 779.0], [1.62617592E12, 927.0], [1.6261761E12, 760.0], [1.62617604E12, 752.0], [1.62617586E12, 727.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6261758E12, 22.0], [1.62617598E12, 26.0], [1.62617592E12, 17.0], [1.6261761E12, 17.0], [1.62617604E12, 15.0], [1.62617586E12, 18.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6261758E12, 252.0], [1.62617598E12, 247.0], [1.62617592E12, 291.0], [1.6261761E12, 406.0], [1.62617604E12, 317.0], [1.62617586E12, 339.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6261758E12, 56.0], [1.62617598E12, 115.95000000000073], [1.62617592E12, 168.90000000000146], [1.6261761E12, 139.0], [1.62617604E12, 90.95000000000073], [1.62617586E12, 186.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6261758E12, 1.0], [1.62617598E12, 1.0], [1.62617592E12, 1.0], [1.6261761E12, 1.0], [1.62617604E12, 1.0], [1.62617586E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6261758E12, 11.0], [1.62617598E12, 11.0], [1.62617592E12, 8.0], [1.6261761E12, 8.0], [1.62617604E12, 7.0], [1.62617586E12, 8.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6261761E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6.0, "minX": 413.0, "maxY": 68.0, "series": [{"data": [[17027.0, 14.0], [18931.0, 12.0], [8317.0, 27.0], [9157.0, 6.0], [9525.0, 9.0], [9413.0, 9.0], [10537.0, 9.0], [10297.0, 9.0], [11209.0, 9.0], [10769.0, 9.0], [10869.0, 8.0], [11445.0, 9.0], [11361.0, 8.0], [11633.0, 10.0], [11589.0, 8.0], [11873.0, 10.0], [11997.0, 9.0], [11889.0, 9.0], [11877.0, 8.0], [12181.0, 8.0], [11897.0, 9.0], [12013.0, 9.0], [12205.0, 8.0], [12101.0, 7.0], [11849.0, 8.0], [12721.0, 8.0], [12545.0, 7.0], [12677.0, 8.0], [12685.0, 8.0], [12397.0, 8.0], [12697.0, 8.0], [12481.0, 7.0], [12321.0, 9.0], [12749.0, 9.0], [12921.0, 7.0], [13009.0, 7.0], [13149.0, 8.0], [13145.0, 9.0], [12913.0, 9.0], [12829.0, 8.0], [13225.0, 8.0], [13121.0, 7.0], [13289.0, 8.0], [13189.0, 8.0], [13777.0, 8.0], [13321.0, 8.0], [13385.0, 9.0], [13697.0, 8.0], [13977.0, 14.0], [14013.0, 9.0], [14073.0, 11.0], [14165.0, 8.0], [13973.0, 12.0], [14245.0, 9.0], [13957.0, 7.0], [14841.0, 10.0], [14657.0, 9.0], [14357.0, 7.0], [14497.0, 9.0], [14621.0, 9.0], [14661.0, 8.0], [14445.0, 9.0], [14745.0, 8.0], [14877.0, 7.0], [14885.0, 7.0], [14965.0, 8.0], [14985.0, 8.0], [15829.0, 14.0], [15841.0, 9.0], [15681.0, 8.0], [15633.0, 9.0], [15493.0, 9.0], [15941.0, 15.0], [16522.0, 15.0], [16954.0, 14.0], [18098.0, 13.0], [413.0, 68.0], [17241.0, 14.0], [18585.0, 14.0], [3455.0, 31.0], [4844.0, 17.0], [5306.0, 23.0], [5540.0, 26.0], [7412.0, 12.0], [8952.0, 8.0], [9536.0, 9.0], [10048.0, 17.0], [10040.0, 9.0], [9920.0, 9.0], [9980.0, 10.0], [10540.0, 8.0], [10628.0, 8.0], [10868.0, 9.0], [10776.0, 9.0], [10948.0, 8.0], [11188.0, 8.0], [11680.0, 7.0], [11664.0, 10.0], [11272.0, 9.0], [11548.0, 9.0], [11876.0, 8.0], [12004.0, 8.0], [12000.0, 9.0], [11832.0, 7.0], [12280.0, 8.0], [12068.0, 8.0], [11864.0, 8.0], [12180.0, 9.0], [12156.0, 11.0], [11844.0, 11.0], [12552.0, 7.0], [12744.0, 9.0], [12456.0, 8.0], [12372.0, 9.0], [12544.0, 9.0], [12864.0, 8.0], [13212.0, 7.0], [12956.0, 9.0], [12928.0, 9.0], [13300.0, 8.0], [13104.0, 8.0], [13080.0, 7.0], [13128.0, 9.0], [13172.0, 8.0], [12848.0, 8.0], [12840.0, 13.0], [13296.0, 9.0], [13260.0, 9.0], [12896.0, 8.0], [12868.0, 8.0], [13548.0, 9.0], [13340.0, 8.0], [13484.0, 9.0], [13604.0, 8.0], [14320.0, 8.0], [14316.0, 9.0], [14164.0, 8.0], [14272.0, 8.0], [13884.0, 9.0], [14036.0, 8.0], [14296.0, 8.0], [14184.0, 9.0], [13916.0, 9.0], [14504.0, 8.0], [14812.0, 7.0], [14644.0, 8.0], [14444.0, 9.0], [14736.0, 9.0], [14744.0, 10.0], [14696.0, 8.0], [14972.0, 7.0], [15532.0, 12.0], [15560.0, 8.0], [15648.0, 9.0], [15700.0, 9.0], [15452.0, 8.0], [16316.0, 8.0], [16016.0, 10.0], [16919.0, 13.0], [16519.0, 15.0], [8471.0, 9.0], [10175.0, 9.0], [10095.0, 9.0], [9739.0, 8.0], [10447.0, 9.0], [10431.0, 8.0], [10343.0, 8.0], [11235.0, 8.0], [10871.0, 9.0], [11187.0, 8.0], [11387.0, 8.0], [11299.0, 7.0], [11551.0, 10.0], [11347.0, 8.0], [11435.0, 8.0], [12163.0, 7.0], [12219.0, 8.0], [12047.0, 8.0], [11955.0, 8.0], [12275.0, 9.0], [11991.0, 9.0], [12755.0, 8.0], [12651.0, 11.0], [12419.0, 7.0], [12735.0, 8.0], [12315.0, 9.0], [12535.0, 9.0], [12431.0, 9.0], [12595.0, 9.0], [12563.0, 9.0], [12327.0, 8.0], [13055.0, 9.0], [13119.0, 8.0], [13007.0, 9.0], [12863.0, 9.0], [13035.0, 9.0], [13263.0, 8.0], [13171.0, 10.0], [13735.0, 9.0], [13439.0, 8.0], [13595.0, 9.0], [13547.0, 8.0], [13355.0, 10.0], [13475.0, 8.0], [13711.0, 9.0], [13607.0, 8.0], [13663.0, 9.0], [13655.0, 9.0], [13683.0, 8.0], [14007.0, 9.0], [13871.0, 8.0], [14323.0, 9.0], [14155.0, 8.0], [13875.0, 13.0], [14235.0, 9.0], [14099.0, 8.0], [14363.0, 8.0], [14491.0, 8.0], [14651.0, 7.0], [14367.0, 12.0], [14683.0, 7.0], [15343.0, 8.0], [15195.0, 9.0], [15011.0, 12.0], [15511.0, 16.0], [15583.0, 7.0], [15587.0, 9.0], [15591.0, 8.0], [15999.0, 13.0], [16071.0, 9.0], [16211.0, 7.0], [16319.0, 7.0], [16470.0, 10.0], [18182.0, 14.0], [17726.0, 13.0], [17229.0, 13.0], [10166.0, 8.0], [10618.0, 9.0], [10434.0, 8.0], [11006.0, 8.0], [11222.0, 9.0], [11218.0, 8.0], [11034.0, 10.0], [10886.0, 8.0], [11150.0, 9.0], [11462.0, 8.0], [11442.0, 7.0], [11694.0, 9.0], [11330.0, 8.0], [11766.0, 9.0], [11734.0, 8.0], [12210.0, 10.0], [12182.0, 9.0], [12710.0, 8.0], [12550.0, 8.0], [12606.0, 8.0], [12530.0, 8.0], [12666.0, 8.0], [12450.0, 8.0], [13226.0, 15.0], [13258.0, 8.0], [13186.0, 9.0], [13034.0, 12.0], [13294.0, 8.0], [13342.0, 7.0], [13546.0, 8.0], [13754.0, 8.0], [13566.0, 8.0], [13446.0, 8.0], [13706.0, 9.0], [13570.0, 10.0], [13526.0, 9.0], [13634.0, 10.0], [13694.0, 9.0], [14282.0, 8.0], [13930.0, 9.0], [14110.0, 8.0], [14298.0, 8.0], [14114.0, 9.0], [14022.0, 8.0], [14122.0, 10.0], [14046.0, 10.0], [14766.0, 9.0], [14762.0, 8.0], [14598.0, 9.0], [14566.0, 8.0], [14758.0, 8.0], [15062.0, 10.0], [15054.0, 9.0], [14934.0, 10.0], [15518.0, 7.0], [16102.0, 8.0], [16218.0, 7.0], [16900.0, 13.0], [18820.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18931.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6.0, "minX": 413.0, "maxY": 66.0, "series": [{"data": [[17027.0, 14.0], [18931.0, 12.0], [8317.0, 27.0], [9157.0, 6.0], [9525.0, 9.0], [9413.0, 9.0], [10537.0, 9.0], [10297.0, 9.0], [11209.0, 9.0], [10769.0, 9.0], [10869.0, 8.0], [11445.0, 9.0], [11361.0, 8.0], [11633.0, 10.0], [11589.0, 8.0], [11873.0, 10.0], [11997.0, 9.0], [11889.0, 9.0], [11877.0, 8.0], [12181.0, 8.0], [11897.0, 9.0], [12013.0, 9.0], [12205.0, 8.0], [12101.0, 7.0], [11849.0, 8.0], [12721.0, 8.0], [12545.0, 7.0], [12677.0, 8.0], [12685.0, 8.0], [12397.0, 8.0], [12697.0, 8.0], [12481.0, 7.0], [12321.0, 9.0], [12749.0, 9.0], [12921.0, 7.0], [13009.0, 7.0], [13149.0, 8.0], [13145.0, 9.0], [12913.0, 9.0], [12829.0, 8.0], [13225.0, 8.0], [13121.0, 7.0], [13289.0, 8.0], [13189.0, 8.0], [13777.0, 8.0], [13321.0, 8.0], [13385.0, 9.0], [13697.0, 8.0], [13977.0, 14.0], [14013.0, 9.0], [14073.0, 11.0], [14165.0, 8.0], [13973.0, 12.0], [14245.0, 9.0], [13957.0, 7.0], [14841.0, 10.0], [14657.0, 9.0], [14357.0, 7.0], [14497.0, 9.0], [14621.0, 9.0], [14661.0, 8.0], [14445.0, 9.0], [14745.0, 8.0], [14877.0, 7.0], [14885.0, 7.0], [14965.0, 8.0], [14985.0, 8.0], [15829.0, 14.0], [15841.0, 9.0], [15681.0, 8.0], [15633.0, 9.0], [15493.0, 9.0], [15941.0, 15.0], [16522.0, 15.0], [16954.0, 14.0], [18098.0, 13.0], [413.0, 66.0], [17241.0, 14.0], [18585.0, 14.0], [3455.0, 31.0], [4844.0, 17.0], [5306.0, 23.0], [5540.0, 25.5], [7412.0, 12.0], [8952.0, 8.0], [9536.0, 9.0], [10048.0, 17.0], [10040.0, 9.0], [9920.0, 9.0], [9980.0, 10.0], [10540.0, 8.0], [10628.0, 8.0], [10868.0, 9.0], [10776.0, 9.0], [10948.0, 8.0], [11188.0, 8.0], [11680.0, 7.0], [11664.0, 10.0], [11272.0, 9.0], [11548.0, 9.0], [11876.0, 8.0], [12004.0, 8.0], [12000.0, 9.0], [11832.0, 7.0], [12280.0, 8.0], [12068.0, 8.0], [11864.0, 8.0], [12180.0, 9.0], [12156.0, 11.0], [11844.0, 11.0], [12552.0, 7.0], [12744.0, 9.0], [12456.0, 8.0], [12372.0, 9.0], [12544.0, 9.0], [12864.0, 8.0], [13212.0, 7.0], [12956.0, 9.0], [12928.0, 9.0], [13300.0, 8.0], [13104.0, 8.0], [13080.0, 7.0], [13128.0, 9.0], [13172.0, 8.0], [12848.0, 8.0], [12840.0, 13.0], [13296.0, 9.0], [13260.0, 9.0], [12896.0, 8.0], [12868.0, 8.0], [13548.0, 9.0], [13340.0, 8.0], [13484.0, 9.0], [13604.0, 8.0], [14320.0, 8.0], [14316.0, 9.0], [14164.0, 8.0], [14272.0, 8.0], [13884.0, 9.0], [14036.0, 8.0], [14296.0, 8.0], [14184.0, 9.0], [13916.0, 9.0], [14504.0, 8.0], [14812.0, 7.0], [14644.0, 8.0], [14444.0, 9.0], [14736.0, 9.0], [14744.0, 10.0], [14696.0, 8.0], [14972.0, 7.0], [15532.0, 12.0], [15560.0, 8.0], [15648.0, 9.0], [15700.0, 9.0], [15452.0, 8.0], [16316.0, 8.0], [16016.0, 10.0], [16919.0, 13.0], [16519.0, 15.0], [8471.0, 9.0], [10175.0, 9.0], [10095.0, 9.0], [9739.0, 8.0], [10447.0, 9.0], [10431.0, 8.0], [10343.0, 8.0], [11235.0, 8.0], [10871.0, 9.0], [11187.0, 8.0], [11387.0, 8.0], [11299.0, 7.0], [11551.0, 10.0], [11347.0, 8.0], [11435.0, 8.0], [12163.0, 7.0], [12219.0, 8.0], [12047.0, 8.0], [11955.0, 8.0], [12275.0, 9.0], [11991.0, 9.0], [12755.0, 8.0], [12651.0, 11.0], [12419.0, 7.0], [12735.0, 8.0], [12315.0, 9.0], [12535.0, 9.0], [12431.0, 9.0], [12595.0, 9.0], [12563.0, 9.0], [12327.0, 8.0], [13055.0, 9.0], [13119.0, 8.0], [13007.0, 9.0], [12863.0, 9.0], [13035.0, 9.0], [13263.0, 8.0], [13171.0, 10.0], [13735.0, 9.0], [13439.0, 8.0], [13595.0, 9.0], [13547.0, 8.0], [13355.0, 10.0], [13475.0, 8.0], [13711.0, 9.0], [13607.0, 8.0], [13663.0, 9.0], [13655.0, 9.0], [13683.0, 8.0], [14007.0, 9.0], [13871.0, 8.0], [14323.0, 9.0], [14155.0, 8.0], [13875.0, 13.0], [14235.0, 9.0], [14099.0, 8.0], [14363.0, 8.0], [14491.0, 8.0], [14651.0, 7.0], [14367.0, 12.0], [14683.0, 7.0], [15343.0, 8.0], [15195.0, 9.0], [15011.0, 12.0], [15511.0, 16.0], [15583.0, 7.0], [15587.0, 9.0], [15591.0, 8.0], [15999.0, 13.0], [16071.0, 9.0], [16211.0, 7.0], [16319.0, 7.0], [16470.0, 10.0], [18182.0, 14.0], [17726.0, 13.0], [17229.0, 13.0], [10166.0, 8.0], [10618.0, 9.0], [10434.0, 8.0], [11006.0, 8.0], [11222.0, 9.0], [11218.0, 8.0], [11034.0, 10.0], [10886.0, 8.0], [11150.0, 9.0], [11462.0, 8.0], [11442.0, 7.0], [11694.0, 9.0], [11330.0, 8.0], [11766.0, 9.0], [11734.0, 8.0], [12210.0, 10.0], [12182.0, 9.0], [12710.0, 8.0], [12550.0, 8.0], [12606.0, 8.0], [12530.0, 8.0], [12666.0, 8.0], [12450.0, 8.0], [13226.0, 15.0], [13258.0, 8.0], [13186.0, 9.0], [13034.0, 12.0], [13294.0, 8.0], [13342.0, 7.0], [13546.0, 8.0], [13754.0, 8.0], [13566.0, 8.0], [13446.0, 8.0], [13706.0, 9.0], [13570.0, 10.0], [13526.0, 9.0], [13634.0, 10.0], [13694.0, 9.0], [14282.0, 8.0], [13930.0, 9.0], [14110.0, 8.0], [14298.0, 8.0], [14114.0, 9.0], [14022.0, 8.0], [14122.0, 10.0], [14046.0, 10.0], [14766.0, 9.0], [14762.0, 8.0], [14598.0, 9.0], [14566.0, 8.0], [14758.0, 8.0], [15062.0, 10.0], [15054.0, 9.0], [14934.0, 10.0], [15518.0, 7.0], [16102.0, 8.0], [16218.0, 7.0], [16900.0, 13.0], [18820.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18931.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6638.266666666666, "minX": 1.6261758E12, "maxY": 13141.733333333334, "series": [{"data": [[1.6261758E12, 6989.816666666667], [1.62617598E12, 13055.716666666667], [1.62617592E12, 13141.733333333334], [1.6261761E12, 6638.266666666666], [1.62617604E12, 12849.783333333333], [1.62617586E12, 13025.266666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6261761E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6643.1, "minX": 1.6261758E12, "maxY": 13141.766666666666, "series": [{"data": [[1.6261758E12, 6984.816666666667], [1.62617598E12, 13055.716666666667], [1.62617592E12, 13141.766666666666], [1.6261761E12, 6643.1], [1.62617604E12, 12849.916666666666], [1.62617586E12, 13025.266666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6261761E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6643.1, "minX": 1.6261758E12, "maxY": 13141.766666666666, "series": [{"data": [[1.6261758E12, 6984.816666666667], [1.62617598E12, 13055.716666666667], [1.62617592E12, 13141.766666666666], [1.6261761E12, 6643.1], [1.62617604E12, 12849.916666666666], [1.62617586E12, 13025.266666666666]], "isOverall": false, "label": "user2role-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6261761E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6643.1, "minX": 1.6261758E12, "maxY": 13141.766666666666, "series": [{"data": [[1.6261758E12, 6984.816666666667], [1.62617598E12, 13055.716666666667], [1.62617592E12, 13141.766666666666], [1.6261761E12, 6643.1], [1.62617604E12, 12849.916666666666], [1.62617586E12, 13025.266666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6261761E12, "title": "Total Transactions Per Second"}},
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

