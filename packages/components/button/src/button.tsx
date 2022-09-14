import "uno.css";
import { PropType, defineComponent } from "vue";

export type BtnColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'
export type BtnIcons =   "search" | "edit" | "check" | "message" | "star-off" |"delete" | "add" | "share" | ""

export default defineComponent({
  name: 'NkButton',
  props: {
    color: {
      type: String as PropType<BtnColor>,
      default: 'blue'
    },
    icon: {
      type: String as PropType<BtnIcons>,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => <button 
        class={`
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `}
        > 
        { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ''}
     </button>
  }
})

