package com.hfad.poolNotification;

//Android Development he is this kind of developer? $?//
<string name="app_name">Pool</string>
<string name="permission_denied">No Queues Listed</string>

import android.app.Activity;
import android.os.Bundle;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.widget.TextView;

import java.util.Locale;

import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v4.app.NotificationCompat;
import android.app.NotificationManager;
import android.app.PendingIntent;

public class PoolNotification extends MainActivity 
{

    NotificationCompat.Builder builder = new NotificationCompat.Builder(this)
                    .setSmallIcon(android.R.drawable.ic_men_compass)
                    .setContentTitle("Query Was Displayed")
                    .setPriority(NotificationCompat.PRIORITY_HIGH)
                    .setVibrate(new long[] {0, 1000})
                    .   setAutoCancel   (true);
    Intent actionIntent = new Intent(this, MainActivity.class);
    PendingIntent actionPendingIntent = PendingIntent.getActivity (this, 0,
                            actionIntent, PendingIntent.FLAG_UPDATE_CURRENT);
    builder.setContentIntent( actionPendingIntent );
    
    NotificationManager notificationManager = 
                        (NotificationManage) getSystemService( NOTIFICATION_SERVICE );
    notificationManager.notify(43, builder.build() );
    
});
