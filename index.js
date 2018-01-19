`use strict`

const colors = {
    //style
    "reset" : "\033[0m",
    "intense" : "\033[1m",
    "underline" : "\033[4m",
    "inverse" : "\033[7m",
    "slow_blink": "\033[5m",
    "rapid_blink": "\033[6m",
    // foreground colors STANDARD
    "black" : "\033[30m",
    "red" : "\033[31m",
    "green" : "\033[32m",
    "yellow" : "\033[33m",
    "blue" : "\033[34m",
    "magenta" : "\033[35m",
    "cyan" : "\033[36m",
    "white" : "\033[37m",
    // foreground colors BRIGHT
    "bright_black" : "\033[90m",
    "bright_red" : "\033[91m",
    "bright_green" : "\033[92m",
    "bright_yellow" : "\033[93m",
    "bright_blue" : "\033[94m",
    "bright_magenta" : "\033[95m",
    "bright_cyan" : "\033[96m",
    "bright_white" : "\033[97m",
    // background colors STANDARD
    "bg_black" : "\033[40m",
    "bg_red" : "\033[41m",
    "bg_green" : "\033[42m",
    "bg_yellow" : "\033[43m",
    "bg_blue" : "\033[44m",
    "bg_magenta" : "\033[45m",
    "bg_cyan" : "\033[46m",
    "bg_white" : "\033[47m",
     // background colors BRIGHT
     "bright_bg_black" : "\033[100m",
     "bright_bg_red" : "\033[101m",
     "bright_bg_green" : "\033[102m",
     "bright_bg_yellow" : "\033[103m",
     "bright_bg_blue" : "\033[104m",
     "bright_bg_magenta" : "\033[105m",
     "bright_bg_cyan" : "\033[106m",
     "bright_bg_white" : "\033[107m"
  }


module.exports =  {
      store: '',
      black : function(str) {return colors['black'] + str + colors['reset']},
      red : function(str) {return colors['red'] + str + colors['reset']},
      green : function(str) {return colors['green'] + str + colors['reset']},
      yellow : function(str) {return colors['yellow'] + str + colors['reset']},
      blue : function(str) {return colors['blue'] + str + colors['reset']},
      magenta : function(str) {return colors['magenta'] + str + colors['reset']},
      cyan : function(str) {return colors['cyan'] + str + colors['reset']},
      white : function(str) {return colors['white'] + str + colors['reset']},
      //shorthand Foreground STANDARD
      k : function(str) {this.store += colors['black'] + str + colors['reset'] 
                        return this},
      r : function(str) {this.store += colors['red'] + str + colors['reset'] 
                        return this},
      g : function(str) {this.store += colors['green'] + str + colors['reset'] 
                        return this},
      y : function(str) {this.store += colors['yellow'] + str + colors['reset']
                        return this},
      b : function(str) {this.store += colors['blue'] + str + colors['reset'] 
                        return this},
      m : function(str) {this.store += colors['magenta'] + str + colors['reset'] 
                        return this},
      c : function(str) {this.store += colors['cyan'] + str + colors['reset'] 
                        return this},
      w : function(str) {this.store += colors['white'] + str + colors['reset'] 
                        return this },
      //shorthand Foreground BRIGHT
      bk : function(str) {this.store += colors['bright_black'] + str + colors['reset'] 
                        return this},
      br : function(str) {this.store += colors['bright_red'] + str + colors['reset'] 
                        return this},
      bg : function(str) {this.store += colors['bright_green'] + str + colors['reset'] 
                        return this},
      by : function(str) {this.store += colors['bright_yellow'] + str + colors['reset']
                        return this},
      bb : function(str) {this.store += colors['bright_blue'] + str + colors['reset'] 
                        return this},
      bm : function(str) {this.store += colors['bright_magenta'] + str + colors['reset'] 
                        return this},
      bc : function(str) {this.store += colors['bright_cyan'] + str + colors['reset'] 
                        return this},
      bw : function(str) {this.store += colors['bright_white'] + str + colors['reset'] 
                        return this },                        
      //shorthand Background STANDARD
      K : function(str) {this.store += colors['bg_black'] 
                        return this},
      R : function(str) {this.store += colors['bg_red'] 
                        return this},
      G : function(str) {this.store += colors['bg_green'] 
                        return this},
      Y : function(str) {this.store += colors['bg_yellow'] 
                        return this},
      B : function(str) {this.store += colors['bg_blue'] 
                        return this},
      M : function(str) {this.store += colors['bg_magenta']
                        return this},
      C : function(str) {this.store += colors['bg_cyan']
                        return this},
      W : function(str) {this.store += colors['bg_white']
                        return this },
      //shorthand Background BRIGHT
      BB : function(str) {this.store += colors['bright_bg_black'] 
                        return this},
      BR : function(str) {this.store += colors['bright_bg_red'] 
                        return this},
      BG : function(str) {this.store += colors['bright_bg_green'] 
                        return this},
      BY : function(str) {this.store += colors['bright_bg_yellow'] 
                        return this},
      BB : function(str) {this.store += colors['bright_bg_blue'] 
                        return this},
      BM : function(str) {this.store += colors['bright_bg_magenta']
                        return this},
      BC : function(str) {this.store += colors['bright_bg_cyan']
                        return this},
      BW : function(str) {this.store += colors['bright_bg_white']
                        return this },                        
       //styles
      V : function() {this.store += colors['inverse']
                        return this},
      _ : function() {this.store += colors['underline']
                        return this},
      reset : function() {this.store += colors['reset']
                        return this},
      I : function() {this.store += colors['intense']
                        return this},
      blk : function() {this.store += colors['slow_blink']
                        return this},
      rblk : function() {this.store += colors['rapid_blink']
                        return this},                                       
      end: function(){
                      result = this.store 
                      //reset store
                       this.store='' 
                       return result
      }
  }