    const CARD_LIBRARY = {
      'Time Warp': { icon: '⏳', price: 8, type: 'defensive', desc: 'Cancel LP damage (up to 3 LP), but prevents receiving gold.' },
      'LP Donor': { icon: '🤝', price: 2, type: 'targeted', desc: 'Donate up to 3 LP while receiving 2 gold for each LP donated.' },
      'Voodoo': { icon: '🎎', price: 5, type: 'targeted', desc: 'Redirect incoming LP damage to another chosen player.' },
      'Shield': { icon: '🛡️', price: 3, type: 'defensive', desc: 'Prevent 1 point of incoming LP damage.' },
      'Health Potion': { icon: '🧪', price: 6, type: 'instant', desc: 'Recover +2 LP instantly.' },
      'Gold Rush': { icon: '💰', price: 3, type: 'buff', desc: 'Double the amount of gold received after a single winning game.' },
      'Master Thief': { icon: '🕵️‍♀️', price: 4, type: 'instant', desc: 'Deduct 1 Gold from all classmates and gain half total stolen.' }
    };

    const DEFAULT_GAMES = [
      { id: 'vocab-blitz', title: 'Vocab Blitz', icon: '⚡', goldReward: 3, path: 'game/vocab-blitz.html' },
      { id: 'sentence-auction', title: 'Sentence Auction', icon: '🔨', goldReward: 5, path: 'game/sentence-auction.html' },
      { id: 'clue-deduction', title: 'Clue Deduction', icon: '🔍', goldReward: 2, path: 'game/clue-deduction.html' },
      { id: 'picture-vocab', title: 'Picture Matching', icon: '🖼️', goldReward: 4, path: 'game/picture-vocab.html' },
      { id: 'future-hunt', title: 'DILEMMA: Future Hunt', icon: '🏹', goldReward: 6, path: 'game/hunting-game.html' }
    ];

    // Anime Cadet Portraits library for rich anime fantasy HUD
    const AVATAR_LIST = [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvRdBiSBeyw0WmsLb466gf7tJjnUYRu4d_zhN5mtBdwUBPa2BQrACVdbXU-9UZl6TsqMwydSj_qkl4iFRSdShh0JHTFHVQnEZgqXYGP1-u4ZG9je7wNz2aUjzA9Tt8M15wrZQsky7zwSQY9Dl2ZddWeh2t315wgEI9diJf41nW0e3_8pINXTMm4EQwzyGQUMNfQDlBzD6kDP71I4FbG-KeYZlkztSm6b5_wjlwAOTywfS2rMMepdnd',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGRSZ42Py4cUYtqJkhCezEsgjG3KnmRLKr810VnPUH5CMvWQSQZftzbstPUe0sdUHIoARx6UDGWvAu1b2cBWQItjLhtVZ42JLhFEBJdDvFOKs28jvAiwTXk0BoORS0TezjUa-GZy7anlFMfmSGZnIvVjLi1lOrxiHc6_y-xZKOkGNFFI4hzAXeQkHNavpm9s2oZ7-mz9J1INEjfixj5N_ao-u8aaEu_9xvI0IMG8mh1k7HjojgDE7L',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaLixZ1_LEcERrUpuAPXPhgrptxT7cuL4C7Q8vcGVUryzO1Oqg9KmVLC8aPMtin994oKv2AgCtdIYaaPn60MQSZKQKqoRTKnm6ER4sFd-70I4AyY1Gv7-LI2d54TcH3aXUZYzBQKZOAjJ18GnyFdZC8QIbCjsU3ie5AJ8xjh21y7O1TG4olzs6uZbSmHLRx9tabB5G40Eqei_PFirupw3Ze_rJ1-OZalfPoxioK3ZyGTuyYbjOXz_g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3iqcT8NtpAF-8pIVy7aDCgm6Y94dpQDxFEjktnWla0z4uT22eGDFICDogzo8jnAtZUnp6lOfMvrL8bxaZYx0bFSanJe9ect3yuW7Qr62PDyyx5iWrDLh3KCIzwQs3id8BoCdHRIiDF-nVgw96HRUjgwxUvfX6LuPCpcB8SYC8rxYUI7QwCfCPpQzCxJd0NK4qskF_dYKi_pyU-nQ-C0FC-vUprHFtMEfvrJFefb6ccq_pUBYZ5Qbr',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsJalIXhuF1xHNysD1os6DapgV4T4-old1Nczn6Wt9TgkpgNXRaoQ0A0AqefAeAftzLUFbo6NzMvPjYnS43T-_RylxrSrVLiGjUtCyKIdE0EQ1QfsOmyjegm9ONF9ZYuAhMS-zha8DFLhZmqDo7yNx8M8Cye5P_UxIcCo1SREFk7V3-qGdEI1tI-ICkKy8m28Wdk9umI50vbcq_lZJKnYpxz1MdwPvmQJotyUNg18DenhmckcpqWCC',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyJ1EwMn9obKZAVAkTr96_JHI-yvM5RjrYjy8OwvX3_9oEaKtq04VOkme-uABMkvIFeK-hKXOL4sDoAiAaHhoq1Nk_ho_FyuGSaKxM_pTG_Zeh8EP1t_k7Fnp1THrEEc2xckPJNdG6UEgxw4ppE2bpWLyNKViSqiquY10RqYO7IiQrT8qCuJGWgkt5RUiUQU8XrBE92V5CL51yqCjWAqCWiRxAtFv1VLn21RFzWnVgoLPJ24tymdfU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAtB86u1r9FpT_U9MooWNC_6Z9uzLwLv4HIIGZnIoJXpNWU_W3SRd3UAZVsukXrqYPelsUy80nVzpPyjWjyJBeK9S--YQ90Rwgbuh4cd60HEfSqua9JHt_4YgdBhu5DBSicbh2Vll7bqiR9AWPT-cjoe7bgnHbJHmFEVC_j8HS5StCEUoFJBC9Z3PeCfYlibKIyQgOtjUlHQbzjnxi2zL7ozhdMbS1K73SWH3G2GAwTcxxeDH-B7f5',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArJNnadtwzWDDFPzW3fLR9zHrtY8rY5B6vbPWuWtyIIG7PmK8rmFrDRCYDauDq94utVfqe0XsBqWc0R5HE4DeRGSaJKC3kGyRcwnOHwgVF9sD6ouxbM2ucXnr-kv96POlPgUO3ZozTHpDpDn-RJJps_qBPxMcSnOUxf555H3GitebIeVUHDwjEvPohLqa7Ou49UODmh-TwuDovVA5NW8CGmpvCtw8uOX90lAWe-w3oSFfe816E5fIm'
    ];

    const ROLE_TITLES = [
      'STAR VANGUARD', 'SOL AEGIS', 'HARMONY SCOUT', 'ASTRAL ARCHITECT',
      'ZEPHYR BLADE', 'PARAGON COMMAND', 'RECON SPECIALIST', 'CHRONO KNIGHT'
    ];

    const CLASS_DECK_LIMIT = 60;

    function getEmptyState() {
      return {
        currentClass: '8A',
        currentMeeting: 1,
        classes: ['8A', '9A'],
        webhookUrl: '',
        students: [
          { id: 1, class: '8A', name: 'Aria Chen', nick: 'Aria', lp: 50, gold: 145, cards: ['Gold Rush', 'Shield', 'Time Warp', 'Health Potion'], totalCardsEarned: 4, totalGoldEarned: 145, effects: [] },
          { id: 2, class: '8A', name: 'Marcus Vance', nick: 'Marcus', lp: 35, gold: 210, cards: ['Voodoo', 'Shield'], totalCardsEarned: 2, totalGoldEarned: 210, effects: [] },
          { id: 3, class: '8A', name: 'Elena Rostova', nick: 'Elena', lp: 12, gold: 80, cards: ['Health Potion'], totalCardsEarned: 1, totalGoldEarned: 80, effects: [] },
          { id: 4, class: '8A', name: 'Kai Takahashi', nick: 'Kai', lp: 48, gold: 190, cards: ['Time Warp', 'LP Donor', 'Shield', 'Health Potion', 'Gold Rush'], totalCardsEarned: 5, totalGoldEarned: 190, effects: [] },
          { id: 5, class: '8A', name: 'Sophia Patel', nick: 'Sophia', lp: 32, gold: 320, cards: ['Gold Rush', 'Master Thief', 'Shield'], totalCardsEarned: 3, totalGoldEarned: 320, effects: [] },
          { id: 6, class: '8A', name: 'Dante Brooks', nick: 'Dante', lp: 8, gold: 60, cards: ['Voodoo'], totalCardsEarned: 1, totalGoldEarned: 60, effects: [] },
          { id: 7, class: '8A', name: 'Zoe Alvarez', nick: 'Zoe', lp: 50, gold: 295, cards: ['Gold Rush', 'Shield', 'Health Potion', 'Time Warp', 'LP Donor', 'Master Thief'], totalCardsEarned: 6, totalGoldEarned: 295, effects: [] },
          { id: 8, class: '8A', name: 'Leo Sterling', nick: 'Leo', lp: 42, gold: 175, cards: ['Shield', 'Time Warp', 'Health Potion', 'Gold Rush'], totalCardsEarned: 4, totalGoldEarned: 175, effects: [] },
          { id: 9, class: '9A', name: 'Budi Santoso', nick: 'Budi', lp: 46, gold: 120, cards: ['Gold Rush'], totalCardsEarned: 1, totalGoldEarned: 120, effects: [] },
          { id: 10, class: '9A', name: 'Siti Rahma', nick: 'Siti', lp: 40, gold: 150, cards: ['Shield', 'Health Potion'], totalCardsEarned: 2, totalGoldEarned: 150, effects: [] }
        ],
        games: DEFAULT_GAMES,
        reports: []
      };
    }

    // Load Initial State from LocalStorage temporarily while Firebase authenticates
    // Req 3 & 6: Guest Mode forces clean empty state instead of personal imported JSON
    const _savedAuth = JSON.parse(localStorage.getItem('cq_current_auth') || '{"role":"guest"}');
    let appData = (_savedAuth.role === 'guest')
      ? getEmptyState()
      : (JSON.parse(localStorage.getItem('class_quest_center_v1')) || getEmptyState());

    if (!Array.isArray(appData.games) || appData.games.length === 0) appData.games = DEFAULT_GAMES;
    if (!Array.isArray(appData.reports)) appData.reports = [];
    if (!appData.currentMeeting) appData.currentMeeting = 1;

    let selectedStudentId = null;
    let editingStudentId = null;
    let editingGameId = null;
    let currentShopOffers = [];
    let activePlayingGame = null;
    let currentDisplaySubtab = 'grid';
    let currentReportsSubtab = 'lp';
    let pendingCustomReport = null;
    let pendingCustomReportType = 'lp';
    let openedReportStudentId = null;
    let currentStatusFilter = 'all';
    let currentSearchQuery = '';

    /* ========================================================
       AUTHENTICATION & SANCTUM ACCESS CONTROL
       - Teacher Auth (Email/Password & Google via Firebase)
       - Student / Viewer Access (via Teacher Unique Access Code)
       - Guest Preview Mode (Full homepage & feature preview)
       ======================================================== */
    let currentAuth = _savedAuth || { role: 'guest' };

    function getTeacherRegistry() {
      let reg = {};
      try {
        reg = JSON.parse(localStorage.getItem('cq_teacher_registry') || '{}');
      } catch (e) { reg = {}; }
      if (!reg['CQ-DEMO8A']) {
        reg['CQ-DEMO8A'] = {
          code: 'CQ-DEMO8A',
          name: 'Guest Educator',
          email: 'guest@classquest.edu',
          uid: 'demo-guest-8a'
        };
      }
      return reg;
    }

    function registerTeacherLocally(code, name, email, uid) {
      const reg = getTeacherRegistry();
      reg[code.toUpperCase()] = {
        code: code.toUpperCase(),
        name: name || ('Teacher ' + code.toUpperCase()),
        email: email || '',
        uid: uid || '',
        updatedAt: Date.now()
      };
      localStorage.setItem('cq_teacher_registry', JSON.stringify(reg));
    }

    function openAuthModal(defaultTab = 'teacher') {
      const modal = document.getElementById('authModal');
      const overlay = document.getElementById('drawerOverlay');
      if (modal) modal.style.display = 'block';
      if (overlay) overlay.style.display = 'block';
      switchAuthTab(defaultTab);
    }

    function switchAuthTab(tab) {
      const teacherBtn = document.getElementById('authTabTeacherBtn');
      const studentBtn = document.getElementById('authTabStudentBtn');
      const teacherSec = document.getElementById('authTeacherSection');
      const studentSec = document.getElementById('authStudentSection');

      if (tab === 'teacher') {
        if (teacherBtn) teacherBtn.className = 'flex-1 py-2 rounded-lg font-headline font-bold text-white bg-gradient-to-r from-indigo-600 to-primary shadow-2xs flex items-center justify-center gap-1.5 transition-all';
        if (studentBtn) studentBtn.className = 'flex-1 py-2 rounded-lg font-headline font-semibold text-slate-600 hover:text-indigo-900 transition-all flex items-center justify-center gap-1.5';
        if (teacherSec) teacherSec.classList.remove('hidden');
        if (studentSec) studentSec.classList.add('hidden');
      } else {
        if (studentBtn) studentBtn.className = 'flex-1 py-2 rounded-lg font-headline font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-2xs flex items-center justify-center gap-1.5 transition-all';
        if (teacherBtn) teacherBtn.className = 'flex-1 py-2 rounded-lg font-headline font-semibold text-slate-600 hover:text-indigo-900 transition-all flex items-center justify-center gap-1.5';
        if (studentSec) studentSec.classList.remove('hidden');
        if (teacherSec) teacherSec.classList.add('hidden');
      }
    }

    function switchTeacherSubtab(sub) {
      const signinBtn = document.getElementById('teacherSignInSubtab');
      const signupBtn = document.getElementById('teacherSignUpSubtab');
      const signinForm = document.getElementById('teacherSignInForm');
      const signupForm = document.getElementById('teacherSignUpForm');

      if (sub === 'signin') {
        if (signinBtn) signinBtn.className = 'text-indigo-600 border-b-2 border-indigo-600 pb-1 font-bold';
        if (signupBtn) signupBtn.className = 'text-slate-400 hover:text-slate-700 pb-1 font-bold';
        if (signinForm) signinForm.classList.remove('hidden');
        if (signupForm) signupForm.classList.add('hidden');
      } else {
        if (signupBtn) signupBtn.className = 'text-indigo-600 border-b-2 border-indigo-600 pb-1 font-bold';
        if (signinBtn) signinBtn.className = 'text-slate-400 hover:text-slate-700 pb-1 font-bold';
        if (signupForm) signupForm.classList.remove('hidden');
        if (signinForm) signinForm.classList.add('hidden');
      }
    }

    function showAuthNotice(elementId, msg, isError = true) {
      const el = document.getElementById(elementId);
      if (!el) return;
      el.textContent = msg;
      el.className = isError
        ? 'p-3 rounded-xl text-xs font-medium bg-rose-50 border border-rose-200 text-rose-700 block'
        : 'p-3 rounded-xl text-xs font-medium bg-emerald-50 border border-emerald-200 text-emerald-700 block';
    }

    async function handleTeacherSignIn() {
      const email = (document.getElementById('teacherEmailInput')?.value || '').trim();
      const pass = document.getElementById('teacherPasswordInput')?.value || '';
      if (!email || !pass) {
        showAuthNotice('teacherAuthMessage', 'Please provide both email and password.');
        return;
      }
      try {
        if (typeof window.fbSignInWithEmail === 'function') {
          const res = await window.fbSignInWithEmail(email, pass);
          onTeacherSuccess(res.user);
        } else {
          loginAsLocalTeacher(email.split('@')[0] || 'Dawam Nofal', email);
        }
      } catch (err) {
        console.error('Firebase Auth Sign In error:', err);
        let msg = err.message || 'Authentication failed.';
        if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
          msg = 'Invalid email or password.';
        } else if (err.code === 'auth/user-not-found') {
          msg = 'No teacher account found with this email. Switch to "Create Teacher Account".';
        } else if (err.code === 'auth/operation-not-allowed') {
          msg = 'Email/Password sign-in is not enabled in Firebase Console. Click "Launch Demo Teacher Mode" below to test right away.';
        }
        showAuthNotice('teacherAuthMessage', msg);
      }
    }

    async function handleTeacherSignUp() {
      const name = (document.getElementById('teacherRegNameInput')?.value || '').trim() || 'Dawam Nofal';
      const email = (document.getElementById('teacherRegEmailInput')?.value || '').trim();
      const pass = document.getElementById('teacherRegPasswordInput')?.value || '';
      if (!email || !pass) {
        showAuthNotice('teacherAuthMessage', 'Please provide teacher name, email, and password.');
        return;
      }
      try {
        if (typeof window.fbSignUpWithEmail === 'function') {
          const res = await window.fbSignUpWithEmail(email, pass);
          if (typeof window.fbUpdateProfile === 'function') {
            await window.fbUpdateProfile(res.user, { displayName: name }).catch(() => { });
          }
          onTeacherSuccess(res.user, name);
        } else {
          loginAsLocalTeacher(name, email);
        }
      } catch (err) {
        console.error('Firebase Auth Sign Up error:', err);
        let msg = err.message || 'Account creation failed.';
        if (err.code === 'auth/email-already-in-use') {
          msg = 'This email is already registered. Please switch to Sign In.';
        } else if (err.code === 'auth/weak-password') {
          msg = 'Password should be at least 6 characters.';
        } else if (err.code === 'auth/operation-not-allowed') {
          msg = 'Email/Password sign-in is not enabled in Firebase Console. Click "Launch Demo Teacher Mode" below to test right away.';
        }
        showAuthNotice('teacherAuthMessage', msg);
      }
    }

    function handleQuickDemoTeacher() {
      loginAsLocalTeacher('Guest Educator', 'guest@classquest.edu', 'CQ-DEMO8A');
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    let announcementTimer = null;
    function showAstralAnnouncement({ title, message, badge = 'SANCTUM DIRECTIVE', icon = 'verified', type = 'success', duration = 4000, actionText = 'Continue to Sanctum', onAction = null }) {
      const overlay = document.getElementById('astralAnnouncementOverlay');
      if (!overlay) return;

      if (announcementTimer) clearTimeout(announcementTimer);

      document.getElementById('astralAnnouncementTitle').textContent = title;
      document.getElementById('astralAnnouncementMessage').innerHTML = message;
      document.getElementById('astralAnnouncementBadge').textContent = badge;
      document.getElementById('astralAnnouncementIcon').textContent = icon;
      document.getElementById('astralAnnouncementActionText').textContent = actionText;

      const iconWrap = document.getElementById('astralAnnouncementIconWrap');
      if (iconWrap) {
        if (type === 'success') {
          iconWrap.className = 'w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-3 shadow-xs';
        } else if (type === 'info') {
          iconWrap.className = 'w-14 h-14 mx-auto rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-3 shadow-xs';
        } else if (type === 'warning') {
          iconWrap.className = 'w-14 h-14 mx-auto rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-3 shadow-xs';
        } else if (type === 'error') {
          iconWrap.className = 'w-14 h-14 mx-auto rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-3 shadow-xs';
        }
      }

      const btn = document.getElementById('astralAnnouncementActionBtn');
      if (btn) {
        btn.onclick = () => {
          dismissAstralAnnouncement();
          if (typeof onAction === 'function') onAction();
        };
      }

      const drawerOverlay = document.getElementById('drawerOverlay');
      if (drawerOverlay) drawerOverlay.style.display = 'block';

      overlay.style.display = 'block';

      if (duration > 0) {
        announcementTimer = setTimeout(() => {
          dismissAstralAnnouncement();
        }, duration);
      }
    }

    function dismissAstralAnnouncement() {
      const overlay = document.getElementById('astralAnnouncementOverlay');
      if (overlay) overlay.style.display = 'none';
      const drawerOverlay = document.getElementById('drawerOverlay');
      if (drawerOverlay && !document.querySelector('.astral-modal[style*="display: block"]')) {
        drawerOverlay.style.display = 'none';
      }
      if (announcementTimer) {
        clearTimeout(announcementTimer);
        announcementTimer = null;
      }
    }

    function confirmSignOut() {
      const modal = document.getElementById('logoutConfirmModal');
      const drawerOverlay = document.getElementById('drawerOverlay');
      if (drawerOverlay) drawerOverlay.style.display = 'block';
      if (modal) modal.style.display = 'block';
    }

    function cancelSignOut() {
      const modal = document.getElementById('logoutConfirmModal');
      if (modal) modal.style.display = 'none';
      const drawerOverlay = document.getElementById('drawerOverlay');
      if (drawerOverlay && !document.querySelector('.astral-modal[style*="display: block"]')) {
        drawerOverlay.style.display = 'none';
      }
    }

    async function executeSignOut() {
      cancelSignOut();
      if (typeof window.fbSignOut === 'function') {
        await window.fbSignOut().catch(() => { });
      }
      currentAuth = { role: 'guest' };
      localStorage.setItem('cq_current_auth', JSON.stringify(currentAuth));
      updateAuthUI();
      showTab('home');
      render();
      showAstralAnnouncement({
        title: 'Terminal Disengaged',
        badge: 'LOG OUT COMPLETE',
        message: 'Signed out of Sanctum session. You have returned to Guest Preview Mode with view-only permissions.',
        icon: 'logout',
        type: 'info',
        actionText: 'Understood'
      });
    }

    function confirmExitViewerMode() {
      confirmSignOut();
    }

    function loginAsLocalTeacher(name, email, code = 'CQ-DEMO8A') {
      registerTeacherLocally(code, name, email, 'local-dawam');
      currentAuth = {
        role: 'teacher',
        name: name,
        email: email,
        teacherCode: code,
        uid: 'local-dawam'
      };
      localStorage.setItem('cq_current_auth', JSON.stringify(currentAuth));
      closeAllOverlays();
      updateAuthUI();
      render();
      showAstralAnnouncement({
        title: 'Sanctum Authenticated',
        badge: 'LOCAL TERMINAL ONLINE',
        message: `Welcome Teacher <strong>${escapeHtml(name)}</strong>! Your student access code is <strong>${code}</strong>. Share this code with students so they can view your class.`,
        icon: 'verified',
        type: 'success',
        actionText: 'Enter Sanctum'
      });
    }

    function onTeacherSuccess(user, customName = null) {
      const cleanUid = (user.uid || '').replace(/[^a-zA-Z0-9]/g, '');
      const code = 'CQ-' + (cleanUid.substring(0, 6) || '8236A1').toUpperCase();
      const name = customName || user.displayName || (user.email ? user.email.split('@')[0] : 'Guest Educator');
      registerTeacherLocally(code, name, user.email, user.uid);

      currentAuth = {
        role: 'teacher',
        name: name,
        email: user.email,
        teacherCode: code,
        uid: user.uid
      };
      localStorage.setItem('cq_current_auth', JSON.stringify(currentAuth));

      saveData();
      closeAllOverlays();
      updateAuthUI();
      render();
      showAstralAnnouncement({
        title: 'Sanctum Authenticated',
        badge: 'CLOUD SYNC ONLINE',
        message: `Welcome, Teacher <strong>${escapeHtml(name)}</strong>! Sanctum authenticated. Your Student Access Code is: <strong>${code}</strong>.`,
        icon: 'verified',
        type: 'success',
        actionText: 'Enter Sanctum'
      });
    }

    window.handleFirebaseAuthStateChanged = async function (user) {
      if (user) {
        const cleanUid = (user.uid || '').replace(/[^a-zA-Z0-9]/g, '');
        const code = 'CQ-' + (cleanUid.substring(0, 6) || '8236A1').toUpperCase();
        const name = user.displayName || (user.email ? user.email.split('@')[0] : 'Guest Educator');
        registerTeacherLocally(code, name, user.email, user.uid);
        currentAuth = {
          role: 'teacher',
          name: name,
          email: user.email,
          teacherCode: code,
          uid: user.uid
        };
        localStorage.setItem('cq_current_auth', JSON.stringify(currentAuth));
        await loadTeacherClassroom(code);
      } else {
        if (currentAuth.role === 'teacher') {
          currentAuth = { role: 'guest' };
          localStorage.setItem('cq_current_auth', JSON.stringify(currentAuth));
          // Req 3: Reset appData to clean state on sign-out/guest
          appData = getEmptyState();
        }
      }
      updateAuthUI();
      render();
    };

    async function handleStudentJoin() {
      const codeInput = document.getElementById('studentTeacherCodeInput');
      const nameInput = document.getElementById('studentNameInput');
      const code = (codeInput ? codeInput.value : '').trim().toUpperCase();
      const studentName = (nameInput ? nameInput.value : '').trim() || 'Cadet Viewer';

      if (!code) {
        showAuthNotice('studentAuthMessage', 'Please enter a Teacher Access Code.');
        return;
      }

      const reg = getTeacherRegistry();
      let teacherInfo = reg[code];

      // Check Firestore if available
      if (!teacherInfo && window.firebaseDb && typeof window.getDoc === 'function') {
        try {
          const docRef = window.doc(window.firebaseDb, "classrooms", code);
          const docSnap = await window.getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            teacherInfo = { code: code, name: data.teacherName || ('Teacher ' + code) };
            if (data.appData) appData = data.appData;
          }
        } catch (e) {
          console.warn('Cloud classroom lookup notice:', e);
        }
      }

      // Check local storage
      const localSaved = localStorage.getItem('cq_classroom_' + code);
      if (localSaved) {
        try {
          appData = JSON.parse(localSaved);
        } catch (e) { }
      }

      if (teacherInfo || code === 'CQ-DEMO8A' || localSaved || (currentAuth.teacherCode === code)) {
        const teacherName = (teacherInfo && teacherInfo.name) ? teacherInfo.name : ('Teacher ' + code);
        currentAuth = {
          role: 'viewer',
          teacherCode: code,
          teacherName: teacherName,
          studentName: studentName
        };
        localStorage.setItem('cq_current_auth', JSON.stringify(currentAuth));
        closeAllOverlays();
        updateAuthUI();
        showTab('display');
        render();
        showAstralAnnouncement({
          title: 'Connected to Sanctum',
          badge: 'VIEWER MODE ENGAGED',
          message: `Welcome <strong>${escapeHtml(studentName)}</strong>! Successfully connected to <strong>${escapeHtml(teacherName)}</strong>'s Sanctum as a Viewer.`,
          icon: 'visibility',
          type: 'info',
          actionText: 'Explore Class Display',
          onAction: () => showTab('display')
        });
      } else {
        showAuthNotice('studentAuthMessage', `Teacher code "${code}" not found. Verify the code with your teacher, or click "Use Demo Code: CQ-DEMO8A" below.`);
      }
    }

    function fillDemoStudentCode() {
      const input = document.getElementById('studentTeacherCodeInput');
      if (input) input.value = 'CQ-DEMO8A';
      handleStudentJoin();
    }

    function copyTeacherCode() {
      const code = currentAuth.teacherCode || 'CQ-DEMO8A';
      navigator.clipboard.writeText(code).then(() => {
        showAstralAnnouncement({
          title: 'Cipher Copied',
          badge: 'ACCESS CODE READY',
          message: `Teacher Access Code <strong>${code}</strong> copied to clipboard! Share this code with students.`,
          icon: 'content_copy',
          type: 'info',
          duration: 3500
        });
      }).catch(() => {
        prompt("Teacher Access Code:", code);
      });
    }

    function requireTeacherAuth(actionLabel = 'perform this action') {
      if (currentAuth && currentAuth.role === 'teacher') return true;

      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.style.display = 'block';

      const noticeModal = document.getElementById('astralNoticeModal');
      const titleEl = document.getElementById('astralNoticeTitle');
      const msgEl = document.getElementById('astralNoticeMessage');

      if (currentAuth && currentAuth.role === 'viewer') {
        if (titleEl) titleEl.textContent = 'Viewer Mode Restricted';
        if (msgEl) msgEl.textContent = `Only the authenticated Teacher can ${actionLabel}. Cadets have view-only access to this Sanctum.`;
      } else {
        if (titleEl) titleEl.textContent = 'Guest Preview Mode';
        if (msgEl) msgEl.textContent = `You are browsing in Guest Preview Mode. You can freely explore the preview without triggering commands. Actions like ${actionLabel} require Teacher / Administrator authentication.`;
      }

      if (noticeModal) noticeModal.style.display = 'block';
      return false;
    }

    function handleImportJsonClick() {
      if (!requireTeacherAuth('import JSON roster backup')) return;
      const fileInput = document.getElementById('importJsonFileInput');
      if (fileInput) fileInput.click();
    }

    let selectedAdminAvatar = '✦';

    function selectAdminAvatar(symbol) {
      selectedAdminAvatar = symbol;
      const avatarDisplay = document.getElementById('adminAvatarDisplay');
      if (avatarDisplay) avatarDisplay.textContent = symbol;
      document.querySelectorAll('.admin-avatar-btn').forEach(btn => {
        if (btn.textContent.trim() === symbol) {
          btn.classList.add('bg-indigo-100', 'border-indigo-400', 'text-indigo-700', 'ring-2', 'ring-indigo-300');
          btn.classList.remove('bg-slate-50', 'bg-indigo-50', 'border-slate-200');
        } else {
          btn.classList.remove('bg-indigo-100', 'border-indigo-400', 'text-indigo-700', 'ring-2', 'ring-indigo-300');
          btn.classList.add('bg-slate-50', 'border-slate-200', 'text-slate-700');
        }
      });
    }

    function generateNewAccessCode() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let code = 'CQ-';
      for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      const codeInput = document.getElementById('adminProfileCode');
      if (codeInput) codeInput.value = code;
      const previewCode = document.getElementById('adminPreviewCode');
      if (previewCode) previewCode.textContent = code;
    }

    function populateAdminProfileForm() {
      const nameInput = document.getElementById('adminProfileName');
      const codeInput = document.getElementById('adminProfileCode');
      const emailInput = document.getElementById('adminProfileEmail');
      const schoolInput = document.getElementById('adminProfileSchool');
      const subjectInput = document.getElementById('adminProfileSubject');
      const mottoInput = document.getElementById('adminProfileMotto');
      const lpInput = document.getElementById('adminProfileStartingLP');
      const goldInput = document.getElementById('adminProfileStartingGold');

      const isTeacher = (currentAuth && currentAuth.role === 'teacher');
      const name = isTeacher ? (currentAuth.name || 'Guest Educator') : (currentAuth.name || 'Guest Educator');
      const code = isTeacher ? (currentAuth.teacherCode || 'CQ-DEMO8A') : (currentAuth.teacherCode || 'CQ-DEMO8A');
      const email = isTeacher ? (currentAuth.email || 'guest@classquest.edu') : (currentAuth.email || 'guest@classquest.edu');
      const school = currentAuth.school || 'Astral Vanguard Academy';
      const subject = currentAuth.subject || 'English Expedition & Gamified Literature';
      const motto = currentAuth.motto || 'Guiding voyagers across astral quests with gamified pedagogy.';
      const lp = currentAuth.startingLP || 50;
      const gold = currentAuth.startingGold || 10;
      const avatar = currentAuth.avatar || '✦';

      if (nameInput) nameInput.value = name;
      if (codeInput) codeInput.value = code;
      if (emailInput) emailInput.value = email;
      if (schoolInput) schoolInput.value = school;
      if (subjectInput) subjectInput.value = subject;
      if (mottoInput) mottoInput.value = motto;
      if (lpInput) lpInput.value = lp;
      if (goldInput) goldInput.value = gold;

      // Update Preview Card
      const previewName = document.getElementById('adminPreviewName');
      if (previewName) previewName.textContent = name;
      const previewSchool = document.getElementById('adminPreviewSchool');
      if (previewSchool) previewSchool.textContent = school;
      const previewCode = document.getElementById('adminPreviewCode');
      if (previewCode) previewCode.textContent = code;
      const previewRole = document.getElementById('adminPreviewRole');
      if (previewRole) previewRole.textContent = isTeacher ? 'SANCTUM MASTER // AUTHENTICATED' : 'ADMINISTRATOR // PREVIEW MODE';

      const badgeRole = document.getElementById('adminProfileBadgeRole');
      if (badgeRole) {
        badgeRole.textContent = isTeacher ? 'ACTIVE TEACHER' : 'GUEST ADMINISTRATOR';
        badgeRole.className = isTeacher
          ? 'font-hud text-[10px] bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 px-2.5 py-0.5 rounded-full font-bold'
          : 'font-hud text-[10px] bg-amber-400/20 text-amber-200 border border-amber-300/30 px-2.5 py-0.5 rounded-full font-bold';
      }

      // Update Telemetry stats
      const statClasses = document.getElementById('adminStatClasses');
      if (statClasses) statClasses.textContent = `${appData.classes ? appData.classes.length : 1} Sanctum${(appData.classes && appData.classes.length === 1) ? '' : 's'}`;
      const statStudents = document.getElementById('adminStatStudents');
      if (statStudents) statStudents.textContent = `${appData.students ? appData.students.length : 0} Cadet${(appData.students && appData.students.length === 1) ? '' : 's'}`;
      const statAuth = document.getElementById('adminStatAuth');
      if (statAuth) {
        statAuth.textContent = isTeacher ? 'Terminal Synchronized' : 'Guest Mode (Editable)';
        statAuth.className = isTeacher ? 'font-hud font-bold text-emerald-600' : 'font-hud font-bold text-amber-600';
      }

      selectAdminAvatar(avatar);
    }

    function resetAdminProfileFields() {
      populateAdminProfileForm();
    }

    function saveAdministratorProfile() {
      const name = (document.getElementById('adminProfileName')?.value || '').trim() || 'Guest Educator';
      const code = (document.getElementById('adminProfileCode')?.value || '').trim().toUpperCase() || 'CQ-DEMO8A';
      const email = (document.getElementById('adminProfileEmail')?.value || '').trim() || 'teacher@classquest.edu';
      const school = (document.getElementById('adminProfileSchool')?.value || '').trim() || 'Astral Vanguard Academy';
      const subject = (document.getElementById('adminProfileSubject')?.value || '').trim() || 'English Expedition & Gamified Literature';
      const motto = (document.getElementById('adminProfileMotto')?.value || '').trim() || 'Guiding voyagers across astral quests with gamified pedagogy.';
      const startingLP = parseInt(document.getElementById('adminProfileStartingLP')?.value) || 50;
      const startingGold = parseInt(document.getElementById('adminProfileStartingGold')?.value) || 10;
      const avatar = selectedAdminAvatar || '✦';

      currentAuth = {
        role: 'teacher',
        name: name,
        teacherCode: code,
        email: email,
        school: school,
        subject: subject,
        motto: motto,
        avatar: avatar,
        startingLP: startingLP,
        startingGold: startingGold,
        uid: currentAuth.uid || 'local-teacher'
      };

      localStorage.setItem('cq_current_auth', JSON.stringify(currentAuth));
      registerTeacherLocally(code, name, email, currentAuth.uid, { school, subject, motto, avatar });
      saveData();
      updateAuthUI();
      populateAdminProfileForm();

      showAstralAnnouncement({
        title: '✦ Administrator Profile Saved!',
        badge: 'PROFILE SYNCHRONIZED',
        message: `Administrator credentials for <strong>${escapeHtml(name)}</strong> have been updated. Your student access code is <strong>${code}</strong>.`,
        icon: 'verified',
        type: 'success',
        actionText: 'View Class Display',
        onAction: () => showTab('display')
      });
    }

    function updateAuthUI() {
      // 1. Header Auth Pill (Requirement 3: clicking guest name opens Administrator Profile)
      const headerPill = document.getElementById('headerAuthPill');
      if (headerPill) {
        if (currentAuth.role === 'teacher') {
          headerPill.innerHTML = `
            <div onclick="showTab('admin-profile')" title="Open Administrator Profile"
              class="flex items-center gap-2 px-2.5 py-1.5 bg-indigo-50/90 hover:bg-indigo-100 border border-indigo-200/80 rounded-xl cursor-pointer transition-all group shadow-2xs">
              <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-400 text-white flex items-center justify-center text-xs font-bold shrink-0">✦</div>
              <div class="flex flex-col text-left min-w-0">
                <span class="font-headline text-[11px] font-bold text-indigo-950 group-hover:text-indigo-600 truncate max-w-[100px] leading-tight">${escapeHtml(currentAuth.name || 'Teacher')}</span>
                <span class="font-hud text-[8px] text-indigo-600 font-bold leading-none">${escapeHtml(currentAuth.teacherCode || 'CQ-ADMIN')}</span>
              </div>
              <button onclick="event.stopPropagation(); confirmSignOut();" title="Log Out" class="ml-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 p-1 rounded-lg transition-all shrink-0">
                <span class="material-symbols-outlined text-[16px]">logout</span>
              </button>
            </div>
          `;
        } else if (currentAuth.role === 'viewer') {
          headerPill.innerHTML = `
            <div class="flex items-center gap-2 px-2.5 py-1.5 bg-sky-50/90 border border-sky-200/80 rounded-xl shadow-2xs">
              <span class="material-symbols-outlined text-[16px] text-sky-600 shrink-0">visibility</span>
              <div class="flex flex-col text-left min-w-0">
                <span class="font-headline text-[11px] font-bold text-sky-950 truncate max-w-[90px] leading-tight">${escapeHtml(currentAuth.studentName || 'Viewer')}</span>
                <span class="font-hud text-[8px] text-sky-700 font-semibold leading-none">${escapeHtml(currentAuth.teacherCode || '')}</span>
              </div>
              <button onclick="event.stopPropagation(); confirmExitViewerMode();" title="Exit Viewer Mode" class="ml-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 p-1 rounded-lg transition-all shrink-0">
                <span class="material-symbols-outlined text-[16px]">logout</span>
              </button>
            </div>
          `;
        } else {
          // Guest Mode: Clicking opens Administrator Profile page!
          headerPill.innerHTML = `
            <div onclick="showTab('admin-profile')" title="Open Administrator Profile"
              class="flex items-center gap-1.5 px-2.5 py-1.5 bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-200/80 rounded-xl cursor-pointer transition-all group shadow-2xs">
              <div class="w-6 h-6 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                <span class="material-symbols-outlined text-[15px]">account_circle</span>
              </div>
              <div class="flex flex-col text-left min-w-0">
                <span class="font-headline text-[11px] font-bold text-indigo-950 group-hover:text-indigo-600 truncate max-w-[90px] leading-tight">Guest User</span>
                <span class="font-hud text-[8px] text-indigo-500 font-semibold tracking-wider leading-none">ADMIN PROFILE ✦</span>
              </div>
            </div>
          `;
        }
      }

      // 2. Drawer User Box (Requirement 3: current box is the user (admin) name)
      const drawerBox = document.getElementById('drawerUserBox');
      if (drawerBox) {
        if (currentAuth.role === 'teacher') {
          drawerBox.innerHTML = `
            <div onclick="showTab('admin-profile')" class="p-2.5 bg-white/95 hover:bg-indigo-50/40 border border-indigo-100 rounded-2xl shadow-2xs flex flex-col gap-2 cursor-pointer transition-all">
              <div class="flex items-center justify-between gap-2.5">
                <div class="flex items-center gap-2.5 min-w-0 flex-1">
                  <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center shrink-0 shadow-sm text-white font-bold">
                    <span class="material-symbols-outlined text-[18px]">verified_user</span>
                  </div>
                  <div class="flex flex-col min-w-0 flex-1">
                    <span class="font-headline text-[12px] font-bold text-slate-900 truncate">${escapeHtml(currentAuth.name || 'Dawam Nofal')}</span>
                    <span class="font-hud text-[9px] text-indigo-500 font-semibold truncate">TEACHER // ADMIN</span>
                  </div>
                </div>
                <button onclick="event.stopPropagation(); confirmSignOut();" title="Sign Out" class="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all shrink-0">
                  <span class="material-symbols-outlined text-[16px]">logout</span>
                </button>
              </div>
              <div class="flex items-center justify-between px-2 py-1 bg-indigo-50/80 border border-indigo-100 rounded-xl text-[10px] font-hud">
                <div class="flex items-center gap-1.5 text-indigo-800 font-bold truncate">
                  <span class="text-indigo-500">✦</span>
                  <span>CODE:</span>
                  <span class="font-mono text-indigo-950">${escapeHtml(currentAuth.teacherCode || 'CQ-ADMIN')}</span>
                </div>
                <button onclick="event.stopPropagation(); copyTeacherCode();" class="text-indigo-600 hover:text-indigo-800 font-bold px-1.5 py-0.5 rounded hover:bg-indigo-100 transition-colors shrink-0">
                  COPY
                </button>
              </div>
            </div>
          `;
        } else if (currentAuth.role === 'viewer') {
          drawerBox.innerHTML = `
            <div class="p-2.5 bg-white/95 border border-sky-100 rounded-2xl shadow-2xs flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5 min-w-0 flex-1">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center shrink-0 shadow-sm text-white font-bold">
                  <span class="material-symbols-outlined text-[18px]">visibility</span>
                </div>
                <div class="flex flex-col min-w-0 flex-1">
                  <span class="font-headline text-[12px] font-bold text-slate-900 truncate">${escapeHtml(currentAuth.studentName || 'Cadet Viewer')}</span>
                  <span class="font-hud text-[9px] text-sky-600 font-semibold truncate">VIEWING: ${escapeHtml(currentAuth.teacherCode || '')}</span>
                </div>
              </div>
              <button onclick="confirmExitViewerMode()" title="Exit Viewer Mode" class="px-2 py-1 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 font-hud text-[10px] font-bold rounded-lg transition-all shrink-0">
                EXIT
              </button>
            </div>
          `;
        } else {
          drawerBox.innerHTML = `
            <div onclick="showTab('admin-profile')" class="p-2.5 bg-white/95 hover:bg-indigo-50/60 border border-indigo-100 rounded-2xl shadow-2xs flex items-center justify-between gap-2.5 cursor-pointer transition-all group">
              <div class="flex items-center gap-2.5 min-w-0 flex-1">
                <div class="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-indigo-100 text-slate-500 group-hover:text-indigo-600 flex items-center justify-center shrink-0 shadow-xs transition-colors">
                  <span class="material-symbols-outlined text-[18px]">account_circle</span>
                </div>
                <div class="flex flex-col min-w-0 flex-1">
                  <span class="font-headline text-[12px] font-bold text-indigo-950 group-hover:text-indigo-600 truncate transition-colors">GUEST USER</span>
                  <span class="font-hud text-[9px] text-indigo-500 font-semibold truncate">ADMINISTRATOR PROFILE ✦</span>
                </div>
              </div>
              <span class="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-indigo-600 transition-colors">chevron_right</span>
            </div>
          `;
        }
      }

      // 3. Guest Preview Banner in tab-home
      const previewBanner = document.getElementById('guestPreviewBanner');
      if (previewBanner) {
        if (currentAuth.role === 'guest') {
          previewBanner.classList.remove('hidden');
        } else {
          previewBanner.classList.add('hidden');
        }
      }

      // 4. Viewer restriction notice in tab-teacher
      const viewerNotice = document.getElementById('teacherViewerNotice');
      if (viewerNotice) {
        if (currentAuth.role !== 'teacher') {
          viewerNotice.classList.remove('hidden');
        } else {
          viewerNotice.classList.add('hidden');
        }
      }
    }

    async function loadTeacherClassroom(code) {
      const local = localStorage.getItem('cq_classroom_' + code);
      if (local) {
        try {
          appData = JSON.parse(local);
        } catch (e) { }
      }
      if (window.firebaseDb && typeof window.getDoc === 'function') {
        try {
          const docRef = window.doc(window.firebaseDb, "classrooms", code);
          const docSnap = await window.getDoc(docRef);
          if (docSnap.exists() && docSnap.data().appData) {
            appData = docSnap.data().appData;
            localStorage.setItem('cq_classroom_' + code, JSON.stringify(appData));
            localStorage.setItem('class_quest_center_v1', JSON.stringify(appData));
          }
        } catch (e) {
          console.warn("Cloud load notice:", e);
        }
      }
    }

    let _saveDebounceTimer = null;

    function _setCloudSyncStatus(status, msg) {
      // status: 'syncing' | 'synced' | 'error' | 'standby' | 'local'
      const el = document.getElementById('adminStatCloudSync');
      if (!el) return;
      const map = {
        syncing: { text: '⟳ Syncing…', cls: 'font-hud font-bold text-sky-500 animate-pulse' },
        synced: { text: '✓ Cloud Synced', cls: 'font-hud font-bold text-emerald-600' },
        error: { text: '⚠ Sync Error', cls: 'font-hud font-bold text-rose-600' },
        local: { text: 'Local Only', cls: 'font-hud font-bold text-amber-600' },
        standby: { text: 'Standby', cls: 'font-hud font-bold text-slate-400' }
      };
      const cfg = map[status] || map['standby'];
      el.textContent = msg || cfg.text;
      el.className = cfg.cls;
    }

    async function saveData() {
      // Always persist to localStorage immediately
      localStorage.setItem('class_quest_center_v1', JSON.stringify(appData));

      if (currentAuth.role === 'teacher' && currentAuth.teacherCode) {
        localStorage.setItem('cq_classroom_' + currentAuth.teacherCode, JSON.stringify(appData));

        // Security: only push to Firestore if an active Firebase session exists
        const firebaseUid = window.firebaseAuth &&
          window.firebaseAuth.currentUser &&
          window.firebaseAuth.currentUser.uid;

        if (firebaseUid && window.firebaseDb && typeof window.setDoc === 'function') {
          // Debounce: avoid hammering Firestore on rapid successive calls
          if (_saveDebounceTimer) clearTimeout(_saveDebounceTimer);
          _setCloudSyncStatus('syncing');
          _saveDebounceTimer = setTimeout(async () => {
            try {
              const docRef = window.doc(window.firebaseDb, 'classrooms', currentAuth.teacherCode);
              await window.setDoc(docRef, {
                teacherName: currentAuth.name || 'Guest Educator',
                teacherCode: currentAuth.teacherCode,
                teacherEmail: currentAuth.email || '',
                authorizedUid: firebaseUid,
                appData: appData,
                lastUpdated: new Date().toISOString()
              }, { merge: true });
              _setCloudSyncStatus('synced');
              // Fade back to standby after 4 s
              setTimeout(() => _setCloudSyncStatus('standby'), 4000);
            } catch (e) {
              console.warn('Cloud save notice:', e);
              _setCloudSyncStatus('error', '⚠ ' + (e.code || 'Sync Error'));
            }
          }, 800); // debounce 800 ms
        } else {
          _setCloudSyncStatus('local');
        }
      } else {
        _setCloudSyncStatus('standby');
      }

      render();
    }

    /**
     * loadClassroomFromCloud()
     * Explicitly pull the latest classroom data from Firebase Firestore for the
     * active teacher session and merge it into appData + localStorage.
     * Call this to sync seamlessly across devices (e.g. desktop → laptop).
     */
    async function loadClassroomFromCloud() {
      if (!currentAuth || currentAuth.role !== 'teacher' || !currentAuth.teacherCode) {
        showAstralAnnouncement({
          title: 'Authentication Required',
          badge: 'CLOUD SYNC BLOCKED',
          message: 'You must be signed in as a Teacher to pull data from the cloud.',
          icon: 'lock',
          type: 'warning',
          actionText: 'Understood'
        });
        return;
      }

      const btn = document.getElementById('syncFromCloudBtn');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="material-symbols-outlined text-[16px] animate-spin">refresh</span><span>Syncing…</span>';
      }
      _setCloudSyncStatus('syncing');

      const code = currentAuth.teacherCode;
      let cloudLoaded = false;

      // 1. Try Firestore first
      if (window.firebaseDb && typeof window.getDoc === 'function') {
        try {
          const docRef = window.doc(window.firebaseDb, 'classrooms', code);
          const docSnap = await window.getDoc(docRef);
          if (docSnap.exists() && docSnap.data().appData) {
            const cloudData = docSnap.data().appData;
            // Guard: only accept if authorizedUid matches current user or is absent
            const firebaseUid = window.firebaseAuth &&
              window.firebaseAuth.currentUser &&
              window.firebaseAuth.currentUser.uid;
            const docUid = docSnap.data().authorizedUid;
            if (!docUid || !firebaseUid || docUid === firebaseUid) {
              appData = cloudData;
              if (!Array.isArray(appData.games) || appData.games.length === 0) appData.games = DEFAULT_GAMES;
              if (!Array.isArray(appData.reports)) appData.reports = [];
              if (!appData.currentMeeting) appData.currentMeeting = 1;
              localStorage.setItem('class_quest_center_v1', JSON.stringify(appData));
              localStorage.setItem('cq_classroom_' + code, JSON.stringify(appData));
              cloudLoaded = true;
              _setCloudSyncStatus('synced');
              setTimeout(() => _setCloudSyncStatus('standby'), 4000);
            } else {
              _setCloudSyncStatus('error', '⚠ UID Mismatch');
            }
          } else {
            _setCloudSyncStatus('local', 'No Cloud Data');
          }
        } catch (e) {
          console.warn('Cloud load error:', e);
          _setCloudSyncStatus('error', '⚠ ' + (e.code || 'Load Error'));
        }
      } else {
        _setCloudSyncStatus('local', 'Offline — Local');
      }

      // 2. Fallback to localStorage if cloud wasn't available
      if (!cloudLoaded) {
        const local = localStorage.getItem('cq_classroom_' + code);
        if (local) {
          try { appData = JSON.parse(local); } catch (e) { }
        }
      }

      // Restore button
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-outlined text-[16px]">cloud_download</span><span>Sync from Cloud</span>';
      }

      render();
      populateAdminProfileForm();

      showAstralAnnouncement({
        title: cloudLoaded ? '✦ Cloud Sync Complete!' : '⚠ Offline Fallback',
        badge: cloudLoaded ? 'DATA SYNCHRONIZED' : 'LOCAL DATA LOADED',
        message: cloudLoaded
          ? `Class data for <strong>${escapeHtml(code)}</strong> has been pulled from Firebase Firestore and applied. Your roster, LP, and gold are now up-to-date.`
          : `Firebase was unreachable. Loaded the latest locally cached data for <strong>${escapeHtml(code)}</strong> instead.`,
        icon: cloudLoaded ? 'cloud_done' : 'cloud_off',
        type: cloudLoaded ? 'success' : 'warning',
        actionText: 'Continue',
        duration: 5000
      });
    }

    function toggleMobileDrawer(open) {
      const sidebar = document.getElementById('mainSidebar');
      const overlay = document.getElementById('drawerOverlay');
      if (open) {
        sidebar.classList.remove('-translate-x-full');
        overlay.style.display = 'block';
      } else {
        sidebar.classList.add('-translate-x-full');
        overlay.style.display = 'none';
      }
    }

    function closeAllOverlays() {
      document.querySelectorAll('.astral-modal').forEach(m => m.style.display = 'none');
      const drawerOverlay = document.getElementById('drawerOverlay');
      if (drawerOverlay) drawerOverlay.style.display = 'none';
      toggleMobileDrawer(false);
    }

    const tabBadgeDefaults = {
      'home': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200/60', label: 'STELLAR' },
      'display': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200/60', label: 'VOYAGERS' },
      'teacher': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200/60', label: 'SYNAPSE' },
      'admin-profile': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200/60', label: 'PROFILE' },
      'reports': { bg: 'bg-slate-100', text: 'text-slate-500', border: 'border-slate-200/60', label: 'LOGS' },
      'cards-library': { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200/60', label: 'RELICS' },
      'games': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200/60', label: 'NEBULA RAID' },
      'settings': { bg: 'bg-slate-100', text: 'text-slate-500', border: 'border-slate-200/60', label: 'VAULT' },
      'guideline': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200/60', label: 'GRIMOIRE' }
    };

    function showTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

      // Reset all nav buttons in sidebar (Fixes Quest Hub and all other tabs)
      document.querySelectorAll('.nav-btn').forEach(b => {
        const t = b.dataset.tab;
        b.classList.remove('active', 'bg-gradient-to-r', 'from-indigo-600', 'via-primary', 'to-indigo-500', 'text-white', 'shadow-md', 'shadow-indigo-200');
        b.classList.add('text-slate-600', 'hover:bg-indigo-50/70', 'hover:text-indigo-900');

        const icon = b.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.className = 'material-symbols-outlined text-[20px] text-slate-400 group-hover:text-indigo-600 transition-colors';
        }

        const badge = b.querySelector('.font-hud');
        if (badge && tabBadgeDefaults[t]) {
          const cfg = tabBadgeDefaults[t];
          badge.className = `font-hud text-[9px] px-2 py-0.5 ${cfg.bg} ${cfg.text} border ${cfg.border} rounded-full font-bold transition-all`;
        }
      });

      // Activate target tab content
      const target = document.getElementById(`tab-${tabId}`);
      if (target) target.classList.add('active');

      // Highlight active sidebar nav button
      const activeBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
      if (activeBtn) {
        activeBtn.classList.remove('text-slate-600', 'hover:bg-indigo-50/70', 'hover:text-indigo-900');
        activeBtn.classList.add('active', 'bg-gradient-to-r', 'from-indigo-600', 'via-primary', 'to-indigo-500', 'text-white', 'shadow-md', 'shadow-indigo-200');

        const icon = activeBtn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.className = 'material-symbols-outlined text-[20px] text-white transition-colors';
        }

        const badge = activeBtn.querySelector('.font-hud');
        if (badge) {
          badge.className = 'font-hud text-[9px] px-2 py-0.5 bg-white/20 text-white border border-white/30 rounded-full font-bold transition-all';
        }
      }

      // Update mobile bottom dock buttons
      document.querySelectorAll('.mobile-bottom-btn').forEach(btn => {
        const t = btn.dataset.tab;
        if (t === tabId) {
          btn.classList.add('text-indigo-600');
          btn.classList.remove('text-slate-500');
          const dot = btn.querySelector('.mobile-active-dot');
          if (dot) dot.classList.remove('hidden');
        } else {
          btn.classList.remove('text-indigo-600');
          btn.classList.add('text-slate-500');
          const dot = btn.querySelector('.mobile-active-dot');
          if (dot) dot.classList.add('hidden');
        }
      });

      // Update active section breadcrumb in top header (Requirement 6)
      const breadcrumb = document.getElementById('activeSectionBreadcrumb');
      if (breadcrumb) {
        const titles = {
          'home': 'Quest Hub',
          'display': 'Class Display',
          'teacher': 'Teacher Control',
          'admin-profile': 'Administrator Profile',
          'reports': 'Students Report',
          'cards-library': 'Cards Library',
          'games': 'Games Hub',
          'settings': 'Classroom Settings',
          'guideline': 'Guideline & Manual'
        };
        breadcrumb.innerHTML = `<span class="text-indigo-500">✦</span> <span>${titles[tabId] || 'Quest Hub'}</span>`;
      }

      if (tabId === 'admin-profile') {
        populateAdminProfileForm();
      } else if (tabId === 'cards-library') {
        renderCardsLibrary();
      } else if (tabId === 'reports') {
        renderReportsTab();
      } else if (tabId === 'games') {
        renderGames();
      } else if (tabId === 'display') {
        renderDisplay();
      } else if (tabId === 'teacher') {
        renderTeacher();
      }

      closeAllOverlays();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchDisplaySubtab(sub) {
      currentDisplaySubtab = sub;
      const btnGrid = document.getElementById('subtab-overview-btn');
      const btnRanking = document.getElementById('subtab-ranking-btn');

      if (sub === 'grid') {
        btnGrid.classList.add('bg-gradient-to-r', 'from-indigo-600', 'via-primary', 'to-indigo-500', 'text-white', 'shadow-2xs');
        btnGrid.classList.remove('text-slate-600', 'hover:bg-white');
        btnRanking.classList.remove('bg-gradient-to-r', 'from-indigo-600', 'via-primary', 'to-indigo-500', 'text-white', 'shadow-2xs');
        btnRanking.classList.add('text-slate-600', 'hover:bg-white');

        document.getElementById('displaySubtabGrid').classList.remove('hidden');
        document.getElementById('displaySubtabRanking').classList.add('hidden');
      } else {
        btnRanking.classList.add('bg-gradient-to-r', 'from-indigo-600', 'via-primary', 'to-indigo-500', 'text-white', 'shadow-2xs');
        btnRanking.classList.remove('text-slate-600', 'hover:bg-white');
        btnGrid.classList.remove('bg-gradient-to-r', 'from-indigo-600', 'via-primary', 'to-indigo-500', 'text-white', 'shadow-2xs');
        btnGrid.classList.add('text-slate-600', 'hover:bg-white');

        document.getElementById('displaySubtabGrid').classList.add('hidden');
        document.getElementById('displaySubtabRanking').classList.remove('hidden');
      }
      renderDisplay();
    }

    function changeClassFilter(className) {
      if (!className) return;
      appData.currentClass = className;
      const classStudents = appData.students.filter(s => s.class === className);
      if (classStudents.length > 0) {
        selectedStudentId = classStudents[0].id;
      } else {
        selectedStudentId = null;
      }
      updateSelectedStudentLabels();
      saveData();
    }

    function saveCurrentMeetingNumber() {
      const val = parseInt(document.getElementById('headerMeetingInput').value) || 1;
      appData.currentMeeting = val;
      saveData();
    }

    function selectStudent(id) {
      selectedStudentId = (selectedStudentId === id) ? null : id;
      updateSelectedStudentLabels();
      renderDisplay();
      renderTeacher();
    }

    function updateSelectedStudentLabels() {
      const student = appData.students.find(s => s.id === selectedStudentId);
      const tel = document.getElementById('telemetrySelectedStudent');
      const quickTarget = document.getElementById('quickReportTargetName');

      if (student) {
        if (tel) tel.textContent = `TARGET: ${student.nick.toUpperCase()} (${student.class})`;
        if (quickTarget) quickTarget.textContent = `${student.nick} - ${student.name} (${student.class})`;
      } else {
        if (tel) tel.textContent = `TARGET: NONE`;
        if (quickTarget) quickTarget.textContent = `None Selected`;
      }
    }

    /* QUICK REPORT DRAWER & DISPATCH */
    function toggleQuickReportOverlay() {
      const modal = document.getElementById('quickReportPanel');
      const overlay = document.getElementById('drawerOverlay');
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
        overlay.style.display = 'none';
      } else {
        updateSelectedStudentLabels();
        modal.style.display = 'block';
        overlay.style.display = 'block';
      }
    }

    function applyQuickReport(reason, changeVal, type = 'lp') {
      if (!requireTeacherAuth('apply directives reports')) return;
      const student = appData.students.find(s => s.id === selectedStudentId);
      if (!student) {
        showAstralAnnouncement({
          title: 'Select Cadet',
          badge: 'TARGET REQUIRED',
          message: 'Please select a cadet from the Class Display or Roster first.',
          icon: 'touch_app',
          type: 'warning'
        });
        return;
      }

      let changeLabel = '';
      if (type === 'lp') {
        student.lp = Math.max(0, Math.min(50, student.lp + changeVal));
        changeLabel = changeVal > 0 ? `+${changeVal} LP` : `${changeVal} LP`;
      } else {
        student.gold += changeVal;
        if (changeVal > 0) student.totalGoldEarned = (student.totalGoldEarned || 0) + changeVal;
        changeLabel = changeVal > 0 ? `+${changeVal} G` : `${changeVal} G`;
      }

      const meetingNum = appData.currentMeeting || 1;
      const logEntry = {
        meeting: `Meeting #${meetingNum}`,
        timestamp: new Date().toLocaleString(),
        studentName: student.name,
        studentId: student.id,
        className: student.class,
        action: reason,
        type: type,
        change: changeLabel
      };

      appData.reports.unshift(logEntry);
      sendWebhookReport(logEntry);
      saveData();
      closeAllOverlays();
    }

    function openCustomPromptReport(reasonTitle, type = 'lp') {
      if (!requireTeacherAuth('submit custom directives')) return;
      const student = appData.students.find(s => s.id === selectedStudentId);
      if (!student) {
        showAstralAnnouncement({
          title: 'Select Cadet',
          badge: 'TARGET REQUIRED',
          message: 'Please select a cadet from the Class Display or Roster first.',
          icon: 'touch_app',
          type: 'warning'
        });
        return;
      }

      pendingCustomReport = reasonTitle;
      pendingCustomReportType = type;

      document.getElementById('customReportTitle').textContent = `Directive: ${reasonTitle}`;
      document.getElementById('customReportDesc').textContent = `Target Cadet: ${student.nick} (${student.class})`;
      document.getElementById('customAmountLabel').textContent = type === 'lp' ? 'Deduct LP Amount:' : 'Award Gold Amount:';
      document.getElementById('customAmountInput').value = type === 'lp' ? '2' : '5';

      document.getElementById('quickReportPanel').style.display = 'none';
      document.getElementById('customReportModal').style.display = 'block';
    }

    function submitCustomReport() {
      const val = parseInt(document.getElementById('customAmountInput').value) || 1;
      if (pendingCustomReport) {
        const finalVal = pendingCustomReportType === 'lp' ? -Math.abs(val) : Math.abs(val);
        applyQuickReport(pendingCustomReport, finalVal, pendingCustomReportType);
      }
      closeAllOverlays();
      pendingCustomReport = null;
    }

    function sendWebhookReport(logEntry) {
      if (!appData.webhookUrl) return;
      fetch(appData.webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logEntry)
      }).catch(err => console.log('Webhook error:', err));
    }

    /* RENDER CLASS DISPLAY */
    function renderDisplay() {
      const grid = document.getElementById('displaySubtabGrid');
      grid.innerHTML = '';

      const filteredByClass = appData.students.filter(s => s.class === appData.currentClass);

      if (filteredByClass.length > 0 && (!selectedStudentId || !filteredByClass.some(s => s.id === selectedStudentId))) {
        selectedStudentId = filteredByClass[0].id;
        updateSelectedStudentLabels();
      }

      // Search & Status filters
      const displayedStudents = filteredByClass.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
          s.nick.toLowerCase().includes(currentSearchQuery.toLowerCase());
        const pct = (s.lp / 50) * 100;
        let status = 'high';
        if (pct < 30) status = 'critical';
        else if (pct < 70) status = 'mid';

        const matchesStatus = (currentStatusFilter === 'all') || (status === currentStatusFilter);
        return matchesSearch && matchesStatus;
      });

      displayedStudents.forEach((s, idx) => {
        const pct = Math.max(0, Math.min(100, (s.lp / 50) * 100));
        let statusTier = 'high';
        let statusLabel = '✦ ASTRAL HARMONY: 100% NOMINAL';
        let barGradient = 'from-sky-400 via-cyan-400 to-indigo-500';
        let topBarColor = 'bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500';
        let badgeColor = 'bg-indigo-50 text-indigo-700 border-indigo-200/60';
        let heartColor = 'text-sky-500';
        let statusNotice = 'STAMINA FULL';

        if (pct < 30) {
          statusTier = 'critical';
          statusLabel = '✦ ASTRAL WEAKNESS: CRITICAL';
          barGradient = 'from-rose-500 via-red-500 to-pink-500';
          topBarColor = 'bg-gradient-to-r from-rose-500 via-pink-500 to-red-500';
          badgeColor = 'bg-rose-50 text-rose-700 border-rose-200';
          heartColor = 'text-rose-500';
          statusNotice = 'AURA LOCKED // INTERVENTION QUEUED';
        } else if (pct < 70) {
          statusTier = 'mid';
          statusLabel = '✦ SHIELD STRAINED: RECHARGE NEEDED';
          barGradient = 'from-amber-400 via-orange-400 to-yellow-500';
          topBarColor = 'bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500';
          badgeColor = 'bg-amber-50 text-amber-700 border-amber-200/60';
          heartColor = 'text-amber-500';
          statusNotice = 'RECHARGE NEEDED';
        }

        const avatarUrl = s.avatar || AVATAR_LIST[idx % AVATAR_LIST.length];
        const role = s.role || ROLE_TITLES[idx % ROLE_TITLES.length];
        const isSelected = (s.id === selectedStudentId);

        const card = document.createElement('div');
        card.className = `student-card glow-card bg-white/95 backdrop-blur-md rounded-2xl border border-indigo-100/90 hover:border-indigo-300 flex flex-col overflow-hidden relative cursor-pointer select-none transition-all duration-300 ${isSelected ? 'selected' : ''}`;
        card.onclick = () => selectStudent(s.id);

        card.innerHTML = `
          <div class="h-1.5 w-full ${topBarColor}"></div>
          <div class="p-5 flex flex-col flex-1 gap-3.5">
            <!-- Top Badges -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/60 text-amber-800 border border-amber-200/80 shadow-2xs">
                <span class="material-symbols-outlined text-[15px] text-amber-500">toll</span>
                <span class="font-headline text-xs font-bold">${s.gold} GP</span>
              </div>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50/70 text-indigo-700 border border-indigo-100 shadow-2xs">
                <span class="material-symbols-outlined text-[15px] text-indigo-500">style</span>
                <span class="font-hud text-[10px] font-bold">${s.cards ? s.cards.length : 0} RELIC CARDS</span>
              </div>
            </div>

            <!-- Identity Block -->
            <div class="flex items-center gap-3.5 pt-1">
              <div class="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-indigo-50 ring-2 ring-indigo-100/80 shadow-sm">
                <img class="w-full h-full object-cover" src="${avatarUrl}" alt="${s.nick}">
                <span class="absolute bottom-0 right-0 font-hud text-[9px] bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-1.5 py-0.5 rounded-tl-lg font-bold">✦ ${(idx + 1).toString().padStart(2, '0')}</span>
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-hud text-[9px] text-indigo-500 font-semibold tracking-wider uppercase flex items-center gap-1">✦ ${role}</span>
                <h3 class="font-headline text-[18px] font-bold text-indigo-950 truncate tracking-tight">${s.name.toUpperCase()}</h3>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <span class="font-hud text-[10px] px-2 py-0.5 rounded-full ${badgeColor} font-bold">${s.nick}</span>
                </div>
              </div>
            </div>

            <!-- Vitality Gauge -->
            <div class="p-3 rounded-xl bg-gradient-to-br from-indigo-50/40 via-sky-50/30 to-purple-50/20 border border-indigo-100 flex flex-col gap-2 mt-auto">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[18px] ${heartColor}">favorite</span>
                  <span class="font-headline text-xs font-bold text-indigo-950 tracking-wide">ASTRAL RESONANCE</span>
                </div>
                <span class="font-headline text-xs font-bold text-indigo-700">${s.lp} / 50 LP</span>
              </div>

              <!-- Segmented Meter -->
              <div class="w-full h-2.5 bg-indigo-100/70 rounded-full overflow-hidden flex p-0.5">
                <div class="h-full bg-gradient-to-r ${barGradient} rounded-full transition-all duration-300 shadow-2xs" style="width: ${pct}%;"></div>
              </div>

              <div class="flex items-center justify-between font-hud text-[9px] text-slate-500">
                <span class="truncate">${statusLabel}</span>
                <span class="font-semibold text-indigo-600 shrink-0 ml-1">${statusNotice}</span>
              </div>
            </div>
          </div>
        `;

        grid.appendChild(card);
      });

      // Update Header & Diagnostic Statistics
      const totalStudents = filteredByClass.length;
      document.getElementById('statTotalStudents').textContent = totalStudents;
      document.getElementById('statClassDeployment').textContent = `Class ${appData.currentClass} // Deployment M-0${appData.currentMeeting || 1}`;
      document.getElementById('navVoyagersCount').textContent = `${totalStudents} VOYAGERS`;

      const sumGold = filteredByClass.reduce((sum, s) => sum + s.gold, 0);
      document.getElementById('statClassGold').textContent = sumGold.toLocaleString();

      const avgLp = totalStudents > 0 ? (filteredByClass.reduce((sum, s) => sum + s.lp, 0) / totalStudents).toFixed(1) : '0.0';
      document.getElementById('statAvgLP').textContent = avgLp;

      const avgPct = totalStudents > 0 ? Math.round((parseFloat(avgLp) / 50) * 100) : 0;
      document.getElementById('vitalityPctLabel').textContent = `✦ STELLAR RESONANCE: ${avgPct}%`;
      document.getElementById('vitalityBarFill').style.width = `${avgPct}%`;
      document.getElementById('currentSanctumLabel').textContent = `SANCTUM ${appData.currentClass} // CELESTIAL VANGUARD`;

      renderRanking(filteredByClass);
    }

    /* RENDER RANKING PODIUM & LIST */
    function renderRanking(students) {
      const podium = document.getElementById('podiumWrapper');
      const list = document.getElementById('rankingListItems');
      podium.innerHTML = '';
      list.innerHTML = '';

      const sorted = [...students].sort((a, b) => {
        if (b.lp !== a.lp) return b.lp - a.lp;
        return ((b.totalGoldEarned || b.gold) + (b.totalCardsEarned || (b.cards ? b.cards.length : 0))) -
          ((a.totalGoldEarned || a.gold) + (a.totalCardsEarned || (a.cards ? a.cards.length : 0)));
      });

      const first = sorted[0];
      const second = sorted[1];
      const third = sorted[2];

      const renderPodiumStep = (cadet, rankNum, heightClass, bgGradient) => {
        if (!cadet) return `<div class="w-28 opacity-0"></div>`;
        return `
          <div class="flex flex-col items-center w-28 sm:w-32">
            <div class="p-3 bg-white/90 border border-indigo-100 rounded-2xl shadow-sm text-center w-full mb-2">
              <strong class="font-headline text-xs font-bold text-indigo-950 block truncate">${cadet.nick}</strong>
              <span class="font-hud text-[11px] text-indigo-600 font-bold">${cadet.lp} LP</span>
              <span class="font-hud text-[10px] text-amber-600 block">${cadet.gold} GP</span>
            </div>
            <div class="w-full ${heightClass} ${bgGradient} text-white font-headline text-2xl font-black flex items-center justify-center rounded-t-2xl shadow-md">
              ${rankNum}
            </div>
          </div>
        `;
      };

      podium.innerHTML = `
        ${renderPodiumStep(second, '2', 'h-24', 'bg-gradient-to-t from-slate-400 to-slate-300')}
        ${renderPodiumStep(first, '1', 'h-36', 'bg-gradient-to-t from-amber-500 to-amber-300 text-slate-900')}
        ${renderPodiumStep(third, '3', 'h-16', 'bg-gradient-to-t from-amber-700 to-amber-600')}
      `;

      sorted.forEach((s, idx) => {
        const item = document.createElement('div');
        item.className = 'py-3 px-2 flex items-center justify-between text-xs hover:bg-indigo-50/50 transition-colors';
        item.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="w-6 font-hud font-bold text-sm ${idx < 3 ? 'text-amber-500' : 'text-slate-400'}">#${idx + 1}</span>
            <div class="flex flex-col">
              <span class="font-headline font-bold text-indigo-950 text-sm">${s.name}</span>
              <span class="font-hud text-[10px] text-slate-500">Callsign: ${s.nick}</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="font-hud text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-100">${s.lp} LP</span>
            <span class="font-hud text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">${s.gold} GP</span>
          </div>
        `;
        list.appendChild(item);
      });
    }

    /* RENDER TEACHER CONTROL */
    let draggedElement = null;

    function renderTeacher() {
      const list = document.getElementById('teacherStudentList');
      list.innerHTML = '';
      const filtered = appData.students.filter(s => s.class === appData.currentClass);

      if (filtered.length > 0 && (!selectedStudentId || !filtered.some(s => s.id === selectedStudentId))) {
        selectedStudentId = filtered[0].id;
        updateSelectedStudentLabels();
      }

      filtered.forEach((s, index) => {
        const row = document.createElement('div');
        row.className = `student-row p-3 bg-white border border-indigo-100 rounded-xl shadow-2xs flex items-center justify-between transition-all select-none ${s.id === selectedStudentId ? 'ring-2 ring-indigo-400 bg-indigo-50/30' : ''}`;
        row.draggable = true;
        row.dataset.id = s.id;
        row.onclick = () => selectStudent(s.id);

        row.addEventListener('dragstart', handleDragStart);
        row.addEventListener('dragover', handleDragOver);
        row.addEventListener('drop', handleDrop);
        row.addEventListener('dragend', handleDragEnd);

        row.innerHTML = `
          <div class="flex items-center gap-3">
            <input type="checkbox" value="${s.id}" class="rounded text-indigo-600 focus:ring-indigo-400" onclick="event.stopPropagation()">
            <span class="cursor-grab text-slate-400 text-sm">☰</span>
            <span class="font-hud text-xs font-bold text-indigo-600">#${(index + 1).toString().padStart(2, '0')}</span>
            <div class="flex flex-col">
              <strong class="font-headline text-xs font-bold text-indigo-950">${s.name} (${s.nick})</strong>
              <span class="font-hud text-[10px] text-slate-500">${s.lp} LP | ${s.gold} GP | ${s.cards ? s.cards.length : 0} Relics</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5" onclick="event.stopPropagation()">
            <button onclick="openEditStudent(${s.id})" class="px-2 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-headline text-[11px] font-bold rounded-lg border border-indigo-200 transition-all">✏️ Edit</button>
            <button onclick="modifyGold(${s.id}, -1)" class="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-hud text-[11px] font-bold rounded-lg transition-all">-1G</button>
            <button onclick="modifyGold(${s.id}, 1)" class="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-hud text-[11px] font-bold rounded-lg transition-all">+1G</button>
            <button onclick="removeStudent(${s.id})" class="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-[11px] font-bold transition-all">✕</button>
          </div>
        `;
        list.appendChild(row);
      });

      // Update Selected Student Details in Side Panel
      const active = appData.students.find(s => s.id === selectedStudentId);
      if (active) {
        document.getElementById('panelStudentName').textContent = active.name;
        document.getElementById('panelLP').textContent = `${active.lp} LP`;
        document.getElementById('panelGold').textContent = `${active.gold} GP`;

        const cardsContainer = document.getElementById('panelCards');
        cardsContainer.innerHTML = '';
        if (!active.cards || active.cards.length === 0) {
          cardsContainer.innerHTML = `<span class="text-xs text-slate-400 text-center block py-4">No tactical cards held in inventory.</span>`;
        } else {
          active.cards.forEach((cardName, cIdx) => {
            const cardData = CARD_LIBRARY[cardName] || { icon: '🃏', desc: 'Custom Relic' };
            const cardEl = document.createElement('div');
            cardEl.className = 'bg-white p-2.5 rounded-xl border border-indigo-100 text-xs shadow-2xs space-y-1.5';
            cardEl.innerHTML = `
              <div class="flex items-center justify-between font-headline font-bold text-indigo-950">
                <span>${cardData.icon} ${cardName}</span>
                <span class="font-hud text-[9px] text-amber-600">READY</span>
              </div>
              <p class="font-body text-[11px] text-slate-500 leading-tight">${cardData.desc}</p>
              <button onclick="event.stopPropagation(); useCard(${active.id}, ${cIdx})" class="w-full py-1 bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-headline text-[10px] font-bold rounded-lg shadow-2xs">
                ▶️ Play Card
              </button>
            `;
            cardsContainer.appendChild(cardEl);
          });
        }
      } else {
        document.getElementById('panelStudentName').textContent = 'Select a Student';
        document.getElementById('panelLP').textContent = '-';
        document.getElementById('panelGold').textContent = '-';
        document.getElementById('panelCards').innerHTML = `<span class="text-xs text-slate-400 text-center block py-4">Select a student from the roster to inspect inventory.</span>`;
      }
    }

    function handleDragStart(e) {
      draggedElement = this;
      this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    }
    function handleDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }
    function handleDrop(e) {
      e.preventDefault();
      if (draggedElement !== this) {
        const rows = Array.from(document.querySelectorAll('#teacherStudentList .student-row'));
        const draggedIdx = rows.indexOf(draggedElement);
        const targetIdx = rows.indexOf(this);

        const currentClassStudents = appData.students.filter(s => s.class === appData.currentClass);
        const draggedStudent = currentClassStudents[draggedIdx];

        currentClassStudents.splice(draggedIdx, 1);
        currentClassStudents.splice(targetIdx, 0, draggedStudent);

        const otherStudents = appData.students.filter(s => s.class !== appData.currentClass);
        appData.students = [...otherStudents, ...currentClassStudents];
        saveData();
      }
    }
    function handleDragEnd() {
      this.classList.remove('dragging');
      draggedElement = null;
    }

    function toggleSelectAllRoster(state) {
      document.querySelectorAll('#teacherStudentList input[type="checkbox"]').forEach(cb => cb.checked = state);
    }

    function awardBatchGold() {
      if (!requireTeacherAuth('distribute batch gold')) return;
      const checkboxes = document.querySelectorAll('#teacherStudentList input[type="checkbox"]:checked');
      if (checkboxes.length === 0) {
        showAstralAnnouncement({
          title: 'No Cadets Selected',
          badge: 'BATCH REWARD',
          message: 'Please check at least one cadet in the roster list to distribute gold.',
          icon: 'checklist',
          type: 'warning'
        });
        return;
      }

      const goldVal = parseInt(document.getElementById('batchGoldInput').value) || 0;
      if (goldVal <= 0) {
        showAstralAnnouncement({
          title: 'Invalid Gold Amount',
          badge: 'BATCH REWARD',
          message: 'Please enter a valid gold amount greater than 0.',
          icon: 'monetization_on',
          type: 'warning'
        });
        return;
      }

      const meetingNum = appData.currentMeeting || 1;
      checkboxes.forEach(cb => {
        const studentId = parseInt(cb.value);
        const student = appData.students.find(s => s.id === studentId);
        if (student) {
          student.gold += goldVal;
          student.totalGoldEarned = (student.totalGoldEarned || 0) + goldVal;

          const logEntry = {
            meeting: `Meeting #${meetingNum}`,
            timestamp: new Date().toLocaleString(),
            studentName: student.name,
            studentId: student.id,
            className: student.class,
            action: 'Batch Teacher Reward',
            type: 'gold',
            change: `+${goldVal} G`
          };
          appData.reports.unshift(logEntry);
        }
      });

      saveData();
      showAstralAnnouncement({
        title: 'Gold Distributed',
        badge: 'BATCH REWARD',
        message: `Awarded +${goldVal} Gold to ${checkboxes.length} cadet(s)!`,
        icon: 'stars',
        type: 'success',
        duration: 3000
      });
    }

    /* RENDER STUDENTS REPORT ACCORDION */
    function switchReportsSubtab(type) {
      currentReportsSubtab = type;
      ['all', 'lp', 'gold', 'card'].forEach(t => {
        const btn = document.getElementById(`reports-subtab-${t}-btn`);
        if (btn) {
          if (t === type) {
            btn.className = 'subtab-btn active px-3.5 py-1.5 rounded-xl bg-primary text-white font-headline text-xs font-bold shadow-2xs';
          } else {
            btn.className = 'subtab-btn px-3.5 py-1.5 rounded-xl bg-white text-slate-600 font-headline text-xs font-semibold border border-indigo-100 hover:bg-indigo-50';
          }
        }
      });

      const headings = {
        'all': '✦ All Directives & Activity Logs',
        'lp': '📝 Students LP Conduct History',
        'gold': '🪙 Students Gold Ledger',
        'card': '🃏 Relic Cards Activation History'
      };
      const headingEl = document.getElementById('reportsTabHeading');
      if (headingEl) headingEl.textContent = headings[type] || headings['lp'];

      renderReportsTab();
    }

    let expandAllReportsState = false;
    function toggleAllReportDrawers(expand) {
      expandAllReportsState = expand;
      if (!expand) openedReportStudentId = null;
      renderReportsTab();
    }

    function toggleReportStudentDrawer(studentId) {
      openedReportStudentId = (openedReportStudentId === studentId) ? null : studentId;
      renderReportsTab();
    }

    function deleteReportEntry(reportIndex) {
      if (!requireTeacherAuth('delete a report entry')) return;
      if (confirm('Delete this report entry permanently?')) {
        appData.reports.splice(reportIndex, 1);
        saveData();
      }
    }

    function renderReportsTab() {
      const container = document.getElementById('reportsAccordionContainer');
      if (!container) return;
      container.innerHTML = '';

      const studentsInClass = appData.students.filter(s => s.class === appData.currentClass);

      const classLogs = appData.reports.filter(r =>
        r.className === appData.currentClass ||
        studentsInClass.some(s => s.id === r.studentId || s.name === r.studentName)
      );

      const elTotal = document.getElementById('reportStatTotalEvents');
      if (elTotal) elTotal.textContent = classLogs.length;

      const elLP = document.getElementById('reportStatLPCount');
      if (elLP) elLP.textContent = classLogs.filter(r => (r.type || 'lp') === 'lp').length;

      const elGold = document.getElementById('reportStatGoldCount');
      if (elGold) elGold.textContent = classLogs.filter(r => r.type === 'gold').length;

      if (studentsInClass.length === 0) {
        container.innerHTML = `<div class="p-8 text-center text-slate-400 bg-indigo-50/30 rounded-xl border border-indigo-100">No registered cadets in Sanctum ${escapeHtml(appData.currentClass)}.</div>`;
        return;
      }

      const searchVal = (document.getElementById('reportSearchInput')?.value || '').trim().toLowerCase();
      const filteredStudents = studentsInClass.filter(s =>
        s.name.toLowerCase().includes(searchVal) || s.nick.toLowerCase().includes(searchVal)
      );

      if (filteredStudents.length === 0) {
        container.innerHTML = `<div class="p-8 text-center text-slate-400 bg-indigo-50/30 rounded-xl border border-indigo-100">No cadets match "${escapeHtml(searchVal)}".</div>`;
        return;
      }

      if (openedReportStudentId === null && selectedStudentId && studentsInClass.some(s => s.id === selectedStudentId)) {
        openedReportStudentId = selectedStudentId;
      }

      filteredStudents.forEach(s => {
        const isOpen = expandAllReportsState || (openedReportStudentId === s.id);
        const logs = appData.reports.filter(r =>
          (r.studentId ? r.studentId === s.id : (r.studentName === s.name && (r.className ? r.className === s.class : true))) &&
          (currentReportsSubtab === 'all' || (r.type || 'lp') === currentReportsSubtab)
        );

        const card = document.createElement('div');
        card.className = `bg-white border rounded-xl shadow-2xs overflow-hidden transition-all ${isOpen ? 'border-indigo-400 ring-1 ring-indigo-200' : 'border-indigo-100'}`;

        let logsHTML = '';
        if (logs.length === 0) {
          logsHTML = `<div class="text-xs text-slate-400 py-3 text-center">No ${currentReportsSubtab.toUpperCase()} events logged for ${escapeHtml(s.nick)} yet.</div>`;
        } else {
          logsHTML = `
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse mt-2">
                <thead>
                  <tr class="bg-indigo-50/70 text-indigo-900 border-b border-indigo-100">
                    <th class="p-2 font-hud">Meeting #</th>
                    <th class="p-2">Timestamp</th>
                    <th class="p-2">Directive / Reason</th>
                    <th class="p-2 font-hud">Adjustment</th>
                    <th class="p-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-indigo-50">
                  ${logs.map(l => {
            const globalIdx = appData.reports.indexOf(l);
            let changeColor = 'text-emerald-600';
            if (l.change && l.change.includes('-')) changeColor = 'text-rose-600';
            else if (l.type === 'card') changeColor = 'text-indigo-600';

            return `
                      <tr class="hover:bg-indigo-50/30">
                        <td class="p-2 font-hud font-bold text-amber-600">${escapeHtml(l.meeting || 'Meeting #1')}</td>
                        <td class="p-2 font-hud text-[10px] text-slate-400">${escapeHtml(l.timestamp || '')}</td>
                        <td class="p-2 font-body font-medium text-indigo-950">${escapeHtml(l.action || '')}</td>
                        <td class="p-2 font-hud font-bold ${changeColor}">${escapeHtml(l.change || '')}</td>
                        <td class="p-2 text-center">
                          <button onclick="deleteReportEntry(${globalIdx})" title="Delete entry" class="text-rose-500 hover:text-rose-700 text-xs font-bold p-1 rounded hover:bg-rose-50">🗑️</button>
                        </td>
                      </tr>
                    `;
          }).join('')}
                </tbody>
              </table>
            </div>
          `;
        }

        card.innerHTML = `
          <div onclick="toggleReportStudentDrawer(${s.id})" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-indigo-50/40 select-none">
            <div class="flex items-center gap-2">
              <strong class="font-headline text-sm font-bold text-indigo-950">${escapeHtml(s.name)}</strong>
              <span class="font-hud text-xs text-slate-400">(${escapeHtml(s.nick)})</span>
              <span class="font-hud text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-bold border border-indigo-100">${logs.length} Log${logs.length === 1 ? '' : 's'}</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="font-hud text-xs font-bold text-indigo-600">${s.lp} LP</span>
              <span class="font-hud text-xs font-bold text-amber-600">${s.gold} GP</span>
              <span class="font-hud text-xs text-indigo-400">${isOpen ? '▲' : '▼'}</span>
            </div>
          </div>
          ${isOpen ? `
            <div class="p-4 bg-slate-50/50 border-t border-indigo-100">
              <div class="flex items-center justify-between pb-2 mb-2 border-b border-indigo-100">
                <span class="font-hud text-xs text-slate-500">Sanctum: Class ${escapeHtml(s.class)} | Inventory: ${s.cards ? s.cards.length : 0} Relics | Lifetime Stardust: ${s.totalGoldEarned || s.gold} GP</span>
                <button onclick="toggleReportStudentDrawer(${s.id})" class="text-xs text-slate-400 hover:text-slate-600">Close</button>
              </div>
              ${logsHTML}
            </div>
          ` : ''}
        `;

        container.appendChild(card);
      });
    }

    function exportReportsToCSV() {
      if (!requireTeacherAuth('export Class CSV reports')) return;
      const classLogs = appData.reports.filter(r => r.className === appData.currentClass);
      if (classLogs.length === 0) {
        showAstralAnnouncement({
          title: 'No Logs Found',
          badge: 'CSV EXPORT NOTICE',
          message: `No directive or report logs found for Class <strong>${escapeHtml(appData.currentClass)}</strong>.`,
          icon: 'info',
          type: 'warning'
        });
        return;
      }

      // Helper function to sanitize text fields and handle quotes/commas safely
      const formatCell = (val) => {
        if (val === null || val === undefined) return '""';
        const cleanStr = String(val).replace(/"/g, '""'); // Escape inner quotes
        return `"${cleanStr}"`;
      };

      // Exact target headers
      const headers = ["Meeting", "Student Name", "Class", "Type", "Action", "Adjustment"];

      // Build rows using safe cell escaping
      const rows = classLogs.map(r => [
        formatCell(r.meeting || 'Meeting #1'),
        formatCell(r.studentName || ''),
        formatCell(r.className || ''),
        formatCell((r.type || 'lp').toUpperCase()),
        formatCell(r.action || ''),
        formatCell(r.change || '')
      ].join(","));

      // Prepends \uFEFF (UTF-8 BOM) so Excel immediately opens it as a tabular spreadsheet
      const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");

      // Create downloadable file link
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Class_${appData.currentClass}_Report_${new Date().toISOString().slice(0, 10)}.csv`;
      link.click();
      URL.revokeObjectURL(url);

      showAstralAnnouncement({
        title: 'CSV Report Exported',
        badge: 'DATA EXPORTED',
        message: `Activity reports for Sanctum <strong>Class ${escapeHtml(appData.currentClass)}</strong> exported as CSV file.`,
        icon: 'download_done',
        type: 'success',
        duration: 3500
      });
    }

    function exportDataToJSON() {
      if (!requireTeacherAuth('export JSON roster data')) return;
      const blob = new Blob([JSON.stringify(appData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Class_Quest_Journal_${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);

      showAstralAnnouncement({
        title: 'JSON Backup Exported',
        badge: 'SANCTUM BACKUP',
        message: 'All classes, cadets, cards, and activity logs exported successfully to JSON.',
        icon: 'save',
        type: 'success',
        duration: 3500
      });
    }

    function importDataFromJSON(event) {
      if (!requireTeacherAuth('import JSON roster backup')) {
        if (event && event.target) event.target.value = '';
        return;
      }
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed && Array.isArray(parsed.classes) && Array.isArray(parsed.students)) {
            appData = parsed;
            if (!Array.isArray(appData.games)) appData.games = DEFAULT_GAMES;
            if (!Array.isArray(appData.reports)) appData.reports = [];
            selectedStudentId = null;
            saveData();
            showAstralAnnouncement({
              title: 'Sanctum Restored!',
              badge: 'RESTORE SUCCESS',
              message: 'Roster data and classroom state successfully restored from JSON backup.',
              icon: 'verified',
              type: 'success'
            });
          }
        } catch (err) {
          showAstralAnnouncement({
            title: 'Import Failed',
            badge: 'PARSING ERROR',
            message: 'Unable to parse JSON backup file. Please verify the file structure.',
            icon: 'error',
            type: 'error'
          });
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    /* RENDER CARDS LIBRARY & PREVIEW */
    let previewingCardName = null;

    function openCardPreviewModal(cardName, showBuyBtn = false) {
      const c = CARD_LIBRARY[cardName];
      if (!c) return;

      previewingCardName = cardName;
      document.getElementById('cardPreviewTitle').textContent = cardName;
      document.getElementById('cardPreviewIcon').textContent = c.icon || '🃏';
      document.getElementById('cardPreviewCost').textContent = `COST: ${c.price} GP`;
      document.getElementById('cardPreviewDesc').textContent = c.desc;

      const typeBadge = document.getElementById('cardPreviewTypeBadge');
      if (typeBadge) {
        const typeStr = (c.type || 'relic').toUpperCase();
        typeBadge.textContent = `${typeStr} RELIC`;
        if (c.type === 'defensive') {
          typeBadge.className = 'font-hud text-[9px] px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-3 bg-sky-100 text-sky-800 border border-sky-200';
        } else if (c.type === 'targeted') {
          typeBadge.className = 'font-hud text-[9px] px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-3 bg-purple-100 text-purple-800 border border-purple-200';
        } else if (c.type === 'instant') {
          typeBadge.className = 'font-hud text-[9px] px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-3 bg-emerald-100 text-emerald-800 border border-emerald-200';
        } else if (c.type === 'buff') {
          typeBadge.className = 'font-hud text-[9px] px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-3 bg-amber-100 text-amber-800 border border-amber-200';
        } else {
          typeBadge.className = 'font-hud text-[9px] px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-3 bg-indigo-100 text-indigo-800 border border-indigo-200';
        }
      }

      const actionBtn = document.getElementById('cardPreviewActionBtn');
      if (actionBtn) {
        if (showBuyBtn && selectedStudentId) {
          actionBtn.classList.remove('hidden');
        } else {
          actionBtn.classList.add('hidden');
        }
      }

      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.style.display = 'block';
      const modal = document.getElementById('cardPreviewModal');
      if (modal) modal.style.display = 'block';
    }

    function buyCardChoiceFromPreview() {
      if (previewingCardName) {
        buyCardChoice(previewingCardName);
      }
    }

    function renderCardsLibrary() {
      const container = document.getElementById('cardsLibraryContainer');
      if (!container) return;

      container.innerHTML = '';

      Object.keys(CARD_LIBRARY).forEach(cardName => {
        const c = CARD_LIBRARY[cardName];
        const card = document.createElement('div');
        card.className = 'relic-card cursor-pointer hover:scale-[1.02] transition-transform shadow-xs hover:shadow-md';
        card.onclick = () => openCardPreviewModal(cardName);

        let typeBadgeClass = 'bg-indigo-50 text-indigo-700 border-indigo-200';
        if (c.type === 'defensive') typeBadgeClass = 'bg-sky-50 text-sky-700 border-sky-200';
        else if (c.type === 'targeted') typeBadgeClass = 'bg-purple-50 text-purple-700 border-purple-200';
        else if (c.type === 'instant') typeBadgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
        else if (c.type === 'buff') typeBadgeClass = 'bg-amber-50 text-amber-700 border-amber-200';

        card.innerHTML = `
          <div class="flex items-center justify-between font-hud text-[10px] mb-1">
            <span class="px-2 py-0.5 rounded-full font-bold uppercase border ${typeBadgeClass}">${c.type || 'Relic'}</span>
            <span class="text-indigo-400">✦</span>
          </div>
          <div class="text-center my-3 text-4xl transform hover:scale-110 transition-transform">${c.icon}</div>
          <div class="text-center font-headline font-bold text-base text-indigo-950">${escapeHtml(cardName)}</div>
          <p class="text-center font-body text-xs text-slate-500 my-2 leading-relaxed flex-1 flex items-center justify-center">${escapeHtml(c.desc)}</p>
          <div class="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-indigo-50">
            <span class="font-hud text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              Cost: ${c.price} GP
            </span>
            <button onclick="event.stopPropagation(); openCardPreviewModal('${escapeHtml(cardName)}')" class="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-headline text-[11px] font-bold rounded-lg border border-indigo-200 transition-all flex items-center gap-1">
              <span>🔍 Preview</span>
            </button>
          </div>
        `;
        container.appendChild(card);
      });
    }

    /* RENDER GAMES HUB */
    function renderGames() {
      const grid = document.getElementById('gameGrid');
      if (!grid) return;
      grid.innerHTML = '';

      appData.games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'glow-card bg-white p-5 rounded-2xl border border-indigo-100 flex flex-col items-center text-center cursor-pointer select-none group';
        card.onclick = () => launchGame(game);
        card.innerHTML = `
          <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">${game.icon || '🎮'}</div>
          <h3 class="font-headline font-bold text-sm text-indigo-950 group-hover:text-indigo-600 transition-colors">${game.title}</h3>
          <span class="font-hud text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 mt-2">
            💰 +${game.goldReward} Base GP
          </span>
        `;
        grid.appendChild(card);
      });

      const tableBody = document.getElementById('manageGamesTableBody');
      if (tableBody) {
        tableBody.innerHTML = '';
        appData.games.forEach(g => {
          const tr = document.createElement('tr');
          tr.className = 'hover:bg-indigo-50/30';
          tr.innerHTML = `
            <td class="p-2.5 text-center"><input type="checkbox" value="${g.id}" class="rounded text-indigo-600"></td>
            <td class="p-2.5 text-xl">${g.icon || '🎮'}</td>
            <td class="p-2.5 font-headline font-bold text-indigo-950">${g.title}</td>
            <td class="p-2.5 font-hud font-bold text-amber-600">+${g.goldReward} GP</td>
            <td class="p-2.5 font-hud text-slate-400">${g.path}</td>
            <td class="p-2.5 text-center">
              <button onclick="openEditGameModal('${g.id}')" class="px-2 py-1 bg-indigo-50 text-indigo-700 font-headline text-[10px] font-bold rounded-md">✏️ Edit</button>
              <button onclick="deleteSingleGame('${g.id}')" class="px-2 py-1 bg-rose-50 text-rose-600 font-headline text-[10px] font-bold rounded-md">✕</button>
            </td>
          `;
          tableBody.appendChild(tr);
        });
      }
    }

    function launchGame(game) {
      activePlayingGame = game;
      window.open(game.path, '_blank');
      finishGamePrompt();
    }

    function finishGamePrompt() {
      const currentStudents = appData.students.filter(s => s.class === appData.currentClass);
      if (currentStudents.length === 0) return;

      document.getElementById('rewardAmountText').textContent = `+${activePlayingGame.goldReward} Gold`;
      const container = document.getElementById('studentChecklistContainer');
      container.innerHTML = '';

      currentStudents.forEach((st, idx) => {
        const item = document.createElement('label');
        item.className = 'flex items-center gap-2 p-1.5 hover:bg-indigo-50/50 rounded-lg cursor-pointer';
        item.innerHTML = `
          <input type="checkbox" value="${st.id}" class="rounded text-indigo-600">
          <span class="font-headline text-xs font-semibold text-slate-800">#${idx + 1} ${st.nick} (${st.name})</span>
        `;
        container.appendChild(item);
      });

      document.getElementById('rewardModal').style.display = 'block';
    }

    function toggleSelectAllStudents(selectState) {
      document.querySelectorAll('#studentChecklistContainer input[type="checkbox"]').forEach(cb => cb.checked = selectState);
    }

    function confirmMultiGoldAward() {
      const checkboxes = document.querySelectorAll('#studentChecklistContainer input[type="checkbox"]:checked');
      if (checkboxes.length === 0) return alert('No cadets selected.');

      const baseReward = activePlayingGame ? activePlayingGame.goldReward : 0;
      checkboxes.forEach(cb => {
        const studentId = parseInt(cb.value);
        const student = appData.students.find(s => s.id === studentId);
        if (student) {
          let reward = baseReward;
          if (student.effects.includes('Time Warp')) {
            reward = 0;
            student.effects.splice(student.effects.indexOf('Time Warp'), 1);
          } else if (student.effects.includes('Gold Rush')) {
            reward = baseReward * 2;
            student.effects.splice(student.effects.indexOf('Gold Rush'), 1);
          }
          student.gold += reward;
          student.totalGoldEarned = (student.totalGoldEarned || 0) + reward;
        }
      });

      saveData();
      closeAllOverlays();
      activePlayingGame = null;
    }

    function skipGoldAwarding() {
      closeAllOverlays();
      activePlayingGame = null;
    }

    /* CARD USAGE & SHOP */
    function getClassCardsCount(className) {
      return appData.students.filter(s => s.class === className).reduce((sum, s) => sum + (s.cards ? s.cards.length : 0), 0);
    }

    function openShop() {
      if (!selectedStudentId) {
        showAstralAnnouncement({
          title: 'Select Cadet',
          badge: 'CADET REQUIRED',
          message: 'Please select a cadet from the Class Display or Roster first before visiting the Relic Shop.',
          icon: 'storefront',
          type: 'warning'
        });
        return;
      }
      document.getElementById('shopModal').style.display = 'block';
      document.getElementById('shopCardsContainer').innerHTML = '';
      updateShopHeader();
    }

    function updateShopHeader() {
      const remainingDeck = CLASS_DECK_LIMIT - getClassCardsCount(appData.currentClass);
      document.getElementById('shopClassName').textContent = appData.currentClass;
      document.getElementById('classDeckCount').textContent = Math.max(0, remainingDeck);
    }

    function generateShopOffers() {
      const remaining = CLASS_DECK_LIMIT - getClassCardsCount(appData.currentClass);
      if (remaining <= 0) {
        showAstralAnnouncement({
          title: 'Deck Limit Reached',
          badge: 'RELIC VAULT FULL',
          message: 'Class deck limit reached (60/60 cards held). Play or exchange cards first.',
          icon: 'style',
          type: 'warning'
        });
        return;
      }

      const keys = Object.keys(CARD_LIBRARY);
      currentShopOffers = [
        keys[Math.floor(Math.random() * keys.length)],
        keys[Math.floor(Math.random() * keys.length)]
      ];
      renderShopOffers();
    }

    function renderShopOffers() {
      const container = document.getElementById('shopCardsContainer');
      container.innerHTML = '';
      currentShopOffers.forEach((cardName, idx) => {
        const c = CARD_LIBRARY[cardName];
        const cardEl = document.createElement('div');
        cardEl.className = 'relic-card cursor-pointer hover:border-amber-400';
        cardEl.onclick = () => buyCardChoice(cardName);
        cardEl.innerHTML = `
          <div class="flex items-center justify-between font-hud text-[10px] text-amber-600">
            <span>OFFER 0${idx + 1}</span>
            <span>✦</span>
          </div>
          <div class="text-center my-2 text-3xl">${c.icon}</div>
          <div class="text-center font-headline font-bold text-sm text-indigo-950">${cardName}</div>
          <p class="text-center font-body text-[11px] text-slate-500 my-1 leading-tight flex-1 flex items-center justify-center">${c.desc}</p>
          <div class="text-center font-hud text-xs font-bold text-amber-600 bg-amber-50 py-1 rounded-lg border border-amber-200">
            Cost: ${c.price} GP
          </div>
        `;
        container.appendChild(cardEl);
      });
    }

    function buyCardChoice(cardName) {
      if (!requireTeacherAuth('purchase relic cards')) return;
      const student = appData.students.find(s => s.id === selectedStudentId);
      const c = CARD_LIBRARY[cardName];
      if (getClassCardsCount(appData.currentClass) >= CLASS_DECK_LIMIT) {
        showAstralAnnouncement({
          title: 'Deck Limit Exceeded',
          badge: 'INVENTORY FULL',
          message: '60-card class limit reached!',
          icon: 'warning',
          type: 'warning'
        });
        return;
      }
      if (student.gold < c.price) {
        showAstralAnnouncement({
          title: 'Insufficient Gold',
          badge: 'STOREHOUSE',
          message: `Cadet <strong>${escapeHtml(student.nick)}</strong> does not have enough Gold for ${cardName} (Requires ${c.price} GP).`,
          icon: 'monetization_on',
          type: 'warning'
        });
        return;
      }

      student.gold -= c.price;
      if (!Array.isArray(student.cards)) student.cards = [];
      student.cards.push(cardName);
      student.totalCardsEarned = (student.totalCardsEarned || 0) + 1;

      const meetingNum = appData.currentMeeting || 1;
      appData.reports.unshift({
        meeting: `Meeting #${meetingNum}`,
        timestamp: new Date().toLocaleString(),
        studentName: student.name,
        studentId: student.id,
        className: student.class,
        action: `Relic Purchased: ${cardName}`,
        type: 'gold',
        change: `-${c.price} G`
      });

      saveData();
      closeAllOverlays();
      showAstralAnnouncement({
        title: 'Relic Acquired',
        badge: 'CARD EQUIPPED',
        message: `Cadet <strong>${escapeHtml(student.nick)}</strong> purchased <strong>${cardName}</strong>!`,
        icon: 'stars',
        type: 'success',
        duration: 3000
      });
    }

    function useCard(studentId, cardIndex) {
      if (!requireTeacherAuth('activate relic cards')) return;
      const student = appData.students.find(s => s.id === studentId);
      if (!student || !student.cards || !student.cards[cardIndex]) return;

      const cardName = student.cards[cardIndex];
      const meetingNum = appData.currentMeeting || 1;

      if (cardName === 'Health Potion') {
        if (confirm(`Play "Health Potion"? Restores +2 LP to ${student.nick}.`)) {
          student.lp = Math.min(50, student.lp + 2);
          appData.reports.unshift({
            meeting: `Meeting #${meetingNum}`,
            timestamp: new Date().toLocaleString(),
            studentName: student.name,
            studentId: student.id,
            className: student.class,
            action: `Relic Played: Health Potion`,
            type: 'card',
            change: `+2 LP`
          });
          removeCardIndexFromStudent(student, cardIndex);
        }
      } else if (cardName === 'Master Thief') {
        const classmates = appData.students.filter(s => s.class === student.class && s.id !== student.id);
        if (classmates.length === 0) return alert('No classmates to steal from!');
        if (confirm(`Play "Master Thief"? Deducts 1 Gold from classmates and gives half to ${student.nick}.`)) {
          let totalStolen = 0;
          classmates.forEach(st => { st.gold -= 1; totalStolen += 1; });
          const earned = Math.floor(totalStolen / 2);
          student.gold += earned;
          student.totalGoldEarned = (student.totalGoldEarned || 0) + earned;
          appData.reports.unshift({
            meeting: `Meeting #${meetingNum}`,
            timestamp: new Date().toLocaleString(),
            studentName: student.name,
            studentId: student.id,
            className: student.class,
            action: `Relic Played: Master Thief`,
            type: 'card',
            change: `+${earned} G`
          });
          removeCardIndexFromStudent(student, cardIndex);
        }
      } else if (cardName === 'LP Donor') {
        promptTargetSelection('LP Donor', student, (target) => {
          const donorAmount = Math.min(3, student.lp - 1);
          if (donorAmount <= 0) return alert('Not enough LP to donate!');
          student.lp -= donorAmount;
          target.lp = Math.min(50, target.lp + donorAmount);
          student.gold += donorAmount * 2;
          student.totalGoldEarned = (student.totalGoldEarned || 0) + (donorAmount * 2);
          appData.reports.unshift({
            meeting: `Meeting #${meetingNum}`,
            timestamp: new Date().toLocaleString(),
            studentName: student.name,
            studentId: student.id,
            className: student.class,
            action: `Relic Played: LP Donor (to ${target.nick})`,
            type: 'card',
            change: `-${donorAmount} LP / +${donorAmount * 2} G`
          });
          removeCardIndexFromStudent(student, cardIndex);
        });
      } else if (['Gold Rush', 'Shield', 'Time Warp', 'Voodoo'].includes(cardName)) {
        if (confirm(`Activate tactical buff "${cardName}"?`)) {
          if (!student.effects.includes(cardName)) student.effects.push(cardName);
          appData.reports.unshift({
            meeting: `Meeting #${meetingNum}`,
            timestamp: new Date().toLocaleString(),
            studentName: student.name,
            studentId: student.id,
            className: student.class,
            action: `Relic Buff Activated: ${cardName}`,
            type: 'card',
            change: `Buff Active`
          });
          removeCardIndexFromStudent(student, cardIndex);
        }
      }
    }

    function removeCardIndexFromStudent(student, cardIndex) {
      if (cardIndex > -1 && cardIndex < student.cards.length) {
        student.cards.splice(cardIndex, 1);
      }
      saveData();
    }

    function promptTargetSelection(actionName, actorStudent, onConfirmCallback) {
      const targets = appData.students.filter(s => s.class === actorStudent.class && s.id !== actorStudent.id);
      if (targets.length === 0) return alert('No valid target cadet available!');

      document.getElementById('targetModalTitle').textContent = `Target for ${actionName}`;
      document.getElementById('targetModalDesc').textContent = `Choose recipient from Sanctum ${actorStudent.class}:`;
      const listContainer = document.getElementById('targetStudentList');
      listContainer.innerHTML = '';

      targets.forEach(t => {
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between p-2 bg-slate-50 hover:bg-indigo-50 rounded-xl border border-indigo-100';
        div.innerHTML = `<span><strong>${t.nick}</strong> (${t.lp} LP)</span>`;
        const selectBtn = document.createElement('button');
        selectBtn.className = 'px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-headline text-xs font-bold rounded-lg';
        selectBtn.textContent = 'Select';
        selectBtn.onclick = () => { closeAllOverlays(); onConfirmCallback(t); };
        div.appendChild(selectBtn);
        listContainer.appendChild(div);
      });

      document.getElementById('targetModal').style.display = 'block';
    }

    /* STUDENT & CLASS MANAGEMENT */
    function addClass() {
      if (!requireTeacherAuth('add a new Sanctum class')) return;
      const input = document.getElementById('newClassNameInput');
      const name = input.value.trim();
      if (name && !appData.classes.includes(name)) {
        appData.classes.push(name);
        appData.currentClass = name;
        input.value = '';
        saveData();
        showAstralAnnouncement({
          title: 'Sanctum Created',
          badge: 'CLASS ENROLLED',
          message: `Class <strong>${escapeHtml(name)}</strong> has been added to the Sanctum registry.`,
          icon: 'domain_add',
          type: 'success',
          duration: 3000
        });
      }
    }

    function deleteSelectedClass() {
      if (!requireTeacherAuth('delete a Sanctum class')) return;
      const target = document.getElementById('deleteClassSelect').value;
      if (!target) {
        showAstralAnnouncement({
          title: 'Select Class',
          badge: 'SANCTUM SELECTION',
          message: 'Please choose a class from the dropdown to delete.',
          icon: 'warning',
          type: 'warning'
        });
        return;
      }
      if (confirm(`Erase entire Sanctum ${target} and its student records?`)) {
        appData.classes = appData.classes.filter(c => c !== target);
        appData.students = appData.students.filter(s => s.class !== target);
        appData.currentClass = appData.classes[0] || '';
        saveData();
        showAstralAnnouncement({
          title: 'Sanctum Removed',
          badge: 'CLASS DELETED',
          message: `Class <strong>${escapeHtml(target)}</strong> and its student records have been removed.`,
          icon: 'delete_sweep',
          type: 'info'
        });
      }
    }

    function addStudent() {
      if (!requireTeacherAuth('enlist a new cadet')) return;
      const cls = document.getElementById('addStudentClassSelect').value;
      const nameInput = document.getElementById('studentNameInput');
      const nickInput = document.getElementById('studentNickInput');

      const name = nameInput.value.trim();
      const nick = nickInput.value.trim() || name;

      if (cls && name) {
        appData.students.push({
          id: Date.now(),
          class: cls,
          name,
          nick,
          lp: 50,
          gold: 10,
          cards: [],
          totalCardsEarned: 0,
          totalGoldEarned: 10,
          effects: []
        });
        nameInput.value = '';
        nickInput.value = '';
        saveData();
        nameInput.focus();
        showAstralAnnouncement({
          title: 'Cadet Enlisted',
          badge: 'ROSTER UPDATED',
          message: `Cadet <strong>${escapeHtml(name)} (${escapeHtml(nick)})</strong> has been admitted to Sanctum Class ${escapeHtml(cls)}.`,
          icon: 'person_add',
          type: 'success',
          duration: 3000
        });
      }
    }

    function removeStudent(id) {
      if (!requireTeacherAuth('remove a cadet')) return;
      if (confirm('Remove this cadet from the roster?')) {
        appData.students = appData.students.filter(s => s.id !== id);
        if (selectedStudentId === id) selectedStudentId = null;
        saveData();
      }
    }

    function modifyGold(studentId, amount) {
      if (!requireTeacherAuth('modify cadet gold')) return;
      const student = appData.students.find(s => s.id === studentId);
      if (student) {
        student.gold += amount;
        if (amount > 0) student.totalGoldEarned = (student.totalGoldEarned || 0) + amount;

        const meetingNum = appData.currentMeeting || 1;
        appData.reports.unshift({
          meeting: `Meeting #${meetingNum}`,
          timestamp: new Date().toLocaleString(),
          studentName: student.name,
          studentId: student.id,
          className: student.class,
          action: amount > 0 ? 'Teacher Gold Award' : 'Teacher Gold Adjustment',
          type: 'gold',
          change: amount > 0 ? `+${amount} G` : `${amount} G`
        });

        saveData();
      }
    }

    // Req 4: Track pending avatar base64 string
    let pendingAvatarBase64 = null;

    function handleEditAvatarUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        pendingAvatarBase64 = e.target.result;
        const preview = document.getElementById('editAvatarPreview');
        if (preview) {
          preview.src = pendingAvatarBase64;
          preview.classList.remove('hidden');
        }
      };
      reader.readAsDataURL(file);
    }

    function openEditStudent(id) {
      if (!requireTeacherAuth('edit cadet profile')) return;
      const student = appData.students.find(s => s.id === id);
      if (!student) return;
      editingStudentId = id;
      pendingAvatarBase64 = null;
      document.getElementById('editNameInput').value = student.name;
      document.getElementById('editNickInput').value = student.nick;
      // Reset avatar preview
      const preview = document.getElementById('editAvatarPreview');
      if (preview) {
        if (student.avatar && student.avatar.startsWith('data:')) {
          preview.src = student.avatar;
          preview.classList.remove('hidden');
        } else {
          preview.src = '';
          preview.classList.add('hidden');
        }
      }
      const fileInput = document.getElementById('editAvatarInput');
      if (fileInput) fileInput.value = '';
      document.getElementById('editStudentModal').style.display = 'block';
    }

    function saveEditedStudent() {
      if (!requireTeacherAuth('save cadet edits')) return;
      if (!editingStudentId) return;
      const student = appData.students.find(s => s.id === editingStudentId);
      if (student) {
        const newName = document.getElementById('editNameInput').value.trim();
        const newNick = document.getElementById('editNickInput').value.trim();
        if (newName) {
          student.name = newName;
          student.nick = newNick || newName;
          // Req 4: Save base64 avatar if a new one was uploaded
          if (pendingAvatarBase64) {
            student.avatar = pendingAvatarBase64;
            pendingAvatarBase64 = null;
          }
          saveData();
          closeAllOverlays();
        }
      }
    }

    function resetLP() {
      if (!requireTeacherAuth('reset Class Life Points')) return;
      if (confirm(`Reset Life Points to 50 for all cadets in Class ${appData.currentClass}?`)) {
        const meetingNum = appData.currentMeeting || 1;
        const timestampStr = new Date().toLocaleString();

        appData.students.filter(s => s.class === appData.currentClass).forEach(s => {
          const diff = 50 - s.lp;
          s.lp = 50;

          const logEntry = {
            meeting: `Meeting #${meetingNum}`,
            timestamp: timestampStr,
            studentName: s.name,
            studentId: s.id,
            className: s.class,
            action: 'Class LP Reset',
            type: 'lp',
            change: diff >= 0 ? `+${diff} LP` : `${diff} LP`
          };
          appData.reports.unshift(logEntry);
          sendWebhookReport(logEntry);
        });

        saveData();
        showAstralAnnouncement({
          title: 'Sanctum LP Restored',
          badge: 'VITALITY RESET',
          message: `Life Points reset to 50 for all cadets in Class <strong>${escapeHtml(appData.currentClass)}</strong>.`,
          icon: 'healing',
          type: 'success'
        });
      }
    }

    function saveWebhookUrl() {
      if (!requireTeacherAuth('configure Google Sheets webhook')) return;
      const url = document.getElementById('webhookUrlInput').value.trim();
      appData.webhookUrl = url;
      saveData();
      showAstralAnnouncement({
        title: 'Webhook Connected',
        badge: 'CLOUD SYNC',
        message: 'Google Apps Script Webhook URL has been saved and configured for automated sheet reports.',
        icon: 'cloud_done',
        type: 'success'
      });
    }

    function goToManageGames() {
      showTab('settings');
      setTimeout(() => {
        const el = document.getElementById('manage-games-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    function openAddGameModal() {
      editingGameId = null;
      document.getElementById('gameModalTitle').textContent = 'Add New Game';
      document.getElementById('gameTitleInput').value = '';
      document.getElementById('gameIconInput').value = '🎮';
      document.getElementById('gameGoldInput').value = '3';
      document.getElementById('gamePathInput').value = 'game/';
      document.getElementById('gameModal').style.display = 'block';
    }

    function openEditGameModal(gameId) {
      const g = appData.games.find(x => x.id === gameId);
      if (!g) return;
      editingGameId = gameId;
      document.getElementById('gameModalTitle').textContent = 'Edit Game Info';
      document.getElementById('gameTitleInput').value = g.title;
      document.getElementById('gameIconInput').value = g.icon || '🎮';
      document.getElementById('gameGoldInput').value = g.goldReward;
      document.getElementById('gamePathInput').value = g.path;
      document.getElementById('gameModal').style.display = 'block';
    }

    function saveGameModal() {
      const title = document.getElementById('gameTitleInput').value.trim();
      const icon = document.getElementById('gameIconInput').value.trim() || '🎮';
      const goldReward = parseInt(document.getElementById('gameGoldInput').value) || 0;
      let path = document.getElementById('gamePathInput').value.trim();

      if (!title || !path) return alert('Title and Path are required!');
      if (!path.startsWith('game/')) path = 'game/' + path;

      if (editingGameId) {
        const g = appData.games.find(x => x.id === editingGameId);
        if (g) { g.title = title; g.icon = icon; g.goldReward = goldReward; g.path = path; }
      } else {
        appData.games.push({ id: 'game-' + Date.now(), title, icon, goldReward, path });
      }
      saveData();
      closeAllOverlays();
    }

    function deleteSingleGame(gameId) {
      if (confirm('Delete this game from the hub?')) {
        appData.games = appData.games.filter(g => g.id !== gameId);
        saveData();
      }
    }

    function copyGamesCodeToClipboard() {
      navigator.clipboard.writeText(JSON.stringify(appData.games, null, 2)).then(() => alert('Games JSON copied to clipboard!'));
    }

    function populateDropdowns() {
      const headerSelect = document.getElementById('headerClassFilter');
      if (headerSelect) {
        headerSelect.innerHTML = '';
        appData.classes.forEach(c => {
          const opt = document.createElement('option');
          opt.value = c;
          opt.textContent = `Class ${c} // Sanctum`;
          if (c === appData.currentClass) opt.selected = true;
          headerSelect.appendChild(opt);
        });
      }

      const delSelect = document.getElementById('deleteClassSelect');
      if (delSelect) {
        delSelect.innerHTML = '<option value="">-- Select Class --</option>';
        appData.classes.forEach(c => {
          const opt = document.createElement('option');
          opt.value = c;
          opt.textContent = `Class ${c}`;
          delSelect.appendChild(opt);
        });
      }

      const addStSelect = document.getElementById('addStudentClassSelect');
      if (addStSelect) {
        addStSelect.innerHTML = '';
        appData.classes.forEach(c => {
          const opt = document.createElement('option');
          opt.value = c;
          opt.textContent = `Class ${c}`;
          if (c === appData.currentClass) opt.selected = true;
          addStSelect.appendChild(opt);
        });
      }

      const webhookInput = document.getElementById('webhookUrlInput');
      if (webhookInput) webhookInput.value = appData.webhookUrl || '';

      const meetingInput = document.getElementById('headerMeetingInput');
      if (meetingInput) meetingInput.value = appData.currentMeeting || 1;
    }

    /* FILTER BUTTON LISTENERS */
    function initFilterButtons() {
      const search = document.getElementById('studentSearchInput');
      if (search) {
        search.addEventListener('input', (e) => {
          currentSearchQuery = e.target.value.trim();
          renderDisplay();
        });
      }

      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => {
            b.classList.remove('bg-primary', 'text-white', 'shadow-sm', 'shadow-indigo-200', 'active');
            b.classList.add('bg-white', 'text-slate-600', 'border', 'border-indigo-100');
          });

          btn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-indigo-100');
          btn.classList.add('bg-primary', 'text-white', 'shadow-sm', 'shadow-indigo-200', 'active');

          currentStatusFilter = btn.dataset.filter || 'all';
          renderDisplay();
        });
      });
    }

    function populateCommandDrawerSync() {
      // Keep command drawer class filter in sync with main app state
      const sel = document.getElementById('commandDrawerClassFilter');
      if (sel) {
        sel.innerHTML = '';
        appData.classes.forEach(c => {
          const opt = document.createElement('option');
          opt.value = c;
          opt.textContent = `Class ${c} // Sanctum`;
          if (c === appData.currentClass) opt.selected = true;
          sel.appendChild(opt);
        });
      }
      const meetInput = document.getElementById('commandDrawerMeetingInput');
      if (meetInput) meetInput.value = appData.currentMeeting || 1;
    }

    function syncCommandDrawerMeeting() {
      const val = parseInt(document.getElementById('commandDrawerMeetingInput').value) || 1;
      appData.currentMeeting = val;
      // Sync to header input
      const headerInput = document.getElementById('headerMeetingInput');
      if (headerInput) headerInput.value = val;
      saveData();
    }

    function render() {
      populateDropdowns();
      populateCommandDrawerSync();
      renderDisplay();
      renderTeacher();
      renderReportsTab();
      renderCardsLibrary();
      renderGames();
      updateShopHeader();
      updateSelectedStudentLabels();
    }

    // Req 2: Mobile Command Drawer (right-side)
    function toggleCommandDrawer(open) {
      const drawer = document.getElementById('commandDrawer');
      const overlay = document.getElementById('drawerOverlay');
      if (!drawer) return;
      if (open) {
        drawer.classList.remove('translate-x-full');
        overlay.style.display = 'block';
      } else {
        drawer.classList.add('translate-x-full');
        if (!document.getElementById('mainSidebar').classList.contains('-translate-x-full') === false) {
          overlay.style.display = 'none';
        } else {
          overlay.style.display = 'none';
        }
      }
    }

    // Override drawerOverlay click to also close command drawer
    document.getElementById('drawerOverlay').addEventListener('click', function () {
      toggleCommandDrawer(false);
      toggleMobileDrawer(false);
    });

    // Req 5: Tutorial Overlay
    const TUTORIAL_STEPS = [
      {
        icon: 'auto_awesome',
        title: '✦ Welcome to Class Quest Journal',
        body: 'This is your gamified classroom management system. Students become Cadets, grades become Life Points (LP), and participation earns Stardust Gold (GP).'
      },
      {
        icon: 'favorite',
        title: '🛡 Life Points (LP) System',
        body: 'Every cadet starts at 50 LP. Speaking native language during English Hour costs -1 LP. AWOL costs -3 LP. LP maps directly to grades — 50 LP = A+, below 25 LP = Danger Zone.'
      },
      {
        icon: 'toll',
        title: '🪙 Stardust Gold (GP)',
        body: 'Cadets earn Gold by participating in classroom games. Gold is spent in the Relic Shop to buy tactical cards that can protect, heal, or strategically affect other cadets.'
      },
      {
        icon: 'style',
        title: '🃏 Tactical Relic Cards',
        body: 'Cards like Time Warp, Shield, Voodoo, and Gold Rush can be played at key moments. Visit the Cards Library to learn what each card does and how much it costs.'
      },
      {
        icon: 'vpn_key',
        title: '🔑 Teacher Sign In & Access Codes',
        body: 'Teachers sign in via email/password or Google to unlock full roster controls. Each teacher gets a unique Access Code (e.g. CQ-XXXX) to share with students for viewer access.'
      },
      {
        icon: 'grid_view',
        title: '📊 Class Display & Rankings',
        body: 'The Class Display tab shows the live HUD of all cadets. Switch to Sanctum Ranking to see the leaderboard podium. Use Teacher Control to award gold, play cards, and adjust LP.'
      }
    ];
    let tutorialStep = 0;

    function openTutorialModal() {
      tutorialStep = 0;
      renderTutorialStep();
      document.getElementById('tutorialModal').style.display = 'block';
      document.getElementById('drawerOverlay').style.display = 'block';
    }

    function renderTutorialStep() {
      const step = TUTORIAL_STEPS[tutorialStep];
      const iconEl = document.getElementById('tutorialStepIcon');
      const titleEl = document.getElementById('tutorialStepTitle');
      const bodyEl = document.getElementById('tutorialStepBody');
      const counterEl = document.getElementById('tutorialStepCounter');
      const prevBtn = document.getElementById('tutorialPrevBtn');
      const nextBtn = document.getElementById('tutorialNextBtn');

      if (iconEl) iconEl.textContent = step.icon;
      if (titleEl) titleEl.textContent = step.title;
      if (bodyEl) bodyEl.textContent = step.body;
      if (counterEl) counterEl.textContent = `${tutorialStep + 1} / ${TUTORIAL_STEPS.length}`;
      if (prevBtn) prevBtn.disabled = (tutorialStep === 0);
      if (nextBtn) nextBtn.textContent = (tutorialStep === TUTORIAL_STEPS.length - 1) ? 'Finish Guide' : 'Next →';
    }

    function tutorialNext() {
      if (tutorialStep < TUTORIAL_STEPS.length - 1) {
        tutorialStep++;
        renderTutorialStep();
      } else {
        closeAllOverlays();
      }
    }

    function tutorialPrev() {
      if (tutorialStep > 0) {
        tutorialStep--;
        renderTutorialStep();
      }
    }

    // Initialize application immediately with cache for fast layout (Firebase overrides on callback)
    initFilterButtons();
    updateAuthUI();
    render();
    document.addEventListener('DOMContentLoaded', render);
    window.addEventListener('load', render);
