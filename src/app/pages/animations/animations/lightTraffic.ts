import { 
    animate,
    keyframes,
    state, 
    style, 
    transition, 
    trigger 
} from '@angular/animations';

export const AnimationsLightTraffic =  [
    trigger('changeColor', [
      state('stop', style({
        'background-color': '#dc3545'
      })),
      state('warning', style({
        'background-color': '#ffff00',
        'transform': 'scale(2)'
      })),
      state('go', style({
        'background-color': '#28a745',
        'transform': 'scale(.5)'
      })),
      transition('* => *', animate(500)), // Esta regla va a afectar para todos los estados y va a tardar 500ms
      transition('stop => warning', animate(1000)), // Esta regla va a afectar solo a la transición del rojo al amarillo y va a tardar un segundo
      transition('void => *', [
        style({'transform': 'translateX(-100%)'}),
        animate(1000)
      ]), // Partimos del estado primero o void, que no tenemos definido y en este caso va de void a cualquier otro || el Array nos servirá para modificar cosas durante la transición
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(20px)', offset: 0.7}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1})
        ]))
      ])
    ])
]