<!DOCTYPE html>

<html>
<head>
  <title>drum-machine.js</title>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
  <link rel="stylesheet" media="all" href="docco.css" />
</head>
<body>
  <div id="container">
    <div id="background"></div>
    
    <ul class="sections">
        
          <li id="title">
              <div class="annotation">
                  <h1>drum-machine.js</h1>
              </div>
          </li>
        
        
        
        <li id="section-1">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-1">&#182;</a>
              </div>
              <p>Create the object that contains functions that use web audio to
make sound.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-keyword">var</span> audio = <span class="hljs-keyword">new</span> AudioContext();</pre></div></div>
            
        </li>
        
        
        <li id="section-2">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-2">&#182;</a>
              </div>
              <p>Create the data for the drum machine.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-keyword">var</span> data = {</pre></div></div>
            
        </li>
        
        
        <li id="section-3">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-3">&#182;</a>
              </div>
              <p><code>step</code> represents the current step (or beat) of the loop.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  step: <span class="hljs-number">0</span>,</pre></div></div>
            
        </li>
        
        
        <li id="section-4">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-4">&#182;</a>
              </div>
              <p><code>tracks</code> holds the six tracks of the drum machine.  Each track
has a sound and sixteen steps (or beats).</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  tracks: [createTrack(<span class="hljs-string">"gold"</span>, note(audio, <span class="hljs-number">880</span>)),
           createTrack(<span class="hljs-string">"gold"</span>, note(audio, <span class="hljs-number">659</span>)),
           createTrack(<span class="hljs-string">"gold"</span>, note(audio, <span class="hljs-number">587</span>)),
           createTrack(<span class="hljs-string">"gold"</span>, note(audio, <span class="hljs-number">523</span>)),
           createTrack(<span class="hljs-string">"gold"</span>, note(audio, <span class="hljs-number">440</span>)),
           createTrack(<span class="hljs-string">"dodgerblue"</span>, kick(audio))]
};</pre></div></div>
            
        </li>
        
        
        <li id="section-5">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-5">&#182;</a>
              </div>
              <h2 id="update">Update</h2>

            </div>
            
        </li>
        
        
        <li id="section-6">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-6">&#182;</a>
              </div>
              
            </div>
            
        </li>
        
        
        <li id="section-7">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-7">&#182;</a>
              </div>
              <p>Runs every hundred milliseconds.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>setInterval(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{</pre></div></div>
            
        </li>
        
        
        <li id="section-8">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-8">&#182;</a>
              </div>
              <p>Increase <code>data.step</code> by one.  If <code>data.step</code> is <code>15</code> (the last
step) loop back around to <code>0</code> (the first step).</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  data.step = (data.step + <span class="hljs-number">1</span>) % data.tracks[<span class="hljs-number">0</span>].steps.length;</pre></div></div>
            
        </li>
        
        
        <li id="section-9">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-9">&#182;</a>
              </div>
              <p>Find all the tracks where the current step is on.  Play the
sounds for those tracks.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  data.tracks
    .filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">track</span>) </span>{ <span class="hljs-keyword">return</span> track.steps[data.step]; })
    .forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">track</span>) </span>{ track.playSound(); });
}, <span class="hljs-number">100</span>);</pre></div></div>
            
        </li>
        
        
        <li id="section-10">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-10">&#182;</a>
              </div>
              <h2 id="draw">Draw</h2>

            </div>
            
        </li>
        
        
        <li id="section-11">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-11">&#182;</a>
              </div>
              
            </div>
            
        </li>
        
        
        <li id="section-12">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-12">&#182;</a>
              </div>
              <p>Get the <code>screen</code> object.  This is a bundle of functions that draw
in the canvas element.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-keyword">var</span> screen = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"screen"</span>).getContext(<span class="hljs-string">"2d"</span>);</pre></div></div>
            
        </li>
        
        
        <li id="section-13">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-13">&#182;</a>
              </div>
              <p><strong>draw()</strong> draws the drum machine.  Called once at the beginning of
