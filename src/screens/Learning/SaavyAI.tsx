import colors from '@/assets/Colors';
import BasicInput from '@/lib/components/FormInputs/BasicInput';
import InvestmentSuites from '@/lib/components/InvestmentSuitesScroll';
import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import ChatCards from './components/ChatCards';

const SaavyAIChatbotScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <InvestmentSuites heading="What to Learn" />
      </View>
      <ScrollView
        contentContainerStyle={styles.chatWrapper}
        showsVerticalScrollIndicator={false}>
        <View style={styles.aiMessages}>
          <ChatCards
            variant="AI"
            content="Hi, I’m Saavy, your investment assistant. I help you learn, invest,
          and grow. Chat with me to find the best opportunities for you. Let’s
          go! 👍"
          />
          <ChatCards
            variant="AI"
            content="What are the benefits of using Saavy?"
            suggestion
          />
        </View>
        <ChatCards
          variant="user"
          content="Explain to me like i'm a beginner, how mutual funds works"
          userImage={require('@/assets/images/avatar.png')}
        />
        <View style={styles.aiMessages}>
          <ChatCards
            variant="AI"
            content="A mutual fund is an investment that pools together money from many investors and uses it to buy a basket of securities like stocks or bonds. By buying a mutual fund, you are owning a small portion of all the investments in that fund. This way, you can diversify your portfolio and reduce your risk without having to research and buy individual securities yourself."
          />
        </View>
      </ScrollView>
      <View style={styles.inputWrapper}>
        <BasicInput
          iconStart="ai_icon"
          iconEnd="ai_send"
          type="text"
          placeholder="Ask me anything..."
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_9,
    flex: 1,
  },
  wrap: {
    marginLeft: 24,
    marginBottom: 16,
  },
  chatWrapper: {
    marginHorizontal: 24,
    gap: 24,
    alignItems: 'flex-end',
  },
  inputWrapper: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  aiMessages: {
    width: '100%',
    alignItems: 'flex-end',
    gap: 4,
  },
});

export default SaavyAIChatbotScreen;
