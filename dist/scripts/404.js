!function(A,g,t,Q){var i;A.webFontTxtInst={};var a=0,I=0,s=[],o=[];A.properties={width:1920,height:1080,fps:30,opacity:1,webfonts:{},manifest:[{src:context+"images/unicorn-bob.png",id:"UnicornBob"},{src:context+"images/dynamic-clouds.png",id:"dynamic-clouds"}]},A.ssMetadata=[{name:"dynamic-clouds",frames:[[751,819,149,525],[0,0,893,817],[0,819,749,558]]}],A.updateListCache=function(A){for(var g=0;g<A.length;g++)A[g].cacheCanvas&&A[g].updateCache()},A.addElementsToCache=function(A,g){for(var t=A;t!=exportRoot&&-1==g.indexOf(t);)t=t.parent;if(t!=exportRoot)for(var Q=A,i=g.indexOf(t);Q!=t;)g.splice(i,0,Q),Q=Q.parent,i++;else for(t=A;t!=exportRoot;)g.push(t),t=t.parent},A.gfontAvailable=function(g,t){A.properties.webfonts[g]=!0;for(var Q=A.webFontTxtInst&&A.webFontTxtInst[g]||[],i=0;i<Q.length;++i)A.addElementsToCache(Q[i],s);++I==t&&A.updateListCache(s)},A.tfontAvailable=function(g,t){A.properties.webfonts[g]=!0;for(var Q=A.webFontTxtInst&&A.webFontTxtInst[g]||[],i=0;i<Q.length;++i)A.addElementsToCache(Q[i],o);++a==t&&A.updateListCache(o)},(A.Cloudogu_Page_404_Strich=function(){this.spriteSheet=Q["dynamic-clouds"],this.gotoAndStop(0)}).prototype=i=new t.Sprite,(A.Cloudogu_Page_404_Wolke_1=function(){this.spriteSheet=Q["dynamic-clouds"],this.gotoAndStop(1)}).prototype=i=new t.Sprite,(A.Cloudogu_Page_404_Wolke_allein=function(){this.spriteSheet=Q["dynamic-clouds"],this.gotoAndStop(2)}).prototype=i=new t.Sprite,(A.UnicornBob=function(){this.initialize(g.UnicornBob)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,2208,2517),(A.Wolkedynamisch=function(g,Q,i){this.initialize(g,Q,i,{}),this.instance=new A.Cloudogu_Page_404_Wolke_allein,this.instance.parent=this,this.instance.setTransform(-29.8,32.4,.615,.596,-5.7),this.timeline.addTween(t.Tween.get(this.instance).wait(1))}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(-29.8,-13.7,491.9,377.2),(A.Pupille=function(A,g,Q){this.initialize(A,g,Q,{}),this.shape=new t.Shape,this.shape.graphics.f().s("#000066").ss(1,1,1).p("AD2gHQAAAHgGAGQgGAHgJAAQgJAAgHgHQgGgGAAgHQAAgJAGgGQAHgGAJAAQAJAAAGAGQAGAGAAAJgAjKAHQAAAKgHAGQgGAGgJAAQgJAAgGgGQgGgGAAgKQAAgHAGgGQAGgGAJAAQAJAAAGAGQAHAGAAAHg"),this.shape.setTransform(24.7,3),this.shape_1=new t.Shape,this.shape_1.graphics.f("#000066").s().p("AjvAWQgGgGAAgIQAAgIAGgGQAGgGAJAAQAJAAAGAGQAHAGAAAIQAAAIgHAGQgGAHgJAAQgJAAgGgHgADRAHQgGgGAAgHQAAgKAGgGQAHgGAJAAQAJAAAGAGQAGAGAAAKQAAAHgGAGQgGAGgJAAQgJAAgHgGg"),this.shape_1.setTransform(24.7,3),this.timeline.addTween(t.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1))}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(-1,-1,51.4,7.9),(A.Augenweiß=function(A,g,Q){this.initialize(A,g,Q,{}),this.shape=new t.Shape,this.shape.graphics.rf(["#FFFFFF","#CCCCCC"],[.816,1],0,0,0,0,0,18.9).s().p("Ag4CtQgegKgFg6QgEg6AYhGQAYhIAmgrQAlgsAeAKQAeAKAEA6QAEAtgOA2IgJAdQgPAsgUAiQgNAVgPAQQgdAkgZAAQgHAAgFgCg"),this.shape.setTransform(9.3,24.3),this.shape_1=new t.Shape,this.shape_1.graphics.rf(["#FFFFFF","#CCCCCC"],[.816,1],.1,0,0,.1,0,38).s().p("AhNC7Qg2gygShcQgQhaAghNQAghOA+gUQA9gRA3AzQAsAnATBAQAGASADAUQALA2gIA1QgGAfgMAeQghBOg+ATQgQAFgQAAQgqAAgqgmg"),this.shape_1.setTransform(60.1,22.6),this.timeline.addTween(t.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1))}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(0,0,75.8,45.1),(A._404_page_not_Fount_thml5=function(g,Q,i){null==i&&(i=!1),this.initialize(g,Q,i,{}),this.shape=new t.Shape,this.shape.graphics.f("#FFFFFF").s().p("ADtP1QgZgDgQgGQgPgHgEgHQgHgKAAgMIAAmoIs1AAQgUAAgMgEQgMgFgLgNQgKgMgEgXQgEgYABglQAAgeACgXQABgXAFgTQAEgUAIgRQAIgTAKgUILNzGQAHgNAQgJQAOgJAZgHQAXgGAigBQAkgDAwAAQA0AAAnAEQAmADAYAHQAZAGANALQAMAJAAAOIAAUEIDjAAQAaAAASAcQAQAbAAA4QAAAzgQAeQgQAdgcAAIjjAAIAAGoQAAAMgHAKQgFAHgRAHQgRAGgYADQgbADgoAAQgmAAgagDgAnfFDIKJAAIAAxPIgDAAg"),this.shape.setTransform(795.4,591.8),this.shape_1=new t.Shape,this.shape_1.graphics.f("#FFFFFF").s().p("AlTPKQiChFhQiCQhPiFghi/QgijCAAj5QAAjkAli/QAmjCBUiJQBUiLCJhKQCJhNDFABQDAAACCBEQCCBDBPCFQBQCCAiDBQAgDAAAD5QAADmgjDAQgmC/hUCKQhVCKiJBMQiJBKjHAAQi+AAiChCgAjRryQhTA/gvBsQgwBtgRCTQgRCTAACnQAADgAXCfQAYCdAzBkQAyBkBPAtQBOAtBwAAQBVAABDgcQBCgcAwgzQAvg2AfhIQAfhKAThYQAShZAIhnQAGhpAAhvQAAiWgKh4QgLh3gVhcQgVhcghhCQgihDgvgqQgvgrg7gTQg9gUhKAAQiDAAhSA+g"),this.shape_1.setTransform(634.7,591.8),this.shape_2=new t.Shape,this.shape_2.graphics.f("#FFFFFF").s().p("ADtP1QgZgDgPgGQgQgHgFgHQgGgKAAgMIAAmoIs2AAQgSAAgNgEQgMgFgLgNQgKgMgEgXQgDgYgBglQAAgeACgXQACgXAEgTQAFgUAIgRQAIgTAKgUILMzGQAJgNAPgJQAOgJAZgHQAXgGAjgBQAjgDAxAAQAzAAAnAEQAnADAXAHQAZAGAMALQANAJAAAOIAAUEIDjAAQAbAAARAcQAPAbAAA4QAAAzgPAeQgQAdgcAAIjjAAIAAGoQAAAMgGAKQgHAHgRAHQgPAGgZADQgaADgpAAQglAAgbgDgAnfFDIKJAAIAAxPIgDAAg"),this.shape_2.setTransform(472.2,591.8),this.shape_3=new t.Shape,this.shape_3.graphics.f("#FFFFFF").s().p("AgyCcQgPgKgLgPQgKgPgFgVQgEgVgBgXQAAgbAHgVQAFgVAMgPQALgPASgJQAQgIAWAAQARAAAPAIQAPAIAPAPIAAh6IACgDIADgDIAGgBIAJAAIAKAAIAFABIAEADIABADIAAE2IgBAEIgDACIgFABIgIAAIgJAAIgFgBIgDgCIgBgEIAAgcQgRATgSAJQgSALgSAAQgYgBgRgIgAgagZQgLAHgGALQgHAKgDAOQgCAPAAAPQAAAQACAPQADAQAGAMQAFALALAHQAKAIAPAAQAGAAAHgCQAHgDAIgEQAHgFAJgJQAIgHAIgMIAAhUQgPgSgPgJQgOgLgOAAQgPAAgKAHg"),this.shape_3.setTransform(851,736.4),this.shape_4=new t.Shape,this.shape_4.graphics.f("#FFFFFF").s().p("AA9ByIgFgCIgDgCIgBgDIAAh6QAAgSgDgLQgDgLgFgIQgGgIgIgEQgJgEgLgBQgNAAgOALQgPAKgQAUIAACSIgBADIgDACIgGACIgJAAIgKAAIgFgCIgDgCIgBgDIAAjSIAAgDIADgBQACgCAEAAIAIAAIAJAAQADAAACACIADABIABADIAAAdQARgVASgJQASgJAQAAQAVAAAOAHQAPAIAJALQAJAMAEAQQADARAAAWIAAB/IgBADIgDACIgGACIgJAAIgKAAg"),this.shape_4.setTransform(826.5,741.2),this.shape_5=new t.Shape,this.shape_5.graphics.f("#FFFFFF").s().p("AgxBrQgPgHgIgMQgKgMgEgQQgDgRAAgXIAAh+IABgDIACgCQADgBAEAAIAJgBIAKABQADAAADABIADACIAAADIAAB5QABATACALQADALAFAIQAGAIAJAEQAIAEALAAQANAAAOgKQAOgKARgUIAAiSIABgDIACgCQADgBAEAAIAJgBIAKABQADAAACABIAEACIABADIAADRIgBAEIgDACIgFABIgJABIgIgBIgGgBIgDgCIgBgEIAAgbQgRATgSAKQgSAJgQAAQgVAAgOgHg"),this.shape_5.setTransform(801.3,741.5),this.shape_6=new t.Shape,this.shape_6.graphics.f("#FFFFFF").s().p("AguBsQgTgIgNgPQgNgOgGgWQgHgUAAgbQAAgYAHgWQAHgVANgRQANgPAVgIQATgKAaABQAZgBAUAJQAUAHANAPQAMAOAHAWQAGAVAAAaQAAAYgHAWQgGAWgOAPQgOAQgTAJQgVAJgZAAQgagBgTgHgAgbhMQgNAGgIALQgIAMgEAPQgEAPAAARQAAAQAEAPQACAQAIALQAHAMANAGQANAHARAAQAQAAANgGQAMgHAIgLQAJgKADgQQAEgPAAgSQAAgPgDgQQgEgOgHgMQgHgMgNgGQgMgHgSAAQgQAAgMAGg"),this.shape_6.setTransform(776.1,741.3),this.shape_7=new t.Shape,this.shape_7.graphics.f("#FFFFFF").s().p("AgWCkIgHgCIgCgCIgBgDIAAi3IgfAAQgDAAgCgEQgCgEAAgIIABgHIABgFIACgDIADgBIAfAAIAAgWQAAgWADgQQAEgQAJgKQAJgKALgEQAMgFARAAIARABIALAEIAGADIACADIABAGIABAHIgBAIIgBAEIgBACIgCABIgFgBIgFgDIgJgCIgLgBQgJAAgGADQgGACgDAGQgFAGgBAKQgBAJAAAOIAAAXIAuAAIAEABIACADIABAFIABAHQAAAIgCAEQgCAEgEAAIguAAIAAC3IgBADIgDACIgEACIgKAAIgJAAg"),this.shape_7.setTransform(757.8,736.1),this.shape_8=new t.Shape,this.shape_8.graphics.f("#FFFFFF").s().p("AABCKQgJgFgIgJQgHgJgEgNQgDgNAAgTIAAh5IgeAAQgDAAgCgEQgDgEAAgIIACgHIABgFIACgDIADgBIAeAAIAAgyIABgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIAGgBIAJgBIAKABIADABQABAAABABQAAAAABAAQAAABAAAAQAAAAABABIABADIAAAyIA2AAIADABIADADIABAFIABAHQAAAIgCAEQgDAEgDAAIg2AAIAAB0QAAAVAGAMQAGALARAAIAKgBIAHgDIAGgCIAEgBIACABIACACIABAEIABAHIgBALIgDAGIgGAEIgIACIgKACIgMABQgQAAgMgEg"),this.shape_8.setTransform(730.5,738.6),this.shape_9=new t.Shape,this.shape_9.graphics.f("#FFFFFF").s().p("AguBsQgUgIgMgPQgNgOgGgWQgHgUAAgbQAAgYAHgWQAHgVANgRQANgPAVgIQATgKAaABQAagBATAJQAUAHAMAPQANAOAHAWQAGAVAAAaQAAAYgHAWQgHAWgNAPQgOAQgTAJQgVAJgZAAQgagBgTgHgAgchMQgMAGgIALQgIAMgEAPQgEAPAAARQAAAQAEAPQADAQAHALQAIAMAMAGQAMAHASAAQAQAAANgGQAMgHAIgLQAJgKADgQQAEgPAAgSQAAgPgEgQQgDgOgHgMQgHgMgNgGQgMgHgSAAQgQAAgNAGg"),this.shape_9.setTransform(710.2,741.3),this.shape_10=new t.Shape,this.shape_10.graphics.f("#FFFFFF").s().p("AA9ByIgFgCIgDgCIgBgDIAAh6QAAgSgDgLQgDgLgFgIQgGgIgIgEQgJgEgLgBQgNAAgOALQgPAKgQAUIAACSIgBADIgDACIgGACIgJAAIgKAAIgFgCIgDgCIgBgDIAAjSIAAgDIADgBQACgCAEAAIAIAAIAJAAQADAAACACIADABIABADIAAAdQARgVASgJQASgJAQAAQAVAAAOAHQAPAIAJALQAJAMAEAQQADARAAAWIAAB/IgBADIgDACIgGACIgJAAIgKAAg"),this.shape_10.setTransform(685,741.2),this.shape_11=new t.Shape,this.shape_11.graphics.f("#FFFFFF").s().p("AgjBsQgVgHgMgPQgOgOgHgVQgGgWAAgcQgBgaAIgVQAGgWAOgPQANgPASgIQATgIAVAAQAagBARAJQASAHALAOQALAOAFASQAGASgBAVIAAAHQAAAHgEADQgFAEgFABIiKAAQAAARAEAOQADAOAIAKQAJALANAEQAOAGARAAQAPAAALgCIAUgGIAPgFIAIgDIADABIACADIABAEIAAAHIAAAGIAAADIgCADIgCAEIgIADQgFADgLADIgXAFQgNACgPABQgYAAgTgIgAgWhOQgLAFgHAIQgHAKgEAMQgEALgBANIBxAAQABgegOgSQgOgRgcAAQgNAAgLAGg"),this.shape_11.setTransform(649.5,741.3),this.shape_12=new t.Shape,this.shape_12.graphics.f("#FFFFFF").s().p("AgvCYQgSgFgMgHQgLgIgFgKQgFgLAAgMQAAgIACgHQABgHAEgHQAEgGAGgGIANgMQgLgGgGgJQgFgJAAgKQAAgMAGgMQAFgLAJgJQgHgIgEgLQgFgLAAgQQAAgSAGgOQAHgOAKgKQALgKAPgFQAPgGASAAQAIAAAIACQAIAAAIACIA/AAQAEAAACAEQACAEAAAIQAAAIgCAEQgCAEgEAAIgeAAQAIAIAEAKQADAKAAALQAAATgGAOQgGAOgLAKQgLAJgPAFQgPAGgQAAQgNAAgLgEQgMgDgGgFQgFAEgCAFQgDAGAAAFQAAAIAIAFQAHAGANAAIA1ACQAQABANAEQANAEAKAHQAJAHAGAKQAFALAAAOQAAAOgGANQgGANgNAKQgMAKgUAGQgTAGgZAAQgZAAgSgEgAgwBCQgFAFgCAFQgDAFgBAFIgBAJQAAAQAPAIQAQAHAbAAQAQAAAMgDQALgEAIgFQAHgGADgHQADgHAAgIQAAgOgLgHQgLgIgTAAIg1gCQgHAGgFAFgAgYh5QgIADgGAHQgFAHgDAIQgDAJAAAJQAAAVAMAMQAMAMAVAAQAKAAAIgEQAIgDAGgHQAGgGACgJQADgIAAgJQAAgWgMgMQgMgMgUAAQgLAAgIAEg"),this.shape_12.setTransform(626.6,745.4),this.shape_13=new t.Shape,this.shape_13.graphics.f("#FFFFFF").s().p("AgqBvQgOgEgJgIQgKgJgFgMQgFgLAAgQQAAgRAHgOQAHgNAOgHQAOgIATgFQAUgEAXAAIAdAAIAAgQQAAgMgDgKQgDgJgFgGQgGgHgJgCQgJgEgNAAQgNAAgLAEQgMADgIAEIgOAHQgGAEgDAAIgDgBIgDgDIgBgEIgBgHIABgKQABgDADgDQADgDAIgEIASgHQAKgEAMgCQAMgDAKABQAXgBAPAGQAQAFAKAKQAKAKAFAPQAEAPAAATIAACMQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFABIgKABIgJgBIgGgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgVQgOAPgRAJQgRAHgRABQgRAAgNgFgAgLAMQgMADgIAFQgHAFgEAHQgEAIAAAJQAAARALAJQAKAKATAAQANAAANgIQANgHAPgQIAAgtIghAAQgPAAgLADg"),this.shape_13.setTransform(603.2,741.3),this.shape_14=new t.Shape,this.shape_14.graphics.f("#FFFFFF").s().p("AhRCYIgGgCQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBgBIgBgCIAAkWQAAgKAFgEQAFgEAGAAIBBAAIARABIAWADQAMAEANAHQAMAHAJALQAJALAFAOQAEAOAAARQAAAXgHASQgIASgNALQgOANgUAHQgVAHgaAAIgiAAIAABuIgBACIgEADIgFACIgKAAIgKAAgAgzACIAkAAQAQAAAMgCQANgFAHgJQAJgIAEgLQAEgMAAgOQAAgSgGgMQgIgNgJgGQgLgGgLgCIgTgBIglAAg"),this.shape_14.setTransform(582,737.4),this.shape_15=new t.Shape,this.shape_15.graphics.f("#FFFFFF").s().p("AgSAVQgGgFAAgQQAAgPAGgFQAFgGANAAQAOAAAFAGQAGAFAAAPQAAAQgGAFQgFAGgOAAQgNAAgFgGg"),this.shape_15.setTransform(562.6,749.9),this.shape_16=new t.Shape,this.shape_16.graphics.f("#FFFFFF").s().p("AgSAVQgGgFAAgQQAAgPAGgFQAFgGANAAQAOAAAFAGQAGAFAAAPQAAAQgGAFQgFAGgOAAQgNAAgFgGg"),this.shape_16.setTransform(550.5,749.9),this.shape_17=new t.Shape,this.shape_17.graphics.f("#FFFFFF").s().p("AgSAVQgGgFAAgQQAAgPAGgFQAFgGANAAQAOAAAFAGQAGAFAAAPQAAAQgGAFQgFAGgOAAQgNAAgFgGg"),this.shape_17.setTransform(538.4,749.9),this.shape_18=new t.Shape,this.shape_18.graphics.f("#FFFFFF").s().p("AgcByIgSgEIgOgHIgIgEQgDgDgBgEIgBgLIAAgIIABgFIACgDIADAAQADAAAFACIAMAHIASAIQAKACANAAQAIAAAIgBQAIgDAGgEQAGgEADgGQADgHAAgIQAAgJgFgGQgEgHgIgEQgHgFgKgDIgRgIIgTgJQgKgDgHgIQgIgGgEgLQgFgJAAgPQAAgMAFgMQAFgLAJgIQAKgJAOgFQAPgGARABIARABIAPADQAHACAFAEIAHADIADAEIABADIABAFIAAAFIAAAIIgBAFIgCACIgDABQgCAAgEgCQgEgEgGgCIgPgGQgJgCgLgBQgIABgHACQgIACgEAEQgFAEgCAGQgDAFAAAHQAAAKAFAFQAEAHAIAEIAPAJIAUAHIATAJQAKAEAHAHQAIAHAFAJQAEAKAAANQAAARgGAMQgGANgLAJQgLAIgPAFQgPAFgRAAQgLAAgKgCg"),this.shape_18.setTransform(523,741.3),this.shape_19=new t.Shape,this.shape_19.graphics.f("#FFFFFF").s().p("AgcByIgSgEIgOgHIgIgEQgDgDgBgEIgBgLIAAgIIABgFIACgDIADAAQADAAAFACIAMAHIASAIQAKACANAAQAIAAAIgBQAIgDAGgEQAGgEADgGQADgHAAgIQAAgJgFgGQgEgHgIgEQgHgFgKgDIgRgIIgTgJQgKgDgHgIQgIgGgEgLQgFgJAAgPQAAgMAFgMQAFgLAJgIQAKgJAOgFQAPgGARABIARABIAPADQAHACAFAEIAHADIADAEIABADIABAFIAAAFIAAAIIgBAFIgCACIgDABQgCAAgEgCQgEgEgGgCIgPgGQgJgCgLgBQgIABgHACQgIACgEAEQgFAEgCAGQgDAFAAAHQAAAKAFAFQAEAHAIAEIAPAJIAUAHIATAJQAKAEAHAHQAIAHAFAJQAEAKAAANQAAARgGAMQgGANgLAJQgLAIgPAFQgPAFgRAAQgLAAgKgCg"),this.shape_19.setTransform(504.2,741.3),this.shape_20=new t.Shape,this.shape_20.graphics.f("#FFFFFF").s().p("AgcByIgSgEIgOgHIgIgEQgDgDgBgEIgBgLIAAgIIABgFIACgDIADAAQADAAAFACIAMAHIASAIQAKACANAAQAIAAAIgBQAIgDAGgEQAGgEADgGQADgHAAgIQAAgJgFgGQgEgHgIgEQgHgFgKgDIgRgIIgTgJQgKgDgHgIQgIgGgEgLQgFgJAAgPQAAgMAFgMQAFgLAJgIQAKgJAOgFQAPgGARABIARABIAPADQAHACAFAEIAHADIADAEIABADIABAFIAAAFIAAAIIgBAFIgCACIgDABQgCAAgEgCQgEgEgGgCIgPgGQgJgCgLgBQgIABgHACQgIACgEAEQgFAEgCAGQgDAFAAAHQAAAKAFAFQAEAHAIAEIAPAJIAUAHIATAJQAKAEAHAHQAIAHAFAJQAEAKAAANQAAARgGAMQgGANgLAJQgLAIgPAFQgPAFgRAAQgLAAgKgCg"),this.shape_20.setTransform(485.5,741.3),this.shape_21=new t.Shape,this.shape_21.graphics.f("#FFFFFF").s().p("AhWCcIgGgCQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAklIAAgDIADgCIAGgBIAHAAIAJAAIAEABIADACIACADIAAAdQAJgKAJgHQAJgHAJgFQAJgFAKgCQAHgDALAAQAXAAAPAJQAQAJALAPQAKAQAFAUQAEAVAAAXQAAAcgFATQgHAXgLAPQgMAPgRAJQgRAIgWAAQgHAAgJgCQgHgCgIgEQgIgEgHgGIgQgOIAABpIgBAEIgDACIgGACIgJAAIgKAAgAgJh3QgHACgHAFQgIAFgIAHQgJAIgJAMIAABSQAQATAOAKQAPAKAOAAQAOAAALgGQALgIAFgLQAHgMAEgMQADgPAAgPQgBgQgCgPQgDgPgFgMQgHgMgKgGQgKgIgPAAQgGABgHACg"),this.shape_21.setTransform(464.5,745.4),this.shape_22=new t.Shape,this.shape_22.graphics.f("#FFFFFF").s().p("AhWCcIgFgCQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgEIAAklIABgDIADgCIAFgBIAIAAIAIAAIAGABIACACIABADIAAAdQAKgKAJgHQAJgHAJgFQAJgFAJgCQAIgDAKAAQAYAAAQAJQAPAJALAPQAKAQAEAUQAGAVAAAXQAAAcgHATQgFAXgMAPQgMAPgRAJQgRAIgWAAQgHAAgIgCQgJgCgHgEQgIgEgHgGIgQgOIAABpIgBAEIgDACIgGACIgKAAIgJAAgAgJh3QgHACgIAFQgHAFgIAHQgJAIgJAMIAABSQAQATAOAKQAPAKANAAQAPAAALgGQAKgIAGgLQAHgMADgMQADgPAAgPQAAgQgCgPQgDgPgGgMQgFgMgLgGQgKgIgPAAQgFABgIACg"),this.shape_22.setTransform(439.3,745.4),this.shape_23=new t.Shape,this.shape_23.graphics.f("#FFFFFF").s().p("AgvCSQgUgGgPgOQgPgPgIgVQgIgVAAgdIAAi5IABgEQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAGgBIAKgBIAKABIAGABIADACIABAEIAAC1QAAAUAFAQQAFAQAKALQAKAKAOAGQANAEAQAAQARAAAOgEQANgGAKgKQAJgKAGgQQAFgPAAgVIAAi2IAAgEQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAGgBIAKgBIAJABIAGABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAEIAAC2QAAAcgIAWQgJAWgPAPQgPAOgVAIQgWAIgZAAQgZAAgVgIg"),this.shape_23.setTransform(410.6,737.5),this.timeline.addTween(t.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},149).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},95).wait(1)),this.instance_1=new A.Pupille,this.instance_1.parent=this,this.instance_1.setTransform(1027.3,446.5,1,1,0,0,0,24.7,3),this.timeline.addTween(t.Tween.get(this.instance_1).wait(1).to({x:1027.2},0).wait(2).to({y:446.6},0).wait(1).to({x:1027.1},0).wait(1).to({y:446.7},0).wait(2).to({x:1027,y:446.8},0).wait(3).to({y:446.9},0).wait(1).to({x:1026.9},0).wait(1).to({y:447},0).wait(2).to({x:1026.8,y:447.1},0).wait(2).to({y:447.2},0).wait(2).to({x:1026.7},0).wait(1).to({y:447.3},0).wait(2).to({x:1026.6,y:447.4},0).wait(2).to({y:447.5},0).wait(1).to({x:1026.5},0).wait(1).to({y:447.6},0).wait(3).to({x:1026.4,y:447.7},0).wait(2).to({y:447.8},0).wait(1).to({x:1026.3},0).wait(1).to({y:447.9},0).wait(2).to({y:448},0).wait(1).to({x:1026.2},0).wait(2).to({y:448.1},0).wait(1).to({x:1026.1},0).wait(1).to({y:448.2},0).wait(2).to({x:1026,y:448.3},0).wait(3).to({y:448.4},0).wait(1).to({x:1025.9},0).wait(1).to({y:448.5},0).wait(2).to({x:1025.8,y:448.6},0).wait(2).to({y:448.7},0).wait(2).to({x:1025.7},0).wait(1).to({y:448.8},0).wait(2).to({x:1025.6,y:448.9},0).wait(2).to({y:449},0).wait(1).to({x:1025.5},0).wait(1).to({y:449.1},0).wait(3).to({x:1025.4,y:449.2},0).wait(2).to({y:449.3},0).wait(1).to({x:1025.3},0).wait(1).to({y:449.4},0).wait(2).to({y:449.5},0).wait(1).to({y:450},0).wait(1).to({y:450.5},0).wait(1).to({y:450.9},0).wait(1).to({y:451.5},0).wait(1).to({y:452},0).wait(1).to({y:452.4},0).wait(1).to({y:452.9},0).wait(1).to({y:453.5},0).wait(1).to({y:454},0).wait(1).to({y:454.5},0).wait(1).to({y:455.2},0).wait(1).to({y:456},0).wait(1).to({y:456.8},0).wait(1).to({y:457.6},0).wait(1).to({y:458.3},0).wait(1).to({y:459.1},0).wait(1).to({y:459.9},0).wait(1).to({y:460.7},0).wait(1).to({y:461.5},0).wait(1).to({y:461.9},0).wait(1).to({y:462.3},0).wait(1).to({y:462.6},0).wait(1).to({y:463.1},0).wait(1).to({y:463.5},0).wait(1).to({y:463.8},0).wait(1).to({y:464.2},0).wait(1).to({y:464.7},0).wait(1).to({y:465.1},0).wait(1).to({y:465.5},0).wait(1).to({y:465.7},0).wait(1).to({y:465.9},0).wait(1).to({y:466.1},0).wait(1).to({y:466.3},0).wait(1).to({y:466.6},0).wait(1).to({y:466.8},0).wait(1).to({y:467},0).wait(1).to({y:467.2},0).wait(1).to({y:467.5},0).wait(1).to({y:467.7},0).wait(1).to({y:467.9},0).wait(1).to({y:468.1},0).wait(1).to({y:468.3},0).wait(1).to({y:468.6},0).wait(1).to({y:468.8},0).wait(1).to({y:469},0).wait(1).to({y:469.2},0).wait(1).to({y:469.5},0).wait(34).to({x:1030.3,y:449.5},0).wait(96)),this.instance_2=new A.Augenweiß,this.instance_2.parent=this,this.instance_2.setTransform(1033.9,454.6,1,1,0,0,0,37.9,22.6),this.timeline.addTween(t.Tween.get(this.instance_2).wait(245)),this.instance_3=new A.Cloudogu_Page_404_Strich,this.instance_3.parent=this,this.instance_3.setTransform(630.1,-13.6,.485,.532),this.timeline.addTween(t.Tween.get(this.instance_3).wait(245)),this.instance_4=new A.UnicornBob,this.instance_4.parent=this,this.instance_4.setTransform(981,319,.229,.232),this.timeline.addTween(t.Tween.get(this.instance_4).wait(245)),this.instance_5=new A.Wolkedynamisch,this.instance_5.parent=this,this.instance_5.setTransform(656.2,307.9,1,1,0,0,0,216.1,174.8),this.timeline.addTween(t.Tween.get(this.instance_5).wait(1).to({regY:174.9,rotation:.4,x:655.6,y:308},0).wait(1).to({rotation:.7,x:655},0).wait(1).to({rotation:1.1,x:654.4},0).wait(1).to({rotation:1.4,x:653.8},0).wait(1).to({rotation:1.8,x:653.2},0).wait(1).to({rotation:2.2,x:652.6},0).wait(1).to({rotation:2.5,x:652},0).wait(1).to({rotation:2.9,x:651.4},0).wait(1).to({rotation:3.2,x:650.8},0).wait(1).to({rotation:3.6,x:650.2},0).wait(1).to({rotation:3.9,x:649.6},0).wait(1).to({rotation:4.3,x:649},0).wait(1).to({rotation:4.7,x:648.4},0).wait(1).to({rotation:5,x:647.8},0).wait(1).to({rotation:5.4,x:647.2},0).wait(1).to({rotation:5.7,x:646.6},0).wait(1).to({rotation:6.1,x:646},0).wait(1).to({rotation:5.8,x:646.4,y:308.1},0).wait(1).to({rotation:5.5,x:646.8,y:308.2},0).wait(1).to({rotation:5.2,x:647.1},0).wait(1).to({rotation:4.9,x:647.5,y:308.3},0).wait(1).to({rotation:4.6,x:647.9,y:308.4},0).wait(1).to({rotation:4.4,x:648.3,y:308.5},0).wait(1).to({rotation:4.1,x:648.6},0).wait(1).to({rotation:3.8,x:649,y:308.6},0).wait(1).to({rotation:3.5,x:649.3,y:308.7},0).wait(1).to({rotation:3.2,x:649.7,y:308.8},0).wait(1).to({rotation:2.9,x:650.1,y:308.9},0).wait(1).to({rotation:2.6,x:650.4},0).wait(1).to({rotation:2.3,x:650.8,y:309},0).wait(1).to({rotation:2,x:651.2,y:309.1},0).wait(1).to({rotation:1.7,x:651.6,y:309.2},0).wait(1).to({rotation:1.4,x:652,y:309.3},0).wait(1).to({rotation:1.1,x:652.3},0).wait(1).to({rotation:.8,x:652.6,y:309.4},0).wait(1).to({rotation:.6,x:653,y:309.5},0).wait(1).to({rotation:.3,x:653.4,y:309.6},0).wait(1).to({rotation:0,x:653.8,y:309.7},0).wait(1).to({rotation:-.3,x:654.1},0).wait(1).to({rotation:-.6,x:654.5,y:309.8},0).wait(1).to({rotation:-.9,x:654.8,y:309.9},0).wait(1).to({rotation:-1.2,x:655.2,y:310},0).wait(1).to({rotation:-1.5,x:655.6,y:310.1},0).wait(1).to({rotation:-1.8,x:656},0).wait(1).to({rotation:-2.1,x:656.3,y:310.2},0).wait(1).to({rotation:-2.4,x:656.7,y:310.3},0).wait(1).to({rotation:-2.7,x:657.1},0).wait(1).to({rotation:-2.9,x:657.5,y:310.4},0).wait(1).to({rotation:-3.2,x:657.8,y:310.5},0).wait(1).to({rotation:-3.5,x:658.2,y:310.6},0).wait(1).to({rotation:-3.8,x:658.5,y:310.7},0).wait(1).to({rotation:-4.1,x:658.9},0).wait(1).to({rotation:-4.4,x:659.3,y:310.8},0).wait(1).to({rotation:-4.7,x:659.6,y:310.9},0).wait(1).to({rotation:-5,x:660.1,y:311},0).wait(1).to({rotation:-5.3,x:660.4},0).wait(1).to({rotation:-5.6,x:660.8,y:311.1},0).wait(1).to({rotation:-5.9,x:661.1,y:311.2},0).wait(1).to({rotation:-6.2,x:661.5,y:311.3},0).wait(1).to({rotation:-6.4,x:661.9,y:311.4},0).wait(1).to({rotation:-6.7,x:662.3,y:311.5},0).wait(1).to({rotation:-7,x:662.6,y:311.6},0).wait(1).to({rotation:-7.3,x:663},0).wait(1).to({rotation:-7.6,x:663.4,y:311.7},0).wait(1).to({rotation:-7.9,x:663.7,y:311.8},0).wait(1).to({rotation:-8.2,x:664.1,y:311.9},0).wait(1).to({rotation:-8.5,x:664.5,y:312},0).wait(1).to({rotation:-8.8,x:664.8},0).wait(1).to({y:319},0).wait(1).to({y:326},0).wait(1).to({y:333},0).wait(1).to({y:339.9},0).wait(1).to({y:346.9},0).wait(1).to({y:353.9},0).wait(1).to({y:361.8},0).wait(1).to({y:369.7},0).wait(1).to({y:377.6},0).wait(1).to({y:385.5},0).wait(1).to({y:393.4},0).wait(1).to({y:401.3},0).wait(1).to({y:409.2},0).wait(1).to({y:417.1},0).wait(1).to({y:425},0).wait(1).to({y:432.9},0).wait(1).to({y:440.8},0).wait(1).to({y:451.8},0).wait(1).to({y:462.8},0).wait(1).to({y:473.8},0).wait(1).to({y:484.9},0).wait(1).to({y:495.9},0).wait(1).to({y:507},0).wait(1).to({y:518},0).wait(1).to({y:529},0).wait(1).to({y:540.1},0).wait(1).to({y:551.1},0).wait(1).to({y:575.4},0).wait(1).to({y:599.7},0).wait(1).to({y:624},0).wait(1).to({y:648.4},0).wait(1).to({y:672.7},0).wait(1).to({y:697},0).wait(1).to({y:721.3},0).wait(1).to({y:745.7},0).wait(1).to({y:770},0).wait(1).to({y:794.3},0).wait(1).to({y:811.9},0).wait(1).to({y:829.5},0).wait(1).to({y:847.1},0).wait(1).to({y:864.7},0).wait(1).to({y:882.4},0).wait(1).to({y:900},0).wait(1).to({y:917.6},0).wait(1).to({y:935.2},0).wait(1).to({y:952.8},0).wait(1).to({y:970.4},0).wait(1).to({y:988.1},0).wait(1).to({y:1005.7},0).wait(1).to({y:1023.3},0).wait(1).to({y:1040.9},0).wait(1).to({y:1058.5},0).wait(1).to({y:1076.1},0).wait(1).to({y:1093.7},0).wait(1).to({y:1111.4},0).wait(1).to({y:1129},0).wait(1).to({y:1146.6},0).wait(1).to({y:1164.2},0).wait(119)),this.instance_6=new A.Cloudogu_Page_404_Wolke_1,this.instance_6.parent=this,this.instance_6.setTransform(49.4,-13.6,.612,.612),this.timeline.addTween(t.Tween.get(this.instance_6).wait(245))}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(949.1,526.4,1932.3,1101.4)}(lib=lib||{},images=images||{},createjs=createjs||{},ss=ss||{});var lib,images,createjs,ss;