the program.  It’s then called 60 times a second forever (see the
call to <code>requestAnimationFrame()</code> below).</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">draw</span>(<span class="hljs-params"></span>) </span>{</pre></div></div>
            
        </li>
        
        
        <li id="section-14">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-14">&#182;</a>
              </div>
              <p>Clear away the previous drawing.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  screen.clearRect(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, screen.canvas.width, screen.canvas.height);</pre></div></div>
            
        </li>
        
        
        <li id="section-15">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-15">&#182;</a>
              </div>
              <p>Draw all the tracks.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  drawTracks(screen, data);</pre></div></div>
            
        </li>
        
        
        <li id="section-16">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-16">&#182;</a>
              </div>
              <p>Draw the pink square that indicates the current step (beat).</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  drawButton(screen, data.step, data.tracks.length, <span class="hljs-string">"deeppink"</span>);</pre></div></div>
            
        </li>
        
        
        <li id="section-17">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-17">&#182;</a>
              </div>
              <p>Ask the browser to call <code>draw()</code> again in the near future.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  requestAnimationFrame(draw);
})();</pre></div></div>
            
        </li>
        
        
        <li id="section-18">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-18">&#182;</a>
              </div>
              <h2 id="handle-events">Handle events</h2>

            </div>
            
        </li>
        
        
        <li id="section-19">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-19">&#182;</a>
              </div>
              
            </div>
            
        </li>
        
        
        <li id="section-20">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-20">&#182;</a>
              </div>
              <p><strong>setupButtonClicking()</strong> sets up the event handler that will make
mouse clicks turn track buttons on and off.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setupButtonClicking</span>(<span class="hljs-params"></span>) </span>{</pre></div></div>
            
        </li>
        
        
        <li id="section-21">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-21">&#182;</a>
              </div>
              <p>Every time the user clicks…</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{</pre></div></div>
            
        </li>
        
        
        <li id="section-22">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-22">&#182;</a>
              </div>
              <p>…Get the coordinates of the mouse pointer relative to the
canvas…</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    <span class="hljs-keyword">var</span> p = { x: e.offsetX, y: e.offsetY };</pre></div></div>
            
        </li>
        
        
        <li id="section-23">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-23">&#182;</a>
              </div>
              <p>…Go through every track…</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    data.tracks.forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">track, row</span>) </span>{</pre></div></div>
            
        </li>
        
        
        <li id="section-24">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-24">&#182;</a>
              </div>
              <p>…Go through every button in this track…</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>      track.steps.forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">on, column</span>) </span>{</pre></div></div>
            
        </li>
        
        
        <li id="section-25">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-25">&#182;</a>
              </div>
              <p>…If the mouse pointer was inside this button…</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>        <span class="hljs-keyword">if</span> (isPointInButton(p, column, row)) {</pre></div></div>
            
        </li>
        
        
        <li id="section-26">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-26">&#182;</a>
              </div>
              <p>…Switch it off if it was on or on if it was off.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>          track.steps[column] = !on;
        }
      });
    });
  });
})();</pre></div></div>
            
        </li>
        
        
        <li id="section-27">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-27">&#182;</a>
              </div>
              <p><strong>note()</strong> plays a note with a pitch of <code>frequency</code> for <code>1</code> second.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">note</span>(<span class="hljs-params">audio, frequency</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> duration = <span class="hljs-number">1</span>;</pre></div></div>
            
        </li>
        
        
        <li id="section-28">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-28">&#182;</a>
              </div>
              <p>Create the basic note as a sine wave.  A sine wave produces a
pure tone.  Set it to play for <code>duration</code> seconds.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    <span class="hljs-keyword">var</span> sineWave = createSineWave(audio, duration);</pre></div></div>
            
        </li>
        
        
        <li id="section-29">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-29">&#182;</a>
              </div>
              <p>Set the note’s frequency to <code>frequency</code>.  A greater frequency
produces a higher note.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    sineWave.frequency.value = frequency;</pre></div></div>
            
        </li>
        
        
        <li id="section-30">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-30">&#182;</a>
              </div>
              <p>Web audio works by connecting nodes together in chains.  The
output of one node becomes the input to the next.  In this way,
sound is created and modified.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    chain([</pre></div></div>
            
        </li>
        
        
        <li id="section-31">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-31">&#182;</a>
              </div>
              <p><code>sineWave</code> outputs a pure tone.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>      sineWave,</pre></div></div>
            
        </li>
        
        
        <li id="section-32">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-32">&#182;</a>
              </div>
              <p>An amplifier reduces the volume of the tone from 20% to 0
over the duration of the tone.  This produces an echoey
effect.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>      createAmplifier(audio, <span class="hljs-number">0.2</span>, duration),</pre></div></div>
            
        </li>
        
        
        <li id="section-33">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-33">&#182;</a>
              </div>
              <p>The amplified output is sent to the browser to be played
aloud.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>      audio.destination]);
  };
};</pre></div></div>
            
        </li>
        
        
        <li id="section-34">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-34">&#182;</a>
              </div>
              <p><strong>kick()</strong> plays a kick drum sound for <code>1</code> second.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">kick</span>(<span class="hljs-params">audio</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> duration = <span class="hljs-number">2</span>;</pre></div></div>
            
        </li>
        
        
        <li id="section-35">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-35">&#182;</a>
              </div>
              <p>Create the basic note as a sine wave.  A sine wave produces a
