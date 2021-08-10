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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1675.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 5.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 6.0], [17.5, 6.0], [17.6, 6.0], [17.7, 6.0], [17.8, 6.0], [17.9, 6.0], [18.0, 6.0], [18.1, 6.0], [18.2, 6.0], [18.3, 6.0], [18.4, 6.0], [18.5, 6.0], [18.6, 6.0], [18.7, 6.0], [18.8, 6.0], [18.9, 6.0], [19.0, 6.0], [19.1, 6.0], [19.2, 6.0], [19.3, 6.0], [19.4, 6.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 6.0], [20.0, 6.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 6.0], [26.9, 6.0], [27.0, 6.0], [27.1, 6.0], [27.2, 6.0], [27.3, 6.0], [27.4, 6.0], [27.5, 6.0], [27.6, 6.0], [27.7, 6.0], [27.8, 6.0], [27.9, 6.0], [28.0, 6.0], [28.1, 6.0], [28.2, 6.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 7.0], [38.5, 7.0], [38.6, 7.0], [38.7, 7.0], [38.8, 8.0], [38.9, 8.0], [39.0, 8.0], [39.1, 8.0], [39.2, 8.0], [39.3, 8.0], [39.4, 8.0], [39.5, 8.0], [39.6, 8.0], [39.7, 8.0], [39.8, 8.0], [39.9, 8.0], [40.0, 8.0], [40.1, 8.0], [40.2, 8.0], [40.3, 8.0], [40.4, 8.0], [40.5, 8.0], [40.6, 8.0], [40.7, 8.0], [40.8, 8.0], [40.9, 8.0], [41.0, 8.0], [41.1, 8.0], [41.2, 8.0], [41.3, 8.0], [41.4, 8.0], [41.5, 8.0], [41.6, 8.0], [41.7, 8.0], [41.8, 8.0], [41.9, 8.0], [42.0, 8.0], [42.1, 8.0], [42.2, 8.0], [42.3, 8.0], [42.4, 8.0], [42.5, 8.0], [42.6, 8.0], [42.7, 8.0], [42.8, 8.0], [42.9, 8.0], [43.0, 8.0], [43.1, 8.0], [43.2, 8.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 8.0], [44.0, 8.0], [44.1, 8.0], [44.2, 8.0], [44.3, 8.0], [44.4, 8.0], [44.5, 8.0], [44.6, 8.0], [44.7, 8.0], [44.8, 8.0], [44.9, 8.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 8.0], [46.6, 8.0], [46.7, 8.0], [46.8, 8.0], [46.9, 8.0], [47.0, 8.0], [47.1, 8.0], [47.2, 8.0], [47.3, 8.0], [47.4, 8.0], [47.5, 8.0], [47.6, 8.0], [47.7, 8.0], [47.8, 8.0], [47.9, 9.0], [48.0, 9.0], [48.1, 9.0], [48.2, 9.0], [48.3, 9.0], [48.4, 9.0], [48.5, 9.0], [48.6, 9.0], [48.7, 9.0], [48.8, 9.0], [48.9, 9.0], [49.0, 9.0], [49.1, 9.0], [49.2, 9.0], [49.3, 9.0], [49.4, 9.0], [49.5, 9.0], [49.6, 9.0], [49.7, 9.0], [49.8, 9.0], [49.9, 9.0], [50.0, 9.0], [50.1, 9.0], [50.2, 9.0], [50.3, 9.0], [50.4, 9.0], [50.5, 9.0], [50.6, 9.0], [50.7, 9.0], [50.8, 9.0], [50.9, 9.0], [51.0, 9.0], [51.1, 9.0], [51.2, 9.0], [51.3, 9.0], [51.4, 9.0], [51.5, 9.0], [51.6, 9.0], [51.7, 9.0], [51.8, 9.0], [51.9, 9.0], [52.0, 9.0], [52.1, 9.0], [52.2, 9.0], [52.3, 9.0], [52.4, 9.0], [52.5, 9.0], [52.6, 9.0], [52.7, 9.0], [52.8, 9.0], [52.9, 9.0], [53.0, 9.0], [53.1, 9.0], [53.2, 9.0], [53.3, 9.0], [53.4, 9.0], [53.5, 9.0], [53.6, 9.0], [53.7, 9.0], [53.8, 9.0], [53.9, 9.0], [54.0, 9.0], [54.1, 9.0], [54.2, 9.0], [54.3, 9.0], [54.4, 9.0], [54.5, 9.0], [54.6, 9.0], [54.7, 9.0], [54.8, 9.0], [54.9, 9.0], [55.0, 9.0], [55.1, 9.0], [55.2, 9.0], [55.3, 9.0], [55.4, 9.0], [55.5, 10.0], [55.6, 10.0], [55.7, 10.0], [55.8, 10.0], [55.9, 10.0], [56.0, 10.0], [56.1, 10.0], [56.2, 10.0], [56.3, 10.0], [56.4, 10.0], [56.5, 10.0], [56.6, 10.0], [56.7, 10.0], [56.8, 10.0], [56.9, 10.0], [57.0, 10.0], [57.1, 10.0], [57.2, 10.0], [57.3, 10.0], [57.4, 10.0], [57.5, 10.0], [57.6, 10.0], [57.7, 10.0], [57.8, 10.0], [57.9, 10.0], [58.0, 10.0], [58.1, 10.0], [58.2, 10.0], [58.3, 10.0], [58.4, 10.0], [58.5, 10.0], [58.6, 10.0], [58.7, 10.0], [58.8, 10.0], [58.9, 10.0], [59.0, 10.0], [59.1, 10.0], [59.2, 10.0], [59.3, 10.0], [59.4, 10.0], [59.5, 10.0], [59.6, 10.0], [59.7, 10.0], [59.8, 10.0], [59.9, 10.0], [60.0, 10.0], [60.1, 10.0], [60.2, 10.0], [60.3, 10.0], [60.4, 10.0], [60.5, 10.0], [60.6, 10.0], [60.7, 10.0], [60.8, 10.0], [60.9, 10.0], [61.0, 10.0], [61.1, 10.0], [61.2, 10.0], [61.3, 10.0], [61.4, 10.0], [61.5, 10.0], [61.6, 10.0], [61.7, 10.0], [61.8, 10.0], [61.9, 11.0], [62.0, 11.0], [62.1, 11.0], [62.2, 11.0], [62.3, 11.0], [62.4, 11.0], [62.5, 11.0], [62.6, 11.0], [62.7, 11.0], [62.8, 11.0], [62.9, 11.0], [63.0, 11.0], [63.1, 11.0], [63.2, 11.0], [63.3, 11.0], [63.4, 11.0], [63.5, 11.0], [63.6, 11.0], [63.7, 11.0], [63.8, 11.0], [63.9, 11.0], [64.0, 11.0], [64.1, 11.0], [64.2, 11.0], [64.3, 11.0], [64.4, 11.0], [64.5, 11.0], [64.6, 11.0], [64.7, 11.0], [64.8, 11.0], [64.9, 11.0], [65.0, 11.0], [65.1, 11.0], [65.2, 11.0], [65.3, 11.0], [65.4, 11.0], [65.5, 11.0], [65.6, 11.0], [65.7, 11.0], [65.8, 11.0], [65.9, 11.0], [66.0, 11.0], [66.1, 11.0], [66.2, 11.0], [66.3, 11.0], [66.4, 11.0], [66.5, 11.0], [66.6, 11.0], [66.7, 11.0], [66.8, 11.0], [66.9, 11.0], [67.0, 11.0], [67.1, 11.0], [67.2, 12.0], [67.3, 12.0], [67.4, 12.0], [67.5, 12.0], [67.6, 12.0], [67.7, 12.0], [67.8, 12.0], [67.9, 12.0], [68.0, 12.0], [68.1, 12.0], [68.2, 12.0], [68.3, 12.0], [68.4, 12.0], [68.5, 12.0], [68.6, 12.0], [68.7, 12.0], [68.8, 12.0], [68.9, 12.0], [69.0, 12.0], [69.1, 12.0], [69.2, 12.0], [69.3, 12.0], [69.4, 12.0], [69.5, 12.0], [69.6, 12.0], [69.7, 12.0], [69.8, 12.0], [69.9, 12.0], [70.0, 12.0], [70.1, 12.0], [70.2, 12.0], [70.3, 12.0], [70.4, 12.0], [70.5, 12.0], [70.6, 12.0], [70.7, 12.0], [70.8, 12.0], [70.9, 12.0], [71.0, 12.0], [71.1, 12.0], [71.2, 12.0], [71.3, 12.0], [71.4, 12.0], [71.5, 12.0], [71.6, 13.0], [71.7, 13.0], [71.8, 13.0], [71.9, 13.0], [72.0, 13.0], [72.1, 13.0], [72.2, 13.0], [72.3, 13.0], [72.4, 13.0], [72.5, 13.0], [72.6, 13.0], [72.7, 13.0], [72.8, 13.0], [72.9, 13.0], [73.0, 13.0], [73.1, 13.0], [73.2, 13.0], [73.3, 13.0], [73.4, 13.0], [73.5, 13.0], [73.6, 13.0], [73.7, 13.0], [73.8, 13.0], [73.9, 13.0], [74.0, 13.0], [74.1, 13.0], [74.2, 13.0], [74.3, 13.0], [74.4, 13.0], [74.5, 13.0], [74.6, 13.0], [74.7, 13.0], [74.8, 13.0], [74.9, 13.0], [75.0, 13.0], [75.1, 14.0], [75.2, 14.0], [75.3, 14.0], [75.4, 14.0], [75.5, 14.0], [75.6, 14.0], [75.7, 14.0], [75.8, 14.0], [75.9, 14.0], [76.0, 14.0], [76.1, 14.0], [76.2, 14.0], [76.3, 14.0], [76.4, 14.0], [76.5, 14.0], [76.6, 14.0], [76.7, 14.0], [76.8, 14.0], [76.9, 14.0], [77.0, 14.0], [77.1, 14.0], [77.2, 14.0], [77.3, 14.0], [77.4, 14.0], [77.5, 14.0], [77.6, 14.0], [77.7, 14.0], [77.8, 15.0], [77.9, 15.0], [78.0, 15.0], [78.1, 15.0], [78.2, 15.0], [78.3, 15.0], [78.4, 15.0], [78.5, 15.0], [78.6, 15.0], [78.7, 15.0], [78.8, 15.0], [78.9, 15.0], [79.0, 15.0], [79.1, 15.0], [79.2, 15.0], [79.3, 15.0], [79.4, 15.0], [79.5, 15.0], [79.6, 15.0], [79.7, 15.0], [79.8, 15.0], [79.9, 15.0], [80.0, 16.0], [80.1, 16.0], [80.2, 16.0], [80.3, 16.0], [80.4, 16.0], [80.5, 16.0], [80.6, 16.0], [80.7, 16.0], [80.8, 16.0], [80.9, 16.0], [81.0, 16.0], [81.1, 16.0], [81.2, 16.0], [81.3, 16.0], [81.4, 16.0], [81.5, 16.0], [81.6, 16.0], [81.7, 17.0], [81.8, 17.0], [81.9, 17.0], [82.0, 17.0], [82.1, 17.0], [82.2, 17.0], [82.3, 17.0], [82.4, 17.0], [82.5, 17.0], [82.6, 17.0], [82.7, 17.0], [82.8, 17.0], [82.9, 17.0], [83.0, 17.0], [83.1, 18.0], [83.2, 18.0], [83.3, 18.0], [83.4, 18.0], [83.5, 18.0], [83.6, 18.0], [83.7, 18.0], [83.8, 18.0], [83.9, 18.0], [84.0, 18.0], [84.1, 18.0], [84.2, 19.0], [84.3, 19.0], [84.4, 19.0], [84.5, 19.0], [84.6, 19.0], [84.7, 19.0], [84.8, 19.0], [84.9, 19.0], [85.0, 19.0], [85.1, 20.0], [85.2, 20.0], [85.3, 20.0], [85.4, 20.0], [85.5, 20.0], [85.6, 20.0], [85.7, 20.0], [85.8, 20.0], [85.9, 21.0], [86.0, 21.0], [86.1, 21.0], [86.2, 21.0], [86.3, 21.0], [86.4, 21.0], [86.5, 21.0], [86.6, 22.0], [86.7, 22.0], [86.8, 22.0], [86.9, 22.0], [87.0, 22.0], [87.1, 22.0], [87.2, 22.0], [87.3, 23.0], [87.4, 23.0], [87.5, 23.0], [87.6, 23.0], [87.7, 23.0], [87.8, 23.0], [87.9, 24.0], [88.0, 24.0], [88.1, 24.0], [88.2, 24.0], [88.3, 24.0], [88.4, 25.0], [88.5, 25.0], [88.6, 25.0], [88.7, 25.0], [88.8, 25.0], [88.9, 26.0], [89.0, 26.0], [89.1, 26.0], [89.2, 26.0], [89.3, 27.0], [89.4, 27.0], [89.5, 27.0], [89.6, 28.0], [89.7, 28.0], [89.8, 28.0], [89.9, 29.0], [90.0, 29.0], [90.1, 29.0], [90.2, 30.0], [90.3, 30.0], [90.4, 30.0], [90.5, 31.0], [90.6, 31.0], [90.7, 32.0], [90.8, 32.0], [90.9, 33.0], [91.0, 34.0], [91.1, 34.0], [91.2, 35.0], [91.3, 36.0], [91.4, 36.0], [91.5, 37.0], [91.6, 38.0], [91.7, 39.0], [91.8, 40.0], [91.9, 41.0], [92.0, 42.0], [92.1, 43.0], [92.2, 44.0], [92.3, 45.0], [92.4, 46.0], [92.5, 47.0], [92.6, 49.0], [92.7, 50.0], [92.8, 51.0], [92.9, 52.0], [93.0, 54.0], [93.1, 56.0], [93.2, 57.0], [93.3, 59.0], [93.4, 61.0], [93.5, 62.0], [93.6, 65.0], [93.7, 67.0], [93.8, 69.0], [93.9, 72.0], [94.0, 76.0], [94.1, 79.0], [94.2, 83.0], [94.3, 87.0], [94.4, 91.0], [94.5, 95.0], [94.6, 99.0], [94.7, 104.0], [94.8, 109.0], [94.9, 113.0], [95.0, 119.0], [95.1, 123.0], [95.2, 127.0], [95.3, 131.0], [95.4, 135.0], [95.5, 139.0], [95.6, 144.0], [95.7, 148.0], [95.8, 152.0], [95.9, 157.0], [96.0, 162.0], [96.1, 166.0], [96.2, 171.0], [96.3, 176.0], [96.4, 181.0], [96.5, 186.0], [96.6, 191.0], [96.7, 196.0], [96.8, 201.0], [96.9, 206.0], [97.0, 211.0], [97.1, 216.0], [97.2, 222.0], [97.3, 227.0], [97.4, 232.0], [97.5, 238.0], [97.6, 243.0], [97.7, 248.0], [97.8, 254.0], [97.9, 259.0], [98.0, 264.0], [98.1, 270.0], [98.2, 276.0], [98.3, 282.0], [98.4, 289.0], [98.5, 295.0], [98.6, 302.0], [98.7, 309.0], [98.8, 316.0], [98.9, 325.0], [99.0, 335.0], [99.1, 345.0], [99.2, 355.0], [99.3, 367.0], [99.4, 383.0], [99.5, 398.0], [99.6, 418.0], [99.7, 445.0], [99.8, 479.0], [99.9, 549.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 3489880.0, "series": [{"data": [[0.0, 3489880.0], [600.0, 978.0], [700.0, 354.0], [200.0, 66100.0], [800.0, 178.0], [900.0, 68.0], [1000.0, 37.0], [1100.0, 43.0], [1200.0, 79.0], [300.0, 34520.0], [1300.0, 61.0], [1400.0, 40.0], [1500.0, 164.0], [1600.0, 32.0], [100.0, 79642.0], [400.0, 12072.0], [500.0, 4091.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 195.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3682266.0, "series": [{"data": [[0.0, 3682266.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5878.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 195.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 297.81399825774724, "minX": 1.62617496E12, "maxY": 300.0, "series": [{"data": [[1.62617502E12, 300.0], [1.62617514E12, 300.0], [1.62617496E12, 300.0], [1.62617526E12, 297.81399825774724], [1.62617508E12, 300.0], [1.6261752E12, 300.0]], "isOverall": false, "label": "role1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617526E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 160.0, "series": [{"data": [[2.0, 1.0], [3.0, 2.0], [5.0, 2.0], [7.0, 2.6666666666666665], [8.0, 3.0], [9.0, 3.0], [10.0, 3.0], [11.0, 3.0], [12.0, 2.0], [13.0, 2.3333333333333335], [14.0, 2.0], [15.0, 2.6666666666666665], [17.0, 2.6666666666666665], [18.0, 2.3333333333333335], [19.0, 2.210526315789474], [20.0, 1.880952380952381], [21.0, 2.299999999999999], [22.0, 2.762376237623763], [25.0, 1.0], [27.0, 20.5], [28.0, 13.042553191489365], [29.0, 2.1290322580645165], [31.0, 2.1935483870967745], [33.0, 2.0625], [32.0, 2.4222222222222234], [35.0, 1.9736842105263166], [34.0, 1.7272727272727268], [37.0, 3.3898305084745757], [36.0, 2.181818181818182], [39.0, 3.0], [38.0, 3.5263157894736845], [41.0, 3.2], [40.0, 3.0], [43.0, 3.1818181818181825], [42.0, 3.2222222222222223], [45.0, 4.384615384615384], [44.0, 3.9722222222222223], [46.0, 4.562500000000001], [49.0, 5.0], [48.0, 4.333333333333334], [51.0, 5.063829787234044], [50.0, 5.326086956521738], [53.0, 7.050000000000001], [52.0, 7.121212121212121], [55.0, 36.62068965517241], [54.0, 32.5], [57.0, 34.666666666666664], [56.0, 35.333333333333336], [59.0, 35.33333333333333], [58.0, 33.8], [61.0, 5.278409090909092], [60.0, 35.2], [63.0, 3.3617021276595747], [62.0, 2.9541984732824424], [67.0, 5.0], [66.0, 4.309523809523808], [65.0, 2.984615384615385], [64.0, 3.24390243902439], [71.0, 11.932203389830507], [70.0, 4.909090909090909], [69.0, 4.75], [68.0, 5.25], [75.0, 10.333333333333334], [74.0, 14.0], [72.0, 14.0], [78.0, 7.444444444444444], [77.0, 3.0], [76.0, 3.1250000000000004], [83.0, 11.785714285714286], [82.0, 14.0], [81.0, 11.0], [80.0, 9.499999999999998], [87.0, 10.0], [85.0, 12.333333333333332], [84.0, 11.800000000000002], [91.0, 6.166666666666667], [90.0, 6.087378640776701], [89.0, 11.5], [88.0, 12.5], [95.0, 3.6666666666666665], [94.0, 8.0], [93.0, 5.584158415841584], [92.0, 6.5], [99.0, 5.870967741935484], [98.0, 4.6235294117647046], [97.0, 9.000000000000002], [96.0, 5.859649122807017], [103.0, 6.333333333333334], [102.0, 6.08], [101.0, 6.090909090909091], [100.0, 6.0], [107.0, 6.0], [106.0, 5.0], [105.0, 5.25], [104.0, 5.25], [111.0, 7.647058823529412], [110.0, 6.5], [109.0, 6.650793650793649], [108.0, 5.333333333333333], [115.0, 8.130434782608695], [114.0, 8.142857142857142], [113.0, 7.625], [112.0, 8.0], [119.0, 9.65], [117.0, 8.68181818181818], [116.0, 8.0], [123.0, 9.999999999999998], [122.0, 10.437500000000002], [121.0, 7.857142857142857], [120.0, 5.088235294117645], [127.0, 10.61290322580645], [126.0, 16.07843137254902], [125.0, 13.846153846153845], [124.0, 11.846153846153847], [135.0, 14.034482758620692], [134.0, 16.666666666666668], [133.0, 12.764705882352942], [132.0, 14.862745098039216], [131.0, 11.666666666666666], [130.0, 13.616666666666664], [129.0, 10.333333333333334], [128.0, 6.999999999999999], [143.0, 8.071428571428571], [142.0, 6.833333333333333], [141.0, 18.555555555555554], [140.0, 6.0], [139.0, 14.869565217391306], [138.0, 9.125], [137.0, 8.374999999999998], [136.0, 11.197080291970801], [151.0, 59.37499999999999], [150.0, 7.0], [149.0, 24.419354838709673], [148.0, 50.5625], [147.0, 38.16666666666667], [146.0, 8.428571428571429], [145.0, 7.153846153846153], [144.0, 19.093749999999996], [159.0, 49.25], [158.0, 6.0], [157.0, 30.0], [156.0, 41.0], [155.0, 7.0], [154.0, 48.6875], [153.0, 107.83333333333333], [167.0, 29.926829268292675], [166.0, 10.838709677419352], [165.0, 12.266666666666667], [164.0, 25.0], [163.0, 7.666666666666667], [162.0, 7.5], [161.0, 7.2727272727272725], [160.0, 50.0], [175.0, 160.0], [174.0, 158.0], [173.0, 70.22222222222221], [172.0, 17.333333333333336], [171.0, 56.04545454545455], [170.0, 62.66666666666667], [169.0, 4.0], [168.0, 13.0], [180.0, 48.523809523809526], [179.0, 26.923076923076923], [178.0, 57.333333333333336], [177.0, 4.0], [176.0, 74.66666666666667], [191.0, 32.125], [190.0, 79.25], [188.0, 105.33333333333333], [187.0, 119.75], [186.0, 53.0], [185.0, 78.25], [184.0, 150.0], [199.0, 7.0], [198.0, 22.941176470588232], [197.0, 4.948717948717949], [196.0, 128.16666666666666], [194.0, 3.0], [193.0, 4.0], [192.0, 4.111111111111111], [207.0, 75.0], [206.0, 7.0], [205.0, 30.545454545454543], [204.0, 23.791666666666668], [203.0, 25.162162162162165], [202.0, 46.72222222222222], [201.0, 5.0], [200.0, 38.77777777777777], [215.0, 5.666666666666667], [214.0, 5.8], [213.0, 24.714285714285715], [212.0, 5.666666666666667], [211.0, 83.57142857142857], [210.0, 24.142857142857142], [209.0, 50.333333333333336], [208.0, 73.25], [222.0, 26.833333333333336], [221.0, 130.66666666666666], [220.0, 5.0], [219.0, 17.4], [218.0, 32.666666666666664], [217.0, 4.8888888888888875], [216.0, 5.122448979591836], [231.0, 94.25], [229.0, 4.0], [228.0, 38.54545454545455], [227.0, 44.41666666666667], [226.0, 66.0], [225.0, 32.888888888888886], [224.0, 17.82142857142857], [239.0, 67.9], [238.0, 7.0], [237.0, 47.66666666666667], [236.0, 39.92307692307693], [235.0, 50.99999999999999], [234.0, 3.787234042553192], [233.0, 39.32258064516129], [232.0, 25.63636363636364], [247.0, 3.6666666666666665], [246.0, 45.2], [245.0, 59.40000000000001], [244.0, 4.0], [243.0, 42.18181818181819], [241.0, 4.75], [240.0, 89.25], [255.0, 4.2], [254.0, 4.666666666666666], [253.0, 4.208333333333334], [252.0, 9.608695652173914], [251.0, 3.1111111111111116], [250.0, 21.363636363636363], [248.0, 19.94], [270.0, 95.5], [271.0, 76.0], [269.0, 96.00000000000001], [268.0, 4.0], [267.0, 4.0], [266.0, 4.0], [265.0, 107.44444444444444], [264.0, 4.0], [263.0, 98.625], [257.0, 133.0], [256.0, 95.26666666666667], [259.0, 69.0], [258.0, 6.0], [262.0, 42.8], [261.0, 143.86666666666667], [260.0, 5.0], [274.0, 74.4], [282.0, 131.0], [280.0, 143.66666666666666], [279.0, 153.14285714285714], [278.0, 159.70000000000005], [277.0, 1.3333333333333333], [276.0, 1.6], [275.0, 30.076923076923077], [273.0, 94.0], [272.0, 149.33333333333334], [300.0, 24.192480968214532], [299.0, 7.75], [298.0, 11.0], [297.0, 10.0], [296.0, 50.609022556390975], [295.0, 82.3513513513514], [294.0, 45.433333333333316], [293.0, 33.625], [292.0, 19.666666666666668], [1.0, 1.0]], "isOverall": false, "label": "user2role", "isController": false}, {"data": [[299.7244526601265, 24.18057125443186]], "isOverall": false, "label": "user2role-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 270993.45, "minX": 1.62617496E12, "maxY": 3513300.466666667, "series": [{"data": [[1.62617502E12, 1373032.1166666667], [1.62617514E12, 1637415.0166666666], [1.62617496E12, 270993.45], [1.62617526E12, 935334.4666666667], [1.62617508E12, 1594953.0], [1.6261752E12, 1608667.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62617502E12, 2934642.5], [1.62617514E12, 3513300.466666667], [1.62617496E12, 577207.75], [1.62617526E12, 2006883.0833333333], [1.62617508E12, 3419158.2], [1.6261752E12, 3451619.6166666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617526E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 21.9871629159646, "minX": 1.62617496E12, "maxY": 51.95675936583361, "series": [{"data": [[1.62617502E12, 26.2604989193739], [1.62617514E12, 21.9871629159646], [1.62617496E12, 51.95675936583361], [1.62617526E12, 22.836124883043198], [1.62617508E12, 22.516132287406453], [1.6261752E12, 22.39195950990705]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617526E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 21.98684346326076, "minX": 1.62617496E12, "maxY": 51.95482864886921, "series": [{"data": [[1.62617502E12, 26.260214659877175], [1.62617514E12, 21.98684346326076], [1.62617496E12, 51.95482864886921], [1.62617526E12, 22.835845262036845], [1.62617508E12, 22.515843433750764], [1.6261752E12, 22.391619341097154]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617526E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019556760320890553, "minX": 1.62617496E12, "maxY": 0.8644191140979357, "series": [{"data": [[1.62617502E12, 0.019556760320890553], [1.62617514E12, 0.023595268168257345], [1.62617496E12, 0.8644191140979357], [1.62617526E12, 0.02897088715141478], [1.62617508E12, 0.02562346349407007], [1.6261752E12, 0.02307019858604809]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617526E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62617496E12, "maxY": 1675.0, "series": [{"data": [[1.62617502E12, 1364.0], [1.62617514E12, 822.0], [1.62617496E12, 1675.0], [1.62617526E12, 1035.0], [1.62617508E12, 770.0], [1.6261752E12, 579.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62617502E12, 32.0], [1.62617514E12, 27.0], [1.62617496E12, 46.0], [1.62617526E12, 20.0], [1.62617508E12, 25.0], [1.6261752E12, 21.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62617502E12, 258.9900000000016], [1.62617514E12, 247.0], [1.62617496E12, 116.9900000000016], [1.62617526E12, 274.0], [1.62617508E12, 311.9900000000016], [1.6261752E12, 307.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62617502E12, 148.0], [1.62617514E12, 108.0], [1.62617496E12, 57.0], [1.62617526E12, 126.0], [1.62617508E12, 127.0], [1.6261752E12, 117.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62617502E12, 1.0], [1.62617514E12, 1.0], [1.62617496E12, 1.0], [1.62617526E12, 1.0], [1.62617508E12, 1.0], [1.6261752E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62617502E12, 10.0], [1.62617514E12, 10.0], [1.62617496E12, 26.0], [1.62617526E12, 7.0], [1.62617508E12, 9.0], [1.6261752E12, 8.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617526E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6.0, "minX": 1366.0, "maxY": 108.0, "series": [{"data": [[8853.0, 10.0], [9721.0, 27.0], [10045.0, 25.0], [9973.0, 25.0], [10353.0, 9.0], [10497.0, 9.0], [10313.0, 10.0], [10757.0, 9.0], [11629.0, 9.0], [11901.0, 10.0], [12217.0, 10.0], [12221.0, 10.0], [11885.0, 9.0], [12189.0, 9.0], [12533.0, 11.0], [12621.0, 9.0], [12469.0, 8.0], [12585.0, 9.0], [12505.0, 9.0], [13217.0, 8.0], [13073.0, 8.0], [12877.0, 9.0], [13049.0, 8.0], [12925.0, 10.0], [13117.0, 8.0], [13081.0, 8.0], [13149.0, 8.0], [13237.0, 7.0], [13309.0, 8.0], [13057.0, 8.0], [13021.0, 8.0], [13025.0, 8.0], [13041.0, 8.0], [13701.0, 10.0], [13593.0, 9.0], [13457.0, 9.0], [13473.0, 7.0], [13349.0, 8.0], [13609.0, 9.0], [13601.0, 9.0], [13429.0, 8.0], [13377.0, 8.0], [13597.0, 9.0], [14117.0, 9.0], [14325.0, 8.0], [13985.0, 7.0], [14209.0, 8.0], [14177.0, 8.0], [14277.0, 8.0], [14005.0, 9.0], [14069.0, 12.0], [14773.0, 9.0], [14721.0, 8.0], [14741.0, 8.0], [14497.0, 8.0], [15193.0, 11.0], [15105.0, 8.0], [15309.0, 9.0], [15793.0, 8.0], [15597.0, 7.0], [15665.0, 7.0], [1366.0, 94.0], [1448.0, 108.0], [1861.0, 85.0], [2311.0, 58.0], [3440.0, 60.0], [3541.0, 48.0], [3544.0, 68.0], [3688.0, 50.0], [4049.0, 64.0], [4700.0, 46.0], [5444.0, 45.0], [6420.0, 15.0], [7502.0, 12.0], [8648.0, 13.0], [8500.0, 11.0], [8808.0, 22.0], [8920.0, 11.0], [9272.0, 25.0], [9668.0, 10.0], [9580.0, 10.0], [10064.0, 25.0], [10212.0, 6.0], [10548.0, 8.0], [11008.0, 9.0], [10900.0, 11.0], [11608.0, 8.0], [11832.0, 9.0], [11936.0, 10.0], [12140.0, 9.0], [12072.0, 9.0], [11800.0, 8.0], [12256.0, 8.0], [11956.0, 8.0], [12212.0, 8.0], [12652.0, 9.0], [12544.0, 8.0], [12580.0, 9.0], [13272.0, 8.0], [13100.0, 9.0], [13088.0, 9.0], [13056.0, 10.0], [13164.0, 9.0], [13156.0, 8.0], [12900.0, 7.0], [12952.0, 9.0], [12812.0, 8.0], [13264.0, 9.0], [13116.0, 8.0], [13132.0, 7.0], [13748.0, 7.0], [13488.0, 10.0], [13528.0, 8.0], [13448.0, 8.0], [13456.0, 7.0], [13572.0, 7.0], [13580.0, 8.0], [13772.0, 8.0], [13812.0, 8.0], [13636.0, 9.0], [13688.0, 9.0], [13392.0, 9.0], [13364.0, 8.0], [13340.0, 7.0], [13320.0, 7.0], [13928.0, 9.0], [14168.0, 7.0], [13908.0, 8.0], [14012.0, 8.0], [14028.0, 11.0], [13996.0, 9.0], [13880.0, 8.0], [14592.0, 7.0], [14820.0, 7.0], [15068.0, 9.0], [15356.0, 7.0], [15512.0, 8.0], [15748.0, 11.0], [15564.0, 9.0], [16212.0, 11.0], [15876.0, 9.0], [8575.0, 12.0], [9339.0, 28.0], [9503.0, 26.0], [9459.0, 27.0], [10103.0, 8.0], [11223.0, 9.0], [11655.0, 10.0], [11291.0, 8.0], [11415.0, 9.0], [11343.0, 9.0], [11875.0, 8.0], [12171.0, 8.0], [11811.0, 7.0], [11963.0, 10.0], [12215.0, 7.0], [11943.0, 8.0], [11827.0, 7.0], [11931.0, 8.0], [12267.0, 9.0], [12679.0, 10.0], [12527.0, 9.0], [12515.0, 9.0], [12723.0, 9.0], [12307.0, 7.0], [12663.0, 8.0], [12775.0, 10.0], [12559.0, 8.0], [12539.0, 9.0], [12755.0, 9.0], [13311.0, 10.0], [12915.0, 8.0], [13295.0, 7.0], [13115.0, 8.0], [13075.0, 11.0], [13087.0, 8.0], [13175.0, 8.0], [13051.0, 7.0], [12983.0, 8.0], [12995.0, 8.0], [13035.0, 9.0], [13039.0, 10.0], [13335.0, 10.0], [13819.0, 9.0], [13451.0, 7.0], [13811.0, 8.0], [13799.0, 8.0], [13379.0, 11.0], [13515.0, 8.0], [13535.0, 7.0], [13463.0, 8.0], [13519.0, 8.0], [13527.0, 8.0], [13867.0, 8.0], [13839.0, 9.0], [14103.0, 8.0], [14075.0, 9.0], [14071.0, 13.0], [13943.0, 8.0], [14455.0, 8.0], [14343.0, 8.0], [14607.0, 8.0], [14395.0, 7.0], [14987.0, 8.0], [14979.0, 10.0], [15623.0, 9.0], [4735.0, 49.0], [4747.0, 54.0], [6071.0, 25.0], [6327.0, 40.0], [7935.0, 10.0], [8061.0, 33.0], [8622.0, 12.0], [8910.0, 26.0], [9226.0, 27.0], [9318.0, 26.0], [9826.0, 24.0], [9746.0, 26.0], [9798.0, 9.0], [10266.0, 22.0], [10338.0, 9.0], [11098.0, 8.0], [10802.0, 8.0], [11686.0, 8.0], [11758.0, 8.0], [11658.0, 10.0], [11374.0, 9.0], [11726.0, 8.0], [11378.0, 7.0], [11714.0, 9.0], [11974.0, 9.0], [11954.0, 8.0], [11966.0, 8.0], [12114.0, 8.0], [12146.0, 8.0], [12142.0, 8.0], [12202.0, 8.0], [12014.0, 8.0], [11790.0, 9.0], [12722.0, 9.0], [12342.0, 8.0], [12622.0, 7.0], [12774.0, 8.0], [12302.0, 9.0], [12638.0, 9.0], [12698.0, 9.0], [12478.0, 9.0], [13290.0, 8.0], [13038.0, 9.0], [13214.0, 8.0], [12922.0, 8.0], [12826.0, 8.0], [12850.0, 9.0], [12870.0, 9.0], [12866.0, 12.0], [13698.0, 12.0], [13394.0, 8.0], [13446.0, 8.0], [13686.0, 8.0], [13630.0, 8.0], [13562.0, 7.0], [13390.0, 8.0], [13474.0, 8.0], [13434.0, 9.0], [13782.0, 10.0], [13790.0, 8.0], [13710.0, 9.0], [13846.0, 7.0], [14330.0, 8.0], [14114.0, 8.0], [14290.0, 9.0], [13990.0, 7.0], [14154.0, 7.0], [14030.0, 8.0], [13842.0, 7.0], [13954.0, 8.0], [14282.0, 8.0], [13854.0, 10.0], [14646.0, 7.0], [14702.0, 9.0], [14526.0, 9.0], [15218.0, 9.0], [15278.0, 8.0], [15622.0, 10.0], [15658.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16212.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6.0, "minX": 1366.0, "maxY": 108.0, "series": [{"data": [[8853.0, 10.0], [9721.0, 27.0], [10045.0, 25.0], [9973.0, 25.0], [10353.0, 9.0], [10497.0, 9.0], [10313.0, 10.0], [10757.0, 9.0], [11629.0, 9.0], [11901.0, 10.0], [12217.0, 10.0], [12221.0, 10.0], [11885.0, 9.0], [12189.0, 9.0], [12533.0, 11.0], [12621.0, 9.0], [12469.0, 8.0], [12585.0, 9.0], [12505.0, 9.0], [13217.0, 8.0], [13073.0, 8.0], [12877.0, 9.0], [13049.0, 8.0], [12925.0, 10.0], [13117.0, 8.0], [13081.0, 8.0], [13149.0, 8.0], [13237.0, 7.0], [13309.0, 8.0], [13057.0, 8.0], [13021.0, 8.0], [13025.0, 8.0], [13041.0, 8.0], [13701.0, 10.0], [13593.0, 9.0], [13457.0, 9.0], [13473.0, 7.0], [13349.0, 8.0], [13609.0, 9.0], [13601.0, 9.0], [13429.0, 8.0], [13377.0, 8.0], [13597.0, 9.0], [14117.0, 9.0], [14325.0, 8.0], [13985.0, 7.0], [14209.0, 8.0], [14177.0, 8.0], [14277.0, 8.0], [14005.0, 9.0], [14069.0, 12.0], [14773.0, 9.0], [14721.0, 8.0], [14741.0, 8.0], [14497.0, 8.0], [15193.0, 11.0], [15105.0, 8.0], [15309.0, 9.0], [15793.0, 8.0], [15597.0, 7.0], [15665.0, 7.0], [1366.0, 94.0], [1448.0, 108.0], [1861.0, 85.0], [2311.0, 58.0], [3440.0, 60.0], [3541.0, 48.0], [3544.0, 68.0], [3688.0, 50.0], [4049.0, 64.0], [4700.0, 46.0], [5444.0, 45.0], [6420.0, 15.0], [7502.0, 12.0], [8648.0, 13.0], [8500.0, 11.0], [8808.0, 22.0], [8920.0, 11.0], [9272.0, 25.0], [9668.0, 10.0], [9580.0, 10.0], [10064.0, 25.0], [10212.0, 6.0], [10548.0, 8.0], [11008.0, 9.0], [10900.0, 11.0], [11608.0, 8.0], [11832.0, 9.0], [11936.0, 10.0], [12140.0, 9.0], [12072.0, 9.0], [11800.0, 8.0], [12256.0, 8.0], [11956.0, 8.0], [12212.0, 8.0], [12652.0, 9.0], [12544.0, 8.0], [12580.0, 9.0], [13272.0, 8.0], [13100.0, 9.0], [13088.0, 9.0], [13056.0, 10.0], [13164.0, 9.0], [13156.0, 8.0], [12900.0, 7.0], [12952.0, 9.0], [12812.0, 8.0], [13264.0, 9.0], [13116.0, 8.0], [13132.0, 7.0], [13748.0, 7.0], [13488.0, 10.0], [13528.0, 8.0], [13448.0, 8.0], [13456.0, 7.0], [13572.0, 7.0], [13580.0, 8.0], [13772.0, 8.0], [13812.0, 8.0], [13636.0, 9.0], [13688.0, 9.0], [13392.0, 9.0], [13364.0, 8.0], [13340.0, 7.0], [13320.0, 7.0], [13928.0, 9.0], [14168.0, 7.0], [13908.0, 8.0], [14012.0, 8.0], [14028.0, 11.0], [13996.0, 9.0], [13880.0, 8.0], [14592.0, 7.0], [14820.0, 7.0], [15068.0, 9.0], [15356.0, 7.0], [15512.0, 8.0], [15748.0, 11.0], [15564.0, 9.0], [16212.0, 11.0], [15876.0, 9.0], [8575.0, 12.0], [9339.0, 28.0], [9503.0, 26.0], [9459.0, 27.0], [10103.0, 8.0], [11223.0, 9.0], [11655.0, 10.0], [11291.0, 8.0], [11415.0, 9.0], [11343.0, 9.0], [11875.0, 8.0], [12171.0, 8.0], [11811.0, 7.0], [11963.0, 10.0], [12215.0, 7.0], [11943.0, 8.0], [11827.0, 7.0], [11931.0, 8.0], [12267.0, 9.0], [12679.0, 10.0], [12527.0, 9.0], [12515.0, 9.0], [12723.0, 9.0], [12307.0, 7.0], [12663.0, 8.0], [12775.0, 10.0], [12559.0, 8.0], [12539.0, 9.0], [12755.0, 9.0], [13311.0, 10.0], [12915.0, 8.0], [13295.0, 7.0], [13115.0, 8.0], [13075.0, 11.0], [13087.0, 8.0], [13175.0, 8.0], [13051.0, 7.0], [12983.0, 8.0], [12995.0, 8.0], [13035.0, 9.0], [13039.0, 10.0], [13335.0, 10.0], [13819.0, 9.0], [13451.0, 7.0], [13811.0, 8.0], [13799.0, 8.0], [13379.0, 11.0], [13515.0, 8.0], [13535.0, 7.0], [13463.0, 8.0], [13519.0, 8.0], [13527.0, 8.0], [13867.0, 8.0], [13839.0, 9.0], [14103.0, 8.0], [14075.0, 9.0], [14071.0, 13.0], [13943.0, 8.0], [14455.0, 8.0], [14343.0, 8.0], [14607.0, 8.0], [14395.0, 7.0], [14987.0, 8.0], [14979.0, 10.0], [15623.0, 9.0], [4735.0, 49.0], [4747.0, 54.0], [6071.0, 25.0], [6327.0, 40.0], [7935.0, 10.0], [8061.0, 33.0], [8622.0, 12.0], [8910.0, 26.0], [9226.0, 27.0], [9318.0, 26.0], [9826.0, 24.0], [9746.0, 26.0], [9798.0, 9.0], [10266.0, 22.0], [10338.0, 9.0], [11098.0, 8.0], [10802.0, 8.0], [11686.0, 8.0], [11758.0, 8.0], [11658.0, 10.0], [11374.0, 9.0], [11726.0, 8.0], [11378.0, 7.0], [11714.0, 9.0], [11974.0, 9.0], [11954.0, 8.0], [11966.0, 8.0], [12114.0, 8.0], [12146.0, 8.0], [12142.0, 8.0], [12202.0, 8.0], [12014.0, 8.0], [11790.0, 9.0], [12722.0, 9.0], [12342.0, 8.0], [12622.0, 7.0], [12774.0, 8.0], [12302.0, 9.0], [12638.0, 9.0], [12698.0, 9.0], [12478.0, 9.0], [13290.0, 8.0], [13038.0, 9.0], [13214.0, 8.0], [12922.0, 8.0], [12826.0, 8.0], [12850.0, 9.0], [12870.0, 9.0], [12866.0, 12.0], [13698.0, 12.0], [13394.0, 8.0], [13446.0, 8.0], [13686.0, 8.0], [13630.0, 8.0], [13562.0, 7.0], [13390.0, 8.0], [13474.0, 8.0], [13434.0, 9.0], [13782.0, 10.0], [13790.0, 8.0], [13710.0, 9.0], [13846.0, 7.0], [14330.0, 8.0], [14114.0, 8.0], [14290.0, 9.0], [13990.0, 7.0], [14154.0, 7.0], [14030.0, 8.0], [13842.0, 7.0], [13954.0, 8.0], [14282.0, 8.0], [13854.0, 10.0], [14646.0, 7.0], [14702.0, 9.0], [14526.0, 9.0], [15218.0, 9.0], [15278.0, 8.0], [15622.0, 10.0], [15658.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16212.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2249.3, "minX": 1.62617496E12, "maxY": 13565.05, "series": [{"data": [[1.62617502E12, 11374.683333333332], [1.62617514E12, 13565.05], [1.62617496E12, 2249.3], [1.62617526E12, 7743.583333333333], [1.62617508E12, 13212.9], [1.6261752E12, 13326.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617526E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2244.4166666666665, "minX": 1.62617496E12, "maxY": 13564.866666666667, "series": [{"data": [[1.62617502E12, 11374.583333333334], [1.62617514E12, 13564.866666666667], [1.62617496E12, 2244.4166666666665], [1.62617526E12, 7748.583333333333], [1.62617508E12, 13213.15], [1.6261752E12, 13326.716666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617526E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2244.4166666666665, "minX": 1.62617496E12, "maxY": 13564.866666666667, "series": [{"data": [[1.62617502E12, 11374.583333333334], [1.62617514E12, 13564.866666666667], [1.62617496E12, 2244.4166666666665], [1.62617526E12, 7748.583333333333], [1.62617508E12, 13213.15], [1.6261752E12, 13326.716666666667]], "isOverall": false, "label": "user2role-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617526E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2244.4166666666665, "minX": 1.62617496E12, "maxY": 13564.866666666667, "series": [{"data": [[1.62617502E12, 11374.583333333334], [1.62617514E12, 13564.866666666667], [1.62617496E12, 2244.4166666666665], [1.62617526E12, 7748.583333333333], [1.62617508E12, 13213.15], [1.6261752E12, 13326.716666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617526E12, "title": "Total Transactions Per Second"}},
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

