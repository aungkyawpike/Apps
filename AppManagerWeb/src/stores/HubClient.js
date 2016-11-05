class HubClient {

    constructor($) {
        this.$ = $
        this.reconnectTimeout = 3000
        this.resubscribeCallback = null
        this.dataReceivedCallbacks = {}
        this.subscriptionQueue = []
        this.initialize = this.initialize.bind(this)
        this.subscribe = this.subscribe.bind(this)
        this.reconnect = this.reconnect.bind(this)
        this.oddsDisplayHub = $.connection.oddsDisplayHub
    }

    reconnect() {
        console.log('hub restarting...' + new Date());
        var connType = {
            transport: ['webSockets', 'serverSentEvents', 'longPolling', 'foreverFrame']
        }

        this.oddsDisplayHub.connection.start(connType).done(() => {
            console.log('hub restarted - ' + new Date())
            if ($.isFunction(this.hubClient.resubscribeCallback)) {
                this.hubClient.resubscribeCallback()
            }
        })
    }

    initialize(resubscribeCallback) {
        var _this = this

        this.resubscribeCallback = resubscribeCallback;

        this.oddsDisplayHub.client.receiveData = (data) => {
            var callBack, obj;
            if (_this.dataReceivedCallbacks !== null) {
                callBack = _this.dataReceivedCallbacks[data.g]
                if ($.isFunction(callBack)) {
                    obj = JSON.parse(data.d)
                    callBack(obj)
                }
            }
        }

        $.connection.hub.reconnected(() => {
            console.log('hub reconnected - ' + new Date())
        })

        $.connection.hub.stateChanged((state) => {
          var stateConversion = {
            0: 'connecting',
            1: 'connected',
            2: 'reconnecting',
            4: 'disconnected'
          }
        
          console.log('hub state : ' + stateConversion[state.oldState] + ' -> ' + stateConversion[state.newState] + ' - ' + new Date())
        
          if (state.newState === 1) {
              _this.subscriptionQueue.forEach((value) => {
                  _this.subscribe(value.id, value.callBack);
              })
              _this.subscriptionQueue = [];
          }
        })

        $.connection.hub.disconnected(() => {
          console.log('hub disconnected! - ' + new Date());
          setTimeout(() => {
              _this.reconnect()
          }, _this.reconnectTimeout);
        })
        
        _this.oddsDisplayHub.connection.error((error) => {
          console.log(error);
        })
        
        var connType = {
          transport: ['webSockets', 'serverSentEvents', 'longPolling', 'foreverFrame']
        }
        
        _this.oddsDisplayHub.connection.start(connType).done(() => {
            console.log('hub started - ' + +new Date())
        })
    }

    subscribe(groupId, dataReceived) {
        var _this = this
        if (_this.oddsDisplayHub) {
            if (_this.oddsDisplayHub.connection.state === $.signalR.connectionState.connected) {
                _this.oddsDisplayHub.server.subscribe(groupId).done(() => {
                    console.log('hub subscribe -  ' + _this.oddsDisplayHub.connection.id + ',' + groupId + ' - ' + new Date())
                    _this.dataReceivedCallbacks[groupId] = dataReceived
                }).fail((error) => {
                    console.log('Subscribe Fail. Error: ' + error);
                })
            } else {
                console.log('hub not connected - subscription is queued. : ' + groupId + ' - ' + new Date());
                _this.subscriptionQueue.push({
                    id: groupId,
                    callBack: dataReceived
                })
            }
        }
        return true;
    }

    unsubscribe(groupId) {
        var _this = this
        if (_this.oddsDisplayHub && _this.oddsDisplayHub.connection.state === $.signalR.connectionState.connected) {
            _this.oddsDisplayHub.server.unsubscribe(groupId).done(() =>{
                console.log('hub unsubscribed.' + groupId + ' - ' + new Date())
                if (_this.dataReceivedCallbacks) {
                    delete_this.dataReceivedCallbacks[groupId]
                }
            }).fail((error) => {
                console.log('Unsubscribe Fail. Error: ' + error + ' - ' + new Date())
            })
        }
        return true;
    }
}

var hubClient = new HubClient(window.jQuery)
export default hubClient