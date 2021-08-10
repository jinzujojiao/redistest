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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2252.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 4.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 5.0], [7.5, 5.0], [7.6, 5.0], [7.7, 5.0], [7.8, 5.0], [7.9, 5.0], [8.0, 5.0], [8.1, 5.0], [8.2, 5.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 6.0], [16.0, 6.0], [16.1, 6.0], [16.2, 6.0], [16.3, 6.0], [16.4, 6.0], [16.5, 6.0], [16.6, 6.0], [16.7, 6.0], [16.8, 6.0], [16.9, 6.0], [17.0, 6.0], [17.1, 6.0], [17.2, 6.0], [17.3, 6.0], [17.4, 6.0], [17.5, 6.0], [17.6, 6.0], [17.7, 6.0], [17.8, 6.0], [17.9, 6.0], [18.0, 6.0], [18.1, 6.0], [18.2, 6.0], [18.3, 6.0], [18.4, 6.0], [18.5, 6.0], [18.6, 6.0], [18.7, 6.0], [18.8, 6.0], [18.9, 6.0], [19.0, 6.0], [19.1, 6.0], [19.2, 6.0], [19.3, 6.0], [19.4, 6.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 6.0], [20.0, 6.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 7.0], [26.9, 7.0], [27.0, 7.0], [27.1, 7.0], [27.2, 7.0], [27.3, 7.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 8.0], [38.0, 8.0], [38.1, 8.0], [38.2, 8.0], [38.3, 8.0], [38.4, 8.0], [38.5, 8.0], [38.6, 8.0], [38.7, 8.0], [38.8, 8.0], [38.9, 8.0], [39.0, 8.0], [39.1, 8.0], [39.2, 8.0], [39.3, 8.0], [39.4, 8.0], [39.5, 8.0], [39.6, 8.0], [39.7, 8.0], [39.8, 8.0], [39.9, 8.0], [40.0, 8.0], [40.1, 8.0], [40.2, 8.0], [40.3, 8.0], [40.4, 8.0], [40.5, 8.0], [40.6, 8.0], [40.7, 8.0], [40.8, 8.0], [40.9, 8.0], [41.0, 8.0], [41.1, 8.0], [41.2, 8.0], [41.3, 8.0], [41.4, 8.0], [41.5, 8.0], [41.6, 8.0], [41.7, 8.0], [41.8, 8.0], [41.9, 8.0], [42.0, 8.0], [42.1, 8.0], [42.2, 8.0], [42.3, 8.0], [42.4, 8.0], [42.5, 8.0], [42.6, 8.0], [42.7, 8.0], [42.8, 8.0], [42.9, 8.0], [43.0, 8.0], [43.1, 8.0], [43.2, 8.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 8.0], [44.0, 8.0], [44.1, 8.0], [44.2, 8.0], [44.3, 8.0], [44.4, 8.0], [44.5, 8.0], [44.6, 8.0], [44.7, 8.0], [44.8, 8.0], [44.9, 8.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 8.0], [46.6, 8.0], [46.7, 8.0], [46.8, 8.0], [46.9, 8.0], [47.0, 8.0], [47.1, 8.0], [47.2, 8.0], [47.3, 8.0], [47.4, 8.0], [47.5, 8.0], [47.6, 8.0], [47.7, 8.0], [47.8, 9.0], [47.9, 9.0], [48.0, 9.0], [48.1, 9.0], [48.2, 9.0], [48.3, 9.0], [48.4, 9.0], [48.5, 9.0], [48.6, 9.0], [48.7, 9.0], [48.8, 9.0], [48.9, 9.0], [49.0, 9.0], [49.1, 9.0], [49.2, 9.0], [49.3, 9.0], [49.4, 9.0], [49.5, 9.0], [49.6, 9.0], [49.7, 9.0], [49.8, 9.0], [49.9, 9.0], [50.0, 9.0], [50.1, 9.0], [50.2, 9.0], [50.3, 9.0], [50.4, 9.0], [50.5, 9.0], [50.6, 9.0], [50.7, 9.0], [50.8, 9.0], [50.9, 9.0], [51.0, 9.0], [51.1, 9.0], [51.2, 9.0], [51.3, 9.0], [51.4, 9.0], [51.5, 9.0], [51.6, 9.0], [51.7, 9.0], [51.8, 9.0], [51.9, 9.0], [52.0, 9.0], [52.1, 9.0], [52.2, 9.0], [52.3, 9.0], [52.4, 9.0], [52.5, 9.0], [52.6, 9.0], [52.7, 9.0], [52.8, 9.0], [52.9, 9.0], [53.0, 9.0], [53.1, 9.0], [53.2, 9.0], [53.3, 9.0], [53.4, 9.0], [53.5, 9.0], [53.6, 9.0], [53.7, 9.0], [53.8, 9.0], [53.9, 9.0], [54.0, 9.0], [54.1, 9.0], [54.2, 9.0], [54.3, 9.0], [54.4, 9.0], [54.5, 9.0], [54.6, 9.0], [54.7, 9.0], [54.8, 9.0], [54.9, 9.0], [55.0, 9.0], [55.1, 9.0], [55.2, 9.0], [55.3, 9.0], [55.4, 9.0], [55.5, 9.0], [55.6, 9.0], [55.7, 9.0], [55.8, 9.0], [55.9, 9.0], [56.0, 9.0], [56.1, 9.0], [56.2, 9.0], [56.3, 9.0], [56.4, 9.0], [56.5, 9.0], [56.6, 9.0], [56.7, 9.0], [56.8, 10.0], [56.9, 10.0], [57.0, 10.0], [57.1, 10.0], [57.2, 10.0], [57.3, 10.0], [57.4, 10.0], [57.5, 10.0], [57.6, 10.0], [57.7, 10.0], [57.8, 10.0], [57.9, 10.0], [58.0, 10.0], [58.1, 10.0], [58.2, 10.0], [58.3, 10.0], [58.4, 10.0], [58.5, 10.0], [58.6, 10.0], [58.7, 10.0], [58.8, 10.0], [58.9, 10.0], [59.0, 10.0], [59.1, 10.0], [59.2, 10.0], [59.3, 10.0], [59.4, 10.0], [59.5, 10.0], [59.6, 10.0], [59.7, 10.0], [59.8, 10.0], [59.9, 10.0], [60.0, 10.0], [60.1, 10.0], [60.2, 10.0], [60.3, 10.0], [60.4, 10.0], [60.5, 10.0], [60.6, 10.0], [60.7, 10.0], [60.8, 10.0], [60.9, 10.0], [61.0, 10.0], [61.1, 10.0], [61.2, 10.0], [61.3, 10.0], [61.4, 10.0], [61.5, 10.0], [61.6, 10.0], [61.7, 10.0], [61.8, 10.0], [61.9, 10.0], [62.0, 10.0], [62.1, 10.0], [62.2, 10.0], [62.3, 10.0], [62.4, 10.0], [62.5, 10.0], [62.6, 10.0], [62.7, 10.0], [62.8, 10.0], [62.9, 10.0], [63.0, 10.0], [63.1, 10.0], [63.2, 10.0], [63.3, 10.0], [63.4, 10.0], [63.5, 10.0], [63.6, 10.0], [63.7, 10.0], [63.8, 10.0], [63.9, 10.0], [64.0, 10.0], [64.1, 10.0], [64.2, 10.0], [64.3, 10.0], [64.4, 10.0], [64.5, 10.0], [64.6, 11.0], [64.7, 11.0], [64.8, 11.0], [64.9, 11.0], [65.0, 11.0], [65.1, 11.0], [65.2, 11.0], [65.3, 11.0], [65.4, 11.0], [65.5, 11.0], [65.6, 11.0], [65.7, 11.0], [65.8, 11.0], [65.9, 11.0], [66.0, 11.0], [66.1, 11.0], [66.2, 11.0], [66.3, 11.0], [66.4, 11.0], [66.5, 11.0], [66.6, 11.0], [66.7, 11.0], [66.8, 11.0], [66.9, 11.0], [67.0, 11.0], [67.1, 11.0], [67.2, 11.0], [67.3, 11.0], [67.4, 11.0], [67.5, 11.0], [67.6, 11.0], [67.7, 11.0], [67.8, 11.0], [67.9, 11.0], [68.0, 11.0], [68.1, 11.0], [68.2, 11.0], [68.3, 11.0], [68.4, 11.0], [68.5, 11.0], [68.6, 11.0], [68.7, 11.0], [68.8, 11.0], [68.9, 11.0], [69.0, 11.0], [69.1, 11.0], [69.2, 11.0], [69.3, 11.0], [69.4, 11.0], [69.5, 11.0], [69.6, 11.0], [69.7, 11.0], [69.8, 11.0], [69.9, 11.0], [70.0, 11.0], [70.1, 11.0], [70.2, 11.0], [70.3, 11.0], [70.4, 11.0], [70.5, 11.0], [70.6, 11.0], [70.7, 11.0], [70.8, 12.0], [70.9, 12.0], [71.0, 12.0], [71.1, 12.0], [71.2, 12.0], [71.3, 12.0], [71.4, 12.0], [71.5, 12.0], [71.6, 12.0], [71.7, 12.0], [71.8, 12.0], [71.9, 12.0], [72.0, 12.0], [72.1, 12.0], [72.2, 12.0], [72.3, 12.0], [72.4, 12.0], [72.5, 12.0], [72.6, 12.0], [72.7, 12.0], [72.8, 12.0], [72.9, 12.0], [73.0, 12.0], [73.1, 12.0], [73.2, 12.0], [73.3, 12.0], [73.4, 12.0], [73.5, 12.0], [73.6, 12.0], [73.7, 12.0], [73.8, 12.0], [73.9, 12.0], [74.0, 12.0], [74.1, 12.0], [74.2, 12.0], [74.3, 12.0], [74.4, 12.0], [74.5, 12.0], [74.6, 12.0], [74.7, 12.0], [74.8, 12.0], [74.9, 12.0], [75.0, 12.0], [75.1, 12.0], [75.2, 12.0], [75.3, 12.0], [75.4, 13.0], [75.5, 13.0], [75.6, 13.0], [75.7, 13.0], [75.8, 13.0], [75.9, 13.0], [76.0, 13.0], [76.1, 13.0], [76.2, 13.0], [76.3, 13.0], [76.4, 13.0], [76.5, 13.0], [76.6, 13.0], [76.7, 13.0], [76.8, 13.0], [76.9, 13.0], [77.0, 13.0], [77.1, 13.0], [77.2, 13.0], [77.3, 13.0], [77.4, 13.0], [77.5, 13.0], [77.6, 13.0], [77.7, 13.0], [77.8, 13.0], [77.9, 13.0], [78.0, 13.0], [78.1, 13.0], [78.2, 13.0], [78.3, 13.0], [78.4, 13.0], [78.5, 13.0], [78.6, 14.0], [78.7, 14.0], [78.8, 14.0], [78.9, 14.0], [79.0, 14.0], [79.1, 14.0], [79.2, 14.0], [79.3, 14.0], [79.4, 14.0], [79.5, 14.0], [79.6, 14.0], [79.7, 14.0], [79.8, 14.0], [79.9, 14.0], [80.0, 14.0], [80.1, 14.0], [80.2, 14.0], [80.3, 14.0], [80.4, 14.0], [80.5, 14.0], [80.6, 14.0], [80.7, 14.0], [80.8, 14.0], [80.9, 15.0], [81.0, 15.0], [81.1, 15.0], [81.2, 15.0], [81.3, 15.0], [81.4, 15.0], [81.5, 15.0], [81.6, 15.0], [81.7, 15.0], [81.8, 15.0], [81.9, 15.0], [82.0, 15.0], [82.1, 15.0], [82.2, 15.0], [82.3, 15.0], [82.4, 15.0], [82.5, 15.0], [82.6, 16.0], [82.7, 16.0], [82.8, 16.0], [82.9, 16.0], [83.0, 16.0], [83.1, 16.0], [83.2, 16.0], [83.3, 16.0], [83.4, 16.0], [83.5, 16.0], [83.6, 16.0], [83.7, 16.0], [83.8, 16.0], [83.9, 16.0], [84.0, 17.0], [84.1, 17.0], [84.2, 17.0], [84.3, 17.0], [84.4, 17.0], [84.5, 17.0], [84.6, 17.0], [84.7, 17.0], [84.8, 17.0], [84.9, 17.0], [85.0, 17.0], [85.1, 18.0], [85.2, 18.0], [85.3, 18.0], [85.4, 18.0], [85.5, 18.0], [85.6, 18.0], [85.7, 18.0], [85.8, 18.0], [85.9, 18.0], [86.0, 19.0], [86.1, 19.0], [86.2, 19.0], [86.3, 19.0], [86.4, 19.0], [86.5, 19.0], [86.6, 19.0], [86.7, 20.0], [86.8, 20.0], [86.9, 20.0], [87.0, 20.0], [87.1, 20.0], [87.2, 20.0], [87.3, 20.0], [87.4, 21.0], [87.5, 21.0], [87.6, 21.0], [87.7, 21.0], [87.8, 21.0], [87.9, 22.0], [88.0, 22.0], [88.1, 22.0], [88.2, 22.0], [88.3, 22.0], [88.4, 23.0], [88.5, 23.0], [88.6, 23.0], [88.7, 23.0], [88.8, 23.0], [88.9, 24.0], [89.0, 24.0], [89.1, 24.0], [89.2, 24.0], [89.3, 25.0], [89.4, 25.0], [89.5, 25.0], [89.6, 26.0], [89.7, 26.0], [89.8, 26.0], [89.9, 27.0], [90.0, 27.0], [90.1, 27.0], [90.2, 28.0], [90.3, 28.0], [90.4, 29.0], [90.5, 29.0], [90.6, 29.0], [90.7, 30.0], [90.8, 30.0], [90.9, 31.0], [91.0, 31.0], [91.1, 32.0], [91.2, 32.0], [91.3, 33.0], [91.4, 34.0], [91.5, 34.0], [91.6, 35.0], [91.7, 36.0], [91.8, 37.0], [91.9, 38.0], [92.0, 38.0], [92.1, 39.0], [92.2, 40.0], [92.3, 41.0], [92.4, 43.0], [92.5, 44.0], [92.6, 45.0], [92.7, 47.0], [92.8, 49.0], [92.9, 50.0], [93.0, 52.0], [93.1, 54.0], [93.2, 56.0], [93.3, 58.0], [93.4, 60.0], [93.5, 62.0], [93.6, 66.0], [93.7, 70.0], [93.8, 74.0], [93.9, 78.0], [94.0, 82.0], [94.1, 86.0], [94.2, 90.0], [94.3, 95.0], [94.4, 100.0], [94.5, 107.0], [94.6, 112.0], [94.7, 118.0], [94.8, 124.0], [94.9, 129.0], [95.0, 134.0], [95.1, 139.0], [95.2, 143.0], [95.3, 149.0], [95.4, 154.0], [95.5, 160.0], [95.6, 164.0], [95.7, 170.0], [95.8, 176.0], [95.9, 181.0], [96.0, 187.0], [96.1, 193.0], [96.2, 199.0], [96.3, 204.0], [96.4, 210.0], [96.5, 216.0], [96.6, 221.0], [96.7, 227.0], [96.8, 233.0], [96.9, 239.0], [97.0, 245.0], [97.1, 251.0], [97.2, 257.0], [97.3, 264.0], [97.4, 270.0], [97.5, 276.0], [97.6, 282.0], [97.7, 288.0], [97.8, 295.0], [97.9, 301.0], [98.0, 309.0], [98.1, 317.0], [98.2, 324.0], [98.3, 332.0], [98.4, 341.0], [98.5, 350.0], [98.6, 358.0], [98.7, 367.0], [98.8, 377.0], [98.9, 387.0], [99.0, 397.0], [99.1, 408.0], [99.2, 420.0], [99.3, 434.0], [99.4, 450.0], [99.5, 469.0], [99.6, 492.0], [99.7, 523.0], [99.8, 567.0], [99.9, 649.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3230856.0, "series": [{"data": [[0.0, 3230856.0], [2100.0, 1.0], [2200.0, 1.0], [600.0, 2877.0], [700.0, 1166.0], [200.0, 56738.0], [800.0, 383.0], [900.0, 307.0], [1000.0, 127.0], [1100.0, 69.0], [1200.0, 23.0], [300.0, 39381.0], [1300.0, 36.0], [1400.0, 14.0], [1500.0, 132.0], [1600.0, 53.0], [100.0, 62703.0], [400.0, 20778.0], [1700.0, 22.0], [1800.0, 22.0], [1900.0, 2.0], [2000.0, 1.0], [500.0, 7450.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 234.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3410556.0, "series": [{"data": [[0.0, 3410556.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12352.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 234.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 298.7928836858155, "minX": 1.6263324E12, "maxY": 300.0, "series": [{"data": [[1.6263324E12, 300.0], [1.62633258E12, 300.0], [1.62633246E12, 300.0], [1.62633264E12, 300.0], [1.62633252E12, 300.0], [1.6263327E12, 298.7928836858155]], "isOverall": false, "label": "role1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6263327E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 208.0, "series": [{"data": [[2.0, 1.2631578947368423], [3.0, 1.2727272727272725], [4.0, 1.1764705882352944], [5.0, 1.25], [6.0, 1.0], [7.0, 1.4545454545454548], [8.0, 1.6086956521739129], [9.0, 1.5], [10.0, 1.9999999999999998], [11.0, 1.6666666666666667], [12.0, 2.5], [13.0, 1.0], [14.0, 1.7272727272727275], [15.0, 2.3271028037383177], [16.0, 2.909090909090909], [17.0, 2.192307692307693], [18.0, 1.9343065693430668], [19.0, 2.5], [20.0, 3.0], [21.0, 2.591836734693877], [22.0, 2.8958333333333344], [23.0, 1.8], [24.0, 1.7352941176470587], [25.0, 2.40625], [26.0, 1.6829268292682926], [27.0, 2.1250000000000004], [28.0, 2.3], [29.0, 3.652173913043479], [30.0, 3.0], [31.0, 2.9569892473118276], [33.0, 2.3200000000000003], [32.0, 2.246031746031747], [34.0, 1.9090909090909087], [37.0, 2.808219178082193], [36.0, 2.225352112676057], [39.0, 2.5], [38.0, 2.555555555555556], [41.0, 2.25], [40.0, 2.875], [43.0, 2.925925925925926], [42.0, 1.9672131147540985], [45.0, 2.5], [44.0, 2.6470588235294112], [47.0, 9.391304347826088], [46.0, 4.098484848484853], [49.0, 14.0], [48.0, 14.529411764705886], [51.0, 4.90566037735849], [50.0, 13.0], [53.0, 5.277777777777777], [52.0, 3.4666666666666663], [55.0, 5.653846153846153], [54.0, 3.0], [57.0, 8.0], [56.0, 8.0], [59.0, 7.0], [58.0, 8.333333333333334], [60.0, 9.666666666666666], [63.0, 4.115384615384615], [62.0, 5.249999999999999], [67.0, 3.027777777777778], [66.0, 3.5135135135135136], [65.0, 4.0], [64.0, 2.9999999999999996], [71.0, 3.6875], [70.0, 3.0], [69.0, 2.6666666666666665], [68.0, 3.3333333333333335], [75.0, 4.333333333333333], [74.0, 4.388888888888889], [73.0, 4.087719298245615], [72.0, 3.0476190476190474], [79.0, 6.4074074074074066], [78.0, 6.833333333333332], [77.0, 7.2], [76.0, 6.439393939393939], [83.0, 4.629629629629631], [82.0, 5.166666666666667], [81.0, 5.621621621621622], [80.0, 6.0588235294117645], [87.0, 12.666666666666666], [86.0, 9.0], [85.0, 5.846153846153846], [84.0, 5.333333333333333], [90.0, 8.191780821917806], [89.0, 9.599999999999998], [88.0, 10.225], [95.0, 5.868965517241382], [94.0, 4.240000000000002], [93.0, 3.5909090909090904], [92.0, 4.2108843537414975], [96.0, 8.5609756097561], [102.0, 7.0], [100.0, 8.0], [104.0, 6.0], [110.0, 9.0], [114.0, 7.0], [113.0, 9.0], [119.0, 4.5], [117.0, 5.75], [116.0, 4.333333333333333], [123.0, 14.5], [122.0, 4.0], [121.0, 5.5], [127.0, 4.5], [126.0, 4.2857142857142865], [135.0, 5.5], [134.0, 4.0], [133.0, 5.352941176470588], [132.0, 12.125], [131.0, 4.916666666666667], [130.0, 4.777777777777778], [129.0, 3.0], [128.0, 3.0], [143.0, 4.5], [142.0, 5.0], [141.0, 6.375], [140.0, 7.333333333333333], [139.0, 4.0], [138.0, 3.0], [137.0, 4.5], [136.0, 4.5], [151.0, 5.857142857142857], [150.0, 5.0], [149.0, 5.0], [148.0, 6.0], [147.0, 5.666666666666667], [146.0, 5.0], [145.0, 4.5], [144.0, 4.333333333333333], [159.0, 11.666666666666668], [158.0, 6.0], [156.0, 5.714285714285714], [155.0, 4.0], [154.0, 5.8], [153.0, 5.0], [152.0, 5.857142857142858], [167.0, 5.4], [166.0, 5.5], [165.0, 5.0], [164.0, 4.8], [163.0, 8.0], [162.0, 6.0], [160.0, 11.0], [174.0, 6.0], [173.0, 5.823529411764704], [172.0, 6.0], [171.0, 5.5], [170.0, 6.0], [169.0, 9.0], [168.0, 4.0], [182.0, 6.0], [181.0, 5.5], [180.0, 6.666666666666667], [179.0, 6.25], [178.0, 6.0], [176.0, 6.0], [191.0, 7.0], [189.0, 6.222222222222222], [188.0, 7.0], [187.0, 6.0], [186.0, 6.0], [185.0, 6.0], [198.0, 42.0], [197.0, 41.42857142857143], [196.0, 27.312676056338013], [195.0, 6.0], [194.0, 5.9], [193.0, 5.0], [192.0, 6.2857142857142865], [206.0, 41.57142857142857], [205.0, 41.5], [204.0, 40.77777777777778], [203.0, 38.0], [202.0, 42.0], [201.0, 42.0], [200.0, 41.333333333333336], [270.0, 2.1739130434782603], [271.0, 2.0], [269.0, 2.0], [268.0, 3.0357142857142856], [267.0, 4.0], [266.0, 4.857142857142857], [265.0, 5.25], [264.0, 6.0], [263.0, 6.1875], [257.0, 10.0], [259.0, 8.0], [258.0, 9.333333333333334], [262.0, 8.105263157894736], [261.0, 8.5], [260.0, 8.0], [286.0, 208.0], [287.0, 207.63636363636365], [285.0, 32.99999999999999], [284.0, 8.259259259259258], [283.0, 46.00000000000001], [282.0, 81.0], [281.0, 131.34439834024883], [280.0, 3.0], [279.0, 2.0], [273.0, 2.1250000000000004], [272.0, 1.6], [275.0, 2.0000000000000004], [274.0, 1.8333333333333333], [277.0, 1.6], [276.0, 2.0], [300.0, 26.143567393189997], [297.0, 10.0], [295.0, 17.0], [294.0, 73.75], [293.0, 17.85365853658537], [292.0, 37.64705882352941], [291.0, 42.15555555555555], [290.0, 21.1304347826087], [289.0, 15.479166666666663], [1.0, 1.0]], "isOverall": false, "label": "user2role", "isController": false}, {"data": [[299.74824065142684, 26.128933593755683]], "isOverall": false, "label": "user2role-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11138.05, "minX": 1.6263324E12, "maxY": 3289114.3833333333, "series": [{"data": [[1.6263324E12, 11138.05], [1.62633258E12, 1518743.15], [1.62633246E12, 938509.05], [1.62633264E12, 1532932.7], [1.62633252E12, 1449219.4666666666], [1.6263327E12, 1436319.5333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6263324E12, 23546.35], [1.62633258E12, 3258677.566666667], [1.62633246E12, 2004171.8], [1.62633264E12, 3289114.3833333333], [1.62633252E12, 3100706.4166666665], [1.6263327E12, 3081828.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6263327E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 23.321791698706505, "minX": 1.6263324E12, "maxY": 205.23248234655094, "series": [{"data": [[1.6263324E12, 205.23248234655094], [1.62633258E12, 23.80555724818687], [1.62633246E12, 38.51102536068857], [1.62633264E12, 23.462981506830946], [1.62633252E12, 24.77449402997753], [1.6263327E12, 23.321791698706505]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6263327E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 23.321454133908812, "minX": 1.6263324E12, "maxY": 203.66775303277223, "series": [{"data": [[1.6263324E12, 203.66775303277223], [1.62633258E12, 23.805157198379575], [1.62633246E12, 38.510656633867406], [1.62633264E12, 23.462548411524565], [1.62633252E12, 24.774155305274775], [1.6263327E12, 23.321454133908812]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6263327E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01685210195725379, "minX": 1.6263324E12, "maxY": 22.544631540829172, "series": [{"data": [[1.6263324E12, 22.544631540829172], [1.62633258E12, 0.018444680529761347], [1.62633246E12, 0.01685210195725379], [1.62633264E12, 0.019896135871184925], [1.62633252E12, 0.019711278838451033], [1.6263327E12, 0.02203415707548401]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6263327E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6263324E12, "maxY": 2252.0, "series": [{"data": [[1.6263324E12, 2252.0], [1.62633258E12, 802.0], [1.62633246E12, 1192.0], [1.62633264E12, 779.0], [1.62633252E12, 815.0], [1.6263327E12, 592.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6263324E12, 516.0], [1.62633258E12, 15.0], [1.62633246E12, 17.0], [1.62633264E12, 15.0], [1.62633252E12, 20.0], [1.6263327E12, 21.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6263324E12, 1682.0], [1.62633258E12, 449.9800000000032], [1.62633246E12, 437.9900000000016], [1.62633264E12, 318.0], [1.62633252E12, 396.0], [1.6263327E12, 263.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6263324E12, 1322.8000000000002], [1.62633258E12, 141.0], [1.62633246E12, 98.0], [1.62633264E12, 107.0], [1.62633252E12, 160.0], [1.6263327E12, 113.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6263324E12, 2.0], [1.62633258E12, 1.0], [1.62633246E12, 1.0], [1.62633264E12, 1.0], [1.62633252E12, 1.0], [1.6263327E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6263324E12, 55.0], [1.62633258E12, 7.0], [1.62633246E12, 8.0], [1.62633264E12, 7.0], [1.62633252E12, 9.0], [1.6263327E12, 7.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6263327E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7.0, "minX": 695.0, "maxY": 178.0, "series": [{"data": [[16579.0, 8.0], [8505.0, 11.0], [8809.0, 25.0], [8817.0, 21.0], [8861.0, 10.0], [10197.0, 9.0], [9865.0, 9.0], [10805.0, 9.0], [10777.0, 9.0], [11185.0, 8.0], [10973.0, 9.0], [10977.0, 9.0], [11041.0, 8.0], [10829.0, 9.0], [11245.0, 10.0], [10817.0, 7.0], [11521.0, 9.0], [11745.0, 9.0], [11273.0, 8.0], [11729.0, 8.0], [12193.0, 8.0], [11981.0, 8.0], [11933.0, 8.0], [12005.0, 9.0], [11849.0, 8.0], [11781.0, 8.0], [12081.0, 7.0], [12029.0, 8.0], [12361.0, 8.0], [12525.0, 9.0], [12613.0, 8.0], [12313.0, 8.0], [12789.0, 9.0], [12713.0, 9.0], [12309.0, 8.0], [12677.0, 7.0], [12705.0, 8.0], [12537.0, 9.0], [13177.0, 8.0], [12933.0, 9.0], [13245.0, 8.0], [13249.0, 10.0], [12885.0, 8.0], [13221.0, 8.0], [13285.0, 7.0], [13397.0, 9.0], [13529.0, 10.0], [13749.0, 7.0], [14245.0, 7.0], [14061.0, 8.0], [14041.0, 8.0], [13945.0, 9.0], [15153.0, 8.0], [695.0, 178.0], [2169.0, 53.0], [2659.0, 49.0], [2925.0, 66.0], [2915.0, 66.0], [3207.0, 39.0], [3200.0, 59.0], [3741.0, 42.0], [3928.0, 39.0], [4266.0, 48.0], [4912.0, 36.0], [5868.0, 18.0], [6052.0, 17.0], [6232.0, 15.0], [6702.0, 22.0], [6836.0, 15.0], [7132.0, 14.0], [7270.0, 28.0], [7336.0, 22.0], [7314.0, 24.0], [7648.0, 29.0], [7602.0, 32.0], [7896.0, 24.0], [7834.0, 13.0], [8038.0, 30.0], [8856.0, 10.0], [9376.0, 9.0], [10656.0, 8.0], [10728.0, 8.0], [10724.0, 8.0], [10440.0, 9.0], [11252.0, 8.0], [11096.0, 8.0], [11704.0, 8.0], [11420.0, 10.0], [11400.0, 9.0], [11544.0, 9.0], [11540.0, 8.0], [11716.0, 9.0], [11536.0, 8.0], [11740.0, 8.0], [11388.0, 8.0], [11284.0, 9.0], [11384.0, 9.0], [11552.0, 9.0], [11456.0, 8.0], [11448.0, 8.0], [12188.0, 9.0], [12156.0, 7.0], [12212.0, 8.0], [12036.0, 8.0], [12400.0, 9.0], [12744.0, 8.0], [12368.0, 8.0], [12480.0, 8.0], [12308.0, 8.0], [12788.0, 9.0], [12540.0, 8.0], [12440.0, 7.0], [12324.0, 8.0], [13248.0, 8.0], [12948.0, 8.0], [12828.0, 8.0], [13284.0, 8.0], [13104.0, 9.0], [13136.0, 11.0], [13176.0, 8.0], [13116.0, 9.0], [13240.0, 8.0], [12844.0, 8.0], [12868.0, 9.0], [12880.0, 8.0], [12912.0, 8.0], [13740.0, 8.0], [13592.0, 8.0], [13764.0, 8.0], [13536.0, 8.0], [13756.0, 9.0], [13496.0, 8.0], [13504.0, 8.0], [13356.0, 9.0], [13324.0, 7.0], [13392.0, 8.0], [14200.0, 9.0], [13952.0, 8.0], [14616.0, 8.0], [14752.0, 8.0], [15436.0, 8.0], [8451.0, 12.0], [9499.0, 10.0], [9907.0, 9.0], [10267.0, 9.0], [10547.0, 10.0], [10543.0, 8.0], [10735.0, 9.0], [10555.0, 8.0], [11151.0, 9.0], [11231.0, 8.0], [10907.0, 8.0], [11263.0, 8.0], [11543.0, 8.0], [11551.0, 9.0], [11887.0, 8.0], [11851.0, 8.0], [12067.0, 9.0], [12143.0, 9.0], [12263.0, 8.0], [12187.0, 8.0], [11927.0, 7.0], [12039.0, 8.0], [11995.0, 9.0], [12031.0, 9.0], [12335.0, 9.0], [12291.0, 9.0], [12591.0, 9.0], [12303.0, 9.0], [12383.0, 8.0], [12695.0, 8.0], [12307.0, 8.0], [12647.0, 9.0], [12535.0, 10.0], [12371.0, 9.0], [13075.0, 7.0], [13099.0, 8.0], [13155.0, 8.0], [13179.0, 8.0], [13167.0, 11.0], [13095.0, 9.0], [13231.0, 7.0], [13043.0, 9.0], [12943.0, 9.0], [12851.0, 10.0], [12855.0, 9.0], [12927.0, 8.0], [13751.0, 8.0], [13647.0, 9.0], [13491.0, 8.0], [13687.0, 8.0], [13567.0, 8.0], [13803.0, 7.0], [13371.0, 9.0], [13839.0, 8.0], [14019.0, 8.0], [14099.0, 8.0], [13975.0, 8.0], [14259.0, 8.0], [14055.0, 8.0], [13943.0, 8.0], [13827.0, 8.0], [13859.0, 9.0], [14727.0, 8.0], [14447.0, 7.0], [15403.0, 7.0], [4305.0, 44.0], [4143.0, 55.0], [4259.0, 34.0], [4231.0, 57.0], [4979.0, 40.0], [5001.0, 19.0], [5939.0, 35.0], [6089.0, 16.0], [6515.0, 35.0], [6539.0, 15.0], [6961.0, 16.0], [7027.0, 14.0], [7611.0, 13.0], [7925.0, 29.0], [8023.0, 32.0], [8358.0, 28.0], [9198.0, 18.0], [9482.0, 10.0], [10182.0, 12.0], [10102.0, 10.0], [10274.0, 10.0], [10406.0, 9.0], [10966.0, 10.0], [11090.0, 9.0], [10830.0, 8.0], [10950.0, 9.0], [10790.0, 9.0], [10910.0, 8.0], [11142.0, 9.0], [11026.0, 9.0], [11282.0, 9.0], [11490.0, 9.0], [11754.0, 7.0], [11718.0, 9.0], [11642.0, 8.0], [11610.0, 9.0], [11766.0, 9.0], [11410.0, 10.0], [11278.0, 9.0], [11794.0, 8.0], [11822.0, 9.0], [11866.0, 9.0], [11978.0, 9.0], [12030.0, 8.0], [12086.0, 8.0], [12034.0, 9.0], [11894.0, 9.0], [12330.0, 9.0], [12454.0, 9.0], [12650.0, 8.0], [12670.0, 9.0], [12498.0, 8.0], [12622.0, 8.0], [12458.0, 10.0], [12794.0, 9.0], [12682.0, 8.0], [12378.0, 8.0], [12358.0, 8.0], [12482.0, 7.0], [12546.0, 10.0], [12606.0, 9.0], [12926.0, 8.0], [13302.0, 8.0], [12986.0, 9.0], [13070.0, 9.0], [12854.0, 8.0], [13306.0, 8.0], [13274.0, 8.0], [13014.0, 9.0], [13114.0, 9.0], [13426.0, 9.0], [13542.0, 8.0], [13646.0, 8.0], [13590.0, 8.0], [13410.0, 8.0], [13442.0, 8.0], [13326.0, 8.0], [13398.0, 9.0], [14170.0, 7.0], [13834.0, 8.0], [14042.0, 8.0], [14070.0, 9.0], [14226.0, 9.0], [14134.0, 8.0], [14018.0, 9.0], [14206.0, 8.0], [14826.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16579.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7.0, "minX": 695.0, "maxY": 178.0, "series": [{"data": [[16579.0, 8.0], [8505.0, 11.0], [8809.0, 25.0], [8817.0, 21.0], [8861.0, 10.0], [10197.0, 9.0], [9865.0, 9.0], [10805.0, 9.0], [10777.0, 9.0], [11185.0, 8.0], [10973.0, 9.0], [10977.0, 9.0], [11041.0, 8.0], [10829.0, 9.0], [11245.0, 10.0], [10817.0, 7.0], [11521.0, 9.0], [11745.0, 9.0], [11273.0, 8.0], [11729.0, 8.0], [12193.0, 8.0], [11981.0, 8.0], [11933.0, 8.0], [12005.0, 9.0], [11849.0, 8.0], [11781.0, 8.0], [12081.0, 7.0], [12029.0, 8.0], [12361.0, 8.0], [12525.0, 9.0], [12613.0, 8.0], [12313.0, 8.0], [12789.0, 9.0], [12713.0, 9.0], [12309.0, 8.0], [12677.0, 7.0], [12705.0, 8.0], [12537.0, 9.0], [13177.0, 8.0], [12933.0, 9.0], [13245.0, 8.0], [13249.0, 10.0], [12885.0, 8.0], [13221.0, 8.0], [13285.0, 7.0], [13397.0, 9.0], [13529.0, 10.0], [13749.0, 7.0], [14245.0, 7.0], [14061.0, 8.0], [14041.0, 8.0], [13945.0, 9.0], [15153.0, 8.0], [695.0, 178.0], [2169.0, 53.0], [2659.0, 49.0], [2925.0, 66.0], [2915.0, 66.0], [3207.0, 39.0], [3200.0, 59.0], [3741.0, 42.0], [3928.0, 39.0], [4266.0, 48.0], [4912.0, 36.0], [5868.0, 18.0], [6052.0, 17.0], [6232.0, 15.0], [6702.0, 22.0], [6836.0, 15.0], [7132.0, 14.0], [7270.0, 28.0], [7336.0, 22.0], [7314.0, 24.0], [7648.0, 29.0], [7602.0, 32.0], [7896.0, 24.0], [7834.0, 13.0], [8038.0, 30.0], [8856.0, 10.0], [9376.0, 9.0], [10656.0, 8.0], [10728.0, 8.0], [10724.0, 8.0], [10440.0, 9.0], [11252.0, 8.0], [11096.0, 8.0], [11704.0, 8.0], [11420.0, 10.0], [11400.0, 9.0], [11544.0, 9.0], [11540.0, 8.0], [11716.0, 9.0], [11536.0, 8.0], [11740.0, 8.0], [11388.0, 8.0], [11284.0, 9.0], [11384.0, 9.0], [11552.0, 9.0], [11456.0, 8.0], [11448.0, 8.0], [12188.0, 9.0], [12156.0, 7.0], [12212.0, 8.0], [12036.0, 8.0], [12400.0, 9.0], [12744.0, 8.0], [12368.0, 8.0], [12480.0, 8.0], [12308.0, 8.0], [12788.0, 9.0], [12540.0, 8.0], [12440.0, 7.0], [12324.0, 8.0], [13248.0, 8.0], [12948.0, 8.0], [12828.0, 8.0], [13284.0, 8.0], [13104.0, 9.0], [13136.0, 11.0], [13176.0, 8.0], [13116.0, 9.0], [13240.0, 8.0], [12844.0, 8.0], [12868.0, 9.0], [12880.0, 8.0], [12912.0, 8.0], [13740.0, 8.0], [13592.0, 8.0], [13764.0, 8.0], [13536.0, 8.0], [13756.0, 9.0], [13496.0, 8.0], [13504.0, 8.0], [13356.0, 9.0], [13324.0, 7.0], [13392.0, 8.0], [14200.0, 9.0], [13952.0, 8.0], [14616.0, 8.0], [14752.0, 8.0], [15436.0, 8.0], [8451.0, 12.0], [9499.0, 10.0], [9907.0, 9.0], [10267.0, 9.0], [10547.0, 10.0], [10543.0, 8.0], [10735.0, 9.0], [10555.0, 8.0], [11151.0, 9.0], [11231.0, 8.0], [10907.0, 8.0], [11263.0, 8.0], [11543.0, 8.0], [11551.0, 9.0], [11887.0, 8.0], [11851.0, 8.0], [12067.0, 9.0], [12143.0, 9.0], [12263.0, 8.0], [12187.0, 8.0], [11927.0, 7.0], [12039.0, 8.0], [11995.0, 9.0], [12031.0, 9.0], [12335.0, 9.0], [12291.0, 9.0], [12591.0, 9.0], [12303.0, 9.0], [12383.0, 8.0], [12695.0, 8.0], [12307.0, 8.0], [12647.0, 9.0], [12535.0, 10.0], [12371.0, 9.0], [13075.0, 7.0], [13099.0, 8.0], [13155.0, 8.0], [13179.0, 8.0], [13167.0, 11.0], [13095.0, 9.0], [13231.0, 7.0], [13043.0, 9.0], [12943.0, 9.0], [12851.0, 10.0], [12855.0, 9.0], [12927.0, 8.0], [13751.0, 8.0], [13647.0, 9.0], [13491.0, 8.0], [13687.0, 8.0], [13567.0, 8.0], [13803.0, 7.0], [13371.0, 9.0], [13839.0, 8.0], [14019.0, 8.0], [14099.0, 8.0], [13975.0, 8.0], [14259.0, 8.0], [14055.0, 8.0], [13943.0, 8.0], [13827.0, 8.0], [13859.0, 9.0], [14727.0, 8.0], [14447.0, 7.0], [15403.0, 7.0], [4305.0, 44.0], [4143.0, 55.0], [4259.0, 34.0], [4231.0, 57.0], [4979.0, 40.0], [5001.0, 19.0], [5939.0, 35.0], [6089.0, 16.0], [6515.0, 35.0], [6539.0, 15.0], [6961.0, 16.0], [7027.0, 14.0], [7611.0, 13.0], [7925.0, 29.0], [8023.0, 32.0], [8358.0, 28.0], [9198.0, 18.0], [9482.0, 10.0], [10182.0, 12.0], [10102.0, 10.0], [10274.0, 10.0], [10406.0, 9.0], [10966.0, 10.0], [11090.0, 9.0], [10830.0, 8.0], [10950.0, 9.0], [10790.0, 9.0], [10910.0, 8.0], [11142.0, 9.0], [11026.0, 9.0], [11282.0, 9.0], [11490.0, 9.0], [11754.0, 7.0], [11718.0, 9.0], [11642.0, 8.0], [11610.0, 9.0], [11766.0, 9.0], [11410.0, 10.0], [11278.0, 9.0], [11794.0, 8.0], [11822.0, 9.0], [11866.0, 9.0], [11978.0, 9.0], [12030.0, 8.0], [12086.0, 8.0], [12034.0, 9.0], [11894.0, 9.0], [12330.0, 9.0], [12454.0, 9.0], [12650.0, 8.0], [12670.0, 9.0], [12498.0, 8.0], [12622.0, 8.0], [12458.0, 10.0], [12794.0, 9.0], [12682.0, 8.0], [12378.0, 8.0], [12358.0, 8.0], [12482.0, 7.0], [12546.0, 10.0], [12606.0, 9.0], [12926.0, 8.0], [13302.0, 8.0], [12986.0, 9.0], [13070.0, 9.0], [12854.0, 8.0], [13306.0, 8.0], [13274.0, 8.0], [13014.0, 9.0], [13114.0, 9.0], [13426.0, 9.0], [13542.0, 8.0], [13646.0, 8.0], [13590.0, 8.0], [13410.0, 8.0], [13442.0, 8.0], [13326.0, 8.0], [13398.0, 9.0], [14170.0, 7.0], [13834.0, 8.0], [14042.0, 8.0], [14070.0, 9.0], [14226.0, 9.0], [14134.0, 8.0], [14018.0, 9.0], [14206.0, 8.0], [14826.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16579.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 97.03333333333333, "minX": 1.6263324E12, "maxY": 12699.3, "series": [{"data": [[1.6263324E12, 97.03333333333333], [1.62633258E12, 12581.75], [1.62633246E12, 7774.45], [1.62633264E12, 12699.3], [1.62633252E12, 12005.883333333333], [1.6263327E12, 11893.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6263327E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 92.05, "minX": 1.6263324E12, "maxY": 12699.283333333333, "series": [{"data": [[1.6263324E12, 92.05], [1.62633258E12, 12581.766666666666], [1.62633246E12, 7774.5], [1.62633264E12, 12699.283333333333], [1.62633252E12, 12005.816666666668], [1.6263327E12, 11898.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6263327E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 92.05, "minX": 1.6263324E12, "maxY": 12699.283333333333, "series": [{"data": [[1.6263324E12, 92.05], [1.62633258E12, 12581.766666666666], [1.62633246E12, 7774.5], [1.62633264E12, 12699.283333333333], [1.62633252E12, 12005.816666666668], [1.6263327E12, 11898.95]], "isOverall": false, "label": "user2role-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6263327E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 92.05, "minX": 1.6263324E12, "maxY": 12699.283333333333, "series": [{"data": [[1.6263324E12, 92.05], [1.62633258E12, 12581.766666666666], [1.62633246E12, 7774.5], [1.62633264E12, 12699.283333333333], [1.62633252E12, 12005.816666666668], [1.6263327E12, 11898.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6263327E12, "title": "Total Transactions Per Second"}},
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

