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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 971.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 7.0], [6.7, 7.0], [6.8, 7.0], [6.9, 7.0], [7.0, 7.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 11.0], [20.2, 11.0], [20.3, 11.0], [20.4, 11.0], [20.5, 11.0], [20.6, 11.0], [20.7, 11.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 11.0], [28.8, 11.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 12.0], [32.6, 12.0], [32.7, 12.0], [32.8, 12.0], [32.9, 12.0], [33.0, 12.0], [33.1, 12.0], [33.2, 12.0], [33.3, 12.0], [33.4, 12.0], [33.5, 12.0], [33.6, 12.0], [33.7, 12.0], [33.8, 12.0], [33.9, 12.0], [34.0, 12.0], [34.1, 12.0], [34.2, 12.0], [34.3, 12.0], [34.4, 12.0], [34.5, 12.0], [34.6, 12.0], [34.7, 12.0], [34.8, 12.0], [34.9, 12.0], [35.0, 12.0], [35.1, 12.0], [35.2, 12.0], [35.3, 12.0], [35.4, 12.0], [35.5, 12.0], [35.6, 12.0], [35.7, 12.0], [35.8, 12.0], [35.9, 12.0], [36.0, 12.0], [36.1, 12.0], [36.2, 12.0], [36.3, 12.0], [36.4, 12.0], [36.5, 12.0], [36.6, 12.0], [36.7, 12.0], [36.8, 12.0], [36.9, 12.0], [37.0, 12.0], [37.1, 12.0], [37.2, 12.0], [37.3, 12.0], [37.4, 12.0], [37.5, 12.0], [37.6, 12.0], [37.7, 12.0], [37.8, 12.0], [37.9, 12.0], [38.0, 12.0], [38.1, 12.0], [38.2, 12.0], [38.3, 12.0], [38.4, 12.0], [38.5, 12.0], [38.6, 12.0], [38.7, 12.0], [38.8, 12.0], [38.9, 12.0], [39.0, 12.0], [39.1, 12.0], [39.2, 12.0], [39.3, 12.0], [39.4, 12.0], [39.5, 12.0], [39.6, 13.0], [39.7, 13.0], [39.8, 13.0], [39.9, 13.0], [40.0, 13.0], [40.1, 13.0], [40.2, 13.0], [40.3, 13.0], [40.4, 13.0], [40.5, 13.0], [40.6, 13.0], [40.7, 13.0], [40.8, 13.0], [40.9, 13.0], [41.0, 13.0], [41.1, 13.0], [41.2, 13.0], [41.3, 13.0], [41.4, 13.0], [41.5, 13.0], [41.6, 13.0], [41.7, 13.0], [41.8, 13.0], [41.9, 13.0], [42.0, 13.0], [42.1, 13.0], [42.2, 13.0], [42.3, 13.0], [42.4, 13.0], [42.5, 13.0], [42.6, 13.0], [42.7, 13.0], [42.8, 13.0], [42.9, 13.0], [43.0, 13.0], [43.1, 13.0], [43.2, 13.0], [43.3, 13.0], [43.4, 13.0], [43.5, 13.0], [43.6, 13.0], [43.7, 13.0], [43.8, 13.0], [43.9, 13.0], [44.0, 13.0], [44.1, 13.0], [44.2, 13.0], [44.3, 13.0], [44.4, 13.0], [44.5, 13.0], [44.6, 13.0], [44.7, 13.0], [44.8, 13.0], [44.9, 13.0], [45.0, 13.0], [45.1, 13.0], [45.2, 13.0], [45.3, 13.0], [45.4, 13.0], [45.5, 13.0], [45.6, 13.0], [45.7, 13.0], [45.8, 13.0], [45.9, 13.0], [46.0, 13.0], [46.1, 13.0], [46.2, 13.0], [46.3, 13.0], [46.4, 13.0], [46.5, 13.0], [46.6, 13.0], [46.7, 13.0], [46.8, 13.0], [46.9, 13.0], [47.0, 13.0], [47.1, 13.0], [47.2, 13.0], [47.3, 13.0], [47.4, 13.0], [47.5, 13.0], [47.6, 13.0], [47.7, 13.0], [47.8, 13.0], [47.9, 13.0], [48.0, 13.0], [48.1, 13.0], [48.2, 13.0], [48.3, 13.0], [48.4, 13.0], [48.5, 13.0], [48.6, 13.0], [48.7, 13.0], [48.8, 13.0], [48.9, 13.0], [49.0, 13.0], [49.1, 13.0], [49.2, 13.0], [49.3, 13.0], [49.4, 13.0], [49.5, 13.0], [49.6, 13.0], [49.7, 13.0], [49.8, 13.0], [49.9, 13.0], [50.0, 13.0], [50.1, 13.0], [50.2, 13.0], [50.3, 13.0], [50.4, 14.0], [50.5, 14.0], [50.6, 14.0], [50.7, 14.0], [50.8, 14.0], [50.9, 14.0], [51.0, 14.0], [51.1, 14.0], [51.2, 14.0], [51.3, 14.0], [51.4, 14.0], [51.5, 14.0], [51.6, 14.0], [51.7, 14.0], [51.8, 14.0], [51.9, 14.0], [52.0, 14.0], [52.1, 14.0], [52.2, 14.0], [52.3, 14.0], [52.4, 14.0], [52.5, 14.0], [52.6, 14.0], [52.7, 14.0], [52.8, 14.0], [52.9, 14.0], [53.0, 14.0], [53.1, 14.0], [53.2, 14.0], [53.3, 14.0], [53.4, 14.0], [53.5, 14.0], [53.6, 14.0], [53.7, 14.0], [53.8, 14.0], [53.9, 14.0], [54.0, 14.0], [54.1, 14.0], [54.2, 14.0], [54.3, 14.0], [54.4, 14.0], [54.5, 14.0], [54.6, 14.0], [54.7, 14.0], [54.8, 14.0], [54.9, 14.0], [55.0, 14.0], [55.1, 14.0], [55.2, 14.0], [55.3, 14.0], [55.4, 14.0], [55.5, 14.0], [55.6, 14.0], [55.7, 14.0], [55.8, 14.0], [55.9, 14.0], [56.0, 14.0], [56.1, 14.0], [56.2, 14.0], [56.3, 14.0], [56.4, 14.0], [56.5, 14.0], [56.6, 14.0], [56.7, 14.0], [56.8, 14.0], [56.9, 14.0], [57.0, 14.0], [57.1, 14.0], [57.2, 14.0], [57.3, 14.0], [57.4, 14.0], [57.5, 14.0], [57.6, 14.0], [57.7, 14.0], [57.8, 14.0], [57.9, 14.0], [58.0, 14.0], [58.1, 14.0], [58.2, 14.0], [58.3, 14.0], [58.4, 14.0], [58.5, 14.0], [58.6, 14.0], [58.7, 14.0], [58.8, 14.0], [58.9, 14.0], [59.0, 14.0], [59.1, 14.0], [59.2, 14.0], [59.3, 14.0], [59.4, 14.0], [59.5, 14.0], [59.6, 14.0], [59.7, 14.0], [59.8, 14.0], [59.9, 14.0], [60.0, 15.0], [60.1, 15.0], [60.2, 15.0], [60.3, 15.0], [60.4, 15.0], [60.5, 15.0], [60.6, 15.0], [60.7, 15.0], [60.8, 15.0], [60.9, 15.0], [61.0, 15.0], [61.1, 15.0], [61.2, 15.0], [61.3, 15.0], [61.4, 15.0], [61.5, 15.0], [61.6, 15.0], [61.7, 15.0], [61.8, 15.0], [61.9, 15.0], [62.0, 15.0], [62.1, 15.0], [62.2, 15.0], [62.3, 15.0], [62.4, 15.0], [62.5, 15.0], [62.6, 15.0], [62.7, 15.0], [62.8, 15.0], [62.9, 15.0], [63.0, 15.0], [63.1, 15.0], [63.2, 15.0], [63.3, 15.0], [63.4, 15.0], [63.5, 15.0], [63.6, 15.0], [63.7, 15.0], [63.8, 15.0], [63.9, 15.0], [64.0, 15.0], [64.1, 15.0], [64.2, 15.0], [64.3, 15.0], [64.4, 15.0], [64.5, 15.0], [64.6, 15.0], [64.7, 15.0], [64.8, 15.0], [64.9, 15.0], [65.0, 15.0], [65.1, 15.0], [65.2, 15.0], [65.3, 15.0], [65.4, 15.0], [65.5, 15.0], [65.6, 15.0], [65.7, 15.0], [65.8, 15.0], [65.9, 15.0], [66.0, 15.0], [66.1, 15.0], [66.2, 15.0], [66.3, 15.0], [66.4, 15.0], [66.5, 15.0], [66.6, 15.0], [66.7, 15.0], [66.8, 15.0], [66.9, 15.0], [67.0, 15.0], [67.1, 15.0], [67.2, 15.0], [67.3, 15.0], [67.4, 15.0], [67.5, 15.0], [67.6, 15.0], [67.7, 15.0], [67.8, 16.0], [67.9, 16.0], [68.0, 16.0], [68.1, 16.0], [68.2, 16.0], [68.3, 16.0], [68.4, 16.0], [68.5, 16.0], [68.6, 16.0], [68.7, 16.0], [68.8, 16.0], [68.9, 16.0], [69.0, 16.0], [69.1, 16.0], [69.2, 16.0], [69.3, 16.0], [69.4, 16.0], [69.5, 16.0], [69.6, 16.0], [69.7, 16.0], [69.8, 16.0], [69.9, 16.0], [70.0, 16.0], [70.1, 16.0], [70.2, 16.0], [70.3, 16.0], [70.4, 16.0], [70.5, 16.0], [70.6, 16.0], [70.7, 16.0], [70.8, 16.0], [70.9, 16.0], [71.0, 16.0], [71.1, 16.0], [71.2, 16.0], [71.3, 16.0], [71.4, 16.0], [71.5, 16.0], [71.6, 16.0], [71.7, 16.0], [71.8, 16.0], [71.9, 16.0], [72.0, 16.0], [72.1, 16.0], [72.2, 16.0], [72.3, 16.0], [72.4, 16.0], [72.5, 16.0], [72.6, 16.0], [72.7, 16.0], [72.8, 16.0], [72.9, 16.0], [73.0, 16.0], [73.1, 16.0], [73.2, 16.0], [73.3, 16.0], [73.4, 16.0], [73.5, 16.0], [73.6, 16.0], [73.7, 16.0], [73.8, 16.0], [73.9, 16.0], [74.0, 17.0], [74.1, 17.0], [74.2, 17.0], [74.3, 17.0], [74.4, 17.0], [74.5, 17.0], [74.6, 17.0], [74.7, 17.0], [74.8, 17.0], [74.9, 17.0], [75.0, 17.0], [75.1, 17.0], [75.2, 17.0], [75.3, 17.0], [75.4, 17.0], [75.5, 17.0], [75.6, 17.0], [75.7, 17.0], [75.8, 17.0], [75.9, 17.0], [76.0, 17.0], [76.1, 17.0], [76.2, 17.0], [76.3, 17.0], [76.4, 17.0], [76.5, 17.0], [76.6, 17.0], [76.7, 17.0], [76.8, 17.0], [76.9, 17.0], [77.0, 17.0], [77.1, 17.0], [77.2, 17.0], [77.3, 17.0], [77.4, 17.0], [77.5, 17.0], [77.6, 17.0], [77.7, 17.0], [77.8, 17.0], [77.9, 17.0], [78.0, 17.0], [78.1, 17.0], [78.2, 17.0], [78.3, 17.0], [78.4, 17.0], [78.5, 17.0], [78.6, 17.0], [78.7, 18.0], [78.8, 18.0], [78.9, 18.0], [79.0, 18.0], [79.1, 18.0], [79.2, 18.0], [79.3, 18.0], [79.4, 18.0], [79.5, 18.0], [79.6, 18.0], [79.7, 18.0], [79.8, 18.0], [79.9, 18.0], [80.0, 18.0], [80.1, 18.0], [80.2, 18.0], [80.3, 18.0], [80.4, 18.0], [80.5, 18.0], [80.6, 18.0], [80.7, 18.0], [80.8, 18.0], [80.9, 18.0], [81.0, 18.0], [81.1, 18.0], [81.2, 18.0], [81.3, 18.0], [81.4, 18.0], [81.5, 18.0], [81.6, 18.0], [81.7, 18.0], [81.8, 18.0], [81.9, 18.0], [82.0, 18.0], [82.1, 18.0], [82.2, 18.0], [82.3, 19.0], [82.4, 19.0], [82.5, 19.0], [82.6, 19.0], [82.7, 19.0], [82.8, 19.0], [82.9, 19.0], [83.0, 19.0], [83.1, 19.0], [83.2, 19.0], [83.3, 19.0], [83.4, 19.0], [83.5, 19.0], [83.6, 19.0], [83.7, 19.0], [83.8, 19.0], [83.9, 19.0], [84.0, 19.0], [84.1, 19.0], [84.2, 19.0], [84.3, 19.0], [84.4, 19.0], [84.5, 19.0], [84.6, 19.0], [84.7, 19.0], [84.8, 19.0], [84.9, 19.0], [85.0, 19.0], [85.1, 20.0], [85.2, 20.0], [85.3, 20.0], [85.4, 20.0], [85.5, 20.0], [85.6, 20.0], [85.7, 20.0], [85.8, 20.0], [85.9, 20.0], [86.0, 20.0], [86.1, 20.0], [86.2, 20.0], [86.3, 20.0], [86.4, 20.0], [86.5, 20.0], [86.6, 20.0], [86.7, 20.0], [86.8, 20.0], [86.9, 20.0], [87.0, 20.0], [87.1, 20.0], [87.2, 20.0], [87.3, 21.0], [87.4, 21.0], [87.5, 21.0], [87.6, 21.0], [87.7, 21.0], [87.8, 21.0], [87.9, 21.0], [88.0, 21.0], [88.1, 21.0], [88.2, 21.0], [88.3, 21.0], [88.4, 21.0], [88.5, 21.0], [88.6, 21.0], [88.7, 21.0], [88.8, 21.0], [88.9, 21.0], [89.0, 21.0], [89.1, 21.0], [89.2, 22.0], [89.3, 22.0], [89.4, 22.0], [89.5, 22.0], [89.6, 22.0], [89.7, 22.0], [89.8, 22.0], [89.9, 22.0], [90.0, 22.0], [90.1, 22.0], [90.2, 22.0], [90.3, 22.0], [90.4, 22.0], [90.5, 22.0], [90.6, 22.0], [90.7, 23.0], [90.8, 23.0], [90.9, 23.0], [91.0, 23.0], [91.1, 23.0], [91.2, 23.0], [91.3, 23.0], [91.4, 23.0], [91.5, 23.0], [91.6, 23.0], [91.7, 23.0], [91.8, 23.0], [91.9, 23.0], [92.0, 24.0], [92.1, 24.0], [92.2, 24.0], [92.3, 24.0], [92.4, 24.0], [92.5, 24.0], [92.6, 24.0], [92.7, 24.0], [92.8, 24.0], [92.9, 24.0], [93.0, 24.0], [93.1, 25.0], [93.2, 25.0], [93.3, 25.0], [93.4, 25.0], [93.5, 25.0], [93.6, 25.0], [93.7, 25.0], [93.8, 25.0], [93.9, 25.0], [94.0, 26.0], [94.1, 26.0], [94.2, 26.0], [94.3, 26.0], [94.4, 26.0], [94.5, 26.0], [94.6, 26.0], [94.7, 27.0], [94.8, 27.0], [94.9, 27.0], [95.0, 27.0], [95.1, 27.0], [95.2, 27.0], [95.3, 27.0], [95.4, 28.0], [95.5, 28.0], [95.6, 28.0], [95.7, 28.0], [95.8, 28.0], [95.9, 29.0], [96.0, 29.0], [96.1, 29.0], [96.2, 29.0], [96.3, 30.0], [96.4, 30.0], [96.5, 30.0], [96.6, 30.0], [96.7, 31.0], [96.8, 31.0], [96.9, 31.0], [97.0, 32.0], [97.1, 32.0], [97.2, 32.0], [97.3, 33.0], [97.4, 33.0], [97.5, 34.0], [97.6, 34.0], [97.7, 35.0], [97.8, 35.0], [97.9, 36.0], [98.0, 36.0], [98.1, 37.0], [98.2, 37.0], [98.3, 38.0], [98.4, 39.0], [98.5, 40.0], [98.6, 40.0], [98.7, 41.0], [98.8, 42.0], [98.9, 43.0], [99.0, 44.0], [99.1, 45.0], [99.2, 47.0], [99.3, 49.0], [99.4, 51.0], [99.5, 53.0], [99.6, 57.0], [99.7, 62.0], [99.8, 71.0], [99.9, 93.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 5833997.0, "series": [{"data": [[0.0, 5833997.0], [300.0, 225.0], [600.0, 49.0], [700.0, 107.0], [100.0, 3935.0], [200.0, 640.0], [400.0, 30.0], [800.0, 89.0], [900.0, 59.0], [500.0, 6.0]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 310.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5838827.0, "series": [{"data": [[0.0, 5838827.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 310.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 296.56924503913854, "minX": 1.6266726E12, "maxY": 300.0, "series": [{"data": [[1.62667266E12, 300.0], [1.62667284E12, 300.0], [1.6266726E12, 299.8092624155137], [1.6266729E12, 296.56924503913854], [1.62667272E12, 300.0], [1.62667278E12, 300.0]], "isOverall": false, "label": "role1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6266729E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 256.75, "series": [{"data": [[2.0, 1.0], [3.0, 2.0], [4.0, 3.0], [5.0, 2.0], [6.0, 1.7142857142857142], [7.0, 2.0], [10.0, 1.5], [11.0, 5.6], [12.0, 8.0], [13.0, 1.0], [14.0, 2.9999999999999996], [15.0, 11.0], [18.0, 10.333333333333334], [19.0, 10.0], [21.0, 9.0], [22.0, 9.0], [24.0, 3.8524590163934427], [25.0, 4.079999999999999], [26.0, 2.457166392092258], [27.0, 2.579298831385642], [28.0, 1.875], [29.0, 3.076923076923077], [30.0, 2.7340425531914883], [31.0, 1.8333333333333333], [33.0, 2.000000000000001], [32.0, 2.0], [35.0, 3.1935483870967745], [34.0, 2.339285714285714], [37.0, 3.75], [36.0, 4.478260869565218], [39.0, 3.180851063829787], [38.0, 2.3818181818181823], [41.0, 7.0], [40.0, 4.710526315789471], [43.0, 8.88888888888889], [42.0, 10.0], [45.0, 6.666666666666667], [44.0, 15.333333333333334], [47.0, 7.75], [46.0, 6.125], [49.0, 5.333333333333334], [48.0, 6.571428571428571], [51.0, 7.5], [50.0, 9.4], [53.0, 12.222222222222223], [52.0, 12.5], [55.0, 12.0], [54.0, 10.0], [57.0, 12.5], [56.0, 11.0], [61.0, 4.09090909090909], [60.0, 9.153846153846155], [63.0, 4.888888888888889], [62.0, 3.0], [67.0, 4.095238095238096], [66.0, 4.666666666666668], [65.0, 4.714285714285714], [64.0, 3.625], [71.0, 5.86842105263158], [70.0, 6.356321839080461], [69.0, 4.400673400673402], [75.0, 3.739130434782609], [74.0, 5.9242424242424265], [73.0, 3.8251748251748245], [72.0, 5.539682539682539], [79.0, 7.209677419354837], [78.0, 6.043795620437958], [77.0, 4.714285714285714], [76.0, 3.8571428571428568], [82.0, 5.0476190476190474], [81.0, 3.271428571428572], [80.0, 4.851851851851851], [87.0, 4.379310344827586], [86.0, 4.9], [85.0, 4.5], [84.0, 4.125], [91.0, 5.040000000000002], [90.0, 5.53030303030303], [89.0, 4.6521739130434785], [88.0, 5.2], [95.0, 5.999999999999999], [94.0, 5.382978723404254], [92.0, 5.242424242424241], [99.0, 5.386666666666667], [98.0, 5.5600000000000005], [97.0, 5.000000000000001], [96.0, 5.903225806451614], [103.0, 6.125000000000001], [100.0, 5.212500000000001], [107.0, 8.166666666666668], [106.0, 6.0], [105.0, 4.833333333333333], [104.0, 4.1], [111.0, 11.826086956521738], [110.0, 9.0], [109.0, 11.142857142857142], [108.0, 8.392857142857144], [115.0, 8.549999999999997], [114.0, 9.608695652173918], [113.0, 11.5], [112.0, 11.5], [119.0, 8.000000000000002], [118.0, 7.472727272727274], [117.0, 8.0], [116.0, 6.428571428571429], [123.0, 6.734939759036145], [122.0, 6.350230414746541], [121.0, 6.769230769230769], [120.0, 6.720000000000001], [127.0, 6.0], [126.0, 5.214285714285714], [125.0, 6.492307692307692], [124.0, 7.3392857142857135], [134.0, 7.764705882352939], [133.0, 7.847826086956521], [132.0, 6.999999999999999], [131.0, 6.750000000000002], [130.0, 5.7252747252747245], [129.0, 6.405405405405405], [128.0, 6.235294117647058], [143.0, 9.857142857142858], [142.0, 9.928571428571429], [141.0, 8.999999999999998], [140.0, 9.178571428571429], [139.0, 12.823529411764705], [138.0, 13.4], [137.0, 14.416666666666666], [136.0, 6.533333333333333], [151.0, 9.000000000000002], [150.0, 7.624999999999999], [149.0, 5.888888888888888], [148.0, 8.842105263157897], [147.0, 9.666666666666666], [146.0, 11.625], [145.0, 11.176470588235295], [144.0, 7.333333333333334], [159.0, 7.980769230769233], [158.0, 9.544444444444448], [157.0, 7.8765432098765435], [156.0, 6.755813953488374], [155.0, 7.5357142857142865], [154.0, 8.270270270270268], [153.0, 7.729166666666668], [152.0, 7.925925925925927], [167.0, 6.718181818181819], [166.0, 6.833333333333331], [165.0, 7.196078431372547], [164.0, 6.170212765957445], [163.0, 8.102040816326536], [162.0, 7.0], [161.0, 7.135135135135135], [160.0, 6.567567567567568], [175.0, 9.043478260869565], [174.0, 12.090909090909092], [173.0, 11.142857142857142], [172.0, 9.102040816326534], [171.0, 8.310344827586206], [170.0, 7.859649122807017], [169.0, 6.857142857142858], [168.0, 8.09090909090909], [183.0, 12.666666666666666], [182.0, 11.941176470588236], [181.0, 11.138888888888891], [180.0, 8.153225806451612], [179.0, 7.7608695652173925], [178.0, 8.09090909090909], [177.0, 7.075], [176.0, 8.25], [191.0, 8.700000000000001], [188.0, 10.823529411764708], [187.0, 10.368421052631579], [186.0, 13.24], [185.0, 14.263157894736842], [184.0, 11.0], [197.0, 8.516129032258064], [198.0, 21.70000000000001], [199.0, 7.0], [196.0, 8.5], [195.0, 10.107142857142856], [194.0, 9.30232558139535], [193.0, 9.544217687074832], [192.0, 9.066666666666668], [200.0, 11.148148148148149], [201.0, 27.047619047619065], [202.0, 34.076923076923066], [203.0, 71.5230769230769], [204.0, 18.052631578947363], [205.0, 53.04761904761902], [206.0, 20.978494623655916], [207.0, 15.030864197530862], [209.0, 10.575757575757576], [210.0, 11.027777777777777], [211.0, 9.80952380952381], [213.0, 12.200000000000003], [215.0, 11.722222222222223], [214.0, 11.846153846153845], [212.0, 12.68181818181818], [208.0, 8.54444444444444], [217.0, 13.183333333333332], [218.0, 11.0], [219.0, 8.056603773584907], [220.0, 7.666666666666667], [221.0, 14.138888888888888], [222.0, 14.534883720930234], [223.0, 15.723404255319151], [216.0, 12.632478632478634], [224.0, 38.29268292682927], [225.0, 71.75], [226.0, 22.585714285714293], [228.0, 125.7], [229.0, 79.0], [230.0, 84.38461538461539], [231.0, 32.0], [232.0, 20.0], [233.0, 115.71428571428572], [234.0, 147.6], [235.0, 8.75], [236.0, 59.16666666666667], [237.0, 53.00000000000001], [238.0, 43.45833333333333], [239.0, 68.62499999999999], [240.0, 67.3181818181818], [242.0, 94.71428571428571], [243.0, 90.22222222222223], [245.0, 256.75], [246.0, 12.579710144927539], [247.0, 54.75757575757577], [241.0, 12.0], [248.0, 42.33333333333333], [249.0, 66.15789473684211], [250.0, 59.90476190476191], [251.0, 84.66666666666666], [252.0, 30.950000000000003], [253.0, 134.64516129032256], [255.0, 43.54545454545454], [254.0, 7.0], [258.0, 73.71428571428571], [259.0, 51.6], [268.0, 31.109375000000004], [269.0, 28.846153846153854], [270.0, 27.478260869565226], [271.0, 67.35939849624067], [260.0, 9.8125], [261.0, 60.75], [262.0, 54.60526315789473], [263.0, 10.193548387096776], [257.0, 6.461538461538463], [256.0, 5.333333333333333], [264.0, 4.785714285714286], [265.0, 24.777777777777782], [266.0, 10.757575757575756], [267.0, 25.324324324324323], [275.0, 100.7692307692308], [279.0, 17.5], [286.0, 14.178571428571427], [287.0, 25.425287356321835], [281.0, 32.666666666666664], [280.0, 33.5], [283.0, 2.555555555555556], [282.0, 22.666666666666664], [276.0, 118.74999999999999], [278.0, 34.0], [277.0, 23.666666666666664], [274.0, 83.4375], [273.0, 120.39999999999999], [272.0, 49.837837837837846], [285.0, 18.48611111111111], [284.0, 2.5238095238095237], [290.0, 48.14285714285714], [298.0, 59.86868686868692], [297.0, 55.5], [299.0, 7.966292134831462], [294.0, 11.798245614035082], [292.0, 12.767441860465116], [293.0, 12.102409638554212], [289.0, 35.0], [295.0, 20.414634146341466], [288.0, 41.4873949579832], [300.0, 14.94931076647427], [291.0, 21.0], [296.0, 16.270588235294117], [1.0, 11.0]], "isOverall": false, "label": "user2role", "isController": false}, {"data": [[299.5575101252188, 14.948832849785802]], "isOverall": false, "label": "user2role-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 684691.65, "minX": 1.6266726E12, "maxY": 5223347.966666667, "series": [{"data": [[1.62667266E12, 2364889.183333333], [1.62667284E12, 2357794.7], [1.6266726E12, 684691.65], [1.6266729E12, 1477089.7166666666], [1.62667272E12, 2434403.5166666666], [1.62667278E12, 2428575.816666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62667266E12, 5063190.566666666], [1.62667284E12, 5058982.25], [1.6266726E12, 1461438.25], [1.6266729E12, 3169283.716666667], [1.62667272E12, 5223347.966666667], [1.62667278E12, 5210846.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6266729E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14.572396781790134, "minX": 1.6266726E12, "maxY": 17.001069644431393, "series": [{"data": [[1.62667266E12, 15.020725877870607], [1.62667284E12, 15.053233671653857], [1.6266726E12, 17.001069644431393], [1.6266729E12, 14.572396781790134], [1.62667272E12, 14.651876546434167], [1.62667278E12, 14.725552667200162]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6266729E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 14.57202222291871, "minX": 1.6266726E12, "maxY": 16.980725830149794, "series": [{"data": [[1.62667266E12, 15.020189929790646], [1.62667284E12, 15.052865913231145], [1.6266726E12, 16.980725830149794], [1.6266729E12, 14.57202222291871], [1.62667272E12, 14.651596390869244], [1.62667278E12, 14.725165804301987]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6266729E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.026682211994873556, "minX": 1.6266726E12, "maxY": 0.18350866882162786, "series": [{"data": [[1.62667266E12, 0.03570690275605106], [1.62667284E12, 0.03315628026434269], [1.6266726E12, 0.18350866882162786], [1.6266729E12, 0.026682211994873556], [1.62667272E12, 0.032169131319408774], [1.62667278E12, 0.027120166077672897]], "isOverall": false, "label": "user2role", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6266729E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6266726E12, "maxY": 971.0, "series": [{"data": [[1.62667266E12, 971.0], [1.62667284E12, 181.0], [1.6266726E12, 730.0], [1.6266729E12, 153.0], [1.62667272E12, 248.0], [1.62667278E12, 185.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62667266E12, 20.0], [1.62667284E12, 21.0], [1.6266726E12, 23.0], [1.6266729E12, 18.0], [1.62667272E12, 23.0], [1.62667278E12, 20.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62667266E12, 46.0], [1.62667284E12, 36.0], [1.6266726E12, 50.0], [1.6266729E12, 40.0], [1.62667272E12, 44.9900000000016], [1.62667278E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62667266E12, 25.0], [1.62667284E12, 25.0], [1.6266726E12, 27.0], [1.6266729E12, 21.0], [1.62667272E12, 29.0], [1.62667278E12, 23.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62667266E12, 1.0], [1.62667284E12, 1.0], [1.6266726E12, 1.0], [1.6266729E12, 1.0], [1.62667272E12, 1.0], [1.62667278E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62667266E12, 13.0], [1.62667284E12, 12.0], [1.6266726E12, 13.0], [1.6266729E12, 8.0], [1.62667272E12, 14.0], [1.62667278E12, 12.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6266729E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 1922.0, "maxY": 29.0, "series": [{"data": [[17315.0, 14.0], [17867.0, 15.0], [19275.0, 14.0], [19419.0, 14.0], [19339.0, 14.0], [19411.0, 14.0], [18971.0, 15.0], [18987.0, 14.0], [19259.0, 14.0], [18995.0, 13.0], [19067.0, 14.0], [18627.0, 15.0], [18915.0, 14.0], [19235.0, 14.0], [19635.0, 14.0], [20155.0, 14.0], [19475.0, 14.0], [19771.0, 14.0], [20323.0, 13.0], [20347.0, 13.0], [19955.0, 14.0], [20187.0, 13.0], [20139.0, 13.0], [20675.0, 13.0], [21139.0, 13.0], [21315.0, 13.0], [21411.0, 13.0], [20563.0, 13.0], [20707.0, 13.0], [20771.0, 13.0], [21523.0, 13.0], [21699.0, 13.0], [21611.0, 13.0], [21915.0, 12.0], [21787.0, 13.0], [9961.0, 14.0], [12221.0, 5.0], [14721.0, 13.0], [17970.0, 15.0], [18882.0, 14.0], [19098.0, 14.0], [19082.0, 14.0], [18578.0, 15.0], [18970.0, 14.0], [19386.0, 14.0], [19610.0, 14.0], [19714.0, 13.0], [20074.0, 14.0], [19930.0, 14.0], [19770.0, 14.0], [19954.0, 14.0], [19554.0, 14.0], [20266.0, 13.0], [19634.0, 14.0], [19626.0, 14.0], [19722.0, 14.0], [20402.0, 13.0], [20450.0, 13.0], [21394.0, 12.0], [21362.0, 12.0], [21210.0, 13.0], [20698.0, 13.0], [20890.0, 12.0], [20882.0, 13.0], [20858.0, 12.0], [21242.0, 13.0], [21442.0, 13.0], [21130.0, 13.0], [20986.0, 13.0], [21826.0, 12.0], [21610.0, 13.0], [22106.0, 12.0], [17833.0, 12.0], [18377.0, 15.0], [18225.0, 15.0], [17441.0, 15.0], [19449.0, 14.0], [18673.0, 14.0], [19081.0, 14.0], [19113.0, 14.0], [19121.0, 15.0], [19281.0, 14.0], [18577.0, 15.0], [18457.0, 15.0], [20241.0, 13.0], [19985.0, 13.0], [20185.0, 14.0], [19577.0, 13.0], [19697.0, 13.0], [20337.0, 13.0], [19937.0, 14.0], [19929.0, 13.0], [19761.0, 13.0], [19769.0, 14.0], [19465.0, 14.0], [20465.0, 13.0], [20385.0, 14.0], [20105.0, 14.0], [20097.0, 13.0], [20089.0, 14.0], [20057.0, 14.0], [20849.0, 13.0], [20617.0, 13.0], [20969.0, 12.0], [21313.0, 13.0], [21001.0, 12.0], [21033.0, 13.0], [1922.0, 23.0], [4922.0, 8.0], [5712.0, 13.0], [6764.0, 10.0], [16360.0, 12.0], [16672.0, 16.0], [17304.0, 16.0], [18296.0, 15.0], [18424.0, 15.0], [18024.0, 15.0], [17736.0, 15.0], [17688.0, 15.0], [18040.0, 15.0], [18864.0, 14.0], [18712.0, 15.0], [19408.0, 14.0], [19080.0, 14.0], [19184.0, 14.0], [18504.0, 15.0], [20048.0, 14.0], [20080.0, 14.0], [19672.0, 14.0], [19720.0, 13.0], [20344.0, 14.0], [20672.0, 13.0], [20904.0, 13.0], [20624.0, 13.0], [20640.0, 13.0], [20824.0, 13.0], [21088.0, 13.0], [21136.0, 13.0], [21104.0, 13.0], [21456.0, 13.0], [21264.0, 13.0], [20736.0, 13.0], [22128.0, 12.0], [21752.0, 12.0], [22016.0, 13.0], [16871.0, 15.0], [16647.0, 12.0], [17855.0, 15.0], [17607.0, 16.0], [19255.0, 14.0], [18831.0, 14.0], [18775.0, 14.0], [18607.0, 14.0], [18463.0, 15.0], [19103.0, 14.0], [20455.0, 14.0], [20311.0, 13.0], [20191.0, 13.0], [20223.0, 14.0], [20383.0, 13.0], [20055.0, 13.0], [20079.0, 13.0], [20135.0, 13.0], [20167.0, 13.0], [20095.0, 14.0], [20351.0, 13.0], [19503.0, 14.0], [19967.0, 13.0], [19623.0, 13.0], [20807.0, 12.0], [20607.0, 13.0], [20767.0, 13.0], [14983.0, 10.0], [16750.0, 14.0], [17070.0, 15.0], [17902.0, 15.0], [18078.0, 15.0], [18326.0, 15.0], [19398.0, 13.0], [19430.0, 14.0], [19454.0, 14.0], [19446.0, 14.0], [19222.0, 14.0], [19366.0, 13.0], [19350.0, 15.0], [18998.0, 14.0], [19046.0, 15.0], [19006.0, 14.0], [18590.0, 15.0], [20422.0, 13.0], [20174.0, 13.0], [19622.0, 14.0], [20222.0, 13.0], [19526.0, 14.0], [20294.0, 13.0], [20230.0, 13.0], [19886.0, 14.0], [19838.0, 14.0], [20118.0, 13.0], [21278.0, 13.0], [21198.0, 13.0], [20750.0, 13.0], [21222.0, 13.0], [20838.0, 13.0], [20790.0, 12.0], [20902.0, 13.0], [20662.0, 13.0], [20998.0, 13.0], [21190.0, 12.0], [16869.0, 13.0], [16989.0, 15.0], [17805.0, 15.0], [17997.0, 15.0], [19445.0, 14.0], [18957.0, 14.0], [19021.0, 14.0], [18501.0, 12.0], [18637.0, 14.0], [19605.0, 14.0], [20301.0, 13.0], [20293.0, 13.0], [19517.0, 14.0], [19965.0, 13.0], [19781.0, 13.0], [19733.0, 14.0], [19501.0, 14.0], [20349.0, 13.0], [20141.0, 13.0], [20061.0, 14.0], [20453.0, 13.0], [21253.0, 13.0], [20637.0, 13.0], [21173.0, 12.0], [20621.0, 13.0], [20717.0, 13.0], [20517.0, 13.0], [20509.0, 13.0], [21157.0, 13.0], [20997.0, 13.0], [21405.0, 13.0], [21877.0, 12.0], [21517.0, 13.0], [21933.0, 13.0], [21533.0, 12.0], [6289.0, 17.0], [7377.0, 13.0], [7575.0, 29.0], [8766.0, 11.0], [17604.0, 15.0], [18156.0, 14.0], [17564.0, 15.0], [18348.0, 14.0], [17884.0, 15.0], [18276.0, 15.0], [19348.0, 14.0], [19388.0, 14.0], [19380.0, 14.0], [18996.0, 14.0], [18788.0, 11.0], [18900.0, 15.0], [18556.0, 15.0], [18732.0, 13.0], [19004.0, 14.0], [19148.0, 14.0], [19532.0, 14.0], [19732.0, 13.0], [19724.0, 14.0], [20356.0, 14.0], [19660.0, 14.0], [19588.0, 14.0], [20172.0, 13.0], [19516.0, 14.0], [19956.0, 14.0], [19596.0, 14.0], [21284.0, 12.0], [21356.0, 12.0], [20892.0, 12.0], [21380.0, 13.0], [21116.0, 12.0], [21404.0, 13.0], [20660.0, 14.0], [20700.0, 13.0], [20644.0, 13.0], [20612.0, 13.0], [20492.0, 13.0], [20748.0, 13.0], [22068.0, 13.0], [21564.0, 13.0], [21828.0, 12.0], [21596.0, 13.0], [22212.0, 12.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22212.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 1922.0, "maxY": 29.0, "series": [{"data": [[17315.0, 14.0], [17867.0, 15.0], [19275.0, 14.0], [19419.0, 14.0], [19339.0, 14.0], [19411.0, 14.0], [18971.0, 15.0], [18987.0, 14.0], [19259.0, 14.0], [18995.0, 13.0], [19067.0, 14.0], [18627.0, 15.0], [18915.0, 14.0], [19235.0, 14.0], [19635.0, 14.0], [20155.0, 14.0], [19475.0, 14.0], [19771.0, 14.0], [20323.0, 13.0], [20347.0, 13.0], [19955.0, 14.0], [20187.0, 13.0], [20139.0, 13.0], [20675.0, 13.0], [21139.0, 13.0], [21315.0, 13.0], [21411.0, 13.0], [20563.0, 13.0], [20707.0, 13.0], [20771.0, 13.0], [21523.0, 13.0], [21699.0, 13.0], [21611.0, 13.0], [21915.0, 12.0], [21787.0, 13.0], [9961.0, 14.0], [12221.0, 5.0], [14721.0, 13.0], [17970.0, 15.0], [18882.0, 14.0], [19098.0, 14.0], [19082.0, 14.0], [18578.0, 15.0], [18970.0, 14.0], [19386.0, 14.0], [19610.0, 14.0], [19714.0, 13.0], [20074.0, 14.0], [19930.0, 14.0], [19770.0, 14.0], [19954.0, 14.0], [19554.0, 14.0], [20266.0, 13.0], [19634.0, 14.0], [19626.0, 14.0], [19722.0, 14.0], [20402.0, 13.0], [20450.0, 13.0], [21394.0, 12.0], [21362.0, 12.0], [21210.0, 13.0], [20698.0, 13.0], [20890.0, 12.0], [20882.0, 13.0], [20858.0, 12.0], [21242.0, 13.0], [21442.0, 13.0], [21130.0, 13.0], [20986.0, 13.0], [21826.0, 12.0], [21610.0, 13.0], [22106.0, 12.0], [17833.0, 12.0], [18377.0, 15.0], [18225.0, 15.0], [17441.0, 15.0], [19449.0, 14.0], [18673.0, 14.0], [19081.0, 14.0], [19113.0, 14.0], [19121.0, 15.0], [19281.0, 14.0], [18577.0, 15.0], [18457.0, 15.0], [20241.0, 13.0], [19985.0, 13.0], [20185.0, 14.0], [19577.0, 13.0], [19697.0, 13.0], [20337.0, 13.0], [19937.0, 14.0], [19929.0, 13.0], [19761.0, 13.0], [19769.0, 14.0], [19465.0, 14.0], [20465.0, 13.0], [20385.0, 13.5], [20105.0, 14.0], [20097.0, 13.0], [20089.0, 14.0], [20057.0, 14.0], [20849.0, 13.0], [20617.0, 13.0], [20969.0, 12.0], [21313.0, 13.0], [21001.0, 12.0], [21033.0, 13.0], [1922.0, 23.0], [4922.0, 8.0], [5712.0, 13.0], [6764.0, 10.0], [16360.0, 12.0], [16672.0, 16.0], [17304.0, 16.0], [18296.0, 15.0], [18424.0, 15.0], [18024.0, 15.0], [17736.0, 15.0], [17688.0, 15.0], [18040.0, 15.0], [18864.0, 14.0], [18712.0, 15.0], [19408.0, 14.0], [19080.0, 14.0], [19184.0, 14.0], [18504.0, 15.0], [20048.0, 14.0], [20080.0, 14.0], [19672.0, 14.0], [19720.0, 13.0], [20344.0, 14.0], [20672.0, 13.0], [20904.0, 13.0], [20624.0, 13.0], [20640.0, 13.0], [20824.0, 13.0], [21088.0, 13.0], [21136.0, 13.0], [21104.0, 13.0], [21456.0, 13.0], [21264.0, 13.0], [20736.0, 13.0], [22128.0, 12.0], [21752.0, 12.0], [22016.0, 13.0], [16871.0, 15.0], [16647.0, 12.0], [17855.0, 15.0], [17607.0, 16.0], [19255.0, 14.0], [18831.0, 14.0], [18775.0, 14.0], [18607.0, 14.0], [18463.0, 15.0], [19103.0, 14.0], [20455.0, 14.0], [20311.0, 13.0], [20191.0, 13.0], [20223.0, 14.0], [20383.0, 13.0], [20055.0, 13.0], [20079.0, 13.0], [20135.0, 13.0], [20167.0, 13.0], [20095.0, 14.0], [20351.0, 13.0], [19503.0, 14.0], [19967.0, 13.0], [19623.0, 13.0], [20807.0, 12.0], [20607.0, 13.0], [20767.0, 13.0], [14983.0, 10.0], [16750.0, 14.0], [17070.0, 15.0], [17902.0, 15.0], [18078.0, 15.0], [18326.0, 15.0], [19398.0, 13.0], [19430.0, 14.0], [19454.0, 14.0], [19446.0, 14.0], [19222.0, 14.0], [19366.0, 13.0], [19350.0, 15.0], [18998.0, 14.0], [19046.0, 15.0], [19006.0, 14.0], [18590.0, 15.0], [20422.0, 13.0], [20174.0, 13.0], [19622.0, 14.0], [20222.0, 13.0], [19526.0, 14.0], [20294.0, 13.0], [20230.0, 13.0], [19886.0, 14.0], [19838.0, 14.0], [20118.0, 13.0], [21278.0, 13.0], [21198.0, 13.0], [20750.0, 13.0], [21222.0, 13.0], [20838.0, 13.0], [20790.0, 12.0], [20902.0, 13.0], [20662.0, 13.0], [20998.0, 13.0], [21190.0, 12.0], [16869.0, 13.0], [16989.0, 15.0], [17805.0, 15.0], [17997.0, 15.0], [19445.0, 14.0], [18957.0, 14.0], [19021.0, 14.0], [18501.0, 12.0], [18637.0, 14.0], [19605.0, 14.0], [20301.0, 13.0], [20293.0, 13.0], [19517.0, 14.0], [19965.0, 13.0], [19781.0, 13.0], [19733.0, 14.0], [19501.0, 14.0], [20349.0, 13.0], [20141.0, 13.0], [20061.0, 14.0], [20453.0, 13.0], [21253.0, 13.0], [20637.0, 13.0], [21173.0, 12.0], [20621.0, 13.0], [20717.0, 13.0], [20517.0, 13.0], [20509.0, 13.0], [21157.0, 13.0], [20997.0, 13.0], [21405.0, 13.0], [21877.0, 12.0], [21517.0, 13.0], [21933.0, 13.0], [21533.0, 12.0], [6289.0, 17.0], [7377.0, 13.0], [7575.0, 29.0], [8766.0, 11.0], [17604.0, 15.0], [18156.0, 14.0], [17564.0, 15.0], [18348.0, 14.0], [17884.0, 15.0], [18276.0, 15.0], [19348.0, 14.0], [19388.0, 14.0], [19380.0, 14.0], [18996.0, 14.0], [18788.0, 11.0], [18900.0, 15.0], [18556.0, 15.0], [18732.0, 13.0], [19004.0, 14.0], [19148.0, 14.0], [19532.0, 14.0], [19732.0, 13.0], [19724.0, 14.0], [20356.0, 14.0], [19660.0, 14.0], [19588.0, 14.0], [20172.0, 13.0], [19516.0, 14.0], [19956.0, 14.0], [19596.0, 14.0], [21284.0, 12.0], [21356.0, 12.0], [20892.0, 12.0], [21380.0, 13.0], [21116.0, 12.0], [21404.0, 13.0], [20660.0, 14.0], [20700.0, 13.0], [20644.0, 13.0], [20612.0, 13.0], [20492.0, 13.0], [20748.0, 13.0], [22068.0, 13.0], [21564.0, 13.0], [21828.0, 12.0], [21596.0, 13.0], [22212.0, 12.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22212.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5676.183333333333, "minX": 1.6266726E12, "maxY": 20167.4, "series": [{"data": [[1.62667266E12, 19591.9], [1.62667284E12, 19532.866666666665], [1.6266726E12, 5676.183333333333], [1.6266729E12, 12231.65], [1.62667272E12, 20167.4], [1.62667278E12, 20118.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6266729E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5671.666666666667, "minX": 1.6266726E12, "maxY": 20167.366666666665, "series": [{"data": [[1.62667266E12, 19591.45], [1.62667284E12, 19532.75], [1.6266726E12, 5671.666666666667], [1.6266729E12, 12236.616666666667], [1.62667272E12, 20167.366666666665], [1.62667278E12, 20119.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6266729E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5671.666666666667, "minX": 1.6266726E12, "maxY": 20167.366666666665, "series": [{"data": [[1.62667266E12, 19591.45], [1.62667284E12, 19532.75], [1.6266726E12, 5671.666666666667], [1.6266729E12, 12236.616666666667], [1.62667272E12, 20167.366666666665], [1.62667278E12, 20119.1]], "isOverall": false, "label": "user2role-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6266729E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5671.666666666667, "minX": 1.6266726E12, "maxY": 20167.366666666665, "series": [{"data": [[1.62667266E12, 19591.45], [1.62667284E12, 19532.75], [1.6266726E12, 5671.666666666667], [1.6266729E12, 12236.616666666667], [1.62667272E12, 20167.366666666665], [1.62667278E12, 20119.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6266729E12, "title": "Total Transactions Per Second"}},
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

