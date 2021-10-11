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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 7961.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 10.0], [10.4, 10.0], [10.5, 10.0], [10.6, 10.0], [10.7, 10.0], [10.8, 10.0], [10.9, 10.0], [11.0, 10.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 13.0], [23.6, 13.0], [23.7, 13.0], [23.8, 13.0], [23.9, 13.0], [24.0, 13.0], [24.1, 13.0], [24.2, 13.0], [24.3, 13.0], [24.4, 13.0], [24.5, 13.0], [24.6, 13.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 14.0], [27.3, 14.0], [27.4, 14.0], [27.5, 14.0], [27.6, 14.0], [27.7, 14.0], [27.8, 14.0], [27.9, 14.0], [28.0, 14.0], [28.1, 14.0], [28.2, 14.0], [28.3, 14.0], [28.4, 15.0], [28.5, 15.0], [28.6, 15.0], [28.7, 15.0], [28.8, 15.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 16.0], [32.3, 16.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 16.0], [32.8, 16.0], [32.9, 16.0], [33.0, 16.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 16.0], [34.3, 16.0], [34.4, 16.0], [34.5, 16.0], [34.6, 16.0], [34.7, 16.0], [34.8, 16.0], [34.9, 16.0], [35.0, 16.0], [35.1, 16.0], [35.2, 16.0], [35.3, 16.0], [35.4, 16.0], [35.5, 16.0], [35.6, 16.0], [35.7, 16.0], [35.8, 16.0], [35.9, 16.0], [36.0, 16.0], [36.1, 16.0], [36.2, 17.0], [36.3, 17.0], [36.4, 17.0], [36.5, 17.0], [36.6, 17.0], [36.7, 17.0], [36.8, 17.0], [36.9, 17.0], [37.0, 17.0], [37.1, 17.0], [37.2, 17.0], [37.3, 17.0], [37.4, 17.0], [37.5, 17.0], [37.6, 17.0], [37.7, 17.0], [37.8, 17.0], [37.9, 17.0], [38.0, 17.0], [38.1, 17.0], [38.2, 17.0], [38.3, 17.0], [38.4, 17.0], [38.5, 17.0], [38.6, 17.0], [38.7, 17.0], [38.8, 17.0], [38.9, 17.0], [39.0, 17.0], [39.1, 17.0], [39.2, 17.0], [39.3, 17.0], [39.4, 17.0], [39.5, 17.0], [39.6, 17.0], [39.7, 17.0], [39.8, 17.0], [39.9, 17.0], [40.0, 17.0], [40.1, 17.0], [40.2, 17.0], [40.3, 18.0], [40.4, 18.0], [40.5, 18.0], [40.6, 18.0], [40.7, 18.0], [40.8, 18.0], [40.9, 18.0], [41.0, 18.0], [41.1, 18.0], [41.2, 18.0], [41.3, 18.0], [41.4, 18.0], [41.5, 18.0], [41.6, 18.0], [41.7, 18.0], [41.8, 18.0], [41.9, 18.0], [42.0, 18.0], [42.1, 18.0], [42.2, 18.0], [42.3, 18.0], [42.4, 18.0], [42.5, 18.0], [42.6, 18.0], [42.7, 18.0], [42.8, 18.0], [42.9, 18.0], [43.0, 18.0], [43.1, 18.0], [43.2, 18.0], [43.3, 18.0], [43.4, 18.0], [43.5, 18.0], [43.6, 18.0], [43.7, 18.0], [43.8, 18.0], [43.9, 18.0], [44.0, 18.0], [44.1, 18.0], [44.2, 18.0], [44.3, 18.0], [44.4, 19.0], [44.5, 19.0], [44.6, 19.0], [44.7, 19.0], [44.8, 19.0], [44.9, 19.0], [45.0, 19.0], [45.1, 19.0], [45.2, 19.0], [45.3, 19.0], [45.4, 19.0], [45.5, 19.0], [45.6, 19.0], [45.7, 19.0], [45.8, 19.0], [45.9, 19.0], [46.0, 19.0], [46.1, 19.0], [46.2, 19.0], [46.3, 19.0], [46.4, 19.0], [46.5, 19.0], [46.6, 19.0], [46.7, 19.0], [46.8, 19.0], [46.9, 19.0], [47.0, 19.0], [47.1, 19.0], [47.2, 19.0], [47.3, 19.0], [47.4, 19.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 19.0], [47.9, 19.0], [48.0, 19.0], [48.1, 19.0], [48.2, 19.0], [48.3, 19.0], [48.4, 19.0], [48.5, 19.0], [48.6, 20.0], [48.7, 20.0], [48.8, 20.0], [48.9, 20.0], [49.0, 20.0], [49.1, 20.0], [49.2, 20.0], [49.3, 20.0], [49.4, 20.0], [49.5, 20.0], [49.6, 20.0], [49.7, 20.0], [49.8, 20.0], [49.9, 20.0], [50.0, 20.0], [50.1, 20.0], [50.2, 20.0], [50.3, 20.0], [50.4, 20.0], [50.5, 20.0], [50.6, 20.0], [50.7, 20.0], [50.8, 20.0], [50.9, 20.0], [51.0, 20.0], [51.1, 20.0], [51.2, 20.0], [51.3, 20.0], [51.4, 20.0], [51.5, 20.0], [51.6, 20.0], [51.7, 20.0], [51.8, 20.0], [51.9, 20.0], [52.0, 20.0], [52.1, 20.0], [52.2, 20.0], [52.3, 20.0], [52.4, 20.0], [52.5, 20.0], [52.6, 20.0], [52.7, 20.0], [52.8, 21.0], [52.9, 21.0], [53.0, 21.0], [53.1, 21.0], [53.2, 21.0], [53.3, 21.0], [53.4, 21.0], [53.5, 21.0], [53.6, 21.0], [53.7, 21.0], [53.8, 21.0], [53.9, 21.0], [54.0, 21.0], [54.1, 21.0], [54.2, 21.0], [54.3, 21.0], [54.4, 21.0], [54.5, 21.0], [54.6, 21.0], [54.7, 21.0], [54.8, 21.0], [54.9, 21.0], [55.0, 21.0], [55.1, 21.0], [55.2, 21.0], [55.3, 21.0], [55.4, 21.0], [55.5, 21.0], [55.6, 21.0], [55.7, 21.0], [55.8, 21.0], [55.9, 21.0], [56.0, 21.0], [56.1, 21.0], [56.2, 21.0], [56.3, 21.0], [56.4, 21.0], [56.5, 21.0], [56.6, 21.0], [56.7, 21.0], [56.8, 21.0], [56.9, 21.0], [57.0, 21.0], [57.1, 22.0], [57.2, 22.0], [57.3, 22.0], [57.4, 22.0], [57.5, 22.0], [57.6, 22.0], [57.7, 22.0], [57.8, 22.0], [57.9, 22.0], [58.0, 22.0], [58.1, 22.0], [58.2, 22.0], [58.3, 22.0], [58.4, 22.0], [58.5, 22.0], [58.6, 22.0], [58.7, 22.0], [58.8, 22.0], [58.9, 22.0], [59.0, 22.0], [59.1, 22.0], [59.2, 22.0], [59.3, 22.0], [59.4, 22.0], [59.5, 22.0], [59.6, 22.0], [59.7, 22.0], [59.8, 22.0], [59.9, 22.0], [60.0, 22.0], [60.1, 22.0], [60.2, 22.0], [60.3, 22.0], [60.4, 22.0], [60.5, 22.0], [60.6, 22.0], [60.7, 22.0], [60.8, 22.0], [60.9, 22.0], [61.0, 22.0], [61.1, 22.0], [61.2, 22.0], [61.3, 23.0], [61.4, 23.0], [61.5, 23.0], [61.6, 23.0], [61.7, 23.0], [61.8, 23.0], [61.9, 23.0], [62.0, 23.0], [62.1, 23.0], [62.2, 23.0], [62.3, 23.0], [62.4, 23.0], [62.5, 23.0], [62.6, 23.0], [62.7, 23.0], [62.8, 23.0], [62.9, 23.0], [63.0, 23.0], [63.1, 23.0], [63.2, 23.0], [63.3, 23.0], [63.4, 23.0], [63.5, 23.0], [63.6, 23.0], [63.7, 23.0], [63.8, 23.0], [63.9, 23.0], [64.0, 23.0], [64.1, 23.0], [64.2, 23.0], [64.3, 23.0], [64.4, 23.0], [64.5, 23.0], [64.6, 23.0], [64.7, 23.0], [64.8, 23.0], [64.9, 23.0], [65.0, 23.0], [65.1, 23.0], [65.2, 24.0], [65.3, 24.0], [65.4, 24.0], [65.5, 24.0], [65.6, 24.0], [65.7, 24.0], [65.8, 24.0], [65.9, 24.0], [66.0, 24.0], [66.1, 24.0], [66.2, 24.0], [66.3, 24.0], [66.4, 24.0], [66.5, 24.0], [66.6, 24.0], [66.7, 24.0], [66.8, 24.0], [66.9, 24.0], [67.0, 24.0], [67.1, 24.0], [67.2, 24.0], [67.3, 24.0], [67.4, 24.0], [67.5, 24.0], [67.6, 24.0], [67.7, 24.0], [67.8, 24.0], [67.9, 24.0], [68.0, 24.0], [68.1, 24.0], [68.2, 24.0], [68.3, 24.0], [68.4, 24.0], [68.5, 24.0], [68.6, 24.0], [68.7, 24.0], [68.8, 24.0], [68.9, 24.0], [69.0, 25.0], [69.1, 25.0], [69.2, 25.0], [69.3, 25.0], [69.4, 25.0], [69.5, 25.0], [69.6, 25.0], [69.7, 25.0], [69.8, 25.0], [69.9, 25.0], [70.0, 25.0], [70.1, 25.0], [70.2, 25.0], [70.3, 25.0], [70.4, 25.0], [70.5, 25.0], [70.6, 25.0], [70.7, 25.0], [70.8, 25.0], [70.9, 25.0], [71.0, 25.0], [71.1, 25.0], [71.2, 25.0], [71.3, 25.0], [71.4, 25.0], [71.5, 25.0], [71.6, 25.0], [71.7, 25.0], [71.8, 25.0], [71.9, 25.0], [72.0, 25.0], [72.1, 25.0], [72.2, 25.0], [72.3, 25.0], [72.4, 25.0], [72.5, 25.0], [72.6, 26.0], [72.7, 26.0], [72.8, 26.0], [72.9, 26.0], [73.0, 26.0], [73.1, 26.0], [73.2, 26.0], [73.3, 26.0], [73.4, 26.0], [73.5, 26.0], [73.6, 26.0], [73.7, 26.0], [73.8, 26.0], [73.9, 26.0], [74.0, 26.0], [74.1, 26.0], [74.2, 26.0], [74.3, 26.0], [74.4, 26.0], [74.5, 26.0], [74.6, 26.0], [74.7, 26.0], [74.8, 26.0], [74.9, 26.0], [75.0, 26.0], [75.1, 26.0], [75.2, 26.0], [75.3, 26.0], [75.4, 26.0], [75.5, 26.0], [75.6, 26.0], [75.7, 26.0], [75.8, 26.0], [75.9, 27.0], [76.0, 27.0], [76.1, 27.0], [76.2, 27.0], [76.3, 27.0], [76.4, 27.0], [76.5, 27.0], [76.6, 27.0], [76.7, 27.0], [76.8, 27.0], [76.9, 27.0], [77.0, 27.0], [77.1, 27.0], [77.2, 27.0], [77.3, 27.0], [77.4, 27.0], [77.5, 27.0], [77.6, 27.0], [77.7, 27.0], [77.8, 27.0], [77.9, 27.0], [78.0, 27.0], [78.1, 27.0], [78.2, 27.0], [78.3, 27.0], [78.4, 27.0], [78.5, 27.0], [78.6, 27.0], [78.7, 27.0], [78.8, 28.0], [78.9, 28.0], [79.0, 28.0], [79.1, 28.0], [79.2, 28.0], [79.3, 28.0], [79.4, 28.0], [79.5, 28.0], [79.6, 28.0], [79.7, 28.0], [79.8, 28.0], [79.9, 28.0], [80.0, 28.0], [80.1, 28.0], [80.2, 28.0], [80.3, 28.0], [80.4, 28.0], [80.5, 28.0], [80.6, 28.0], [80.7, 28.0], [80.8, 28.0], [80.9, 28.0], [81.0, 28.0], [81.1, 28.0], [81.2, 28.0], [81.3, 28.0], [81.4, 28.0], [81.5, 29.0], [81.6, 29.0], [81.7, 29.0], [81.8, 29.0], [81.9, 29.0], [82.0, 29.0], [82.1, 29.0], [82.2, 29.0], [82.3, 29.0], [82.4, 29.0], [82.5, 29.0], [82.6, 29.0], [82.7, 29.0], [82.8, 29.0], [82.9, 29.0], [83.0, 29.0], [83.1, 29.0], [83.2, 29.0], [83.3, 29.0], [83.4, 29.0], [83.5, 29.0], [83.6, 29.0], [83.7, 30.0], [83.8, 30.0], [83.9, 30.0], [84.0, 30.0], [84.1, 30.0], [84.2, 30.0], [84.3, 30.0], [84.4, 30.0], [84.5, 30.0], [84.6, 30.0], [84.7, 30.0], [84.8, 30.0], [84.9, 30.0], [85.0, 30.0], [85.1, 30.0], [85.2, 30.0], [85.3, 30.0], [85.4, 30.0], [85.5, 30.0], [85.6, 30.0], [85.7, 31.0], [85.8, 31.0], [85.9, 31.0], [86.0, 31.0], [86.1, 31.0], [86.2, 31.0], [86.3, 31.0], [86.4, 31.0], [86.5, 31.0], [86.6, 31.0], [86.7, 31.0], [86.8, 31.0], [86.9, 31.0], [87.0, 31.0], [87.1, 31.0], [87.2, 31.0], [87.3, 32.0], [87.4, 32.0], [87.5, 32.0], [87.6, 32.0], [87.7, 32.0], [87.8, 32.0], [87.9, 32.0], [88.0, 32.0], [88.1, 32.0], [88.2, 32.0], [88.3, 32.0], [88.4, 32.0], [88.5, 32.0], [88.6, 32.0], [88.7, 33.0], [88.8, 33.0], [88.9, 33.0], [89.0, 33.0], [89.1, 33.0], [89.2, 33.0], [89.3, 33.0], [89.4, 33.0], [89.5, 33.0], [89.6, 33.0], [89.7, 33.0], [89.8, 34.0], [89.9, 34.0], [90.0, 34.0], [90.1, 34.0], [90.2, 34.0], [90.3, 34.0], [90.4, 34.0], [90.5, 34.0], [90.6, 35.0], [90.7, 35.0], [90.8, 35.0], [90.9, 35.0], [91.0, 35.0], [91.1, 35.0], [91.2, 35.0], [91.3, 36.0], [91.4, 36.0], [91.5, 36.0], [91.6, 36.0], [91.7, 36.0], [91.8, 36.0], [91.9, 37.0], [92.0, 37.0], [92.1, 37.0], [92.2, 37.0], [92.3, 38.0], [92.4, 38.0], [92.5, 38.0], [92.6, 39.0], [92.7, 39.0], [92.8, 39.0], [92.9, 40.0], [93.0, 40.0], [93.1, 41.0], [93.2, 41.0], [93.3, 42.0], [93.4, 42.0], [93.5, 43.0], [93.6, 44.0], [93.7, 45.0], [93.8, 46.0], [93.9, 47.0], [94.0, 49.0], [94.1, 50.0], [94.2, 52.0], [94.3, 53.0], [94.4, 55.0], [94.5, 56.0], [94.6, 57.0], [94.7, 59.0], [94.8, 60.0], [94.9, 62.0], [95.0, 63.0], [95.1, 64.0], [95.2, 65.0], [95.3, 67.0], [95.4, 68.0], [95.5, 69.0], [95.6, 70.0], [95.7, 72.0], [95.8, 73.0], [95.9, 74.0], [96.0, 75.0], [96.1, 76.0], [96.2, 77.0], [96.3, 78.0], [96.4, 80.0], [96.5, 81.0], [96.6, 82.0], [96.7, 84.0], [96.8, 85.0], [96.9, 86.0], [97.0, 87.0], [97.1, 89.0], [97.2, 90.0], [97.3, 91.0], [97.4, 92.0], [97.5, 94.0], [97.6, 95.0], [97.7, 96.0], [97.8, 97.0], [97.9, 99.0], [98.0, 100.0], [98.1, 101.0], [98.2, 103.0], [98.3, 104.0], [98.4, 106.0], [98.5, 107.0], [98.6, 109.0], [98.7, 110.0], [98.8, 112.0], [98.9, 114.0], [99.0, 116.0], [99.1, 118.0], [99.2, 121.0], [99.3, 124.0], [99.4, 127.0], [99.5, 131.0], [99.6, 135.0], [99.7, 140.0], [99.8, 149.0], [99.9, 167.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 872040.0, "series": [{"data": [[0.0, 872040.0], [600.0, 20.0], [700.0, 19.0], [800.0, 17.0], [900.0, 7.0], [1000.0, 3.0], [1100.0, 4.0], [100.0, 17530.0], [200.0, 78.0], [4300.0, 1.0], [4500.0, 1.0], [4600.0, 2.0], [4800.0, 3.0], [4700.0, 2.0], [300.0, 74.0], [5100.0, 5.0], [5000.0, 3.0], [4900.0, 2.0], [5200.0, 6.0], [5300.0, 7.0], [5400.0, 8.0], [5500.0, 7.0], [5600.0, 4.0], [5700.0, 8.0], [5800.0, 9.0], [5900.0, 2.0], [6000.0, 5.0], [6100.0, 1.0], [6200.0, 3.0], [6300.0, 4.0], [400.0, 46.0], [6400.0, 11.0], [6500.0, 6.0], [6600.0, 7.0], [6700.0, 12.0], [6800.0, 10.0], [6900.0, 16.0], [7000.0, 12.0], [7100.0, 24.0], [7200.0, 18.0], [7400.0, 31.0], [7300.0, 26.0], [7500.0, 10.0], [7600.0, 11.0], [7700.0, 14.0], [7800.0, 5.0], [7900.0, 4.0], [500.0, 34.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 104.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 889768.0, "series": [{"data": [[0.0, 889768.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 104.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 300.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 297.1657474600869, "minX": 1.6335717E12, "maxY": 300.0, "series": [{"data": [[1.633572E12, 300.0], [1.6335717E12, 300.0], [1.63357242E12, 300.0], [1.63357206E12, 300.0], [1.63357176E12, 300.0], [1.63357236E12, 300.0], [1.63357212E12, 300.0], [1.63357182E12, 300.0], [1.63357218E12, 300.0], [1.6335726E12, 297.1657474600869], [1.63357188E12, 300.0], [1.63357224E12, 300.0], [1.63357254E12, 300.0], [1.63357194E12, 300.0], [1.6335723E12, 300.0], [1.63357248E12, 300.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6335726E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5.6, "minX": 110.0, "maxY": 32.2608695652174, "series": [{"data": [[267.0, 5.6], [287.0, 13.846153846153845], [279.0, 32.2608695652174], [300.0, 26.11762412371491], [296.0, 13.302325581395351], [153.0, 9.200000000000001], [186.0, 10.549999999999999], [214.0, 12.0], [110.0, 5.8], [243.0, 9.583333333333332]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[299.98903133327076, 26.115014851062117]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9588.583333333334, "minX": 1.6335717E12, "maxY": 7973172.2, "series": [{"data": [[1.633572E12, 7945081.066666666], [1.6335717E12, 6630148.133333334], [1.63357242E12, 7949873.866666666], [1.63357206E12, 7972772.8], [1.63357176E12, 7940421.4], [1.63357236E12, 7971840.866666666], [1.63357212E12, 7969977.0], [1.63357182E12, 7969843.866666666], [1.63357218E12, 7970775.8], [1.6335726E12, 458644.3333333333], [1.63357188E12, 7969843.866666666], [1.63357224E12, 7964252.266666667], [1.63357254E12, 7913661.6], [1.63357194E12, 7973172.2], [1.6335723E12, 7955332.333333333], [1.63357248E12, 7955199.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.633572E12, 166103.76666666666], [1.6335717E12, 137597.66666666666], [1.63357242E12, 166203.96666666667], [1.63357206E12, 166682.7], [1.63357176E12, 165169.71666666667], [1.63357236E12, 166663.21666666667], [1.63357212E12, 166624.25], [1.63357182E12, 166621.46666666667], [1.63357218E12, 166640.95], [1.6335726E12, 9588.583333333334], [1.63357188E12, 166621.46666666667], [1.63357224E12, 166504.56666666668], [1.63357254E12, 165446.9], [1.63357194E12, 166691.05], [1.6335723E12, 166318.08333333334], [1.63357248E12, 166315.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6335726E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 22.461343218782563, "minX": 1.6335717E12, "maxY": 68.46270155217779, "series": [{"data": [[1.633572E12, 23.84087938603806], [1.6335717E12, 68.46270155217779], [1.63357242E12, 22.86304719161332], [1.63357206E12, 22.461343218782563], [1.63357176E12, 23.44389115235646], [1.63357236E12, 22.876851650829433], [1.63357212E12, 24.21655391297093], [1.63357182E12, 22.99508886810103], [1.63357218E12, 24.138380852165312], [1.6335726E12, 26.240638606676352], [1.63357188E12, 23.098139115327985], [1.63357224E12, 23.54413092173457], [1.63357254E12, 24.201574644190938], [1.63357194E12, 23.371537344086658], [1.6335723E12, 23.78470420885267], [1.63357248E12, 25.49553167988757]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6335726E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 22.34363624219359, "minX": 1.6335717E12, "maxY": 66.27927150057282, "series": [{"data": [[1.633572E12, 23.72842588558575], [1.6335717E12, 66.27927150057282], [1.63357242E12, 22.752570586462006], [1.63357206E12, 22.34363624219359], [1.63357176E12, 23.326693828278362], [1.63357236E12, 22.768917316588357], [1.63357212E12, 24.10261421531779], [1.63357182E12, 22.874281705198314], [1.63357218E12, 24.020560872542653], [1.6335726E12, 26.12626995645863], [1.63357188E12, 22.9810236536146], [1.63357224E12, 23.436845976396764], [1.63357254E12, 24.096127317384738], [1.63357194E12, 23.262118252099835], [1.6335723E12, 23.672780520458414], [1.63357248E12, 25.386702145463072]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6335726E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6335717E12, "maxY": 35.287644826408524, "series": [{"data": [[1.633572E12, 0.0992157914139212], [1.6335717E12, 35.287644826408524], [1.63357242E12, 0.0914693371738617], [1.63357206E12, 0.09356109942223492], [1.63357176E12, 0.10675184011535292], [1.63357236E12, 0.0931044272616441], [1.63357212E12, 0.0927085943372584], [1.63357182E12, 0.09805559267673444], [1.63357218E12, 0.09296654473785303], [1.6335726E12, 0.0], [1.63357188E12, 0.0988908191901651], [1.63357224E12, 0.09451372404800862], [1.63357254E12, 0.09150095891793664], [1.63357194E12, 0.09677904122626846], [1.6335723E12, 0.09159066186929908], [1.63357248E12, 0.09252937041871659]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6335726E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6335717E12, "maxY": 7961.0, "series": [{"data": [[1.633572E12, 189.0], [1.6335717E12, 7961.0], [1.63357242E12, 141.0], [1.63357206E12, 170.0], [1.63357176E12, 151.0], [1.63357236E12, 133.0], [1.63357212E12, 182.0], [1.63357182E12, 164.0], [1.63357218E12, 171.0], [1.6335726E12, 104.0], [1.63357188E12, 136.0], [1.63357224E12, 192.0], [1.63357254E12, 157.0], [1.63357194E12, 165.0], [1.6335723E12, 165.0], [1.63357248E12, 192.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.633572E12, 108.0], [1.6335717E12, 119.0], [1.63357242E12, 98.0], [1.63357206E12, 121.0], [1.63357176E12, 113.0], [1.63357236E12, 95.9900000000016], [1.63357212E12, 116.0], [1.63357182E12, 108.0], [1.63357218E12, 124.9900000000016], [1.6335726E12, 97.0], [1.63357188E12, 107.0], [1.63357224E12, 157.9900000000016], [1.63357254E12, 128.9900000000016], [1.63357194E12, 105.0], [1.6335723E12, 125.0], [1.63357248E12, 122.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.633572E12, 133.99894546508585], [1.6335717E12, 145.99947273254293], [1.63357242E12, 134.0], [1.63357206E12, 168.99894546508585], [1.63357176E12, 138.99736366271463], [1.63357236E12, 115.99841819762878], [1.63357212E12, 160.0], [1.63357182E12, 162.99947273254293], [1.63357218E12, 152.0], [1.6335726E12, 104.0], [1.63357188E12, 134.0], [1.63357224E12, 185.99841819762878], [1.63357254E12, 156.0], [1.63357194E12, 134.0], [1.6335723E12, 142.0], [1.63357248E12, 149.0]], "isOverall": false, "label": "99.99th percentile", "isController": false}, {"data": [[1.633572E12, 123.99930519103873], [1.6335717E12, 142.0], [1.63357242E12, 131.0], [1.63357206E12, 159.99930519103873], [1.63357176E12, 132.0], [1.63357236E12, 112.0], [1.63357212E12, 152.0], [1.63357182E12, 146.0], [1.63357218E12, 145.99930519103873], [1.6335726E12, 104.0], [1.63357188E12, 126.99930519103873], [1.63357224E12, 178.0], [1.63357254E12, 151.0], [1.63357194E12, 129.0], [1.6335723E12, 138.0], [1.63357248E12, 146.99930519103873]], "isOverall": false, "label": "99.9th percentile", "isController": false}, {"data": [[1.633572E12, 4.0], [1.6335717E12, 4.0], [1.63357242E12, 4.0], [1.63357206E12, 4.0], [1.63357176E12, 4.0], [1.63357236E12, 4.0], [1.63357212E12, 4.0], [1.63357182E12, 4.0], [1.63357218E12, 4.0], [1.6335726E12, 4.0], [1.63357188E12, 4.0], [1.63357224E12, 4.0], [1.63357254E12, 4.0], [1.63357194E12, 4.0], [1.6335723E12, 4.0], [1.63357248E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.633572E12, 20.0], [1.6335717E12, 21.0], [1.63357242E12, 20.0], [1.63357206E12, 19.0], [1.63357176E12, 20.0], [1.63357236E12, 20.0], [1.63357212E12, 20.0], [1.63357182E12, 19.0], [1.63357218E12, 20.0], [1.6335726E12, 21.0], [1.63357188E12, 19.0], [1.63357224E12, 19.0], [1.63357254E12, 20.0], [1.63357194E12, 19.0], [1.6335723E12, 19.0], [1.63357248E12, 20.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6335726E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.0, "minX": 68.0, "maxY": 715.0, "series": [{"data": [[68.0, 104.0], [197.0, 294.0], [309.0, 715.0], [434.0, 16.0], [652.0, 19.0], [699.0, 20.0], [692.0, 19.0], [702.0, 19.0], [729.0, 20.0], [709.0, 21.0], [707.0, 22.0], [704.0, 17.0], [731.0, 17.0], [719.0, 19.0], [718.0, 17.0], [724.0, 17.0], [738.0, 20.0], [736.0, 19.0], [750.0, 22.0], [747.0, 23.0], [751.0, 20.0], [754.0, 19.0], [762.0, 20.0], [740.0, 20.0], [739.0, 19.0], [761.0, 18.0], [777.0, 28.0], [771.0, 24.0], [773.0, 20.0], [791.0, 21.0], [792.0, 20.0], [807.0, 20.0], [845.0, 23.0], [889.0, 22.0], [880.0, 25.0], [927.0, 25.0], [896.0, 27.0], [913.0, 22.0], [923.0, 24.0], [905.0, 21.0], [921.0, 23.0], [925.0, 26.0], [899.0, 34.0], [954.0, 29.0], [940.0, 22.0], [939.0, 23.0], [945.0, 22.0], [946.0, 29.0], [957.0, 24.0], [953.0, 19.0], [956.0, 17.0], [959.0, 22.0], [958.0, 28.0], [931.0, 31.0], [984.0, 21.0], [989.0, 19.0], [991.0, 20.0], [977.0, 20.0], [976.0, 18.0], [990.0, 21.0], [988.0, 21.0], [987.0, 19.0], [975.0, 20.0], [962.0, 19.0], [961.0, 20.0], [974.0, 23.0], [963.0, 18.0], [965.0, 22.0], [966.0, 22.0], [967.0, 19.0], [973.0, 19.0], [971.0, 20.0], [968.0, 22.0], [969.0, 22.0], [972.0, 19.0], [985.0, 19.0], [978.0, 20.0], [983.0, 20.0], [986.0, 20.0], [980.0, 20.0], [981.0, 19.0], [979.0, 21.0], [982.0, 21.0], [995.0, 19.0], [1005.0, 20.0], [1009.0, 19.0], [996.0, 20.0], [1001.0, 20.0], [1002.0, 20.0], [1000.0, 21.0], [1011.0, 19.0], [1010.0, 19.0], [1012.0, 20.0], [1013.0, 19.0], [1015.0, 18.0], [1014.0, 21.0], [992.0, 19.0], [1006.0, 19.0], [1007.0, 19.0], [993.0, 20.0], [994.0, 19.0], [998.0, 19.0], [1008.0, 19.0], [1023.0, 19.0], [1019.0, 24.0], [1018.0, 29.0], [1020.0, 20.0], [1022.0, 29.0], [999.0, 20.0], [1004.0, 19.0], [1003.0, 19.0], [997.0, 20.0], [1057.0, 20.0], [1037.0, 19.0], [1036.0, 26.0], [1034.0, 21.0], [1047.0, 20.0], [1032.0, 28.0], [1044.0, 30.0], [1099.0, 21.0], [1128.0, 21.0], [1098.0, 20.0], [1141.0, 23.0], [1190.0, 22.0], [1161.0, 21.0], [1215.0, 25.0], [1229.0, 22.0], [1222.0, 27.0], [1217.0, 21.0], [1240.0, 22.0], [1237.0, 22.0], [1234.0, 27.0], [1257.0, 26.0], [1254.0, 23.0], [1228.0, 23.0], [1274.0, 23.0], [1226.0, 22.0], [1227.0, 22.0], [1270.0, 24.0], [1269.0, 24.0], [1266.0, 23.0], [1261.0, 23.0], [1342.0, 54.0], [1280.0, 24.0], [1285.0, 25.0], [1288.0, 25.0], [1339.0, 26.0], [1287.0, 26.0], [1284.0, 26.0], [1291.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1342.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.0, "minX": 68.0, "maxY": 444.0, "series": [{"data": [[68.0, 67.5], [197.0, 148.0], [309.0, 444.0], [434.0, 16.0], [652.0, 19.0], [699.0, 20.0], [692.0, 19.0], [702.0, 19.0], [729.0, 20.0], [709.0, 20.0], [707.0, 22.0], [704.0, 17.0], [731.0, 17.0], [719.0, 18.0], [718.0, 16.0], [724.0, 17.0], [738.0, 20.0], [736.0, 19.0], [750.0, 22.0], [747.0, 23.0], [751.0, 20.0], [754.0, 19.0], [762.0, 20.0], [740.0, 20.0], [739.0, 19.0], [761.0, 18.0], [777.0, 27.0], [771.0, 24.0], [773.0, 20.0], [791.0, 21.0], [792.0, 20.0], [807.0, 20.0], [845.0, 22.0], [889.0, 22.0], [880.0, 25.0], [927.0, 25.0], [896.0, 27.0], [913.0, 22.0], [923.0, 24.0], [905.0, 21.0], [921.0, 23.0], [925.0, 26.0], [899.0, 34.0], [954.0, 29.0], [940.0, 22.0], [939.0, 23.0], [945.0, 22.0], [946.0, 29.0], [957.0, 24.0], [953.0, 19.0], [956.0, 17.0], [959.0, 22.0], [958.0, 28.0], [931.0, 31.0], [984.0, 20.0], [989.0, 19.0], [991.0, 20.0], [977.0, 20.0], [976.0, 18.0], [990.0, 21.0], [988.0, 21.0], [987.0, 19.0], [975.0, 19.0], [962.0, 19.0], [961.0, 20.0], [974.0, 23.0], [963.0, 18.0], [965.0, 22.0], [966.0, 21.0], [967.0, 19.0], [973.0, 19.0], [971.0, 20.0], [968.0, 22.0], [969.0, 22.0], [972.0, 19.0], [985.0, 19.0], [978.0, 20.0], [983.0, 20.0], [986.0, 20.0], [980.0, 20.0], [981.0, 19.0], [979.0, 21.0], [982.0, 20.0], [995.0, 19.0], [1005.0, 20.0], [1009.0, 19.0], [996.0, 20.0], [1001.0, 20.0], [1002.0, 20.0], [1000.0, 21.0], [1011.0, 19.0], [1010.0, 19.0], [1012.0, 19.0], [1013.0, 19.0], [1015.0, 18.0], [1014.0, 21.0], [992.0, 19.0], [1006.0, 19.0], [1007.0, 19.0], [993.0, 20.0], [994.0, 19.0], [998.0, 19.0], [1008.0, 19.0], [1023.0, 19.0], [1019.0, 24.0], [1018.0, 29.0], [1020.0, 20.0], [1022.0, 29.0], [999.0, 20.0], [1004.0, 19.0], [1003.0, 19.0], [997.0, 20.0], [1057.0, 20.0], [1037.0, 19.0], [1036.0, 26.0], [1034.0, 21.0], [1047.0, 20.0], [1032.0, 28.0], [1044.0, 30.0], [1099.0, 21.0], [1128.0, 21.0], [1098.0, 20.0], [1141.0, 23.0], [1190.0, 22.0], [1161.0, 21.0], [1215.0, 25.0], [1229.0, 22.0], [1222.0, 27.0], [1217.0, 21.0], [1240.0, 22.0], [1237.0, 22.0], [1234.0, 27.0], [1257.0, 25.0], [1254.0, 23.0], [1228.0, 22.5], [1274.0, 23.0], [1226.0, 22.0], [1227.0, 22.0], [1270.0, 24.0], [1269.0, 23.0], [1266.0, 23.0], [1261.0, 22.0], [1342.0, 51.0], [1280.0, 23.0], [1285.0, 25.0], [1288.0, 25.0], [1339.0, 26.0], [1287.0, 26.0], [1284.0, 26.0], [1291.0, 26.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1342.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 56.95, "minX": 1.6335717E12, "maxY": 998.3, "series": [{"data": [[1.633572E12, 994.4166666666666], [1.6335717E12, 830.4166666666666], [1.63357242E12, 994.75], [1.63357206E12, 997.95], [1.63357176E12, 994.45], [1.63357236E12, 997.95], [1.63357212E12, 998.1166666666667], [1.63357182E12, 997.7333333333333], [1.63357218E12, 997.05], [1.6335726E12, 56.95], [1.63357188E12, 997.5833333333334], [1.63357224E12, 997.5333333333333], [1.63357254E12, 990.35], [1.63357194E12, 998.3], [1.6335723E12, 996.1833333333333], [1.63357248E12, 996.4666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6335726E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 57.416666666666664, "minX": 1.6335717E12, "maxY": 998.15, "series": [{"data": [[1.633572E12, 994.6333333333333], [1.6335717E12, 830.0166666666667], [1.63357242E12, 995.2333333333333], [1.63357206E12, 998.1], [1.63357176E12, 994.05], [1.63357236E12, 997.9833333333333], [1.63357212E12, 997.75], [1.63357182E12, 997.7333333333333], [1.63357218E12, 997.85], [1.6335726E12, 57.416666666666664], [1.63357188E12, 997.7333333333333], [1.63357224E12, 997.0333333333333], [1.63357254E12, 990.7], [1.63357194E12, 998.15], [1.6335723E12, 995.9166666666666], [1.63357248E12, 995.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6335726E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 57.416666666666664, "minX": 1.6335717E12, "maxY": 998.15, "series": [{"data": [[1.633572E12, 994.6333333333333], [1.6335717E12, 830.0166666666667], [1.63357242E12, 995.2333333333333], [1.63357206E12, 998.1], [1.63357176E12, 994.05], [1.63357236E12, 997.9833333333333], [1.63357212E12, 997.75], [1.63357182E12, 997.7333333333333], [1.63357218E12, 997.85], [1.6335726E12, 57.416666666666664], [1.63357188E12, 997.7333333333333], [1.63357224E12, 997.0333333333333], [1.63357254E12, 990.7], [1.63357194E12, 998.15], [1.6335723E12, 995.9166666666666], [1.63357248E12, 995.9]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6335726E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 57.416666666666664, "minX": 1.6335717E12, "maxY": 998.15, "series": [{"data": [[1.633572E12, 994.6333333333333], [1.6335717E12, 830.0166666666667], [1.63357242E12, 995.2333333333333], [1.63357206E12, 998.1], [1.63357176E12, 994.05], [1.63357236E12, 997.9833333333333], [1.63357212E12, 997.75], [1.63357182E12, 997.7333333333333], [1.63357218E12, 997.85], [1.6335726E12, 57.416666666666664], [1.63357188E12, 997.7333333333333], [1.63357224E12, 997.0333333333333], [1.63357254E12, 990.7], [1.63357194E12, 998.15], [1.6335723E12, 995.9166666666666], [1.63357248E12, 995.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6335726E12, "title": "Total Transactions Per Second"}},
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