pure tone.  Set it to play for <code>duration</code> seconds.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    <span class="hljs-keyword">var</span> sineWave = createSineWave(audio, duration);</pre></div></div>
            
        </li>
        
        
        <li id="section-36">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-36">&#182;</a>
              </div>
              <p>Set the initial frequency of the drum at a low <code>160</code>.  Reduce
it to 0 over the duration of the sound.  This produces that
BBBBBBBoooooo….. drop effect.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    rampDown(audio, sineWave.frequency, <span class="hljs-number">160</span>, duration);</pre></div></div>
            
        </li>
        
        
        <li id="section-37">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-37">&#182;</a>
              </div>
              <p>Web audio works by connecting nodes together in chains.  The
output of one node becomes the input to the next.  In this way,
sound is created and modified.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>    chain([</pre></div></div>
            
        </li>
        
        
        <li id="section-38">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-38">&#182;</a>
              </div>
              <p><code>sineWave</code> outputs a pure tone.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>      sineWave,</pre></div></div>
            
        </li>
        
        
        <li id="section-39">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-39">&#182;</a>
              </div>
              <p>An amplifier reduces the volume of the tone from 40% to 0
over the duration of the tone.  This produces an echoey
effect.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>      createAmplifier(audio, <span class="hljs-number">0.4</span>, duration),</pre></div></div>
            
        </li>
        
        
        <li id="section-40">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-40">&#182;</a>
              </div>
              <p>The amplified output is sent to the browser to be played
aloud.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>      audio.destination]);
  };
};</pre></div></div>
            
        </li>
        
        
        <li id="section-41">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-41">&#182;</a>
              </div>
              <p><strong>createSineWave()</strong> returns a sound node that plays a sine wave
for <code>duration</code> seconds.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createSineWave</span>(<span class="hljs-params">audio, duration</span>) </span>{</pre></div></div>
            
        </li>
        
        
        <li id="section-42">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-42">&#182;</a>
              </div>
              <p>Create an oscillating sound wave.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  <span class="hljs-keyword">var</span> oscillator = audio.createOscillator();</pre></div></div>
            
        </li>
        
        
        <li id="section-43">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-43">&#182;</a>
              </div>
              <p>Make the oscillator a sine wave.  Different types of wave produce
different characters of sound.  A sine wave produces a pure tone.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  oscillator.type = <span class="hljs-string">"sine"</span>;</pre></div></div>
            
        </li>
        
        
        <li id="section-44">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-44">&#182;</a>
              </div>
              <p>Start the sine wave playing right now.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  oscillator.start(audio.currentTime);</pre></div></div>
            
        </li>
        
        
        <li id="section-45">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-45">&#182;</a>
              </div>
              <p>Tell the sine wave to stop playing after <code>duration</code> seconds have
passed.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  oscillator.stop(audio.currentTime + duration);</pre></div></div>
            
        </li>
        
        
        <li id="section-46">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-46">&#182;</a>
              </div>
              <p>Return the sine wave.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre>  <span class="hljs-keyword">return</span> oscillator;
};</pre></div></div>
            
        </li>
        
        
        <li id="section-47">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-47">&#182;</a>
              </div>
              <p><strong>rampDown()</strong> takes <code>value</code>, sets it to <code>startValue</code> and reduces
it to almost <code>0</code> in <code>duration</code> seconds.  <code>value</code> might be the
volume or frequency of a sound.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">rampDown</span>(<span class="hljs-params">audio, value, startValue, duration</span>) </span>{
  value.setValueAtTime(startValue, audio.currentTime);
  value.exponentialRampToValueAtTime(<span class="hljs-number">0.01</span>, audio.currentTime + duration);
};</pre></div></div>
            
        </li>
        
        
        <li id="section-48">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-48">&#182;</a>
              </div>
              <p><strong>createAmplifier()</strong> returns a sound node that controls the volume
