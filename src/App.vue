<template>
 <div class="container">
     <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view></router-view>
            </div>
        </div>
  
   <app-header></app-header>
   <hr>
    <div class="row">
        <app-servers></app-servers>
        <app-server-details></app-server-details>
    </div>
    <hr>
    <h2>Cusstom Directives</h2>
    <p v-highlight:background.delayed="'red'"> Color this using custom Directives Globally</p>
     <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"> Color this using custom Directives Locally</p>
     <hr>
     <h2>Learning about Filters and Mixins</h2>
     <p>{{filterText | toUpperCase }}</p>
     <p>{{filterText | toGlobalUpperCase }}</p>
     <h2> We can chain the filters</h2>
     <p>{{filterText | toGlobalUpperCase | toUpperCase}}</p>
     <input v-model='filterComputedText'> 
     <ul>
         <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
     </ul>
    <fruit-list></fruit-list>
    <br><br>
    <hr>
    <p> Transtions and Animtions in Vue</p>
    <div>
        <button class="btn btn-primary" @click="show = !show"></button>
        <transition>
          <div class="alert alert-info" v-if="show"> This is some info</div>
        </transition>
    </div>
    <div class="col-xs-12">
        <button class="btn btn-primary" @click="show = !show"></button>
        <transition class="fade">
          <div class="alert alert-info" v-if="show"> This is some info</div>
        </transition>
    </div>
    <br><br>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="userHTTP.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="userHTTP.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <!-- <input class="form-control" type="text" v-model="node">
                <br><br> -->
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in usersHTTP" :key="u">{{ u.username }} - {{ u.email }}</li>
                </ul> -->
            </div>
        </div>
    </div>
    <app-user></app-user>
    <div class="col-xs-12">
      <button @click="selectedcomponent = 'appQuote'">Quote</button>
      <button @click="selectedComponent = 'appAuthor'">Author</button> 
      <button @click="selectedComponent = 'appNew'"> New</button>   
      <component :is="selectedcomponent"></component>
      <!-- <app-quote>
          <h2 slot="title"> My First Quote</h2>
          <p slot="Quote"> {{ myParentQuote }}</p>
      </app-quote> -->
    </div>
    <div class="row">
     <app-new-quote @quoteAdded="newQuote"></app-new-quote>
     <app-quote-grid 
       :listOfQuotes="quotes" 
       @quoteDeleted="deletequote">
     </app-quote-grid>
    </div>
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">Info: Click on a Quote to delete it.</div>
        </div>
    </div>
    <app-footer></app-footer>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email"
                                >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age"
                                >
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"
                            ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"
                                    > Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"
                                    > Send Infomail
                        </label><!-- Also show for single checkbox with true/ false -->
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"
                                > Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"
                                > Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            >Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" >
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail" :key="item">{{ item }}</li>
                        </ul>
                        <p>Gender:  {{ gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';
import Footer from './components/Shared/Footer.vue';
import User from './components/Shared/User1.vue';
import Quote from './components/advanced/Quote.vue';
import Author from './components/advanced/Author.vue'
import New from './components/advanced/New.vue';
import QuoteGrid from './components/Quotes/QuoteGrid.vue';
import NewQuote from './components/Quotes/NewQuote.vue';
import FruitList from './components/Filters$Mixins/FruitLiist.vue'


export default {
    data: function () {
            return {
                myParentQuote: 'Tunkle Tinkle Little Star',
                selectedcomponent: 'appQuote',
                maxQuotes: 10,
                quotes: ['My first Quote'],
                userData: {
                  email: 'Gandhi',
                  password: '',
                  age: '27'
                },
                message: 'Hello',
                sendMail: [],
                gender: [],
                filterText: ' Just a Filter Only.',
                fruits: ['Apple', 'Bannna', 'Mango', 'Melon'],
                filterComputedText: '',
                show: false,
                userHTTP: {
                  username: '',
                  email: '',
                },
                usersHTTP: [],
                resource: '',  
            }
        },
    components : {
     'app-header' : Header,
     'app-servers' : Servers,
     'app-server-details' : ServerDetails,
     'app-footer' : Footer,
     'app-user' : User,
     'appQuote' : Quote,
     'appAuthor' : Author,
     'appNew' : New,
     'appQuoteGrid' : QuoteGrid,
     'appNewQuote' : NewQuote,
     'fruitList' : FruitList
    },
    methods: {
      newQuote(quote) {
          console.log('->>', quote);
        this.quotes.push(quote)
      },
      deleteQuote(index) {
          this.quotes.splice(index, 1);
      },
      submit() {
        this.$http.post('https://vue-test-c7b2f-default-rtdb.firebaseio.com/data.json', this.userHTTP)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
          // this.resource.save({}, this.user);
          // this.resource.saveAlt(this.user);
      },
      fetchData() {
        this.$http.get( )
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.usersHTTP = resultArray;
          });
                // this.resource.getData({node: this.node})
                //         .then(response => {
                //             return response.json();
                //         })
                //         .then(data => {
                //             const resultArray = [];
                //             for (let key in data) {
                //                 resultArray.push(data[key]);
                //             }
                //             this.users = resultArray;
                //         });
            }

    },
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = binding.value.delay || 1000;
    }
    if (binding.modifiers['blink']) {
      let mainColor = binding.value.mainColor;
      let secondColor = 'blue';
      let currentColor = mainColor;
      
      setTimeout(() =>{
        setInterval(() => {
          currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
          if (binding.arg == 'background') {
            el.style.backgroundColor = currentColor;
           } else {
             el.style.color = currentColor
          }
        }, 1000)
      }, delay)

    } else {
      setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value
      }
    }, delay)
    }

    
        }
      }
    },
    filters: {
        toUpperCase(value) {
            return value.toUpperCase();
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterComputedText)
            })
        }
    },
    created() {
    
    } 
}
</script>
 
<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave{
 
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
