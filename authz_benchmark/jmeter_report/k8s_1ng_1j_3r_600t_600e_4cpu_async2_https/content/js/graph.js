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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 13053.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 9.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 11.0], [11.0, 11.0], [11.1, 11.0], [11.2, 11.0], [11.3, 11.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 11.0], [12.8, 11.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 12.0], [16.8, 12.0], [16.9, 12.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 14.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 15.0], [26.0, 15.0], [26.1, 15.0], [26.2, 15.0], [26.3, 15.0], [26.4, 15.0], [26.5, 15.0], [26.6, 15.0], [26.7, 15.0], [26.8, 15.0], [26.9, 15.0], [27.0, 15.0], [27.1, 15.0], [27.2, 15.0], [27.3, 15.0], [27.4, 15.0], [27.5, 15.0], [27.6, 15.0], [27.7, 15.0], [27.8, 16.0], [27.9, 16.0], [28.0, 16.0], [28.1, 16.0], [28.2, 16.0], [28.3, 16.0], [28.4, 16.0], [28.5, 16.0], [28.6, 16.0], [28.7, 16.0], [28.8, 16.0], [28.9, 16.0], [29.0, 16.0], [29.1, 16.0], [29.2, 16.0], [29.3, 16.0], [29.4, 16.0], [29.5, 16.0], [29.6, 16.0], [29.7, 16.0], [29.8, 16.0], [29.9, 16.0], [30.0, 16.0], [30.1, 16.0], [30.2, 16.0], [30.3, 16.0], [30.4, 16.0], [30.5, 16.0], [30.6, 16.0], [30.7, 16.0], [30.8, 16.0], [30.9, 16.0], [31.0, 16.0], [31.1, 16.0], [31.2, 16.0], [31.3, 16.0], [31.4, 16.0], [31.5, 16.0], [31.6, 17.0], [31.7, 17.0], [31.8, 17.0], [31.9, 17.0], [32.0, 17.0], [32.1, 17.0], [32.2, 17.0], [32.3, 17.0], [32.4, 17.0], [32.5, 17.0], [32.6, 17.0], [32.7, 17.0], [32.8, 17.0], [32.9, 17.0], [33.0, 17.0], [33.1, 17.0], [33.2, 17.0], [33.3, 17.0], [33.4, 17.0], [33.5, 17.0], [33.6, 17.0], [33.7, 17.0], [33.8, 17.0], [33.9, 17.0], [34.0, 17.0], [34.1, 17.0], [34.2, 17.0], [34.3, 17.0], [34.4, 17.0], [34.5, 17.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 17.0], [35.2, 17.0], [35.3, 17.0], [35.4, 18.0], [35.5, 18.0], [35.6, 18.0], [35.7, 18.0], [35.8, 18.0], [35.9, 18.0], [36.0, 18.0], [36.1, 18.0], [36.2, 18.0], [36.3, 18.0], [36.4, 18.0], [36.5, 18.0], [36.6, 18.0], [36.7, 18.0], [36.8, 18.0], [36.9, 18.0], [37.0, 18.0], [37.1, 18.0], [37.2, 18.0], [37.3, 18.0], [37.4, 18.0], [37.5, 18.0], [37.6, 18.0], [37.7, 18.0], [37.8, 18.0], [37.9, 18.0], [38.0, 18.0], [38.1, 18.0], [38.2, 18.0], [38.3, 18.0], [38.4, 18.0], [38.5, 18.0], [38.6, 18.0], [38.7, 18.0], [38.8, 18.0], [38.9, 18.0], [39.0, 18.0], [39.1, 18.0], [39.2, 18.0], [39.3, 18.0], [39.4, 19.0], [39.5, 19.0], [39.6, 19.0], [39.7, 19.0], [39.8, 19.0], [39.9, 19.0], [40.0, 19.0], [40.1, 19.0], [40.2, 19.0], [40.3, 19.0], [40.4, 19.0], [40.5, 19.0], [40.6, 19.0], [40.7, 19.0], [40.8, 19.0], [40.9, 19.0], [41.0, 19.0], [41.1, 19.0], [41.2, 19.0], [41.3, 19.0], [41.4, 19.0], [41.5, 19.0], [41.6, 19.0], [41.7, 19.0], [41.8, 19.0], [41.9, 19.0], [42.0, 19.0], [42.1, 19.0], [42.2, 19.0], [42.3, 19.0], [42.4, 19.0], [42.5, 19.0], [42.6, 19.0], [42.7, 19.0], [42.8, 19.0], [42.9, 19.0], [43.0, 19.0], [43.1, 19.0], [43.2, 19.0], [43.3, 20.0], [43.4, 20.0], [43.5, 20.0], [43.6, 20.0], [43.7, 20.0], [43.8, 20.0], [43.9, 20.0], [44.0, 20.0], [44.1, 20.0], [44.2, 20.0], [44.3, 20.0], [44.4, 20.0], [44.5, 20.0], [44.6, 20.0], [44.7, 20.0], [44.8, 20.0], [44.9, 20.0], [45.0, 20.0], [45.1, 20.0], [45.2, 20.0], [45.3, 20.0], [45.4, 20.0], [45.5, 20.0], [45.6, 20.0], [45.7, 20.0], [45.8, 20.0], [45.9, 20.0], [46.0, 20.0], [46.1, 20.0], [46.2, 20.0], [46.3, 20.0], [46.4, 20.0], [46.5, 20.0], [46.6, 20.0], [46.7, 20.0], [46.8, 20.0], [46.9, 20.0], [47.0, 20.0], [47.1, 20.0], [47.2, 20.0], [47.3, 20.0], [47.4, 21.0], [47.5, 21.0], [47.6, 21.0], [47.7, 21.0], [47.8, 21.0], [47.9, 21.0], [48.0, 21.0], [48.1, 21.0], [48.2, 21.0], [48.3, 21.0], [48.4, 21.0], [48.5, 21.0], [48.6, 21.0], [48.7, 21.0], [48.8, 21.0], [48.9, 21.0], [49.0, 21.0], [49.1, 21.0], [49.2, 21.0], [49.3, 21.0], [49.4, 21.0], [49.5, 21.0], [49.6, 21.0], [49.7, 21.0], [49.8, 21.0], [49.9, 21.0], [50.0, 21.0], [50.1, 21.0], [50.2, 21.0], [50.3, 21.0], [50.4, 21.0], [50.5, 21.0], [50.6, 21.0], [50.7, 21.0], [50.8, 21.0], [50.9, 21.0], [51.0, 21.0], [51.1, 21.0], [51.2, 21.0], [51.3, 22.0], [51.4, 22.0], [51.5, 22.0], [51.6, 22.0], [51.7, 22.0], [51.8, 22.0], [51.9, 22.0], [52.0, 22.0], [52.1, 22.0], [52.2, 22.0], [52.3, 22.0], [52.4, 22.0], [52.5, 22.0], [52.6, 22.0], [52.7, 22.0], [52.8, 22.0], [52.9, 22.0], [53.0, 22.0], [53.1, 22.0], [53.2, 22.0], [53.3, 22.0], [53.4, 22.0], [53.5, 22.0], [53.6, 22.0], [53.7, 22.0], [53.8, 22.0], [53.9, 22.0], [54.0, 22.0], [54.1, 22.0], [54.2, 22.0], [54.3, 22.0], [54.4, 22.0], [54.5, 22.0], [54.6, 22.0], [54.7, 22.0], [54.8, 22.0], [54.9, 22.0], [55.0, 22.0], [55.1, 22.0], [55.2, 23.0], [55.3, 23.0], [55.4, 23.0], [55.5, 23.0], [55.6, 23.0], [55.7, 23.0], [55.8, 23.0], [55.9, 23.0], [56.0, 23.0], [56.1, 23.0], [56.2, 23.0], [56.3, 23.0], [56.4, 23.0], [56.5, 23.0], [56.6, 23.0], [56.7, 23.0], [56.8, 23.0], [56.9, 23.0], [57.0, 23.0], [57.1, 23.0], [57.2, 23.0], [57.3, 23.0], [57.4, 23.0], [57.5, 23.0], [57.6, 23.0], [57.7, 23.0], [57.8, 23.0], [57.9, 23.0], [58.0, 23.0], [58.1, 23.0], [58.2, 23.0], [58.3, 23.0], [58.4, 23.0], [58.5, 23.0], [58.6, 23.0], [58.7, 23.0], [58.8, 23.0], [58.9, 24.0], [59.0, 24.0], [59.1, 24.0], [59.2, 24.0], [59.3, 24.0], [59.4, 24.0], [59.5, 24.0], [59.6, 24.0], [59.7, 24.0], [59.8, 24.0], [59.9, 24.0], [60.0, 24.0], [60.1, 24.0], [60.2, 24.0], [60.3, 24.0], [60.4, 24.0], [60.5, 24.0], [60.6, 24.0], [60.7, 24.0], [60.8, 24.0], [60.9, 24.0], [61.0, 24.0], [61.1, 24.0], [61.2, 24.0], [61.3, 24.0], [61.4, 24.0], [61.5, 24.0], [61.6, 24.0], [61.7, 24.0], [61.8, 24.0], [61.9, 24.0], [62.0, 24.0], [62.1, 24.0], [62.2, 24.0], [62.3, 24.0], [62.4, 25.0], [62.5, 25.0], [62.6, 25.0], [62.7, 25.0], [62.8, 25.0], [62.9, 25.0], [63.0, 25.0], [63.1, 25.0], [63.2, 25.0], [63.3, 25.0], [63.4, 25.0], [63.5, 25.0], [63.6, 25.0], [63.7, 25.0], [63.8, 25.0], [63.9, 25.0], [64.0, 25.0], [64.1, 25.0], [64.2, 25.0], [64.3, 25.0], [64.4, 25.0], [64.5, 25.0], [64.6, 25.0], [64.7, 25.0], [64.8, 25.0], [64.9, 25.0], [65.0, 25.0], [65.1, 25.0], [65.2, 25.0], [65.3, 25.0], [65.4, 25.0], [65.5, 25.0], [65.6, 26.0], [65.7, 26.0], [65.8, 26.0], [65.9, 26.0], [66.0, 26.0], [66.1, 26.0], [66.2, 26.0], [66.3, 26.0], [66.4, 26.0], [66.5, 26.0], [66.6, 26.0], [66.7, 26.0], [66.8, 26.0], [66.9, 26.0], [67.0, 26.0], [67.1, 26.0], [67.2, 26.0], [67.3, 26.0], [67.4, 26.0], [67.5, 26.0], [67.6, 26.0], [67.7, 26.0], [67.8, 26.0], [67.9, 26.0], [68.0, 26.0], [68.1, 26.0], [68.2, 26.0], [68.3, 26.0], [68.4, 27.0], [68.5, 27.0], [68.6, 27.0], [68.7, 27.0], [68.8, 27.0], [68.9, 27.0], [69.0, 27.0], [69.1, 27.0], [69.2, 27.0], [69.3, 27.0], [69.4, 27.0], [69.5, 27.0], [69.6, 27.0], [69.7, 27.0], [69.8, 27.0], [69.9, 27.0], [70.0, 27.0], [70.1, 27.0], [70.2, 27.0], [70.3, 27.0], [70.4, 27.0], [70.5, 27.0], [70.6, 27.0], [70.7, 27.0], [70.8, 27.0], [70.9, 27.0], [71.0, 28.0], [71.1, 28.0], [71.2, 28.0], [71.3, 28.0], [71.4, 28.0], [71.5, 28.0], [71.6, 28.0], [71.7, 28.0], [71.8, 28.0], [71.9, 28.0], [72.0, 28.0], [72.1, 28.0], [72.2, 28.0], [72.3, 28.0], [72.4, 28.0], [72.5, 28.0], [72.6, 28.0], [72.7, 28.0], [72.8, 28.0], [72.9, 28.0], [73.0, 28.0], [73.1, 29.0], [73.2, 29.0], [73.3, 29.0], [73.4, 29.0], [73.5, 29.0], [73.6, 29.0], [73.7, 29.0], [73.8, 29.0], [73.9, 29.0], [74.0, 29.0], [74.1, 29.0], [74.2, 29.0], [74.3, 29.0], [74.4, 29.0], [74.5, 29.0], [74.6, 29.0], [74.7, 29.0], [74.8, 29.0], [74.9, 29.0], [75.0, 30.0], [75.1, 30.0], [75.2, 30.0], [75.3, 30.0], [75.4, 30.0], [75.5, 30.0], [75.6, 30.0], [75.7, 30.0], [75.8, 30.0], [75.9, 30.0], [76.0, 30.0], [76.1, 30.0], [76.2, 30.0], [76.3, 30.0], [76.4, 30.0], [76.5, 30.0], [76.6, 30.0], [76.7, 30.0], [76.8, 31.0], [76.9, 31.0], [77.0, 31.0], [77.1, 31.0], [77.2, 31.0], [77.3, 31.0], [77.4, 31.0], [77.5, 31.0], [77.6, 31.0], [77.7, 31.0], [77.8, 31.0], [77.9, 31.0], [78.0, 31.0], [78.1, 31.0], [78.2, 32.0], [78.3, 32.0], [78.4, 32.0], [78.5, 32.0], [78.6, 32.0], [78.7, 32.0], [78.8, 32.0], [78.9, 32.0], [79.0, 32.0], [79.1, 32.0], [79.2, 32.0], [79.3, 32.0], [79.4, 32.0], [79.5, 33.0], [79.6, 33.0], [79.7, 33.0], [79.8, 33.0], [79.9, 33.0], [80.0, 33.0], [80.1, 33.0], [80.2, 33.0], [80.3, 33.0], [80.4, 33.0], [80.5, 34.0], [80.6, 34.0], [80.7, 34.0], [80.8, 34.0], [80.9, 34.0], [81.0, 34.0], [81.1, 34.0], [81.2, 34.0], [81.3, 34.0], [81.4, 35.0], [81.5, 35.0], [81.6, 35.0], [81.7, 35.0], [81.8, 35.0], [81.9, 35.0], [82.0, 35.0], [82.1, 36.0], [82.2, 36.0], [82.3, 36.0], [82.4, 36.0], [82.5, 36.0], [82.6, 37.0], [82.7, 37.0], [82.8, 37.0], [82.9, 37.0], [83.0, 37.0], [83.1, 38.0], [83.2, 38.0], [83.3, 38.0], [83.4, 38.0], [83.5, 39.0], [83.6, 39.0], [83.7, 39.0], [83.8, 40.0], [83.9, 40.0], [84.0, 40.0], [84.1, 41.0], [84.2, 41.0], [84.3, 42.0], [84.4, 42.0], [84.5, 43.0], [84.6, 44.0], [84.7, 45.0], [84.8, 46.0], [84.9, 47.0], [85.0, 48.0], [85.1, 50.0], [85.2, 51.0], [85.3, 53.0], [85.4, 54.0], [85.5, 56.0], [85.6, 57.0], [85.7, 59.0], [85.8, 60.0], [85.9, 62.0], [86.0, 63.0], [86.1, 65.0], [86.2, 66.0], [86.3, 68.0], [86.4, 70.0], [86.5, 71.0], [86.6, 73.0], [86.7, 75.0], [86.8, 76.0], [86.9, 78.0], [87.0, 79.0], [87.1, 81.0], [87.2, 83.0], [87.3, 85.0], [87.4, 86.0], [87.5, 88.0], [87.6, 90.0], [87.7, 92.0], [87.8, 93.0], [87.9, 95.0], [88.0, 96.0], [88.1, 98.0], [88.2, 99.0], [88.3, 101.0], [88.4, 102.0], [88.5, 104.0], [88.6, 105.0], [88.7, 107.0], [88.8, 108.0], [88.9, 110.0], [89.0, 111.0], [89.1, 112.0], [89.2, 114.0], [89.3, 115.0], [89.4, 116.0], [89.5, 117.0], [89.6, 118.0], [89.7, 120.0], [89.8, 121.0], [89.9, 122.0], [90.0, 123.0], [90.1, 124.0], [90.2, 125.0], [90.3, 126.0], [90.4, 127.0], [90.5, 128.0], [90.6, 129.0], [90.7, 130.0], [90.8, 131.0], [90.9, 132.0], [91.0, 134.0], [91.1, 135.0], [91.2, 136.0], [91.3, 137.0], [91.4, 138.0], [91.5, 139.0], [91.6, 140.0], [91.7, 141.0], [91.8, 142.0], [91.9, 143.0], [92.0, 144.0], [92.1, 145.0], [92.2, 146.0], [92.3, 147.0], [92.4, 148.0], [92.5, 149.0], [92.6, 151.0], [92.7, 152.0], [92.8, 152.0], [92.9, 154.0], [93.0, 154.0], [93.1, 156.0], [93.2, 156.0], [93.3, 157.0], [93.4, 158.0], [93.5, 159.0], [93.6, 161.0], [93.7, 162.0], [93.8, 163.0], [93.9, 164.0], [94.0, 165.0], [94.1, 166.0], [94.2, 167.0], [94.3, 168.0], [94.4, 169.0], [94.5, 170.0], [94.6, 171.0], [94.7, 172.0], [94.8, 173.0], [94.9, 174.0], [95.0, 175.0], [95.1, 176.0], [95.2, 177.0], [95.3, 178.0], [95.4, 179.0], [95.5, 180.0], [95.6, 181.0], [95.7, 183.0], [95.8, 184.0], [95.9, 185.0], [96.0, 187.0], [96.1, 188.0], [96.2, 189.0], [96.3, 191.0], [96.4, 192.0], [96.5, 194.0], [96.6, 195.0], [96.7, 197.0], [96.8, 198.0], [96.9, 200.0], [97.0, 201.0], [97.1, 203.0], [97.2, 205.0], [97.3, 207.0], [97.4, 209.0], [97.5, 211.0], [97.6, 212.0], [97.7, 214.0], [97.8, 216.0], [97.9, 218.0], [98.0, 220.0], [98.1, 222.0], [98.2, 224.0], [98.3, 226.0], [98.4, 229.0], [98.5, 232.0], [98.6, 234.0], [98.7, 237.0], [98.8, 240.0], [98.9, 244.0], [99.0, 249.0], [99.1, 253.0], [99.2, 260.0], [99.3, 269.0], [99.4, 280.0], [99.5, 300.0], [99.6, 335.0], [99.7, 373.0], [99.8, 421.0], [99.9, 530.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 789888.0, "series": [{"data": [[0.0, 789888.0], [600.0, 52.0], [900.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [3100.0, 1.0], [3200.0, 7.0], [3300.0, 4.0], [3400.0, 9.0], [3500.0, 6.0], [3600.0, 4.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4400.0, 3.0], [4600.0, 3.0], [4500.0, 1.0], [4800.0, 2.0], [4700.0, 2.0], [5100.0, 1.0], [5200.0, 1.0], [5400.0, 2.0], [5600.0, 4.0], [5500.0, 1.0], [5700.0, 6.0], [5800.0, 5.0], [6000.0, 7.0], [5900.0, 9.0], [6300.0, 1.0], [6600.0, 4.0], [6500.0, 1.0], [6400.0, 2.0], [6700.0, 1.0], [6900.0, 3.0], [6800.0, 2.0], [7000.0, 2.0], [7100.0, 1.0], [7400.0, 3.0], [7500.0, 2.0], [7900.0, 7.0], [7700.0, 2.0], [7800.0, 5.0], [8000.0, 9.0], [8100.0, 6.0], [8500.0, 1.0], [8200.0, 4.0], [9000.0, 3.0], [9200.0, 7.0], [8900.0, 4.0], [9100.0, 2.0], [9400.0, 9.0], [9500.0, 7.0], [9600.0, 10.0], [9300.0, 6.0], [9700.0, 14.0], [9800.0, 5.0], [10000.0, 15.0], [10100.0, 11.0], [10200.0, 12.0], [9900.0, 6.0], [10300.0, 23.0], [10400.0, 17.0], [10500.0, 12.0], [10600.0, 6.0], [10700.0, 5.0], [10800.0, 7.0], [11100.0, 11.0], [11000.0, 7.0], [11200.0, 16.0], [10900.0, 11.0], [11300.0, 11.0], [11400.0, 13.0], [11500.0, 10.0], [11600.0, 8.0], [11700.0, 8.0], [11800.0, 10.0], [12000.0, 8.0], [12100.0, 18.0], [11900.0, 7.0], [12200.0, 18.0], [12400.0, 16.0], [12300.0, 15.0], [12500.0, 24.0], [12600.0, 21.0], [12700.0, 19.0], [12800.0, 18.0], [12900.0, 6.0], [13000.0, 2.0], [100.0, 77433.0], [200.0, 23461.0], [300.0, 2278.0], [400.0, 1093.0], [500.0, 475.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 517.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 894165.0, "series": [{"data": [[0.0, 894165.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 517.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 600.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 519.6125563331201, "minX": 1.63356774E12, "maxY": 600.0, "series": [{"data": [[1.63356816E12, 600.0], [1.63356822E12, 600.0], [1.63356786E12, 600.0], [1.63356852E12, 600.0], [1.63356858E12, 600.0], [1.63356798E12, 600.0], [1.63356792E12, 600.0], [1.63356828E12, 600.0], [1.63356804E12, 600.0], [1.63356834E12, 600.0], [1.63356774E12, 599.9914598345362], [1.63356864E12, 519.6125563331201], [1.6335678E12, 600.0], [1.6335684E12, 600.0], [1.63356846E12, 600.0], [1.6335681E12, 600.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63356864E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 2.0, "maxY": 9422.666666666666, "series": [{"data": [[2.0, 5.0], [12.0, 6.454545454545456], [13.0, 8.0], [14.0, 8.833333333333334], [15.0, 9.0], [16.0, 8.333333333333334], [17.0, 8.222222222222221], [18.0, 9.777777777777779], [19.0, 8.357142857142856], [24.0, 12.32], [25.0, 12.428571428571429], [26.0, 10.27272727272727], [27.0, 13.817142857142855], [28.0, 14.1815775542615], [37.0, 10.178571428571429], [57.0, 15.142857142857142], [63.0, 16.953488372093027], [68.0, 14.945945945945946], [79.0, 20.77777777777777], [82.0, 18.30208333333334], [87.0, 19.94623655913979], [85.0, 27.304347826086957], [84.0, 21.978723404255327], [91.0, 18.15217391304348], [90.0, 18.654450261780102], [89.0, 15.936170212765957], [94.0, 17.434782608695652], [93.0, 20.971259509721047], [99.0, 19.115789473684217], [98.0, 19.778947368421058], [96.0, 15.847826086956525], [103.0, 18.085106382978722], [102.0, 20.78125], [101.0, 16.744680851063833], [100.0, 25.063829787234045], [107.0, 20.914893617021278], [106.0, 20.4468085106383], [105.0, 15.14736842105263], [104.0, 23.437499999999996], [110.0, 20.84444444444445], [109.0, 16.425531914893618], [108.0, 15.617021276595741], [115.0, 19.999999999999996], [113.0, 15.282608695652176], [119.0, 19.97872340425532], [116.0, 16.70967741935484], [123.0, 15.702127659574469], [120.0, 14.555555555555554], [127.0, 18.17391304347826], [124.0, 21.266666666666666], [134.0, 23.173913043478265], [132.0, 14.847826086956518], [129.0, 23.02150537634409], [142.0, 21.27956989247312], [140.0, 16.78260869565217], [139.0, 19.575794621026887], [138.0, 17.41958041958043], [137.0, 20.851063829787236], [136.0, 19.729166666666664], [151.0, 20.55319148936171], [150.0, 13.93617021276596], [149.0, 17.127659574468076], [148.0, 20.597077244258863], [147.0, 17.966666666666665], [145.0, 15.173913043478262], [155.0, 27.70212765957447], [154.0, 22.29787234042553], [153.0, 22.160839160839156], [152.0, 17.4468085106383], [162.0, 14.560975609756094], [160.0, 14.142857142857142], [175.0, 23.045454545454547], [169.0, 21.046511627906973], [179.0, 33.666666666666664], [183.0, 38.5], [176.0, 35.63043478260871], [191.0, 35.333333333333336], [190.0, 35.0], [189.0, 35.2], [184.0, 35.333333333333336], [206.0, 34.0], [202.0, 33.0], [204.0, 33.5], [213.0, 32.0], [210.0, 32.5], [216.0, 35.333333333333336], [218.0, 30.5], [219.0, 32.0], [231.0, 30.5], [230.0, 30.0], [227.0, 31.0], [225.0, 33.0], [234.0, 31.0], [245.0, 28.0], [249.0, 29.0], [265.0, 24.0], [256.0, 27.6], [267.0, 24.0], [260.0, 26.0], [258.0, 31.5], [271.0, 24.0], [270.0, 36.0], [285.0, 23.0], [287.0, 24.0], [286.0, 23.666666666666668], [281.0, 24.666666666666668], [276.0, 24.25], [280.0, 23.0], [278.0, 24.0], [284.0, 23.0], [274.0, 25.285714285714285], [272.0, 23.0], [273.0, 24.0], [275.0, 25.0], [288.0, 23.5], [289.0, 23.0], [302.0, 22.0], [316.0, 22.0], [304.0, 21.0], [319.0, 23.0], [305.0, 22.0], [314.0, 21.0], [307.0, 20.0], [313.0, 21.0], [306.0, 22.0], [310.0, 28.5], [330.0, 22.5], [326.0, 23.0], [323.0, 23.0], [322.0, 23.666666666666668], [321.0, 23.333333333333332], [320.0, 23.0], [351.0, 19.0], [350.0, 31.0], [345.0, 20.0], [344.0, 21.0], [367.0, 19.4], [365.0, 18.0], [363.0, 19.0], [381.0, 18.0], [379.0, 18.5], [376.0, 19.0], [373.0, 19.0], [371.0, 18.0], [398.0, 19.0], [395.0, 16.0], [389.0, 18.0], [388.0, 19.0], [384.0, 17.5], [413.0, 18.0], [411.0, 17.0], [408.0, 16.0], [407.0, 18.0], [406.0, 17.8], [403.0, 17.666666666666668], [401.0, 18.0], [426.0, 14.0], [425.0, 14.0], [420.0, 15.0], [419.0, 16.142857142857142], [417.0, 17.0], [416.0, 17.0], [473.0, 6.0], [470.0, 6.0], [466.0, 7.0], [510.0, 8.117647058823529], [525.0, 12.0], [571.0, 9072.0], [545.0, 10.870967741935484], [562.0, 43.43835616438355], [599.0, 9422.666666666666], [600.0, 46.845959254045], [585.0, 16.68421052631579], [586.0, 9.0], [593.0, 15.533333333333337], [588.0, 7.0], [596.0, 14.931818181818187]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[595.0986571828837, 46.600771600456724]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 600.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10285.8, "minX": 1.63356774E12, "maxY": 8049613.15, "series": [{"data": [[1.63356816E12, 8014463.7], [1.63356822E12, 7897040.683333334], [1.63356786E12, 7957617.933333334], [1.63356852E12, 7946834.883333334], [1.63356858E12, 7970529.95], [1.63356798E12, 7971200.116666666], [1.63356792E12, 7948828.633333334], [1.63356828E12, 8049613.15], [1.63356804E12, 7913283.616666666], [1.63356834E12, 7946298.35], [1.63356774E12, 498850.6], [1.63356864E12, 7267182.3], [1.6335678E12, 7969094.566666666], [1.6335684E12, 7956020.666666667], [1.63356846E12, 7960411.4], [1.6335681E12, 7924199.966666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63356816E12, 167553.88333333333], [1.63356822E12, 165098.98333333334], [1.63356786E12, 165758.83333333334], [1.63356852E12, 166139.95], [1.63356858E12, 166635.38333333333], [1.63356798E12, 166649.3], [1.63356792E12, 166181.7], [1.63356828E12, 168288.68333333332], [1.63356804E12, 165438.55], [1.63356834E12, 166128.81666666668], [1.63356774E12, 10285.8], [1.63356864E12, 151931.03333333333], [1.6335678E12, 165502.93333333332], [1.6335684E12, 166332.0], [1.63356846E12, 166423.85], [1.6335681E12, 165666.78333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63356864E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 32.282138489118545, "minX": 1.63356774E12, "maxY": 1879.5081398452085, "series": [{"data": [[1.63356816E12, 38.99774082625974], [1.63356822E12, 37.62552050845465], [1.63356786E12, 33.63101452184966], [1.63356852E12, 37.58650382804845], [1.63356858E12, 40.51006363894521], [1.63356798E12, 39.28548284731293], [1.63356792E12, 36.50040196965134], [1.63356828E12, 38.79144270049455], [1.63356804E12, 41.857871094735614], [1.63356834E12, 32.282138489118545], [1.63356774E12, 1879.5081398452085], [1.63356864E12, 32.60750009159795], [1.6335678E12, 45.82882822680388], [1.6335684E12, 36.87059906291829], [1.63356846E12, 35.449032495442324], [1.6335681E12, 55.1390601636395]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63356864E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 32.158912325967464, "minX": 1.63356774E12, "maxY": 1877.3218574859902, "series": [{"data": [[1.63356816E12, 38.86632668316767], [1.63356822E12, 37.50407134548306], [1.63356786E12, 33.514505119454036], [1.63356852E12, 37.45335142651338], [1.63356858E12, 40.3780587616297], [1.63356798E12, 39.15973544443321], [1.63356792E12, 36.38885539141849], [1.63356828E12, 38.66741643649837], [1.63356804E12, 41.72252224970158], [1.63356834E12, 32.158912325967464], [1.63356774E12, 1877.3218574859902], [1.63356864E12, 32.48955776206385], [1.6335678E12, 45.684753917605384], [1.6335684E12, 36.750870147255455], [1.63356846E12, 35.33366782064761], [1.6335681E12, 54.98708019018501]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63356864E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0922014282608328, "minX": 1.63356774E12, "maxY": 1495.94048572191, "series": [{"data": [[1.63356816E12, 0.09526736324523634], [1.63356822E12, 0.09875752313839258], [1.63356786E12, 0.1504717928126869], [1.63356852E12, 0.09485517079626776], [1.63356858E12, 0.0952579799228319], [1.63356798E12, 0.1307078197548195], [1.63356792E12, 0.12209828157974068], [1.63356828E12, 0.09716686237864443], [1.63356804E12, 0.10750517337101934], [1.63356834E12, 0.09357146447300026], [1.63356774E12, 1495.94048572191], [1.63356864E12, 0.09753416626973946], [1.6335678E12, 0.2791773864813408], [1.6335684E12, 0.09720548862115147], [1.63356846E12, 0.0922014282608328], [1.6335681E12, 0.1003847381596411]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63356864E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.63356774E12, "maxY": 13053.0, "series": [{"data": [[1.63356816E12, 282.0], [1.63356822E12, 244.0], [1.63356786E12, 273.0], [1.63356852E12, 277.0], [1.63356858E12, 306.0], [1.63356798E12, 304.0], [1.63356792E12, 290.0], [1.63356828E12, 263.0], [1.63356804E12, 304.0], [1.63356834E12, 404.0], [1.63356774E12, 13053.0], [1.63356864E12, 304.0], [1.6335678E12, 541.0], [1.6335684E12, 287.0], [1.63356846E12, 343.0], [1.6335681E12, 276.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63356816E12, 225.0], [1.63356822E12, 186.0], [1.63356786E12, 231.0], [1.63356852E12, 220.0], [1.63356858E12, 189.0], [1.63356798E12, 216.0], [1.63356792E12, 171.0], [1.63356828E12, 201.0], [1.63356804E12, 191.0], [1.63356834E12, 50.9900000000016], [1.63356774E12, 12744.56], [1.63356864E12, 51.0], [1.6335678E12, 205.0], [1.6335684E12, 231.0], [1.63356846E12, 215.0], [1.6335681E12, 212.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63356816E12, 280.99894546508585], [1.63356822E12, 228.99841819762878], [1.63356786E12, 262.0], [1.63356852E12, 242.99947273254293], [1.63356858E12, 228.99947273254293], [1.63356798E12, 241.0], [1.63356792E12, 219.99894546508585], [1.63356828E12, 231.0], [1.63356804E12, 224.0], [1.63356834E12, 93.0], [1.63356774E12, 13053.0], [1.63356864E12, 74.0], [1.6335678E12, 244.99894546508585], [1.6335684E12, 278.0], [1.63356846E12, 255.99894546508585], [1.6335681E12, 249.99894546508585]], "isOverall": false, "label": "99.99th percentile", "isController": false}, {"data": [[1.63356816E12, 267.0], [1.63356822E12, 213.99930519103873], [1.63356786E12, 253.0], [1.63356852E12, 235.0], [1.63356858E12, 222.0], [1.63356798E12, 232.0], [1.63356792E12, 210.99930519103873], [1.63356828E12, 225.0], [1.63356804E12, 220.0], [1.63356834E12, 88.0], [1.63356774E12, 12976.528800659178], [1.63356864E12, 70.0], [1.6335678E12, 237.0], [1.6335684E12, 268.0], [1.63356846E12, 249.99930519103873], [1.6335681E12, 236.0]], "isOverall": false, "label": "99.9th percentile", "isController": false}, {"data": [[1.63356816E12, 4.0], [1.63356822E12, 4.0], [1.63356786E12, 4.0], [1.63356852E12, 4.0], [1.63356858E12, 4.0], [1.63356798E12, 4.0], [1.63356792E12, 4.0], [1.63356828E12, 4.0], [1.63356804E12, 4.0], [1.63356834E12, 4.0], [1.63356774E12, 9.0], [1.63356864E12, 4.0], [1.6335678E12, 4.0], [1.6335684E12, 4.0], [1.63356846E12, 4.0], [1.6335681E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63356816E12, 19.0], [1.63356822E12, 20.0], [1.63356786E12, 21.0], [1.63356852E12, 19.0], [1.63356858E12, 21.0], [1.63356798E12, 22.0], [1.63356792E12, 20.0], [1.63356828E12, 21.0], [1.63356804E12, 22.0], [1.63356834E12, 20.0], [1.63356774E12, 409.0], [1.63356864E12, 18.0], [1.6335678E12, 21.0], [1.6335684E12, 22.0], [1.63356846E12, 21.0], [1.6335681E12, 27.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63356864E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 171.0, "maxY": 488.0, "series": [{"data": [[171.0, 81.0], [399.0, 13.0], [433.0, 18.0], [453.0, 21.0], [463.0, 22.0], [478.0, 19.0], [467.0, 19.0], [471.0, 20.0], [466.0, 25.0], [472.0, 20.0], [480.0, 20.0], [489.0, 20.0], [492.0, 20.0], [487.0, 21.0], [482.0, 19.0], [511.0, 19.0], [506.0, 21.0], [498.0, 20.0], [505.0, 20.0], [499.0, 31.0], [502.0, 20.0], [539.0, 18.0], [531.0, 19.0], [535.0, 19.0], [530.0, 18.0], [521.0, 19.0], [517.0, 18.0], [516.0, 20.0], [524.0, 20.0], [543.0, 26.0], [529.0, 20.0], [534.0, 100.0], [553.0, 22.0], [566.0, 20.0], [558.0, 22.0], [569.0, 42.0], [562.0, 25.0], [565.0, 20.0], [567.0, 20.0], [552.0, 20.0], [578.0, 188.0], [582.0, 19.0], [606.0, 20.0], [607.0, 18.0], [602.0, 19.0], [603.0, 74.0], [592.0, 36.0], [596.0, 18.0], [624.0, 39.0], [617.0, 20.0], [627.0, 21.0], [615.0, 20.0], [621.0, 22.0], [613.0, 21.0], [640.0, 20.0], [669.0, 67.0], [679.0, 278.0], [701.0, 107.0], [694.0, 101.0], [699.0, 106.0], [686.0, 169.0], [678.0, 200.0], [734.0, 26.0], [727.0, 38.0], [724.0, 18.0], [725.0, 19.0], [722.0, 71.5], [711.0, 78.0], [728.0, 18.0], [732.0, 20.0], [754.0, 26.0], [761.0, 194.0], [757.0, 104.0], [750.0, 105.5], [745.0, 19.0], [763.0, 18.0], [767.0, 20.0], [758.0, 20.0], [759.0, 19.0], [748.0, 19.0], [756.0, 17.0], [768.0, 44.0], [789.0, 19.0], [782.0, 18.0], [772.0, 189.5], [771.0, 19.0], [791.0, 19.0], [831.0, 78.0], [818.0, 21.0], [810.0, 153.0], [815.0, 20.0], [823.0, 20.0], [817.0, 179.0], [805.0, 81.0], [824.0, 134.0], [821.0, 126.0], [816.0, 161.5], [854.0, 115.0], [849.0, 19.0], [834.0, 112.0], [839.0, 17.0], [833.0, 19.0], [876.0, 179.0], [864.0, 54.0], [885.0, 144.0], [915.0, 160.0], [916.0, 146.0], [902.0, 18.0], [926.0, 17.0], [956.0, 20.0], [951.0, 17.0], [949.0, 25.0], [959.0, 22.0], [939.0, 111.0], [952.0, 133.0], [954.0, 122.0], [953.0, 14.0], [931.0, 19.0], [950.0, 17.0], [942.0, 140.0], [930.0, 17.0], [988.0, 19.0], [984.0, 21.0], [975.0, 19.0], [973.0, 28.0], [974.0, 18.0], [965.0, 18.0], [967.0, 19.0], [962.0, 26.0], [978.0, 20.0], [972.0, 18.0], [970.0, 20.0], [969.0, 104.5], [968.0, 19.0], [971.0, 18.0], [985.0, 20.0], [986.0, 20.0], [987.0, 19.0], [980.0, 20.0], [979.0, 19.0], [990.0, 19.0], [989.0, 20.0], [977.0, 19.0], [976.0, 23.0], [991.0, 19.0], [981.0, 22.0], [983.0, 21.0], [982.0, 19.0], [998.0, 21.0], [1002.0, 19.0], [1009.0, 19.0], [1010.0, 19.0], [1011.0, 19.0], [1012.0, 19.0], [1014.0, 19.0], [1015.0, 20.0], [1013.0, 20.0], [1001.0, 21.0], [1000.0, 19.0], [1008.0, 19.0], [1007.0, 20.0], [1006.0, 21.0], [992.0, 19.0], [1004.0, 20.0], [1003.0, 20.0], [1005.0, 20.0], [999.0, 20.0], [1021.0, 20.0], [1020.0, 19.0], [1018.0, 114.0], [1017.0, 19.0], [1016.0, 20.0], [995.0, 20.0], [994.0, 19.0], [997.0, 19.0], [996.0, 19.0], [993.0, 19.0], [1031.0, 19.0], [1076.0, 361.0], [1083.0, 30.0], [1079.0, 153.0], [1065.0, 22.0], [1057.0, 76.0], [1025.0, 97.0], [1033.0, 22.0], [1037.0, 20.0], [1067.0, 19.0], [1066.0, 75.0], [1027.0, 25.0], [1055.0, 136.0], [1054.0, 106.0], [1049.0, 143.0], [1040.0, 127.5], [1143.0, 25.0], [1129.0, 22.0], [1108.0, 24.0], [1120.0, 138.0], [1135.0, 155.0], [1112.0, 20.0], [1146.0, 73.0], [1140.0, 93.0], [1096.0, 145.0], [1139.0, 23.0], [1164.0, 33.0], [1186.0, 128.0], [1197.0, 488.0], [1209.0, 23.0], [1212.0, 25.0], [1171.0, 21.0], [1170.0, 100.0], [1187.0, 36.0], [1195.0, 115.0], [1162.0, 23.0], [1163.0, 23.0], [1200.0, 23.0], [1207.0, 119.0], [1202.0, 24.0], [1265.0, 94.0], [1226.0, 23.0], [1225.0, 30.0], [1223.0, 117.0], [1257.0, 26.0], [1259.0, 29.0], [1227.0, 100.0], [1231.0, 138.0], [1229.0, 22.0], [1269.0, 93.0], [1252.0, 53.0], [1254.0, 144.0], [1271.0, 23.0], [1272.0, 158.5], [1250.0, 164.5], [1241.0, 121.0], [1244.0, 22.5], [1266.0, 97.0], [1336.0, 92.0], [1316.0, 189.5], [1298.0, 24.0], [1322.0, 67.0], [1342.0, 73.0], [1290.0, 92.0], [1291.0, 26.0], [1321.0, 26.0], [1282.0, 27.0], [1350.0, 49.0], [1364.0, 28.0], [1393.0, 26.0], [1359.0, 27.0], [1357.0, 130.0], [1360.0, 113.0], [1381.0, 65.0], [1365.0, 89.0], [1382.0, 103.5], [1389.0, 27.0], [1386.0, 28.0], [1377.0, 87.0], [1395.0, 110.0], [1394.0, 76.5], [1400.0, 98.5], [1374.0, 76.0], [1420.0, 40.0], [1415.0, 66.0], [1419.0, 54.0], [1418.0, 120.0], [1431.0, 68.0], [1432.0, 134.0], [1408.0, 84.5], [1410.0, 110.5], [1465.0, 108.0], [1466.0, 85.0], [1451.0, 70.0], [1450.0, 27.0], [1445.0, 42.0], [1436.0, 29.0], [1440.0, 33.0], [1534.0, 70.0], [1478.0, 40.0], [1512.0, 124.0], [1497.0, 42.0], [1500.0, 65.0], [1499.0, 59.0], [1477.0, 35.0], [1475.0, 102.0], [1488.0, 23.0], [1510.0, 45.0], [1505.0, 78.0], [1507.0, 30.0], [1480.0, 75.0], [1520.0, 96.0], [1530.0, 42.5], [1487.0, 37.0], [1536.0, 66.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1536.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12.0, "minX": 171.0, "maxY": 488.0, "series": [{"data": [[171.0, 80.0], [399.0, 12.0], [433.0, 18.0], [453.0, 21.0], [463.0, 22.0], [478.0, 19.0], [467.0, 19.0], [471.0, 20.0], [466.0, 25.0], [472.0, 20.0], [480.0, 20.0], [489.0, 20.0], [492.0, 20.0], [487.0, 21.0], [482.0, 19.0], [511.0, 18.0], [506.0, 21.0], [498.0, 20.0], [505.0, 20.0], [499.0, 31.0], [502.0, 20.0], [539.0, 18.0], [531.0, 19.0], [535.0, 19.0], [530.0, 18.0], [521.0, 19.0], [517.0, 18.0], [516.0, 20.0], [524.0, 20.0], [543.0, 26.0], [529.0, 20.0], [534.0, 100.0], [553.0, 21.0], [566.0, 20.0], [558.0, 22.0], [569.0, 42.0], [562.0, 25.0], [565.0, 20.0], [567.0, 20.0], [552.0, 20.0], [578.0, 188.0], [582.0, 19.0], [606.0, 19.0], [607.0, 18.0], [602.0, 19.0], [603.0, 74.0], [592.0, 36.0], [596.0, 18.0], [624.0, 38.5], [617.0, 20.0], [627.0, 21.0], [615.0, 19.0], [621.0, 22.0], [613.0, 21.0], [640.0, 19.0], [669.0, 67.0], [679.0, 277.0], [701.0, 107.0], [694.0, 100.5], [699.0, 106.0], [686.0, 169.0], [678.0, 200.0], [734.0, 26.0], [727.0, 38.0], [724.0, 18.0], [725.0, 18.0], [722.0, 71.0], [711.0, 78.0], [728.0, 18.0], [732.0, 20.0], [754.0, 26.0], [761.0, 194.0], [757.0, 103.0], [750.0, 105.5], [745.0, 19.0], [763.0, 18.0], [767.0, 20.0], [758.0, 20.0], [759.0, 18.0], [748.0, 19.0], [756.0, 17.0], [768.0, 44.0], [789.0, 19.0], [782.0, 18.0], [772.0, 189.5], [771.0, 19.0], [791.0, 19.0], [831.0, 77.0], [818.0, 21.0], [810.0, 153.0], [815.0, 20.0], [823.0, 20.0], [817.0, 179.0], [805.0, 80.0], [824.0, 134.0], [821.0, 125.5], [816.0, 161.0], [854.0, 115.0], [849.0, 18.0], [834.0, 112.0], [839.0, 17.0], [833.0, 19.0], [876.0, 178.0], [864.0, 54.0], [885.0, 144.0], [915.0, 160.0], [916.0, 145.5], [902.0, 18.0], [926.0, 17.0], [956.0, 20.0], [951.0, 17.0], [949.0, 24.0], [959.0, 22.0], [939.0, 111.0], [952.0, 133.0], [954.0, 122.0], [953.0, 14.0], [931.0, 19.0], [950.0, 17.0], [942.0, 140.0], [930.0, 17.0], [988.0, 19.0], [984.0, 21.0], [975.0, 19.0], [973.0, 28.0], [974.0, 18.0], [965.0, 18.0], [967.0, 19.0], [962.0, 26.0], [978.0, 20.0], [972.0, 18.0], [970.0, 20.0], [969.0, 103.0], [968.0, 19.0], [971.0, 18.0], [985.0, 20.0], [986.0, 20.0], [987.0, 19.0], [980.0, 20.0], [979.0, 19.0], [990.0, 19.0], [989.0, 20.0], [977.0, 18.0], [976.0, 22.0], [991.0, 19.0], [981.0, 22.0], [983.0, 21.0], [982.0, 19.0], [998.0, 21.0], [1002.0, 19.0], [1009.0, 19.0], [1010.0, 19.0], [1011.0, 19.0], [1012.0, 19.0], [1014.0, 19.0], [1015.0, 20.0], [1013.0, 20.0], [1001.0, 21.0], [1000.0, 19.0], [1008.0, 19.0], [1007.0, 20.0], [1006.0, 21.0], [992.0, 19.0], [1004.0, 20.0], [1003.0, 20.0], [1005.0, 20.0], [999.0, 19.0], [1021.0, 20.0], [1020.0, 19.0], [1018.0, 114.0], [1017.0, 19.0], [1016.0, 19.0], [995.0, 19.0], [994.0, 19.0], [997.0, 19.0], [996.0, 19.0], [993.0, 19.0], [1031.0, 19.0], [1076.0, 360.5], [1083.0, 30.0], [1079.0, 153.0], [1065.0, 22.0], [1057.0, 76.0], [1025.0, 97.0], [1033.0, 22.0], [1037.0, 20.0], [1067.0, 19.0], [1066.0, 75.0], [1027.0, 24.0], [1055.0, 135.0], [1054.0, 106.0], [1049.0, 143.0], [1040.0, 127.5], [1143.0, 25.0], [1129.0, 22.0], [1108.0, 23.0], [1120.0, 138.0], [1135.0, 155.0], [1112.0, 19.0], [1146.0, 73.0], [1140.0, 92.5], [1096.0, 144.0], [1139.0, 23.0], [1164.0, 33.0], [1186.0, 128.0], [1197.0, 488.0], [1209.0, 23.0], [1212.0, 24.0], [1171.0, 21.0], [1170.0, 100.0], [1187.0, 36.0], [1195.0, 115.0], [1162.0, 23.0], [1163.0, 23.0], [1200.0, 23.0], [1207.0, 119.0], [1202.0, 24.0], [1265.0, 94.0], [1226.0, 23.0], [1225.0, 30.0], [1223.0, 117.0], [1257.0, 26.0], [1259.0, 29.0], [1227.0, 100.0], [1231.0, 138.0], [1229.0, 22.0], [1269.0, 93.0], [1252.0, 53.0], [1254.0, 144.0], [1271.0, 22.0], [1272.0, 158.5], [1250.0, 164.5], [1241.0, 121.0], [1244.0, 22.0], [1266.0, 97.0], [1336.0, 92.0], [1316.0, 189.0], [1298.0, 24.0], [1322.0, 67.0], [1342.0, 73.0], [1290.0, 91.5], [1291.0, 26.0], [1321.0, 26.0], [1282.0, 27.0], [1350.0, 49.0], [1364.0, 28.0], [1393.0, 26.0], [1359.0, 27.0], [1357.0, 130.0], [1360.0, 113.0], [1381.0, 65.0], [1365.0, 89.0], [1382.0, 103.5], [1389.0, 27.0], [1386.0, 27.0], [1377.0, 87.0], [1395.0, 110.0], [1394.0, 76.5], [1400.0, 98.0], [1374.0, 76.0], [1420.0, 40.0], [1415.0, 66.0], [1419.0, 53.0], [1418.0, 119.5], [1431.0, 68.0], [1432.0, 134.0], [1408.0, 84.5], [1410.0, 110.5], [1465.0, 107.0], [1466.0, 85.0], [1451.0, 69.0], [1450.0, 27.0], [1445.0, 42.0], [1436.0, 28.0], [1440.0, 33.0], [1534.0, 70.0], [1478.0, 40.0], [1512.0, 124.0], [1497.0, 42.0], [1500.0, 65.0], [1499.0, 59.0], [1477.0, 35.0], [1475.0, 102.0], [1488.0, 23.0], [1510.0, 45.0], [1505.0, 78.0], [1507.0, 30.0], [1480.0, 75.0], [1520.0, 96.0], [1530.0, 42.5], [1487.0, 37.0], [1536.0, 66.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1536.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 69.41666666666667, "minX": 1.63356774E12, "maxY": 999.2666666666667, "series": [{"data": [[1.63356816E12, 996.15], [1.63356822E12, 997.7166666666667], [1.63356786E12, 996.3666666666667], [1.63356852E12, 994.05], [1.63356858E12, 997.8166666666667], [1.63356798E12, 997.2166666666667], [1.63356792E12, 994.9833333333333], [1.63356828E12, 998.5333333333333], [1.63356804E12, 990.65], [1.63356834E12, 995.5833333333334], [1.63356774E12, 69.41666666666667], [1.63356864E12, 909.7666666666667], [1.6335678E12, 991.3], [1.6335684E12, 995.95], [1.63356846E12, 996.6], [1.6335681E12, 999.2666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63356864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 62.45, "minX": 1.63356774E12, "maxY": 1007.7166666666667, "series": [{"data": [[1.63356816E12, 1003.3166666666667], [1.63356822E12, 988.6166666666667], [1.63356786E12, 996.2], [1.63356852E12, 994.85], [1.63356858E12, 997.8166666666667], [1.63356798E12, 997.9], [1.63356792E12, 995.1], [1.63356828E12, 1007.7166666666667], [1.63356804E12, 990.65], [1.63356834E12, 994.7833333333333], [1.63356774E12, 62.45], [1.63356864E12, 909.7666666666667], [1.6335678E12, 997.6333333333333], [1.6335684E12, 996.0], [1.63356846E12, 996.55], [1.6335681E12, 992.0166666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63356864E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 62.45, "minX": 1.63356774E12, "maxY": 1007.7166666666667, "series": [{"data": [[1.63356816E12, 1003.3166666666667], [1.63356822E12, 988.6166666666667], [1.63356786E12, 996.2], [1.63356852E12, 994.85], [1.63356858E12, 997.8166666666667], [1.63356798E12, 997.9], [1.63356792E12, 995.1], [1.63356828E12, 1007.7166666666667], [1.63356804E12, 990.65], [1.63356834E12, 994.7833333333333], [1.63356774E12, 62.45], [1.63356864E12, 909.7666666666667], [1.6335678E12, 997.6333333333333], [1.6335684E12, 996.0], [1.63356846E12, 996.55], [1.6335681E12, 992.0166666666667]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63356864E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 62.45, "minX": 1.63356774E12, "maxY": 1007.7166666666667, "series": [{"data": [[1.63356816E12, 1003.3166666666667], [1.63356822E12, 988.6166666666667], [1.63356786E12, 996.2], [1.63356852E12, 994.85], [1.63356858E12, 997.8166666666667], [1.63356798E12, 997.9], [1.63356792E12, 995.1], [1.63356828E12, 1007.7166666666667], [1.63356804E12, 990.65], [1.63356834E12, 994.7833333333333], [1.63356774E12, 62.45], [1.63356864E12, 909.7666666666667], [1.6335678E12, 997.6333333333333], [1.6335684E12, 996.0], [1.63356846E12, 996.55], [1.6335681E12, 992.0166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63356864E12, "title": "Total Transactions Per Second"}},
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

