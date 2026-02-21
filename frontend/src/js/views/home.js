import "../components/counter.js";
import "../components/search-field.js";

export default () => {
  return /*html*/ `
      <header>
          <div class="header-container">
              <div class="vertical-container">

                  <div class="v-header">
                      <div class="logo_settings">
                          <div class="text_logo">Zeni</div>
                          <div class="settings-btn"></div>
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
                      <div class="chat-name"></div>
                  </div>
                  <div class="chat-fun">
                      <div class="search-chat"></div>
                      <div class="click-popup"></div>
                      <div id="popup-container></div>
                  </div>
              </div>
          </div>
      </header>
  `;
};
