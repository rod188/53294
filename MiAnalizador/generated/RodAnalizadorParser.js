// Generated from c:/Users/PC/Analizador - Roderick Apaza/MiAnalizador/RodAnalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RodAnalizadorListener from './RodAnalizadorListener.js';
import RodAnalizadorVisitor from './RodAnalizadorVisitor.js';

const serializedATN = [4,1,18,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,
28,8,1,10,1,12,1,31,9,1,1,2,1,2,1,2,1,2,3,2,37,8,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,
7,1,8,1,8,1,8,1,8,5,8,67,8,8,10,8,12,8,70,9,8,1,8,1,8,1,9,1,9,1,9,0,0,10,
0,2,4,6,8,10,12,14,16,18,0,1,1,0,15,16,70,0,20,1,0,0,0,2,29,1,0,0,0,4,36,
1,0,0,0,6,38,1,0,0,0,8,44,1,0,0,0,10,50,1,0,0,0,12,55,1,0,0,0,14,60,1,0,
0,0,16,62,1,0,0,0,18,73,1,0,0,0,20,21,5,5,0,0,21,22,3,18,9,0,22,23,5,7,0,
0,23,24,3,2,1,0,24,25,5,8,0,0,25,1,1,0,0,0,26,28,3,4,2,0,27,26,1,0,0,0,28,
31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,29,1,0,0,0,32,37,
3,8,4,0,33,37,3,10,5,0,34,37,3,12,6,0,35,37,3,6,3,0,36,32,1,0,0,0,36,33,
1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,5,1,0,0,0,38,39,5,1,0,0,39,40,5,9,
0,0,40,41,3,16,8,0,41,42,5,10,0,0,42,43,5,6,0,0,43,7,1,0,0,0,44,45,5,2,0,
0,45,46,5,9,0,0,46,47,3,14,7,0,47,48,5,10,0,0,48,49,5,6,0,0,49,9,1,0,0,0,
50,51,5,3,0,0,51,52,5,9,0,0,52,53,5,10,0,0,53,54,5,6,0,0,54,11,1,0,0,0,55,
56,5,4,0,0,56,57,5,9,0,0,57,58,5,10,0,0,58,59,5,6,0,0,59,13,1,0,0,0,60,61,
7,0,0,0,61,15,1,0,0,0,62,63,5,11,0,0,63,68,3,14,7,0,64,65,5,13,0,0,65,67,
3,14,7,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,71,1,
0,0,0,70,68,1,0,0,0,71,72,5,12,0,0,72,17,1,0,0,0,73,74,5,14,0,0,74,19,1,
0,0,0,3,29,36,68];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RodAnalizadorParser extends antlr4.Parser {

    static grammarFileName = "RodAnalizador.g4";
    static literalNames = [ null, "'crear'", "'empujar'", "'sacar'", "'mirar'", 
                            "'pila'", "'!'", "'{'", "'}'", "'('", "')'", 
                            "'['", "']'", "','" ];
    static symbolicNames = [ null, "CREATE", "PUSH", "POP", "PEEK", "STACK", 
                             "EXCLAMATION", "LBRACE", "RBRACE", "LPAREN", 
                             "RPAREN", "LBRACKET", "RBRACKET", "COMMA", 
                             "ID", "NUMBER", "STRING", "COMMENT", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "push", 
                         "pop", "peek", "valor", "lista", "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RodAnalizadorParser.ruleNames;
        this.literalNames = RodAnalizadorParser.literalNames;
        this.symbolicNames = RodAnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RodAnalizadorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(RodAnalizadorParser.STACK);
	        this.state = 21;
	        this.nombre();
	        this.state = 22;
	        this.match(RodAnalizadorParser.LBRACE);
	        this.state = 23;
	        this.comandos();
	        this.state = 24;
	        this.match(RodAnalizadorParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RodAnalizadorParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0)) {
	            this.state = 26;
	            this.operacion();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RodAnalizadorParser.RULE_operacion);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.push();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.pop();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.peek();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
	            this.crear();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RodAnalizadorParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(RodAnalizadorParser.CREATE);
	        this.state = 39;
	        this.match(RodAnalizadorParser.LPAREN);
	        this.state = 40;
	        this.lista();
	        this.state = 41;
	        this.match(RodAnalizadorParser.RPAREN);
	        this.state = 42;
	        this.match(RodAnalizadorParser.EXCLAMATION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RodAnalizadorParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(RodAnalizadorParser.PUSH);
	        this.state = 45;
	        this.match(RodAnalizadorParser.LPAREN);
	        this.state = 46;
	        this.valor();
	        this.state = 47;
	        this.match(RodAnalizadorParser.RPAREN);
	        this.state = 48;
	        this.match(RodAnalizadorParser.EXCLAMATION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RodAnalizadorParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(RodAnalizadorParser.POP);
	        this.state = 51;
	        this.match(RodAnalizadorParser.LPAREN);
	        this.state = 52;
	        this.match(RodAnalizadorParser.RPAREN);
	        this.state = 53;
	        this.match(RodAnalizadorParser.EXCLAMATION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RodAnalizadorParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(RodAnalizadorParser.PEEK);
	        this.state = 56;
	        this.match(RodAnalizadorParser.LPAREN);
	        this.state = 57;
	        this.match(RodAnalizadorParser.RPAREN);
	        this.state = 58;
	        this.match(RodAnalizadorParser.EXCLAMATION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RodAnalizadorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RodAnalizadorParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(RodAnalizadorParser.LBRACKET);
	        this.state = 63;
	        this.valor();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 64;
	            this.match(RodAnalizadorParser.COMMA);
	            this.state = 65;
	            this.valor();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
	        this.match(RodAnalizadorParser.RBRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RodAnalizadorParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(RodAnalizadorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RodAnalizadorParser.EOF = antlr4.Token.EOF;
RodAnalizadorParser.CREATE = 1;
RodAnalizadorParser.PUSH = 2;
RodAnalizadorParser.POP = 3;
RodAnalizadorParser.PEEK = 4;
RodAnalizadorParser.STACK = 5;
RodAnalizadorParser.EXCLAMATION = 6;
RodAnalizadorParser.LBRACE = 7;
RodAnalizadorParser.RBRACE = 8;
RodAnalizadorParser.LPAREN = 9;
RodAnalizadorParser.RPAREN = 10;
RodAnalizadorParser.LBRACKET = 11;
RodAnalizadorParser.RBRACKET = 12;
RodAnalizadorParser.COMMA = 13;
RodAnalizadorParser.ID = 14;
RodAnalizadorParser.NUMBER = 15;
RodAnalizadorParser.STRING = 16;
RodAnalizadorParser.COMMENT = 17;
RodAnalizadorParser.WS = 18;

RodAnalizadorParser.RULE_programa = 0;
RodAnalizadorParser.RULE_comandos = 1;
RodAnalizadorParser.RULE_operacion = 2;
RodAnalizadorParser.RULE_crear = 3;
RodAnalizadorParser.RULE_push = 4;
RodAnalizadorParser.RULE_pop = 5;
RodAnalizadorParser.RULE_peek = 6;
RodAnalizadorParser.RULE_valor = 7;
RodAnalizadorParser.RULE_lista = 8;
RodAnalizadorParser.RULE_nombre = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_programa;
    }

	STACK() {
	    return this.getToken(RodAnalizadorParser.STACK, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LBRACE() {
	    return this.getToken(RodAnalizadorParser.LBRACE, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	RBRACE() {
	    return this.getToken(RodAnalizadorParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_operacion;
    }

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_crear;
    }

	CREATE() {
	    return this.getToken(RodAnalizadorParser.CREATE, 0);
	};

	LPAREN() {
	    return this.getToken(RodAnalizadorParser.LPAREN, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	RPAREN() {
	    return this.getToken(RodAnalizadorParser.RPAREN, 0);
	};

	EXCLAMATION() {
	    return this.getToken(RodAnalizadorParser.EXCLAMATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_push;
    }

	PUSH() {
	    return this.getToken(RodAnalizadorParser.PUSH, 0);
	};

	LPAREN() {
	    return this.getToken(RodAnalizadorParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(RodAnalizadorParser.RPAREN, 0);
	};

	EXCLAMATION() {
	    return this.getToken(RodAnalizadorParser.EXCLAMATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitPush(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitPush(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_pop;
    }

	POP() {
	    return this.getToken(RodAnalizadorParser.POP, 0);
	};

	LPAREN() {
	    return this.getToken(RodAnalizadorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(RodAnalizadorParser.RPAREN, 0);
	};

	EXCLAMATION() {
	    return this.getToken(RodAnalizadorParser.EXCLAMATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitPop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitPop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_peek;
    }

	PEEK() {
	    return this.getToken(RodAnalizadorParser.PEEK, 0);
	};

	LPAREN() {
	    return this.getToken(RodAnalizadorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(RodAnalizadorParser.RPAREN, 0);
	};

	EXCLAMATION() {
	    return this.getToken(RodAnalizadorParser.EXCLAMATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitPeek(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitPeek(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_valor;
    }

	NUMBER() {
	    return this.getToken(RodAnalizadorParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(RodAnalizadorParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_lista;
    }

	LBRACKET() {
	    return this.getToken(RodAnalizadorParser.LBRACKET, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	RBRACKET() {
	    return this.getToken(RodAnalizadorParser.RBRACKET, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RodAnalizadorParser.COMMA);
	    } else {
	        return this.getToken(RodAnalizadorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RodAnalizadorParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(RodAnalizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RodAnalizadorListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RodAnalizadorVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RodAnalizadorParser.ProgramaContext = ProgramaContext; 
RodAnalizadorParser.ComandosContext = ComandosContext; 
RodAnalizadorParser.OperacionContext = OperacionContext; 
RodAnalizadorParser.CrearContext = CrearContext; 
RodAnalizadorParser.PushContext = PushContext; 
RodAnalizadorParser.PopContext = PopContext; 
RodAnalizadorParser.PeekContext = PeekContext; 
RodAnalizadorParser.ValorContext = ValorContext; 
RodAnalizadorParser.ListaContext = ListaContext; 
RodAnalizadorParser.NombreContext = NombreContext; 
