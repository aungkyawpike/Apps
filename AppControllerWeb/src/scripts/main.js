jQuery(function($){
  $(function(){
     $('#money').bootstrapToggle();
     $('.pass-checkbox').bootstrapToggle();
     $('.flexslider').each(function(){
      $('.flexslider').flexslider({
        animation: 'slide'
      });
    });

    function getTemplate(templateUrl) {
      return $.ajax({
          type: 'GET',
          url: templateUrl,
          async: false
      }).responseText;
    }

    $('.nav-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    var newYear = new Date();
    newYear = new Date(2016, 12, 25, 00, 00);
    $('.countdown').countdown({
      until: newYear,
      compact:true,
      padZeroes: true,format:'0DHMS',
      layout: '<div class="days">{dn}<div class="unit">天</div></div><div class="hours">{hn}<div class="unit">小时</div></div><div class="minutes">{mn}<div class="unit">分</div></div><div class="seconds">{sn}<div class="unit">秒</div></</div>'
    });
     var color;
    if($('#bet-modal').length>0){
      color = $('#bet-modal').attr('class');
      var wrapHtml = '';
      wrapHtml = '<div class="fancybox-wrap modal-dialog bet-dialog '+color+'" tabIndex="-1">';
      wrapHtml += '<div class="fancybox-skin"><div class="fancybox-outer">';
      wrapHtml += '<div class="fancybox-inner"></div>';
      wrapHtml += '</div>';
      wrapHtml += '<img src="./images/'+color+'-left-top.png" class="top-left" />';
      wrapHtml += '<img src="./images/'+color+'-right-top.png" class="top-right" />';
      wrapHtml += '<img src="./images/'+color+'-left-bottom.png" class="bottom-left" />';
      wrapHtml += '<img src="./images/'+color+'-right-bottom.png" class="bottom-right" />';
      wrapHtml += '</div></div>';

    }
    $('.close-modal').click(function(evt){
      evt.preventDefault();
      $.fancybox.close();
    });
    if($('.bet-list').length>=1){
      $.ajax({
        url:'./json/bet-list.json',
        type:'GET',
        dataType: 'json',
        success:function(d){
          var oddTableTemplate = getTemplate('./template/odd-table.html');
          var dotted = doT.template(oddTableTemplate);
          var odd = d.payload.oddlist;
          odd.color = color;
          $('.tab-content .all-odd').html(dotted(odd))

          $('.place-bet').TouchSpin({
              min: 0,
              prefix: '$'
          });
          $('.bet-modal').fancybox({
            title:null,
            padding:0,
            minWidth:750,
            maxWidth:750,
            tpl:{
              wrap: wrapHtml
            },
          });

          $('.pass-modal').fancybox({
            title:null,
            padding:0,
            minWidth:750,
            maxWidth:750,
            tpl:{
              wrap: wrapHtml
            },
          });

          $('.bet-check input').simpleImageCheck({
            image: './images/'+color+'-border.png',
            imageChecked: './images/tick.png'
          }).change(function(){
            var oldVal, newVal;
            $listen = $('.dialog-content .place-bet')
            oldVal = ($listen.val()!='undefined')?parseInt($listen.val()):0;
            newVal = parseInt($(this).val());
            $listen.val(newVal+oldVal)
            var audio = document.getElementById("coin");
            audio.play();
          });
        },
        done:function(d){
          console.log(d)
        },
        error:function(err){
          console.log(err)
        }
      });
    }

    $('.bet-list').on('click','.add-to-pass',function(evt){
      evt.preventDefault();
      $(".pass-modal").tooltip('show');
      setTimeout(function(){
        $(".pass-modal").tooltip('hide');
      },2000)
    })
    $('#bet-modal').on('click','.submit-bet',function(evt){
      evt.preventDefault();
      $('#bet-modal .modal-inner').hide();
      $('#bet-modal .success-message').show();
      $(window).resize();
    });
    $('#pass-modal').on('click','.submit-pass',function(evt){
      evt.preventDefault();
      $('#pass-modal .modal-inner').hide();
      $('#pass-modal .success-message').show();
        $(window).resize();
    });
    if($('.road-map').length>=1){
      $.ajax({
        url:'./json/roadmap.json',
        type:'GET',
        dataType: 'json',
        success:function(d){
          var roadmapTemplate = getTemplate('./template/roadmap.html');
          var dotted = doT.template(roadmapTemplate);
          var roadmap = d.payload.roadmap;
          $('.road-map .panel-group').html(dotted(roadmap));
          $('.roadmap-table').roadmapTable();

        },
        done:function(d){
          console.log(d)
        },
        error:function(err){
          console.log(err)
        }
      });
    }


    if($('.all-game').length>=1){
      $.ajax({
        url:'./json/games.json',
        type:'GET',
        dataType: 'json',
        success:function(d){
          var gameTableTemplate = getTemplate('./template/all-game.html');
          var dotted = doT.template(gameTableTemplate);
          var games = d.payload.games;
          $(games).each(function(i){
            var timestamp = games[i].timestamp;
            games[i].timestamp = moment.unix(timestamp).format('MM/DD/YYYY');
            games[i].utc = timestamp;
          });
          $('.all-game').html(dotted(games));
          var current = moment().unix();

          $('.bet-countdown').each(function(){
            var gameTimeStamp = $(this).text();
            if (current >= gameTimeStamp) {
              $(this).html('<div class="counting-done">查看直播</div>');
            }else{
              var elapseDate = new Date(gameTimeStamp*1000);

              $self = $(this)
              $(this).countdown({
                until:elapseDate,
                expiryText: '<span class="warning">查看直播</span>',
                layout: '<div class="counting">剩{dn}天{hn}小时{mn}分钟{sn}秒</div>'
              })
            }


          });
        },
        done:function(d){
          console.log(d)
        },
        error:function(err){
          console.log(err)
        }
      });

      $('.modal').fancybox({
        title:null,
        padding:0,
        minWidth:600,
        tpl:{
          wrap: '<div class="fancybox-wrap modal-dialog" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
        },
      });

      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
      $('.all-game').on('click','.show-chart',function(evt){
        evt.preventDefault();
        var id = $(this).attr('href').replace('#/','');

        $.ajax({
          url:'./json/'+id+'.json',
          type:'GET',
          dataType: 'json',
          success:function(d){
            var comparisonTemplate = getTemplate('./template/comparison.html');
            var dotted = doT.template(comparisonTemplate);
            var comparison = d.payload;
            var html = dotted(comparison);
            var homeRadarkey = [],homeRadarValue=[],awayRadarkey=[],awayRadarValue=[],homeRadardata = comparison.home.radarchart,awayRadardata = comparison.away.radarchart;
            for(var homeK in homeRadardata){
              homeRadarkey.push({'name':homeK,'max':10});
              homeRadarValue.push(homeRadardata[homeK]);
            }
            for(var awayK in awayRadardata){
              awayRadarkey.push({'name':awayK,'max':10});
              awayRadarValue.push(awayRadardata[awayK]);
            }
            homeOption = {
              radar: {indicator: homeRadarkey},
              series: [{type: 'radar',itemStyle: {normal: {areaStyle: {type: 'default'}}},data : [{value : homeRadarValue}]}]
            };
            awayOption = {
              radar: {indicator: awayRadarkey},
              series: [{
                type: 'radar',
                itemStyle: {
                  normal: {
                    areaStyle: {color:'#0064d4'},
                     lineStyle:{color:'#0064d4'}
                   }
                 },
                 data : [{
                   value : awayRadarValue,
                   itemStyle:{
                     normal:{color:'#0064d4'}
                   }
                 }]
               }]
            };
            wrapHtml = '<div class="fancybox-wrap '+comparison.color+'" tabIndex="-1">';
            wrapHtml += '<div class="fancybox-skin"><div class="fancybox-outer">';
            wrapHtml += '<div class="fancybox-inner"></div>';
            wrapHtml += '</div>';
            wrapHtml += '<img src="./images/'+comparison.color+'-left-top.png" class="top-left" />';
            wrapHtml += '<img src="./images/'+comparison.color+'-right-top.png" class="top-right" />';
            wrapHtml += '<img src="./images/'+comparison.color+'-left-bottom.png" class="bottom-left" />';
            wrapHtml += '<img src="./images/'+comparison.color+'-right-bottom.png" class="bottom-right" />';
            wrapHtml += '</div></div>';
            $.fancybox({
               type: 'html',
               content: html,
               minWidth: 1180,
               minHeight: 640,
               padding:[10, 30, 10, 30],
               tpl:{
                 wrap: wrapHtml
               },
               afterShow: function(){
                  $.fancybox.inner.jScrollPane();
                  var homeChart = echarts.init(document.getElementById('radar-home'));
                  homeChart.setOption(homeOption)
                  var awayChart = echarts.init(document.getElementById('radar-away'));
                  awayChart.setOption(awayOption)
               }
           });
          },
          done:function(d){
            console.log(d)
          },
          error:function(err){
            console.log(err)
          }
        });
      });
    }

  });




});

//# sourceMappingURL=main.js.map
