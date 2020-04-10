<template>
  <div id="navigationBar">
    <div class="uk-visible@s">
      <nav class="uk-navbar-container uk-padding-20 uk-card-default" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-iconnav">
            <li><router-link to="/timecards" uk-tooltip="タイムカード" uk-icon="icon: calendar; ratio: 3"></router-link></li>
            <li><router-link to="/attendances" uk-tooltip="勤怠連絡" uk-icon="icon: mail; ratio: 3"></router-link></li>
            <li><router-link to="/payslips" uk-tooltip="給与明細" uk-icon="icon: database; ratio: 3"></router-link></li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-iconnav">
            <li><a uk-tooltip="マニュアル" uk-icon="icon: question; ratio: 3"></a></li>
            <li><router-link to="/settings" uk-tooltip="設定" uk-icon="icon: settings; ratio: 3"></router-link></li>
            <li><router-link to="/employees/dashboard" uk-tooltip="ダッシュボード" uk-icon="icon: user; ratio: 3"></router-link></li>
          </ul>
          <div class="user-name uk-margin-small-left">山田 太郎</div>
        </div>
      </nav>
    </div>

    <div class="uk-hidden@s">
      <nav class="uk-flex-center uk-navbar-container uk-padding-20 uk-position-bottom uk-card-default" uk-navbar>
        <div class="uk-flex-center">
          <ul class="uk-iconnav">
            <li>
              <router-link to="/timecards" uk-icon="icon: calendar; ratio: 2" class="buttom-nav-icon"></router-link>
              <div class="bottom_nav_name">タイムカード</div>
            </li>
            <li>
              <router-link to="/attendances" uk-icon="icon: mail; ratio: 2" class="buttom-nav-icon"></router-link>
              <div class="bottom_nav_name">勤怠連絡</div>
            </li>
            <li>
              <router-link to="/payslips" uk-icon="icon: database; ratio: 2" class="buttom-nav-icon"></router-link>
              <div class="bottom_nav_name">給与明細</div>
            </li>
            <li>
              <router-link to="" uk-icon="icon: menu; ratio: 2" class="buttom-nav-icon" uk-toggle="target: #offcanvas-flip"></router-link>
              <div class="bottom_nav_name">その他</div>
              <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                <div class="uk-offcanvas-bar">
                  <button class="uk-offcanvas-close" type="button" uk-close></button>
                  <h3>操作メニュー</h3>
                  <ul class="uk-list uk-list-divider">
                    <li uk-toggle="target: #offcanvas-flip"><router-link to="/timecards" uk-icon="icon: question; ratio: 2"></router-link> マニュアル</li>
                    <li uk-toggle="target: #offcanvas-flip"><router-link to="/timecards" uk-icon="icon: settings; ratio: 2"></router-link> 設定</li>
                    <li uk-toggle="target: #offcanvas-flip"><router-link to="/timecards" uk-icon="icon: user; ratio: 2"></router-link> ダッシュボード</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- <div class="uk-navbar-right">
          <div class="user-name uk-margin-small-left">山田 太郎</div>
        </div> -->
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavigationBar'
}
</script>
<style>
.uk-padding-20 {
  padding: 20px;
}

.user-name {
  top: 50%;
}

.uk-iconnav > li {
  width: 40px;
  padding-left: 16px;
  padding-right: 16px;
}

.buttom-nav-icon {
  text-align: center;
}

.bottom_nav_name {
  white-space: nowrap;
  font-size: 12px;
  text-align: center;
  width: 200%;
  margin: 0 -50%;
  color: #999;
}

.uk-position-bottom.uk-card-default {
  box-shadow: 0 -5px 15px rgba(0,0,0,.08);
}
</style>