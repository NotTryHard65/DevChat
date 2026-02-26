import "../components/counter.js";
import "../components/search-field.js";
import "../components/click-popup.js"


export default () => {
  return /*html*/ `
    <header>
        <div class="header-container">
            <div class="vertical-container">
            
                <div class="v-header">
                    <div class="logo_settings">
                        <div class="text_logo">Zeni</div>
                        <div class="popupOpen"  id="hamburger-btn">
                            <img src="/assets/Hamburger_MD.svg">
                        </div>
            
                        <div class="popup_hidden" id="popup_container">
                            <div class="popup_content">
                                <div class="user_data">
                                    <div class="user_nickname">TRY</div>
                                </div>
                            
                                <div class="employee_links">
                                    <div id="profile-btn">Мой профиль</div>
                                    <div id="create-group-btn">Создать группу</div>
                                    <div id="settings-btn">Настройки</div>
                                </div>

                                <div class="exit-btn">
                                    <img src="/assets/Exit.svg" alt="">
                                    <p>Выйти</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search-field">
                        <search-field></search-field>
                    </div>
                </div>

                <div class="chats-container"></div>
            </div>

            <div class="horizontal-container">
                <div class="chat-info">
                    <div class="chat-icon"></div>
                    <div class="chat-name">Wowlikon</div>
                </div>
                <div class="chat-fun">
                    <div id="search-chat">
                        <img src="/assets/Search_Magnifying_Glass.svg">
                    </div>
                    <div id="click-popup">
                        <img src="../../public/assets/More_Vertical.svg">
                    </div>
                </div>

                <div class="popup_chat" id="popup_chat_container">
                    <div class="popup_content">
                        <div class="chat-functions">

                            <div class="mute-div" id="mute">
                                <img src="/assets/Bell_Off.svg">
                                <p>Заглушить<p>
                            </div>

                            <div class="choose-div" id="choose_message">
                                <img src="/assets/Checkbox_Check.svg">
                                <p>Выбрать сообщения</p>
                            </div>

                            <div class="block-div" id="block">
                                <img src="/assets/Stop_Sign.svg">
                                <p>Заблокировать пользователя</p>
                            </div>

                            <div class="delete-chat-btn">
                                <img src="/assets/Exit.svg" alt="">
                                <p>Удалить чат</p>
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>
        </div>
    </header>
  `;
};
