package com.starwarmovies;

import android.os.Build;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class DeviceInfoModule extends ReactContextBaseJavaModule {

    public DeviceInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "DeviceInfoModule";
    }

    @ReactMethod
    public void getDeviceInfo(Callback callback) {
        try {
            // Versão do sistema operacional
            String osVersion = Build.VERSION.RELEASE;

            // Modelo do dispositivo
            String deviceModel = Build.MODEL;

            // Versão do aplicativo
            String appVersion = getCurrentAppVersion();

            String deviceInfo = "Versão: " + appVersion + " - " + "Android " + osVersion + " - " + deviceModel;

            callback.invoke(null, deviceInfo);
        } catch (Exception e) {
            callback.invoke(e.getMessage(), null);
        }
    }

    private String getCurrentAppVersion() {
        try {
            return getReactApplicationContext().getPackageManager().getPackageInfo(
                    getReactApplicationContext().getPackageName(), 0).versionName;
        } catch (Exception e) {
            return "N/A";
        }
    }
}