of the sound entering it.  The volume is started at <code>startValue</code>
and ramped down in <code>duration</code> seconds to almost <code>0</code>.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createAmplifier</span>(<span class="hljs-params">audio, startValue, duration</span>) </span>{
  <span class="hljs-keyword">var</span> amplifier = audio.createGain();
  rampDown(audio, amplifier.gain, startValue, duration);
  <span class="hljs-keyword">return</span> amplifier;
};</pre></div></div>
            
        </li>
        
        
        <li id="section-49">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-49">&#182;</a>
              </div>
              <p><strong>chain()</strong> connects an array of <code>soundNodes</code> into a chain.  If
there are three nodes in <code>soundNodes</code>, the output of the first will
be the input to the second, and the output of the second will be
the input to the third.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">chain</span>(<span class="hljs-params">soundNodes</span>) </span>{
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; soundNodes.length - <span class="hljs-number">1</span>; i++) {
    soundNodes[i].connect(soundNodes[i + <span class="hljs-number">1</span>]);
  }
};</pre></div></div>
            
        </li>
        
        
        <li id="section-50">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-50">&#182;</a>
              </div>
              <p><strong>createTrack()</strong> returns an object that represents a track.  This
track contains an array of 16 steps.  Each of these are either on
(<code>true</code>) or off (<code>false</code>).  It contains <code>color</code>, the color to draw
buttons when they are on.  It contains <code>playSound</code>, the function
that plays the sound of the track.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createTrack</span>(<span class="hljs-params">color, playSound</span>) </span>{
  <span class="hljs-keyword">var</span> steps = [];
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">16</span>; i++) {
    steps.push(<span class="hljs-literal">false</span>);
  }

  <span class="hljs-keyword">return</span> { steps: steps, color: color, playSound: playSound };
};

<span class="hljs-keyword">var</span> BUTTON_SIZE = <span class="hljs-number">26</span>;</pre></div></div>
            
        </li>
        
        
        <li id="section-51">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-51">&#182;</a>
              </div>
              <p><strong>buttonPosition()</strong> returns the pixel coordinates of the button at
<code>column</code> and <code>row</code>.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">buttonPosition</span>(<span class="hljs-params">column, row</span>) </span>{
  <span class="hljs-keyword">return</span> {
    x: BUTTON_SIZE / <span class="hljs-number">2</span> + column * BUTTON_SIZE * <span class="hljs-number">1.5</span>,
    y: BUTTON_SIZE / <span class="hljs-number">2</span> + row * BUTTON_SIZE * <span class="hljs-number">1.5</span>
  };
};</pre></div></div>
            
        </li>
        
        
        <li id="section-52">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-52">&#182;</a>
              </div>
              <p><strong>drawButton()</strong> draws a button in <code>color</code> at <code>column</code> and <code>row</code>.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drawButton</span>(<span class="hljs-params">screen, column, row, color</span>) </span>{
  <span class="hljs-keyword">var</span> position = buttonPosition(column, row);
  screen.fillStyle = color;
  screen.fillRect(position.x, position.y, BUTTON_SIZE, BUTTON_SIZE);
};</pre></div></div>
            
        </li>
        
        
        <li id="section-53">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-53">&#182;</a>
              </div>
              <p><strong>drawTracks()</strong> draws the tracks in the drum machine.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drawTracks</span>(<span class="hljs-params">screen, data</span>) </span>{
  data.tracks.forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">track, row</span>) </span>{
    track.steps.forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">on, column</span>) </span>{
      drawButton(screen,
                 column,
                 row,
                 on ? track.color : <span class="hljs-string">"lightgray"</span>);
    });
  });
};</pre></div></div>
            
        </li>
        
        
        <li id="section-54">
            <div class="annotation">
              
              <div class="pilwrap ">
                <a class="pilcrow" href="#section-54">&#182;</a>
              </div>
              <p><strong>isPointInButton()</strong> returns true if <code>p</code>, the coordinates of a
mouse click, are inside the button at <code>column</code> and <code>row</code>.</p>

            </div>
            
            <div class="content"><div class='highlight'><pre><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isPointInButton</span>(<span class="hljs-params">p, column, row</span>) </span>{
  <span class="hljs-keyword">var</span> b = buttonPosition(column, row);
  <span class="hljs-keyword">return</span> !(p.x &lt; b.x ||
           p.y &lt; b.y ||
           p.x &gt; b.x + BUTTON_SIZE ||
           p.y &gt; b.y + BUTTON_SIZE);
};</pre></div></div>
            
        </li>
        
    </ul>
  </div>
</body>
</html>
