
import { debounce } from "./utils";
import BackTop from "components/content/backTop";
// 混入封装
export const backTopMixin = {

    components: {
        BackTop
    },
    data() {
        return {
            isShow: false,
            isloaded: null,
            itemImgListen:null
        }
    },
    methods: {        
        backToTop() {
            // console.log(this.$refs.scorll)
            this.$refs.scorll.scrollTo(0, 0);
        },
        listenToBackTop(position) {
            this.isShow = (-position.y) > 1000;
        }
    },
    mounted(){
        this.isloaded = debounce(this.$refs.scorll.refresh, 200),
        this.itemImgListen= ()=>{
            this.isloaded()
        }
    }
}