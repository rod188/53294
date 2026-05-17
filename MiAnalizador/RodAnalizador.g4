grammar RodAnalizador;

//Parser
programa: STACK nombre LBRACE comandos RBRACE;
    
comandos: (operacion)*;
    
operacion: push | pop | peek | crear;

crear: CREATE LPAREN lista RPAREN EXCLAMATION;

push: PUSH LPAREN valor RPAREN EXCLAMATION;

pop: POP LPAREN RPAREN EXCLAMATION;

peek: PEEK LPAREN RPAREN EXCLAMATION;

valor: NUMBER | STRING;

lista: LBRACKET valor (COMMA valor)* RBRACKET;

nombre: ID;

//Lexer - Tokens
CREATE:      'crear';
PUSH:        'empujar';
POP:         'sacar';
PEEK:        'mirar';
STACK:       'pila';
EXCLAMATION: '!';
LBRACE:      '{';
RBRACE:      '}';
LPAREN:      '(';
RPAREN:      ')';
LBRACKET:    '[';
RBRACKET:    ']';
COMMA:       ',';

ID:     [a-zA-Z][a-zA-Z_0-9]*;
NUMBER: [0-9]+;
STRING: '"' ~["\r\n]* '"';

COMMENT: '#' ~[\r\n]* -> skip;
WS:      [ \t\n\r\f]+ -> skip;